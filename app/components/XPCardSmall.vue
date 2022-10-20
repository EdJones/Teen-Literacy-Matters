<template>
    <card-view class="cardStyle1 card-small" margin="10" elevation="50" radius="12"  @tap="cardDetail">
        <stack-layout class="cardContent">

           <Gridlayout columns="20,*, 20" rows="50,120" class=card-small>
                <Label row="0" col="0" :text="mediaIcon" :class="iconPackage" verticalAlignment="top" ></Label>
                <Label row="0" col="1" :text="xpObj.title" class="card-title"  textWrap="true" ></Label>
                <Label row="0" col="2" :class="dotStatus" ></Label>
                <Label v-if="xpObj.xpType!='challenge'" row="1" col="1" :text="xpObj.Subtitle" class="card-subtitle"  textWrap="true" ></Label>
            </Gridlayout>

        </stack-layout>
    </card-view>
</template>

<script>
import XPModal from "./XPModal";
import ModalFacebook from "./ModalFacebook";
import XPModalA from "./XPModalA";
import HardTruth from "./HardTruth";
//import ModalDigraphs from "./modals/ModalDigraphs";
import ModalImage from "./modals/ModalImage";
// import Digraphs from "./Digraphs";

export default {
    name: "XPCardSmall",
    mounted() {},
    props: {
    xpObj: {
      type: Object,
      required: true
    },
    },
    data() {
        return {
            apiKey: global.YTapiKey,
            ModalImage: ModalImage
        }
        },
    computed: { 
        dotStatus() {
           // if (this.$store.state.completedXPs.includes(this.xpObj.xpId)) {
            if (true) {
                return "completed-dot";
            } else {
                return "incomplete-dot";
            }
        },
        mediaIcon() {
        console.log("xpType: ", this.xpObj.xpType);
            if (this.xpObj.xpType === "podcast") {
            return String.fromCharCode(0xf025);
        } else if (this.xpObj.xpType === "YtVideo" ) {
            return String.fromCharCode(0xf26c);
        } else if (this.xpObj.xpType === "video" ) {
            return String.fromCharCode(0xf26c);
        } else if (this.xpObj.xpType === "challenge" ) {
            return String.fromCharCode(0xf022);
        } else if (this.xpObj.xpType === "article") {
            return String.fromCharCode(0xf1ea);
        } else if (this.xpObj.xpType === "book") {
            return String.fromCharCode(0xf02d);
        }  else if (this.xpObj.xpType === "Facebook") {
            return String.fromCharCode(0xf39e);
        }  else if (this.xpObj.xpType === "Research") {
            return String.fromCharCode(0xf0c3);
        }   else if (this.xpObj.xpType === "blog") {
            return String.fromCharCode(0xf781);
        } else if (this.xpObj.xpType === "lab") {
            return String.fromCharCode(0xf610);
        } else if (this.xpObj.xpType === "list") {
            return String.fromCharCode(0xf46d);
        } else if (this.xpObj.xpType === "study") {
            return String.fromCharCode(0xf558);
        } else if (this.xpObj.xpType === "page") {
            return String.fromCharCode(0xf558);
        } else if (this.xpObj.xpType === "paper") {
            return String.fromCharCode(0xf558);
        } else if (this.xpObj.xpType === "lit_survey") {
            return String.fromCharCode(0xf24e);
         } else if (this.xpObj.xpType === "radio") {
            return String.fromCharCode(0xf025);
        } else if (this.xpObj.xpType === "checklist") {
            return String.fromCharCode(0xf0ae);
        } else if (this.xpObj.xpType === "xp_image") {
            return String.fromCharCode(0xf302);
        } else if (this.xpObj.xpType === "engage") {
            return String.fromCharCode(0xe4f6);
        } else {
            return String.fromCharCode(0xf15c);
        }

        },

        iconPackage() {
        console.log("in iconPackage, xpType: ", this.xpObj.xpType);

        if (this.xpObj.xpType === "Image") {
            return "fa-brands media";
        }
         else {
             return "fas media"
         }  

        }
            },
    methods: {
        cardDetail() {
            console.info("******* In cardDetail, in XPCard:  *******");
            console.info("xpUrl: ", this.xpObj.xpUrl);
            console.info("points: ", this.xpObj.points );

      if (this.xpObj.xpType = 'challenge') {
            this.$navigateTo(this.xpObj.nav_link);
                }

         else if (this.xpObj.xpType = 'engage') {
             this.$showModal(XPModalA, {
                props: {
                    xpObj: this.xpObj.modal
                }
            });
                }
           
           /*
          else if (this.xpObj.xpType ==='page') {
            this.$showModal(ModalDigraphs, {
                props: {
                    xpPage: this.xpObj.xpPage
                }
            });
            } 
            */
            else 
           if (this.xpObj.xpType ==='xp_pic') {
            this.$showModal(XPModalA, {
                props: {
                    xpObj: this.xpObj
                }
            });
            } 
            else 
           if (this.xpObj.xpType!='YtVideo') {
            this.$showModal(XPModal, {
                props: {
                    xpUrl: this.xpObj.xpUrl
                }
            });
            }
        else { console.log("Bad xpType: ", this.xpObj.xpType);
        }
        },
          
/*
            
            //confirm("Did you learn from this resource?");
            this.$store.commit('increment', {
                XP: this.xpObj.xpId,
                newPoints: parseInt(this.xpObj.points)
            });
            this.$store.commit('addXP', {
                XP: this.xpObj.xpId
            });
*/
        
    },

  created() {
      console.info("***********************Creating Webcard***********************");
      console.info("Title: ", this.xpObj.title );
  }
       
    };
</script>

<style scoped lang="scss">
 // @import '../app-variables';
 @import '../_btlm.scss';
  .media {
  padding-top: 2;
}
</style>