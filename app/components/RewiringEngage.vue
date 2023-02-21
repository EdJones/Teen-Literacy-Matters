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
            <Label class="text-2xl text-center" text="It's Not Natural"  />
            <Label class="text-base leading-none font-light p-4 pb-0" text="Once we start to ask why SOME kids don't read naturally, it's a pretty obvious step to ask, 'How do human brains do this? Joe Hanson starts us off." textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="Why does Joe say `It's pretty weird that we can read at all`?" textWrap="true" />
            <TextViewWithHint width="400" height="150" class="text-black input-gray text-xl" editable="true" v-model="textViewValue1" hint="" returnKeyType="next" > </TextViewWithHint>
            <Button class="btn-b" text="Enter" @tap="acceptInput" />  
          </StackLayout>
        </PreviousNextView>
        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { Dialogs } from '@nativescript/core';
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  import PrisonEngage3 from "./PrisonEngage3";
  import Rewiring2 from "./Rewiring2";
  import PathToReading from './PathToReading';
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: 'Thank you',
    message: 'Keep going!',
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
      const page="RewiringEngage";
    const pageXPDetails = XPs.filter(XP => {
        //console.info("In page filter, ", XP );
      return XP.Page.includes(page);
     });
    // console.info("In page filter, topicPage is", topicPages[3]);

    const pageInfo = topicPages.filter(topicPage => {
        console.info("In page filter 2, ", topicPage );
    //  return topicPage.page.includes(page);
     });
    // pageInfo = topicPages[1];
    
    // console.info("In data, pageInfo is: ", pageInfo);
    // console.info("In data, topicPage.page is: ", pageInfo[0].page );
    // console.info("In data, topicPage.title is: ", topicPages[3].title );
    // console.info("In data, topicPage.challenge is: ", topicPages[3].challenge );

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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Rewiring Engage Input", this.textViewValue1,this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(PathToReading);
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
