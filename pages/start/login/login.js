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
					uni.switchTab({
					    url: '/pages/start/tab5/index'
					});
				}
				
			});
		},
		protocol: function() {
			uni.navigateTo({
				url: '/pages/doc/protocol/protocol'
			});
		}
	},
	onLoad() {
		this.getCode();
		this.getCookie();
	}
};