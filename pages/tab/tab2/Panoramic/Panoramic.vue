<template>
	<!-- 全景服务 -->
	<view>
		<view>
			
		</view>
		<view>
			<web-view :src="url">
				
			</web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		methods: {
			
		},
		onLoad(option) {
			this.url = option.url;
			console.log(this.url);
		}
	}
</script>

<style>

</style>
