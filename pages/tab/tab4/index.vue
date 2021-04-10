<template>
	<view>
		<!-- 顶部操作栏  扫码 -->
		<view>
			<view class="cu-bar bg-grey search">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
				<view class="content">
					旅行目的地
				</view>
				<view class="action">
					<text class=""></text>
				</view>
			</view>
		</view>
		<view>
			<checkbox-group @change="checkAllboxChange">
				<view v-for="(pitem, pindex) in Like" :key="pindex.id">
					<view class="cu-bar bg-white margin-top">
						<view class="cu-form-group bg-blue">
							<view class="title margin-left">{{ pitem.name}}</view>
						</view>
						<view class="action">
							<!-- 省份复选框 -->
							<checkbox class="round" :class="pitem.checked?'checked':''" :checked="pitem.checked" :value="pitem.id"></checkbox>
						</view>
					</view>
					<checkbox-group @change="checkboxChange" :data-pindex="pindex">
						<view class="margin-sm" v-for="(citem,cindex) in Like[pindex].city">
							<view class="cu-list menu-avatar">
								<view class="cu-item" :class="modalName=='move-box-'+ vitem.id?'move-cur':''" v-for="(vitem,cindex) in Like[pindex].city[cindex].view" :key="vitem.id"
								 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + vitem.id">
									
									<view class="cu-avatar lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (cindex+2) +'.jpg)'}]">
										
									</view>
									<view class="content">
										<view class="text-grey">
											<view>{{ vitem.name }}</view>
											<view class="text-green text-sm cu-tag round sm">学生优惠</view>
										</view>
										<view class="text-gray text-sm">
											{{ vitem.address }}
											<text class="text-red "></text>
										</view>
									</view>
									<view class="margin-right">
										
										<view class="text-grey text-xl">
											<text class="text-price"></text>80
										</view>
										<view class="text-orange text-sm line-through">
											<text class="text-price"></text>160
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
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				listTouchStart: 0,
				Like: [{
						id: '0',
						name: '云南省',
						city: [{
							name: '昆明市',
							view: [{
								id: '1',
								name: '海埂大坝',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '2',
								name: '翠湖公园',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}, {
							name: '大理白族自治州',
							view: [{
								id: '3',
								name: '大理古城',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '4',
								name: '崇圣寺',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '5',
								name: '苍山',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '6',
								name: '蝴蝶泉',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}]
					}, {
						id: '1',
						name: '贵州省',
						city: [{
							name: '贵阳市',
							view: [{
								id: '7',
								name: '黔灵山公园',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '8',
								name: '甲秀楼',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}, {
							name: '黔东南苗族自治州',
							selected: true,
							view: [{
								id: '9',
								name: '西江千户苗寨',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}, {
								id: '10',
								name: '天眼',
								address: '',
								cost: 0,
								image: '',
								url: ''
							}]
						}]
					}
				],
				checkedList: [],
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
							    this.$set(item,'checked',true)
								this.setCheckedInfoList(item.id)
							}else{
							    this.$set(item,'checked',false)
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
			},
			checkAllboxChange: function (e) {
			    var items = this.Like,
			        values = e.detail.value;
				// 省级
			    for (var i = 0, lenI = items.length; i < lenI; ++i) {
					// 市级遍历
					const it = items[i]
					if(values.includes(it.id)){
					    this.$set(it,'checked',true)
					}else{
					    this.$set(it,'checked',false)
					}
					for (var j = 0, lenJ = items[i].city.length, itemI = items[i].city; j < lenJ; ++j) {
						// 景点遍历
						for (var k = 0, lenK = itemI[j].view.length, itemJ = itemI[j].view; k < lenK; ++k) {
							const item = itemJ[k]
							if(values.includes(it.id)){
							    this.$set(item,'checked',true)
								this.setCheckedInfoList(item.id)
							}else{
							    this.$set(item,'checked',false)
								this.removeCheckedInfoList(item.id)
							}
						}
					}
			    }
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
			}
			
		},
		created() {
			this.$api.getUserStarAPI({}).then(res=>{
				this.Like = res.data
			});
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

</style>
