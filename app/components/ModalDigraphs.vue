<template>
  <Page @shownModally="onPageLoaded" >

<GridLayout rows="40, *, 40" class="page-content2">
<StackLayout row="0" height="40" orientation="horizontal" class="modalblue">
          <Button horizontalAlignment="right" class="closebutton7 text-center" text="Done" @tap="finishXP()" />
        </StackLayout>

      <StackLayout row="1" class="p-20">
        <StackLayout>
          <Label class="challenge-label" text="Digraphs" ></label>
        </StackLayout>
        <StackLayout row="2" class="digraphs-intro">
        <Label text="Spoken English has 44 sounds, but written English has only 26 letters." textWrap="true" />
        <Label text="Houston, we have a problem." textWrap="true" />
        <GridLayout rows="20,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto" columns="50,300" class="digraphs"  textWrap="true">
          <Label row="0" col="0">ng</label><Label row="0" col="1"> thing</label>
          <Label row="1" col="0">ck</label><Label row="1" col="1">check</label>
          <Label row="2" col="0">ch</label><Label row="2" col="1">church or christ or champagne</label>
          <Label row="3" col="0">gh</label><Label row="3" col="1" textWrap="true">/ɡ/ at the beginning of words (ghost); or silent at the end of words (sigh)</label>
          <Label row="4" col="0">ph</label><Label row="4" col="1">phone or siphon</label>
          <Label row="5" col="0">rh</label><Label row="5" col="1" textWrap="true">/r/ in words of Greek origin, such as rhythm</label>
          <Label row="6" col="0">sc</label><Label row="6" col="1">scene or conscious, before ⟨e⟩ or ⟨i⟩.</label>
          <Label row="7" col="0">sh</label><Label row="7" col="1">sheep</label>
          <Label row="8" col="0">ti</label><Label row="8" col="1">education</label>
          <Label row="9" col="0">th</label><Label row="9" col="1">thin or then</label>
          <Label row="10" col="0">wh</label><Label row="10" col="1">while; and who or whole</label>
          <Label row="11" col="0">zh</label><Label row="11" col="1">in words of Slavic origin</label>
          <Label row="12" col="0">wr</label><Label row="12" col="1" textWrap="true">in most dialects, identical to 'r': write, wrong.</label>
          <Label row="13" col="0">qu</label><Label row="13" col="1">in words of Slavic origin</label>
          <Label row="14" col="0">ss</label><Label row="14" col="1">dress, mess,chess</label>
          <Label row="15" col="0">tch</label><Label row="15" col="1" textWrap="true">(A trigraph) hatch, watch, witch, fetch</label>
        </GridLayout>
                
        <TextView class="text" editable="false" text="Of course, English can be even more complicated. Consider the 'k' sound, and its spellings here: cat, mecca, chemistry, back, lacquer, biscuit, key, khan, dekko, walk, Qatar, bouquet " />
        
        </StackLayout>

      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import XPModal from "./XPModal";
import Home from "./Home";
//import Phonics from "./Phonics";
import * as utils from "../shared/utils";


const utilsModule = require("@nativescript/core");
let percent = 0;


export default {
  mounted() {
  },

  data() {
    return {
      textFieldValue: "blank"
    };
  },

  computed: {
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
    moveForward() {
   //   this.$navigateTo(Phonics);
     this.$navigateBack();
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
      this.$store.commit('logXPTime', {XP: "XP133", logTime: tdiff});
    },


    
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  },
  created() {

  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.digraphs-intro {
  margin-left: 4;
}
.digraphs {
  margin-left: 8;
  text-wrap: true;
}
.black {
  background-color: black;
}
.input1 {
  bordercolor: #aaaaaa;
  width: 60;
  color: gray;
  border: solid;
}
.text5 {
  margin-top: 5;
}
.text1 {
  margin-top: 5;
}
.text2 {
  margin-bottom: 5;
}
.button1 {
  margin-top: 40;
  
}
</style>