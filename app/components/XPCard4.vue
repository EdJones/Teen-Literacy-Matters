<template>
<card-view class="cardStyle1" margin="10" elevation="0" radius="12" @tap="cardDetail">
    <stack-layout class="cardContent">

        <Gridlayout columns="20,*, 20" rows="auto,auto">
            <Label row="0" col="0" :text="mediaIcon" :class="iconPackage" verticalAlignment="top"></Label>
            <Label row="0" col="1" :text="xpObj.title" class="card-title" textWrap="true"></Label>
            <Label row="0" col="2" :class="dotStatus"></Label>
            <Label row="1" col="1" v-if="xpObj.xpType!='challenge'" :text="xpObj.Subtitle" class="card-subtitle" textWrap="true"></Label>
            <Label row="1" colSpan="3" v-if="xpObj.xpType==='challenge'" :text="xpObj.xpText" class="card-text break-all" textWrap="true"></Label>
        </Gridlayout>

        <StackLayout v-if="xpObj.xpType!='challenge'">
            <YoutubePlayer v-if="xpObj.xpType==='YtVideo'" ref="player" :videoId="xpObj.YTvideoId" :apiKey="apiKey" height="200" />
            <YoutubePlayer v-if="xpObj.xpType==='YtVideo2nd'" ref="player" :videoId="xpObj.YTvideoId" :apiKey="apiKey" height="150" width="250" />
            <Image v-if="xpObj.xpType==='video_pic'" :src="'~/images/'+xpObj.imageSource" stretch="aspectFit" />
            <Image v-if="xpObj.xpType==='xp_pic'" :src="'~/images/'+xpObj.image" stretch="aspectFit" class="h-36" />
            <Label :text="xpObj.xpText" class="card-text break-all" textWrap="true"></Label>
            <Label :text="xpObj.text2" class="card-text" textWrap="true"></Label>
            <Label :text="xpObj.Text3" class="card-text" textWrap="true"></Label>
            <Label :text="xpObj.text4" class="card-text" textWrap="true"></Label>
        </StackLayout>
    </stack-layout>
</card-view>
</template>

<script>
import NotNatural from "./NotNatural";
import LetterBox from "./LetterBox";
import PathToReading from "./PathToReading";

export default {
    name: "XPCard",
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

        }
    },
    computed: {
        dotStatus() {
            if (this.xpObj.xpType === 'challenge') {
                console.log("need to fix dotstatus for challenges")
            } else {
                if (this.$store.state.completedXPs.includes(this.xpObj.xpId)) {
                    return "completed-dot";
                } else {
                    return "incomplete-dot";
                }
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
            } else {
                return "fas media"
            }

        }
    },
    methods: {
        cardDetail() {
            console.info("******* In cardDetail, in XPCard4:  *******");
            console.info("xpId: ", this.xpObj.xpId);
            console.info("xpType: ", this.xpObj.xpType);
            console.info("xpUrl: ", this.xpObj.xpUrl);
            console.info("points: ", this.xpObj.points);

            if (this.xpObj.xpType === 'blog') {
                console.log("in cardDetail, xpType: ", this.xpObj.xpType, "so show modal");
                this.$showModal(XPModal, {
                    props: {
                        xpUrl: this.xpObj.xpUrl
                    }
                });
            } else if (this.xpObj.xpType === 'challenge') {
                console.log("Navigate to a Challenge page.");
                console.info("nav_link: ", this.xpObj.nav_link);
                if (this.xpObj.nav_link === 'LetterBox') {
                    console.log("Open LetterBox.vue")
                    this.$navigateTo(LetterBox);
                } else if (this.xpObj.nav_link === 'PathToReading') {
                    console.log("Open PathToReading.vue")
                    this.$navigateTo(PathToReading);
                }
            } else if (this.xpObj.xpType === 'engageModal') {
                console.log("DIsplay engage modal");
                this.$showModal(XPModalB, {
                    props: {
                        xpObj: this.xpObj.modal
                    }
                });
            } else if (this.xpObj.xpType === 'engage_page') {
               if (this.xpObj.nav_link === 'RewiringEngage') {
                    console.log("Open NotNatural.vue")
                    this.$navigateTo(NotNatural);
                } else if (this.xpObj.nav_link === 'LetterBox') {
                    console.log("Open LetterBox.vue")
                    this.$navigateTo(LetterBox);
                }
            } else if (this.xpObj.xpType === 'xp_pic') {
                this.$showModal(XPModalA, {
                    props: {
                        xpObj: this.xpObj
                    }
                });
            } else if (this.xpObj.xpType != 'YtVideo' && this.xpObj.xpType != 'YtVideo2nd') {
                console.log("in cardDetail, xpType: ", this.xpObj.xpType, "so show modal");
                this.$showModal(XPModal, {
                    props: {
                        xpUrl: this.xpObj.xpUrl
                    }
                });
            } else {
                console.log("xpType: none of the above", this.xpObj.xpType);
            }


            if (this.xpObj.xpType === 'challenge') {
                console.log("need to fix dotstatus for challenges")
            } else {
                this.$store.commit('increment', {
                    XP: this.xpObj.xpId,
                    newPoints: parseInt(this.xpObj.points)
                });
                this.$store.commit('addXP', {
                    XP: this.xpObj.xpId
                });
            }

        },

        created() {
            console.info("***********************Creating XPcard4 Webcard***********************");
            console.info("Title: ", this.xpObj.title);
        }

    }
}
</script>

<style lang="scss" scoped>
// @import '../app-variables';
@import '../_btlm.scss';

.media {
    padding-top: 2;
}
</style>
