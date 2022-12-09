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
            <Label class="text-base leading-none p-4 pb-0" text="What grade were these children in?" textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="" textWrap="true" />
            <TextView width="400" height="45" class="input-gray" editable="true" v-model="textViewValue" hint="Say something" returnKeyType="done" > </TextView>
          <Button class="btn-b" text="Submit" @tap="acceptInput1" />
          
          <Label class="text-2xl text-center" text="Sold A Story"  />
            <Label class="text-base leading-none p-4 pb-0" text="Kids like the third child here will have a very unpleasant time in school." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="About what fraction of kids read like this little girl?" textWrap="true" />
            <TextView width="400" height="45" class="input-gray" editable="true" v-model="textViewValue" hint="About ___ of kids" returnKeyType="done" > </TextView>
          <Button class="btn-b" text="Submit" @tap="acceptInput2" />
            
            
            
            
            
            <!--XPcard v-for="pageXPDetail in pageXPDetails" :key="pageXPDetail.id" :xpObj="pageXPDetail" ></XPcard-->
            

             
          </StackLayout>



        </GridLayout>
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

const alertOptions = {
    title: 'Thank you',
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
      const page="SoldAStory";
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
      
      acceptInput1() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  SoldAStory Input", this.textViewValue);
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

acceptInput2() {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  SoldAStory Input", this.textViewValue);
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
