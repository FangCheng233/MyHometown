(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab/tab1/showVideo/showVideo"],{"2a94":function(t,e,i){"use strict";i.r(e);var n=i("5fb6"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"41e5":function(t,e,i){"use strict";i.r(e);var n=i("f54a"),o=i("7d40");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("bec0");var d,u=i("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],d);e["default"]=c.exports},"470b":function(t,e,i){"use strict";i.r(e);var n=i("9913"),o=i("2a94");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var d,u=i("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],d);e["default"]=c.exports},"4fda":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=!1,n={props:{video_list:{type:Array,default:{}},video_index:{default:0}},data:function(){return{time:0,barWidth:0,animationData:{},times:null,play:!1,show_play:!1,current_index:0,fullSreen:!1}},created:function(){var t=this;setTimeout((function(){i=!0,t.videoPlay()}),1e3)},methods:{timeupdate:function(t){var e=parseInt(this.width);this.duration=t.detail.duration,this.time=t.detail.currentTime;this.time,this.duration},clickVideo:function(t){this.videoPlay()},videoPlay:function(){var e=this.video_list[this.current_index].video_id;i?(console.log("播放视频","video_".concat(e)),this.videoCtx=t.createVideoContext("video_".concat(e),this),this.videoCtx.play(),this.show_play=!1,i=!1):(console.log("暂停视频","video_".concat(e)),this.videoCtx=t.createVideoContext("video_".concat(e),this),this.videoCtx.pause(),this.show_play=!0,i=!0)},videoPause:function(){var e=this.video_list[this.current_index].video_id;this.videoCtx=t.createVideoContext("video_".concat(e),this),this.videoCtx.pause(),this.show_play=!0,i=!0},changeVideo:function(t){return this.videoPause(),this.current_index=t.detail.current,console.log(t.detail.current),this.videoPlay(),0==t.detail.current?(console.log("到顶了"),!1):t.detail.current==this.video_list.length-1?(console.log("到底了"),!1):void 0},tapMsg:function(t){console.log(5,t)},tapShare:function(t){console.log(6,t)},tapLove:function(t){this.video_list[this.current_index].is_dianzan=!this.video_list[this.current_index].is_dianzan,console.log(7,t)}},watch:{play:function(t,e){this.videoPlay()}}};e.default=n}).call(this,i("543d")["default"])},"5fb6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("41e5"));function o(t){return t&&t.__esModule?t:{default:t}}var a={components:{tVideo:n.default},data:function(){return{video_list:[],video_index:0}},onLoad:function(t){this.video_list=t.video_list,this.video_index=t.video_index,console.log("video_list"+video_list),console.log("video_index"+video_index)},methods:{}};e.default=a},"71db":function(t,e,i){},"7d40":function(t,e,i){"use strict";i.r(e);var n=i("4fda"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},9913:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},b2c9:function(t,e,i){"use strict";(function(t){i("f0c3");n(i("66fd"));var e=n(i("470b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},bec0:function(t,e,i){"use strict";var n=i("71db"),o=i.n(n);o.a},f54a:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["b2c9","common/runtime","common/vendor"]]]);