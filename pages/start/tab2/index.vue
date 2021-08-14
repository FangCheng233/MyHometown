<template>
	<view>
		<!-- 顶部操作栏 筛选动态-->
		<view>
			<cu-custom bgColor="bg-gray fixed" :isBack="false">
				<block slot="right">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input @focus="InputFocus" type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
					</view>
				</block>
				<block slot="right">
					<view class="action" @tap="showModal" data-target="DrawerModalR">
						<view class="icon iconshaixuan1 text-center">
						</view>
						<view class="text-sm">
							<text >筛选</text>
						</view>
					</view>
				</block>
			</cu-custom>
		</view>
		<view>
			<!-- 筛选列表 -->
			
			<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
				<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
					<view class="cu-list menu text-left">
						<view>
							<view class="text-sm margin-left text-gray">搜索范围 km</view>
							<view>
								<slider value="20" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="10" min="0" max="200" show-value/>
							</view>
						</view>
						<view>
							<view class="text-sm margin-left text-gray">搜索类型</view>
							<view class="cu-list menu-avatar">
								<view class="cu-list grid no-border col-4" >
									<view class="cu-item" v-for="(item,index) in searchTypes" :key="index" v-if="index<gridCol2*3">
										<view>
											<view class="t-icon" :class="item.cuIcon"></view>
										</view>
										<text>{{item.title}}</text>
									</view>
								</view>
							</view>
						</view>
						<view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<!-- 操作列表 基础服务 -->
			<view class="cu-card case bg-grey">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-list grid no-border col-5" >
							<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
								<navigator :url="item.url" hover-class="opcity" :hover-stay-time="150">
									<view>
										<view class="t-icon" :class="item.cuIcon"></view>
										<view class="cu-tag badge" v-if="item.badge!=0">
											<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
										</view>
									</view>
									<text>{{item.name}}</text>
								</navigator>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view>
			
			
		</view>
		<!-- 景区榜单 下拉刷新-->
		<view>
			<view>
				<view class="tui-group-name">
					<text class="margin-xs">特惠玩乐</text>
				</view>
				<view>
					<view v-for="(item, index) in active" :key="index">
						<!-- 操作卡片 -->
						<!-- 浮动按钮实现 -->
						<view class="padding-xs radius">
							<view class="cu-card case">
								<view class="image" :style="[{height: windowHeight/6 +'px'}]">
									<image :src="item.bg_url"></image>
									<view class="cu-tag bg-blue">{{ item.title }}</view>
									<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{ item.context }}</text></view>
								</view>
								<!-- <view class="text-gray text-sm text-right padding">
									<text class="margin-lr-xs">浏览</text> {{ item.lock }}
									<text class="margin-lr-xs">收藏</text> {{ item.star }}
									<text class="margin-lr-xs">购买</text> {{ item.buy }}
								</view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>