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


export default {
    name: "TaskComponent",
    mounted() {},
    props: {
    xpObj: {
      type: Object,
      required: true
    },
    },
    data() {
        return {
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
        console.log("taskType: ", this.taskObj.taskType);
            if (this.taskObj.taskType === "text") {
            return String.fromCharCode(0xf11c);
        } 
        } else {
            return String.fromCharCode(0xf11c);
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