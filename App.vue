<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				delay: 10000,
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
						Vue.prototype.windowWidth = e.windowWidth;
						Vue.prototype.windowHeight = e.windowHeight + 200;
						Vue.prototype.statusBarHeight = e.statusBarHeight;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
						Vue.prototype.windowWidth = e.windowWidth;
						Vue.prototype.windowHeight = e.windowHeight + 200;
						Vue.prototype.statusBarHeight = e.statusBarHeight;
					};
					// #endif
			
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
			
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			//app.vue
			creatSocket: function() {
				 let that = this;
				  if ("WebSocket" in window) {
					 console.log("您的浏览器支持 WebSocket!");	
					 //实例化websocket	 
					 that.ws = new WebSocket("ws://fcstudev.com:8085/webSocket/"+uni.getStorageSync("user"));
					        //保存设置全局websocket对象
						    that.$global.setWs(that.ws);
						    //监听websocket连接打开方法
						    that.ws.onopen = function() {
						    	console.log("打开websocket")
						    	//调用keepalive方法（不一定都需要调用此方法，可注释）
						    	// that.keepAlive()
						    }
						    //监听websocket错误方法
							that.ws.onerror = function(ev) {
								 console.log("连接已出错...");
							   	 //延迟执行重连
							      setTimeout(() => {
							        // that.creatSocket();
							      }, 10000);
							};
							//监听websocket关闭方法
						    that.ws.onclose = function(e) {
							      // 关闭 websocket
							      console.log("连接已关闭..." + e.code + ' ' + e.reason + ' ' + e.wasClean);
							   	 //延迟执行重连
							      setTimeout(() => {
							        // that.creatSocket();
							      }, 10000);
						    };
						    
						    //监听websocket接收消息事件（接收来自服务器的实时消息）
						    that.ws.onmessage = function(res) {
							    console.log("App.vue收到服务器内容", res.data);
							  };
						    
						  } else {
						    // 浏览器不支持 WebSocket
						    console.log("您的浏览器不支持 WebSocket!");
						  }
			},
			keepAlive: function(){
				let that = this;
				  setTimeout(() => {
					 //判断当前webscokt状态
					 if(that.$global.ws.readyState == 1){
							console.log('发送keepalve')
							//调用发送方法
							that.$global.sendMsg({
									"from":"admin",
									"to":"admin",
									"message":"keepalive"
							})
							// that.keepAlive()			 		
					}
					 }, 10000);				
			},


		},
		
		mounted() {
			
		},
		created() {
			// 首先验证登录
			// 初始化socket链接，
			if(uni.getStorageSync("isLogin")){
				// this.creatSocket()
				uni.setStorageSync("user","admin")
			}
			
		}
	}
	// async getViewList() {
	// 	let postData = {
	// 		index: this.page
	// 	}
	// 	let that = this
	// 	const query = uni.createSelectorQuery().in(this);
	// 	query.select('#left').boundingClientRect(res => {
	// 			if(res.bottom < this.windowHeight){
	// 				that.page = that.page + 1;
	// 				getRecommendedAPI(postData).then(res=>{
	// 					let flag = true;
						
	// 					for (let item of res.data) {
	// 						if(flag){
	// 							this.imgList1.push({
	// 								id: item.view.id,
	// 								title: item.image.title,
	// 								viewName: item.view.name,
	// 								pname: item.view.pname,
	// 								cityName: item.view.cityName,
	// 								aname: item.view.aname,
	// 								address: item.view.address,
	// 								url: item.image.url
	// 							});
	// 							flag = !flag;
	// 						} else {
	// 							this.imgList2.push({
	// 								id: item.view.id,
	// 								title: item.image.title,
	// 								viewName: item.view.name,
	// 								pname: item.view.pname,
	// 								cityName: item.view.cityName,
	// 								aname: item.view.aname,
	// 								address: item.view.address,
	// 								url: item.image.url
	// 							});
	// 							flag = !flag;
	// 						}
	// 					}
	// 					this.canLoad = false;
	// 				});
	// 			}
	// 	    }).exec();
	// 	query.select('#right').boundingClientRect(res => {
	// 			if(res.bottom < this.windowHeight){
	// 				that.page = that.page + 1;
	// 				
	// 			}
	// 	    }).exec();
</script>

<style>
	/*每个页面公共css */
	@import './components/colorui/main.css';
	@import './components/colorui/icon.css';
	/* #ifndef APP-NVUE */
	@import './static/iconfont-weapp/iconfont-weapp-icon.css';
	/* #endif */
	.icon {
	   width: 1.4em; height: 1.4em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
</style>
<!--  -->