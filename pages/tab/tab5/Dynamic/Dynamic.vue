<template>
	<view>
		<view>
			
			
		</view>
		<view style="margin-top: 90rpx;">
			<view v-for="i in 4">
				<tui-card :image="card[1].img" :title="card[0].title" :full="true" :header="card[3].header" :border="true" @click="detail"
				 @longclick="detail">
					<template v-slot:body>
						<view class="tui-content">
							现实是此岸，成功是彼岸，中间隔着湍急的河流，兴趣便是河上的桥，只要行动就可以通过。
						</view>
						<view class="tui-default tui-flex-pic">
							<image src="/static/images/product/1.jpg" mode="widthFix"></image>
							<image src="/static/images/product/2.jpg" mode="widthFix"></image>
							<image src="/static/images/product/3.jpg" mode="widthFix"></image>
							<image src="/static/images/product/4.jpg" mode="widthFix"></image>
							<image src="/static/images/product/5.jpg" mode="widthFix"></image>
							<image src="/static/images/product/1.jpg" mode="widthFix"></image>
							<image src="/static/images/product/5.jpg" mode="widthFix"></image>
							<image src="/static/images/product/2.jpg" mode="widthFix"></image>
							<image src="/static/images/product/3.jpg" mode="widthFix"></image>
						</view>
				
					</template>
					<template v-slot:footer>
						<view class="tui-default tui-pleft">
							<view class="text-xs">深圳.世界之窗</view>
							<view class="tui-color-gray">7小时前</view>
						</view>
					</template> 
				</tui-card>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card: [{
						img: {
							url: "/static/images/news/avatar_1.jpg",
							size: 0
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
		methods: {
			detail: function() {
				this.tui.toast('详情功能尚未完善~')
			}
		}
	}
</script>

<style>
	.tui-content {
		padding: 0rpx 100rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		font-weight: 400;
		color: #333;
	}
	.tui-default {
		padding: 10rpx 20rpx;
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
		width: 22%;
		margin-bottom: 2%;
	}
	.tui-pleft {
		padding-left: 120rpx;
	}
	.tui-color-gray {
		color: #ccc;
	}
</style>
