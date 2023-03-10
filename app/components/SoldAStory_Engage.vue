<template>
<Page class="page">
    <ActionBar class="action-bar">
        <NavigationButton visibility="hidden" />
        <GridLayout columns="*, 50">
            <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />
            <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
    </ActionBar>

    <GridLayout class="" rows="*, 80">
        <PreviousNextView>
            <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
            <StackLayout row="0" orientation="vertical">
                <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
                
                <Label class="text-center" :text="taskResponses[1]" />
                <TaskView :task="task" @updateTaskResponses="taskResponses = $event" class=""></TaskView><Button class="btn-b" text="Submit" @tap="acceptInput" />
            </StackLayout>
          </PreviousNextView>
            <StackLayout row="1" class="mb-8">
                <Button class="btn-b" width="100" text="Back" @tap="goBack" />
            </StackLayout>
        </PreviousNextView>

    </GridLayout>
</Page>
</template>

<script>
import * as utils from "~/shared/utils";
import {
    SelectedPageService
} from "../shared/selected-page-service";
import {
    Dialogs
} from '@nativescript/core';
import XPModalA from "./XPModalA";
//import { XPCard }  from "../WebpackHack.js";
//import XPCard from "./XPCard";
// import XPCard2 from "./XPCard2";
//import XPCardSmall from "./XPCardSmall";
import {
    XPs } from "../data/xp_list.js";
//import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
import { preparePageInfo, preparePageDetails } from "./pageData.js";
import { Tasks } from "../data/Task_list.js";
import TaskView from "./TaskView.vue";

const alertOptions = {
    title: 'Thank you',
    message: 'Keep going!',
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};
export default {
    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("SoldAStory");
    },
    components: {
        //  XPCard2
        TaskView
    },
    data() {
        const page = "SoldAStory";
        const pageInfo = preparePageInfo(page, topicPages);
      //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
        console.info("In LetterBox2>data, pageInfo[0].page is: ", pageInfo[0].page );
        const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
        const task=Tasks[6];
        const textViewValue1 = "";
        const textViewValue2 = "";
        const taskResponses = ["blue", "fuschia"];
        return {
            pageXPDetails: pageXPDetails,
            pageInfo: pageInfo[0],
            topicPages: topicPages,
            task: task,
            textViewValue1: textViewValue1,
            textViewValue2: textViewValue2,
            taskResponses: taskResponses
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
            //console.log("$$$$$$$  SoldAStory Input", this.textViewValue1, this.textViewValue2);
            let now = new Date();
            let docNum = now.getTime();
            console.log("Now: ", docNum);
            console.log("textViewValue1: ", this.textViewValue1);

            Dialogs.alert(alertOptions).then(() => {
                this.$navigateBack();
                // this.$navigateTo(Dashboard, {
                //        clearHistory: true
                //    });
            })
        },
        goBack() {
            this.$navigateBack();
        }
    }
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
