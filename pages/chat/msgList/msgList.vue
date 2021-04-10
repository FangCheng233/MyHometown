<template>
	<view class="container">
		<view class="cu-bar bg-white">
			<view class="action" @tap="back">
				<text class="cuIcon-back text-gray"></text> 返回
			</view>
			<view class="content text-bold">
				
			</view>
		</view>
		
		<!--searchbox-->
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" size='15' color='#999'></icon>
				<text class="tui-search-text">搜索</text>
			</view>
		</view>
		<!--searchbox-->
		<view>
			<block v-for="(item,index) in msgList" :key="index">
				<tui-list-cell @click="detail" :unlined="true">
					<view class="tui-chat-item">
						<view class="tui-msg-box">
							<image :src="'/static/images/news/'+item.pic+'.jpg'" class="tui-msg-pic" mode="widthFix"></image>
							<view class="tui-msg-item">
								<view class="tui-msg-name">{{item.nickname}}</view>
								<view class="tui-msg-content">{{item.msg}}</view>
							</view>
						</view>
						<view class="tui-msg-right" :class="[item.level==3?'tui-right-dot':'']">
							<view class="tui-msg-time">{{item.time}}</view>
							<tui-badge :type="item.level==2?'gray':'danger'" :dot="item.level==3?true:false" v-if="item.msgNum>0">{{item.level!=3?item.msgNum:""}}</tui-badge>
						</view>
					</view>
				</tui-list-cell>
			</block>
		</view>
		<t-chat-nav :current="0"></t-chat-nav>
		<!-- <scroll :onBottom = "onBottom"></scroll> -->
		<!-- <view class="tui-safearea-bottom"></view> -->
	</view>
</template>

<script>
	import tChatBar from '@/components/views/t-chat-nav/t-chat-nav';
	export default {
		data() {
			return {
				msgList: [{
					nickname: "丽江古城管委会",
					name: "lijiang",
					pic: "avatar_1",
					msg: "欢迎您的到来！",
					msgNum: 2,
					time: "10:22",
					level: 1
				}, {
					nickname: "故宫博物院",
					name: "gugong",
					pic: "avatar_2",
					msg: "您好！",
					msgNum: 2,
					time: "13:27",
					level: 3
				}, {
					nickname: "华山官方",
					name: "huashan",
					pic: "4",
					msg: "[图片]",
					msgNum: 18,
					time: "12:27",
					level: 1
				}, {
					nickname: "七彩丹霞地质公园",
					name: "danxia",
					pic: "2",
					msg: "[视频]",
					msgNum: 98,
					time: "10:27",
					level: 2
				}, {
					nickname: "黄山管理委员会",
					name: "huangshan",
					pic: "avatar_1",
					msg: "对方已同意你的好友请求",
					msgNum: 2,
					time: "10:27",
					level: 1
				}]
			}
		},
		methods: {
			search: function() {
				uni.navigateTo({
					url: '../../news/search/search'
				})
			},
			back: function() {
				uni.navigateBack({
					
				})
			},
			detail: function() {
				uni.navigateTo({
					url: '/pages/chat/chat'
				})
			}
		},
		onPullDownRefresh: function() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx
	}
	/*searchbox*/
	.tui-searchbox {
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.tui-search-input {
		width: 100%;
		height: 72rpx;
		background: #fafafa;
		border-radius: 36rpx;
		font-size: 30rpx;
		color: #A8ABB8;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: 16rpx;
	}

	/*searchbox*/

	.tui-chat-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-msg-box {
		display: flex;
		align-items: center;
	}

	.tui-msg-pic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: block;
		margin-right: 24rpx;
	}

	.tui-msg-item {
		max-width: 500rpx;
		min-height: 80rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34rpx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28rpx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 120rpx;
		height: 88rpx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-msg-right.tui-right-dot {
		height: 76rpx;
		padding-bottom: 10rpx;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #9397a4;
	}
</style>
