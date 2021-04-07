<template>
	<!-- 景区详情 -->
	<view>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<!-- 顶部返回栏 -->
			<!-- 顶部导航 -->
			<view>
				<view class="fixed">
					<cu-custom :isBack="true" bgColor="white">
						<block slot="backText">返回</block>
						<block slot="content">{{ viewInfo.name }}</block>
						<block slot="right">
							<view class="action" @tap="showModal" data-target="viewModal">
								<view class="icon t-icon icontubiaozhizuomobanyihuifu-1 load-cuIcon"></view>
							</view>
						</block>
					</cu-custom>
				</view>
				<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
				 duration="500">
					<swiper-item v-for="(item,index) in 4" :key="index">
						<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 景区服务栏 -->
			<view>
				<tui-grid>
					<block v-for="(item,index) in iconList" :key="index">
						<navigator :url="item.url + item.args" hover-class="opcity" :hover-stay-time="150">
							<tui-grid-item :cell="5" @click="detail">
								<view class="tui-grid-icon">
									<view :class="'icon t-icon ' +item.cuIcon "></view>
								</view> 
								<text class="tui-grid-label tui-grid-label-5 text-sm">{{item.name}}</text>
							</tui-grid-item>
						</navigator>
					</block>
				</tui-grid>
			</view>
			<!-- 景区详情数据 -->
			</scroll-view>
			<view>
				<!-- 15日人流量 -->
				<view>
					
				</view>
			</view>
			<view>
				<!-- 浮动按钮  -->
				<view>
					
				</view>
			</view>
			<view>
				
			</view>
		<!-- 侧边抽屉 -->
		<view>
			<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
				<text class="cuIcon-pullright"></text>
			</view>
			<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
				<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
					<view class="cu-item arrow" v-for="(item,index) in 20" :key="index">
						<view class="content">
							<text class="cuIcon-github text-grey"></text>
							<text class="text-grey">{{index +1}}</text>
						</view>
					</view>
					<!-- <t-weather></t-weather> -->
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				viewId: '',
				gridCol: 5,
				modalName: null,
				gridBorder: false,
				viewInfo: {},
				iconList: [{
					cuIcon: 'iconfujin',
					url: '/pages/tab/tab2/near/near',
					badge: 120,
					name: '附近',
					args: ''
				}, {
					cuIcon: 'iconzudui',
					url: 'orange',
					badge: 1,
					name: '爱心服务',
					args: ''
				}, {
					cuIcon: 'iconfuwu',
					url: 'yellow',
					badge: 0,
					name: '客服',
					args: ''
				}, {
					cuIcon: 'iconquanjing',
					url: '/pages/tab/tab2/Panoramic/Panoramic',
					badge: 22,
					name: '看全景',
					args: '?url=https://720yun.com/t/7fvks91hgfe?scene_id=45689186'
				}, {
					cuIcon: 'iconzhibozhong',
					url: 'cyan',
					badge: 0,
					name: '直播记录',
					args: ''
				}, {
					cuIcon: 'icontubiaozhizuomobanyihuifu-1',
					url: '/components/views/t-weather/t-weather',
					badge: 0,
					name: '天气',
					args: ''
				}, {
					cuIcon: 'iconweizhi1',
					url: '/components/views/t-weather/t-weather',
					badge: 0,
					name: '景区地图',
					args: ''
				}],
			}
		},
		methods: {
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			},
			detail: function() {
				// this.tui.toast('详情功能尚未完善~')
			},
			getViewDetails: function() {
				var data = {
					id: this.viewId
				};
				this.$api.getViewDetailsAPI(data).then(res=>{
					if(res.data.code == 200){
						this.viewInfo = res.data.info
					}
				})
			}
		},
		mounted() {
			this.getViewDetails();
		},
		onLoad(option){
			this.viewId = option.id;
		}
	}
</script>

<style>
	
	.icon {
	   width: 1.4em; 
	   height: 1.4em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	.tui-grid-icon {
		width: 64rpx;
		height: 64rpx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
	}
	.tui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #fc0107;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10rpx;
	}
	.tui-grid-label-5 {
		margin-top: 0 !important;
		color: #000000 !important;
	}
	/* 抽屉 */
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}
	
	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}
	
	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}
	
	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
	}
	
	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}
	
	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}
	
	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}
	
	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}
	
	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}
	
	.DrawerPage .nav {
		flex: 1;
	}
	
	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}
	
	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}
	
	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
