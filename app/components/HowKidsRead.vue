<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" :text="pageInfo.title" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>
      <ScrollView >
        <FlexboxLayout 
            flexDirection="column" 
            justifyContent="space-between" 
            alignItems="stretch" >
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical" height="100%" row="0">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
            <Label class="text-2xl text-center" :text="pageInfo.challenge" textWrap="true"  />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text2" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text3" textWrap="true" />
            <XPCard5 v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPCard5>
          </StackLayout>
          <StackLayout row="1" class=""  >
          <Button class="btn-b" opacity=".6" width="170" text="Back to First Steps" @tap="goBack" />
        </StackLayout>
      </FlexboxLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  //import XPModalA from "./XPModalA";
  import XPCard5 from "./XPCard5";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
  import { topicPages } from "../data/pages_list.js";
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("End");
    },
    components: {
      XPCard5
  },
    data() {
      const page="HowKidsRead";
      const pageInfo = preparePageInfo(page, topicPages);

      console.info("HowKidsRead>data, pageInfo[0].page is: ", pageInfo[0].page );   
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
      console.info("@@@@@@@@@@@@@@@@@@@@@@@ Data block for ", page, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
      console.info("In page ", page, ">data(), pageXPDetails is: ", pageXPDetails);

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
      goBack() {
        console.log("Done with HowKidsRead");
        this.$navigateBack();
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
