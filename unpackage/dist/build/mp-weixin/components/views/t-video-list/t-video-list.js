(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/views/t-video-list/t-video-list"],{1311:function(t,i,e){"use strict";e.r(i);var n=e("af03"),o=e("f3b3");for(var r in o)"default"!==r&&function(t){e.d(i,t,(function(){return o[t]}))}(r);e("4820");var a,d=e("f0c5"),c=Object(d["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);i["default"]=c.exports},4820:function(t,i,e){"use strict";var n=e("db90"),o=e.n(n);o.a},"8a03":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("d36d"),o=e("2f62");function r(t,i){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=a(t))||i&&t&&"number"===typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,d=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return d=t.done,t},e:function(t){c=!0,r=t},f:function(){try{d||null==e.return||e.return()}finally{if(c)throw r}}}}function a(t,i){if(t){if("string"===typeof t)return d(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,i):void 0}}function d(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}var c=!1,u={computed:(0,o.mapState)(["mobile"]),data:function(){return{isCard:!1,time:0,barWidth:0,animationData:{},times:null,play:!1,show_play:!1,current_index:0,fullSreen:!1,windowWidth:"",video_list:[]}},mounted:function(){try{this.windowWidth=t.getStorageSync("windowWidth")}catch(i){}this.getVideoList(),console.log("数据"+this.video_list)},created:function(){var t=this;setTimeout((function(){c=!0,t.videoPlay()}),1e3)},methods:{getVideoList:function(){var t=this,i={id:this.mobile};(0,n.getVideoListAPI)(i).then((function(i){var e,n=r(i.data.data.list);try{for(n.s();!(e=n.n()).done;){var o=e.value;console.log("ssss"+o.card),t.video_list.push({video_id:o.video_id,nickname:o.nickname,video_describe:o.video_describe,cover_url:o.cover_url,video_url:o.video_url,dianzan:o.dianzan,pinglun:o.pinglun,zhuanfa:o.zhuanfa,is_dianzan:o.is_dianzan,flag:!1,position:o.video_id/2==0?"fl":"",card:o.card})}}catch(a){n.e(a)}finally{n.f()}}))},detail:function(){this.tui.toast("详情功能尚未完善~")},timeupdate:function(t){var i=parseInt(this.width);this.duration=t.detail.duration,this.time=t.detail.currentTime;this.time,this.duration},clickVideo:function(i){t.navigateTo({url:"/pages/tab/tab1/showVideo/showVideo?view_list="+this.video_list+"&video_index="+i.currentTarget.dataset.current})},videoPlay:function(){var i=this.video_list[this.current_index].video_id;c?(console.log("播放视频","video_".concat(i)),this.videoCtx=t.createVideoContext("video_".concat(i),this),this.videoCtx.play(),this.show_play=!1,c=!1):(console.log("暂停视频","video_".concat(i)),this.videoCtx=t.createVideoContext("video_".concat(i),this),this.videoCtx.pause(),this.show_play=!0,c=!0)},videoPause:function(){var i=this.video_list[this.current_index].video_id;this.videoCtx=t.createVideoContext("video_".concat(i),this),this.videoCtx.pause(),this.show_play=!0,c=!0},changeVideo:function(t){return this.videoPause(),this.current_index=t.detail.current,console.log(t.detail.current),this.videoPlay(),0==t.detail.current?(console.log("到顶了"),!1):t.detail.current==this.video_list.length-1?(console.log("到底了"),!1):void 0},tapMsg:function(t){console.log(5,t)},tapShare:function(t){console.log(6,t)},tapLove:function(t){this.video_list[this.current_index].is_dianzan=!this.video_list[this.current_index].is_dianzan,console.log(7,t)}},watch:{play:function(t,i){this.videoPlay()}}};i.default=u}).call(this,e("543d")["default"])},"8ecc":function(t,i,e){"use strict";(function(t){e("f0c3");n(e("66fd"));var i=n(e("1311"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},af03:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={tuiCard:function(){return e.e("components/thorui/tui-card/tui-card").then(e.bind(null,"02c4"))}},o=function(){var t=this,i=t.$createElement;t._self._c},r=[]},db90:function(t,i,e){},f3b3:function(t,i,e){"use strict";e.r(i);var n=e("8a03"),o=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=o.a}},[["8ecc","common/runtime","common/vendor"]]]);