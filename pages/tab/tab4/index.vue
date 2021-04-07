<template>
	<view>
		<!-- 顶部操作栏  扫码 -->
		<view>
			<view class="cu-bar bg-grey search">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
				<view class="content">
					旅行目的地
				</view>
				<view class="action">
					<text class="cuIcon-more"></text>
				</view>
			</view>
		</view>
		<view>
			<view v-for="(pitem, pindex) in Like" :key="pindex">
				<view class="cu-bar bg-white margin-top">
					<view class="cu-form-group bg-blue">
						<view class="title margin-left">{{Like[pindex].name}}</view>
					</view>
					<view class="action">
						<!-- 省份复选框 -->
						<checkbox class="round" :class="pitem.selected?'checked':''" :checked="Like[pindex].selected" value="B"></checkbox>
					</view>
				</view>
				<view class="margin-sm" v-for="(citem,cindex) in Like[pindex].city">
					<view class="cu-list menu-avatar">
						<view class="cu-item" :class="modalName=='move-box-'+ cindex?'move-cur':''" v-for="(vitem,cindex) in Like[pindex].city[cindex].view" :key="cindex"
						 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + cindex">
							
							<view class="cu-avatar lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (cindex+2) +'.jpg)'}]">
								
							</view>
							<view class="content">
								<view class="text-grey">
									<view>{{ vitem.name }}</view>
									<view class="text-green text-sm cu-tag round sm">学生优惠</view>
								</view>
								<view class="text-gray text-sm">
									消息未送达
									<text class="cuIcon-infofill text-red "></text>
								</view>
							</view>
							<view class="margin-right">
								
								<view class="text-grey text-xl">
									<text class="text-price"></text>80
								</view>
								<view class="text-orange text-sm line-through">
									<text class="text-price"></text>160
								</view>
							</view>
							
							<!-- 尾部复选框 -->
							<checkbox class="round margin-right" :class="vitem.selected?'checked':''" :checked="vitem.selected" value="B" ></checkbox>
							<view class="move">
								<view class="bg-grey">置顶</view>
								<view class="bg-red">删除</view>
							</view>
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
				modalName: null,
				listTouchStart: 0,
				Like: [{
						name: '云南省',
						selected: true,
						city: [{
							name: '昆明市',
							selected: true,
							view: [{
								name: '海埂大坝',
								selected: false,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								name: '翠湖公园',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}, {
							name: '大理白族自治州',
							selected: true,
							view: [{
								name: '大理古城',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								name: '崇圣寺',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								name: '苍山',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}]
					}, {
						name: '贵州省',
						selected: true,
						city: [{
							name: '',
							view: [{
								name: '',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								name: '',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}, {
							name: '昆明市',
							selected: true,
							view: [{
								name: '海埂大坝',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								name: '',
								selected: true,
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}]
					}
				],
				
			}
				
		},
		methods: {
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			detail: function() {
				this.tui.toast("click~")
			}
			
		}
	}
</script>

<style>
	
	.icon {
	   width: 1.5em; height: 1.5em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
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
	
	.line-through {
		text-decoration:line-through;
	}

</style>
