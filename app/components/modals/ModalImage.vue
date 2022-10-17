<template>
<page  @shownModally="onPageLoaded" backgroundColor="#c0cccf" >
	<GridLayout rows="150, *, 40">
        <StackLayout row="0" height="40" orientation="horizontal" class="modalblue">
          <Button horizontalAlignment="right" class="closebutton7 text-right" text="Done" @tap="finishXP()" />
        </StackLayout>

		<StackLayout row="1"  stretch="aspectFit" iosOverflowSafeAreaEnabled="false">
			<Label class="text-center modal-title" :text="xpObj.title" />
			<ImageZoom src="~/images/SORonFaceBook.png" maxZoom="4" minZoom="1" class="imagezoom" />
			<!--Image src="~/images/SORonFaceBook.png" stretch="aspectFit" /-->
		</StackLayout>
		<StackLayout row="2" height="40" orientation="horizontal">
		  <Label class="text3" :text="xpObj.Text3" />
		</StackLayout>
		<!--Button class="close-button" text="Close" @tap="$modal.close()" /-->

	</GridLayout>
</page>
</template>

<script>

//Vue.registerElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
export default {
props: {
	xpObj: {
      type: Object,
      required: true
    },
},
    data() {
		console.info("In data, xpObj: ", this.xpObj);
	  return {
		xpObj: this.xpObj
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
	}
    },
};
</script>

<style>
.modal-title {
  font-weight: bold;
  /* color: firebrick; */
  color: #336699;
  margin-left:4;
  word-wrap: true;
}
.modal-subtitle {
  font-weight: bold;
  font-size: 13;
}
.modal-text {
  font-weight: normal;
  text-wrap: true;
  
}
.imagezoom {
  margin: 10;
  padding-top:0;
  width: 100%;

}
.quote-grid: {
	height: 400;
	margin-top:40;
	background-color: #009fd4;
	margin-left:20px;
	margin-right:20px;
	font-size:24;
}
.quote-grid1: {
	height: 200;
	margin-top:5;
	background-color: #009fd4;
}
.close-button {
    background-color: #009fd4;
  /*  border-radius: 5; */
    color: white;
    font-family: FontAwesome;
    font-size: 20;
    vertical-align: bottom;
    }
.top-label: {
  background-color: #B78D75;
  vertical-align:top;
  font-size: 20;
  color:white;


}
.text3 {
margin-top: 20;
margin-left: 20;
}
.quote-modal {
	margin: 9;
	font-style: italic;
	color: white;
	font-size: 22;
	margin-left: 20;
	margin-right: 15;
}
.pic-modal {
	height:550;
}
.attr-url {
	font-size:12;
	color:gray;
}
.reorder-handle {
	width: 30;
	height: 30;
	vertical-align: bottom;

}
.bottom-bar: {
    background-color: #009fd4;
}
.right-gradient1 {
    /* background: linear-gradient(to left, #33ffc7, #d0f1f8); */
    margin-right:0;
    background: linear-gradient(to right, #0065d4, #009fd4, #bae1e8);
}
</style>
