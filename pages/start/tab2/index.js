export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: '',
				gridCol: 5,
				gridCol2: 4,
				current: 1,// tab页跳转
				notice: '参与活动，赢取机票、门票等，还有更多好礼等你来拿',
				animation: false,
				gridBorder: false,
				item: {},
				cuIconList: [
					{"badge":0,"color":"orange","cuIcon":"iconzudui","name":"组队","url":'/pages/tab/tab2/team/team'},
					{"badge":1,"color":"red","cuIcon":"icontushuguan","name":"旅游途鉴","url":'/pages/tab/tab2/Library/Library'},
					{"badge":0,"color":"yellow","cuIcon":"iconfabu","name":"消息发布","url":'/pages/tab/tab2/Intelligence/Intelligence'},
					{"badge":1,"color":"olive","cuIcon":"iconcooperation","name":"互助"},
					{"badge":0,"color":"cyan","cuIcon":"iconminzongwei","name":"寻根"},
					{"badge":0,"color":"blue","cuIcon":"iconfujin","name":"附近","url":'/pages/tab/tab2/near/near'},
					{"badge":0,"color":"purple","cuIcon":"iconhuodong5","name":"活动资讯"},
					{"badge":0,"color":"mauve","cuIcon":"iconchengshi","name":"城市"},
					{"badge":0,"color":"purple","cuIcon":"icondaoyou1","name":"找找看","url":"/pages/tab/tab2/type/type"},
					{"badge":0,"color":"mauve","cuIcon":"iconzhoubian","name":"出游预警"}],
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
				// 活动列表
				active: [{
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/01/01/17/beach-2562563__480.jpg',
					title: '云游出品',
					context: '【限时特惠】999超低价格，来一场浪漫海滨之旅',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2014/02/28/16/45/mountains-276995__480.jpg',
					title: '云游出品',
					context: '【限时特惠】#梅里雪山 和雪山有一场约会',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2018/08/14/10/54/danxia-3605281__480.jpg',
					title: '云游出品',
					context: '【七彩张掖】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2018/12/14/17/06/panda-3875426__480.jpg',
					title: '云游出品',
					context: '【限时特惠】来成都邂逅大熊猫，3日2夜888',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2016/11/28/13/14/terracotta-army-1864972__480.jpg',
					title: '云游出品',
					context: '【限时特惠】世界八大奇迹之一的兵马俑',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://pic2.zhimg.com/v2-0a0d7026304978b1e52223182e983e56_r.jpg?source=1940ef5c',
					title: '云游出品',
					context: '【限时特惠】魔幻与现实的结合 #重庆两日游',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://tse3-mm.cn.bing.net/th/id/OIP._uQfqdV9RtkEyqpu_jIfJwHaEo?pid=ImgDet&rs=1',
					title: '',
					context: '【限时特惠】西安还是长安？双人3日游',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://cdn.pixabay.com/photo/2017/08/14/07/37/china-2639590__480.jpg',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}, {
					bg_url: 'https://tse2-mm.cn.bing.net/th/id/OIP.Wpme0Q5jZ2VU9KRAMG8ELgHaDg?w=310&h=165&c=7&o=5&dpr=2&pid=1.7',
					title: '云游出品',
					context: '【限时特惠】',
					lock: 0,
					star: 2,
					buy: 100
				}],
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
		}
	}