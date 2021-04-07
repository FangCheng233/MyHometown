<template>
	<view>
		<view>
			<view>
				<cu-custom :isBack="true" bgColor=" text-white">
					<block slot="backText">返回</block>
					<block slot="content"></block>
				</cu-custom>
			</view>
		</view>
		<tui-fab @click="back" :btnList="btnList" :custom="true" :width="80" :height="40" :right="10" radius="30%">back</tui-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back: function() {
				
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>

</style>
