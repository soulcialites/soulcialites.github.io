(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[251],{83849:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},71179:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packages/core-wagmi",function(){return r(24117)}])},41882:function(t,e,r){"use strict";r.d(e,{S:function(){return l}});var n=r(97458),o=r(52983),i=r(83849),a=r.n(i);function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(s){c=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(t){var e=t.className,r=t.children,i=a()(e,"IsMounted"),c=s(o.useState(),2),l=c[0],u=c[1];return o.useEffect((function(){u(!0)}),[]),(0,n.jsx)("div",{className:i,children:l&&r})};e.Z=l},52910:function(t,e,r){"use strict";var n=r(97458),o=r(83849),i=r.n(o);r(52983);e.Z=function(t){var e=t.className,r=t.title,o=t.code,a=t.url,c=i()(e,"ModuleComponentPreview","card col-span-6");return(0,n.jsxs)("div",{className:c,children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("h4",{className:"inline-block text-xl font-semibold",children:r}),(0,n.jsx)("a",{className:"inline-block",href:a,children:"View Code"})]}),(0,n.jsx)("hr",{className:"my-3 opacity-30"}),(0,n.jsx)("code",{children:(0,n.jsx)("pre",{className:"",children:o})})]})}},24117:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return _}});var n=r(97458),o=r(52983),i=r(83849),a=r.n(i),c=r(47952),s=r(7862),l=r.n(s),u=function(t){var e=t.children,r=t.loading;return(0,c.$4)().isConnected?e:r};u.defaultProps={loading:null},u.propTypes={loading:l().func};var f=function(t){var e=t.className,r=a()(e,"WalletAddress"),n=(0,c.mA)(),i=n.data,s=n.isError;return n.isLoading||s?null:(0,o.createElement)("div",{className:r},null==i?void 0:i.address)},h=function(t){var e=t.className,r=a()(e,"WalletBalance"),n=(0,c.mA)(),i=n.data,s=n.isError,l=n.isLoading,u=(0,c.KQ)({addressOrName:null==i?void 0:i.address}).data;return l||s?null:(0,o.createElement)("div",{className:r},null==u?void 0:u.formatted," ",null==u?void 0:u.symbol)},d=function(t){var e=t.className,r=a()(e,"WalletEnsAddress"),n=(0,c.mA)(),i=n.data,s=n.isError,l=n.isLoading,u=(0,c.F6)({address:null==i?void 0:i.address}).data;return l||s?null:(0,o.createElement)("div",{className:r},u)},p=function(t){var e=t.className,r=a()(e,"WalletEnsName"),n=(0,c.mA)(),i=n.data,s=n.isError,l=n.isLoading,u=(0,c.F6)({address:null==i?void 0:i.address}).data;return l||s?null:(0,o.createElement)("div",{className:r},u)};function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var u={};function f(){}function h(){}function d(){}var p={};c(p,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(_([])));y&&y!==e&&r.call(y,o)&&(p=y);var g=d.prototype=f.prototype=Object.create(p);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,c(g,"constructor",d),c(d,"constructor",h),h.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function m(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}var y=function(t){var e=t.className,r=a()(e,"WalletNonce"),n=(0,c.mx)(),i=n.data,s=n.isLoading,l=n.isError,u=(0,o.useState)(),f=u[0],h=u[1];return(0,o.useEffect)((function(){var t;(t=v().mark((function t(){var e;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=5;break}return t.next=3,i.getTransactionCount();case 3:e=t.sent,h(e);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,c,"next",t)}function c(t){m(i,n,o,a,c,"throw",t)}a(void 0)}))})()}),[s,i]),s||l?null:(0,o.createElement)("div",{className:r},f)},g=r(41882),x=r(52910),b=r(10160),w=r(37850),j=r(13708);function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=[{title:"Wallet Address",code:(0,n.jsx)(f,{}),url:"https://github.com"},{title:"Wallet Balance",code:(0,n.jsx)(h,{}),url:"https://github.com"},{title:"Wallet Nonce",code:(0,n.jsx)(y,{}),url:"https://github.com"},{title:"Wallet ENS Address",code:(0,n.jsx)(d,{}),url:"https://github.com"},{title:"Wallet ENS Name",code:(0,n.jsx)(p,{}),url:"https://github.com"}],_=function(){return(0,n.jsx)(b.o,{meta:(0,n.jsx)(w.h,{title:"".concat(j.X.title," | ").concat(j.X.description),description:j.X.description}),children:(0,n.jsx)("section",{className:"py-12",children:(0,n.jsx)("div",{className:"container mx-auto max-w-screen-xl",children:(0,n.jsxs)(g.Z,{children:[(0,n.jsx)("h3",{className:"text-3xl font-bold",children:"Wallet Examples"}),(0,n.jsx)("hr",{className:"mb-10 mt-4 opacity-50"}),(0,n.jsx)("div",{className:"grid grid-cols-12 gap-x-4 gap-y-6",children:E.map((function(t,e){return(0,n.jsx)(x.Z,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){N(t,e,r[e])}))}return t}({},t),e)}))})]})})})})}},10160:function(t,e,r){"use strict";r.d(e,{o:function(){return s}});var n=r(97458),o=r(45700),i=r(7524),a=r.n(i),c=r(13708),s=function(t){return(0,n.jsxs)("div",{className:"w-full bg-black text-white",children:[t.meta,(0,n.jsxs)("div",{className:"min-h-vh mx-auto h-10 w-full",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between px-8 py-4",children:[(0,n.jsx)("div",{className:" align-center flex items-center justify-between",children:(0,n.jsx)(a(),{href:"/",children:(0,n.jsxs)("span",{className:"cursor-pointer text-xl font-bold text-white",children:[(0,n.jsx)("span",{className:"text-3l",children:c.X.emoji})," ",c.X.title]})})}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(o.NL,{})})]}),(0,n.jsx)("div",{className:"content items-center justify-center bg-neutral-200 pb-10 text-black",children:t.children}),(0,n.jsxs)("div",{className:"border-t border-gray-300 bg-black py-8 text-center text-sm",children:[(0,n.jsx)("p",{className:"mb-2 text-base",children:"Annette, Dino, Justin, Kames"}),(0,n.jsxs)("div",{children:["\xa9 Copyright ",(new Date).getFullYear()," Kames Geraghty"]})]})]})]})}},37850:function(t,e,r){"use strict";r.d(e,{h:function(){return l}});var n=r(97458),o=r(82099),i=r.n(o),a=r(9681),c=r(99293),s=r(13708),l=function(t){var e=(0,a.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(e.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(c.PB,{title:t.title,description:t.description,canonical:t.canonical,openGraph:{title:t.title,description:t.description,url:t.canonical,locale:s.X.locale,site_name:s.X.site_name}})]})}},31772:function(t,e,r){"use strict";var n=r(25148);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},7862:function(t,e,r){t.exports=r(31772)()},25148:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(t){t.O(0,[326,774,888,179],(function(){return e=71179,t(t.s=e);var e}));var e=t.O();_N_E=e}]);