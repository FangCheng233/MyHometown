<template>
	<view>
		<view>
			<view></view>
		</view>
		<view>
			<view class="top-container">
				<image class="bg-img" src="http://1.14.67.162/images/login/bg_login.png"></image>
				<view @tap="logout" class="logout" hover-class="opcity" :hover-stay-time="150">
					<image class="logout-img" src="http://1.14.67.162/tabbar/tab3.png" v-show="isLogin"></image>
					<text class="logout-txt" v-show="isLogin">退出</text>
				</view>
				<view v-show="!isLogin" class="user-wrapper">
					<navigator url="/pages/start/login/login" hover-class="opcity" :hover-stay-time="150" class="user">
						<image class="avatar-img" src="http://1.14.67.162/images/login/bg_login.png"></image>
						<text class="user-info-mobile">请登录</text>
					</navigator>
				</view>
				<view v-show="isLogin" class="user">
					<image class="avatar-img" src="http://1.14.67.162/ic_launcher.png"></image>
					<view class="user-info-mobile">
						<text>{{ user }}</text>
						<view class="edit-img" hover-class="opcity" :hover-stay-time="150" @tap="edit">
							<image src="http://1.14.67.162/images/my/mine_icon_bianji_3x.png"></image>
						</view>
					</view>
				</view>
				<view></view>
			</view>
		
			<view class="middle-container">
				<view @tap="tapEvent" data-index="1" class="middle-item" hover-class="opcity" :hover-stay-time="150">
					<image class="ticket-img" src="http://1.14.67.162/images/my/person.png"></image>
					<text class="middle-tag">个人中心</text>
				</view>
				<view @tap="github" class="middle-item" hover-class="opcity" :hover-stay-time="150">
					<image class="car-img" src="http://1.14.67.162/images/my/setting.png"></image>
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
				<tui-list-cell @tap="detail" :arrow="true">
					<view class="tui-item-box">
						<view class="t-icon iconpengyouquan" size=24></view>
						<text class="tui-list-cell_name ">朋友圈</text>
					</view>
				</tui-list-cell>
				<tui-list-cell @tap="detail" :arrow="true">
					<view class="tui-item-box">
						<view class="t-icon icontubiaozhizuomobanyihuifu-"></view>
						<text class="tui-list-cell_name">地址管理</text>
					</view>
				</tui-list-cell>
				<tui-list-cell @tap="detail" :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="explore-fill" :size="24" color="#19be6b"></tui-icon>
						<view class="tui-list-cell_name">实验室</view>
						<view class="tui-ml-auto">
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell @tap="detail" :arrow="true">
					<view class="tui-item-box">
						<tui-icon name="shop-fill" :size="23" color="#ed3f14"></tui-icon>
						<view class="tui-list-cell_name">我的店铺</view>
						<view class="tui-right">进入店铺</view>
					</view>
				</tui-list-cell>
				<tui-list-cell @tap="detail" :arrow="true" last="true">
					<view class="tui-item-box">
						<image src="http://1.14.67.162/images/my/thorui.png" class="tui-logo" mode="widthFix"></image>
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
<script src="./index.js"></script>
<style src="./index.css"></style>
