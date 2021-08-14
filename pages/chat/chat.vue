<template>
	<view>
		<!-- 顶部返回 -->
		<view>
			<view class="cu-bar bg-black search fixed">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);" @tap="NavigateBack"></view>
				<view class="content">
					李云飞
				</view>
				<view class="action" @tap="showMessage">
					<text class="cuIcon-more"></text>
					<view class="cu-tag badge" >
						<block>{{badge>99?'99+':badge}}</block>
					</view>
				</view>
			</view>
			<!-- 顶部聊天列表 -->
			<view >
				<tui-sticky :scrollTop="scrollTop" :stickyTop="stickyTop">
					<template v-slot:header>
						<view v-if="mesListShow">
							<scroll-view class="tui-scroll-box" scroll-x style="padding-right:10rpx">
								<view class="tui-share-top">
									<view class="tui-share-item" :class="[mesList.length-1===index?'tui-item-last':'']" v-for="(item,index) in mesList"
									 :key="index" @tap="popup">
										<view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="50">
											<tui-image-group :imageList="item.pic" width="60rpx" height="60rpx"></tui-image-group>
										</view>
										<view class="tui-share-text text-green">{{item.name}}</view>
										<tui-badge absolute :scaleRatio="0.6" v-if="item.badge>0">{{ item.badge }}</tui-badge>
									</view>
								</view>
							</scroll-view>
						</view>
					</template>
				</tui-sticky>
			</view>
		</view>

		<!-- 聊天内容信息 通过切换不同的用户显示不同的聊天记录 使用本地存储保存聊天记录-->
		<view class="tui-chat-content">
			<tui-loadmore v-if="loadding" :index="3" type="primary" text=" "></tui-loadmore>
			<!-- 隐藏部分聊天记录 通过下拉操作展示 -->
			<view v-show="show">
				<view class="tui-label">对方已通过您的好友请求</view>
			</view>
			<!--  -->
			<scroll-view :scroll-top="scrollTop" style="height: 700px;" scroll-y="true" class="scroll-Y"
                @scroll="scroll">
					<view v-for="(item, index) in messages" :key="index">
						<!-- 图片 -->
						<view class="tui-chat-left" v-if="item.type=='image'&& item.position=='left'">
							<image :src="to.image" class="tui-user-pic tui-right"></image>
							<view class="tui-img-chatbox">
								<image :src="item.image" class="tui-chat-img" mode="widthFix"></image>
							</view>
						</view>
						<view class="tui-chat-right" v-if="item.type=='image'&& item.position=='right'">
							<view class="tui-flex-center tui-flex-end tui-flex-reverse">
								<view class="tui-img-chatbox">
									<image :src="item.image" class="tui-chat-img" mode="widthFix"></image>
								</view>
								<image src="http://1.14.67.162/images/chat/fail.png" class="tui-chat-fail tui-mr"></image>
							</view>
							<image :src="from.image" class="tui-user-pic tui-left"></image>
						</view>
						<!-- 时间戳间隔 -->
						<view class="tui-chat-center" v-if="item.type=='time'">{{ item.message }}</view>
						
						<!-- 左侧对方 -->
						<view class="tui-chat-left" v-if="item.type=='text'&& item.position=='left'">
							<image :src="to.image" class="tui-user-pic tui-right"></image>
							<view class="tui-chatbox tui-chatbox-left">{{ item.message }}</view>
						</view>
						<!-- 右侧自己 -->
						<view class="tui-chat-right" v-if="item.type=='text'&& item.position=='right'">
							<view class="tui-chatbox tui-chatbox-right">{{ item.message }}</view>
							<image :src="from.image" class="tui-user-pic tui-left"></image>
						</view>
						<!-- 语音 左边-->
						<view class="tui-chat-left" v-if="item.type=='voice'&& item.position=='left'">
							<image :src="to.image" class="tui-user-pic tui-right"></image>
							<view class="tui-flex-center">
								<view class="tui-chatbox tui-chatbox-left tui-chat-flex tui-mr">
									<image src="http://1.14.67.162/images/chat/voice.png" class="tui-chat-voice tui-mr"></image>
									<!-- 语音条长度 -->
									<view style="width:300rpx">20"</view>
								</view>
								<tui-badge :dot="true" type="danger"></tui-badge>
							</view>
						</view>
						<!-- 语音右边 -->
						<view class="tui-chat-right" v-if="item.type=='voice'&& item.position=='right'">
							<view class="tui-flex-center tui-flex-end">
								<tui-badge :dot="true" type="danger"></tui-badge>
								<view class="tui-chatbox tui-chatbox-right tui-chat-flex tui-ml tui-flex-reverse">
									<image src="http://1.14.67.162/images/chat/voice.png" class="tui-chat-voice tui-rotate tui-ml"></image>
									<view style="width:280rpx;text-align:right">18"</view>
								</view>
							</view>
							<image :src="from.image" class="tui-user-pic tui-left"></image>
						</view>
					</view>
				</scroll-view>
			</view>
		<t-chat-bar></t-chat-bar>
	</view>
</template>

<script>
import tChatBar from '@/components/views/t-chat-bar/t-chat-bar';

export default {
	components: {
		tChatBar
	},
	data() {
		return {
			badge: 20,
			scrollTop: 0,
			old: {
				scrollTop: 0,
			},
			stickyTop: uni.upx2px(100),
			loadding: false,
			mesListShow: false,
			dropShow: false,
			user: '',
			mesList: [{
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/avatar_1.jpg"
					}],
					name: "张三",
					id: "qq",
					badge: "9"
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/avatar_2.jpg"
					}],
					name: "李四",
					id: "wechat",
					badge: "8"
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/1.jpg"
					}],
					name: "王五",
					id: "moments",
					badge: "7"
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/2.jpg"
					}],
					name: "王富贵",
					id: "alipay",
					badge: "6"
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/3.jpg"
					}],
					name: "敖丙",
					id: "sina",
					badge: ""
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/4.jpg"
					}],
					name: "哪吒",
					id: "applets",
					badge: ""
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/list_1.jpg"
					}],
					name: "伏羲",
					id: "dingtalk",
					badge: ""
				}, {
					pic: [{
						id:1,
						src:"http://1.14.67.162/images/news/list_2.jpg"
					}],
					name: "女娲",
					id: "mail-fill",
					badge: ""
				}],
			show: true,
			messages: [{
				message: '你好',
				type: 'text',
				image: '',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'text',
				image: '',
				voice: '',
				position: 'right'
			}, {
				message: '你好',
				type: 'image',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'text',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'right'
			}, {
				message: '你好',
				type: 'voice',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'voice',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'right'
			}, {
				message: '星期一 11:29',
				type: 'time',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'text',
				image: '',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'text',
				image: '',
				voice: '',
				position: 'right'
			}, {
				message: '你好',
				type: 'image',
				image: '/static/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'image',
				image: 'http://1.14.67.162/images/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'right'
			}, {
				message: '你好',
				type: 'voice',
				image: 'http://1.14.67.162/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}, {
				message: '你好',
				type: 'voice',
				image: 'http://1.14.67.162/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'right'
			}, {
				message: '星期一 11:29',
				type: 'time',
				image: 'http://1.14.67.162/tuijian/lugu-lake-4648775_1920.jpg',
				voice: '',
				position: 'left'
			}],
			from: {
				id: 'admin',
				image: 'http://1.14.67.162/images/news/1.jpg'
			},
			to: {
				id: 'admin',
				image: '/static/images/news/avatar_1.jpg'
			},
			bottom: 0,
		};
	},
	onLoad() {},
	methods: {
		scroll: function(e) {
		    this.old.scrollTop = e.detail.scrollTop
		},
		goTop: function(e) {
		    this.scrollTop = this.old.scrollTop
		    this.$nextTick(function() {
		        this.scrollTop = 1000
		    });
		},
		showMessage: function() {
			this.mesListShow = !this.mesListShow
		},
		NavigateBack: function(e) {
			uni.navigateBack({
				// url: e.currentTarget.dataset.cur
			})
		},
		handdleMsg: function(msg) {
		  let that = this;
		  console.log(that.$global.ws);
		  if (that.$global.ws && that.$global.ws.readyState == 1) {
		    console.log("发送信息", msg);
		    that.$global.ws.send(msg);
		  }
		  that.$global.ws.onmessage = function(res) {
		    console.log("收到服务器内容", res);
		  };
		},
		eventMsg: function(){
			let that = this;
			this.$global.ws.onmessage = function(res) {
				//处理接收的时间逻辑
			}
		},
		sendMessage: function(data) {
			let _this = this
			let msg = {
				from: uni.getStorageSync('user'),
				to: '-1',
				message: data
			}
			_this.messages.push({
				message: data,
				type: 'text',
				image: '/static/images/news/avatar_1.jpg',
				voice: '',
				position: 'right'
			})
			_this.goTop()
			if(this.$global.ws && this.$global.ws.readyState == 1) {
				this.$global.sendMsg(msg)
			}
		},
		registry: function(){
			this.$eventHub.$on('send', data => {
				this.sendMessage(data)
				// setTimeout(() => {
				// 	this.tui.toast('您选择了：' + data);
				// }, 350);
				this.$eventHub.$off('send')
				this.registry()
			});
			
		}
	},
	mounted() {
		this.eventMsg()
		// 获取本地消息
		
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop
		if (e.scrollTop == 0 && !this.loadding) {
			this.loadding = true;
			setTimeout(() => {
				this.show = true;
				this.loadding = false;
			}, 1000);
		} 
	},
	onHide() {
		// 保存本地消息
		uni.setStorageSync("msg_li", this.messages)
		
	},
	onLoad() {
		// 注册监听事件
		this.registry()
		// this.messages = uni.getStorageSync("msg_li")==[]?this.messages:uni.getStorageSync("msg_li")
	}
	
};
</script>

<style>
	/* 顶部返回栏 */
	.cu-tag.badge {
		border-radius: 200upx;
		position: absolute;
		top: 10upx;
		right: 10upx;
		font-size: 20upx;
		padding: 0upx 8upx;
		height: 28upx;
		color: #ffffff;
	}
	/* 顶部消息列表 */
	.tui-share {
		background: #e8e8e8;
		position: relative;
		padding-bottom: env(safe-area-inset-bottom);
	}
	.tui-share-title {
		font-size: 26rpx;
		color: #7E7E7E;
		text-align: center;
		line-height: 26rpx;
		padding: 20rpx 0 50rpx 0;
	}
	.tui-scroll-box {
		width: 100%;
		height: 120rpx;
		box-sizing: border-box;
		position: relative;
		background-color: #EEEEEE;
		z-index: 99;
		color: #fff;
		font-size: 30rpx;
		word-break: break-all;
	}
	.tui-share-top,
	.tui-share-bottom {
		min-width: 101%;
		padding: 0 7rpx 0 7rpx;
		white-space: nowrap;
	}
	.tui-share-item {
		width: 96rpx;
		display: inline-block;
		margin-right: 14rpx;
		text-align: center;
		position: relative;
	}
	.tui-share-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: #fafafa; */
		height: 96rpx;
		width: 96rpx;
		border-radius: 14rpx;
	}
	.tui-share-text {
		font-size: 24rpx;
		color: #7E7E7E;
		line-height: 2rpx;
		padding: 8rpx 0;
		white-space: nowrap;
	}
	/*chatbox*/
	.tui-chat-content {
		width: 100%;
		padding-left: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		padding-bottom: 140rpx;
	}

	.tui-chatbox {
		max-width: 66%;
		border-radius: 10rpx;
		position: relative;
		padding: 20rpx 22rpx;
		font-size: 32rpx;
		color: #333;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-chatbox::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: 20rpx;
		border: 16rpx solid;
	}

	.tui-chatbox-left {
		background: #fff;
		border: 1rpx solid #fff;
		display: inline-block;
	}

	.tui-chatbox-left::before {
		right: 100%;
		border-color: transparent #fff transparent transparent;
	}

	.tui-chatbox-right {
		background: #a0d5f3;
		border: 1rpx solid #a0d5f3;
	}

	.tui-chatbox-right::before {
		left: 100%;
		border-color: transparent transparent transparent #a0d5f3;
	}

	/*chatbox*/

	.tui-chat-left,
	.tui-chat-right {
		display: flex;
		align-items: flex-start;
		padding-top: 36rpx;
	}

	.tui-user-pic {
		width: 80rpx;
		height: 80rpx;
		flex-shrink: 0;
		border-radius: 50%;
		display: block;
	}

	.tui-left {
		margin-left: 26rpx;
	}

	.tui-right {
		margin-right: 26rpx;
	}

	.tui-chat-right {
		justify-content: flex-end;
	}

	.tui-chat-center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 28rpx;
		font-size: 28rpx;
		color: #666;
		padding-top: 36rpx;
	}

	.tui-label {
		display: inline-block;
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
		font-size: 24rpx;
		line-height: 24rpx;
		margin-top: 36rpx;
		padding: 12rpx 16rpx;
		text-align: center;
		border-radius: 8rpx;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.tui-img-chatbox {
		position: relative;
	}

	.tui-img-chatbox::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
		border-radius: 20rpx;
	}

	.tui-chat-img {
		max-width: 200rpx;
		/* min-height: 80rpx; */
		display: block;
		border-radius: 10rpx;
	}

	.tui-chat-flex {
		display: flex;
		align-items: center;
	}

	.tui-flex-center {
		display: flex;
		align-items: center;
	}

	.tui-chat-voice {
		width: 40rpx;
		height: 40rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-rotate {
		transform: rotate(180deg);
	}

	.tui-chat-fail {
		width: 50rpx;
		height: 50rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-mr {
		margin-right: 16rpx;
	}

	.tui-ml {
		margin-left: 16rpx;
	}

	.tui-flex-end {
		justify-content: flex-end;
	}

	.tui-flex-reverse {
		flex-direction: row-reverse;
	}
</style>
