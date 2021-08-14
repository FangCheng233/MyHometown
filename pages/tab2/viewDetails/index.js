export default {
	data() {
		return {
			viewId: '',
			gridCol: 5,
			modalName: null,
			gridBorder: false,
			viewInfo: {},
			isStar: false,
			iconList: [{
				cuIcon: 'iconfujin',
				url: '/pages/tab2/near/near',
				badge: 120,
				name: '附近',
				args: ''
			}, {
				cuIcon: 'iconzudui',
				url: 'orange',
				badge: 1,
				name: '爱心服务',
				args: ''
			}, {
				cuIcon: 'iconfuwu',
				url: 'yellow',
				badge: 0,
				name: '客服',
				args: ''
			}, {
				cuIcon: 'iconquanjing',
				url: '/pages/tab2/Panoramic/Panoramic',
				badge: 22,
				name: '看全景',
				args: '?url=https://720yun.com/t/7fvks91hgfe?scene_id=45689186'
			}, {
				cuIcon: 'iconzhibozhong',
				url: 'cyan',
				badge: 0,
				name: '直播记录',
				args: ''
			}, {
				cuIcon: 'icontubiaozhizuomobanyihuifu-1',
				url: '/components/views/t-weather/t-weather',
				badge: 0,
				name: '天气',
				args: ''
			}, {
				cuIcon: 'iconweizhi1',
				url: '/components/views/t-weather/t-weather',
				badge: 0,
				name: '景区地图',
				args: ''
			}],
		}
	},
	methods: {
		navigateBack: function() {
			uni.navigateBack({
				
			})
		},
		showModal: function(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		//
		hideModal: function(e) {
			this.modalName = null
		},
		detail: function() {
			// this.tui.toast('详情功能尚未完善~')
		},
		// 获取景点详细信息
		getViewDetails: function() {
			var data = {
				id: this.viewId
			};
			this.$api.getViewDetailsAPI(data).then(res=>{
				this.viewInfo = res.data
			})
		},
		star: function() {
			if(this.viewInfo.star == true){
				return;
			}
			
			let postData = {
				"id": this.viewId,
				"username": 'admin'
			}
			this.viewInfo.star = true
			this.$api.setUserStarAPI(JSON.stringify(postData)).then(res => {
			});
		},
		unStar: function() {
			if(this.viewInfo.star == false){
				return;
			}
			let postData = {
				"id": this.viewId,
				"username": uni.getStorageSync("user")
			}
			this.viewInfo.star = false
			this.$api.setUserUnStarAPI(JSON.stringify(postData)).then(res => {
			});
		},
	},
	mounted() {
		this.getViewDetails();
	},
	onLoad(option){
		this.viewId = option.id;
	}
}