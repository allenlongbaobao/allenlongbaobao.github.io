webpackJsonp([10],{"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"9bBU":function(t,n,e){e("mClu");var r=e("FeBl").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},C4MV:function(t,n,e){t.exports={default:e("9bBU"),__esModule:!0}},EqjI:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},ON07:function(t,n,e){var r=e("EqjI"),o=e("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},Zrlr:function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},dFHs:function(t,n,e){var r=e("fDf1");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("180b4c08",r,!1)},dpnP:function(t,n,e){"use strict";function r(t){c||e("dFHs")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("wHx1"),i=e("h/KF"),c=!1,u=e("VU/8"),a=r,s=u(o.a,i.a,!1,a,"data-v-7bb1a81c",null);s.options.__file="src/pages/lab/ReaderAssist.vue",n.default=s.exports},evD5:function(t,n,e){var r=e("77Pl"),o=e("SfB7"),i=e("MmMw"),c=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},fDf1:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n#canvas[data-v-7bb1a81c] {\n  border: 1px 1px solid;\n}\nh1[data-v-7bb1a81c], h2[data-v-7bb1a81c] {\n  font-weight: normal;\n}\nul[data-v-7bb1a81c] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-7bb1a81c] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-7bb1a81c] {\n  color: #42b983;\n}\n",""])},"h/KF":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),e("canvas",{attrs:{id:"canvas",width:"500",height:"500"},on:{mousedown:function(n){t.recordStartPoint(n)},mouseup:function(n){t.recordEndPoint(n)}}}),t._v(" "),e("button",{attrs:{id:"cancel"},on:{click:function(n){t.back()}}},[t._v("返回")]),t._v(" "),e("button",{attrs:{id:"certain"},on:{click:t.finishFrameAndShowInput}},[t._v("确定")])])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};n.a=i},hJx8:function(t,n,e){var r=e("evD5"),o=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},kM2E:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("+ZMJ"),c=e("hJx8"),u=function(t,n,e){var a,s,f,l=t&u.F,p=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,b=p?o:o[n]||(o[n]={}),x=b.prototype,w=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(a in e)(s=!l&&w&&void 0!==w[a])&&a in b||(f=s?w[a]:e[a],b[a]=p&&"function"!=typeof w[a]?e[a]:v&&s?i(f,r):y&&w[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[a]=f,t&u.R&&x&&!x[a]&&c(x,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},mClu:function(t,n,e){var r=e("kM2E");r(r.S+r.F*!e("+E39"),"Object",{defineProperty:e("evD5").f})},wHx1:function(t,n,e){"use strict";var r=e("Zrlr"),o=e.n(r),i=e("wxAW"),c=e.n(i),u=e("lRwf");e.n(u).a.config.productionTip=!1;var a=function(){function t(n,e,r,i,c){o()(this,t),this.leftX=n,this.leftY=e,this.rightX=r,this.rightY=i,this.notes=c}return c()(t,[{key:"changeNotes",value:function(t){this.notes=t}}]),t}();n.a={data:function(){return{msg:"Welcome to Your Vue.js App",startPoint:{x:0,y:0},endPoint:{x:0,y:0},can:document.getElementById("canvas"),cxt:null}},methods:{draw:function(){this.can=document.getElementById("canvas"),this.cxt=this.can.getContext("2d"),this.cxt.fillStyle="#FF0000",this.cxt.strokeStyle="#FF0000",this.cxt.linewidth=10;var t=this.startPoint.x,n=this.startPoint.y,e=this.endPoint.x,r=this.endPoint.y;this.cxt.strokeRect(t,n,e-t,r-n),this.cxt.save(),this.showTips(this.cxt)},showTips:function(t){var n=new a;console.log(t),console.log(n)},back:function(){this.cxt.restore()},finishFrameAndShowInput:function(){},showSaveOption:function(t){},recordStartPoint:function(t){this.startPoint.x=t.layerX,this.startPoint.y=t.layerY},recordEndPoint:function(t){this.endPoint.x=t.layerX,this.endPoint.y=t.layerY,this.draw(),this.showSaveOption()}},mounted:function(){}}},wxAW:function(t,n,e){"use strict";n.__esModule=!0;var r=e("C4MV"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()}});
//# sourceMappingURL=10.e41a2bed8ebd66a8e9c0.js.map