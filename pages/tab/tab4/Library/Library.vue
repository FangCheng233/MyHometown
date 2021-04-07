<template>
	<!-- 旅游图书馆 -->
	<!-- 查地名 查风俗 查演出 查节日 查民族 -->
	<view>
		<!-- 顶部导航 -->
		<view>
			<view class="fixed">
				<cu-custom :isBack="true" bgColor="bg-shadeTop text-white">
					<block slot="backText">返回</block>
					<block slot="content"></block>
				</cu-custom>
			</view>
			<view class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
				<view class="tower-item" :class="item.zIndex==1?'none':''" v-for="(item,index) in swiperList" :key="index" :style="[{'--index': item.zIndex,'--left':item.mLeft}]" :data-direction="direction">
					<view class="swiper-item">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" :autoplay="false" loop muted :show-play-btn="false" :controls="true" objectFit="cover" v-if="item.type=='video'" @click="play"></video>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="padding-sm">
				<view class="flex flex-wrap justify-around">
					<button class="cu-btn margin-sm basis-sm shadow" :class="['bg-' + item.color,id==item.id?'animation-' +item.name :'']"
					 @tap="Toggle" :data-id="item.id" v-for="(item,index) in list" :key="index">{{item.value}}</button>
				</view>
			</view>
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
				id:'',
				swiperList: [{
					id: 0,
					type: 'video',
					url: 'https://cloud.video.taobao.com//play/u/1768198696/p/1/e/6/t/1/239439242603.mp4'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				direction: '',
				list: [{
						id: '1',
						name: 'scale-down',
						value: '查地名',
						color: 'red'
					},
					{
						id: '2',
						name: 'scale-down',
						value: '查历史',
						color: 'orange'
					},
					{
						id: '3',
						name: 'scale-down',
						value: '查古迹',
						color: 'olive'
					},
					{
						id: '4',
						name: 'scale-down',
						value: '查文创',
						color: 'green'
					}, {
						id: '5',
						name: 'scale-down',
						value: '查庙会',
						color: 'cyan'
					},
					{
						id: '6',
						name: 'scale-down',
						value: '查方言',
						color: 'blue'
					},
					{
						id: '7',
						name: 'scale-down',
						value: '查民俗',
						color: 'purple'
					},
					{
						id: '8',
						name: 'scale-down',
						value: '查节日',
						color: 'mauve'
					},
					{
						id: '9',
						name: 'scale-down',
						value: '查美食',
						color: 'mauve'
					},
					{
						id: '10',
						name: 'scale-down',
						value: '查动物',
						color: 'mauve'
					}
				],
			}
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			Toggle(e) {
				var id = e.currentTarget.dataset.id;
				this.id = id;
				setTimeout(()=>{
					this.id= '';
				}, 1000)
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},
			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},
			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
		}
	}
</script>

<style>
	@import "../../../../colorui/animation.css";
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
</style>
