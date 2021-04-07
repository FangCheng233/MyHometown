<template>
	<view>
		<view class="scroll"></view>
	</view>
</template>

<script>
	export default {
		name:'Scroll',
		data() {
			return {
				
			}
		},
		methods: {
			scrollEvent(){
				if (document.documentElement.scrollTop
			         + document.documentElement.clientHeight 
			        >= document.body.scrollHeight) {
					this.onBottom();
				}
			}
		},
		props: {
			onBottom:Function
		},
		mounted(){
			// window.addEventListene/r('scroll', this.scrollEvent,false);
		},
		onShow() {
			window.addEventListener('scroll', this.scrollEvent,false);
		},
		onReady() {
			window.addEventListener('scroll', this.scrollEvent,false);
		},
		destroyed () {
		    window.removeEventListener('scroll', this.scrollEvent,false);
		}
		
	}
</script>

<style>

</style>
