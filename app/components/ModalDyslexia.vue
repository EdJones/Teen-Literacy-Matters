<template>
<page backgroundColor="#c0cccf" >
	<GridLayout class="quote-grid right-gradient3"  >

		<StackLayout  >
			<Label class="text-center" text="" />	

			<Label class="quote-modal" text="Some reading experts state that dyslexia doesnt really exist." textWrap="true" />
			<Label class="quote-modal" text="Short version:" textWrap="true"  horizontalAlignment="left" />
			<Label class="quote-modal" text="1. It's complicated." textWrap="true"  horizontalAlignment="left" />
			<Label class="quote-modal" text="2. If you want a medical analogy, it's more like high blood pressure than a broken arm." textWrap="true" />
			<Label class="quote-modal" text="That is: it exists on a continuum, not all/nothing." textWrap="true" />
			<Label class="attr-url" text="Tweet from Learning and the Brain" textWrap="true" horizontalAlignment="right"/>

-->
		</StackLayout>

		<Button class="close-button" text="Close" @tap="$modal.close()" />

	</GridLayout>
</page>
</template>

<script>

export default {
props: ['myUrl'],
    data() {
		shanahanQuote: "<div><p>Some reading experts state that dyslexia doesnt really exist.</p>"+
"<p>Short version:<br>1. It's complicated<br> 2. If you want a medical analogy, it's more like high blood pressure than a broken arm. That is: it exists on a continuum, not all/nothing.</p></div>"
        return {};
    }
};
</script>

<style>
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
.quote-modal {
	margin: 9;
	font-style: italic;
	color: white;
	font-size: 22;
	margin-left: 20;
	margin-right: 15;
	padding-right:5;
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
	verticalAlign: bottom;

}
.bottom-bar: {
    background-color: #009fd4;
}
.right-gradient3 {
    /* background: linear-gradient(to left, #33ffc7, #d0f1f8); */
    margin-right:0;
    background: linear-gradient(to right, #0065d4, #009fd4, #a7d4e2);
}
</style>
