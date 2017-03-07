!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactLazyimg=t(require("classnames"),require("react")):e.ReactLazyimg=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(6);var c=r(7),u=n(c),f=r(4),l=n(f),p=function(t){function r(e){o(this,r);var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={loaded:!1},t}return i(r,t),s(r,[{key:"getChildren",value:function(){var e=this.props.effect;switch(e){case"replace":return this.getReplaceChildren();case"fade":return this.getFadeChildren()}return null}},{key:"getReplaceChildren",value:function(){var t=this.props,r=t.url,n=t.placeholder,o=t.title,a=t.className,i=t.effect,s=n||r;return e.createElement("img",{"data-effect":i,className:(0,u.default)("react-lazyimg",a),src:s,title:o,onLoad:this._onReplace.bind(this)})}},{key:"getFadeChildren",value:function(){var t=this.props,r=t.url,n=t.effect,o=t.className;return e.createElement("img",{"data-effect":n,className:(0,u.default)("react-lazyimg",o),"data-src":r,src:r,onLoad:this._onFade.bind(this)})}},{key:"_onReplace",value:function(e){var t=this,r=this.props,n=r.url,o=r.placeholder,a=r.onLoad,i=e.target,s=this.state.loaded;!s&&o&&this.setState({loaded:!0},function(){i.src=n,a.call(t,e)})}},{key:"_onFade",value:function(e){var t=this,r=this.props,n=(r.url,r.onLoad),o=e.target,a=this.state.loaded;a||this.setState({loaded:!0},function(){o.removeAttribute("data-src"),n.call(t,e)})}},{key:"render",value:function(){return this.getChildren()}}]),r}(e.Component);p.propTypes={title:e.PropTypes.string,url:e.PropTypes.string,placeholder:e.PropTypes.string,effect:e.PropTypes.oneOf(["replace","fade"]),onLoad:e.PropTypes.func},p.defaultProps={onLoad:l.default,effect:"replace"},t.default=p}).call(t,r(8))},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".react-lazyimg{-webkit-transition:opacity 1s;transition:opacity 1s;opacity:1}.react-lazyimg[data-effect=fade][data-src]{opacity:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t){e.exports=function(){}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(u(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(u(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],s=o[2],c=o[3],u={css:i,media:s,sourceMap:c};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function a(e,t){var r=y(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function u(e,t){var r,n,o;if(t.singleton){var a=g++;r=m||(m=s(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=p.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),n=l.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function f(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=d[s.id];c.refs--,a.push(c)}if(e){var u=o(e);n(u,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete d[c.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});
//# sourceMappingURL=react-lazyimg.js.map