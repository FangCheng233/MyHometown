<template>
	<view>
		<!-- 循环list -->
		<view>
			<view>
				<view class="root" id="main">
					<view style="height: 100%;" id="left">
						<view class="tui-article col" v-for="(item, index) in imgList1" :key="index" @tap="showModal(item.id)">
							<image :src="item.url" mode="widthFix" :style="[{width: windowWidth/2-5 + 'px'}]"></image>
							<view>
								<image :src="item.url" mode="" class="avater img"></image>
								<text class="tui-article-name text-grey">老王</text>
							</view>
							<view class="tui-article-title text-cut" style="margin-bottom: 0px;">
								<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
									 {{item.pname}}·{{item.cityName}}·{{item.aname}}
							</view>
							<view class="tui-article-look text-cut">
								<text class="cuIcon-attentionfill margin-lr-xs"></text>{{ index + 100}}
							</view>
							<view class="tui-article-address">#{{ item.viewName }}</view>
						</view>
					</view>
					<view style="height: 100%;" id="right">
						<view class="tui-article col" v-for="(item, index) in imgList2" :key="index" @tap="showModal(item.id)">
							<image  :src="item.url" mode="widthFix" :style="[{width: windowWidth/2-5 + 'px'}]"></image>
							<view>
								<image src="/static/images/news/1.jpg" mode="" class="avater img"></image>
								<text class="tui-article-name text-grey">老王</text>
							</view>
							<view class="tui-article-title text-cut" style="margin-bottom: 0px;">
								<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
									 {{item.pname}}·{{item.cityName}}·{{item.aname}}
							</view>
							<view class="tui-article-look text-cut">
								<text class="cuIcon-attentionfill margin-lr-xs"></text>{{ index + 100}}
							</view>
							<view class="tui-article-address">#{{ item.viewName }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="cu-modal" :class="modalName=='Image'?'show':''">
				<view class="cu-dialog">
					<!-- 替换为轮播图 -->
					<view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;">
						<view class="cu-bar justify-end text-white">
							<view class="action" @tap="hideModal">
								<text class="cuIcon-close "></text>
							</view>
						</view>
					</view>
					<view class="cu-bar bg-white">
						<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 加载状态 -->
		<!-- <view id="load">
			<view class="cu-load bg-grey" :class="!isLoad?'loading':'over'"></view>
		</view> -->
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				page: 1,
				isLoad: false,
				canLoad: false,
				modalName: '',
				height: '',
				windowWidth: '',
				windowHeight: '',
				imgList1: [],
				imgList2: []
			}
		},
		mounted() {
			try {
			    this.windowWidth = uni.getStorageSync('windowWidth');
				this.windowHeight = uni.getStorageSync('windowHeight');
			} catch (e) {
			    // error
			}
			this.getViewList();
		},
		onReachBottom() {
			this.getViewList()
		},
		methods: {
			isLoading(e) {
				this.isLoad = e.detail.value;
			},
			showModal(e) {
				this.modalName = 'Image'
			},
			hideModal(e) {
				this.modalName = null
			},

			// },
			async getViewList() {
				let postData = {
					index: this.page++
				}
				this.$api.getRecommendedAPI(postData).then(res=>{
					let left = 0;
					let right = 0;
					let flag = true;
					for (let item of res.data) {
						
						if(flag){
							this.imgList1.push({
								id: item.view.id,
								title: item.image.title,
								viewName: item.view.name,
								pname: item.view.pname,
								cityName: item.view.cityName,
								aname: item.view.aname,
								address: item.view.address,
								url: item.image.url
							});
							flag = !flag
						} else {
							this.imgList2.push({
								id: item.view.id,
								title: item.image.title,
								viewName: item.view.name,
								pname: item.view.pname,
								cityName: item.view.cityName,
								aname: item.view.aname,
								address: item.view.address,
								url: item.image.url
							});
							flag = !flag
						}
					}
				});
			},
			detail: function() {
				this.tui.toast('详情功能尚未完善~')
			},
			load: function(){
				
			}
			
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			},300);
			this.imgList1 = [];
			this.imgList2 = [];
			this.getViewList(1);
			
		},
	}
</script>

<style>
	.root {
		display:flex;
		/* display: -ms-flex; */
		display: -webkit-flex;
		flex-direction: row
	}
	.col {
		flex: 1;
		width: 50%;
		padding: 2px;
		border-radius: 5px;
		border-width: 1px;
		border-color: #ffffff;
		background-color: #000000;
		border-style: solid;
	}
	.tui-article {
		position: relative;
		overflow: hidden;
		width: 100%;
	}
	.tui-article-title {
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-size: 18rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 13rpx 5rpx;
	}
	.tui-article-look {
		position: absolute;
		right: 10px;
		top: 0;
		color: #fff;
		font-size: 18rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 13rpx 5rpx;
	}
	.tui-article-address {
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-size: 18rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 33rpx 5rpx;
	}
	.tui-article-name {
		position: absolute;
		left: 5upx;
		top: 45upx;
		font-size: 18rpx;
		font-weight: 500;
		box-sizing: border-box;
	}
	.avater {
		border-radius: 50%;
		border-width: 2px;
		border-style: solid;
		/* border-color: #ffffff; */
	}
	
	.img {
		position: absolute;
		padding-top: 0upx;
		padding-left: 0upx;
		left: 2px;
		top: 2px;
		font-size: 18rpx;
		font-weight: 500;
		box-sizing: border-box;
		height: 45upx;
		width: 45upx;
		opacity:0.3;
	}
</style>
