<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters - Brains" />
          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>
      <ScrollView>
        <GridLayout class="">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <PreviousNextView>
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-4" />
            <Label class="text-2xl text-center" :text="pageInfo.title" textWrap="true"  />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text2" textWrap="true" />
            <XPCard2 v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPCard2> 
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-8" text="When we say 'a brain area becomes `activated`'', what is happening inside the brain tissue?" textWrap="true" />
            <TextViewWithHint width="360" height="150" class="text-black input-gray text-xl mt-8" editable="true" v-model="textViewValue1" hint="" returnKeyType="next" > </TextViewWithHint>
           <Button class="btn-b" text="Enter" @tap="acceptInput" /> 
          </StackLayout>
        </PreviousNextView>
        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { Dialogs } from '@nativescript/core';
  import XPCard2 from "./XPCard2";
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  import Rewiring2 from "./Rewiring2";
  //import ProgressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: 'Yes, thank you!',
    message: 'Keep going!',
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Tools4BrainScience");
    },
    components: {
      XPCard2
  },
    data() {
      const page="Tools4BrainScience";
      const pageInfo = preparePageInfo(page, topicPages);
    //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
      console.info("Tools4BarinScience>data, pageInfo[0].page is: ", pageInfo[0].page );   
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);

    return {
      pageXPDetails: pageXPDetails,
      pageInfo: pageInfo[0],
      topicPages: topicPages,
      textViewValue1: "",
      textViewValue2: ""
    };
  },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }, 
      
      acceptInput() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$   Input", this.textViewValue1,this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(Rewiring2);
})
},


    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
