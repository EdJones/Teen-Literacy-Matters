<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
          <Label class="nt-drawer__header-brand text-2xl" text="Teen Literacy Matters"></Label>
            <Image class="nt-drawer__header-image fas h-2 t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand mb-32" text="User Name"></Label>
            <!--Label class="nt-drawer__header-footnote" text="username@mail.com"></Label-->
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Home)" >
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Home" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Intro' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Intro)">
                    <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
                    <Label col="1" text="First Steps" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Lebron' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Lebron)">
                    <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
                    <Label col="1" text="Can Lebron Fix It?" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'HowKidsREad' ? ' -selected': '')"
                            @tap="onNavigationItemTap(HowKidsRead)">
                    <Label col="0" text.decode="&#xf002;" class="nt-icon fas"/>
                    <Label col="1" text="How Kids Learn to Read" class="p-r-10"/>
                </GridLayout>

                
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
  import Home from "./Home";
  import Intro from "./Intro";
    import Lebron from "./Lebron";
  import HowKidsRead from "./HowKidsRead";
  import Search from "./Search";
  import Settings from "./Settings";
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },
    data() {
      return {
        Home: Home,
        Intro: Intro,
        Lebron: Lebron,
        HowKidsRead: HowKidsRead,
        Search: Search,
        Settings: Settings,
        selectedPage: ""
      };
    },
    components: {
      Home,
      Intro,
      Lebron,
      HowKidsRead,
      Search,
      Settings
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    @import '../_btlm.scss';
    // End custom common variables

    // Custom styles
</style>
