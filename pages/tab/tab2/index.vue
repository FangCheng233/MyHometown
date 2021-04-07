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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: '',
				gridCol: 5,
				gridCol2: 4,
				current: 1,
				notice: '参与活动，赢取机票、门票等，还有更多好礼等你来拿',
				animation: false,
				gridBorder: false,
				item: {},
				cuIconList: [
					{"badge":0,"color":"red","cuIcon":"icontushuguan","name":"旅游图书馆","url":'/pages/tab/tab4/Library/Library'},
					{"badge":1,"color":"orange","cuIcon":"iconzudui","name":"组队","url":'/pages/tab/tab2/team/team'},
					{"badge":0,"color":"yellow","cuIcon":"iconfabu","name":"消息发布","url":'/pages/tab/tab2/Intelligence/Intelligence'},
					{"badge":1,"color":"olive","cuIcon":"iconcooperation","name":"互助"},
					{"badge":0,"color":"cyan","cuIcon":"iconminzongwei","name":"寻根"},
					{"badge":0,"color":"blue","cuIcon":"iconfujin","name":"附近","url":'/pages/tab/tab2/near/near'},
					{"badge":0,"color":"purple","cuIcon":"iconhuodong5","name":"活动"},
					{"badge":0,"color":"mauve","cuIcon":"iconchengshi","name":"城市"},
					{"badge":0,"color":"purple","cuIcon":"icondaoyou1","name":"找找看","url":"/pages/tab/tab2/type/type"},
					{"badge":0,"color":"mauve","cuIcon":"iconzhoubian","name":"出游告警"}],
				viewList: [],
				searchTypes: [{
					cuIcon: 'iconshanchuan',
					title: '山川',
					value: ''
				}, {
					cuIcon: 'iconcao',
					title: '草原',
					value: ''
				}, {
					cuIcon: 'iconhaiyang',
					title: '海洋',
					value: ''
				}, {
					cuIcon: 'iconlishimingcheng',
					title: '古镇',
					value: ''
				}, {
					cuIcon: 'iconquhaidaowan',
					title: '海岛',
					value: ''
				}, {
					cuIcon: 'iconlishimingcheng',
					title: '古镇',
					value: ''
				}, {
					cuIcon: 'iconlishi2',
					title: '历史',
					value: ''
				}, {
					cuIcon: 'iconTrekking',
					title: '徒步',
					value: ''
				}, {
					cuIcon: 'iconminzu',
					title: '民族风情',
					value: ''
				}, {
					cuIcon: 'icon_qinziguanxi',
					title: '亲子',
					value: ''
				}, {
					cuIcon: 'iconwenquan',
					title: '温泉',
					value: ''
				}, {
					cuIcon: 'iconsenlin',
					title: '森林公园',
					value: ''
				}
				],
				result: null,
				isLoad: true,
				canLoad: true,
				
			}
		},
		onLoad() {
			setTimeout(() => {
				this.animation = true
			}, 600)	
		},
		methods: {
			
			InputFocus: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			sliderChange: function(e) {
				console.log('value 发生变化：' + e.detail.value)
			},
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			},
			detail: function(e) {
				this.tui.toast('详情功能尚未完善~')
			},
			navigateDetails: function(e) {
				uni.navigateTo({
					url: '/pages/tab/tab2/viewDetails/viewDetails?id=' + e.currentTarget.dataset.id
				})
			},
			//获取服务列表
			getService: function() {
				let postData = {
					
				}
				this.$api.getServiceAPI(postData).then(res=>{
					console.log(res.data)
					this.cuIconList = res.data
				});
			},
			// 获取景点列表
			getData: function(index) {
				// 从后台获取列表数据
				let postData = {
					index: index
				}
				
				this.$api.getHotViewsList(postData).then(res=>{
					
					if(res.data.length > 0){
						// 
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
			onRefresh: function() {
				setTimeout(()=>{
					uni.stopPullDownRefresh();
				},300);
				this.viewList = [];
				this.getData(0);
			}
		},
		onReachBottom() {
			if(this.canLoad){
				this.getData(this.viewList.length);
			} else {
				this.isLoad = true
			}
			
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			},300);
			this.viewList = [];
			this.getData(0);
			
		},
		mounted() {
			// this.getService();
			this.getData(0);
			
		},
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
	
	.cu-list.menu-avatar>.cu-item .content {
		position: absolute;
		left: 146upx;
		width: calc(100% - 96upx - 60upx - 120upx - 20upx);
		line-height: 1.2em;
	}
</style>
