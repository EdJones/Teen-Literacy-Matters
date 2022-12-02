<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>

        <GridLayout class="">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24" />
          <Label class="text-2xl text-center" text="A Hard Truth"  />
            <Label class="text-base leading-none p-4 pb-0" text="Imagine an urban school. It's near the asian district of a major city, across the freeway from the downtown, sports, and cultural areas. It borders neighborhoods of government housing complexes and abandoned brick factory buildings." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="The school is small. Unlike the nearby comprehensive high schools, this one is a special school, created and run by a special principal." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="Principal Juli was brought to this city because of his track record with difficult urban schools. He was known among progressive educators across the country, as a gentle, compassionate, inventive soul." textWrap="true" />
             <!--XPcard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPcard-->
             <XPCard :xpObj="pageXPDetails[0]" ></XPCard>

             
 <!--Button text="Next" @tap="showModal(next)" class="button-active help-button page-link" width="50%" /-->
          </StackLayout>

          <!--StackLayout  class="p-20">
            <StackLayout>
              <Label class="challenge-label" :text="pageInfo.challenge" textWrap="true" ></Label>
            </StackLayout>
            <StackLayout>
            <Label :text="pageInfo.text1"  class="text-para" textWrap="true"  ></Label>

            </StackLayout>
             <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->


          <!--/StackLayout-->

        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";

  import XPModalA from "./XPModalA";
  import XPCard from "./XPCard";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Introduction");
    },
    components: {
   // ProgressBar,
    XPCard,
    //XPCardSmall
  },
    data() {
      const page="HardTruth";
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
