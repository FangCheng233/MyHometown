<template>
	<view>
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
		<!-- 景区热搜榜 -->
		<view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="text-orange"></text> 云游榜单
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in hostList" :key="index" @tap="tabSelect" :data-id="index">
					{{ item.title }}
				</view>
			</scroll-view>
			<!-- 热搜模块 -->
			<view>
				<block v-if="TabCur == 0">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item,index) in viewList" :key="index">
							<view class="cu-avatar radius lg" :style="'background-image:url('+ item.photos +');'"></view>
							<view class="content" @click="navigateDetails" :data-id="item.id">
								<view class="text-pink">
									<view class="text-cut">{{item.name}}</view>
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
				</block>
				<block v-if="TabCur == 1">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item,index) in viewList" :key="index">
							<view class="cu-avatar radius lg" :style="'background-image:url('+ item.photos +');'"></view>
							<view class="content" @click="navigateDetails" :data-id="item.id">
								<view class="text-pink">
									<view class="text-cut">{{item.name}}</view>
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
				</block>
				<block v-if="TabCur == 2">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item,index) in viewList" :key="index">
							<view class="cu-avatar radius lg" :style="'background-image:url('+ item.photos +');'"></view>
							<view class="content" @click="navigateDetails" :data-id="item.id">
								<view class="text-pink">
									<view class="text-cut">{{item.name}}</view>
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
				</block>
				<block v-if="TabCur == 3">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="(item,index) in viewList" :key="index">
							<view class="cu-avatar radius lg" :style="'background-image:url('+ item.photos +');'"></view>
							<view class="content" @click="navigateDetails" :data-id="item.id">
								<view class="text-pink">
									<view class="text-cut">{{item.name}}</view>
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
					</view>
				</block>
			</view>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				viewList: [],
				value: '',
				isLoad: true,
				cleanHistory: true,
				TabCur: 0,
				scrollLeft: 0,
				history: [{
					title: '泰山',
				},
				{
					title: '华山',
				},
				{
					title: '衡山',
				},
				{
					title: '恒山',
				},
				{
					title: '嵩山',
				},
				{
					title: '嵩山少林寺',
				}],
				hostList: [{
					title: '热搜'
				}, {
					title: '人气'
				}, {
					title: '优惠'
				}, {
					title: '热搜榜'
				}
				],
			}
		},
		onLoad() {
			// uni.getStorage({
			// 	key: 'history',
			// 	success: (res)=>{
			// 		this.history = res.data
			// 	},
			// 	fail:function(e){
					
			// 	}
			// });
		},
		onHide() {
			uni.setStorage({
				key: 'history',
				data: this.history,
				success: function () {
					
				}
			});
		},
		methods: {
			removeHis: function(index) {
				this.history.splice(index,1)
			},
			navigateDetails: function(e) {
				uni.navigateTo({
					url: '/pages/tab/tab2/viewDetails/viewDetails?id=' + e.currentTarget.dataset.id
				})
			},
			goBack: function() {
				uni.navigateBack({
					
				})
			},
			tabSelect: function(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			search: function() {

				let his = {
					"title": this.value
				}
				if(this.value != null && this.value != ""){
					// this.history.push(his)
				}
				uni.navigateTo({
					url: '/pages/resultList/resultList?value=' + this.value
				})
			},
			// 获取景点列表
			getData: function(index) {
				// 从后台获取列表数据
				let postData = {
					index: index
				}
				
				this.$api.getHotViewsList(postData).then(res=>{
					
					if(res.data.length > 0){
						// 成功跳转至登陆页面
						for(let i = 0; i < 10; i++) {
							let view = res.data[i].view;
							let tags = res.data[i].tags;
							let photos = res.data[i].imageList;
							view['tags'] = tags;
							view['heat'] = res.data[i].heat;
							
							if(photos.length > 0) {
								view['photos'] = photos[0].url;
							}
							this.viewList.push(
								view
							)
						}						
					}
					if(this.viewList.length==100){
						this.canLoad = false
					}
				});
				this.isLoad = false
			},
			
		},
		onReachBottom() {
			if(this.canLoad){
				this.getData(this.viewList.length);
			} else {
				this.isLoad = true
			}
			
		},
		mounted() {
			// this.getService();
			this.getData(0);
			
		},
	}
</script>

<style>
	.text-wrapper {
	  word-break: break-all;
	  word-wrap: break-word
	}
</style>
