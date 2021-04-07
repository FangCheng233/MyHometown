<template>
	<view>
		<!-- 顶部导航 -->
		<view>
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">专属定制</block>
			</cu-custom>
		</view>
		<view >
			<view class="hotel-content">
				<view class="hotel-content-bg">
					<view class="hotel-head"></view>
					<view class="tab">
						<view class="tab-nav">
							<view class="tab-nav-item" :class="tab == 1 ? ' tab-active' : ''" @click="changeTab(1)"><text>行程计划</text></view>
							<view class="tab-nav-item" :class="tab == 0 ? ' tab-active' : ''" @click="changeTab(0)"><text>随他趣</text></view>
						</view>
						<view class="tab-panel">
						
							<!-- 目的地计划 begin -->
							<view class="tab-panel-item" :class="tab == 1 ? ' tab-active' : ''">
								<view class="city-select b-line">
									<view class="city-swap" @click="changeCity"></view>
									<view class="city-select-item" @tap="selectCity" data-target="from">{{ Departure }}</view>
									<view class="city-select-item city-fr" @tap="selectCity" data-target="target">{{ Destination }}</view>
								</view>
								<view class="city-select b-line city-calendar" @tap="selectDate(2)">
									<view class="city-select-item">
										<p>出发日期</p>
										<h2>
											{{ minDate }}
											<em v-if="true"></em>
										</h2>
									</view>
									<view class="city-select-item">
										<p>返程日期</p>
										<h2>
											{{ maxDate }}
										</h2>
									</view>
								</view>
								<view class="flex flex-mar b-line">
									<view class="flex-head">
										<view class="uni-input">
											<p class="text-center">目的地</p>
											<p class="text-center">出行方式</p>
										</view>
										
									</view>
									<view class="flex-box">
										<view class="cell-item" v-for="(item, index) in carry" :key="index" @click="changeCarry(index)">
											<view class="cell-right"><i :class="'cell-checkbox-' + (index == carryIndex ? 'check' : 'uncheck')"></i></view>
											<text class="cell-left">{{ item }}</text>
										</view>
									</view>
								</view>
								<view class="flex flex-mar b-line" v-if="carryIndex==0">
									<view class="flex-head">
										<view class="uni-input">
											<!-- <p class="text-center">目的地</p> -->
											<!-- <p class="text-center">出行方式</p> -->
										</view>
										
									</view>
									<view class="flex-box margin-left-xl">
										<view class="cell-item" v-for="(item, index) in transType" :key="index" @click="changeTransTypeIndex(index)">
											<view class="cell-right"><i :class="'cell-checkbox-' + (index == transTypeIndex ? 'check' : 'uncheck')"></i></view>
											<text class="cell-left">{{ item }}</text>
										</view>
									</view>
								</view>
								<view class="flex-button-box"><button class="flex-button-btn">确定</button></view>
							</view>
							<!-- 目的地计划 end -->
							<!-- 喜好推荐 begin -->
							<view class="tab-panel-item" :class="tab == 0 ? ' tab-active' : ''">
								<view class="flex flex-mar b-line">
									<view class="hotel-city">{{ Departure }}</view>
									<view class="flex-box hotel-text" @tap="selectCity" data-target="from">
										我的位置
										<i class="icon icon-location"></i>
									</view>
								</view>
										
								<view class="city-select b-line city-calendar" @tap="selectDate(5)">
									<view class="city-select-item">
										<p>最早出发</p>
										<h2>
											{{ minDate }}
											<em v-if="true"></em>
										</h2>
									</view>
									<view class="city-select-item">
										<p>最晚出发</p>
										<h2>
											{{ maxDate }}
										</h2>
									</view>
								</view>
										
								<view class="flex flex-mar b-line">
									<view class="flex-head">个人偏好</view>
									<view class="flex-box"><input type="text" class="flex-search" value="" placeholder="价格不限/星级不限" disabled/></view>
								</view>
										
								<view class="flex-button-box"><button class="flex-button-btn">确定</button></view>
							</view>
							<!-- 喜好推荐 end -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			
		</view>
		<view>
			
		</view>
		<view>
			
		</view>
		<view>
			<tui-calendar
				:lunar="lunar"
				isFixed
				:minDate="minDate"
				:maxDate="maxDate"
				:btnType="btnType"
				:activeBgColor="activeBgColor"
				:rangeBgColor="rangeBgColor"
				:rangeColor="rangeColor"
				:startText="startText"
				:endText="endText"
				:arrowType="arrowType"
				:type="type"
				:initStartDate="initStartDate"
				:initEndDate="initEndDate"
				ref="calendar"
				@change="change"
			></tui-calendar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Departure: '',
				Destination : '',
				which: '',
				index: 0,
				TabCur: 0,
				scrollLeft: 0,
				tab: 1,
				carry: ['自由行', '跟团游'],
				transType: ['自驾', '包车', '其他'],
				carryIndex: -1,
				transTypeIndex: -1,
				type: 1,
				status: [],
				arrowType: 1,
				minDate: '',
				maxDate: '',
				btnType: 'primary',
				activeBgColor: '#5677fc',
				rangeBgColor: 'rgba(86,119,252,0.1)',
				rangeColor: '#5677fc',
				startText: '开始',
				endText: '结束',
				lunar: true,
				result: '',
				lunarResult: '',
				initStartDate: '',
				initEndDate: '',
			}
		},
		methods: {
			switchChange: function(e) {
				this.lunar = e.target.value;
			},
			selectDate: function(type) {
				this.initEndDate = '';
				this.maxDate = '2021-12-31';
				// this.initStartDate = this.minDate;
				this.type = 2;
				switch (type) {
					case 1:
						this.type = 1;
						break;
					case 2:
						this.type = 2;
						// this.minDate = '2021-03-01';
						// this.maxDate = '2021-12-31';
						break;
					case 3:
						this.minDate = '2021-03-01';
						this.maxDate = '';
						this.type = 1;
						break;
					case 4:
						this.type = 2;
						this.btnType = 'danger';
						this.activeBgColor = '#EB0909';
						this.rangeBgColor = 'rgba(235,9,9,0.1)';
						this.rangeColor = '#EB0909';
						this.arrowType = 2;
						break;
					case 5:
						this.type = 2;
						this.startText = '最早';
						this.endText = '最晚';
						break;
					case 6:
						this.arrowType = 2;
						break;
					case 7:
						this.type = 2;
						this.initStartDate = '2020-06-06';
						this.initEndDate = '2020-06-28';
						break;
					default:
						break;
				}
				this.$refs.calendar.show();
			},
			change: function(e) {
				console.log(e);
				if (this.type == 1) {
					this.result = e.result + ' ' + e.week;
					let date = `${e.lunar.lYear}-${e.lunar.lMonth}-${e.lunar.lDay}`;
					this.lunarResult = `${e.lunar.gzYear}年，${e.lunar.gzMonth}月，${e.lunar.gzDay}日 。生肖：${e.lunar.Animal}。日期：${e.lunar.IMonthCn + e.lunar.IDayCn}(${date})`;
				} else {
					this.result = `${e.startDate} 至 ${e.endDate}`;
					let sDate = `${e.startLunar.IMonthCn + e.startLunar.IDayCn}(${e.startLunar.lYear}-${e.startLunar.lMonth}-${e.startLunar.lDay})`;
					let eDate = `${e.endLunar.IMonthCn + e.endLunar.IDayCn}(${e.endLunar.lYear}-${e.endLunar.lMonth}-${e.endLunar.lDay})`;
					this.lunarResult = `${sDate} 至 ${eDate}`;
					this.minDate = e.startDate;
					this.maxDate = e.endDate;
				}
			},
			monthChange: function(e) {
				//  {
				// 	days: 31, //当月共有多少天
				// 	isToday: false, //是否为今天
				// 	result: "2020-05-04",
				// 	year: 2020
				// 	month: 5,
				// 	day: 4,
				// 	week: "星期一"
				// }
				if (e.switch) {
					let now = new Date();
					let year = now.getFullYear();
					let month = now.getMonth() + 1;
					let day = now.getDate() - 1;
					if (e.year == year && e.month == month) {
						let days = e.days;
						let status = [];
						for (let i = 0; i < days; i++) {
							let bgColor = '';
							let check = false;
							if (i <= day) {
								bgColor = i === day ? '#19be6b' : '#ff7900';
								check = i === day ? true : false;
							} else {
								bgColor = '#999';
							}
							status.push({
								bgColor: bgColor,
								color: '#fff',
								check: check
							});
						}
						this.status = status;
					} else {
						this.status = [];
					}
				}
			},
			changeTab: function(e) {
				this.tab = e;
			},
			changeTransTypeIndex: function(e) {
				if (this.transTypeIndex == e) {
					this.transTypeIndex = -1;
					return;
				}
				this.transTypeIndex = e;
			},
			changeCarry: function(e) {
				if (this.carryIndex == e) {
					this.carryIndex = -1;
					return;
				}
				this.carryIndex = e;
			},
			changeCity: function() {
				let temp = this.Departure
				this.Departure  = this.Destination
				this.Destination = temp
			},
			GradePickerChange: function(e) {
				this.pickerIndex.grade = e.target.value;
			},
			tabSelect: function(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			selectCity: function(e) {
				this.which = e.currentTarget.dataset.target
				uni.navigateTo({
					url:'/pages/tab/tab1/City/City'
				})
			}
		},
		onLoad() {

			if(this.Departure==''){
				this.Departure='渭南'
				this.Destination='云南'
			}
			this.$eventHub.$on('emit', data => {
				if(this.which == 'from'){
					this.Departure = data
				} else {
					this.Destination = data
				}
			});
			let now = new Date();
			let year = now.getFullYear();
			let month = now.getMonth() + 1;
			let day = now.getDate();
			this.minDate = `${year}-${month}-${day}`
			
		},
		onHide() {
			_this.$eventHub.$off('emit')
		}
	}
</script>

<style lang="scss" scoped>
	
	.flex {
		display: flex;
		align-items: center;
		padding: 30rpx;
		position: relative;
	}
	
	.flex-box {
		flex: 1;
		min-width: 0;
		font-size: 28rpx;
		color: #333;
	}
	
	.hotel-content {
		width: 750rpx;
		height: 100%;
		position: fixed;
		background-image: linear-gradient(to bottom, #6ccc7b, #119160);
		background-color: #0d8f5e;
		overflow: scroll;
	}
	
	
	.tab {
		padding-top: 100rpx;
		position: absolute;
		width: 92%;
		top: 40%;
		margin-top: -440rpx;
		margin-right: 4%;
		margin-left: 4%;
	}
	
	.tab-nav {
		height: 80rpx;
		line-height: 80rpx;
		display: block;
		position: relative;
		z-index: 1;
		width: 75%;
		border-radius: 40rpx 40rpx 0 0;
	}
	
	.tab-nav-item {
		height: 80rpx;
		line-height: 80rpx;
		position: relative;
		text-align: center;
		color: #fff;
		font-size: 34rpx;
		display: block;
		float: left;
		border-radius: 40rpx 40rpx 0 0;
		width: 50%;
		background: #cbcbcb;
		margin-right: -10px;
	}
	
	.tab-nav-item.tab-active {
		color: #1dd08c;
		font-weight: bold;
		background-color: #fff;
		z-index: 100;
	}
	
	.tab-panel {
		position: relative;
		overflow: hidden;
		background: #fff;
		border-radius: 0 40rpx 40rpx 40rpx;
		transition: height 2s;
		padding-bottom: 20rpx;
	}
	
	.tab-panel .tab-panel-item {
		width: 100%;
		position: absolute;
		top: 0;
		transform: translateX(-100%);
	}
	
	.tab-panel .tab-panel-item.tab-active {
		position: relative;
		transition: transform 0.15s;
		transform: translateX(0);
	}
	
	.hotel-city {
		font-size: 34rpx;
		font-weight: bold;
	}
	
	.hotel-text {
		font-size: 32rpx;
		color: #666666;
		width: 100%;
		text-align: right;
		position: relative;
		padding-right: 40rpx;
	}
	
	.flex-mar {
		margin: 0 40rpx;
		padding: 30rpx 0;
	}
	
	.Date_lr {
		width: 30%;
		text-align: center;
		line-height: 40rpx;
	}
	
	.calendar-days {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 28rpx;
		color: #0bc66f;
		padding: 4rpx 16rpx;
		line-height: 40rpx;
		background-color: #fff;
		border-bottom: 2rpx solid #0bc66f;
	}
	
	.checkinout {
		height: 100rpx;
		line-height: 100rpx;
		position: relative;
		padding: 4rpx 0;
		display: -webkit-box;
		display: flex;
		background-color: #fff;
		margin: 0 40rpx;
	}
	
	.firstSelect p {
		line-height: 50rpx;
		color: #585858;
		font-size: 24rpx;
	}
	
	
	.flex-head {
		font-size: 30rpx;
		color: #222222;
		padding-left: 10rpx;
	}
	
	.flex-button-box {
		padding: 20rpx 40rpx;
	}
	
	.flex-button-btn {
		text-align: center;
		position: relative;
		border: none;
		pointer-events: auto;
		width: 100%;
		display: block;
		font-size: 38rpx;
		line-height: 88rpx;
		margin-top: 18rpx;
		background-color: #0bc66f;
		color: #fff;
		box-shadow: 0 4rpx 16rpx #6ee0ab;
		border-radius: 200rpx;
		height: 88rpx;
		outline: none;
	}
	
	.flex-button-btn:hover {
		outline: none;
	}
	
	.flex-search {
		color: #666666;
		font-size: 26rpx;
		padding-left: 10rpx;
	}
	
	.city-select {
		position: relative;
		display: flex;
		align-items: center;
		height: 100rpx;
		padding: 0 20rpx;
		margin: 0 40rpx;
	}
	
	.city-swap {
		position: absolute;
		left: 50%;
		top: 50%;
		color: #b9b9b9;
		transform: translate(-50%, -50%);
		width: 50rpx;
		height: 50rpx;
		background: url('@/static/images/icon-swap.png') no-repeat;
		background-size: contain;
	}
	
	.city-select-item {
		width: 45%;
		margin-right: 10%;
		line-height: 84rpx;
		height: 84rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #212121;
		font-weight: bolder;
	}
	
	.city-select .city-fr {
		width: 45%;
		float: right;
		line-height: 84rpx;
		height: 84rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #212121;
		margin-right: 0;
		text-align: right;
	}
	
	.city-calendar .city-select-item {
		line-height: normal;
	}
	
	.city-calendar .city-fr {
		text-align: left;
	}
	
	.city-calendar .city-select-item p {
		color: #666666;
		font-size: 32rpx;
		font-weight: normal;
		padding-top: 6rpx;
		line-height: 36rpx;
	}
	
	.city-calendar .city-select-item h2 {
		font-weight: normal;
		font-size: 30rpx;
	}
	
	.city-calendar .city-select-item h2 em {
		font-style: normal;
		color: #666666;
		font-size: 30rpx;
		font-weight: normal;
	}
	
	.city-select .city-fr h2 {
		font-style: normal;
		color: #666666;
		font-size: 26rpx;
		font-weight: normal;
		position: relative;
	}
	
	
	.cell-checkbox-uncheck:after {
		content: '';
		width: 32rpx;
		height: 32rpx;
		display: block;
		border-radius: 100%;
		background-image: url(data:image/png;base64,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);
		background-size: 32rpx;
	}
	
	.cell-checkbox-check:after {
		content: '';
		width: 32rpx;
		height: 32rpx;
		display: block;
		border-radius: 100%;
		background-image: url(data:image/png;base64,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);
		background-size: 32rpx;
	}
	
	.cell-item {
		display: flex;
		position: relative;
		overflow: hidden;
		font-size: 32rpx;
		color: #333;
		float: left;
		margin: 0 0.4rem 0 0.8rem;
	}
	
	.cell-left {
		width: 100%;
		color: #666666;
		font-size: 0.75rem;
		white-space: nowrap;
		display: flex;
		align-items: center;
	}
	
	.icon {
		width: 40rpx;
		height: 40rpx;
		display: inline-block;
		background-repeat: no-repeat;
		background-size: 40rpx;
	}
	
	.icon-location {
		background-image: url('data:image/png;base64,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');
		width: 30rpx;
		height: 30rpx;
		background-size: 30rpx;
		position: absolute;
		right: 0;
		bottom: 0.15rem;
	}
	
	.icon-add {
		width: 30rpx;
		height: 30rpx;
		background-size: 30rpx;
		position: absolute;
		left: 3.2rem;
		bottom: 0.01rem;
		background-image: url('data:image/png;base64,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');
	}
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}
	
	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}
	
	.title {
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}
	
	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}
	
	.tui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}
	
	.tui-calendar-box {
		padding: 20rpx;
		background-color: #fff;
		margin-top: 40rpx;
		box-sizing: border-box;
	}
	
	.tui-title {
		width: 100%;
		padding: 80rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tui-ptop20 {
		padding-top: 20rpx;
	}
	
	.tui-switch {
		transform: scale(0.8);
		transform-origin: 100% center;
	}
	
	.tui-color-primary {
		color: #5677fc;
	}
</style>
