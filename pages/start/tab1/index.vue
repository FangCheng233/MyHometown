<template>
	<view>
		<view>
			<!-- 顶部导航栏 搜索框 消息-->
			<!-- 顶部需要做微信端适配 -->
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
				<view class="bg-transparent search-form round">
					<text class="cuIcon-search text-white"></text>
					<swiper vertical autoplay circular interval="3000" class="tui-swiper">
						<swiper-item v-for="(item, index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search" tui-bg-transparen>
							<input @focus="InputFocus" :adjust-position="false" type="text" :placeholder="item" :value="value" confirm-type="search" placeholder-style="color: #ffffff;"></input>
						</swiper-item>
					</swiper>
				</view>
				<!-- 城市 -->
				<view class="action text-white">
					<navigator url="/pages/tab1/City/City">
						<view class="cuIcon-location text-center">
						</view>
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
			<!-- <scroll-view scroll-x>
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
			</scroll-view> -->
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange">热门景区</text>
				<text class="text-sm text-red margin-left">票价仅供参考</text>
			</view>
			<view>
				<text class="text-sm margin-right cuIcon-refresh" @tap="onRefresh"></text> 
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in viewList" :key="index">
				<view class="cu-avatar radius lg" :style="'background-image:url('+ item.image +');'"></view>
				<view class="content" @click="navigateDetails" :data-id="item.id">
					<view class="text-pink">
						<view class="text-cut">{{item.name }}</view>
						<view class="cuIcon-hotfill sm" style="margin-left: 5px;">{{item.heat}}</view>
						<!-- <view class="cu-tag round bg-green sm" v-for="(litem,lindex) in item.tags">{{ litem}}</view> -->
					</view>
					<view>
						<view class="cu-tag round bg-orange sm" v-for="(litem,lindex) in item.tags">{{litem}}</view>
						<view class="cu-tag text-sm" style="background-color: #ffffff;"></view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut" style="margin-bottom: 0px;">
							<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
							 {{item.pname}}·{{item.cityName}}·{{item.aname}}
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-green text-xs">正常营业</view>
					<view class="cu-tag round xl">¥{{item.cost}}</view>
				</view>
			</view>
			<view class="cu-load bg-grey" :class="!isLoad?'loading':'over'"></view>
		</view>
		
	</view>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
