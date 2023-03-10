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
          <!--PreviousNextView-->
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-4" />
            <Label class="text-2xl text-center" :text="pageInfo.challenge"  />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text1" textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text2" textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text3" textWrap="true" />
            <XPCard2 :xpObj="pageXPDetails[0]" ></XPCard2>
            <TaskView :task="task" class=""></TaskView>
            <Button class="btn-b" text="Enter" @tap="acceptInput" />  
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text5" textWrap="true" />
             <!--XPCard2 :xpObj="pageXPDetails[1]" ></XPCard2--> 
          </StackLayout>
        <!--/PreviousNextView-->
        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  import { Dialogs } from '@nativescript/core';
  import XPCard2 from "./XPCard2";
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  import { Tasks } from "../data/Task_list.js";
  import TaskView from "./TaskView.vue";
  import Tools4BrainScience from "./Tools4BrainScience";
  //import HowKidsRead from './';
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: '',
    message: 'Keep going!',
    okButtonText: 'Next',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("LetterBox2");
    },
    components: {
      XPCard2,
      TaskView
  },
    data() {
      const page="LetterBox2";
      const pageInfo = preparePageInfo(page, topicPages);
      //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
      console.info("In LetterBox2>data, pageInfo[0].page is: ", pageInfo[0].page );
      console.info("In LetterBox2>data, pageInfo[0].page is: ", pageInfo[0].page );
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
      const task=Tasks[pageInfo[0].task];

    return {
      pageXPDetails: pageXPDetails,
      pageInfo: pageInfo[0],
      topicPages: topicPages,
      task: task,
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Letterbox2 Input", this.textViewValue1,this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(Tools4BrainScience);
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
