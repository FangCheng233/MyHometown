export default {
		data() {
			return {
				windowHeight: this.windowHeight,
				viewList: [],//景点列表
				topshow: [{
					url: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【七彩云南】昆明-大理-丽江-香格里拉北线7日6晚深度游'
				}, {
					url: 'http://1.14.67.162/images/tuijian/in-yunnan-province-2098392_1920.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【好客山东】济南-蓬莱-青岛，从大山深处到东海之滨'
				}, {
					url: 'http://1.14.67.162/images/tuijian/youcaihua.jpeg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【兴汉胜境】西安出发98元洋县一日游'
				}, {
					url: 'https://th.bing.com/th/id/Rcd8ba9aee6421377d230a4bcc025caa7?rik=34qU1QAH9Okzkg&riu=http%3a%2f%2fmp-piao-admincp.qunarzz.com%2fmp_piao_admin_mp_piao_admin%2fadmin%2f20203%2f0a6f08938b7e0a72596348f9cc5e1797.jpg_1920x818_e228d186.jpg&ehk=G16NlHL9B3IyLep0DK1yifFdZ%2bKJNLinu4er6UU7puU%3d&risl=&pid=ImgRaw',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【多彩贵州】1599双飞4日游'
				}, {
					url: 'https://n.sinaimg.cn/sinakd10119/536/w1920h1016/20200804/d051-ixeeisa2356373.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【艳遇之都】世界遗产，茶马古道上的商业重镇'
				}, {
					url: 'https://cdn.pixabay.com/photo/2016/11/29/06/49/woman-1867908_1280.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【三亚】穿上泳衣，和大海来一次亲密接触'
				}, {
					url: 'https://youimg1.c-ctrip.com/target/100112000000rzg64DE73.jpg',
					title: '',
					title_style: '',
					colorClass: 'uni-bg-red',
					content: '【广西】十万大山深处的秘密等你来发现'
				}],
				youhui: [{
					bg_url: 'https://th.bing.com/th/id/R22070d526ce56434dcbf516a387e8a22?rik=7akjtUHZs1h5Aw&riu=http%3a%2f%2fpicture.ik123.com%2fuploads%2fallimg%2f170707%2f3-1FFG31P9.jpg&ehk=LBWI7JBkh3AJhuBKyzad4q4IXPVdjvpuwhzvHheoCGA%3d&risl=&pid=ImgRaw',
					title: '清明赏花季',
					url: '',
					size: 'lg',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://p3.pstatp.com/large/50ad000060b9cb0b0ba6',
					title: '自由行',
					url: '',
					size: '30',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/14/07/36/china-2639589_1280.jpg',
					title: '周边一日游',
					url: '',
					size: '30',
					ml: 0,
					mt: 0
				}, {
					bg_url: 'https://www.21rv.com/userfiles/image/20190416/16111750ef8d002eec1938_1068_712.jpg',
					title: '房车旅行',
					url: '',
					size: '30',
					ml: 0,
					mt: 20
				}, {
					bg_url: 'https://th.bing.com/th/id/R00f12610c10711b87ba836b9abb73d2c?rik=Hc6gNbEFkFAWGg&riu=http%3a%2f%2fimg1.juimg.com%2f150822%2f330732-150R200430965.jpg&ehk=rd6GbUj0hDEKNVX8zo5USqogesBWXPeSQez3mBQTZaU%3d&risl=&pid=ImgRaw',
					title: '挑战极限',
					url: '',
					size: '30',
					ml: 0,
					mt: 20
				}],
				value: '',
				city: '西安',
				message: 200,
				hotSearch: ['丽江古城', '宽窄巷子', '达古冰川', '九寨沟', '三亚', '稻城'],
				shareList: [{
					share: [{
						name: "扫一扫",
						icon: "iconsaoma1",
						color: "#07BDFD",
						size: 34
					}, {
						name: "健康码",
						icon: "iconjiankangma",
						color: "#80D640"
					}, {
						name: "正在进行",
						icon: "iconbojuelvpaiicontilian_huabanfuben",
						color: "#80D640",
						size: 32
					}, {
						name: "景区一码通",
						icon: "icontubiao_quanwanghutong",
						color: "#00AAEE"
					}, {
						name: "疫情动态",
						icon: "iconSlice19",
						color: "#F9C718"
					}, {
						name: "分类查找",
						icon: "iconfenlei",
						color: "#2BA348"
					}]
				}],
				dotStyle: [{
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
					}
				],
				modeIndex: -1,
				styleIndex: -1,
				current: 0,
				dotsStyles: {},
				swiperDotIndex: 0,
				isLoad: true, //
				canLoad: true, //加载标志
				old: {
				    scrollTop: 0
				}
			}
		},
		mounted() {
			
		},
		onLoad() {
			// const eventChannel = this.getOpenerEventChannel();
			let _this = this
			this.$eventHub.$on('emit', data => {
				this.city = data
				// console.log(data)
				// setTimeout(() => {
				// 	this.tui.toast('您选择了：' + data);
				// }, 350);
			});
		},
		onHide() {
			this.$eventHub.$off('emit')
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},300)
		},
		methods: {
			scroll: function(e) {
			            console.log(e)
			            this.old.scrollTop = e.detail.scrollTop
			        },
			change: function(e) {
				this.current = e.detail.current
			},
			clickItem: function(e) {
				this.swiperDotIndex = e
			},

			popup: function() {
				this.popupShow = !this.popupShow
			},
			search: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			},
			InputBlur: function() {
				
			},
			InputFocus: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			// 获取景点列表
			getData: function(index) {
				// 从后台获取列表数据
				let postData = {
					index: index
				}
				this.$api.getHotViewsList(postData).then(res=>{
					if(res.data.length > 0) {
						for(let i = 0; i < 10; i++) {
							let view = res.data[i].view;
							let tags = res.data[i].tags;
							let photos = res.data[i].imageList;
							view['tags'] = tags;
							view['heat'] = res.data[i].heat;
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
			//刷新景点列表
			onRefresh: function() {
				setTimeout(()=>{
					uni.stopPullDownRefresh();
				},300);
				this.viewList = [];
				this.getData(0);
			},
			// 跳转到景点详情页面
			navigateDetails: function(e) {
				uni.navigateTo({
					url: '/pages/tab2/viewDetails/viewDetails?id=' + e.currentTarget.dataset.id
				})
			},
		},
		// 触底
		onReachBottom() {
			if(this.canLoad){
				this.getData(this.viewList.length);
			} else {
				this.isLoad = true
			}
			
		},
		//上拉
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			},300);
			this.viewList = [];
			this.getData(0);
			
		},
		mounted(){
			this.getData(0);
		}
	}