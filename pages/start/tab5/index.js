export default {
		data() {
			return {
				user: '',
				isLogin: true,
				current: 4,
				copyright: " Copyright © 2014-2019 云横秦岭."
			}
		},
		methods: {
			logout: function() {
				this.tui.modal("提示", "确定退出登录？", true, (res) => {
					if (res) {
						uni.clearStorage();
						uni.reLaunch({
							url: '/pages/start/login/login'
						});
					}
				})
			},
			detail: function() {
				
			},
			openThorUI() {
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId: 'wxd3c1da92cb8fcf40'
				});
				// #endif
			
				// #ifndef  MP-WEIXIN
				if (this.sweixin) {
					this.sweixin.launchMiniProgram({
						id: 'gh_78d54c9830d3'
					});
				} else {
					uni.previewImage({
						urls: ['https://thorui.cn/img/applets_extend.jpg']
					});
				}
				// #endif
			}
		},
		mounted() {
			this.isLogin = uni.getStorageSync("isLogin");
			this.user = uni.getStorageSync("user");
		}
	}