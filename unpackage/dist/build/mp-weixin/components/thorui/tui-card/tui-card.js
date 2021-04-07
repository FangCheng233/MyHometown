(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/thorui/tui-card/tui-card"],{"02c4":function(t,e,n){"use strict";n.r(e);var u=n("5883"),i=n("4224");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("d3a7");var c,o=n("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"55f8bbb6",null,!1,u["a"],c);e["default"]=a.exports},4224:function(t,e,n){"use strict";n.r(e);var u=n("770c"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a},5883:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"770c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"tuiCard",props:{full:{type:Boolean,default:!1},image:{type:Object,default:function(){return{url:"",height:60,width:60,circle:!1}}},title:{type:Object,default:function(){return{text:"",size:30,color:"#7A7A7A"}}},tag:{type:Object,default:function(){return{text:"",size:24,color:"#b2b2b2"}}},header:{type:Object,default:function(){return{bgcolor:"#fff",line:!1,windowWidth:""}}},border:{type:Boolean,default:!1},index:{type:Number,default:0}},methods:{handleClick:function(){this.$emit("click",{index:this.index})},longTap:function(){this.$emit("longclick",{index:this.index})}}};e.default=u},8588:function(t,e,n){},d3a7:function(t,e,n){"use strict";var u=n("8588"),i=n.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/thorui/tui-card/tui-card-create-component',
    {
        'components/thorui/tui-card/tui-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("02c4"))
        })
    },
    [['components/thorui/tui-card/tui-card-create-component']]
]);
