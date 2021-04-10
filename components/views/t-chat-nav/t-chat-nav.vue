<template>
	<view>
		<!--tabbar-->
		<view class="tui-tabbar">
			<block v-for="(item,index) in tabbar" :key="index">
				<view class="tui-tabbar-item" :class="[current==index?'tui-item-active':'']" :data-index="index" @tap="tabbarSwitch">
					<tui-icon :name="current==index?(item.icon+'-fill'):item.icon" :color="current==index?'#00C0FB':'#666'" :size="item.size"
					 :class="[index==0?'tui-ptop-4':'']"></tui-icon>
					<view class="tui-scale">{{item.text}}</view>
				</view>
			</block>
		</view>
		<!--tabbar-->
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				default: 0
			}
		},
		data() {
			return {
				tabbar: [{
					icon: "community",
					text: "消息",
					size: 24
				}, {
					icon: "people",
					text: "联系人",
					size: 24
				}, {
					icon: "explore",
					text: "发现",
					size: 24
				}],
			}
		},
		methods: {
			tabbarSwitch: function(e) {
				let index = e.currentTarget.dataset.index;
				this.current = index;
				if (index == 0) {
					uni.navigateTo({
						url: '/pages/chat/msgList/msgList'
					})
				}else if (index == 1) {
					uni.navigateTo({
						url: '/pages/chat/friendList/friendList'
					})
				} else {
					this.tui.toast("功能开发中~")
				}
			},
		}
	}
</script>

<style>
	/*tabbar*/
	.tui-tabbar {
		width: 100%;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 99999;
		background-color: #fff;
		height: 100rpx;
		left: 0;
		bottom: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
	
	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d2d2d2;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.tui-tabbar-item {
		flex: 1;
		width: 25%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		font-size: 24rpx;
		color: #666;
		height: 80rpx;
	}
	
	.tui-ptop-4 {
		padding-top: 4rpx;
	}
	
	.tui-scale {
		font-weight: bold;
		transform: scale(0.8);
		transform-origin: center 100%;
		line-height: 30rpx;
	}
	
	.tui-item-active {
		color: #00c0fb !important;
	}
	
	/*tabbar*/
</style>
