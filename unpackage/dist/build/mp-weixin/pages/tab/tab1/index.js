(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab/tab1/index"],{"0285":function(t,n,e){"use strict";(function(t){e("f0c3");i(e("66fd"));var n=i(e("460d"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"0335":function(t,n,e){"use strict";e.r(n);var i=e("1179"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},1179:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("1311"));function o(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/thorui/tui-loading/tui-loading").then(function(){return resolve(e("a6b6"))}.bind(null,e)).catch(e.oe)},a={components:{tuiLoading:r,tVideoList:i.default},data:function(){return{scrollTop:0,stickyTop:t.upx2px(35),loadding:!1,hotSearch:["丽江古城","宽窄巷子","达古冰川","九寨沟","三亚","稻城"]}},onLoad:function(){},onPageScroll:function(t){this.scrollTop=t.scrollTop},onPullDownRefresh:function(){t.stopPullDownRefresh()},mounted:function(){},methods:{detail:function(){t.navigateTo({url:"../productDetail/productDetail"})},search:function(){t.navigateTo({url:"../../news/search/search"})},message:function(){t.navigateTo({url:"/pages/chat/chat"})}}};n.default=a}).call(this,e("543d")["default"])},1311:function(t,n,e){"use strict";e.r(n);var i=e("af03"),o=e("f3b3");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("4820");var a,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=c.exports},"460d":function(t,n,e){"use strict";e.r(n);var i=e("c4e8"),o=e("0335");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("9f1b");var a,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=c.exports},4820:function(t,n,e){"use strict";var i=e("db90"),o=e.n(i);o.a},"8a03":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("d36d"),o=e("2f62");function r(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=a(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,r=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw r}}}}function a(t,n){if(t){if("string"===typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var c=!1,d={computed:(0,o.mapState)(["mobile"]),data:function(){return{isCard:!1,time:0,barWidth:0,animationData:{},times:null,play:!1,show_play:!1,current_index:0,fullSreen:!1,windowWidth:"",video_list:[]}},mounted:function(){try{this.windowWidth=t.getStorageSync("windowWidth")}catch(n){}this.getVideoList(),console.log("数据"+this.video_list)},created:function(){var t=this;setTimeout((function(){c=!0,t.videoPlay()}),1e3)},methods:{getVideoList:function(){var t=this,n={id:this.mobile};(0,i.getVideoListAPI)(n).then((function(n){var e,i=r(n.data.data.list);try{for(i.s();!(e=i.n()).done;){var o=e.value;console.log("ssss"+o.card),t.video_list.push({video_id:o.video_id,nickname:o.nickname,video_describe:o.video_describe,cover_url:o.cover_url,video_url:o.video_url,dianzan:o.dianzan,pinglun:o.pinglun,zhuanfa:o.zhuanfa,is_dianzan:o.is_dianzan,flag:!1,position:o.video_id/2==0?"fl":"",card:o.card})}}catch(a){i.e(a)}finally{i.f()}}))},detail:function(){this.tui.toast("详情功能尚未完善~")},timeupdate:function(t){var n=parseInt(this.width);this.duration=t.detail.duration,this.time=t.detail.currentTime;this.time,this.duration},clickVideo:function(n){t.navigateTo({url:"/pages/tab/tab1/showVideo/showVideo?view_list="+this.video_list+"&video_index="+n.currentTarget.dataset.current})},videoPlay:function(){var n=this.video_list[this.current_index].video_id;c?(console.log("播放视频","video_".concat(n)),this.videoCtx=t.createVideoContext("video_".concat(n),this),this.videoCtx.play(),this.show_play=!1,c=!1):(console.log("暂停视频","video_".concat(n)),this.videoCtx=t.createVideoContext("video_".concat(n),this),this.videoCtx.pause(),this.show_play=!0,c=!0)},videoPause:function(){var n=this.video_list[this.current_index].video_id;this.videoCtx=t.createVideoContext("video_".concat(n),this),this.videoCtx.pause(),this.show_play=!0,c=!0},changeVideo:function(t){return this.videoPause(),this.current_index=t.detail.current,console.log(t.detail.current),this.videoPlay(),0==t.detail.current?(console.log("到顶了"),!1):t.detail.current==this.video_list.length-1?(console.log("到底了"),!1):void 0},tapMsg:function(t){console.log(5,t)},tapShare:function(t){console.log(6,t)},tapLove:function(t){this.video_list[this.current_index].is_dianzan=!this.video_list[this.current_index].is_dianzan,console.log(7,t)}},watch:{play:function(t,n){this.videoPlay()}}};n.default=d}).call(this,e("543d")["default"])},"9f1b":function(t,n,e){"use strict";var i=e("a8c6"),o=e.n(i);o.a},a8c6:function(t,n,e){},af03:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={tuiCard:function(){return e.e("components/thorui/tui-card/tui-card").then(e.bind(null,"02c4"))}},o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},c4e8:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={tuiSticky:function(){return e.e("components/thorui/tui-sticky/tui-sticky").then(e.bind(null,"d4d8"))},tuiNavigationBar:function(){return e.e("components/thorui/tui-navigation-bar/tui-navigation-bar").then(e.bind(null,"8e0a"))},tuiIcon:function(){return e.e("components/thorui/tui-icon/tui-icon").then(e.bind(null,"3e7b"))},tuiBadge:function(){return e.e("components/thorui/tui-badge/tui-badge").then(e.bind(null,"0792"))},tuiLoadmore:function(){return e.e("components/thorui/tui-loadmore/tui-loadmore").then(e.bind(null,"8b2f"))}},o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},db90:function(t,n,e){},f3b3:function(t,n,e){"use strict";e.r(n);var i=e("8a03"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a}},[["0285","common/runtime","common/vendor"]]]);