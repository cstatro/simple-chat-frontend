!function(e){function t(t){for(var r,l,i=t[0],c=t[1],a=t[2],p=0,s=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);s.length;)s.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},u=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var f=c;u.push([11,1]),n()}({11:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(2),l=n.n(u);n(7);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,f(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"handleClick",value:function(e){e.target.classList.toggle("selected")}},{key:"render",value:function(){return o.a.createElement("div",{onClick:this.handleClick,className:"fun-box"})}}])&&c(n.prototype,r),u&&c(n,u),t}(r.Component),b=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(s,null),o.a.createElement(s,null))};l.a.render(o.a.createElement(b,null),document.getElementById("App"))},7:function(e,t,n){var r=n(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(10)(r,o);r.locals&&(e.exports=r.locals)},8:function(e,t,n){(t=n(9)(!1)).push([e.i,".fun-box {\n  height: 200px;\n  width: 200px;\n  background: rgba(189, 159, 224, 0.979);\n}\n.selected {\n  border: 2px solid black;\n  background: #e5c7ff;\n}\n",""]),e.exports=t}});