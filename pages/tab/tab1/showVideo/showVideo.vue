<template>
	<!-- 全屏浏览视屏 -->
	<view>
		<view>
			
		</view>
		<view>
			<t-video :video_list="video_list" :video_index="video_index"></t-video>
		</view>
		<view>
			
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	import tVideo from '@/components/views/t-video/t-video';
	export default {
		components:{
			tVideo
		},
		data() {
			return {
				video_list: [],
				video_index: 0
			}
		},
		onLoad(option) {
			this.video_list = option.video_list;
			this.video_index = option.video_index;
			console.log("video_list"+video_list);
			console.log("video_index"+video_index);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
