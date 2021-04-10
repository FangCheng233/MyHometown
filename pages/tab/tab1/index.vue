<template>
	<view>
		<view>
			<!-- 顶部导航栏 搜索框 消息-->
			<!--header-->
			<uni-swiper-dot @clickItem=clickItem :info="topshow" :current="current" mode="nav" :dots-styles="dotsStyles" field="content">
				<swiper class="screen-swiper" @change="change" :current="swiperDotIndex" :circular="true" :autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item,index) in topshow" :key="index">
						<image :src="item.url" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
			<view class="cu-bar fixed">
				<navigator url="/pages/chat/msgList/msgList">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg">
						<view class="cu-tag badge" v-if="message>0">{{ message>99?'99+':message }}</view>
					</view>
				</navigator>
				<view class="bg-transparent search-form round ">
					<text class="cuIcon-search text-white"></text>
					<swiper vertical autoplay circular interval="3000" class="tui-swiper">
						<swiper-item v-for="(item, index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search" tui-bg-transparen>
							<input @focus="InputFocus" :adjust-position="false" type="text" :placeholder="item" :value="value" confirm-type="search" placeholder-style="color: #ffffff;"></input>
						</swiper-item>
					</swiper>
				</view>
				<view class="action text-white">
					<navigator url="/pages/tab/tab1/City/City">
						<view class="cuIcon-location text-center">
						</view>
						<!-- 选择地域，查看对应的活动 -->
						<view class="text-sm">
							<text>{{ city }}</text>
						</view>
					</navigator>
				</view>
			</view>
			<!-- 顶部结束 -->
			
			<!--header-->
		</view>
		<view>
			<!-- 超值推荐 -->
			<view>
				<view class="padding-sm tui-group-name border" style="width: 100%;">
					<!-- <view class="padding-xl radius shadow bg-white"></view> -->
					<text class="text-purple shadow margin-xs"></text>
				</view>
				<view>
					<view class="flex flex-wrap justify-center" :style="[{height: windowHeight*0.2 + 'px'}]">
						
						<view class="bg-grey box-size bg-img" :class="'basis-' + item.size" :style="[{backgroundImage: 'url(' + item.bg_url +')'}]" v-for="(item, index) in youhui" :key="index">
							<view :style="[{marginTop: item.mt + 'px',marginLeft: item.ml +'px'}]">
								<!-- <text class="text-cut">{{ item.title }}</text> -->
							</view>
						</view>
						
					</view>
				</view>
			</view>
			
		</view>
		<view>
			<scroll-view scroll-x>
				<view class="tui-share-top">
					<view class="tui-share-item" :class="[shareList[0].share.length-1===index?'tui-item-last':'']" v-for="(item,index) in shareList[0].share"
					 :key="index" @tap="popup">
						<view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="150">
							<view class="text-xxl icon " :class="item.icon"></view>
						</view>
						<view class="tui-share-text">{{item.name}}</view>
					</view>
					<view class="tui-empty">!</view>
				</view>
			</scroll-view>
		</view>
		<view>
			<view class="tui-group-name">
				<text class="margin-xs">特惠玩乐</text>
			</view>
			<view>
				<view v-for="(item, index) in active" :key="index">
					<!-- 操作卡片 -->
					<!-- 浮动按钮实现 -->
					<view class="padding-xs radius">
						<view class="cu-card case">
							<view class="image" :style="[{height: windowHeight/6 +'px'}]">
								<image :src="item.bg_url"></image>
								<view class="cu-tag bg-blue">{{ item.title }}</view>
								<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{ item.context }}</text></view>
							</view>
							<!-- <view class="text-gray text-sm text-right padding">
								<text class="margin-lr-xs">浏览</text> {{ item.lock }}
								<text class="margin-lr-xs">收藏</text> {{ item.star }}
								<text class="margin-lr-xs">购买</text> {{ item.buy }}
							</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: this.windowHeight,
				topshow: [{
					url: '/static/images/tuijian/lugu-lake-4648775_1920.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【七彩云南】昆明-大理-丽江-香格里拉北线7日6晚深度游'
				}, {
					url: '/static/images/tuijian/in-yunnan-province-2098392_1920.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【好客山东】济南-蓬莱-青岛，从大山深处到东海之滨'
				}, {
					url: '/static/images/tuijian/youcaihua.jpeg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【兴汉胜境】西安出发98元洋县一日游'
				}, {
					url: 'https://th.bing.com/th/id/Rcd8ba9aee6421377d230a4bcc025caa7?rik=34qU1QAH9Okzkg&riu=http%3a%2f%2fmp-piao-admincp.qunarzz.com%2fmp_piao_admin_mp_piao_admin%2fadmin%2f20203%2f0a6f08938b7e0a72596348f9cc5e1797.jpg_1920x818_e228d186.jpg&ehk=G16NlHL9B3IyLep0DK1yifFdZ%2bKJNLinu4er6UU7puU%3d&risl=&pid=ImgRaw',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【多彩贵州】1599双飞4日游'
				}, {
					url: 'https://n.sinaimg.cn/sinakd10119/536/w1920h1016/20200804/d051-ixeeisa2356373.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【艳遇之都】世界遗产，茶马古道上的商业重镇'
				}, {
					url: '/static/images/sea.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【三亚】穿上泳衣，和大海来一次亲密接触'
				}, {
					url: 'https://youimg1.c-ctrip.com/target/100112000000rzg64DE73.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【广西】十万大山深处的秘密等你来发现'
				}],
				youhui: [{
					bg_url: 'https://th.bing.com/th/id/R22070d526ce56434dcbf516a387e8a22?rik=7akjtUHZs1h5Aw&riu=http%3a%2f%2fpicture.ik123.com%2fuploads%2fallimg%2f170707%2f3-1FFG31P9.jpg&ehk=LBWI7JBkh3AJhuBKyzad4q4IXPVdjvpuwhzvHheoCGA%3d&risl=&pid=ImgRaw',
					title: '清明赏花季',
					url: '',
					size: 'lg',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://p3.pstatp.com/large/50ad000060b9cb0b0ba6',
					title: '自由行',
					url: '',
					size: '30',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/14/07/36/china-2639589_1280.jpg',
					title: '周边一日游',
					url: '',
					size: '30',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://www.21rv.com/userfiles/image/20190416/16111750ef8d002eec1938_1068_712.jpg',
					title: '房车旅行',
					url: '',
					size: '30',
					ml: 0,
					mt: 20
				}, {
					bg_url: 'https://th.bing.com/th/id/R00f12610c10711b87ba836b9abb73d2c?rik=Hc6gNbEFkFAWGg&riu=http%3a%2f%2fimg1.juimg.com%2f150822%2f330732-150R200430965.jpg&ehk=rd6GbUj0hDEKNVX8zo5USqogesBWXPeSQez3mBQTZaU%3d&risl=&pid=ImgRaw',
					title: '挑战极限',
					url: '',
					size: '30',
					ml: 0,
					mt: 20
				}],
				value: '',
				city: '西安',
				message: 200,
				hotSearch: ['丽江古城', '宽窄巷子', '达古冰川', '九寨沟', '三亚', '稻城'],
				shareList: [{
					share: [{
						name: "扫一扫",
						icon: "iconsaoma1",
						color: "#07BDFD",
						size: 34
					}, {
						name: "健康码",
						icon: "iconjiankangma",
						color: "#80D640"
					}, {
						name: "正在进行",
						icon: "iconbojuelvpaiicontilian_huabanfuben",
						color: "#80D640",
						size: 32
					}, {
						name: "景区一码通",
						icon: "icontubiao_quanwanghutong",
						color: "#00AAEE"
					}, {
						name: "疫情动态",
						icon: "iconSlice19",
						color: "#F9C718"
					}, {
						name: "分类查找",
						icon: "iconfenlei",
						color: "#2BA348"
					}]
				}],
				active: [{
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563__480.jpg',
					title: '云游出品',
					context: '【限时特惠】999超低价格，来一场浪漫海滨之旅',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2014/02/28/16/45/mountains-276995__480.jpg',
					title: '云游出品',
					context: '【限时特惠】#梅里雪山 和雪山有一场约会',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2018/08/14/10/54/danxia-3605281__480.jpg',
					title: '云游出品',
					context: '【七彩张掖】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2018/12/14/17/06/panda-3875426__480.jpg',
					title: '云游出品',
					context: '【限时特惠】来成都邂逅大熊猫，3日2夜888',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2016/11/28/13/14/terracotta-army-1864972__480.jpg',
					title: '云游出品',
					context: '【限时特惠】世界八大奇迹之一的兵马俑',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://pic2.zhimg.com/v2-0a0d7026304978b1e52223182e983e56_r.jpg?source=1940ef5c',
					title: '云游出品',
					context: '【限时特惠】魔幻与现实的结合 #重庆两日游',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://tse3-mm.cn.bing.net/th/id/OIP._uQfqdV9RtkEyqpu_jIfJwHaEo?pid=ImgDet&rs=1',
					title: '',
					context: '【限时特惠】西安还是长安？双人3日游',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/14/07/37/china-2639590__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://tse2-mm.cn.bing.net/th/id/OIP.Wpme0Q5jZ2VU9KRAMG8ELgHaDg?w=310&h=165&c=7&o=5&dpr=2&pid=1.7',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				dotsStyles: {},
				swiperDotIndex: 0
			}
		},
		mounted() {
			
		},
		onLoad() {
			// const eventChannel = this.getOpenerEventChannel();
			let _this = this
			this.$eventHub.$on('emit', data => {
				this.city = data
				// setTimeout(() => {
				// 	this.tui.toast('您选择了：' + data);
				// }, 350);
			});
		},
		onHide() {
			this.$eventHub.$off('emit')
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},300)
		},
		methods: {
			change: function(e) {
				this.current = e.detail.current
			},
			clickItem: function(e) {
				this.swiperDotIndex = e
			},

			popup: function() {
				this.popupShow = !this.popupShow
			},
			search: function() {
				uni.navigateTo({
					url: '../../news/search/search'
				});
			},
			InputBlur: function() {
				
			},
			InputFocus: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style>
	/* 热门景点 */
	
	/* header start */
	.cu-bar {
		box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;
	}
	.bg-transparent {
		border-style:solid;
		border-width: 1px;
		background-color: transparent;
		/* background-color: #0062CC; */
		border-color: #ffffff;
	}
	.search-form {
		background-color: transparent !important;
		line-height: 64upx;
		height: 64upx;
		font-size: 24upx;
		color: #333333;
		flex: 1;
		display: flex;
		align-items: center;
		margin: 0 30upx;
	}
	.cu-tag.badge {
		border-radius: 200upx;
		position: absolute;
		top: -10upx;
		right: -20upx;
		font-size: 20upx;
		padding: 0upx 5upx;
		height: 28upx;
		color: #ffffff;
	}
	/* header end */
	
	.tui-swiper {
		margin-left: 8rpx;
		font-size: 28rpx;
		height: 80rpx;
		flex: 1;
	}
	
	.tui-swiper-item {
		display: flex;
		align-items: center;
	}
	
	
	.tui-group-name {
		width: 100%;
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		padding: 4rpx 10rpx;
		display: flex;
		/* align-items: center; */
		/* justify-content: left; */
	}
	.box-size {
		/* height: auto !important; */
		border-style:solid !important;
		border-spacing: auto !important;
		border-width: 2px !important;
		border-radius: 10px;
	}
	
	.tui-share-top,
	.tui-share-bottom {
		min-width: 101%;
		padding: 0 10rpx 0 20rpx;
		white-space: nowrap;
	}
	.tui-share-item {
		width: 126rpx;
		display: inline-block;
		margin-right: 24rpx;
		text-align: center;
	}
	
	.tui-item-last {
		margin: 0;
	}
	.tui-empty {
		display: inline-block;
		width: 30rpx;
		visibility: hidden;
	}
	
	.tui-share-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fafafa;
		height: 126rpx;
		width: 126rpx;
		border-radius: 32rpx;
	}
	
	.tui-share-text {
		font-size: 24rpx;
		color: #7E7E7E;
		line-height: 24rpx;
		padding: 0rpx 0;
		white-space: nowrap;
	}
	.title {
		z-index: 999;
	}
	
	.swiper-box {
		height: 200px;
	}

	.uni-bg-red {
		background-color: #ff5a5f;
	}
	
	.uni-bg-green {
		background-color: #09bb07;
	}
	
	.uni-bg-blue {
		background-color: #007aff;
	}
</style>
