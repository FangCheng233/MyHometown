(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab/tab2/index"],{"8fa5":function(t,e,n){"use strict";var a=n("fbb8"),o=n.n(a);o.a},b129:function(t,e,n){"use strict";n.r(e);var a=n("eb69"),o=n("fbfb");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8fa5");var c,u=n("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=r.exports},c269:function(t,e,n){"use strict";(function(t){n("f0c3");a(n("66fd"));var e=a(n("b129"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},eb69:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},f591:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("0b54"),o={data:function(){return{current:1,PageCur:"tab2",gridCol:5,gridBorder:!1,item:{},cuIconList:[{badge:2,color:"red",cuIcon:"iconketangdayi",name:"答疑",url:"/pages/tab/tab2/question/question"},{badge:1,color:"orange",cuIcon:"iconzudui",name:"组队",url:"/pages/tab/tab2/team/team"},{badge:0,color:"yellow",cuIcon:"iconfabu",name:"消息发布",url:"/pages/tab/tab2/Intelligence/Intelligence"},{badge:1,color:"olive",cuIcon:"iconcooperation",name:"互助"},{badge:0,color:"cyan",cuIcon:"icon-",name:"寻根"},{badge:0,color:"blue",cuIcon:"iconfujin",name:"附近",url:"/pages/tab/tab2/near/near"},{badge:0,color:"purple",cuIcon:"discoverfill",name:"待定"},{badge:0,color:"mauve",cuIcon:"questionfill",name:"待定"},{badge:0,color:"purple",cuIcon:"iconwenda",name:"问答"},{badge:0,color:"mauve",cuIcon:"iconicon-test",name:"告警"}],viewList:[],result:null,isLoad:!0,canLoad:!0}},methods:{navigateDetails:function(e){t.navigateTo({url:"/pages/tab/tab2/viewDetails/viewDetails?id="+e.currentTarget.dataset.id})},getService:function(){var t=this,e={};(0,a.getServiceAPI)(e).then((function(e){console.log(e.data),t.cuIconList=e.data}))},getData:function(t){var e=this,n={index:t};(0,a.getHotViewsList)(n).then((function(t){if(t.data.length>0)for(var n=0;n<10;n++){var a=t.data[n].view,o=t.data[n].tags,i=JSON.parse(a.photos);a["tags"]=o,a["heat"]=t.data[n].heat,i.length>0&&(a["photos"]=i[0].url),e.viewList.push(a)}100==e.viewList.length&&(e.canLoad=!1)})),this.isLoad=!1}},onReachBottom:function(){this.canLoad?this.getData(this.viewList.length):this.isLoad=!0},onPullDownRefresh:function(){setTimeout((function(){t.stopPullDownRefresh()}),300),this.viewList=[],this.getData(0)},mounted:function(){this.getData(0)}};e.default=o}).call(this,n("543d")["default"])},fbb8:function(t,e,n){},fbfb:function(t,e,n){"use strict";n.r(e);var a=n("f591"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a}},[["c269","common/runtime","common/vendor"]]]);