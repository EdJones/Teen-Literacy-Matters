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
        <GridLayout class="" rows="*,100">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical" row="0">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
            <Label class="text-2xl text-center" :text="pageInfo.challenge" textWrap="true"  />
            <Label class="text-base leading-none font-light p-4 pb-0" :text="pageInfo.text1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text2" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text3" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.text4" textWrap="true" />
         </StackLayout>
          <StackLayout row="1" class="mb-4" >
          <Button class="btn-b" width="170" text="How Kids Learn" @tap="goTo()" />
        </StackLayout>
        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  import XPCard2 from "./XPCard2";
  import HowKidsRead from "./HowKidsRead";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
  import { topicPages } from "../data/pages_list.js";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("EndIntro");
    },
    components: {
      XPCard2
  },
    data() {
      const page="EndIntro";
      const pageInfo = preparePageInfo(page, topicPages);
    //console.info("RewiringEngage>data(), pageInfo is: ", pageInfo);
      console.info("End>data, pageInfo[0].page is: ", pageInfo[0].page );   
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);
      console.info(page);

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
        console.log("Done with soldAStory engage");
        this.$navigateBack();
      },
      goTo() {
        this.$navigateTo(HowKidsRead);
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
