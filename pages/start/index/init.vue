<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
		  // 从本地缓存中同步获取指定 key 对应的内容，用于判断是否是第一次打开应用
		  const value = uni.getStorageSync('launchFlag');
		  if (value) {
		    // 如何已经有，直接去home首页
		    uni.switchTab({
		      url: '/pages/tab/tab1/index'
		    });
		  } else {
		    // 没有值，跳到引导页，并存储，下次打开就不会进去引导页
			// let ua = window.navigator.userAgent.toLowerCase()
			// if (ua.match(/MicroMessenger/i) == 'micromessenger') {
				// do something
				uni.setStorage({
				  key: 'launchFlag',
				  data: true,

				});
				uni.redirectTo({
				  url: '/pages/index/wx'
				});	
			// } else {
				// uni.setStorage({
				  // key: 'launchFlag',
				  // data: true
				// });
				// uni.redirectTo({
				  // url: '/pages/index/guide'
				// });
			// }
		    
		  }
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
