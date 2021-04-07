<template>
	<view>
		<view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		onLoad() {
			
			this.$eventHub.$on('select',function(data){
			        this.value = data.msg;
					this.tui.toast(this.value);
					this.request
			    })
		},
		mounted() {

		},
		methods: {
			request: function() {

			}
		}
	}
</script>

<style>

</style>
