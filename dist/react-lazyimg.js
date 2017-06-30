!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","react"],t):"object"==typeof exports?exports.ReactLazyimg=t(require("classnames"),require("noop"),require("react")):e.ReactLazyimg=t(e.classnames,e.noop,e.react)}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(10);var f=r(7),c=n(f),l=r(13),p=n(l),d=r(11),h=n(d),v=r(12),y=n(v),m=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onLoad=function(e){var t=r.state.loaded,n=r.props.lazy;t||n||r.doShown()},r.initialState(),r}return s(t,e),u(t,[{key:"initialState",value:function(){var e=this.props.url;this.state={loaded:!1,url:e}}},{key:"componentWillReceiveProps",value:function(e){var t=e.url,r=e.lazy;this.state.url!==t&&(this.initialState(e),this.setState(this.state)),!this.props.lazy||r||this.state.loaded||this.doShown()}},{key:"shouldComponentUpdate",value:function(){var e=this.props.effect,t=this.state.loaded;return"replace"===e||!t}},{key:"doShown",value:function(){var e=this,t=this.refs.root,r=this.props,n=r.onLoad,o=r.effect,a=this.state.url;this.setState({loaded:!0},function(){"replace"===o?t.src=a:t.removeAttribute("data-src"),n.call(e)})}},{key:"render",value:function(){var e=this.props,t=e.url,r=e.placeholder,n=e.className,a=e.effect,i=e.lazy,s=(o(e,["url","placeholder","className","effect","lazy"]),this.state.loaded,r||(i?null:t));return p.default.createElement("img",{ref:"root","data-effect":a,className:(0,h.default)("react-lazyimg",n),"data-src":t,src:s,onLoad:this._onLoad})}}]),t}(p.default.PureComponent);m.propTypes={lazy:c.default.bool,url:c.default.string,placeholder:c.default.string,effect:c.default.oneOf(["replace","fade"]),onLoad:c.default.func},m.defaultProps={lazy:!1,onLoad:y.default,effect:"replace"},t.default=m},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".react-lazyimg{-webkit-transition:opacity 1s;transition:opacity 1s;opacity:1}.react-lazyimg[data-effect=fade][data-src]{opacity:.01}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n,a,i,s,u){if(o(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,a,i,s,u],l=0;f=new Error(t.replace(/%s/g,function(){return c[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(4),o=r(5),a=r(8);e.exports=function(){function e(e,t,r,n,i,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(6)()},function(e,t){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(f(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(f(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],u=o[3],f={css:i,media:s,sourceMap:u};r[a]?r[a].parts.push(f):t.push(r[a]={id:a,parts:[f]})}return t}function a(e,t){var r=y(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function f(e,t){var r,n,o;if(t.singleton){var a=b++;r=m||(m=s(t)),n=c.bind(null,r,a,!1),o=c.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(t),n=p.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function c(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],u=d[s.id];u.refs--,a.push(u)}if(e){var f=o(e);n(f,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(9)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-lazyimg.js.map