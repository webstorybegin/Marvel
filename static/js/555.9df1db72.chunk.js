/*! For license information please see 555.9df1db72.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[555],{33:function(t,r,e){e.d(r,{B:function(){return o}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",a=e(184),o=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"error",src:n})}},187:function(t,r,e){e.r(r),e.d(r,{default:function(){return g}});var n=e(885),a=e(791),o=e(321),i=e(33),c=e(444),s=e.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=e(184),l=function(t){var r=t.charId,e=(0,a.useState)({}),l=(0,n.Z)(e,2),f=l[0],d=l[1],m=(0,o.X)(),p=m.loading,v=m.error,y=m.getCharacter,g=m.clearError;(0,a.useEffect)((function(){b()}),[r]);var x=function(t){d(t)},b=function(){g();var t=Math.floor(400*Math.random()+1011e3);y(t).then(x)},_=v?(0,u.jsx)(i.B,{}):null,j=p?(0,u.jsx)(c.$,{}):null,w=p||v?null:(0,u.jsx)(h,{char:f});return(0,u.jsxs)("div",{className:"randomchar",children:[_,j,w,(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{onClick:b,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=function(t){var r=t.char,e=r.thumbnail,n=r.name,a=r.description,o=r.homepage,i=r.wiki;return(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:e,alt:"Random character",className:"randomchar__img"}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:n}),(0,u.jsx)("p",{className:"randomchar__descr",children:a}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},f=e(982),d=function(t){var r=t.onCharSelected,e=(0,a.useState)([]),s=(0,n.Z)(e,2),l=s[0],h=s[1],d=(0,a.useState)(!1),m=(0,n.Z)(d,2),p=m[0],v=m[1],y=(0,a.useState)(210),g=(0,n.Z)(y,2),x=g[0],b=g[1],_=(0,a.useState)(!1),j=(0,n.Z)(_,2),w=j[0],N=j[1],k=(0,o.X)(),Z=k.loading,E=k.error,L=k.getAllCharacters;(0,a.useEffect)((function(){S(x,!0)}),[]);var S=function(t,r){v(!r),L(t).then(C)},C=function(t){var r=!1;t.length<9&&(r=!0),h((function(r){return[].concat((0,f.Z)(r),(0,f.Z)(t))})),v(!1),b((function(t){return t+9})),N((function(t){return r}))};var O=function(t){var e=t.map((function(t){return(0,u.jsxs)("li",{tabIndex:0,className:"char__item",onClick:function(){return r(t.id)},children:[(0,u.jsx)("img",{src:t.thumbnail,alt:t.name}),(0,u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return(0,u.jsx)("ul",{className:"char__grid",children:e})}(l),T=E?(0,u.jsx)(i.B,{}):null,G=Z&&!p?(0,u.jsx)(c.$,{}):null;return(0,u.jsxs)("div",{className:"char__list",children:[T,G,O,(0,u.jsx)("button",{className:"button button__main button__long",disabled:p,style:{display:w?"none":"block"},onClick:function(){return S(x,!1)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},m=e(505),p=function(t){var r=t.charId,e=(0,a.useState)(null),s=(0,n.Z)(e,2),l=s[0],h=s[1],f=(0,o.X)(),d=f.loading,p=f.error,y=f.getCharacter,g=f.clearError;(0,a.useEffect)((function(){x()}),[r]);var x=function(){r&&(g(),y(r).then(b))},b=function(t){h(t)},_=l||d||p?null:(0,u.jsx)(m.Z,{}),j=p?(0,u.jsx)(i.B,{}):null,w=d?(0,u.jsx)(c.$,{}):null,N=d||p||!l?null:(0,u.jsx)(v,{char:l});return(0,u.jsxs)("div",{className:"char__info",children:[_,j,w,N]})},v=function(t){var r=t.char,e=r.name,n=r.description,a=r.thumbnail,o=r.homepage,i=r.wiki,c=r.comics;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:a,alt:"abyss"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:e}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:o,rel:"noreferrer",className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"Homepage"})}),(0,u.jsx)("a",{href:i,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:n}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsxs)("ul",{className:"char__comics-list",children:[c.lenght>0?null:"There is no comics with this character",c.map((function(t,r){if(!(t>9))return(0,u.jsx)("li",{className:"char__comics-item",children:t.name},r)}))]})]})},y=e.p+"static/media/vision.067d4ae1936d64a577ce.png",g=function(){var t=(0,a.useState)(null),r=(0,n.Z)(t,2),e=r[0],o=r[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)(l,{}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(d,{onCharSelected:function(t){o(t)}}),(0,u.jsx)(p,{charId:e})]}),(0,u.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},321:function(t,r,e){e.d(r,{X:function(){return c}});var n=e(165),a=e(861),o=e(885),i=e(791),c=function(){var t=function(){var t=(0,i.useState)(!1),r=(0,o.Z)(t,2),e=r[0],c=r[1],s=(0,i.useState)(null),u=(0,o.Z)(s,2),l=u[0],h=u[1],f=(0,i.useCallback)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,o,i,s,u=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(r,{method:e,body:a,headers:o});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return s=t.sent,c(!1),t.abrupt("return",s);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),h(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,request:f,error:l,clearError:(0,i.useCallback)((function(){return h(null)}),[])}}(),r=t.loading,e=t.request,c=t.error,s=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=9312b916a65e5963f899dffa609ded63",h=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r,a,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:210,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return a=t.sent,t.abrupt("return",a.data.results.map(p));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(r,"?").concat(l));case 2:return a=t.sent,t.abrupt("return",p(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r,a,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:0,t.next=3,e("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return a=t.sent,t.abrupt("return",a.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var a;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(r,"?").concat(l));case 2:return a=t.sent,t.abrupt("return",v(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},v=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{loading:r,error:c,clearError:s,getAllCharacters:h,getCharacter:f,getAllComics:d,getComic:m}}},861:function(t,r,e){function n(t,r,e,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(a,o){var i=t.apply(r,e);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return a}})},165:function(t,r,e){e.d(r,{Z:function(){return a}});var n=e(2);function a(){a=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(L){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof d?r:d,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(e.method=a,e.arg=o;;){var i=e.delegate;if(i){var c=j(i,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var s=h(t,r,e);if("normal"===s.type){if(n=e.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n="completed",e.method="throw",e.arg=s.arg)}}}(t,e,i),o}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var f={};function d(){}function m(){}function p(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(Z([])));g&&g!==r&&e.call(g,i)&&(v=g);var x=p.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function a(o,i,c,s){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){a("next",t,c,s)}),(function(t){a("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,e){function n(){return new r((function(r,n){a(t,e,r,n)}))}return o=o?o.then(n,n):n()}}function j(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function w(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=p,u(x,"constructor",p),u(p,"constructor",m),m.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,a,o){void 0===o&&(o=Promise);var i=new _(l(r,e,n,a),o);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),u(x,s,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=Z,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;N(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:Z(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}},982:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(907);var a=e(181);function o(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e.d(r,{Z:function(){return n}})}}]);
//# sourceMappingURL=555.9df1db72.chunk.js.map