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
<script src="./index.js"></script>
<style src="./index.css"></style>
