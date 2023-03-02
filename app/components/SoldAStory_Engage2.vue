<template>
<Page class="page">
    <ActionBar class="action-bar">
        <NavigationButton visibility="hidden" />
        <GridLayout columns="*, 70">
            <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

            <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
    </ActionBar>

    <GridLayout class="" rows="*, 80">
        <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
        <PreviousNextView>
            <StackLayout orientation="vertical" row="0">
                <Label class="text-2xl text-center" text="Sold A Story" />
                <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
                <Label class="text-base leading-none p-4 pb-0" text="1)" textWrap="true" />
                <TextViewWithHint width="200" height="45" class="text-black input-gray text-xl" editable="true" v-model="textViewValue1" hint="First type of response" returnKeyType="done"> </TextViewWithHint>

                <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
                <Label class="text-base leading-none p-4 pb-0" text="2) " textWrap="true" />
                <TextViewWithHint width="200" class="text-black input-gray text-xl" editable="true" v-model="textViewValue2" hint="Second type of response" returnKeyType="done"> </TextViewWithHint>
                <Button class="btn-b" text="Submit" @tap="acceptInput" />

                <!--XPcard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPcard-->

            </StackLayout>
        </PreviousNextView>
        <StackLayout row="1" class="mb-8">
            <Button class="btn-b" width="100" text="Back" @tap="goBack" />
        </StackLayout>

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
    XPs
} from "../data/xp_list.js";
//import P rogressBar from "./ProgressBar";
import {
    topicPages
} from "../data/pages_list.js";

const alertOptions = {
    title: '',
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
    },
    data() {
        const page = "SoldAStory";
        const pageXPDetails = XPs.filter(XP => {
            //console.info("In page filter, ", XP );
            return XP.Page.includes(page);
        });
        // console.info("In page filter, topicPage is", topicPages[3]);

        const pageInfo = topicPages.filter(topicPage => {
            console.info("In page filter 2, ", topicPage);
            return topicPage.page.includes(page);
        });
        // pageInfo = topicPages[1];

        console.info("In data, pageInfo is: ", pageInfo);
        console.info("In data, topicPage.page is: ", pageInfo[0].page);
        // console.info("In data, topicPage.title is: ", topicPages[3].title );
        // console.info("In data, topicPage.challenge is: ", topicPages[3].challenge );

        return {
            pageXPDetails: pageXPDetails,
            pageInfo: pageInfo[0],
            topicPages: topicPages
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
            console.log("$$$$$$$$$$$$$  SoldAStory Input", this.textViewValue1, this.textViewValue2);
            let now = new Date();
            let docNum = now.getTime();
            console.log("Now: ", docNum);

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
