<template>
<Page class="page">
    <ActionBar class="action-bar">
        <NavigationButton visibility="hidden" />
        <GridLayout columns="*, 50">
            <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

            <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
    </ActionBar>

    <GridLayout class="" rows="auto,*">
        <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
        <StackLayout orientation="vertical" row="0">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
            <Label class="text-2xl text-center" text="Stumped by the Words 2" />
            <XPCard2 v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail"></XPCard2>
            <TaskView :task="task" @updateTaskResponses="taskResponses = $event" class=""></TaskView>
        </StackLayout>
        <StackLayout row="1" class="mt-32">
            <Button class="btn-b" width="100" text="Back to Intro" @tap="goBack" />
        </StackLayout>

    </GridLayout>
</Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../shared/selected-page-service";
import { Dialogs } from '@nativescript/core';
import {
    preparePageInfo,
    preparePageDetails
} from "./pageData.js";
import XPModalA from "./XPModalA";
import XPCard2 from "./XPCard2";
import { XPs } from "../data/xp_list.js";
//import P rogressBar from "./ProgressBar";
import {
    topicPages
} from "../data/pages_list.js";
import {
    Tasks
} from "../data/Task_list.js";
import TaskView from "./TaskView.vue";
import Prison3 from "./Prison3"

const alertOptions = {
    title: '',
    message: 'Keep going!',
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};

export default {
    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("Prison2");
    },
    components: {
        XPCard2,
        TaskView
    },
    data() {
        const page = "Prison2";
        const pageInfo = preparePageInfo(page, topicPages);
        const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
        const task = Tasks[pageInfo[0].task];
        console.info("In data, topicPage.page is: ", pageInfo[0].page);
        console.info("In data, topicPage.task is: ", pageInfo[0].task);
        console.info("In data, topicPage.task is: ", task);
        const textViewValue1 = "";
        const textViewValue2 = "";
        const taskResponses = ["", ""];

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
        acceptInput() {
            console.log("$$$$$$$  Prison 2 input ", this.taskResponse);

            /*
                this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
            this.$store.commit('addXP', {XP: "XP3000"});
            */
            Dialogs.alert(alertOptions).then(() => {
                this.$navigateTo(Prison3);
            })
        },
        goBack() {
            console.log("Done with prison engage");
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
