<template>
	<!-- 用户动态页面 -->
	<view>
		<!-- 动态发布 -->
		<!-- <view>
			<cu-custom bgColor="bg-gradual-pink" :isBack="false">
				<block slot="backText">返回</block>
				<block slot="content">导航栏</block>
				<block slot="right"></block>
			</cu-custom>
		</view> -->
		<!-- 动态列表 -->
		<view>
			<scroll-view scroll-x class="nav text-center">
				<view class="cu-item" :class="0==TabCur?' cur':''" @tap="tabSelect" data-id="0">
					<text class="t-icon iconbiaoqing text-center"></text> 推荐
				</view>
				<view class="cu-item" :class="1==TabCur?' cur':''" @tap="tabSelect" data-id="1">
					附近
				</view>
				<view class="cu-item" :class="2==TabCur?' cur':''" @tap="tabSelect" data-id="2">
					好友
				</view>
			</scroll-view>
			<!--  -->
			<view>
				<block v-if="TabCur == 0">
					<!-- 仅展示图片信息 点击后才获取视频 -->
					<!-- <t-view-list ref="tViewList"></t-view-list> -->
					<view class="cu-bar bg-white margin-top">
						<view class="action">
							刘德华
						</view>
						<view class="action text-sm">
							2小时前
						</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-3 grid-square flex-sub margin-xl">
							<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
							 <image :src="imgList[index]" mode="aspectFill"></image>
								<!-- <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
									<text class='cuIcon-close'></text>
								</view> -->
							</view>
							<!-- <view class="solids" @tap="ChooseImage" v-if="imgList.length<9">
								<text class='cuIcon-cameraadd'></text>
							</view> -->
						</view>
					</view>
					<!--加载loadding-->
					<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
					<!-- <tui-nomore v-if="!pullUpOn"></tui-nomore> -->
					<!--加载loadding-->
					<view class="tui-safearea-bottom"></view>
				</block>
				
			</view>
		</view>
		<view>
		</view>
		<view>
		</view>
		<view>
		</view>
		<view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				loadding: false,
				imgList: [],
				card: [{
					
						img: {
							url: "/static/images/news/avatar_1.jpg"
						},
						title: {
							text: "CSDN云计算"
						},
						tag: {
							text: "1小时前"
						},
						header: {
							bgcolor: "#F7F7F7",
							line: true
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_2.jpg",
							width: 80,
							height: 80,
							circle: true
						},
						title: {
							text: "CSDN云计算",
							color: "#ed3f14",
							size: 34
						},
						tag: {
							text: "1小时前",
							color: "#ed3f14",
							size: 28
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_1.jpg",
							circle: true
						},
						title: {
							text: "JavaScript"
						},
						tag: {
							text: "昨天"
						},
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						header: {
							line: true
						}
					}
				]
			}
		},
		onLoad() {
			
		},
		//页面滚动执行方式
		onReachBottom() {
			// this.tui.toast('详情功能尚未完善~')
			this.$refs.tViewList.getViewList();
		},
		mounted(){
			
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			}, 300)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			detail: function() {
				this.tui.toast('详情功能尚未完善~')
			},
			ChooseImage() {
				uni.chooseImage({
					count: 40, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		},
		
	}
</script>

<style>
	.t-icon {
	    display: inline-block;
	    width: 20px; 
	    height: 20px;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-size: 100%;
	}
	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
	
	.tui-content {
		padding: 0rpx 30rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		font-weight: 400;
		color: #333;
	}
	.tui-flex-pic {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		background: #fff;
		padding: 0 120rpx;
	}
	
	.tui-flex-pic image {
		width: 32%;
		margin-bottom: 2%;
	}
	.tui-default {
		padding: 20rpx 30rpx;
	}
	.tui-content {
		padding: 0rpx 30rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		font-weight: 400;
		color: #333;
	}
	.tui-pleft {
		padding-left: 120rpx;
	}
	.tui-color-gray {
		color: #ccc;
	}
</style>
