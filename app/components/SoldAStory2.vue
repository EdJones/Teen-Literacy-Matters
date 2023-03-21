<template>
<Page class="page">
    <ActionBar class="action-bar">
        <NavigationButton visibility="hidden" />
        <GridLayout columns="*, 80">
            <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

            <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
    </ActionBar>
    <ScrollView row="1" height="auto">
        <GridLayout class="" rows="auto,*">
            <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
            <StackLayout orientation="vertical" row="0">
                <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
                <Label class="text-2xl text-center" text="Sold A Story" />
                <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
                <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
                <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
                <!--XPcard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPcard-->
                <XPCard :xpObj="pageXPDetails[0]"></XPCard>
                <TaskView :task="task" @updateTaskResponses="taskResponses = $event" class=""></TaskView>

            </StackLayout>
            <StackLayout row="1" class="py-4">
                <Button class="pt-4 btn-b" width="100" text="Back to Intro" @tap="goBack" />
            </StackLayout>

        </GridLayout>
    </ScrollView>
</Page>
</template>

<script>
import * as utils from "~/shared/utils";
import {
    Dialogs
} from '@nativescript/core';
import {
    SelectedPageService
} from "../shared/selected-page-service";
import { preparePageInfo, preparePageDetails } from "./pageData.js";
import XPModalA from "./XPModalA";
import XPCard from "./XPCard";
//import XPCardSmall from "./XPCardSmall";
import {
    XPs
} from "../data/xp_list.js";
//import P rogressBar from "./ProgressBar";
import {
    topicPages
} from "../data/pages_list.js";
import {
    Tasks
} from "../data/Task_list.js";
import TaskView from "./TaskView.vue";
//import SoldAStory2 from "./SoldAStory";

const alertOptions = {
            title: '',
            message: 'Keep going!',
            okButtonText: 'Okay',
            cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
        };

export default {
    mounted() {
        SelectedPageService.getInstance().updateSelectedPage("SoldAStory2");
    },
    components: {
        XPCard,
        TaskView
    },
    data() {
        const page = "SoldAStory2";
        const pageInfo = preparePageInfo(page, topicPages);
        console.info("In SoldASTor>data, pageInfo[0].page is: ", pageInfo[0].page );
        const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
        const task = Tasks[7];
        const textViewValue1 = "";
        const textViewValue2 = "";
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
            console.log("Done with soldAStory engage");
            this.$navigateBack();
        },
        acceptInput() {
            console.log("$$$$$$$$$$$$$  Sold a Story 2 Input", this.taskResponse);

            /*
                this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
            this.$store.commit('addXP', {XP: "XP3000"});
            */
            Dialogs.alert(alertOptions).then(() => {
              //  this.$navigateTo(SoldAStory3);
              this.$navigateBack();
              this.$navigateBack();
            })
        },
    }
};
</script>

<style lang="scss" scoped>
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
