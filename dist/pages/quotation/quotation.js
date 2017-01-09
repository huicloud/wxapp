!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("../../utils/util"),require("../../utils/stockManager"),require("../../charts/DataProvider"),require("../../charts/Canvas"),require("../../charts/MinChart"),require("../../charts/KlineChart"));else if("function"==typeof define&&define.amd)define(["../../utils/util","../../utils/stockManager","../../charts/DataProvider","../../charts/Canvas","../../charts/MinChart","../../charts/KlineChart"],n);else{var r="object"==typeof exports?n(require("../../utils/util"),require("../../utils/stockManager"),require("../../charts/DataProvider"),require("../../charts/Canvas"),require("../../charts/MinChart"),require("../../charts/KlineChart")):n(t["../../utils/util"],t["../../utils/stockManager"],t["../../charts/DataProvider"],t["../../charts/Canvas"],t["../../charts/MinChart"],t["../../charts/KlineChart"]);for(var e in r)("object"==typeof exports?exports:t)[e]=r[e]}}(this,function(t,n,r,e,i,o){return function(t){function n(e){if(r[e])return r[e].exports;var i=r[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){t.exports=r(143)},,,,,,,,function(t,n,r){var e=r(9),i=r(10),o=r(11),a=r(13),u="prototype",c=function(t,n,r){var s,f,h,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,g=t&c.B,y=t&c.W,m=p?i:i[n]||(i[n]={}),b=m[u],x=p?e:d?e[n]:(e[n]||{})[u];p&&(r=n);for(s in r)f=!l&&x&&void 0!==x[s],f&&s in m||(h=f?x[s]:r[s],m[s]=p&&"function"!=typeof x[s]?r[s]:g&&f?o(h,e):y&&x[s]==h?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n[u]=t[u],n}(h):v&&"function"==typeof h?o(Function.call,h):h,v&&((m.virtual||(m.virtual={}))[s]=h,t&c.R&&b&&!b[s]&&a(b,s,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(12);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(14),i=r(22);t.exports=r(18)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(15),i=r(17),o=r(21),a=Object.defineProperty;n.f=r(18)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(16);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(18)&&!r(19)(function(){return 7!=Object.defineProperty(r(20)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){t.exports=!r(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(16),i=r(9).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(16);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},,,,function(t,n,r){t.exports={default:r(27),__esModule:!0}},function(t,n,r){r(28),t.exports=r(10).Object.assign},function(t,n,r){var e=r(8);e(e.S+e.F,"Object",{assign:r(29)})},function(t,n,r){"use strict";var e=r(30),i=r(45),o=r(46),a=r(47),u=r(34),c=Object.assign;t.exports=!c||r(19)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=c({},t)[r]||Object.keys(c({},n)).join("")!=e})?function(t,n){for(var r=a(t),c=arguments.length,s=1,f=i.f,h=o.f;c>s;)for(var l,p=u(arguments[s++]),d=f?e(p).concat(f(p)):e(p),v=d.length,g=0;v>g;)h.call(p,l=d[g++])&&(r[l]=p[l]);return r}:c},function(t,n,r){var e=r(31),i=r(44);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n,r){var e=r(32),i=r(33),o=r(37)(!1),a=r(41)("IE_PROTO");t.exports=function(t,n){var r,u=i(t),c=0,s=[];for(r in u)r!=a&&e(u,r)&&s.push(r);for(;n.length>c;)e(u,r=n[c++])&&(~o(s,r)||s.push(r));return s}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(34),i=r(36);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(33),i=r(38),o=r(40);t.exports=function(t){return function(n,r,a){var u,c=e(n),s=i(c.length),f=o(a,s);if(t&&r!=r){for(;s>f;)if(u=c[f++],u!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,n,r){var e=r(39),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(39),i=Math.max,o=Math.min;t.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(42)("keys"),i=r(43);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n,r){var e=r(9),i="__core-js_shared__",o=e[i]||(e[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(36);t.exports=function(t){return Object(e(t))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n){t.exports=require("../../utils/util")},function(t,n){t.exports=require("../../utils/stockManager")},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function i(t){return(0,a.default)({},t,{upDown:t.ZhangDie>0?1:t.ZhangDie<0?2:0,ShiJian:t.ShiJian?(0,u.formatDate)(1e3*t.ShiJian,"yyyy-MM-dd hh:mm:ss"):"--",ZuiXinJia:(0,u.formatNumber)(t.ZuiXinJia),ZhangDie:(0,u.formatNumber)(t.ZhangDie),ZhangFu:(0,u.formatNumber)(t.ZhangFu/100,2,"%"),KaiPanJia:(0,u.formatNumber)(t.KaiPanJia),ZuoShou:(0,u.formatNumber)(t.ZuoShou),ZuiGaoJia:(0,u.formatNumber)(t.ZuiGaoJia),ZuiDiJia:(0,u.formatNumber)(t.ZuiDiJia),ChengJiaoLiang:(0,u.formatNumber)(t.ChengJiaoLiang,2,"万/亿"),HuanShou:(0,u.formatNumber)(t.HuanShou),ShiYingLv:(0,u.formatNumber)(t.ShiYingLv),ZongShiZhi:(0,u.formatNumber)(t.ZongShiZhi,2,"万/亿")})}var o=r(26),a=e(o),u=r(141),c=r(144),s=e(c),f=r(145),h=e(f),l=r(146),p=e(l),d=r(147),v=e(d),g=r(142),y=e(g);Page({data:{chartType:"min",period:"1day",dynaData:i({}),chartWidth:375,chartHeight:400,isPortfolio:!1},onReady:function(){var t=this.data.dynaData;t&&t.Obj&&wx.setNavigationBarTitle({title:t.ZhongWenJianCheng+" - "+t.Obj}),this.isReady=!0},onLoad:function(t){var n=this;this.setData(t),this.loadDyanData(),this.loadChart(),this.isPortfolio(),this.removeListener=y.default.onPortfolioChanged(function(){return n.isPortfolio()})},onHide:function(){this.cancel()},onUnload:function(){this.cancel()},loadDyanData:function(){var t=this;this.dynaDataStore=new u.DataStore({serviceUrl:"/stkdata",fields:["ZuiXinJia","ZhongWenJianCheng","ZhangDie","ZhangFu","ShiJian","KaiPanJia","ZuoShou","ZuiGaoJia","ZuiDiJia","ChengJiaoLiang","HuanShou","ShiYingLv","ZongShiZhi","LeiXing"]}),this.dynaDataStore.subscribe({obj:this.data.obj},function(n){if(n&&!(n instanceof Error)){var r=n[t.data.obj];t.setData({dynaData:i(r)}),t.isReady&&wx.setNavigationBarTitle({title:r.ZhongWenJianCheng+" - "+r.Obj})}})},loadChart:function(){var t=this;wx.getSystemInfo({success:function(n){t.chartDataProvider=new s.default({obj:t.data.obj});var r=n.windowWidth,e=n.windowHeight-210,i=n.pixelRatio;t.setData({chartWidth:r,chartHeight:e}),t.canvas=new h.default({pixelRadio:i,canvasId:1,width:r,height:e}),t.showChart()}})},isPortfolio:function(){var t=this;y.default.inPortfolio(this.data.obj).then(function(n){t.setData({isPortfolio:n})})},cancel:function(){this.dynaDataStore&&this.dynaDataStore.cancel(),this.chartDataProvider&&this.chartDataProvider.cancel(),this.removeListener&&this.removeListener()},showChart:function(){var t=void 0;if("min"===this.data.chartType)t=this.minChart=this.minChart||new p.default(this.chartDataProvider);else{var n="klineChart"+this.data.period;t=this[n]=this[n]||new v.default(this.chartDataProvider,{period:this.data.period})}this.canvas.show(t)},showKline:function(t){this.setData({chartType:"kline",period:t.target.dataset.period||"1day"}),this.showChart()},showMin:function(){this.setData({chartType:"min"}),this.showChart()},addPortfolio:function(){y.default.addPortfolio(this.data.obj)},removePortfolio:function(){y.default.removePortfolio(this.data.obj)},touchstart:function(t){this.canvas.touchstart(t)},touchmove:function(t){this.canvas.touchmove(t)},touchend:function(t){this.canvas.touchend(t)},touchcancel:function(t){this.canvas.touchcancel(t)},longtap:function(t){this.canvas.longtap(t)},onShareAppMessage:function(){var t=this.data.obj,n=this.data.dynaData;return{title:n.ZhongWenJianCheng+" - "+n.Obj,desc:"最新价:"+n.ZuiXinJia+" 涨跌幅:"+n.ZhangFu,path:"/pages/quotation/quotation?obj="+t}}})},function(t,n){t.exports=require("../../charts/DataProvider")},function(t,n){t.exports=require("../../charts/Canvas")},function(t,n){t.exports=require("../../charts/MinChart")},function(t,n){t.exports=require("../../charts/KlineChart")}])});