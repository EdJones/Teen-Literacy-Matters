<template>
      <ScrollView>
        <GridLayout class="">
          <!--XPCardSmall :xpObj="pageXPDetails[0]" ></XPCardSmall-->
          <PreviousNextView>
          <StackLayout orientation="vertical">
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-6" :text="pageInfo.prompt1" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.prompt1a" textWrap="true" />
            <TextViewWithHint width="360" height="50" class="text-black input-gray text-xl" editable="true" v-model="textViewValue1" hint="" returnKeyType="next" > </TextViewWithHint>
            <Label class="text-base leading-none font-light  p-4 pb-0 mt-4" :text="pageInfo.prompt2" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.prompt2a" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.prompt2b" textWrap="true" />
            <Label class="text-base leading-none font-light  p-4 pb-0" :text="pageInfo.prompt2c" textWrap="true" />
            <TextViewWithHint width="360" height="80" class="text-black input-gray text-xl" editable="true" v-model="textViewValue2" hint="Pear and.." returnKeyType="next" > </TextViewWithHint>
           <Button class="btn-b" text="Enter" @tap="acceptInput" />   
          </StackLayout>
        </PreviousNextView>
        </GridLayout>
        </ScrollView>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { preparePageInfo, preparePageDetails } from "./pageData.js";
  import { Dialogs } from '@nativescript/core';
  import { Tasks } from "../data/Tasks.js";
  //import ProgressBar from "./ProgressBar";
  //import PreviousNextView from '@nativescript/iqkeyboardmanager';

const alertOptions = {
    title: '',
    message: 'Keep going!',
    okButtonText: 'Next',
    cancelable: false // [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
  }; 
  export default {
    mounted() {
    },
    components: {
      
  },
    data() {
      const page="PathToReading2";
      const pageInfo = preparePageInfo(page, topicPages);
      console.info("RewiringEngage>data, pageInfo[0].page is: ", pageInfo[0].page );   
      const pageXPDetails = preparePageDetails(pageInfo[0], XPs);

    return {
      tasks: Tasks,
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
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$  Input for task ", this.textViewValue1,this.textViewValue2);
        let now = new Date();
        let docNum = now.getTime();
        console.log("Now: ",  docNum);
/*

    this.$store.commit('increment', {XP: "XP3000", newPoints: 3000});
this.$store.commit('addXP', {XP: "XP3000"});
*/
Dialogs.alert(alertOptions).then(() => {
   this.$navigateTo(PathToReading3);
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
