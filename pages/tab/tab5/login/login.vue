<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="/static/images/login/bg_login.png" class="tui-bg-img"></image>
			<image src="/static/images/login/mine_def_touxiang_3x.png" class="tui-photo"></image>
			<view class="tui-login-name">云游</view>
		</view>
		<form :report-submit="true" @submit="formLogin" ref="loginForm" :model="loginForm">
			<view class="tui-login-from">
				<view class="tui-line-cell">
					<tui-icon name="people" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="username" placeholder="请输入用户名" maxlength="11" v-model="loginForm.username" type="text" />
				</view>
				<view class="tui-line-cell">
					<tui-icon name="pwd" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="password" placeholder="请输入密码" maxlength="11" v-model="loginForm.password" type="password" />
				</view>
				<view class="tui-line-cell tui-top28">
					<tui-icon name="text" :size="20" color="#6d7a87"></tui-icon>
					<input placeholder-class="tui-phcolor" class="tui-input" name="smsCode" placeholder="请输入验证码" maxlength="6" v-model="loginForm.code" type="number"/>
					<!-- <tui-button width="182rpx" height="56rpx" :size="24" :type="type" shape="circle" :plain="true" :disabled="disabled" @click="btnSend">{{ btnText }}</tui-button> -->
					<img :src="codeUrl" @click="getCode" class="login-code-img"/>
				</view>
				<!-- <button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover" form-type="submit">登录</button> -->
				<button class="tui-button-primary tui-btn-submit" hover-class="tui-button-hover" @tap="handleLogin">登录</button>
				<view class="tui-protocol" hover-class="opcity" :hover-stay-time="150">
					点击"登录"即表示已同意
					<text class="tui-protocol-red" @tap="protocol">《用户协议》</text>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
const util = require('@/utils/util.js');
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt'
const form = require('@/components/thorui/tui-validation/tui-validation.js');
export default {
	data() {
		return {
			disabled: false,
			codeUrl: "",
			cookiePassword: "",
			btnText: '获取验证码',
			mobile: '',
			type: 'primary',
			loginForm: {
			  username: "admin",
			  password: "admin123",
			  rememberMe: false,
			  code: "",
			  uuid: ""
			},
			loginRules: {
			  username: [
			    { required: true, trigger: "blur", message: "用户名不能为空" }
			  ],
			  password: [
			    { required: true, trigger: "blur", message: "密码不能为空" }
			  ],
			  code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
			},
		};
	},
	methods: {
		getCode() {
		  this.$api.getCodeImg().then(res => {
		    this.codeUrl = "data:image/gif;base64," + res.data.img;
		    this.loginForm.uuid = res.data.uuid;
		  });
		},
		getCookie() {
		  const username = Cookies.get("username");
		  const password = Cookies.get("password");
		  const rememberMe = Cookies.get('rememberMe')
		  this.loginForm = {
		    username: username === undefined ? this.loginForm.username : username,
		    password: password === undefined ? this.loginForm.password : decrypt(password),
		    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
		  };
		},

		handleLogin() {

			let postData = {
				"username": this.loginForm.username,
				"password": this.loginForm.password,
				"uuid": this.loginForm.uuid,
				"code": this.loginForm.code,
			}
			this.$api.loginAPI(JSON.stringify(postData)).then(res=>{
				if(res.data.code==200){
					Cookies.set("username", this.loginForm.username, { expires: 30 });
					Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
					Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
					uni.setStorageSync("Authorization",res.data.data.access_token);
					uni.setStorageSync("user", this.loginForm.username);
					uni.setStorageSync("isLogin", true);
					uni.navigateBack({
						
					})
				}
				
			});
		},
		protocol: function() {
			uni.navigateTo({
				url: '/pages/doc/protocol/protocol'
			});
		}
	},
	created() {
		this.getCode();
		this.getCookie();
		
	}
};
</script>

<style>
page {
	background-color: #fff;
}

.tui-bg-box {
	width: 100%;
	box-sizing: border-box;
	position: relative;
	padding-top: 44rpx;
}

.tui-photo {
	height: 138rpx;
	width: 138rpx;
	display: block;
	margin: 10rpx auto 0 auto;
	border-radius: 50%;
	position: relative;
	z-index: 2;
}

.tui-login-name {
	width: 128rpx;
	height: 40rpx;
	font-size: 30rpx;
	color: #fff;
	margin: 36rpx auto 0 auto;
	text-align: center;
	position: relative;
	z-index: 2;
}

.tui-bg-img {
	width: 100%;
	height: 346rpx;
	display: block;
	position: absolute;
	top: 0;
}

.tui-login-from {
	width: 100%;
	padding: 128rpx 104rpx 0 104rpx;
	box-sizing: border-box;
}

.tui-input {
	font-size: 32rpx;
	flex: 1;
	display: inline-block;
	padding-left: 32rpx;
	box-sizing: border-box;
	overflow: hidden;
}

.tui-line-cell {
	padding: 27rpx 0;
	display: -webkit-flex;
	display: flex;
	-webkiit-align-items: center;
	align-items: center;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
}

.tui-line-cell::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #e0e0e0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-top28 {
	margin-top: 28rpx;
}

.tui-btn-class {
	width: 196rpx !important;
	height: 54rpx !important;
	border-radius: 27rpx !important;
	font-size: 28rpx !important;
	padding: 0 !important;
	line-height: 54rpx !important;
}

.tui-btn-submit {
	margin-top: 100rpx;
}

.tui-protocol {
	color: #333;
	font-size: 24rpx;
	text-align: center;
	width: 100%;
	margin-top: 29rpx;
}

.tui-protocol-red {
	color: #f54f46;
}

.login-code-img {
  height: 38px;
}
</style>
