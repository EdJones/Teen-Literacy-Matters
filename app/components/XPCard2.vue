<template>
    <card-view class="cardStyle1" margin="10" elevation="0" radius="12" @tap="cardDetail">
        <stack-layout class="cardContent">

           <Gridlayout columns="20,*, 20" rows="auto,auto">
                <Label row="0" col="0" :text="mediaIcon" :class="iconPackage" verticalAlignment="top" ></Label>
                <Label row="0" col="1" :text="xpObj.title" class="card-title"  textWrap="true" ></Label>
                <Label row="0" col="2" :class="dotStatus" ></Label>
                <Label row="1" colSpan="3" v-if="xpObj.xpType==='challenge'" :text="xpObj.xpText" class="card-text break-all" textWrap="true"></Label>
            </Gridlayout>

            <StackLayout v-if="xpObj.xpType!='challenge'">
                <YoutubePlayer v-if="xpObj.xpType==='YtVideo'" ref="player" :videoId="xpObj.YTvideoId" :apiKey="apiKey" height="200" />
                <Image v-if="xpObj.xpType==='video_pic'" :src="'~/images/'+xpObj.imageSource" stretch="aspectFit" />
                <Image v-if="xpObj.xpType==='xp_pic'" :src="'~/images/'+xpObj.image" stretch="aspectFit" class="h-36" />
                <Image v-if="xpObj.xpType==='construction'" :src="'~/images/'+xpObj.imageSource" stretch="aspectFit" class="h-36" />
                <Label :text="xpObj.xpText" class="card-text break-all" textWrap="true"></Label>
                <Label :text="xpObj.text2" class="card-text" textWrap="true"></Label>
                <Label :text="xpObj.Text3" class="card-text" textWrap="true"></Label>
                <Label :text="xpObj.text4" class="card-text" textWrap="true"></Label>
            </StackLayout>

        </stack-layout>
    </card-view>
</template>

<script>
import XPModal from "./XPModal";
import ModalFacebook from "./ModalFacebook";
import XPModalA from "./XPModalA";
import XPModalB from "./XPModalB";
import SoldAStory from "./SoldAStory";
import SoldAStory_Engage from "./SoldAStory_Engage";
import SoldAStory_Engage2 from "./SoldAStory_Engage2";
import PrisonEngage from "./PrisonEngage";
import PrisonEngage2 from "./PrisonEngage2";
//import ModalDigraphs from "./modals/ModalDigraphs";
import ModalImage from "./modals/ModalImage";
// import Digraphs from "./Digraphs";

export default {
    name: "XPCard2",
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
            ModalImage: ModalImage,
          //  HardTruth: HardTruth,
            SoldAStory: SoldAStory,
            SoldAStory_Engage: SoldAStory_Engage,
            SoldAStory_Engage2: SoldAStory_Engage2
        }
        },
    computed: { 
        dotStatus() {
            if (this.$store.state.completedXPs.includes(this.xpObj.xpId)) {
                return "completed-dot";
            } else {
                return "incomplete-dot";
            }
        },
        mediaIcon() {
            const iconMap = {
                podcast: 0xf025,
                radio: 0xf025,
                YtVideo: 0xf26c,
                video: 0xf26c,
                challenge: 0xf022,
                article: 0xf1ea,
                book: 0xf02d,
                Facebook: 0xf39e,
                Research: 0xf0c3,
                blog: 0xf781,
                lab: 0xf610,
                list: 0xf46d,
                study: 0xf558,
                page: 0xf558,
                paper: 0xf558,
                lit_survey: 0xf24e,
                checklist: 0xf0ae,
                xp_image: 0xf302,
                engage: 0xe4f6,
                engage_page: 0xe4e3,
                default: 0xf15c,
            };
            const icon = String.fromCharCode(iconMap[this.xpObj.xpType] || iconMap.default);
            return icon;
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
            console.info("******* In cardDetail, in XPCard2:  *******");
            console.info("xpId: ", this.xpObj.xpId);
            console.info("xpType: ", this.xpObj.xpType);
            console.info("xpUrl: ", this.xpObj.xpUrl);
            console.info("points: ", this.xpObj.points );
            console.info("nav_link: ", this.xpObj.nav_link );

            if (this.xpObj.xpType==='blog') {
                console.log("in cardDetail, xpType: ", this.xpObj.xpType, "so show modal");
                this.$showModal(XPModal, {
                props: {
                    xpUrl: this.xpObj.xpUrl
                }
            });
            }
            else if (this.xpObj.xpType === 'engageModal') {
             this.$showModal(XPModalB, {
                props: {
                    xpObj: this.xpObj.modal
                }
             }); 
                }
            else if (this.xpObj.xpType === 'engage_page') {
                if (this.xpObj.nav_link === 'PrisonEngage') {
                    console.log("Prison engage");
                    this.$navigateTo(PrisonEngage);
                }
                else if (this.xpObj.nav_link === 'PrisonEngage2') {
                    console.log("Prison engage2");
                    this.$navigateTo(PrisonEngage2);
                }
                else if (this.xpObj.nav_link === 'SoldAStory_Engage') {
                    console.log("Open SoldAStory_Engage.vue")
                    this.$navigateTo(SoldAStory_Engage);
                }
                else if (this.xpObj.nav_link === 'SoldAStory_Engage2') {
                    console.log("Open SoldAStory_Engage2.vue")
                    this.$navigateTo(SoldAStory_Engage2);
                }
            }
            else if (this.xpObj.xpType === 'challenge') {
                console.info("In XPCard2, its a challenge page");
            //this.$navigateTo(this.xpObj.nav_link);
            if (this.xpObj.nav_link === 'HardTruth') {
                console.log("HardTruth engage");
            this.$navigateTo(HardTruth);}

            else {
                console.log("Open SoldAStory.vue")
            this.$navigateTo(SoldAStory);
        }

                }
                 else 
            if (this.xpObj.xpType ==='xp_pic') {
            this.$showModal(XPModalA, {
                props: {
                    xpObj: this.xpObj
                }
            });
            }
            else if (this.xpObj.xpType !='YtVideo') {
            console.log("in cardDetail, xpType: ", this.xpObj.xpType, "so show modal");
            this.$showModal(XPModal, {
                props: {
                    xpUrl: this.xpObj.xpUrl
                }
            });
            }
            
            else 
            { console.log("xpType: none of the above", this.xpObj.xpType);

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
           /*
            else 
           if (this.xpObj.xpType ==='xp_pic') {
            this.$showModal(XPModalA, {
                props: {
                    xpObj: this.xpObj
                }
            });
            } 
            */
            this.$store.commit('increment', {
                XP: this.xpObj.xpId,
                newPoints: parseInt(this.xpObj.points)
            });
            this.$store.commit('addXP', {
                XP: this.xpObj.xpId
            });

        },
          

            
            //confirm("Did you learn from this resource?");
         
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