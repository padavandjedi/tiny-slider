var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=A.style.overflow,e.style.background="",e.style.overflow=A.style.overflow="hidden",A.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),A.style.overflow=t,A.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function d(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function f(e,t){return e.className.indexOf(t)>=0}function v(e,t){f(e,t)||(e.className+=" "+t)}function h(e,t){f(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function x(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function b(e){p(e,"hidden")||g(e,{hidden:""})}function T(e){p(e,"hidden")&&x(e,"hidden")}function E(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function C(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function w(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function O(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&W;e.addEventListener(n,t[n],i)}}function D(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&W;e.removeEventListener(n,t[n],i)}}function N(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function k(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var A=document.documentElement,P=!1;try{var M=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,M)}catch(e){}var W=!!P&&{passive:!0},I=navigator.userAgent,S=!0,H={};try{H=localStorage,H.tnsApp?H.tnsApp!==I&&(H.tnsApp=I,["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){H.removeItem(e)})):H.tnsApp=I}catch(e){S=!1}var L=document,z=window,B={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},R=t(H.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),S),j=t(H.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),S),q=t(H.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),S),G=t(H.tTf)||n("tTf",C(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),S),F=t(H.tTDu)||n("tTDu",C(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),S),U=t(H.tTDe)||n("tTDe",C(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),S),X=t(H.tADu)||n("tADu",C(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),S),V=t(H.tADe)||n("tADe",C(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),S),Y=t(H.tTE)||n("tTE",w(F,"Transition"),S),K=t(H.tAE)||n("tAE",w(X,"Animation"),S);return q||(j=!1),function(t){function n(){return z.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function a(e){var n=t[e];return!n&&lt&&st.indexOf(e)>=0&&lt.forEach(function(t){ot[t][e]&&(n=!0)}),n}function r(e,n){n=n?n:ut;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!Ve&&e in a)i=a[e];else if("items"===e&&r("fixedWidth"))i=Math.floor(rt/(r("fixedWidth")+r("gutter")));else if("autoHeight"===e&&"outer"===yt)i=!0;else if(i=t[e],lt&&st.indexOf(e)>=0)for(var o=0,s=lt.length;o<s;o++){var l=lt[o];if(!(n>=l))break;e in ot[l]&&(i=ot[l][e])}return"slideBy"===e&&"page"===i&&(i=r("items")),i}function o(e){return R?R+"("+100*e+"% / "+Pt+")":100*e/Pt+"%"}function y(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(rt%(n+t)+t)/2+"px":$e?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=$e?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function C(e,t,n){return e?(e+t)*Pt+"px":R?R+"("+100*Pt+"% / "+n+")":100*Pt/n+"%"}function w(e,t,n){var i="";if($e){if(i="width:",e)i+=e+t+"px";else{var a=Ve?Pt:n;i+=R?R+"(100% / "+a+")":100/a+"%"}i+=Qt+";"}return i}function A(e){var t="";if(e!==!1){t=($e?"padding-":"margin-")+($e?"right":"bottom")+": "+e+"px;"}return t}function P(e){e=e||z.event,clearTimeout(vt),vt=setTimeout(function(){var t=n();ut!==t&&(ut=t,M(),"outer"===yt&&Gt.emit("outerResized",qe(e)))},100)}function M(){var e=ct,t=Lt,n=pt,i=Kt;if(rt=_e.clientWidth,Ze=et.clientWidth,lt&&W(),e!==ct||bt){var a=Tt,o=Ot,s=bt,u=xt,d=gt,f=Vt;if(pt=r("items"),mt=r("slideBy"),Vt=r("disable"),Kt=!!Vt||!!Yt&&at<=pt,pt!==n&&(Rt=Pt-pt,Yn()),Vt!==f&&S(Vt),Kt!==i&&(Kt&&(Lt=Ve?At:0),I()),e!==ct&&(Et=r("speed"),xt=r("edgePadding"),gt=r("gutter"),bt=r("fixedWidth"),Vt||bt===s||de(),(Ot=r("autoHeight"))!==o&&(Ot||(et.style.height=""))),Tt=!Kt&&r("arrowKeys"),Tt!==a&&(Tt?O(L,en):D(L,en)),an){var v=hn,h=pn;hn=!Kt&&r("controls"),pn=r("controlsText"),hn!==v&&(hn?T(mn):b(mn)),pn!==h&&(un.innerHTML=pn[0],dn.innerHTML=pn[1])}if(rn){var p=gn;gn=!Kt&&r("nav"),gn!==p&&(gn?(T(xn),je()):b(xn))}if(sn){var m=qn;qn=!Kt&&r("touch"),qn!==m&&Ve&&(qn?O(tt,tn):D(tt,tn))}if(ln){var g=Xn;Xn=!Kt&&r("mouseDrag"),Xn!==g&&Ve&&(Xn?O(tt,nn):D(tt,nn))}if(on){var x=Nn,E=Mn,N=Ln,k=Pn;if(Kt?Nn=Mn=Ln=!1:(Nn=r("autoplay"),Nn?(Mn=r("autoplayHoverPause"),Ln=r("autoplayResetOnVisibility")):Mn=Ln=!1),Pn=r("autoplayText"),kn=r("autoplayTimeout"),Nn!==x&&(Nn?(Wn&&T(Wn),In||Te()):(Wn&&b(Wn),In&&Ee())),Mn!==E&&(Mn?O(tt,$t):D(tt,$t)),Ln!==N&&(Ln?O(L,_t):D(L,_t)),Wn&&Pn!==k){var P=Nn?1:0,M=Wn.innerHTML,H=M.length-k[P].length;M.substring(H)===k[P]&&(Wn.innerHTML=M.substring(0,H)+Pn[P])}}if(!q){if(Kt||xt===u&&gt===d||(et.style.cssText=y(xt,gt,bt)),Ve&&$e&&(bt!==s||gt!==d||pt!==n)&&(tt.style.width=C(bt,gt,pt)),$e&&(pt!==n||gt!==d)){var z=w(bt,gt,pt)+A(gt);Dt.removeRule(c(Dt)-1),l(Dt,"#"+Xt+" > .tns-item",z,c(Dt))}bt||Lt!==t||ve(0)}Lt!==t&&(Gt.emit("indexChanged",qe()),ve(0),zt=Lt),pt!==n&&(_(),Z(),navigator.msMaxTouchPoints&&ne())}$e||Vt||(te(),Be(),de()),bt&&xt&&(Kt||rt<=bt+gt?"0px"!==et.style.margin&&(et.style.margin="0px"):et.style.cssText=y(xt,gt,bt)),Z()}function W(){ct=0,lt.forEach(function(e,t){ut>=e&&(ct=t+1)})}function I(){if(At){var e="tns-transparent";if(Kt){if(!f(it[0],e)){xt&&(et.style.margin="0px");for(var t=At;t--;)v(it[t],e),v(it[Pt-t-1],e)}}else if(xt&&!bt&&q&&et.style.margin&&(et.style.margin=""),f(it[0],e))for(var t=At;t--;)h(it[t],e),h(it[Pt-t-1],e)}}function S(e){var t=it.length;if(e){if(Dt.disabled=!0,tt.className=tt.className.replace(Ut.substring(1),""),tt.style="",wt)for(var n=At;n--;)Ve&&b(it[n]),b(it[t-n-1]);if($e&&Ve||(et.style=""),!Ve)for(var i=Lt;i<Lt+at;i++){var a=it[i];a.style="",h(a,Ye),h(a,Je)}}else{if(Dt.disabled=!1,tt.className+=Ut,$e||te(),de(),wt)for(var n=At;n--;)Ve&&T(it[n]),T(it[t-n-1]);if(!Ve)for(var i=Lt;i<Lt+at;i++){var a=it[i],r=i<Lt+pt?Ye:Je;a.style.left=100*(i-Lt)/pt+"%",v(a,r)}}}function H(){In&&(Ee(),Sn=!0)}function Q(){!In&&Sn&&(Te(),Sn=!1)}function J(){if(Nt&&!Vt){var e=Lt,t=Lt+pt;for(xt&&(e-=1,t+=1);e<t;e++)[].forEach.call(it[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[Y]=function(e){e.stopPropagation()},O(e,t),f(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function Z(){if(Ot&&!Vt){for(var e=[],t=Lt;t<Lt+pt;t++)[].forEach.call(it[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ee():$(e)}}function $(e){e.forEach(function(t,n){E(t)&&e.splice(n,1)}),0===e.length?ee():setTimeout(function(){$(e)},16)}function _(){J(),ie(),le(),je(),ae()}function ee(){for(var e,t=[],n=Lt;n<Lt+pt;n++)t.push(it[n].offsetHeight);e=Math.max.apply(null,t),et.style.height!==e&&(F&&ce(Et),et.style.height=e+"px")}function te(){ft=[0];for(var e,t=it[0].getBoundingClientRect().top,n=1;n<Pt;n++)e=it[n].getBoundingClientRect().top,ft.push(e-t)}function ne(){_e.style.msScrollSnapPointsX="snapInterval(0%, "+100/pt+"%)"}function ie(){for(var e=Pt;e--;){var t=it[e];e>=Lt&&e<Lt+pt?p(t,"tabindex")&&(g(t,{"aria-hidden":"false"}),x(t,["tabindex"]),v(t,cn)):(p(t,"tabindex")||g(t,{"aria-hidden":"true",tabindex:"-1"}),f(t,cn)&&h(t,cn))}}function ae(){if(gn&&(Cn=En!==-1?En:Lt%at,En=-1,Cn!==wn)){var e=yn[wn],t=yn[Cn];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,On),v(t,On)}}function re(e){return"button"===e.nodeName.toLowerCase()}function oe(e){return"true"===e.getAttribute("aria-disabled")}function se(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function le(){if(hn&&!wt){var e=fn?un.disabled:oe(un),t=vn?dn.disabled:oe(dn),n=Lt===Bt,i=!Ct&&Lt===Rt;n&&!e&&se(fn,un,!0),!n&&e&&se(fn,un,!1),i&&!t&&se(vn,dn,!0),!i&&t&&se(vn,dn,!1)}}function ce(e,t){e=e?e/1e3+"s":"",t=t||tt,t.style[F]=e,Ve||(t.style[X]=e),$e||(et.style[F]=e)}function ue(){var e;if($e)if(bt)e=-(bt+gt)*Lt+"px";else{var t=G?Pt:pt;e=100*-Lt/t+"%"}else e=-ft[Lt]+"px";return e}function de(e){e||(e=ue()),tt.style[It]=St+e+Ht}function fe(e,t,n,i){for(var a=e,r=e+pt;a<r;a++){var o=it[a];i||(o.style.left=100*(a-Lt)/pt+"%"),F&&ce(Et,o),Qe&&U&&(o.style[U]=o.style[V]=Qe*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&kt.push(o)}}function ve(e,t){void 0===e&&(e=Et),F&&ce(e),Kn(e,t)}function he(e,t){Wt&&Yn(),(Lt!==zt||t)&&(Gt.emit("indexChanged",qe()),Gt.emit("transitionStart",qe()),In&&e&&["click","keydown"].indexOf(e.type)>=0&&Ee(),jt=!0,ve())}function pe(e){return e.toLowerCase().replace(/-/g,"")}function me(e){if(Ve||jt){if(Gt.emit("transitionEnd",qe(e)),!Ve&&kt.length>0)for(var t=0;t<pt;t++){var n=kt[t];n.style.left="",F&&ce(0,n),Qe&&U&&(n.style[U]=n.style[V]=""),h(n,Ke),v(n,Je)}if(!e||!Ve&&e.target.parentNode===tt||e.target===tt&&pe(e.propertyName)===pe(It)){if(!Wt){var i=Lt;Yn(),Lt!==i&&(Gt.emit("indexChanged",qe()),F&&ce(0),de())}Z(),"inner"===yt&&Gt.emit("innerLoaded",qe()),jt=!1,wn=Cn,zt=Lt}}}function ye(e,t){if(!Kt)if("prev"===e)ge(t,-1);else if("next"===e)ge(t,1);else if(!jt){var n=Lt%at,i=0;if(n<0&&(n+=at),"first"===e)i=-n;else if("last"===e)i=at-pt-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%at;a<0&&(a+=at),i=a-n}Lt+=i,Lt%at!=zt%at&&he(t)}}function ge(e,t){if(!jt){var n;if(!t){e=e||z.event;for(var i=e.target||e.srcElement;i!==mn&&[un,dn].indexOf(i)<0;)i=i.parentNode;var a=[un,dn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(t===-1)Lt-=mt;else if(1===t){if(Ct&&Lt===Rt)return void ye(0,e);Lt+=mt}he(n||e&&"keydown"===e.type?e:null)}}function xe(e){if(!jt){e=e||z.event;for(var t,n=e.target||e.srcElement;n!==xn&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=En=[].indexOf.call(yn,n),ye(t,e))}}function be(e,t){g(Wn,{"data-action":e}),Wn.innerHTML=Hn[0]+e+Hn[1]+t}function Te(){we(),Wn&&be("stop",Pn[1]),In=!0}function Ee(){Ce(),Wn&&be("start",Pn[0]),In=!1}function Ce(){In="paused",clearInterval(Dn)}function we(){In!==!0&&(clearInterval(Dn),Dn=setInterval(function(){ge(null,An)},kn))}function Oe(){In?Ee():Te()}function De(){zn!=L.hidden&&In!==!1&&(L.hidden?Ce():we()),zn=L.hidden}function Ne(e){switch(e=e||z.event,e.keyCode){case B.LEFT:ge(e,-1);break;case B.RIGHT:ge(e,1)}}function ke(e){switch(e=e||z.event,e.keyCode){case B.LEFT:case B.UP:case B.PAGEUP:un.disabled||ge(e,-1);break;case B.RIGHT:case B.DOWN:case B.PAGEDOWN:dn.disabled||ge(e,1);break;case B.HOME:ye(0,e);break;case B.END:ye(at-1,e)}}function Ae(e){e.focus()}function Pe(e){function n(e){return t.navContainer?e:bn[e]}var i=L.activeElement;if(p(i,"data-nav")){e=e||z.event;var a=e.keyCode,r=[].indexOf.call(yn,i),o=bn.length,s=bn.indexOf(r);switch(t.navContainer&&(o=at,s=r),a){case B.LEFT:case B.PAGEUP:s>0&&Ae(yn[n(s-1)]);break;case B.UP:case B.HOME:s>0&&Ae(yn[n(0)]);break;case B.RIGHT:case B.PAGEDOWN:s<o-1&&Ae(yn[n(s+1)]);break;case B.DOWN:case B.END:s<o-1&&Ae(yn[n(o-1)]);break;case B.ENTER:case B.SPACE:En=r,ye(r,e)}}}function Me(){ve(0,tt.scrollLeft()),zt=Lt}function We(e){return e.target||e.srcElement}function Ie(e){return e.type.indexOf("touch")>=0}function Se(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function He(e){if(Un=0,ht=!1,Gn=Fn=null,!jt){e=e||z.event;var t;Ie(e)?(t=e.changedTouches[0],Gt.emit("touchStart",qe(e))):(t=e,Se(e),Gt.emit("dragStart",qe(e))),Gn=parseInt(t.clientX),Fn=parseInt(t.clientY),Bn=parseFloat(tt.style[It].replace(St,"").replace(Ht,""))}}function Le(e){if(!jt&&null!==Gn){e=e||z.event;var n;if(Ie(e)?n=e.changedTouches[0]:(n=e,Se(e)),Rn=parseInt(n.clientX)-Gn,jn=parseInt(n.clientY)-Fn,0===Un&&(Un=d(u(jn,Rn),15)===t.axis),Un){Ie(e)?Gt.emit("touchMove",qe(e)):(Vn||(Vn=!0),Gt.emit("dragMove",qe(e))),ht||(ht=!0);var i=Bn;if($e)if(bt)i+=Rn,i+="px";else{var a=G?Rn*pt*100/(Ze*Pt):100*Rn/Ze;i+=a,i+="%"}else i+=jn,i+="px";G&&ce(0),tt.style[It]=St+i+Ht}}}function ze(e){if(!jt&&ht){e=e||z.event;var t;Ie(e)?(t=e.changedTouches[0],Gt.emit("touchEnd",qe(e))):(t=e,Gt.emit("dragEnd",qe(e))),Rn=parseInt(t.clientX)-Gn,jn=parseInt(t.clientY)-Fn;var n=Boolean($e?Rn:jn);if(Un=0,ht=!1,Gn=Fn=null,$e){var i=-Rn*pt/Ze;i=Rn>0?Math.floor(i):Math.ceil(i),Lt+=i}else{var a=-(Bn+jn);if(a<=0)Lt=Bt;else if(a>=ft[ft.length-1])Lt=Rt;else{var r=0;do{r++,Lt=jn<0?r+1:r}while(r<Pt&&a>=ft[r+1])}}if(he(e,n),Vn){Vn=!1;var o=We(e);O(o,{click:function e(t){Se(t),D(o,{click:e})}})}}}function Be(){et.style.height=ft[Lt+pt]-ft[Lt]+"px"}function Re(){bn=[];for(var e=Lt%at%pt;e<at;)!wt&&e+pt>at&&(e=at-pt),bn.push(e),e+=pt;(wt&&bn.length*pt<at||!wt&&bn[0]>0)&&bn.unshift(0)}function je(){gn&&!t.navContainer&&bn.indexOf(Lt%at)<0&&(Re(),bn!==Tn&&(Tn.length>0&&Tn.forEach(function(e){b(yn[e])}),bn.length>0&&bn.forEach(function(e){T(yn[e])}),Tn=bn))}function qe(e){return{container:tt,slideItems:it,navContainer:xn,navItems:yn,controlsContainer:mn,hasControls:an,prevButton:un,nextButton:dn,items:pt,slideBy:mt,cloneCount:At,slideCount:at,slideCountNew:Pt,index:Lt,indexCached:zt,navCurrentIndex:Cn,navCurrentIndexCached:wn,visibleNavIndexes:bn,visibleNavIndexesCached:Tn,event:e||{}}}if(t=e({container:L.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=L.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var Ge={},Fe=t.responsive;for(var Ue in Fe){var Xe=Fe[Ue];Ge[Ue]="number"==typeof Xe?{items:Xe}:Xe}t.responsive=Ge,Ge=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var Ve="carousel"===t.mode;if(!Ve){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var Ye="tns-fadeIn",Ke="tns-fadeOut",Qe=!1,Je=t.animateNormal||"tns-normal";Y&&K&&(Ye=t.animateIn||Ye,Ke=t.animateOut||Ke,Qe=t.animateDelay||Qe)}var Ze,$e="horizontal"===t.axis,_e=L.createElement("div"),et=L.createElement("div"),tt=t.container,nt=tt.parentNode,it=tt.children,at=it.length,rt=nt.clientWidth,ot=t.responsive,st=[],lt=!1,ct=0,ut=n();if(ot){lt=Object.keys(ot).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),lt.forEach(function(e){st=st.concat(Object.keys(ot[e]))});var dt=[];st.forEach(function(e){dt.indexOf(e)<0&&dt.push(e)}),st=dt,W()}var ft,vt,ht,pt=r("items"),mt="page"===r("slideBy")?pt:r("slideBy"),yt=t.nested,gt=r("gutter"),xt=r("edgePadding"),bt=r("fixedWidth"),Tt=r("arrowKeys"),Et=r("speed"),Ct=t.rewind,wt=!Ct&&t.loop,Ot=r("autoHeight"),Dt=s(),Nt=t.lazyload,kt=[],At=wt?2*at:0,Pt=Ve?at+2*At:at+At,Mt=!(!bt||wt||xt),Wt=!Ve||!wt,It=$e?"left":"top",St="",Ht="",Lt=Ve?At:0,zt=Lt,Bt=0,Rt=Pt-pt,jt=!1,qt=t.onInit,Gt=new N,Ft=tt.id,Ut=" tns-slider tns-"+t.mode,Xt=tt.id||i(),Vt=r("disable"),Yt=t.freezable,Kt=!!Vt||!!Yt&&at<=pt,Qt="inner"===yt?" !important":"",Jt={click:ge,keydown:ke},Zt={click:xe,keydown:Pe},$t={mouseover:H,mouseout:Q},_t={visibilitychange:De},en={keydown:Ne},tn={touchstart:He,touchmove:Le,touchend:ze,touchcancel:ze},nn={mousedown:He,mousemove:Le,mouseup:ze,mouseleave:ze},an=a("controls"),rn=a("nav"),on=a("autoplay"),sn=a("touch"),ln=a("mouseDrag"),cn="tns-slide-active";if(an)var un,dn,fn,vn,hn=r("controls"),pn=r("controlsText"),mn=t.controlsContainer;if(rn)var yn,gn=r("nav"),xn=t.navContainer,bn=[],Tn=bn,En=-1,Cn=0,wn=0,On="tns-nav-active";if(on)var Dn,Nn=r("autoplay"),kn=r("autoplayTimeout"),An="forward"===t.autoplayDirection?1:-1,Pn=r("autoplayText"),Mn=r("autoplayHoverPause"),Wn=t.autoplayButton,In=!1,Sn=!1,Hn=["<span class='tns-visually-hidden'>"," animation</span>"],Ln=r("autoplayResetOnVisibility"),zn=!1;if(sn)var Bn,Rn,jn,qn=r("touch"),Gn=null,Fn=null,Un=0;if(ln)var Xn=r("mouseDrag"),Vn=!1;Kt&&(hn=gn=qn=Xn=Tt=Nn=Mn=Ln=!1),G&&(It=G,St="translate",St+=$e?"X(":"Y(",Ht=")"),function(){_e.appendChild(et),nt.insertBefore(_e,tt),et.appendChild(tt),Ze=et.clientWidth;var e="tns-outer",n="tns-inner",i=a("gutter");if(Ve?$e&&(a("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),_e.className=e,et.className=n,et.id=Xt+"-iw",Ot&&(et.className+=" tns-ah",et.style[F]=Et/1e3+"s"),""===tt.id&&(tt.id=Xt),Ut+=j?" tns-subpixel":" tns-no-subpixel",Ut+=R?" tns-calc":" tns-no-calc",Ve&&(Ut+=" tns-"+t.axis),tt.className+=Ut,Ve&&Y){var s={};s[Y]=me,O(tt,s)}e=n=null;for(var u=0;u<at;u++){var d=it[u];d.id||(d.id=Xt+"-item"+u),v(d,"tns-item"),!Ve&&Je&&v(d,Je),g(d,{"aria-hidden":"true",tabindex:"-1"})}if(wt||xt){for(var f=L.createDocumentFragment(),p=L.createDocumentFragment(),m=At;m--;){var T=m%at,E=it[T].cloneNode(!0);if(x(E,"id"),p.insertBefore(E,p.firstChild),Ve){var D=it[at-1-T].cloneNode(!0);x(D,"id"),f.appendChild(D)}}tt.insertBefore(f,tt.firstChild),tt.appendChild(p),it=tt.children}for(var N=Lt;N<Lt+Math.min(at,pt);N++){var d=it[N];g(d,{"aria-hidden":"false"}),x(d,["tabindex"]),v(d,cn),Ve||(d.style.left=100*(N-Lt)/pt+"%",v(d,Ye),h(d,Je))}if(Ve&&$e)if(j){var k=z.getComputedStyle(it[0]).fontSize;k.indexOf("em")>0&&(k=16*parseFloat(k)+"px"),l(Dt,"#"+Xt,"font-size:0;",c(Dt)),l(Dt,"#"+Xt+" > .tns-item","font-size:"+k+";",c(Dt))}else[].forEach.call(it,function(e,t){e.style.marginLeft=o(t)});if(q){var W=y(t.edgePadding,t.gutter,t.fixedWidth);l(Dt,"#"+Xt+"-iw",W,c(Dt)),Ve&&$e&&(W="width:"+C(t.fixedWidth,t.gutter,t.items),l(Dt,"#"+Xt,W,c(Dt))),($e||t.gutter)&&(W=w(t.fixedWidth,t.gutter,t.items)+A(t.gutter),l(Dt,"#"+Xt+" > .tns-item",W,c(Dt)))}else if(et.style.cssText=y(xt,gt,bt),Ve&&$e&&(tt.style.width=C(bt,gt,pt)),$e||gt){var W=w(bt,gt,pt)+A(gt);l(Dt,"#"+Xt+" > .tns-item",W,c(Dt))}if($e||Vt||(te(),Be()),ot&&q&&lt.forEach(function(e){var t=ot[e],n="",i="",o="",s="",l=r("items",e),c=r("fixedWidth",e),u=r("edgePadding",e),d=r("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+Xt+"-iw{"+y(u,d,c)+"}"),Ve&&$e&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(o="#"+Xt+"{width:"+C(c,d,l)+"}"),("fixedWidth"in t||a("fixedWidth")&&"gutter"in t||!Ve&&"items"in t)&&(s+=w(c,d,l)),"gutter"in t&&(s+=A(d)),s.length>0&&(s="#"+Xt+" > .tns-item{"+s+"}"),n=i+o+s,n.length>0&&Dt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",Dt.cssRules.length)}),Ve&&!Vt&&de(),navigator.msMaxTouchPoints&&(v(_e,"ms-touch"),O(_e,{scroll:Me}),ne()),rn){var H=Ve?At:0;if(xn)g(xn,{"aria-label":"Carousel Pagination"}),yn=xn.children,[].forEach.call(yn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":it[H+t].id})});else{for(var B="",N=0;N<at;N++)B+='<button data-nav="'+N+'" tabindex="-1" aria-selected="false" aria-controls="'+it[H+N].id+'" hidden type="button"></button>';B='<div class="tns-nav" aria-label="Carousel Pagination">'+B+"</div>",_e.insertAdjacentHTML("afterbegin",B),xn=_e.querySelector(".tns-nav"),yn=xn.children,je()}if(F){var G=F.substring(0,F.length-18).toLowerCase(),W="transition: all "+Et/1e3+"s";G&&(W="-"+G+"-"+W),l(Dt,"[aria-controls^="+Xt+"-item]",W,c(Dt))}g(yn[0],{tabindex:"0","aria-selected":"true"}),v(yn[0],On),O(xn,Zt),gn||b(xn)}if(on){var U=Nn?"stop":"start";Wn?g(Wn,{"data-action":U}):t.autoplayButtonOutput&&(et.insertAdjacentHTML("beforebegin",'<button data-action="'+U+'" type="button">'+Hn[0]+U+Hn[1]+Pn[0]+"</button>"),Wn=_e.querySelector("[data-action]")),Wn&&O(Wn,{click:Oe}),Nn?(Te(),Mn&&O(tt,$t),Ln&&O(tt,_t)):Wn&&b(Wn)}an&&(mn?(un=mn.children[0],dn=mn.children[1],g(mn,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(un,{"data-controls":"prev"}),g(dn,{"data-controls":"next"}),g(mn.children,{"aria-controls":Xt,tabindex:"-1"})):(_e.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Xt+'" type="button">'+pn[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Xt+'" type="button">'+pn[1]+"</button></div>"),mn=_e.querySelector(".tns-controls"),un=mn.children[0],dn=mn.children[1]),fn=re(un),vn=re(dn),wt||se(fn,un,!0),O(mn,Jt),hn||b(mn)),qn&&O(tt,tn),Xn&&O(tt,nn),Tt&&O(L,en),"inner"===yt?Gt.on("outerResized",function(){M(),Gt.emit("innerLoaded",qe())}):(O(z,{resize:P}),"outer"===yt&&Gt.on("innerLoaded",Z)),J(),Z(),I(),Gt.on("indexChanged",_),"function"==typeof qt&&qt(qe()),"inner"===yt&&Gt.emit("innerLoaded",qe()),Vt&&S(!0)}();var Yn=function(){return wt?function(){var e=Bt+mt,t=Rt-mt;if(xt)e+=1,t-=1;else if(bt){var n=gt?gt:0;rt%(bt+n)>n&&(t-=1)}if(Lt>t)for(;Lt>=e+at;)Lt-=at;else if(Lt<e)for(;Lt<=t-at;)Lt+=at}:function(){Lt=Math.max(Bt,Math.min(Rt,Lt))}}(),Kn=function(){return Ve?function(e,t){t||(t=ue()),Mt&&Lt===Rt&&(t=-((bt+gt)*Pt-Ze)+"px"),F||!e?(de(t),0===Et&&me()):k(tt,It,St,Ht,t,Et,me),$e||Be()}:function(){kt=[];var e={};e[Y]=e[K]=me,D(it[zt],e),O(it[Lt],e),fe(zt,Ye,Ke,!0),fe(Lt,Je,Ye),Y&&K&&0!==Et||setTimeout(me,0)}}();return{getInfo:qe,events:Gt,goTo:ye,destroy:function(){if(Dt.disabled=!0,wt)for(var e=At;e--;)Ve&&it[0].remove(),it[it.length-1].remove();var n=["tns-item",cn];Ve||(n=n.concat("tns-normal",Ye));for(var i=at;i--;){var a=it[i];a.id.indexOf(Xt+"-item")>=0&&(a.id=""),n.forEach(function(e){h(a,e)})}if(x(it,["style","aria-hidden","tabindex"]),it=Xt=at=Pt=At=null,hn&&(D(mn,Jt),t.controlsContainer&&(x(mn,["aria-label","tabindex"]),x(mn.children,["aria-controls","aria-disabled","tabindex"])),mn=un=dn=null),gn&&(D(xn,Zt),t.navContainer&&(x(xn,["aria-label"]),x(yn,["aria-selected","aria-controls","tabindex"])),xn=yn=null),Nn&&(clearInterval(Dn),Wn&&D(Wn,{click:Oe}),D(tt,$t),D(tt,_t),t.autoplayButton&&x(Wn,["data-action"])),tt.id=Ft||"",tt.className=tt.className.replace(Ut,""),tt.style="",Ve&&Y){var r={};r[Y]=me,D(tt,r)}D(tt,tn),D(tt,nn),nt.insertBefore(tt,_e),_e.remove(),_e=et=tt=null,D(L,en),D(z,{resize:P})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
