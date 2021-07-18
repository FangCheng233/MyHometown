<template>
	<!--  -->
	<view>
		<!-- 顶部返回操作栏 -->
		<view>
			
		</view>
		<!-- 规划路线 -->
		<view>
			<!-- map地图 图层 -->
			<view>
				
			</view>
		</view>
		<!-- 路线详情 -->
		<view>
			<!-- 按照不同的交通工具 -->
			<view>
				<view class="cu-timeline">
					<view class="cu-time">Day1</view>
					<!-- 1 -->
					<view class="cu-item cuIcon-taxi">
						<view class="content">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">出行方式</view>
								<view class="cu-tag line-cyan">公交</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">耗时</view>
								<view class="cu-tag line-cyan">预计2小时</view>
							</view>
							<br/>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">目的地</view>
								<view class="cu-tag line-cyan">西安咸阳国际机场</view>
							</view>
							
							<!-- 关键词使用标签包裹 -->
							<view class="margin-top">从当前位置出发，前往目的地<text class="text-green">西安咸阳国际机场</text>，根据您的定位，为您推荐公交路线。
								<br/><view @tap="" class="text-green">查看公交地图</view>
							</view>
						</view>
					</view>
					<!-- 2 -->
					<view class="cu-item cuIcon-taxi">
						<view class="content">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">出行方式</view>
								<view class="cu-tag line-cyan">飞机</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">耗时</view>
								<view class="cu-tag line-cyan">预计1小时40分钟</view>
							</view>
							<br/>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">位置</view>
								<view class="cu-tag line-cyan">昆明长水国际机场</view>
							</view>
							<view class="margin-top">T2航站楼出发，H55登机口登机，预计安检等候时间3分钟</view>
							<view class="margin-top">到达昆明长水国际机场</view>
						</view>
					</view>
					<!-- 3 -->
					<view class="cu-item cuIcon-taxi">
						<view class="content">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">出行方式</view>
								<view class="cu-tag line-cyan">公交/地铁</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">耗时</view>
								<view class="cu-tag line-cyan">预计40分钟</view>
							</view>
							<br/>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">目的地</view>
								<view class="cu-tag line-cyan">昆明市区</view>
							</view>
							<view class="margin-top">到达层B2前往机场（地铁站）乘坐6号线-换乘5号线，东风大街站（地铁站）</view>
						</view>
					</view>
					<!-- 4 -->
					<view class="cu-item cuIcon-taxi">
						<view class="content">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">出行方式</view>
								<view class="cu-tag line-cyan">步行</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">耗时</view>
								<view class="cu-tag line-cyan">预计2小时</view>
							</view>
							<br/>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">目的地</view>
								<view class="cu-tag line-cyan">金马碧鸡坊</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">门票</view>
								<view class="cu-tag line-cyan">免费</view>
							</view>
							<view class="margin-top">
								<!-- 金马碧鸡坊简介 -->
								<navigator url="" open-type="redirect">
									<text class="text-orange" @tap="">金马碧鸡坊</text>
								</navigator>
								
							</view>
							<view class="cu-item arrow">
								<navigator url="../list/list" open-type="redirect" style="margin-left: 80%;">
									<text class="cuIcon-discoverfill text-orange"></text>
									<text class="text-grey">附近</text>
								</navigator>
							</view>
						</view>
					</view>
					<!-- 5 -->
					<view class="cu-item cuIcon-locationfill">
						<view class="content">
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">耗时</view>
								<view class="cu-tag line-cyan">预计40分钟</view>
							</view>
							<view class="cu-capsule radius">
								<view class="cu-tag bg-cyan">位置</view>
								<view class="cu-tag line-cyan">金马碧鸡坊</view>
							</view>
							<view class="margin-top">到达层B2前往机场（地铁站）乘坐6号线-换乘5号线，东风大街站（地铁站）</view>
						</view>
					</view>
					<view class="cu-time">Day2</view>
					<!--  -->
					
					
					
					
				</view>
				
				
			</view>
			
			<view>
				
			</view>
		</view>
		<!--  -->
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					title: "Day1",
					desc: "2020-04-01"
				}, {
					title: "Day2",
					desc: "2020-04-01"
				}, {
					title: "Day3",
					desc: "2020-04-01"
				}, {
					title: "Day4",
					desc: "2020-04-01"
				}],
				activeSteps: 0
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
</style>
