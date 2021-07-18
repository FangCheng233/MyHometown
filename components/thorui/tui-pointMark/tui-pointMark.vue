<template>
	<view>
		<!-- 弹出窗口大小 -->
		<view>
			<view id="amap" :change:prop="amap.updateEcharts">
				
			</view>
		</view>
	</view>
</template>

<script module="amap" lang="renderjs">
	
	import config from '@/common/MAP/config.js'
	export default {
		props: {
			GDPSpeed: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				map: null,
				colors: {},
			}
		},
		methods: {
			initAmap() {
				var SOC = 'CHN'
				var colors = {};
				var GDPSpeed = this.GDPSpeed
				var getColorByDGP = function(adcode){
				    if(!colors[adcode]){
				        var gdp = GDPSpeed[adcode];
				        if(!gdp){
				            colors[adcode] = 'rgb(227,227,227)'
				        }else{   
				            var r = 3;
				            var g = 140;
				            var b = 230;
				            var a = gdp/10;
				            colors[adcode] = 'rgba('+ r +','+ g +','+b+','+a+')';
				        }
				    }
				    return colors[adcode]
				}
				
				var disCountry = new AMap.DistrictLayer.Country({
				    zIndex:0,
				    depth:2,
					SOC:'CHN',
					NAME_CHN:'1',
				    styles:{
				        'nation-stroke':'#ff0000',
				        'coastline-stroke':'#0088ff',
				        'province-stroke':'#fd8008',
				        'fill':function(props){
				           return getColorByDGP(props.adcode)
				        }
				    }
				})
				
				var map = new AMap.Map("amap",{
				        zooms: [1, 10],
				        center:[106.122082,37.719192],
				        zoom: 1,
				        isHotspot: true,
				        defaultCursor:'pointer',
				        layers:[
				            disCountry
				        ],
				        viewMode:'3D',
				        resizeEnable: true
				})
				map.addControl(new AMap.Scale());
				map.addControl(new AMap.ToolBar({liteStyle:true}));
				map.on('complete',function(){
				    var layer = new AMap.LabelsLayer({
				        // 开启标注避让，默认为开启，v1.4.15 新增属性
				        collision: false,
				        // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
				        animation: true,
				    });
				    for (var i = 0; i < LabelsData.length; i++) {
				        var labelsMarker = new AMap.LabelMarker(LabelsData[i]);
				        layer.add(labelsMarker);
				    }
				    map.add(layer);
				})
				map.setFitView();//地图自适应
			},
		},
		mounted() {
			// 初始化地图信息，将用户标记的 点位置信息 标记在地图上 方便用户查看
			// 使用图层信息  位于图层中心位置 
			if (typeof window.AMap === 'function') {
				this.initAmap()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=' + config.WEBAK +'&plugin=Map3D,AMap.DistrictLayer,AMap.Scale,AMap.ToolBar'
				script.onload = this.initAmap.bind(this)
				document.head.appendChild(script)
			}
		}
	}
</script>

<style>
	#amap {
		width: 100%;
		height: 400rpx;
	}
	.amap-logo {
		display: none !important;
		opacity: 0 !important;
	}
	.amap-copyright {
	    opacity:0;
	}
</style>
