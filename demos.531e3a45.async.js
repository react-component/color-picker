"use strict";(self.webpackChunk_rc_component_color_picker=self.webpackChunk_rc_component_color_picker||[]).push([[433],{32552:function(tt,B,f){f.r(B),f.d(B,{default:function(){return Ge}});var te=f(27424),H=f.n(te),re=f(42122),b=f.n(re),ne=f(70215),$=f.n(ne),oe=f(50302),ae=f(60869),C=f(67294),N={shiftX:64,adjustY:1},E={adjustX:1,shiftY:!0},j=[0,0],le={left:{points:["cr","cl"],overflow:E,offset:[-4,0],targetOffset:j},right:{points:["cl","cr"],overflow:E,offset:[4,0],targetOffset:j},top:{points:["bc","tc"],overflow:N,offset:[0,-4],targetOffset:j},bottom:{points:["tc","bc"],overflow:N,offset:[0,4],targetOffset:j},topLeft:{points:["bl","tl"],overflow:N,offset:[0,-4],targetOffset:j},leftTop:{points:["tr","tl"],overflow:E,offset:[-4,0],targetOffset:j},topRight:{points:["br","tr"],overflow:N,offset:[0,-4],targetOffset:j},rightTop:{points:["tl","tr"],overflow:E,offset:[4,0],targetOffset:j},bottomRight:{points:["tr","br"],overflow:N,offset:[0,4],targetOffset:j},rightBottom:{points:["bl","br"],overflow:E,offset:[4,0],targetOffset:j},bottomLeft:{points:["tl","bl"],overflow:N,offset:[0,4],targetOffset:j},leftBottom:{points:["br","bl"],overflow:E,offset:[-4,0],targetOffset:j}},se=le,ie=f(18698),A=f.n(ie),ce=f(56690),ue=f.n(ce),fe=f(89728),ve=f.n(fe),de=f(61655),ge=f.n(de),he=f(26389),pe=f.n(he),me=f(98032),Ce=["v"],I=function(l){ge()(t,l);var e=pe()(t);function t(o){return ue()(this,t),e.call(this,Se(o))}return ve()(t,[{key:"toHsbString",value:function(){var r=this.toHsb(),n=X(r.s*100),s=X(r.b*100),v=X(r.h),i=r.a,c="hsb(".concat(v,", ").concat(n,"%, ").concat(s,"%)"),d="hsba(".concat(v,", ").concat(n,"%, ").concat(s,"%, ").concat(i.toFixed(i===0?0:2),")");return i===1?c:d}},{key:"toHsb",value:function(){var r=this.toHsv();A()(this.originalInput)==="object"&&this.originalInput&&"h"in this.originalInput&&(r=this.originalInput);var n=r,s=n.v,v=$()(n,Ce);return b()(b()({},v),{},{b:r.v})}}]),t}(me.C),xe=["b"],k="rc-color-picker",X=function(e){return Math.round(Number(e||0))},Se=function(e){if(e&&A()(e)==="object"&&"h"in e&&"b"in e){var t=e,o=t.b,r=$()(t,xe);return b()(b()({},r),{},{v:o})}return typeof e=="string"&&/hsb/.test(e)?e.replace(/hsb/,"hsv"):e},O=function(e){return e instanceof I?e:new I(e)},z=O("#1677ff"),W=function(e){var t=e.offset,o=e.targetRef,r=e.containerRef,n=e.color,s=e.type,v=r.current.getBoundingClientRect(),i=v.width,c=v.height,d=o.current.getBoundingClientRect(),g=d.width,u=d.height,h=g/2,p=u/2,m=(t.x+h)/i,R=1-(t.y+p)/c,x=n.toHsb(),D=m,y=(t.x+h)/i*360;if(s)switch(s){case"hue":return O(b()(b()({},x),{},{h:y<=0?0:y}));case"alpha":return O(b()(b()({},x),{},{a:D<=0?0:D}))}return O({h:x.h,s:m<=0?0:m,b:R>=1?1:R,a:x.a})},G=function(e,t,o,r){var n=e.current.getBoundingClientRect(),s=n.width,v=n.height,i=t.current.getBoundingClientRect(),c=i.width,d=i.height,g=c/2,u=d/2,h=o.toHsb();if(!(c===0&&d===0||c!==d)){if(r)switch(r){case"hue":return{x:h.h/360*s-g,y:-u/3};case"alpha":return{x:h.a/1*s-g,y:-u/3}}return{x:h.s*s-g,y:(1-h.b)*v-u}}},a=f(85893),be=function(e){var t=e.color,o=e.prefixCls,r="".concat(o,"-display");return(0,a.jsx)("div",{className:r,children:(0,a.jsxs)("div",{className:"".concat(r,"-container"),children:[(0,a.jsx)("div",{className:"".concat(r,"-block")}),(0,a.jsx)("div",{className:"".concat(r,"-layer"),style:{background:t.toRgbString()}})]})})},Re=be;function De(l){var e="touches"in l?l.touches[0]:l,t=document.documentElement.scrollLeft||document.body.scrollLeft||window.pageXOffset,o=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;return{pageX:e.pageX-t,pageY:e.pageY-o}}function ye(l){var e=l.offset,t=l.targetRef,o=l.containerRef,r=l.direction,n=l.onDragChange,s=l.calculate,v=l.color,i=l.onDragStart,c=l.onDragStop,d=(0,C.useState)(e||{x:0,y:0}),g=H()(d,2),u=g[0],h=g[1],p=(0,C.useRef)(null),m=(0,C.useRef)(null),R=(0,C.useRef)({flag:!1});(0,C.useEffect)(function(){if(R.current.flag===!1){var P=s==null?void 0:s(o);P&&h(P)}},[v]),(0,C.useEffect)(function(){return function(){document.removeEventListener("mousemove",p.current),document.removeEventListener("mouseup",m.current),document.removeEventListener("touchmove",p.current),document.removeEventListener("touchend",m.current),p.current=null,m.current=null}},[]);var x=function(S){var L=De(S),V=L.pageX,Fe=L.pageY,M=o.current.getBoundingClientRect(),Ze=M.x,Ue=M.y,Je=M.width,Ke=M.height,_=t.current.getBoundingClientRect(),T=_.width,w=_.height,Qe=T/2,qe=w/2,_e=Math.max(0,Math.min(V-Ze,Je))-Qe,et=Math.max(0,Math.min(Fe-Ue,Ke))-qe,ee={x:_e,y:r==="x"?u.y:et};if(T===0&&w===0||T!==w)return!1;h(ee),n==null||n(ee)},D=function(S){S.preventDefault(),x(S)},y=function(S){S.preventDefault(),R.current.flag=!1,document.removeEventListener("mousemove",p.current),document.removeEventListener("mouseup",m.current),document.removeEventListener("touchmove",p.current),document.removeEventListener("touchend",m.current),p.current=null,m.current=null,c==null||c()},Y=function(S){x(S),R.current.flag=!0,document.addEventListener("mousemove",D),document.addEventListener("mouseup",y),document.addEventListener("touchmove",D),document.addEventListener("touchend",y),p.current=D,m.current=y,i==null||i()};return[u,Y]}var F=ye,je=f(38416),Oe=f.n(je),Pe=f(94184),Z=f.n(Pe),He=function(e){var t=e.size,o=t===void 0?"default":t,r=e.color,n=e.prefixCls;return(0,a.jsx)("div",{className:Z()("".concat(n,"-handler"),Oe()({},"".concat(n,"-handler-sm"),o==="small")),style:{backgroundColor:r}})},U=He,Ne=function(e){var t=e.children,o=e.style,r=e.prefixCls;return(0,a.jsx)("div",{className:"".concat(r,"-palette"),style:b()({position:"relative"},o),children:t})},J=Ne,Ee=(0,C.forwardRef)(function(l,e){var t=l.children,o=l.offset;return(0,a.jsx)("div",{ref:e,style:{position:"absolute",left:o.x,top:o.y,zIndex:1},children:t})}),K=Ee,Le=function(e){var t=e.color,o=e.onChange,r=e.prefixCls,n=e.onDragStart,s=e.onDragStop,v=(0,C.useRef)(),i=(0,C.useRef)(),c=F({color:t,containerRef:v,targetRef:i,calculate:function(p){return G(p,i,t)},onDragChange:function(p){return o(W({offset:p,targetRef:i,containerRef:v,color:t}))},onDragStart:n,onDragStop:s}),d=H()(c,2),g=d[0],u=d[1];return(0,a.jsx)("div",{ref:v,className:"".concat(r,"-select"),onMouseDown:u,onTouchStart:u,children:(0,a.jsxs)(J,{prefixCls:r,children:[(0,a.jsx)(K,{offset:g,ref:i,children:(0,a.jsx)(U,{color:t.toRgbString(),prefixCls:r})}),(0,a.jsx)("div",{className:"".concat(r,"-saturation"),style:{backgroundColor:"hsl(".concat(t.toHsb().h,",100%, 50%)"),backgroundImage:"linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"}})]})})},Ve=Le,Me=function(e){var t=e.colors,o=e.children,r=e.direction,n=r===void 0?"to right":r,s=e.type,v=e.prefixCls,i=(0,C.useMemo)(function(){return t.map(function(c,d){var g=O(c);return s==="alpha"&&d===t.length-1&&g.setAlpha(1),g.toRgbString()}).join(",")},[t,s]);return(0,a.jsx)("div",{className:"".concat(v,"-gradient"),style:{position:"absolute",inset:0,background:"linear-gradient(".concat(n,", ").concat(i,")")},children:o})},$e=Me,Xe=function(e){var t=e.gradientColors,o=e.direction,r=e.type,n=r===void 0?"hue":r,s=e.color,v=e.value,i=e.onChange,c=e.prefixCls,d=e.onDragStart,g=e.onDragStop,u=(0,C.useRef)(),h=(0,C.useRef)(),p=F({color:s,targetRef:h,containerRef:u,calculate:function(y){return G(y,h,s,n)},onDragChange:function(y){i(W({offset:y,targetRef:h,containerRef:u,color:s,type:n}))},direction:"x",onDragStart:d,onDragStop:g}),m=H()(p,2),R=m[0],x=m[1];return(0,a.jsx)("div",{ref:u,className:Z()("".concat(c,"-slider"),"".concat(c,"-slider-").concat(n)),onMouseDown:x,onTouchStart:x,children:(0,a.jsxs)(J,{prefixCls:c,children:[(0,a.jsx)(K,{offset:R,ref:h,children:(0,a.jsx)(U,{size:"small",color:v,prefixCls:c})}),(0,a.jsx)($e,{colors:t,direction:o,type:n,prefixCls:c})]})})},Q=Xe;function q(l){return l!==void 0}var Ye=function(e,t){var o=t.defaultValue,r=t.value,n=(0,C.useState)(function(){var c;return q(r)?c=r:q(o)?c=o:c=e,O(c)}),s=H()(n,2),v=s[0],i=s[1];return(0,C.useEffect)(function(){r&&i(O(r))},[r]),[v,i]},Te=Ye,we=["rgb(255, 0, 0) 0%","rgb(255, 255, 0) 17%","rgb(0, 255, 0) 33%","rgb(0, 255, 255) 50%","rgb(0, 0, 255) 67%","rgb(255, 0, 255) 83%","rgb(255, 0, 0) 100%"],Be=function(e){var t=e.value,o=e.defaultValue,r=e.prefixCls,n=r===void 0?k:r,s=e.onChange,v=e.panelRender,i=e.onDragStart,c=e.onDragStop,d=Te(z,{value:t,defaultValue:o}),g=H()(d,2),u=g[0],h=g[1],p=(0,C.useMemo)(function(){var x=O(u.toRgbString());return x.setAlpha(1),x.toRgbString()},[u]),m=function(D){t||h(D),s==null||s(D)},R=(0,C.useMemo)(function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ve,{color:u,onChange:m,prefixCls:n,onDragStart:i,onDragStop:c}),(0,a.jsxs)("div",{className:"".concat(n,"-slider-container"),children:[(0,a.jsx)(Re,{color:u,prefixCls:n}),(0,a.jsxs)("div",{className:"".concat(n,"-slider-group"),children:[(0,a.jsx)(Q,{gradientColors:we,prefixCls:n,color:u,value:"hsl(".concat(u.toHsb().h,",100%, 50%)"),onChange:m,onDragStart:i,onDragStop:c}),(0,a.jsx)(Q,{type:"alpha",gradientColors:["rgba(255, 0, 4, 0) 0%",p],prefixCls:n,color:u,value:u.toRgbString(),onChange:m,onDragStart:i,onDragStop:c})]})]})]})},[n,p,u,m]);return(0,a.jsx)("div",{className:"".concat(n,"-panel"),children:typeof v=="function"?v(R):R})},Ae=Be,Ie=["open","disabled","trigger","children","onOpenChange","placement","classNames","styles","prefixCls","builtinPlacements","motion"],ke=function(e){var t=e.open,o=e.disabled,r=e.trigger,n=r===void 0?"click":r,s=e.children,v=e.onOpenChange,i=e.placement,c=i===void 0?"bottomLeft":i,d=e.classNames,g=e.styles,u=e.prefixCls,h=u===void 0?k:u,p=e.builtinPlacements,m=p===void 0?se:p,R=e.motion,x=$()(e,Ie),D=(0,ae.Z)(!1,{value:t,postState:function(V){return!o&&V},onChange:v}),y=H()(D,2),Y=y[0],P=y[1],S=(0,C.useRef)(!1);return(0,a.jsx)(oe.Z,b()(b()({action:[n],popupVisible:Y,popup:(0,a.jsx)(Ae,b()(b()({},e),{},{onDragStart:function(){return S.current=!0},onDragStop:function(){return setTimeout(function(){return S.current=!1}),0}})),popupPlacement:c,onPopupVisibleChange:function(V){S.current||P(V),S.current&&(S.current=!S.current)},popupClassName:d==null?void 0:d.popup,popupStyle:g==null?void 0:g.popup,builtinPlacements:m,popupMotion:R,prefixCls:h},x),{},{children:s}))},ze=ke,We=ze,Ge=function(){var l=(0,C.useState)(z),e=H()(l,2),t=e[0],o=e[1];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["hex:",t.getAlpha()===1?t.toHexString():t==null?void 0:t.toHex8String()]}),(0,a.jsxs)("p",{children:["hsv: ",t==null?void 0:t.toHsvString()]}),(0,a.jsxs)("p",{children:["rbg: ",t==null?void 0:t.toRgbString()]}),(0,a.jsx)(We,{value:t,panelRender:function(n){return(0,a.jsx)("div",{children:n})},onChange:function(n){o(n)},children:(0,a.jsx)("div",{style:{width:30,height:30,background:t==null?void 0:t.toRgbString()}})})]})}}}]);
