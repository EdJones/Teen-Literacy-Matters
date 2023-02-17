<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
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
            <Label class="text-2xl text-center" text="The Path to Reading is Through Sound" textWrap="true"  />
            <Label class="text-base leading-none font-light p-4 pb-0" text="It's the least expected thing, to most people. You'd think seeing the word 'dog' in print would go straight to a mental outline of a four-legged animal. Right?" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="Yet it doesn't." textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="In 1987, the Van Orden experiments proved the unexpected opposite:" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0 italic" text="We all process written words as sounds." textWrap="true" />
            
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-8" text="Write that last insight here:" textWrap="true" />
            <TextViewWithHint width="360" height="150" class="text-black input-gray text-xl mt-8" editable="true" v-model="textViewValue1" hint="" returnKeyType="next" > </TextViewWithHint>

            <Button class="btn-b" text="Enter" @tap="acceptInput" />
          
            

             
          </StackLayout>
        </PreviousNextView>
        </GridLayout>
        </ScrollView>
        
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { Dialogs } from '@nativescript/core';
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  import PrisonEngage3 from "./PrisonEngage3";
  import Rewiring2 from "./Rewiring2";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: 'Thank you',
    message: 'Keep going!',
    okButtonText: 'Okay',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("PrisonEngage");
    },
    components: {
    //  XPCard2
  },
    data() {
      const page="RewiringEngage";
    const pageXPDetails = XPs.filter(XP => {
        //console.info("In page filter, ", XP );
      return XP.Page.includes(page);
     });
    // console.info("In page filter, topicPage is", topicPages[3]);

    const pageInfo = topicPages.filter(topicPage => {
      //  console.info("In page filter 2, ", topicPage );
    //  return topicPage.page.includes(page);
     });


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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Rewiring Engage Input", this.textViewValue1,this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(Rewiring2);
})
},


    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
