<template>
<ScrollView>
    <GridLayout class="border-dotted border-2 bg-slate-50 rounded-md m-2">
        <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
        <!--PreviousNextView-->
        <StackLayout orientation="vertical" class="mt-2">
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-2" :text="task.prompt1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="task.prompt1a" textWrap="true" />
            <TextView width="360" height="50" class="text-black input-gray text-xl" editable="true" v-model="textViewValue1" :hint="task.hint1" returnKeyType="next"> </TextView>
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-4" :text="task.prompt2" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="task.prompt2a" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="task.prompt2b" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="task.prompt2c" textWrap="true" />
            <TextViewWithHint width="360" height="80" class="text-black input-gray text-xl" editable="true" v-model="textViewValue2" :hint="task.hint2" returnKeyType="next"> </TextViewWithHint>

        </StackLayout>
        <!--/PreviousNextView-->
    </GridLayout>
</ScrollView>
</template>

<script>
import * as utils from "~/shared/utils";
import {
    preparetask,
    preparePageDetails
} from "./pageData.js";
import {
    Dialogs
} from '@nativescript/core';
import { Tasks } from "../data/Task_list.js";
//import ProgressBar from "./ProgressBar";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: '',
    message: 'Keep going!',
    okButtonText: 'Next',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};
export default {
    name: "TaskView",
    props: {
        task: {
            type: Object,
            required: true
        },
    },
    mounted() {},
    components: {

    },
    data() {
      return {
      //task: task,
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
            console.log("$$$$$$$$$$$$$  Input for task ", this.textViewValue1, this.textViewValue2);
            let now = new Date();
            let docNum = now.getTime();
            console.log("Now: ", docNum);
            /*

                this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
            this.$store.commit('addXP', {XP: "XP3000"});
            */
            Dialogs.alert(alertOptions).then(() => {
                //this.$navigateTo(PathToReading3);
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
