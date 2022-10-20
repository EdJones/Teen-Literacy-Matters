<template >
  <Page @shownModally="onPageLoaded" >
    
    
      <GridLayout rows="40, *, 40">
        <StackLayout row="0" height="40" orientation="horizontal" class="modalblue">
          <Button horizontalAlignment="right" class="closebutton7 text-right" text="Done" @tap="finishXP()" />
        </StackLayout>

        <ScrollView row="1" height="auto">
          <GridLayout rows="*,*">
          <StackLayout row="0">
          <Label class="text-2xl text-center" text="A Hard Truth--Engage"  />
             <Label class="text-base leading-none p-4 pb-0" text="When I read this, I cried with compassion for r, Eric, the teachers, and all the kids in these classes. How hard it was for everyone to learn." textWrap="true" />
             <Label class="text-base leading-none p-4 pb-0" text="Yet I've heard from others who were upset at Principal Juli." textWrap="true" />
                <image src="~/images/NAEP_ethnicity.png" stretch="aspectFit" class="h-40" />

          </StackLayout>
                  <StackLayout row="1" width="90%">
          <Label class="text2" text="" textWrap="true"> </Label>
          <TextView width="400" height="60" class="input-gray" editable="true" v-model="textViewValue" hint="Because..." returnKeyType="done" > </TextView>
          <Button class="btn-b" text="Submit" @tap="acceptInput" />
        </StackLayout>
        </GridLayout>
        </ScrollView>
        <StackLayout row="2" width="100%" height="40" orientation="horizontal" horizontalAlignment="right" >
           <Label horizontalAlignment="right" class="fas share" text.decode="&#xf064;" @tap="shareUrl(xpUrl)" />
           
        </StackLayout>
        </GridLayout>
      </GridLayout>

    
  </Page>
</template>

<script>
import { Observable, Utils } from '@nativescript/core';
import * as SocialShare from "@nativescript/social-share";

export default {
  props: ['xpUrl'],
    
  data() {
   
        return {
           webLoading: this.webLoading
        };
    },
  methods: {
    onPageLoaded() {
      console.log("#####################      Modal page loading:       #################");
      this.startTime = new Date();
     console.log("Modal loaded: ", this.startTime );
    },
    onLoadStarted() {
      //console.log("Modal loaded: ", Date());
      console.log("#####################It started to Load   " + xpURL +"    #################");
      webLoading = "true";
    },
    newBrowser(xpUrl) {
      Utils.openUrl(xpUrl);
    },
    finishXP() {
      this.$modal.close();
      console.log("**************************close modal****************************************");
      console.log('new Start time: ', this.startTime);
      let completedTime = new Date();
      let t1 = this.startTime.getTime();
      let t2 = completedTime.getTime();
      console.log('Completed time: ', new Date());
      console.log("t1:  ",  t1);
      console.log("t2:  ",  t2);
      let tdiff= (t2 - t1)/1000;
      console.log("tdiff:  ", tdiff);
      //this.$store.commit('logXPTime', {XP: "XP133", logTime: tdiff});
    },
    shareUrl(xpUrl) {
      console.log("************************************* Open the Url. **************************************");
      SocialShare.shareUrl(xpUrl, 'Share');

    }
   }
};
</script>

<style>



.closebutton7 {
    
  /*  border-radius: 5; */
    color: white;
    font-family: FontAwesome;
    font-size: 24;
    margin-left: 0;
    padding-left:5;
    padding-right: 10;
    margin-top:5;
    padding-top:15;
    padding-bottom:10;
    width:100%;
    height:50;
}
.browser-button5 {
    color: white;
    font-family: FontAwesome;
    font-size: 28;
    vertical-align: top;
    padding-right: 10;
    padding-left: 10;
    padding-top:12;
    padding-bottom:10;
    width:75%;
    height: 50;
}
.browser-button6 {
    color: #3399ff;
    font-family: Font Awesome 6 Free;
    font-size: 28;
    margin-left: 120;
    padding-right: 30;
    padding-left: 20;
    padding-top:12;
    padding-bottom:10;
    height: 50;
}
.modalblue {
  background-color: #009fd4;
  height:50;
}
.share {
  color: #3399ff;
  font-size:24px;
  height: 100%;
}
.browser-button {
    color: #3399ff;
    font-size: 28;
    margin-left: 120;
    padding-right: 30;
    padding-left: 20;
    padding-top:12;
    padding-bottom:10;
    height: 50;
}
</style>
