(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab/tab2/viewDetails/viewDetails"],{"3fbf":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={tuiGrid:function(){return e.e("components/thorui/tui-grid/tui-grid").then(e.bind(null,"9346"))},tuiGridItem:function(){return e.e("components/thorui/tui-grid-item/tui-grid-item").then(e.bind(null,"ecd5"))}},u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"73fd":function(n,t,e){"use strict";e.r(t);var i=e("ae77"),u=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=u.a},"76b6":function(n,t,e){"use strict";e.r(t);var i=e("3fbf"),u=e("73fd");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("a308");var o,r=e("f0c5"),c=Object(r["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},a308:function(n,t,e){"use strict";var i=e("ae08"),u=e.n(i);u.a},a4f3:function(n,t,e){"use strict";(function(n){e("f0c3");i(e("66fd"));var t=i(e("76b6"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},ae08:function(n,t,e){},ae77:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("0b54"),u={data:function(){return{viewId:"",gridCol:5,gridBorder:!1,iconList:[{cuIcon:"iconfujin",url:"red",badge:120,name:"附近"},{cuIcon:"iconzudui",url:"orange",badge:1,name:"景区服务"},{cuIcon:"picfill",url:"yellow",badge:0,name:"联系客服"},{cuIcon:"noticefill",url:"olive",badge:22,name:"互助"},{cuIcon:"upstagefill",url:"cyan",badge:0,name:"寻友"}]}},methods:{getViewDetails:function(){var n=this,t={id:this.viewId};(0,i.getDetailsAPI)(t).then((function(t){200==t.data.code&&(n.viewInfo=t.data.info)}))}},mounted:function(){this.getViewDetails()},onLoad:function(n){this.viewId=n.id}};t.default=u}},[["a4f3","common/runtime","common/vendor"]]]);