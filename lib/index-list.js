module.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=288)}({0:function(t,e){t.exports=function(t,e,n,i,r,s){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=i),u){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:a,options:l}}},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),r=n(211),s=n(0),o=s(i.a,r.a,!1,null,null,null);e.default=o.exports},211:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vx-index-list"},[n("div",{staticClass:"vx-index-list-each",on:{scroll:t.handleScroll}},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"vx-index-list-group"},[n("div",{staticClass:"vx-index-list-title"},[t._v(t._s(e.label))]),t._l(e.items,function(e,i){return n("div",{key:i,staticClass:"vx-index-list-item",on:{click:function(n){t.handleClick(e.value)}}},[t.$slots.default?t._t("default"):t._e(),[t._v(t._s(e.label))]],2)})],2)})),n("div",{staticClass:"vx-index-list-nav"},t._l(t.navList,function(e,i){return n("div",{key:i,class:{"is-active":0===i},on:{click:function(e){t.handleGroup(i)}}},[t._v(t._s(e))])})),n("div",{staticClass:"vx-index-list-fixed"},[t._v(t._s(t.currentCharAt||" "))])])},r=[],s={render:i,staticRenderFns:r};e.a=s},288:function(t,e,n){t.exports=n(149)},33:function(t,e){t.exports=require("babel-runtime/core-js/array/from")},86:function(t,e,n){"use strict";var i=n(33),r=n.n(i);e.a={componentName:"IndexList",props:{data:{type:Array}},data:function(){var t=this.data.map(function(t){return t.label.charAt(0)});return{navList:t,currentCharAt:t[0]}},updated:function(){this.$nextTick(this.init)},mounted:function(){this.init()},methods:{init:function(){this.$$titleNodes=r()(this.$el.querySelectorAll(".vx-index-list-title")),this.$$titleNodes.forEach(function(t){t._offsetTop=t.offsetTop}),this.$$navNodes=r()(this.$el.querySelectorAll(".vx-index-list-nav div")),this.$$fixedNode=this.$el.querySelector(".vx-index-list-fixed"),this.$$Y=this.$$fixedNode.offsetHeight},activeNavItem:function(t){var e=this.$$navNodes[t];this.$$navNodes.forEach(function(t){e===t?requestAnimationFrame(function(){t.classList.add("is-active")}):requestAnimationFrame(function(){t.classList.remove("is-active")})})},handleScroll:function(t){var e=this,n=t.target.scrollTop;this.$$titleNodes.forEach(function(t,i){var r=t._offsetTop-n;r<e.$$Y&&r>0?requestAnimationFrame(function(){e.$$fixedNode.style.top="-"+(e.$$Y-r-1)+"px"}):r<=0&&requestAnimationFrame(function(){e.$$fixedNode.style.top="",e.$$fixedNode.innerHTML=t.innerHTML.charAt(0),e.activeNavItem(i)})})},handleGroup:function(t){var e=this.$$titleNodes[t];e.offsetParent.scrollTop=e._offsetTop},handleClick:function(t){this.$emit("click",t)}}}}});