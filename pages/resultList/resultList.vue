<template>
	<!-- 搜索页面 -->
	<view>
		<!-- 顶部返回 -->
		<!-- 顶部 -->
		<view>
			<view class="cu-bar search bg-white">
				<view class="action" @tap="goBack">
					<text>取消</text>
				</view>
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索地区、图片、文章、视频" v-model="value" confirm-type="search"></input>
				</view>
				
				<view class="action" @tap="search">
					<text>搜索</text>
				</view>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view>
			<view class="cu-bar">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>搜索历史
				</view>
				<view class="action">
					<!-- 删除按钮 -->
					<view class="cuIcon-deletefill" @tap="cleanHistory = false" v-if="cleanHistory"></view>
					<view class="cuIcon-roundclosefill" @tap="cleanHistory = true" v-if="!cleanHistory"></view>
				</view>
			</view>
			<view class="grid padding-xs">
				<view class="margin-tb-sm text-center" v-for="(item,index) in history" :key="index" v-if="item.name!='white'">
					<button class="cu-btn margin-right round line-gray shadow" @tap="value = item.title" v-if="cleanHistory">
						<text class="text-sm">{{ item.title}}</text>
					</button>
					<button class="cu-btn margin-right round line-gray shadow" @tap="removeHis(index)" v-if="!cleanHistory">
						<text class="text-sm">{{ item.title}}</text>
						<view class="cuIcon-delete"></view>
					</button>
				</view>
			</view>
		</view>
		<view>
			<!-- 搜索结果 -->
			<view class="cu-bar bg-white solid-bottom">
				<view class="action  text-sm">
					搜索结果
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.title }}
				</view>
			</scroll-view>
			<!-- 景点 -->
			<block v-if="TabCur == 0">
<!-- 				<view class="tui-header-top">
					<view class="tui-top-item" @tap="screen">综合</view>
					<view class="tui-top-item" @tap="screen">销量</view>
					<view class="tui-top-item" @tap="screen">
						<view>价格</view>
						<view class="tui-price-arrow">
							<view class="tui-icon-box tui-arrow-up">
								<tui-icon name="turningup" :size="12" color="#444"></tui-icon>
							</view>
							<view class="tui-icon-box tui-arrow-down">
								<tui-icon name="turningdown" :size="12" color="#444"></tui-icon>
							</view>
				
						</view>
					</view>
					<view class="tui-top-item tui-screen" @tap="screen">
						<text class="tui-bold">筛选</text>
						<tui-icon name="screen" :size="12" color="#5677fc" :bold="true"></tui-icon>
					</view>
				</view> -->
				<!-- 景点 -->
				<view class="cu-list menu-avatar">
					<view class="cu-item" v-for="(item,index) in viewList" :key="index">
						<view class="cu-avatar radius lg" :style="'background-image:url('+ item.photos +');'"></view>
						<view class="content" @click="navigateDetails" :data-id="item.id">
							<view class="text-pink">
								<view class="text-cut">{{ item.name }}</view>
								<!-- <view class="cuIcon-hotfill sm" style="margin-left: 5px;">{{item.heat}}</view> -->
								<!-- <view class="cu -tag round bg-green sm" v-for="(litem,lindex) in item.tags">{{ litem}}</view> -->
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
				<search-live></search-live>
				
			</block>
			<!-- 用户动态 -->
			<block v-if="TabCur == 4">
				<search-context></search-context>
			</block>
			<!-- 视频 -->
			<block v-if="TabCur == 5">
				<search-video></search-video>
			</block>
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
				TabCur: 0,
				isLoad: false,
				viewList: [],
				scrollLeft: 0,
				cleanHistory: true,
				history: [],
				tabList: [{
					title: '景点'
				}, {
					title: '地区'
				}, {
					title: '游记'
				}, {
					title: '直播'
				}, {
					title: '文章'
				}, {
					title: '视频'
				}, {
					title: '用户'
				}],
				value: '',
				city_url: '',
				city_content: '',
				canLoad: false,
			};
		},
		onLoad(option) {
			this.value = option.value
			this.search()
			uni.getStorage({
				key: 'history',
				success: (res)=>{
					this.history = res.data
				},
				fail:function(e){
					
				}
			});
		},
		methods: {
			removeHis: function(index) {
				this.history.splice(index,1)
			},
			screen: function() {
				
			},
			tabSelect: function(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.$eventHub.$emit('select',{msg:this.value})
			},
			navigateDetails: function(e) {
				uni.navigateTo({
					url: '/pages/tab/tab2/viewDetails/viewDetails?id=' + e.currentTarget.dataset.id
				})
			},
			goBack: function() {
				uni.navigateTo({
					url: '/pages/tab/tab2/index'
				})
			},
			removeHis: function(index) {
				if(this.cleanHistory == false){
					this.history.splice(index,1)
				}
			},
			search: function() {
				let postData = {
					arg: this.value
				}
				let his = {
					"title": this.value
				}
				// this.history.push(his)
				this.viewList = []
				this.$api.searchAPI(postData).then(res=>{
					// 跳转至结果列表
					if(res.data.length > 0){
						// 成功跳转至登陆页面
						for(let i = 0; i < res.data.length; i++) {
							let view = res.data[i].view;
							let tags = res.data[i].tags;
							let image = res.data[i].image;
							view['tags'] = tags;
							view['heat'] = res.data[i].heat;
							if(image != null) {
								view['photos'] = image.url;
							}
							this.viewList.push(
								view
							)
						}						
					}
				});
				this.$api.searchBaikeAPI(postData).then(res=>{
					if(res.data.code == 200){
						let cityinfo = res.data.data
						this.city_url = cityinfo.ImgUrl
						this.city_content = cityinfo.content
					}
				});
			},
			
		}
	}
</script>

<style>
	.tui-header-top,
	.tui-header-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
		margin-top: 6px;
		color: #333;
	}
	.tui-top-item {
		height: 46rpx;
		line-height: 36rpx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tui-price-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.tui-icon-box {
		line-height: 9px !important;
		padding: 0 !important;
		display: block !important;
		position: relative;
	}

</style>
