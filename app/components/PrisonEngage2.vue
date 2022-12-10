<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters - Prison" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>

        <GridLayout class="">
          <ScrollView></ScrollView>
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-16" />
            <Label class="text-2xl text-center" text="Stumped By the Words 2"  />
            <Label class="text-base leading-none font-light p-4 pb-0" text="The building blocks DeShaun is trying to master here are called 'phonemes'. Meaning 'sound, speech.'" textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="For example, /b/ is the sound we spell with the letter 'b'. As in bat, ball, bozo, beef.'" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" text="What phoneme is DeShaun working with here?" textWrap="true" />
            <TextView width="40" height="25" class="input-gray" editable="true" v-model="textViewValue1" hint="He's excited to tell Emily about the ____ phoneme." returnKeyType="next" > </TextView>

          
            <Label class="text-base leading-none font-light p-4 pb-0" text="Typically, we expect children to learn such phonemes in kindergarten or first grade." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="Obviously, DeShaun was never taught this." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="The particular phoneme DeSahun is so excited about is a little special. It's one of a few that are spelled with two letters." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="The particular phoneme DeSahun is so excited about is a little special. These are called digraphs. ('Di' means 'two'; 'graph' means 'something written'.) There are seven digraphs in Engglish." textWrap="true" />
            <Label class="text-base leading-none font-light p-4 pb-0" text="Can you guess or remember any other digraphs? Hint: 'Check'" textWrap="true" />
            <TextView width="80%" height="45" class="input-gray" editable="true" v-model="textViewValue2" hint="" returnKeyType="done" > </TextView>
          <Button class="btn-b" text="Submit" @tap="acceptInput" />

            

             
          </StackLayout>
        </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import { Dialogs } from '@nativescript/core';
  import XPModalA from "./XPModalA";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";

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
      const page="PrisonEngage";
    const pageXPDetails = XPs.filter(XP => {
        //console.info("In page filter, ", XP );
      return XP.Page.includes(page);
     });
    // console.info("In page filter, topicPage is", topicPages[3]);

    const pageInfo = topicPages.filter(topicPage => {
        console.info("In page filter 2, ", topicPage );
    //  return topicPage.page.includes(page);
     });
    // pageInfo = topicPages[1];
    
    // console.info("In data, pageInfo is: ", pageInfo);
    // console.info("In data, topicPage.page is: ", pageInfo[0].page );
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Prison Engage 2 Input", this.textViewValue1,this.textViewValue);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*
db.collection('LevelIII').doc(docNum.toString()).set({
    UserID: global.userNum,
    Time: now.toLocaleString().replace(',',''),
    TimeInSec: now.getTime(),
    LevelIII: this.textViewValue
    }, { merge: false })
    .then(() => {
      console.log("LevelIII successfully written to db.");
  })
  .catch((error) => {
      console.error("Error writing levelIII: ", error);
  });
    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   // this.$navigateTo(Dashboard, {
    //        clearHistory: true
    //    });
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
