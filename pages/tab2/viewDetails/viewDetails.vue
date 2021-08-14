<template>
	<!-- 景区详情 -->
	<view>
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''">
			<!-- 顶部返回栏 -->
			<!-- 顶部导航 -->
			<view>
				<view class="fixed">
					<view class="cu-bar bg-white">
						<view class="action" @tap="navigateBack">
							<text class="cuIcon-back text-gray"></text> 返回
						</view>
						<view class="content text-bold">
							{{ viewInfo.name }}
						</view>
						<view class="action" @tap="showModal" data-target="viewModal">
							<view class="icon t-icon icontubiaozhizuomobanyihuifu-1 load-cuIcon"></view>
						</view>
					</view>
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
		<!-- 结算跳转栏 -->
		<view>
			<!-- 底部菜单栏 -->
			<view class="action-section" @click="unStar" v-if="viewInfo.star">
				<view class="align-center">
					<text class="icon t-icon iconshoucang" ></text>
				</view>
			</view>
			<view class="action-section" @click="star" v-if="!viewInfo.star">
				<view class="align-center">
					<text class="icon t-icon iconshoucang2"></text>
				</view>
			</view>
		</view>
	</view>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>
