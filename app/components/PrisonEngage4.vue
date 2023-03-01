<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters - Prison" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>
      <ScrollView>
        <GridLayout class="">
         
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <PreviousNextView>
          <StackLayout orientation="vertical">
            
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-4" />
          
            <Label class="text-base leading-none font-light p-4 pb-0" text="Early in this(~2:227), we hear from a mother who says:" textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="I knew that my son had a problem, in first grade, when I was..." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="...And for many parents, we get tears,..I was right.." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="...my child is finally getting help. And you get the tears..." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="'But they're...'" textWrap="true" />
            <TextViewWithHint width="80%" height="45" class="input-gray text-black text-xl" editable="true" v-model="textViewValue2" hint="But they're..." returnKeyType="done" > </TextViewWithHint>
          
            <Button class="btn-b" text="Submit" @tap="acceptInput" />
          
            

             
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
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: '',
    message: 'Great!',
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("PrisonEngage");
    },
    components: {
    //  XPCard2
  },
    data() {
      const page="Prison";
      const pageInfo = preparePageInfo(page, topicPages);
      console.info("PrisonEngage4>data, pageInfo[0].page is: ", pageInfo[0].page );   
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Prison Engage 3 Input", this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
  // this.$navigateTo(Prisoncopy);
  this.$navigateBack();
  this.$navigateBack();
  this.$navigateBack();
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
