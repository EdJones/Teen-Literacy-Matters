<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>
        <GridLayout columns="50, *">
          <Label class="action-bar-title" text="(Black) Teen Literacy Matters" colSpan="2"/>

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>

        <GridLayout class="page__content">
          <StackLayout orientation="vertical">
            <image src="~/images/boy_walking.png" stretch="aspectFit" class="h-48"/>
          <Label class="text-2xl text-center" text="(Black) Teen Literacy Matters"  />
            <Label class="text-base leading-none p-4 pb-0" text="Systemic racism has many forms; few more hurtful than denying children basic reading." textWrap="true" />
            <Label class="text-base leading-none p-4 pb-0" text="Across the country, Black children are deprived of the reading instruction they need. (So are many others.)" textWrap="true" />
<Label class="text-base leading-none p-4" text="This puts them behind for life. When they become parents, it limits the jobs they can get, what they can do for the next generation." textWrap="true" />
<Label class="text-base leading-none p-4 text-center" text="How can teens help change this?" textWrap="true" />
 <Button text="How can I help?" @tap="moveForward(Introduction)" class="button-active help-button text-center" width="50%" />
          </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../shared/selected-page-service";
  import Introduction from "./Intro";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
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
      moveForward() {
      this.$navigateTo(Introduction);
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
