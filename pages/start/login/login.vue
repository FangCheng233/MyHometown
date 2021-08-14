<template>
	<view class="container">
		<view class="tui-bg-box">
			<image src="http://1.14.67.162/images/login/bg_login.png" class="tui-bg-img"></image>
			<image src="http://1.14.67.162/images/login/mine_def_touxiang_3x.png" class="tui-photo"></image>
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
					<img :src="codeUrl" @click="getCode()" class="login-code-img"/>
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
<script src="./login.js"></script>
<style src="./login.css"></style>
