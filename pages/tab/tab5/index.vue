<template>
	<view>
		<view>
			
		</view>
		<view>
			<view class="top-container">
				<image class="bg-img" src="/static/images/login/bg_login.png"></image>
				<view @tap="logout" class="logout" hover-class="opcity" :hover-stay-time="150">
					<image class="logout-img" src="/static/tabbar/tab3.png" v-show="isLogin"></image>
					<text class="logout-txt" v-show="isLogin">退出</text>
				</view>
				<view v-show="!isLogin" class="user-wrapper">
					<navigator url="/pages/tab/tab5/login/login" hover-class="opcity" :hover-stay-time="150" class="user">
						<image class="avatar-img" src="/static/images/login/bg_login.png"></image>
						<text class="user-info-mobile">请登录</text>
					</navigator>
				</view>
				<view v-show="isLogin" class="user">
					<image class="avatar-img" src="/static/ic_launcher.png"></image>
					<view class="user-info-mobile">
						<text>{{ user }}</text>
						<view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit">
							<image src="/static/images/my/mine_icon_bianji_3x.png"></image>
						</view>
					</view>
				</view>
				<view></view>
			</view>
		
			<view class="middle-container">
				<view @tap="tapEvent" data-index="1" class="middle-item" hover-class="opcity" :hover-stay-time="150">
					<image class="ticket-img" src="/static/images/my/person.png"></image>
					<text class="middle-tag">个人中心</text>
				</view>
				<view @tap="github" class="middle-item" hover-class="opcity" :hover-stay-time="150">
					<image class="car-img" src="/static/images/my/setting.png"></image>
					<text class="middle-tag">偏好设置</text>
				</view>
			</view>
		
			<!-- <view class="bottom-container">
				<view class="ul-item">
					<view @tap="tapEvent" data-index="2" data-key="加油站" class="item" hover-class="opcity" :hover-stay-time="150">
						<image class="item-img" src="/static/images/my/mine_icon_jiayouzhan_3x.png"></image>
						<text class="item-name">加油站</text>
					</view>
					<view @tap="tapEvent" data-index="2" data-key="停车场" class="item" hover-class="opcity" :hover-stay-time="150">
						<image class="item-img" src="/static/images/my/mine_icon_tingche_3x.png"></image>
						<text class="item-name">地址管理</text>
					</view>
					<view @tap="tapEvent" data-index="2" data-key="充电桩" class="item" hover-class="opcity" :hover-stay-time="150">
						<image class="item-img" src="/static/images/my/mine_icon_chongdian_3x.png"></image>
						<text class="item-name">充电桩</text>
					</view>
				</view>
				<view class="ul-item">
					<view @tap="previewReward" class="item" hover-class="opcity" :hover-stay-time="150">
						<image class="item-img" src="/static/images/my/reward.png"></image>
						<text class="item-name">赞赏</text>
					</view>
					<view class="item" hover-class="opcity" :hover-stay-time="150" @tap="feedback">
						<button open-type="feedback" class="btn-feedback"></button>
						<image class="item-img" src="/static/images/my/feedback.png"></image>
						<text class="item-name">反馈</text>
					</view>
					<view @tap="tapEvent" data-index="3" class="item" hover-class="opcity" :hover-stay-time="150">
						<image class="item-img" src="/static/images/my/log.png"></image>
						<text class="item-name">日志</text>
					</view>
				</view>
			</view> -->
			<tui-list-view title="菜单列表">
				<tui-list-cell @click="detail" :arrow="true">
					<view class="tui-item-box">
						<view class="t-icon iconpengyouquan" size=24></view>
						<text class="tui-list-cell_name ">朋友圈</text>
					</view>
				</tui-list-cell>
				<tui-list-cell @click="detail" :arrow="true">
					<view class="tui-item-box">
						<view class="t-icon icontubiaozhizuomobanyihuifu-"></view>
						<text class="tui-list-cell_name">地址管理</text>
					</view>
				</tui-list-cell>
				<tui-list-cell @click="detail" :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="explore-fill" :size="24" color="#19be6b"></tui-icon>
						<view class="tui-list-cell_name">实验室</view>
						<view class="tui-ml-auto">
							<tui-tag padding="10rpx 12rpx" margin="0 30rpx 0 0" size="24rpx" type="light-green" shape="circle">探索发现</tui-tag>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell @click="detail" :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="shop-fill" :size="23" color="#ed3f14"></tui-icon>
						<view class="tui-list-cell_name">我的店铺</view>
						<view class="tui-right">进入店铺</view>
					</view>
				</tui-list-cell>
				<tui-list-cell @click="detail" :arrow="true" last="true">
					<view class="tui-item-box">
						<image src="/static/images/my/thorui.png" class="tui-logo" mode="widthFix"></image>
						<text class="tui-list-cell_name">关于</text>
						<view class="tui-right">云横秦岭</view>
					</view>
				</tui-list-cell>
			</tui-list-view>
			
			<view class="tui-applets__vip" @tap="openThorUI">
				<tui-footer :fixed="false" :copyright="copyright" tui-footer-class="tui-custom"></tui-footer>
				
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				user: '',
				isLogin: true,
				current: 4,
				copyright: " Copyright © 2014-2019 云横秦岭."
			}
		},
		methods: {
			logout: function() {
				this.tui.modal("提示", "确定退出登录？", true, (res) => {
					if (res) {
						uni.clearStorage();
						uni.reLaunch({
							url: '/pages/tab/tab5/login/login'
						});
					}
				})
			},
			detail: function() {
				
			},
			openThorUI() {
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId: 'wxd3c1da92cb8fcf40'
				});
				// #endif
			
				// #ifndef  MP-WEIXIN
				if (this.sweixin) {
					this.sweixin.launchMiniProgram({
						id: 'gh_78d54c9830d3'
					});
				} else {
					uni.previewImage({
						urls: ['https://thorui.cn/img/applets_extend.jpg']
					});
				}
				// #endif
			}
		},
		mounted() {
			this.isLogin = uni.getStorageSync("isLogin");
			this.user = uni.getStorageSync("user");
		}
	}
</script>

<style>

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}
	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tui-right {
		margin-left: auto;
		margin-right: 34rpx;
		font-size: 26rpx;
		color: #999;
	}
	.tui-logo {
		height: 52rpx;
		width: 52rpx;
		flex-shrink: 0;
	}
	
	.top-container {
		height: 440rpx;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	
	.bg-img {
		position: absolute;
		width: 100%;
		height: 440rpx;
	}
	
	.logout {
		width: 110rpx;
		height: 36rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 42rpx 0 24rpx 32rpx;
		position: relative;
		z-index: 2;
	}
	
	.logout-img {
		width: 36rpx;
		height: 36rpx;
		margin-right: 11rpx;
	}
	
	.logout-txt {
		font-size: 28rpx;
		color: #fefefe;
		line-height: 28rpx;
	}
	
	.user-wrapper {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 2;
	}
	
	.user {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		z-index: 2;
	}
	
	.avatar-img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		align-self: center;
	}
	
	.user-info {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		align-items: center;
	}
	
	.user-info-mobile {
		margin-top: 30rpx;
		position: relative;
		font-size: 28rpx;
		color: #fefefe;
		line-height: 28rpx;
		align-self: center;
		padding: 0 50rpx;
	}
	
	.edit-img {
		position: absolute;
		width: 42rpx;
		height: 42rpx;
		right: 0;
		bottom: -4rpx;
	}
	
	.edit-img>image {
		width: 42rpx;
		height: 42rpx;
		padding-left: 25rpx;
	}
	
	.middle-container {
		height: 138rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 10rpx;
		background-color: #ffffff;
		margin: -30rpx 30rpx 26rpx 30rpx;
		box-shadow: 0 15rpx 10rpx -15rpx #efefef;
		position: relative;
		z-index: 2;
	}
	
	.middle-item {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.ticket-img {
		width: 80rpx;
		height: 80rpx;
		margin-left: 65rpx;
	}
	
	.middle-tag {
		font-size: 28rpx;
		color: #333333;
		line-height: 28rpx;
		font-weight: bold;
		padding-left: 22rpx;
	}
	
	.car-img {
		width: 80rpx;
		height: 80rpx;
		margin-left: 97rpx;
	}
	
	.bottom-container {
		height: 334rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40rpx 74rpx 40rpx 95rpx;
		margin: 0 30rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		box-sizing: border-box;
		box-shadow: 0 0 10rpx #efefef;
	}
	
	.ul-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	
	.item-img {
		width: 64rpx;
		height: 64rpx;
	}
	
	.item-name {
		padding-top: 13rpx;
		font-size: 24rpx;
		color: #666666;
		min-width: 80rpx;
		text-align: center;
	}
	
	.btn-feedback {
		background: transparent !important;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		border: 0;
	}
	
	.btn-feedback::after {
		border: 0;
	}
	/* .tui-applets__vip{
		width: 100%;
		position: fixed;
		bottom: 20px;
		#ifdef H5 //
		bottom: 70px;
		padding-bottom: env(safe-area-inset-bottom);
		#endif //
		z-index: 10;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #586c94;
	}
	.tui-applets__vip text{
		padding-left: 10rpx;
	} */
</style>
