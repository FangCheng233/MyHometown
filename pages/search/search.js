export default {
		data() {
			return {
				viewList: [],
				value: '',
				cleanHistory: true,
				TabCur: 0,
				scrollLeft: 0,
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
				dropdownShow: false,
				dropdownlistData: [{
					name: "微信支付",
				}, {
					name: "支付宝支付",
				}, {
					name: "银行卡支付",
				}, {
					name: "微信支付",
				}, {
					name: "支付宝支付支付宝支付",
				}, {
					name: "银行卡支付",
				}, {
					name: "银行卡支付",
				}, {
					name: "微信支付",
				}, {
					name: "支付宝支付支付宝支付",
				}, {
					name: "银行卡支付",
				}],
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
			// uni.setStorage({
			// 	key: 'history',
			// 	data: this.history,
			// 	success: function () {
					
			// 	}
			// });
		},
		methods: {
			removeHis: function(index) {
				this.dropdownlistData.splice(index,1)
			},
			removeHisAll: function() {
				this.dropdownlistData = []
			},
			navigateDetails: function(e) {
				uni.navigateTo({
					url: '/pages/tab/tab2/viewDetails/viewDetails?id=' + e.currentTarget.dataset.id
				})
			},
			goBack: function() {
				uni.navigateBack()
			},
			tabSelect: function(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				// if(this.TabCur = 1){
				// 	let postData = {
				// 		arg: this.value
				// 	}
				// 	this.$api.searchBaikeAPI(postData).then(res=>{
				// 		if(res.data.code == 200){
				// 			let cityinfo = res.data.data
				// 			this.city_url = cityinfo.ImgUrl
				// 			this.city_content = cityinfo.content
				// 		}
				// 	});
				// }
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
							let view = res.data[i];
							this.viewList.push(
								view
							)
						}						
					}
				});
			},
			dropDownList(index) {
				if (index !== -1) {
					this.value = this.dropdownlistData[index].name
				}
				this.dropdownShow = !this.dropdownShow
			},
		},
	}
