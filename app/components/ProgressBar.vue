<template>

    <GridLayout>
        <StackLayout  >
            <GridLayout :columns="progress" class="progressbar">
                <StackLayout col="0" class="progressbar-value"></StackLayout>
            </GridLayout>
        </StackLayout>
        <StackLayout>
            <Label class="progress-labela" text="Your science-of-reading ninja level"></label>
            <Label class="progress-labelc" :text="pointsMessage"></label>
        </StackLayout>
    </GridLayout>

</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    const utilsModule = require("@nativescript/core");

    let percent = 0;


    export default {
        name: "ProgressBar",
        mounted() {

        },

        data() {

            return {

            };
        },

        computed: {

    progress(percent) {
    percent = (this.$store.state.points / this.$store.state.maxPoints) * 100 ;
      return percent + "*," + (100 - percent) + "*";
     // set column widths for completion bar. e.g. return "30*,70*";
    },
     pointsMessage() {
       return (this.$store.state.completedXPs.length + " XP`s completed for " + this.$store.state.points + "/" + this.$store.state.maxPoints + " points");
    },
    
   
  },
    methods: {
        


    },
  created() {

  }
       
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
.progressbar {
    height: 20;
    margin: 10;
    border-radius: 10;
    background: #ECEFF1;
      margin-top:12;
}
.progressbar-value {
  /*  background: #51BC6B; */
  background: #5fd400;
} 
.progress-labela {
  font-size:10;
  text-align: center;
  margin-bottom:0;
  margin-top:16;
}
.progress-labelb {
  font-size:10;
  text-align: center;
  margin-bottom:0;
  margin-top:0;
}
.progress-labelc {
  font-size:10;
  text-align: center;
  margin-bottom:6;
  margin-top:6;
}
</style>