<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="*, 50">
          <Label col="0" class="action-bar-title" text="(Black) Teen Literacy Matters - Prison" />

          <Label col="1" class="fas text-right" text.decode="&#xf0c9;" @tap="onDrawerButtonTap" />
        </GridLayout>
      </ActionBar>
<ScrollView >
        <GridLayout class="">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <PreviousNextView>
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-24 mb-32" />
            <Label class="text-2xl text-center" text="Stumped By the Words"  />
            <Label class="text-base leading-none p-4 pb-0" text="What age is DeShaun, who's being taught how to read?" textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
            <TextViewWithHint width="400" height="45" class="input-gray" editable="true" v-model="textViewValue1" hint="He's ____" returnKeyType="next" > </TextViewWithHint>
          
          
            <Label class="text-base leading-none p-4 pb-0" text="At about what grade level is DeShaun (and the other teens) reading?" textWrap="true" />
            <TextViewWithHint width="400" height="45" class="input-gray" editable="true" v-model="textViewValue2" hint="About ___ grade" returnKeyType="done" > </TextViewWithHint>
          <Button class="btn-b" text="Submit" @tap="acceptInput" />

            
            
            
            
            
            <!--XPcard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPcard-->
            

             
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
  //import { XPCard }  from "../WebpackHack.js";
  //import XPCard from "./XPCard";
 // import XPCard2 from "./XPCard2";
  //import XPCardSmall from "./XPCardSmall";
  import { XPs } from "../data/xp_list.js";
  //import P rogressBar from "./ProgressBar";
import { topicPages } from "../data/pages_list.js";
//import Prison from "./Prison";

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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Prison Engage Input", this.textViewValue1, this.textViewValue2);
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
  console.log("Done with prison engage");
  this.$navigateBack();
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
