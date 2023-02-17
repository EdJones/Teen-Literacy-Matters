<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>

        <GridLayout class="" rows="auto,*">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical" row="0">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
          <Label class="text-2xl text-center" text="How Kids Learn to Read"  />
            <Label class="text-base leading-none p-4 pb-0" text="In order to start helping more kids, we need to look inside them." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="We need to see what's going on inside their brains." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="It's really not what people expected!" textWrap="true" />
             <XPCard2 v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPCard2>             
          </StackLayout>
          <StackLayout row="1" class="mb-8" >
          <Button class="btn-b" width="100" text="Back to Intro" @tap="goBack" />
        </StackLayout>


        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  import { SelectedPageService } from "../shared/selected-page-service";

  import XPModalA from "./XPModalA";
  //import { XPCard }  from "../WebpackHack.js";
  //import XPCard from "./XPCard";
  import XPCard2 from "./XPCard2";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import ProgressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("SoldAStory");
    },
    components: {
      XPCard2
  },
    data() {
      const page="HowKidsRead1";
      const pageInfo = preparePageInfo(page, topicPages);
    //console.info("HowKidsRead1e>data(), pageInfo is: ", pageInfo);
    console.info("HowKidsRead1>data, pageInfo[0].page is: ", pageInfo[0].page );
      
    const pageXPDetails = preparePageDetails(pageInfo[0], XPs);

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
