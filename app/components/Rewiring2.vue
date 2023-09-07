<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton visibility="hidden" />
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
            <Label class="text-2xl text-center" :text="pageInfo.challenge" textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text2" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text3" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-8" :text="pageInfo.closingText"
              textWrap="true" />
            <Button class="btn-b mt-16" width="250" text="The Path to Reading'" @tap="navigateTo" />
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
//import HowKidsRead from "./HowKidsRead";
import { topicPages } from "../data/pages_list.js";
import PathToReading from "./PathToReading.vue";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
  title: 'Thank you',
  message: 'Keep going!',
  okButtonText: 'Okay',
  cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
};
export default {
  mounted() {
    SelectedPageService.getInstance().updateSelectedPage("Rewiring2");
  },
  components: {
    //  XPCard2
  },
  data() {
    const page = "Rewiring2";
    const pageInfo = preparePageInfo(page, topicPages);
    //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
    console.info("In RewiringEngage>data, pageInfo[0].page is: ", pageInfo[0].page);

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
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Rewiring Input", this.textViewValue1, this.textViewValue2);
      let now = new Date();
      let docNum = now.getTime();
      console.log("Now: ", docNum);
      /*
      
          this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
      this.$store.commit('addXP', {XP: "XP3000"});
      */
      Dialogs.alert(alertOptions).then(() => {
        this.$navigateTo(Intro);
      })
    },
    navigateTo() {
      this.$navigateTo(PathToReading);
    }

  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
</style>
