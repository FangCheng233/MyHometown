export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				loadding: false,
				imgList: [],
				card: [{
					
						img: {
							url: "/static/images/news/avatar_1.jpg"
						},
						title: {
							text: "CSDN云计算"
						},
						tag: {
							text: "1小时前"
						},
						header: {
							bgcolor: "#F7F7F7",
							line: true
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_2.jpg",
							width: 80,
							height: 80,
							circle: true
						},
						title: {
							text: "CSDN云计算",
							color: "#ed3f14",
							size: 34
						},
						tag: {
							text: "1小时前",
							color: "#ed3f14",
							size: 28
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_1.jpg",
							circle: true
						},
						title: {
							text: "JavaScript"
						},
						tag: {
							text: "昨天"
						},
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						header: {
							line: true
						}
					}
				]
			}
		},
		onLoad() {
			
		},
		//页面滚动执行方式
		onReachBottom() {
			// this.tui.toast('详情功能尚未完善~')
			this.$refs.tViewList.getViewList();
		},
		mounted(){
			
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh();
			}, 300)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			detail: function() {
				this.tui.toast('详情功能尚未完善~')
			},
			ChooseImage() {
				uni.chooseImage({
					count: 40, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
		},
		
	}