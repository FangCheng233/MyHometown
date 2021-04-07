<template>
	<!-- 附近 -->
	<view>
		<!-- 顶部返回栏 -->
		<view>
			
		</view>
		<!-- 附近服务栏 -->
		<view>
			<view style="margin-top: 90rpx;">
				<tui-grid>
					<block v-for="(item,index) in iconList" :key="index">
						<tui-grid-item :cell="5" @click="detail">
							<view class="tui-grid-icon">
								<view class="t-icon" :class="item.cuIcon"></view>
							</view> 
							<text class="tui-grid-label tui-grid-label-5">{{item.name}}</text>
						</tui-grid-item>
					</block>
				</tui-grid>
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
				gridCol: 5,
				gridBorder: false,
				iconList: [{
					cuIcon: 'icontingche',
					color: 'cyan',
					badge: 0,
					name: '停车场'
				}, {
					cuIcon: 'iconjiayouzhan',
					color: 'red',
					badge: 120,
					name: '加油站'
				}, {
					cuIcon: 'iconjiaqizhan',
					color: 'orange',
					badge: 1,
					name: '加气站'
				}, {
					cuIcon: 'iconqichexiangguan-chongdianzhan',
					color: 'yellow',
					badge: 0,
					name: '充电站'
				}, {
					cuIcon: 'iconjiudian',
					color: 'olive',
					badge: 22,
					name: '酒店'
					// 用户发布需求，有人接受并联系进行帮助
				}, {
					cuIcon: 'iconTOILET',
					color: 'cyan',
					badge: 0,
					name: '卫生间'
				}, {
					cuIcon: 'iconyiyuan',
					color: 'cyan',
					badge: 0,
					name: '医院'
				}, {
					cuIcon: 'iconyiyuan',
					color: 'cyan',
					badge: 0,
					name: '包裹代收'
				}, {
					cuIcon: 'iconyiyuan',
					color: 'cyan',
					badge: 0,
					name: '寄件'
				}],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.t-icon {
	    display: inline-block;
	    width: 26px; 
	    height: 26px;
	    background-repeat: no-repeat;
	    background-position: center;
	    background-size: 100%;
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
</style>
