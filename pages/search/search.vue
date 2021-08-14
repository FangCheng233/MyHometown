<template>
	<view>
		<!-- 顶部 -->
		<view>
			<view class="cu-bar search bg-blue">
				<view class="action text-cut" @tap="goBack">
					<tui-icon name="back" color="white"></tui-icon>
				</view>
				<!--下拉选择框 dropdownlist-->
				<view class="search-form round" style="margin-left: 0px;">
					<tui-dropdown-list :show="dropdownShow" :top="90" :margin-left="100" :height="400">
						<template v-slot:selectionbox>
							<view class="search-form round">
								<text class="cuIcon-search"></text>
								<input style="width: 200px;" type="text" placeholder="搜索地区、图片、文章、视频" v-model="value" confirm-type="search" @focus="dropDownList(-1)" @input="onTypeIn()" @blur="dropdownShow=false"></input>
							</view>
						</template>
						<template v-slot:dropdownbox>
							<view class="tui-selected-list">
								<scroll-view scroll-y class="tui-dropdown-scroll">
									<block v-for="(item,index) in dropdownlistData" :key="index">
										<tui-list-cell padding="0"  :unlined="dropdownlistData.length-1==index">
											<view class="tui-cell-class">
												<view class="item">
													<view class="t-icon iconshijian1" style="margin-top: 8px;"></view>
												</view>
												<view class="item" style="margin-left: 10px;" @click="dropDownList(index)">
													<view class="text-cut text-sm">{{item.name}}</view>
												</view>
												<view class="item" @click="removeHis(index)" style="margin-top: 3px;">
													<view class="t-icon iconshanchu3"></view>
												</view>
											</view>
										</tui-list-cell>
									</block>
									<view v-if="dropdownlistData.length!=0" class="text-center" @click="removeHisAll()">清除所有聊天记录</view>
								</scroll-view>
							</view>
						</template>
					</tui-dropdown-list>
				</view>
				<!--下拉选择框-->
				<view class="action" @tap="search">
					<text>搜索</text>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action  text-sm">
				搜索结果
			</view>
		</view>
		<view>
			<!-- 搜索结果 -->
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.title }}
				</view>
			</scroll-view>
			<!-- 景点 -->
			<block v-if="TabCur == 0">
				<!-- 景点 -->
				<view class="cu-list menu-avatar">
					<view class="cu-item" v-for="(item,index) in viewList" :key="index">
						<view class="cu-avatar radius lg" :style="'background-image:url('+ item.image +');'"></view>
						<view class="content" @click="navigateDetails" :data-id="item.id">
							<view class="text-pink">
								<view class="text-cut">{{ item.name }}</view>
								<!-- <view class="cuIcon-hotfill sm" style="margin-left: 5px;">{{item.heat}}</view> -->
								<!-- <view class="cu -tag round bg-green sm" v-for="(litem,lindex) in item.tags">{{ litem}}</view> -->
						</view>
<!-- 						<view>
							<view class="cu-tag round bg-orange sm" v-for="(litem,lindex) in item.tags">{{litem}}</view>
							<view class="cu-tag text-sm" style="background-color: #ffffff;"></view>
						</view> -->
						<view class="text-gray text-sm flex">
							<view class="text-cut" style="margin-bottom: 0px;">
								<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
								 {{item.pname}}·{{item.cityName}}·{{item.aname}}
							</view>
						</view>
					</view>
					<view class="action">
									<!-- <view class="text-green text-xs">正常营业</view> -->
						<view class="cu-tag round xl">¥{{item.cost}}</view>
						</view>
					</view>
				</view>
			</block>
			<!-- 地区 -->
			<block v-if="TabCur == 1">
				<view class="cu-card article" v-if="value != ''&& value != null">
					<view class="cu-item shadow">
						<view class="title">
							<view class="text-cut"> {{ value }}</view>
							</view>
						<view class="content">
							<image :src="city_url" mode="aspectFill"></image>
							<view class="desc">
								<view class="text-content">{{ city_content }}</view>
								<view>
									<view class="cu-tag bg-red light sm round"></view>
									<view class="cu-tag bg-green light sm round"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</block>
			<!-- 游记 -->
			<block v-if="TabCur == 2">
				
			</block>
			<!-- 直播 -->
			<block v-if="TabCur == 3">
			</block>
			<!-- 用户动态 -->
			<block v-if="TabCur == 4">
			</block>
			<!-- 视频 -->
			<block v-if="TabCur == 5">
			</block>
		</view>
		<view>
			
		</view>
		<view>
			
		</view>
		<!-- 景区热搜榜 -->
		
	</view>
</template>
<script src="./search.js"></script>
<style src="./search.css"></style>