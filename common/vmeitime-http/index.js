import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 轮播图
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}
// user 模块
export const loginAPI = (data) => {
    return http.request({
        url: '/auth/login',
        method: 'POST', 
        data,
		// handle:true
    })
}
export const registryAPI = (data) => {
    return http.request({
        url: '/user/registry',
        method: 'POST', 
        data,
		// handle:true
    })
}
export const getCodeAPI = (data) => {
    return http.request({
        url: '/user/code',
        method: 'POST', 
        data,
		// handle:true
    })
}
export const getDetailsAPI = (data) => {
    return http.request({
        url: '/user/info',
        method: 'GET', 
        data,
		// handle:true
    })
}
// attractions
export const getHotViewsList = (data) => {
    return http.request({
        url: '/view/hot',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const getServiceAPI = (data) => {
    return http.request({
        url: '/view/service',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const getRecommendedAPI = (data) => {
    return http.request({
        url: '/view/recommended',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const browse = (data) => {
    return http.request({
        url: '/view/browse',
        method: 'POST', 
        data,
		// handle:true
    })
}
// search
export const searchAPI = (data) => {
    return http.request({
        url: '/view/select',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const searchBaikeAPI = (data) => {
    return http.request({
        url: '/view/baike',
        method: 'GET', 
        data,
		// handle:true
    })
}
// video
export const getVideoListAPI = (data) => {
    return http.request({
        url: '/video/list',
        method: 'GET', 
        data,
		// handle:true
    })
}
// view

export const getViewDetailsAPI = (data) => {
    return http.request({
        url: '/view/details',
        method: 'GET', 
        data,
		// handle:true
    })
}
export const setUserStarAPI = (data) => {
    return http.request({
        url: '/star/like',
        method: 'POST', 
        data,
		// handle:true
    })
}
export const setUserUnStarAPI = (data) => {
    return http.request({
        url: '/star/unLike',
        method: 'POST', 
        data,
		// handle:true
    })
}
export const getUserStarAPI = (data) => {
    return http.request({
        url: '/star/get/admin'+ uni.getStorageSync("user"),
        method: 'GET', 
        data,
		// handle:true
    })
}
// 获取adcode
export const getCityCode = (data) =>{
  return http.request({
    url: '/star/getCityCode',
    method: 'GET',
	data,
  })
}
// 获取验证码
export const getCodeImg = (data) =>{
  return http.request({
    url: '/code',
    method: 'get'
	
  })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
    banner,
	loginAPI,
	registryAPI,
	getCodeAPI,
	getDetailsAPI,
	getHotViewsList,
	getServiceAPI,
	getRecommendedAPI,
	browse,
	searchAPI,
	searchBaikeAPI,
	getVideoListAPI,
	getViewDetailsAPI,
	getCodeImg,
	getUserStarAPI,
	setUserStarAPI,
	setUserUnStarAPI,
	getCityCode
}