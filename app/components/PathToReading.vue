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
        <GridLayout class="" rows="auto,*">
            <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical" row="0" >
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-4" />
            <Label class="text-1xl text-center" text="The Path to Reading is Through Sound" textWrap="true"  />
            <Label class="text-base leading-none font-light p-4 pb-0" text="It's the least expected thing, to most people. You'd think seeing the word 'dog' in print would go straight to a mental outline of a four-legged animal. Right?" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="Yet it doesn't." textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="In 1987, the Van Orden experiments proved the unexpected opposite:" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0 italic" text="We all process written words as sounds." textWrap="true" />
            <TaskView :task="task" @updateTaskResponses="taskResponses = $event" class=""></TaskView>
          </StackLayout>
          <StackLayout row="1" class="py-4">
            <Button class="mx-auto btn-b" width="200" opacity=".6" text="Back to How Kids Read" @tap="goBack" />
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
  import { topicPages } from "../data/pages_list.js";
  import { XPs } from "../data/xp_list.js";
  import { Tasks } from "../data/Task_list.js";
  import TaskView from "./TaskView.vue";
  import PathToReading2 from "./PathToReading2";
  //import ProgressBar from "./ProgressBar";
  //import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: '',
    message: 'Keep going!',
    okButtonText: 'Next',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("PathToReading");
    },
    components: {
      TaskView
  },
    data() {
      const page="PathToReading";
      const nextPage="PathToReading2"
      const pageInfo = preparePageInfo(page, topicPages);
    //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
      console.info("In ", page, ">data, pageInfo[0].page is: ", pageInfo[0].XPs );   
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
      const task=Tasks[2];
      const taskResponses = ["", ""];

    return {
      pageXPDetails: pageXPDetails,
      pageInfo: pageInfo[0],
      topicPages: topicPages,
      task: task,
      taskResponses: taskResponses
    };
  },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    watch: {
        taskResponses(newtaskResponses, oldtaskResponses) {
            console.log("Watcher updated");
            console.info(newtaskResponses);
            this.acceptInput();
        },
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }, 
      goBack() {
            console.log("Done with ", this.page);
            this.$navigateBack();
        },
      acceptInput() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$ ", this.page, "Input: ", this.taskResponses);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(PathToReading2);
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
