<template>
	<!-- 引导页 -->
    <view>
        <uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="guidelList" :current="current" mode="round" :dots-styles="dotsStyles" field="content">
        	<swiper class="screen-swiper" @change="change" :current="swiperDotIndex" :circular="true"
			:style="[{height: windowHeight-200 +'px'}]"
			>
        		<swiper-item v-for="(item,index) in guidelList" :key="index">
        			<image :src="item.url" mode="aspectFill"></image>
        		</swiper-item>
        	</swiper>
        </uni-swiper-dot>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight: this.windowHeight,
				guidelList: [{
					url: 'https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517_1280.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【七彩云南】昆明-大理-丽江-香格里拉北线7日6晚深度游'
				}, {
					url: 'https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517_1280.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【好客山东】济南-蓬莱-青岛，从大山深处到东海之滨'
				}, {
					url: 'https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517_1280.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【兴汉胜境】西安出发98元洋县一日游'
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
				swiperDotIndex: 0,
				animation:'',
			}
		},
		mounted() {
			setTimeout(()=>{
				uni.switchTab({
					url: '/pages/tab/tab1/index'
				})
			},2000)
		},
		methods: {
			change: function(e) {
				this.current = e.detail.current
			},
			clickItem: function(e) {
				this.swiperDotIndex = e
			},
		}
	}
</script>

<style>
	.tui-banner-swiper {
		width: 100%;
		height: 100%;
		border-radius: 12rpx;
		overflow: hidden;
		transform: translateY(0);
	}
	.tui-slide-image {
		width: 100%;
		height: 100%;
		display: block;
	}
	.screen-swiper {
		min-height: 100% !important;
	}
</style>
