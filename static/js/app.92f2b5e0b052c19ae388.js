webpackJsonp([1],{"+jW6":function(t,n,e){"use strict";var a=e("ROWV"),i=e("Y8aG"),s=e("VU/8"),r=s(a.a,i.a,!1,null,null,null);n.a=r.exports},"31ng":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"Head"}}),t._v(" "),e("router-view",{attrs:{name:"Mask"}}),t._v(" "),e("router-view",{attrs:{name:"Article"}}),t._v(" "),e("router-view",{attrs:{name:"Lab"}})],1)},i=[],s={render:a,staticRenderFns:i};n.a=s},AO5d:function(t,n,e){"use strict";n.a={data:function(){return{msg:"this is a main Page"}}}},CM8o:function(t,n){},"Ek9/":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.msg))])])},i=[],s={render:a,staticRenderFns:i};n.a=s},FJar:function(t,n,e){"use strict";function a(t){e("CM8o")}var i=e("h+oL"),s=e("mf5n"),r=e("VU/8"),c=a,o=r(i.a,s.a,!1,c,"data-v-5202adbe",null);n.a=o.exports},M93x:function(t,n,e){"use strict";function a(t){e("PS+0")}var i=e("xJD8"),s=e("31ng"),r=e("VU/8"),c=a,o=r(i.a,s.a,!1,c,null,null);n.a=o.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),i=e("M93x"),s=e("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},OQQf:function(t,n,e){"use strict";var a=e("PuNR"),i=e("Ek9/"),s=e("VU/8"),r=s(a.a,i.a,!1,null,null,null);n.a=r.exports},"PS+0":function(t,n){},PuNR:function(t,n,e){"use strict";n.a={data:function(){return{msg:"this is a article Page"}}}},ROWV:function(t,n,e){"use strict";n.a={name:"lab",data:function(){return{msg:"this is a lab Page"}}}},SkRI:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.msg))])])},i=[],s={render:a,staticRenderFns:i};n.a=s},Y8aG:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.msg))])])},i=[],s={render:a,staticRenderFns:i};n.a=s},YaEn:function(t,n,e){"use strict";var a=e("7+uW"),i=e("/ocq"),s=e("FJar"),r=e("+jW6"),c=e("i5qY"),o=e("pMNZ"),u=e("OQQf");a.a.use(i.a),n.a=new i.a({routes:[{path:"/",name:"Hello",components:{Head:c.a,Page:o.a}},{path:"/article",name:"article",components:{Article:u.a}},{path:"/lab",name:"lab",components:{Lab:r.a,Mask:s.a}}]})},gtF0:function(t,n){},"h+oL":function(t,n,e){"use strict";var a=e("Zrlr"),i=e.n(a),s=e("wxAW"),r=e.n(s);e("7+uW").a.config.productionTip=!1;var c=function(){function t(n,e,a,s,r){i()(this,t),this.leftX=n,this.leftY=e,this.rightX=a,this.rightY=s,this.notes=r}return r()(t,[{key:"changeNotes",value:function(t){this.notes=t}}]),t}();n.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",startPoint:{x:0,y:0},endPoint:{x:0,y:0},can:document.getElementById("canvas"),cxt:null}},methods:{draw:function(){this.can=document.getElementById("canvas"),this.cxt=this.can.getContext("2d"),this.cxt.fillStyle="#FF0000",this.cxt.strokeStyle="#FF0000",this.cxt.linewidth=10;var t=this.startPoint.x,n=this.startPoint.y,e=this.endPoint.x,a=this.endPoint.y;this.cxt.strokeRect(t,n,e-t,a-n),this.cxt.save(),this.showTips(this.cxt)},showTips:function(t){var n=new c;console.log(t),console.log(n)},back:function(){this.cxt.restore()},finishFrameAndShowInput:function(){},showSaveOption:function(t){},recordStartPoint:function(t){this.startPoint.x=t.layerX,this.startPoint.y=t.layerY},recordEndPoint:function(t){this.endPoint.x=t.layerX,this.endPoint.y=t.layerY,this.draw(),this.showSaveOption()}},mounted:function(){}}},hKcQ:function(t,n,e){t.exports=e.p+"static/img/banner.fcfb721.jpg"},i5qY:function(t,n,e){"use strict";function a(t){e("gtF0")}var i=e("mbPV"),s=e("xw53"),r=e("VU/8"),c=a,o=r(i.a,s.a,!1,c,null,null);n.a=o.exports},mbPV:function(t,n,e){"use strict";n.a={name:"head",data:function(){return{msg:"i am allen, a software engineer!",items:[{link:"/",content:"主页"},{link:"/article",content:"文章"},{link:"/lab",content:"实验室"}]}}}},mf5n:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Essential Links")]),t._v(" "),e("canvas",{attrs:{id:"canvas",width:"500",height:"500"},on:{mousedown:function(n){t.recordStartPoint(n)},mouseup:function(n){t.recordEndPoint(n)}}}),t._v(" "),e("button",{attrs:{id:"cancel"},on:{click:function(n){t.back()}}},[t._v("返回")]),t._v(" "),e("button",{attrs:{id:"certain"},on:{click:t.finishFrameAndShowInput}},[t._v("确定")])])},i=[],s={render:a,staticRenderFns:i};n.a=s},pMNZ:function(t,n,e){"use strict";var a=e("AO5d"),i=e("SkRI"),s=e("VU/8"),r=s(a.a,i.a,!1,null,null,null);n.a=r.exports},xJD8:function(t,n,e){"use strict";n.a={name:"app",data:function(){return{}}}},xw53:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"head"}},[a("img",{attrs:{src:e("hKcQ")}}),t._v(" "),a("h1",{attrs:{id:"sign"}},[t._v(t._s(t.msg))]),t._v(" "),a("ul",{attrs:{id:"navigateBar"}},t._l(t.items,function(n){return a("li",{staticClass:"singleNavigate"},[a("router-link",{attrs:{to:n.link}},[t._v(t._s(n.content))])],1)}))])},i=[],s={render:a,staticRenderFns:i};n.a=s}},["NHnr"]);
//# sourceMappingURL=app.92f2b5e0b052c19ae388.js.map