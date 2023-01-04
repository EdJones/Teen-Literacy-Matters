<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>
      <ScrollView >
        <GridLayout class="" rows="auto,*">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical" row="0">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
          <Label class="text-2xl text-center" text="How Kids Learn to Read"  />
            <Label class="text-base leading-none p-4 pb-0" text="We looked at what happens when kids aren't taught to read. Some pretty bad things happen to some of those kids." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="But why don't these kids learn, while many other kids do?" textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="We need to look inside kids' brains." textWrap="true" />
             <XPCard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPCard>
             <!--XPCard2 :xpObj="pageXPDetails[0]" ></XPCard2>
             <XPCard2 :xpObj="pageXPDetails[1]" ></XPCard2>
             <XPCard2 :xpObj="pageXPDetails[2]" ></XPCard2>
             <XPCard2 :xpObj="pageXPDetails[3]" ></XPCard2-->

             
          </StackLayout>
          <StackLayout row="1" class="mb-8" >
          <Button class="btn-b" width="100" text="Back to Intro" @tap="goBack" />
        </StackLayout>


        </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";

  import XPModalA from "./XPModalA";
  //import { XPCard }  from "../WebpackHack.js";
  //import XPCard from "./XPCard";
  import XPCard from "./XPCard";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("SoldAStory");
    },
    components: {
      XPCard
  },
    data() {
      const page="HowKidsRead";
    const pageXPDetails = XPs.filter(XP => {
        //console.info("In page filter, ", XP );
      return XP.Page.includes(page);
     });
    // console.info("In page filter, topicPage is", topicPages[3]);

    const pageInfo = topicPages.filter(topicPage => {
        console.info("In page filter 2, ", topicPage );
      return topicPage.page.includes(page);
     });
    // pageInfo = topicPages[1];
    
     console.info("In data, pageInfo is: ", pageInfo);
     console.info("In data, topicPage.page is: ", pageInfo[0].page );
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
