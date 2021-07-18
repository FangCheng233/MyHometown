<template>
	<view>
		<!-- 顶部操作栏  扫码 -->
		<view>
			<view class="cu-bar bg-grey search">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
				<view class="content">
					旅行目的地
				</view>
				<view class="action" @tap="show = !show">
					<text class="">出发</text>
				</view>
			</view>
		</view>
		<view>
			<checkbox-group @change="checkAllboxChange">
				<view v-for="(pitem, pindex) in Like" :key="pindex.id">
					<view class="cu-bar-city">
						<view class="cu-form-group-city bg-green margin-left">
							<view class="title">{{ pitem.name}}</view>
						</view>
						<view class="action">
							<!-- 省份复选框 -->
							<checkbox class="round" :class="pitem.checked?'checked':''" :checked="pitem.checked" :value="pitem.id + ''"></checkbox>
						</view>
					</view>
					<checkbox-group @change="checkboxChange" :data-pindex="pindex">
						<view class="margin-sm" v-for="(citem,cindex) in Like[pindex].city">
							<view class="cu-list menu-avatar">
								<view class="cu-item" :class="modalName=='move-box-'+ vitem.id?'move-cur':''" v-for="(vitem,cindex) in Like[pindex].city[cindex].view" :key="vitem.id"
								 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + vitem.id">
									<view class="cu-avatar lg" :style="[{backgroundImage:'url('+ vitem.image }]">
									</view>
									<view class="content">
										<view class="text-grey">
											<view class="text-cut">{{ vitem.name }}</view>
											<view class="text-green text-sm cu-tag round sm">学生优惠</view>
										</view>
										<view class="text-gray text-sm">
											{{ vitem.address }}
											<text class="text-red "></text>
										</view>
									</view>
									<view class="margin-right">
										
										<view class="text-grey text-xl">
											<text class="text-price"></text>{{ vitem.cost /2}}
										</view>
										<view class="text-orange text-sm line-through">
											<text class="text-price"></text>{{ vitem.cost}}
										</view>
									</view>
									
									<!-- 尾部复选框 -->
									<checkbox class="round margin-right" :class="vitem.checked?'checked':''" :value="vitem.id" :checked="vitem.checked" ></checkbox>
									<view class="move">
										<view class="bg-grey">置顶</view>
										<view class="bg-red">删除</view>
									</view>
								</view>
							</view>
						</view>
					</checkbox-group>
				</view>
			</checkbox-group>
		</view>
		<view>
			<view class="cu-modal show" v-if="show">
				<view class="cu-dialog">
					<tui-pointMark :GDPSpeed="cityCodes">
					</tui-pointMark>
					<view class="cu-bar-city bg-white" style="height: 30px;">
						<view class="action margin-0 flex-sub  solid-left" @tap="show = !show">重新选择</view>
						<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">生成路线地图</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import tuiPointMark from '@/components/thorui/tui-pointMark/tui-pointMark.vue'
	export default {
		data() {
			return {
				modalName: null,
				listTouchStart: 0,
				Like: [],
				checkedList: [],
				cityCodes: [],
				show: false
			}
				
		},
		methods: {
			checkboxChange: function (e) {
				var pindex = e.currentTarget.dataset.pindex;
			    var items = this.Like,
			        values = e.detail.value;
				// 省级
			    for (var i = 0, lenI = 1; i < lenI; ++i) {
					// 市级遍历
					const it = items[pindex]
					var selected = 0, sum = 0;
					for (var j = 0, lenJ = it.city.length, itemI = it.city; j < lenJ; ++j) {
						// 景点遍历
						for (var k = 0, lenK = itemI[j].view.length, itemJ = itemI[j].view; k < lenK; ++k) {
							sum++;
							const item = itemJ[k]
							if(values.includes(itemJ[k].id)){
							    this.$set(item,'checked', true)
								this.setCheckedInfoList(item.id)
							}else{
							    this.$set(item,'checked', false)
								this.removeCheckedInfoList(item.id)
							}
							if(item.checked == true){
								selected++;
							}
						}
					}
					if(selected == sum && sum){
						this.$set(it,'checked',true)
					} else {
						this.$set(it,'checked',false)
					}
			    }
				this.searchCity()
			},
			checkAllboxChange: function (e) {
			    var items = this.Like,
			        values = e.detail.value;
				// 省级
			    for (var i = 0, lenI = items.length; i < lenI; ++i) {
					// 市级遍历
					const it = items[i]
					if(values.includes(it.id + "")){
					    this.$set(it,'checked',true)
					}else{
					    this.$set(it,'checked',false)
					}
					for (var j = 0, lenJ = items[i].city.length, itemI = items[i].city; j < lenJ; ++j) {
						// 景点遍历
						for (var k = 0, lenK = itemI[j].view.length, itemJ = itemI[j].view; k < lenK; ++k) {
							var item = itemJ[k]
							if(values.includes(it.id + "")){
							    this.$set(item,'checked',true)
								this.setCheckedInfoList(item.id)
							}else{
							    this.$set(item,'checked',false)
								this.removeCheckedInfoList(item.id)
							}
						}
					}
			    }
				this.searchCity()
			},
			setCheckedInfoList: function(id){
				var checkedList = this.checkedList;
				var a = checkedList.findIndex(item => item == id);
				if(a < 0){
					checkedList.push(id)
				}
				this.checkedList = checkedList
			},
			removeCheckedInfoList: function(id){
				var checkedList = this.checkedList;
				// for(var i = 0; i < checkedList.length; i++){
					var a = checkedList.findIndex(item => item == id);
					if(a>=0){
						checkedList.splice(a, 1);
					}
				// }
				this.checkedList = checkedList
			},
			// ListTouch触摸开始
			ListTouchStart: function(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove: function(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd: function(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			detail: function() {
				this.tui.toast("click~")
			},
			loadStar: function() {
				this.$api.getUserStarAPI({}).then(res=>{
					this.Like = res.data
				});
			},
			searchCity: function() {
				let postData = {
					viewIds: this.checkedList
				}
				this.$api.getCityCode(postData).then(res=>{
					if(res.data.length >0){
						for(var i = 0; i < res.data.length; i++){
							this.cityCodes[res.data[i]] = 7
						}
					}
				});
				
			}
			
		},
		onShow() {
			this.loadStar()
		}
		
	}
</script>

<style>
	
	.icon {
	   width: 1.5em; height: 1.5em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}
	
	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tui-right {
		margin-left: auto;
		margin-right: 34rpx;
		font-size: 26rpx;
		color: #999;
	}
	.tui-logo {
		height: 52rpx;
		width: 52rpx;
		flex-shrink: 0;
	}
	
	.line-through {
		text-decoration:line-through;
	}
	.cu-bar-city {
		display: flex;
		position: relative;
		align-items: center;
		height: 60upx !important;
		justify-content: space-between;
	}
/* 	.cu-form-group-city {
		background-color: #ffffff;
		padding: 1upx 30upx;
		display: flex;
		align-items: center;
		min-height: 100upx;
		justify-content: space-between;
	} */
</style>
