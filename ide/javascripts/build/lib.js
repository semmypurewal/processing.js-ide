(function(){function h(a){var c=function(a,b){return e("",a,b)},f=b;a&&(b[a]||(b[a]={}),f=b[a]);if(!f.define||!f.define.packaged)d.original=f.define,f.define=d,f.define.packaged=!0;if(!f.require||!f.require.packaged)e.original=f.require,f.require=c,f.require.packaged=!0}var a="",b=function(){return this}();if(!a&&typeof requirejs!="undefined"){var c=b.define;b.define=function(a,b,d){return typeof d!="function"?c.apply(this,arguments):c(a,b,function(a,c,e){return b[2]=="module"&&(e.packaged=!0),d.apply(this,arguments)})},b.define.packaged=!0;return}var d=function(a,b,c){if(typeof a!="string"){d.original?d.original.apply(window,arguments):(console.error("dropping module because define wasn't a string."),console.trace());return}arguments.length==2&&(c=b),d.modules||(d.modules={}),d.modules[a]=c},e=function(a,b,c){if(Object.prototype.toString.call(b)==="[object Array]"){var d=[];for(var f=0,h=b.length;f<h;++f){var i=g(a,b[f]);if(!i&&e.original)return e.original.apply(window,arguments);d.push(i)}c&&c.apply(null,d)}else{if(typeof b=="string"){var j=g(a,b);return!j&&e.original?e.original.apply(window,arguments):(c&&c(),j)}if(e.original)return e.original.apply(window,arguments)}},f=function(a,b){if(b.indexOf("!")!==-1){var c=b.split("!");return f(a,c[0])+"!"+f(a,c[1])}if(b.charAt(0)=="."){var d=a.split("/").slice(0,-1).join("/");b=d+"/"+b;while(b.indexOf(".")!==-1&&e!=b){var e=b;b=b.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return b},g=function(a,b){b=f(a,b);var c=d.modules[b];if(!c)return null;if(typeof c=="function"){var g={},h={id:b,uri:"",exports:g,packaged:!0},i=function(a,c){return e(b,a,c)},j=c(i,g,h);return g=j||h.exports,d.modules[b]=g,g}return c};h(a)})(),define("ace/requirejs/text",["require","exports","module"],function(a,b,c){b.load=function(b,c,d,e){a("ace/lib/net").get(c.toUrl(b),d)}}),define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/multi_select","ace/worker/worker_client","ace/keyboard/hash_handler","ace/keyboard/state_handler","ace/placeholder","ace/config","ace/theme/textmate"],function(a,b,c){a("./lib/fixoldbrowsers");var d=a("./lib/dom"),e=a("./lib/event"),f=a("./editor").Editor,g=a("./edit_session").EditSession,h=a("./undomanager").UndoManager,i=a("./virtual_renderer").VirtualRenderer,j=a("./multi_select").MultiSelect;a("./worker/worker_client"),a("./keyboard/hash_handler"),a("./keyboard/state_handler"),a("./placeholder"),b.config=a("./config"),b.edit=function(b){typeof b=="string"&&(b=document.getElementById(b));if(b.env&&b.env.editor instanceof f)return b.env.editor;var c=new g(d.getInnerText(b));c.setUndoManager(new h),b.innerHTML="";var k=new f(new i(b,a("./theme/textmate")));new j(k),k.setSession(c);var l={};return l.document=c,l.editor=k,k.resize(),e.addListener(window,"resize",function(){k.resize()}),b.env=l,k.env=l,k}}),define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/regexp","ace/lib/es5-shim"],function(a,b,c){a("./regexp"),a("./es5-shim")}),define("ace/lib/regexp",["require","exports","module"],function(a,b,c){function g(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")}function h(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);for(var d=c||0;d<a.length;d++)if(a[d]===b)return d;return-1}var d={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},e=d.exec.call(/()??/,"")[1]===undefined,f=function(){var a=/^/g;return d.test.call(a,""),!a.lastIndex}();if(f&&e)return;RegExp.prototype.exec=function(a){var b=d.exec.apply(this,arguments),c,i;if(typeof a=="string"&&b){!e&&b.length>1&&h(b,"")>-1&&(i=RegExp(this.source,d.replace.call(g(this),"g","")),d.replace.call(a.slice(b.index),i,function(){for(var a=1;a<arguments.length-2;a++)arguments[a]===undefined&&(b[a]=undefined)}));if(this._xregexp&&this._xregexp.captureNames)for(var j=1;j<b.length;j++)c=this._xregexp.captureNames[j-1],c&&(b[c]=b[j]);!f&&this.global&&!b[0].length&&this.lastIndex>b.index&&this.lastIndex--}return b},f||(RegExp.prototype.test=function(a){var b=d.exec.call(this,a);return b&&this.global&&!b[0].length&&this.lastIndex>b.index&&this.lastIndex--,!!b})}),define("ace/lib/es5-shim",["require","exports","module"],function(a,b,c){function p(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(b){}}Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=g.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,h=c.apply(f,d.concat(g.call(arguments)));return h!==null&&Object(h)===h?h:f}return c.apply(b,d.concat(g.call(arguments)))};return e});var d=Function.prototype.call,e=Array.prototype,f=Object.prototype,g=e.slice,h=d.bind(f.toString),i=d.bind(f.hasOwnProperty),j,k,l,m,n;if(n=i(f,"__defineGetter__"))j=d.bind(f.__defineGetter__),k=d.bind(f.__defineSetter__),l=d.bind(f.__lookupGetter__),m=d.bind(f.__lookupSetter__);Array.isArray||(Array.isArray=function(b){return h(b)=="[object Array]"}),Array.prototype.forEach||(Array.prototype.forEach=function(b){var c=G(this),d=arguments[1],e=0,f=c.length>>>0;if(h(b)!="[object Function]")throw new TypeError;while(e<f)e in c&&b.call(d,c[e],e,c),e++}),Array.prototype.map||(Array.prototype.map=function(b){var c=G(this),d=c.length>>>0,e=Array(d),f=arguments[1];if(h(b)!="[object Function]")throw new TypeError;for(var g=0;g<d;g++)g in c&&(e[g]=b.call(f,c[g],g,c));return e}),Array.prototype.filter||(Array.prototype.filter=function(b){var c=G(this),d=c.length>>>0,e=[],f=arguments[1];if(h(b)!="[object Function]")throw new TypeError;for(var g=0;g<d;g++)g in c&&b.call(f,c[g],g,c)&&e.push(c[g]);return e}),Array.prototype.every||(Array.prototype.every=function(b){var c=G(this),d=c.length>>>0,e=arguments[1];if(h(b)!="[object Function]")throw new TypeError;for(var f=0;f<d;f++)if(f in c&&!b.call(e,c[f],f,c))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(b){var c=G(this),d=c.length>>>0,e=arguments[1];if(h(b)!="[object Function]")throw new TypeError;for(var f=0;f<d;f++)if(f in c&&b.call(e,c[f],f,c))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(b){var c=G(this),d=c.length>>>0;if(h(b)!="[object Function]")throw new TypeError;if(!d&&arguments.length==1)throw new TypeError;var e=0,f;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);for(;e<d;e++)e in c&&(f=b.call(void 0,f,c[e],e,c));return f}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(b){var c=G(this),d=c.length>>>0;if(h(b)!="[object Function]")throw new TypeError;if(!d&&arguments.length==1)throw new TypeError;var e,f=d-1;if(arguments.length>=2)e=arguments[1];else do{if(f in c){e=c[f--];break}if(--f<0)throw new TypeError}while(!0);do f in this&&(e=b.call(void 0,e,c[f],f,c));while(f--);return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(b){var c=G(this),d=c.length>>>0;if(!d)return-1;var e=0;arguments.length>1&&(e=E(arguments[1])),e=e>=0?e:Math.max(0,d+e);for(;e<d;e++)if(e in c&&c[e]===b)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(b){var c=G(this),d=c.length>>>0;if(!d)return-1;var e=d-1;arguments.length>1&&(e=Math.min(e,E(arguments[1]))),e=e>=0?e:d-Math.abs(e);for(;e>=0;e--)if(e in c&&b===c[e])return e;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(b){return b.__proto__||(b.constructor?b.constructor.prototype:f)});if(!Object.getOwnPropertyDescriptor){var o="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(b,c){if(typeof b!="object"&&typeof b!="function"||b===null)throw new TypeError(o+b);if(!i(b,c))return;var d,e,g;d={enumerable:!0,configurable:!0};if(n){var h=b.__proto__;b.__proto__=f;var e=l(b,c),g=m(b,c);b.__proto__=h;if(e||g)return e&&(d.get=e),g&&(d.set=g),d}return d.value=b[c],d}}Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(b){return Object.keys(b)}),Object.create||(Object.create=function(b,c){var d;if(b===null)d={__proto__:null};else{if(typeof b!="object")throw new TypeError("typeof prototype["+typeof b+"] != 'object'");var e=function(){};e.prototype=b,d=new e,d.__proto__=b}return c!==void 0&&Object.defineProperties(d,c),d});if(Object.defineProperty){var q=p({}),r=typeof document=="undefined"||p(document.createElement("div"));if(!q||!r)var s=Object.defineProperty}if(!Object.defineProperty||s){var t="Property description must be an object: ",u="Object.defineProperty called on non-object: ",v="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(b,c,d){if(typeof b!="object"&&typeof b!="function"||b===null)throw new TypeError(u+b);if(typeof d!="object"&&typeof d!="function"||d===null)throw new TypeError(t+d);if(s)try{return s.call(Object,b,c,d)}catch(e){}if(i(d,"value"))if(n&&(l(b,c)||m(b,c))){var g=b.__proto__;b.__proto__=f,delete b[c],b[c]=d.value,b.__proto__=g}else b[c]=d.value;else{if(!n)throw new TypeError(v);i(d,"get")&&j(b,c,d.get),i(d,"set")&&k(b,c,d.set)}return b}}Object.defineProperties||(Object.defineProperties=function(b,c){for(var d in c)i(c,d)&&Object.defineProperty(b,d,c[d]);return b}),Object.seal||(Object.seal=function(b){return b}),Object.freeze||(Object.freeze=function(b){return b});try{Object.freeze(function(){})}catch(w){Object.freeze=function(b){return function(c){return typeof c=="function"?c:b(c)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(b){return b}),Object.isSealed||(Object.isSealed=function(b){return!1}),Object.isFrozen||(Object.isFrozen=function(b){return!1}),Object.isExtensible||(Object.isExtensible=function(b){if(Object(b)===b)throw new TypeError;var c="";while(i(b,c))c+="?";b[c]=!0;var d=i(b,c);return delete b[c],d});if(!Object.keys){var x=!0,y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],z=y.length;for(var A in{toString:null})x=!1;Object.keys=function H(a){if(typeof a!="object"&&typeof a!="function"||a===null)throw new TypeError("Object.keys called on a non-object");var H=[];for(var b in a)i(a,b)&&H.push(b);if(x)for(var c=0,d=z;c<d;c++){var e=y[c];i(a,e)&&H.push(e)}return H}}if(!Date.prototype.toISOString||(new Date(-621987552e5)).toISOString().indexOf("-000001")===-1)Date.prototype.toISOString=function(){var b,c,d,e;if(!isFinite(this))throw new RangeError;b=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],e=this.getUTCFullYear(),e=(e<0?"-":e>9999?"+":"")+("00000"+Math.abs(e)).slice(0<=e&&e<=9999?-4:-6),c=b.length;while(c--)d=b[c],d<10&&(b[c]="0"+d);return e+"-"+b.slice(0,2).join("-")+"T"+b.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(b){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()}),Date.parse("+275760-09-13T00:00:00.000Z")!==864e13&&(Date=function(a){var b=function e(b,c,d,f,g,h,i){var j=arguments.length;if(this instanceof a){var k=j==1&&String(b)===b?new a(e.parse(b)):j>=7?new a(b,c,d,f,g,h,i):j>=6?new a(b,c,d,f,g,h):j>=5?new a(b,c,d,f,g):j>=4?new a(b,c,d,f):j>=3?new a(b,c,d):j>=2?new a(b,c):j>=1?new a(b):new a;return k.constructor=e,k}return a.apply(this,arguments)},c=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");for(var d in a)b[d]=a[d];return b.now=a.now,b.UTC=a.UTC,b.prototype=a.prototype,b.prototype.constructor=b,b.parse=function(d){var e=c.exec(d);if(e){e.shift();for(var f=1;f<7;f++)e[f]=+(e[f]||(f<3?1:0)),f==1&&e[f]--;var g=+e.pop(),h=+e.pop(),i=e.pop(),j=0;if(i){if(h>23||g>59)return NaN;j=(h*60+g)*6e4*(i=="+"?-1:1)}var k=+e[0];return 0<=k&&k<=99?(e[0]=k+400,a.UTC.apply(this,e)+j-126227808e5):a.UTC.apply(this,e)+j}return a.parse.apply(this,arguments)},b}(Date));var B="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||B.trim()){B="["+B+"]";var C=new RegExp("^"+B+B+"*"),D=new RegExp(B+B+"*$");String.prototype.trim=function(){return String(this).replace(C,"").replace(D,"")}}var E=function(a){return a=+a,a!==a?a=0:a!==0&&a!==1/0&&a!==-Infinity&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a},F="a"[0]!="a",G=function(a){if(a==null)throw new TypeError;return F&&typeof a=="string"&&a?a.split(""):Object(a)}}),define("ace/lib/dom",["require","exports","module"],function(a,b,c){var d="http://www.w3.org/1999/xhtml";b.createElement=function(a,b){return document.createElementNS?document.createElementNS(b||d,a):document.createElement(a)},b.setText=function(a,b){a.innerText!==undefined&&(a.innerText=b),a.textContent!==undefined&&(a.textContent=b)},b.hasCssClass=function(a,b){var c=a.className.split(/\s+/g);return c.indexOf(b)!==-1},b.addCssClass=function(a,c){b.hasCssClass(a,c)||(a.className+=" "+c)},b.removeCssClass=function(a,b){var c=a.className.split(/\s+/g);for(;;){var d=c.indexOf(b);if(d==-1)break;c.splice(d,1)}a.className=c.join(" ")},b.toggleCssClass=function(a,b){var c=a.className.split(/\s+/g),d=!0;for(;;){var e=c.indexOf(b);if(e==-1)break;d=!1,c.splice(e,1)}return d&&c.push(b),a.className=c.join(" "),d},b.setCssClass=function(a,c,d){d?b.addCssClass(a,c):b.removeCssClass(a,c)},b.hasCssString=function(a,b){var c=0,d;b=b||document;if(b.createStyleSheet&&(d=b.styleSheets)){while(c<d.length)if(d[c++].owningElement.id===a)return!0}else if(d=b.getElementsByTagName("style"))while(c<d.length)if(d[c++].id===a)return!0;return!1},b.importCssString=function(c,e,f){f=f||document;if(e&&b.hasCssString(e,f))return null;var g;if(f.createStyleSheet)g=f.createStyleSheet(),g.cssText=c,e&&(g.owningElement.id=e);else{g=f.createElementNS?f.createElementNS(d,"style"):f.createElement("style"),g.appendChild(f.createTextNode(c)),e&&(g.id=e);var h=f.getElementsByTagName("head")[0]||f.documentElement;h.appendChild(g)}},b.importCssStylsheet=function(a,c){if(c.createStyleSheet)c.createStyleSheet(a);else{var d=b.createElement("link");d.rel="stylesheet",d.href=a;var e=c.getElementsByTagName("head")[0]||c.documentElement;e.appendChild(d)}},b.getInnerWidth=function(a){return parseInt(b.computedStyle(a,"paddingLeft"),10)+parseInt(b.computedStyle(a,"paddingRight"),10)+a.clientWidth},b.getInnerHeight=function(a){return parseInt(b.computedStyle(a,"paddingTop"),10)+parseInt(b.computedStyle(a,"paddingBottom"),10)+a.clientHeight},window.pageYOffset!==undefined?(b.getPageScrollTop=function(){return window.pageYOffset},b.getPageScrollLeft=function(){return window.pageXOffset}):(b.getPageScrollTop=function(){return document.body.scrollTop},b.getPageScrollLeft=function(){return document.body.scrollLeft}),window.getComputedStyle?b.computedStyle=function(a,b){return b?(window.getComputedStyle(a,"")||{})[b]||"":window.getComputedStyle(a,"")||{}}:b.computedStyle=function(a,b){return b?a.currentStyle[b]:a.currentStyle},b.scrollbarWidth=function(a){var c=b.createElement("p");c.style.width="100%",c.style.minWidth="0px",c.style.height="200px";var d=b.createElement("div"),e=d.style;e.position="absolute",e.left="-10000px",e.overflow="hidden",e.width="200px",e.minWidth="0px",e.height="150px",d.appendChild(c);var f=a.body||a.documentElement;f.appendChild(d);var g=c.offsetWidth;e.overflow="scroll";var h=c.offsetWidth;return g==h&&(h=d.clientWidth),f.removeChild(d),g-h},b.setInnerHtml=function(a,b){var c=a.cloneNode(!1);return c.innerHTML=b,a.parentNode.replaceChild(c,a),c},b.setInnerText=function(a,b){var c=a.ownerDocument;c.body&&"textContent"in c.body?a.textContent=b:a.innerText=b},b.getInnerText=function(a){var b=a.ownerDocument;return b.body&&"textContent"in b.body?a.textContent:a.innerText||a.textContent||""},b.getParentWindow=function(a){return a.defaultView||a.parentWindow}}),define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent","ace/lib/dom"],function(a,b,c){function g(a,b,c){var f=0;!e.isOpera||"KeyboardEvent"in window||!e.isMac?f=0|(b.ctrlKey?1:0)|(b.altKey?2:0)|(b.shiftKey?4:0)|(b.metaKey?8:0):f=0|(b.metaKey?1:0)|(b.altKey?2:0)|(b.shiftKey?4:0)|(b.ctrlKey?8:0);if(c in d.MODIFIER_KEYS){switch(d.MODIFIER_KEYS[c]){case"Alt":f=2;break;case"Shift":f=4;break;case"Ctrl":f=1;break;default:f=8}c=0}return f&8&&(c==91||c==93)&&(c=0),!!f||c in d.FUNCTION_KEYS||c in d.PRINTABLE_KEYS?a(b,f,c):!1}var d=a("./keys"),e=a("./useragent"),f=a("./dom");b.addListener=function(a,b,c){if(a.addEventListener)return a.addEventListener(b,c,!1);if(a.attachEvent){var d=function(){c(window.event)};c._wrapper=d,a.attachEvent("on"+b,d)}},b.removeListener=function(a,b,c){if(a.removeEventListener)return a.removeEventListener(b,c,!1);a.detachEvent&&a.detachEvent("on"+b,c._wrapper||c)},b.stopEvent=function(a){return b.stopPropagation(a),b.preventDefault(a),!1},b.stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},b.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},b.getButton=function(a){return a.type=="dblclick"?0:a.type=="contextmenu"||a.ctrlKey&&e.isMac?2:a.preventDefault?a.button:{1:0,2:2,4:1}[a.button]},document.documentElement.setCapture?b.capture=function(a,c,d){function f(g){c(g),e||(e=!0,d(g)),b.removeListener(a,"mousemove",c),b.removeListener(a,"mouseup",f),b.removeListener(a,"losecapture",f),a.releaseCapture()}var e=!1;b.addListener(a,"mousemove",c),b.addListener(a,"mouseup",f),b.addListener(a,"losecapture",f),a.setCapture()}:b.capture=function(a,b,c){function d(a){b&&b(a),c&&c(a),document.removeEventListener("mousemove",b,!0),document.removeEventListener("mouseup",d,!0),a.stopPropagation()}document.addEventListener("mousemove",b,!0),document.addEventListener("mouseup",d,!0)},b.addMouseWheelListener=function(a,c){var d=8,e=function(a){a.wheelDelta!==undefined?a.wheelDeltaX!==undefined?(a.wheelX=-a.wheelDeltaX/d,a.wheelY=-a.wheelDeltaY/d):(a.wheelX=0,a.wheelY=-a.wheelDelta/d):a.axis&&a.axis==a.HORIZONTAL_AXIS?(a.wheelX=(a.detail||0)*5,a.wheelY=0):(a.wheelX=0,a.wheelY=(a.detail||0)*5),c(a)};b.addListener(a,"DOMMouseScroll",e),b.addListener(a,"mousewheel",e)},b.addMultiMouseDownListener=function(a,c,d,f){var g=0,h,i,j,k={2:"dblclick",3:"tripleclick",4:"quadclick"};b.addListener(a,"mousedown",function(a){if(b.getButton(a)!=0)g=0;else{var e=Math.abs(a.clientX-h)>5||Math.abs(a.clientY-i)>5;if(!j||e)g=0;g+=1,j&&clearTimeout(j),j=setTimeout(function(){j=null},c[g-1]||600)}g==1&&(h=a.clientX,i=a.clientY),d[f]("mousedown",a);if(g>4)g=0;else if(g>1)return d[f](k[g],a)}),e.isOldIE&&b.addListener(a,"dblclick",function(a){g=2,j&&clearTimeout(j),j=setTimeout(function(){j=null},c[g-1]||600),d[f]("mousedown",a),d[f](k[g],a)})},b.addCommandKeyListener=function(a,c){var d=b.addListener;if(e.isOldGecko||e.isOpera&&!("KeyboardEvent"in window)){var f=null;d(a,"keydown",function(a){f=a.keyCode}),d(a,"keypress",function(a){return g(c,a,f)})}else{var h=null;d(a,"keydown",function(a){return h=a.keyIdentifier||a.keyCode,g(c,a,a.keyCode)})}};if(window.postMessage&&!e.isOldIE){var h=1;b.nextTick=function(a,c){c=c||window;var d="zero-timeout-message-"+h;b.addListener(c,"message",function e(f){f.data==d&&(b.stopPropagation(f),b.removeListener(c,"message",e),a())}),c.postMessage(d,"*")}}else b.nextTick=function(a,b){b=b||window,window.setTimeout(a,0)}}),define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(a,b,c){var d=a("./oop"),e=function(){var a={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,meta:8,command:8},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}};for(var b in a.FUNCTION_KEYS){var c=a.FUNCTION_KEYS[b].toUpperCase();a[c]=parseInt(b,10)}return d.mixin(a,a.MODIFIER_KEYS),d.mixin(a,a.PRINTABLE_KEYS),d.mixin(a,a.FUNCTION_KEYS),a}();d.mixin(b,e),b.keyCodeToString=function(a){return(e[a]||String.fromCharCode(a)).toLowerCase()}}),define("ace/lib/oop",["require","exports","module"],function(a,b,c){b.inherits=function(){var a=function(){};return function(b,c){a.prototype=c.prototype,b.super_=c.prototype,b.prototype=new a,b.prototype.constructor=b}}(),b.mixin=function(a,b){for(var c in b)a[c]=b[c]},b.implement=function(a,c){b.mixin(a,c)}}),define("ace/lib/useragent",["require","exports","module"],function(a,b,c){var d=(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase(),e=navigator.userAgent;b.isWin=d=="win",b.isMac=d=="mac",b.isLinux=d=="linux",b.isIE=navigator.appName=="Microsoft Internet Explorer"&&parseFloat(navigator.userAgent.match(/MSIE ([0-9]+[\.0-9]+)/)[1]),b.isOldIE=b.isIE&&b.isIE<9,b.isGecko=b.isMozilla=window.controllers&&window.navigator.product==="Gecko",b.isOldGecko=b.isGecko&&parseInt((navigator.userAgent.match(/rv\:(\d+)/)||[])[1],10)<4,b.isOpera=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]",b.isWebKit=parseFloat(e.split("WebKit/")[1])||undefined,b.isChrome=parseFloat(e.split(" Chrome/")[1])||undefined,b.isAIR=e.indexOf("AdobeAIR")>=0,b.isIPad=e.indexOf("iPad")>=0,b.isTouchPad=e.indexOf("TouchPad")>=0,b.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"},b.getOS=function(){return b.isMac?b.OS.MAC:b.isLinux?b.OS.LINUX:b.OS.WINDOWS}}),define("ace/editor",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands"],function(a,b,c){a("./lib/fixoldbrowsers");var d=a("./lib/oop"),e=a("./lib/lang"),f=a("./lib/useragent"),g=a("./keyboard/textinput").TextInput,h=a("./mouse/mouse_handler").MouseHandler,i=a("./mouse/fold_handler").FoldHandler,j=a("./keyboard/keybinding").KeyBinding,k=a("./edit_session").EditSession,l=a("./search").Search,m=a("./range").Range,n=a("./lib/event_emitter").EventEmitter,o=a("./commands/command_manager").CommandManager,p=a("./commands/default_commands").commands,q=function(a,b){var c=a.getContainerElement();this.container=c,this.renderer=a,this.commands=new o(f.isMac?"mac":"win",p),this.textInput=new g(a.getTextAreaContainer(),this),this.renderer.textarea=this.textInput.getElement(),this.keyBinding=new j(this),f.isIPad||(this.$mouseHandler=new h(this),new i(this)),this.$blockScrolling=0,this.$search=(new l).set({wrap:!0}),this.setSession(b||new k(""))};(function(){d.implement(this,n),this.setKeyboardHandler=function(a){this.keyBinding.setKeyboardHandler(a)},this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()},this.setSession=function(a){if(this.session==a)return;if(this.session){var b=this.session;this.session.removeEventListener("change",this.$onDocumentChange),this.session.removeEventListener("changeMode",this.$onChangeMode),this.session.removeEventListener("tokenizerUpdate",this.$onTokenizerUpdate),this.session.removeEventListener("changeTabSize",this.$onChangeTabSize),this.session.removeEventListener("changeWrapLimit",this.$onChangeWrapLimit),this.session.removeEventListener("changeWrapMode",this.$onChangeWrapMode),this.session.removeEventListener("onChangeFold",this.$onChangeFold),this.session.removeEventListener("changeFrontMarker",this.$onChangeFrontMarker),this.session.removeEventListener("changeBackMarker",this.$onChangeBackMarker),this.session.removeEventListener("changeBreakpoint",this.$onChangeBreakpoint),this.session.removeEventListener("changeAnnotation",this.$onChangeAnnotation),this.session.removeEventListener("changeOverwrite",this.$onCursorChange),this.session.removeEventListener("changeScrollTop",this.$onScrollTopChange),this.session.removeEventListener("changeLeftTop",this.$onScrollLeftChange);var c=this.session.getSelection();c.removeEventListener("changeCursor",this.$onCursorChange),c.removeEventListener("changeSelection",this.$onSelectionChange)}this.session=a,this.$onDocumentChange=this.onDocumentChange.bind(this),a.addEventListener("change",this.$onDocumentChange),this.renderer.setSession(a),this.$onChangeMode=this.onChangeMode.bind(this),a.addEventListener("changeMode",this.$onChangeMode),this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this),a.addEventListener("tokenizerUpdate",this.$onTokenizerUpdate),this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer),a.addEventListener("changeTabSize",this.$onChangeTabSize),this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this),a.addEventListener("changeWrapLimit",this.$onChangeWrapLimit),this.$onChangeWrapMode=this.onChangeWrapMode.bind(this),a.addEventListener("changeWrapMode",this.$onChangeWrapMode),this.$onChangeFold=this.onChangeFold.bind(this),a.addEventListener("changeFold",this.$onChangeFold),this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this),this.session.addEventListener("changeFrontMarker",this.$onChangeFrontMarker),this.$onChangeBackMarker=this.onChangeBackMarker.bind(this),this.session.addEventListener("changeBackMarker",this.$onChangeBackMarker),this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this),this.session.addEventListener("changeBreakpoint",this.$onChangeBreakpoint),this.$onChangeAnnotation=this.onChangeAnnotation.bind(this),this.session.addEventListener("changeAnnotation",this.$onChangeAnnotation),this.$onCursorChange=this.onCursorChange.bind(this),this.session.addEventListener("changeOverwrite",this.$onCursorChange),this.$onScrollTopChange=this.onScrollTopChange.bind(this),this.session.addEventListener("changeScrollTop",this.$onScrollTopChange),this.$onScrollLeftChange=this.onScrollLeftChange.bind(this),this.session.addEventListener("changeScrollLeft",this.$onScrollLeftChange),this.selection=a.getSelection(),this.selection.addEventListener("changeCursor",this.$onCursorChange),this.$onSelectionChange=this.onSelectionChange.bind(this),this.selection.addEventListener("changeSelection",this.$onSelectionChange),this.onChangeMode(),this.$blockScrolling+=1,this.onCursorChange(),this.$blockScrolling-=1,this.onScrollTopChange(),this.onScrollLeftChange(),this.onSelectionChange(),this.onChangeFrontMarker(),this.onChangeBackMarker(),this.onChangeBreakpoint(),this.onChangeAnnotation(),this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit(),this.renderer.updateFull(),this._emit("changeSession",{session:a,oldSession:b})},this.getSession=function(){return this.session},this.setValue=function(a,b){return this.session.doc.setValue(a),b?b==1?this.navigateFileEnd():b==-1&&this.navigateFileStart():this.selectAll(),a},this.getValue=function(){return this.session.getValue()},this.getSelection=function(){return this.selection},this.resize=function(a){this.renderer.onResize(a)},this.setTheme=function(a){this.renderer.setTheme(a)},this.getTheme=function(){return this.renderer.getTheme()},this.setStyle=function(a){this.renderer.setStyle(a)},this.unsetStyle=function(a){this.renderer.unsetStyle(a)},this.setFontSize=function(a){this.container.style.fontSize=a,this.renderer.updateFontSize()},this.$highlightBrackets=function(){this.session.$bracketHighlight&&(this.session.removeMarker(this.session.$bracketHighlight),this.session.$bracketHighlight=null);if(this.$highlightPending)return;var a=this;this.$highlightPending=!0,setTimeout(function(){a.$highlightPending=!1;var b=a.session.findMatchingBracket(a.getCursorPosition());if(b){var c=new m(b.row,b.column,b.row,b.column+1);a.session.$bracketHighlight=a.session.addMarker(c,"ace_bracket","text")}},10)},this.focus=function(){var a=this;setTimeout(function(){a.textInput.focus()}),this.textInput.focus()},this.isFocused=function(){return this.textInput.isFocused()},this.blur=function(){this.textInput.blur()},this.onFocus=function(){if(this.$isFocused)return;this.$isFocused=!0,this.renderer.showCursor(),this.renderer.visualizeFocus(),this._emit("focus")},this.onBlur=function(){if(!this.$isFocused)return;this.$isFocused=!1,this.renderer.hideCursor(),this.renderer.visualizeBlur(),this._emit("blur")},this.$cursorChange=function(){this.renderer.updateCursor()},this.onDocumentChange=function(a){var b=a.data,c=b.range,d;c.start.row==c.end.row&&b.action!="insertLines"&&b.action!="removeLines"?d=c.end.row:d=Infinity,this.renderer.updateLines(c.start.row,d),this._emit("change",a),this.$cursorChange()},this.onTokenizerUpdate=function(a){var b=a.data;this.renderer.updateLines(b.first,b.last)},this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())},this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())},this.onCursorChange=function(){this.$cursorChange(),this.$blockScrolling||this.renderer.scrollCursorIntoView(),this.$highlightBrackets(),this.$updateHighlightActiveLine(),this._emit("changeSelection")},this.$updateHighlightActiveLine=function(){var a=this.getSession();a.$highlightLineMarker&&a.removeMarker(a.$highlightLineMarker),a.$highlightLineMarker=null;if(this.$highlightActiveLine){var b=this.getCursorPosition(),c=this.session.getFoldLine(b.row);if(this.getSelectionStyle()!="line"||!this.selection.isMultiLine()){var d;c?d=new m(c.start.row,0,c.end.row+1,0):d=new m(b.row,0,b.row+1,0),a.$highlightLineMarker=a.addMarker(d,"ace_active_line","background")}}},this.onSelectionChange=function(a){var b=this.session;b.$selectionMarker&&b.removeMarker(b.$selectionMarker),b.$selectionMarker=null;if(!this.selection.isEmpty()){var c=this.selection.getRange(),d=this.getSelectionStyle();b.$selectionMarker=b.addMarker(c,"ace_selection",d)}else this.$updateHighlightActiveLine();var e=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp();this.session.highlight(e),this._emit("changeSelection")},this.$getSelectionHighLightRegexp=function(){var a=this.session,b=this.getSelectionRange();if(b.isEmpty()||b.isMultiLine())return;var c=b.start.column-1,d=b.end.column+1,e=a.getLine(b.start.row),f=e.length,g=e.substring(Math.max(c,0),Math.min(d,f));if(c>=0&&/^[\w\d]/.test(g)||d<=f&&/[\w\d]$/.test(g))return;g=e.substring(b.start.column,b.end.column);if(!/^[\w\d]+$/.test(g))return;var h=this.$search.$assembleRegExp({wholeWord:!0,caseSensitive:!0,needle:g});return h},this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()},this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()},this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()},this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())},this.onChangeMode=function(){this.renderer.updateText()},this.onChangeWrapLimit=function(){this.renderer.updateFull()},this.onChangeWrapMode=function(){this.renderer.onResize(!0)},this.onChangeFold=function(){this.$updateHighlightActiveLine(),this.renderer.updateFull()},this.getCopyText=function(){var a="";return this.selection.isEmpty()||(a=this.session.getTextRange(this.getSelectionRange())),this._emit("copy",a),a},this.onCopy=function(){this.commands.exec("copy",this)},this.onCut=function(){this.commands.exec("cut",this)},this.onPaste=function(a){if(this.$readOnly)return;this._emit("paste",a),this.insert(a)},this.insert=function(a){var b=this.session,c=b.getMode(),d=this.getCursorPosition();if(this.getBehavioursEnabled()){var e=c.transformAction(b.getState(d.row),"insertion",this,b,a);e&&(a=e.text)}a=a.replace("	",this.session.getTabString());if(!this.selection.isEmpty())d=this.session.remove(this.getSelectionRange()),this.clearSelection();else if(this.session.getOverwrite()){var f=new m.fromPoints(d,d);f.end.column+=a.length,this.session.remove(f)}this.clearSelection();var g=d.column,h=b.getState(d.row),i=c.checkOutdent(h,b.getLine(d.row),a),j=b.getLine(d.row),k=c.getNextLineIndent(h,j.slice(0,d.column),b.getTabString()),l=b.insert(d,a);e&&e.selection&&(e.selection.length==2?this.selection.setSelectionRange(new m(d.row,g+e.selection[0],d.row,g+e.selection[1])):this.selection.setSelectionRange(new m(d.row+e.selection[0],e.selection[1],d.row+e.selection[2],e.selection[3])));var h=b.getState(d.row);if(b.getDocument().isNewLine(a)){this.moveCursorTo(d.row+1,0);var n=b.getTabSize(),o=Number.MAX_VALUE;for(var p=d.row+1;p<=l.row;++p){var q=0;j=b.getLine(p);for(var r=0;r<j.length;++r)if(j.charAt(r)=="	")q+=n;else{if(j.charAt(r)!=" ")break;q+=1}/[^\s]/.test(j)&&(o=Math.min(q,o))}for(var p=d.row+1;p<=l.row;++p){var s=o;j=b.getLine(p);for(var r=0;r<j.length&&s>0;++r)j.charAt(r)=="	"?s-=n:j.charAt(r)==" "&&(s-=1);b.remove(new m(p,0,p,r))}b.indentRows(d.row+1,l.row,k)}i&&c.autoOutdent(h,b,d.row)},this.onTextInput=function(a){this.keyBinding.onTextInput(a)},this.onCommandKey=function(a,b,c){this.keyBinding.onCommandKey(a,b,c)},this.setOverwrite=function(a){this.session.setOverwrite(a)},this.getOverwrite=function(){return this.session.getOverwrite()},this.toggleOverwrite=function(){this.session.toggleOverwrite()},this.setScrollSpeed=function(a){this.$mouseHandler.setScrollSpeed(a)},this.getScrollSpeed=function(){return this.$mouseHandler.getScrollSpeed()},this.setDragDelay=function(a){this.$mouseHandler.setDragDelay(a)},this.getDragDelay=function(){return this.$mouseHandler.getDragDelay()},this.$selectionStyle="line",this.setSelectionStyle=function(a){if(this.$selectionStyle==a)return;this.$selectionStyle=a,this.onSelectionChange(),this._emit("changeSelectionStyle",{data:a})},this.getSelectionStyle=function(){return this.$selectionStyle},this.$highlightActiveLine=!0,this.setHighlightActiveLine=function(a){if(this.$highlightActiveLine==a)return;this.$highlightActiveLine=a,this.$updateHighlightActiveLine()},this.getHighlightActiveLine=function(){return this.$highlightActiveLine},this.$highlightGutterLine=!0,this.setHighlightGutterLine=function(a){if(this.$highlightGutterLine==a)return;this.renderer.setHighlightGutterLine(a),this.$highlightGutterLine=a},this.getHighlightGutterLine=function(){return this.$highlightGutterLine},this.$highlightSelectedWord=!0,this.setHighlightSelectedWord=function(a){if(this.$highlightSelectedWord==a)return;this.$highlightSelectedWord=a,this.$onSelectionChange()},this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord},this.setAnimatedScroll=function(a){this.renderer.setAnimatedScroll(a)},this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()},this.setShowInvisibles=function(a){this.renderer.setShowInvisibles(a)},this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()},this.setDisplayIndentGuides=function(a){this.renderer.setDisplayIndentGuides(a)},this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()},this.setShowPrintMargin=function(a){this.renderer.setShowPrintMargin(a)},this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()},this.setPrintMarginColumn=function(a){this.renderer.setPrintMarginColumn(a)},this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()},this.$readOnly=!1,this.setReadOnly=function(a){this.$readOnly=a},this.getReadOnly=function(){return this.$readOnly},this.$modeBehaviours=!0,this.setBehavioursEnabled=function(a){this.$modeBehaviours=a},this.getBehavioursEnabled=function(){return this.$modeBehaviours},this.setShowFoldWidgets=function(a){var b=this.renderer.$gutterLayer;if(b.getShowFoldWidgets()==a)return;this.renderer.$gutterLayer.setShowFoldWidgets(a),this.$showFoldWidgets=a,this.renderer.updateFull()},this.getShowFoldWidgets=function(){return this.renderer.$gutterLayer.getShowFoldWidgets()},this.setFadeFoldWidgets=function(a){this.renderer.setFadeFoldWidgets(a)},this.getFadeFoldWidgets=function(){return this.renderer.getFadeFoldWidgets()},this.remove=function(a){this.selection.isEmpty()&&(a=="left"?this.selection.selectLeft():this.selection.selectRight());var b=this.getSelectionRange();if(this.getBehavioursEnabled()){var c=this.session,d=c.getState(b.start.row),e=c.getMode().transformAction(d,"deletion",this,c,b);e&&(b=e)}this.session.remove(b),this.clearSelection()},this.removeWordRight=function(){this.selection.isEmpty()&&this.selection.selectWordRight(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeWordLeft=function(){this.selection.isEmpty()&&this.selection.selectWordLeft(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineStart=function(){this.selection.isEmpty()&&this.selection.selectLineStart(),this.session.remove(this.getSelectionRange()),this.clearSelection()},this.removeToLineEnd=function(){this.selection.isEmpty()&&this.selection.selectLineEnd();var a=this.getSelectionRange();a.start.column==a.end.column&&a.start.row==a.end.row&&(a.end.column=0,a.end.row++),this.session.remove(a),this.clearSelection()},this.splitLine=function(){this.selection.isEmpty()||(this.session.remove(this.getSelectionRange()),this.clearSelection());var a=this.getCursorPosition();this.insert("\n"),this.moveCursorToPosition(a)},this.transposeLetters=function(){if(!this.selection.isEmpty())return;var a=this.getCursorPosition(),b=a.column;if(b===0)return;var c=this.session.getLine(a.row),d,e;b<c.length?(d=c.charAt(b)+c.charAt(b-1),e=new m(a.row,b-1,a.row,b+1)):(d=c.charAt(b-1)+c.charAt(b-2),e=new m(a.row,b-2,a.row,b)),this.session.replace(e,d)},this.toLowerCase=function(){var a=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var b=this.getSelectionRange(),c=this.session.getTextRange(b);this.session.replace(b,c.toLowerCase()),this.selection.setSelectionRange(a)},this.toUpperCase=function(){var a=this.getSelectionRange();this.selection.isEmpty()&&this.selection.selectWord();var b=this.getSelectionRange(),c=this.session.getTextRange(b);this.session.replace(b,c.toUpperCase()),this.selection.setSelectionRange(a)},this.indent=function(){var a=this.session,b=this.getSelectionRange();if(!(b.start.row<b.end.row||b.start.column<b.end.column)){var d;if(this.session.getUseSoftTabs()){var f=a.getTabSize(),g=this.getCursorPosition(),h=a.documentToScreenColumn(g.row,g.column),i=f-h%f;d=e.stringRepeat(" ",i)}else d="	";return this.insert(d)}var c=this.$getSelectedRows();a.indentRows(c.first,c.last,"	")},this.blockOutdent=function(){var a=this.session.getSelection();this.session.outdentRows(a.getRange())},this.toggleCommentLines=function(){var a=this.session.getState(this.getCursorPosition().row),b=this.$getSelectedRows();this.session.getMode().toggleCommentLines(a,this.session,b.first,b.last)},this.removeLines=function(){var a=this.$getSelectedRows(),b;a.first===0||a.last+1<this.session.getLength()?b=new m(a.first,0,a.last+1,0):b=new m(a.first-1,this.session.getLine(a.first-1).length,a.last,this.session.getLine(a.last).length),this.session.remove(b),this.clearSelection()},this.duplicateSelection=function(){var a=this.selection,b=this.session,c=a.getRange();if(c.isEmpty()){var d=c.start.row;b.duplicateLines(d,d)}else{var e=a.isBackwards(),f=a.isBackwards()?c.start:c.end,g=b.insert(f,b.getTextRange(c),!1);c.start=f,c.end=g,a.setSelectionRange(c,e)}},this.moveLinesDown=function(){this.$moveLines(function(a,b){return this.session.moveLinesDown(a,b)})},this.moveLinesUp=function(){this.$moveLines(function(a,b){return this.session.moveLinesUp(a,b)})},this.moveText=function(a,b){return this.$readOnly?null:this.session.moveText(a,b)},this.copyLinesUp=function(){this.$moveLines(function(a,b){return this.session.duplicateLines(a,b),0})},this.copyLinesDown=function(){this.$moveLines(function(a,b){return this.session.duplicateLines(a,b)})},this.$moveLines=function(a){var b=this.$getSelectedRows(),c=this.selection;if(!c.isMultiLine())var d=c.getRange(),e=c.isBackwards();var f=a.call(this,b.first,b.last);d?(d.start.row+=f,d.end.row+=f,c.setSelectionRange(d,e)):(c.setSelectionAnchor(b.last+f+1,0),c.$moveSelection(function(){c.moveCursorTo(b.first+f,0)}))},this.$getSelectedRows=function(){var a=this.getSelectionRange().collapseRows();return{first:a.start.row,last:a.end.row}},this.onCompositionStart=function(a){this.renderer.showComposition(this.getCursorPosition())},this.onCompositionUpdate=function(a){this.renderer.setCompositionText(a)},this.onCompositionEnd=function(){this.renderer.hideComposition()},this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()},this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()},this.isRowVisible=function(a){return a>=this.getFirstVisibleRow()&&a<=this.getLastVisibleRow()},this.isRowFullyVisible=function(a){return a>=this.renderer.getFirstFullyVisibleRow()&&a<=this.renderer.getLastFullyVisibleRow()},this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1},this.$moveByPage=function(a,b){var c=this.renderer,d=this.renderer.layerConfig,e=a*Math.floor(d.height/d.lineHeight);this.$blockScrolling++,b==1?this.selection.$moveSelection(function(){this.moveCursorBy(e,0)}):b==0&&(this.selection.moveCursorBy(e,0),this.selection.clearSelection()),this.$blockScrolling--;var f=c.scrollTop;c.scrollBy(0,e*d.lineHeight),b!=null&&c.scrollCursorIntoView(null,.5),c.animateScrolling(f)},this.selectPageDown=function(){this.$moveByPage(1,!0)},this.selectPageUp=function(){this.$moveByPage(-1,!0)},this.gotoPageDown=function(){this.$moveByPage(1,!1)},this.gotoPageUp=function(){this.$moveByPage(-1,!1)},this.scrollPageDown=function(){this.$moveByPage(1)},this.scrollPageUp=function(){this.$moveByPage(-1)},this.scrollToRow=function(a){this.renderer.scrollToRow(a)},this.scrollToLine=function(a,b,c,d){this.renderer.scrollToLine(a,b,c,d)},this.centerSelection=function(){var a=this.getSelectionRange(),b={row:Math.floor(a.start.row+(a.end.row-a.start.row)/2),column:Math.floor(a.start.column+(a.end.column-a.start.column)/2)};this.renderer.alignCursor(b,.5)},this.getCursorPosition=function(){return this.selection.getCursor()},this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())},this.getSelectionRange=function(){return this.selection.getRange()},this.selectAll=function(){this.$blockScrolling+=1,this.selection.selectAll(),this.$blockScrolling-=1},this.clearSelection=function(){this.selection.clearSelection()},this.moveCursorTo=function(a,b){this.selection.moveCursorTo(a,b)},this.moveCursorToPosition=function(a){this.selection.moveCursorToPosition(a)},this.jumpToMatching=function(a){var b=this.getCursorPosition(),c=this.session.getBracketRange(b);if(!c){c=this.find({needle:/[{}()\[\]]/g,preventScroll:!0,start:{row:b.row,column:b.column-1}});if(!c)return;var d=c.start;d.row==b.row&&Math.abs(d.column-b.column)<2&&(c=this.session.getBracketRange(d))}d=c&&c.cursor||d,d&&(a?c&&c.isEqual(this.getSelectionRange())?this.clearSelection():this.selection.selectTo(d.row,d.column):(this.clearSelection(),this.moveCursorTo(d.row,d.column)))},this.gotoLine=function(a,b,c){this.selection.clearSelection(),this.session.unfold({row:a-1,column:b||0}),this.$blockScrolling+=1,this.moveCursorTo(a-1,b||0),this.$blockScrolling-=1,this.isRowFullyVisible(a-1)||this.scrollToLine(a-1,!0,c)},this.navigateTo=function(a,b){this.clearSelection(),this.moveCursorTo(a,b)},this.navigateUp=function(a){this.selection.clearSelection(),a=a||1,this.selection.moveCursorBy(-a,0)},this.navigateDown=function(a){this.selection.clearSelection(),a=a||1,this.selection.moveCursorBy(a,0)},this.navigateLeft=function(a){if(!this.selection.isEmpty()){var b=this.getSelectionRange().start;this.moveCursorToPosition(b)}else{a=a||1;while(a--)this.selection.moveCursorLeft()}this.clearSelection()},this.navigateRight=function(a){if(!this.selection.isEmpty()){var b=this.getSelectionRange().end;this.moveCursorToPosition(b)}else{a=a||1;while(a--)this.selection.moveCursorRight()}this.clearSelection()},this.navigateLineStart=function(){this.selection.moveCursorLineStart(),this.clearSelection()},this.navigateLineEnd=function(){this.selection.moveCursorLineEnd(),this.clearSelection()},this.navigateFileEnd=function(){var a=this.renderer.scrollTop;this.selection.moveCursorFileEnd(),this.clearSelection(),this.renderer.animateScrolling(a)},this.navigateFileStart=function(){var a=this.renderer.scrollTop;this.selection.moveCursorFileStart(),this.clearSelection(),this.renderer.animateScrolling(a)},this.navigateWordRight=function(){this.selection.moveCursorWordRight(),this.clearSelection()},this.navigateWordLeft=function(){this.selection.moveCursorWordLeft(),this.clearSelection()},this.replace=function(a,b){b&&this.$search.set(b);var c=this.$search.find(this.session),d=0;return c?(this.$tryReplace(c,a)&&(d=1),c!==null&&(this.selection.setSelectionRange(c),this.renderer.scrollSelectionIntoView(c.start,c.end)),d):d},this.replaceAll=function(a,b){b&&this.$search.set(b);var c=this.$search.findAll(this.session),d=0;if(!c.length)return d;this.$blockScrolling+=1;var e=this.getSelectionRange();this.clearSelection(),this.selection.moveCursorTo(0,0);for(var f=c.length-1;f>=0;--f)this.$tryReplace(c[f],a)&&d++;return this.selection.setSelectionRange(e),this.$blockScrolling-=1,d},this.$tryReplace=function(a,b){var c=this.session.getTextRange(a);return b=this.$search.replace(c,b),b!==null?(a.end=this.session.replace(a,b),a):null},this.getLastSearchOptions=function(){return this.$search.getOptions()},this.find=function(a,b,c){b||(b={}),typeof a=="string"||a instanceof RegExp?b.needle=a:typeof a=="object"&&d.mixin(b,a);var e=this.selection.getRange();b.needle==null&&(a=this.session.getTextRange(e)||this.$search.$options.needle,a||(e=this.session.getWordRange(e.start.row,e.start.column),a=this.session.getTextRange(e)),this.$search.set({needle:a})),this.$search.set(b),b.start||this.$search.set({start:e});var f=this.$search.find(this.session);if(b.preventScroll)return f;if(f)return this.revealRange(f,c),f;b.backwards?e.start=e.end:e.end=e.start,this.selection.setRange(e)},this.findNext=function(a,b){this.find({skipCurrent:!0,backwards:!1},a,b)},this.findPrevious=function(a,b){this.find(a,{skipCurrent:!0,backwards:!0},b)},this.revealRange=function(a,b){this.$blockScrolling+=1,this.session.unfold(a),this.selection.setSelectionRange(a),this.$blockScrolling-=1;var c=this.renderer.scrollTop;this.renderer.scrollSelectionIntoView(a.start,a.end,.5),b!=0&&this.renderer.animateScrolling(c)},this.undo=function(){this.$blockScrolling++,this.session.getUndoManager().undo(),this.$blockScrolling--,this.renderer.scrollCursorIntoView(null,.5)},this.redo=function(){this.$blockScrolling++,this.session.getUndoManager().redo(),this.$blockScrolling--,this.renderer.scrollCursorIntoView(null,.5)},this.destroy=function(){this.renderer.destroy()}}).call(q.prototype),b.Editor=q}),define("ace/lib/lang",["require","exports","module"],function(a,b,c){b.stringReverse=function(a){return a.split("").reverse().join("")},b.stringRepeat=function(a,b){return(new Array(b+1)).join(a)};var d=/^\s\s*/,e=/\s\s*$/;b.stringTrimLeft=function(a){return a.replace(d,"")},b.stringTrimRight=function(a){return a.replace(e,"")},b.copyObject=function(a){var b={};for(var c in a)b[c]=a[c];return b},b.copyArray=function(a){var b=[];for(var c=0,d=a.length;c<d;c++)a[c]&&typeof a[c]=="object"?b[c]=this.copyObject(a[c]):b[c]=a[c];return b},b.deepCopy=function(a){if(typeof a!="object")return a;var b=a.constructor();for(var c in a)typeof a[c]=="object"?b[c]=this.deepCopy(a[c]):b[c]=a[c];return b},b.arrayToMap=function(a){var b={};for(var c=0;c<a.length;c++)b[a[c]]=1;return b},b.createMap=function(a){var b=Object.create(null);for(var c in a)b[c]=a[c];return b},b.arrayRemove=function(a,b){for(var c=0;c<=a.length;c++)b===a[c]&&a.splice(c,1)},b.escapeRegExp=function(a){return a.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},b.getMatchOffsets=function(a,b){var c=[];return a.replace(b,function(a){c.push({offset:arguments[arguments.length-2],length:a.length})}),c},b.deferredCall=function(a){var b=null,c=function(){b=null,a()},d=function(a){return d.cancel(),b=setTimeout(c,a||0),d};return d.schedule=d,d.call=function(){return this.cancel(),a(),d},d.cancel=function(){return clearTimeout(b),b=null,d},d}}),define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom"],function(a,b,c){var d=a("../lib/event"),e=a("../lib/useragent"),f=a("../lib/dom"),g=function(a,b){function l(a){try{a?(c.value=g,c.selectionStart=0,c.selectionEnd=1):c.select()}catch(b){}}function m(a){if(!i){var d=a||c.value;d&&(d.length>1&&(d.charAt(0)==g?d=d.substr(1):d.charAt(d.length-1)==g&&(d=d.slice(0,-1))),d&&d!=g&&(j?b.onPaste(d):b.onTextInput(d)))}i=!1,j=!1,l(!0)}function v(){return document.activeElement===c}function w(){setTimeout(function(){k&&(c.style.cssText=k,k=""),m(),b.renderer.$keepTextAreaAtCursor==null&&(b.renderer.$keepTextAreaAtCursor=!0,b.renderer.$moveTextAreaToCursor())},0)}var c=f.createElement("textarea");e.isTouchPad&&c.setAttribute("x-palm-disable-auto-cap",!0),c.setAttribute("wrap","off"),c.style.top="-2em",a.insertBefore(c,a.firstChild);var g=e.isIE?"":"";m();var h=!1,i=!1,j=!1,k="",n=function(a){h||m(a.data),setTimeout(function(){h||l(!0)},0)},o=function(a){setTimeout(function(){h||c.value!=""&&m()},0)},p=function(a){h=!0,b.onCompositionStart(),setTimeout(q,0)},q=function(){if(!h)return;b.onCompositionUpdate(c.value)},r=function(a){h=!1,b.onCompositionEnd()},s=function(a){i=!0;var d=b.getCopyText();d?c.value=d:a.preventDefault(),l(),setTimeout(function(){m()},0)},t=function(a){i=!0;var d=b.getCopyText();d?(c.value=d,b.onCut()):a.preventDefault(),l(),setTimeout(function(){m()},0)};d.addCommandKeyListener(c,b.onCommandKey.bind(b)),d.addListener(c,"input",n);if(e.isOldIE){var u={13:1,27:1};d.addListener(c,"keyup",function(a){h&&(!c.value||u[a.keyCode])&&setTimeout(r,0);if((c.value.charCodeAt(0)|0)<129)return;h?q():p()}),d.addListener(c,"propertychange",function(){c.value!=g&&setTimeout(m,0)})}d.addListener(c,"paste",function(a){j=!0,a.clipboardData&&a.clipboardData.getData?(m(a.clipboardData.getData("text/plain")),a.preventDefault()):o()}),"onbeforecopy"in c&&typeof clipboardData!="undefined"?(d.addListener(c,"beforecopy",function(a){if(k)return;var c=b.getCopyText();c?clipboardData.setData("Text",c):a.preventDefault()}),d.addListener(a,"keydown",function(a){if(a.ctrlKey&&a.keyCode==88){var c=b.getCopyText();c&&(clipboardData.setData("Text",c),b.onCut()),d.preventDefault(a)}}),d.addListener(c,"cut",t)):!e.isOpera||"KeyboardEvent"in window?(d.addListener(c,"copy",s),d.addListener(c,"cut",t)):d.addListener(a,"keydown",function(a){if(e.isMac&&!a.metaKey||!a.ctrlKey)return;if(a.keyCode==88||a.keyCode==67){var d=b.getCopyText();d&&(c.value=d,c.select(),a.keyCode==88&&b.onCut())}}),d.addListener(c,"compositionstart",p),e.isGecko&&d.addListener(c,"text",q),e.isWebKit&&d.addListener(c,"keyup",q),d.addListener(c,"compositionend",r),d.addListener(c,"blur",function(){b.onBlur()}),d.addListener(c,"focus",function(){b.onFocus(),l()}),this.focus=function(){l(),c.focus()},this.blur=function(){c.blur()},this.isFocused=v,this.getElement=function(){return c},this.onContextMenu=function(a){k||(k=c.style.cssText),c.style.cssText="position:fixed; z-index:100000;"+(e.isIE?"background:rgba(0, 0, 0, 0.03); opacity:0.1;":"")+"left:"+(a.clientX-2)+"px; top:"+(a.clientY-2)+"px;",b.selection.isEmpty()?c.value="":l(!0);if(a.type!="mousedown")return;b.renderer.$keepTextAreaAtCursor&&(b.renderer.$keepTextAreaAtCursor=null),e.isWin&&(e.isGecko||e.isIE)&&d.capture(b.container,function(a){c.style.left=a.clientX-2+"px",c.style.top=a.clientY-2+"px"},w)},this.onContextMenuClose=w,e.isGecko||d.addListener(c,"contextmenu",function(a){b.textInput.onContextMenu(a),w()})};b.TextInput=g}),define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop"],function(a,b,c){var d=a("../lib/event"),e=a("../lib/useragent"),f=a("./default_handlers").DefaultHandlers,g=a("./default_gutter_handler").GutterHandler,h=a("./mouse_event").MouseEvent,i=a("./dragdrop").DragdropHandler,j=function(a){this.editor=a,new f(this),new g(this),new i(this),d.addListener(a.container,"mousedown",function(b){return a.focus(),d.preventDefault(b)});var b=a.renderer.getMouseEventTarget();d.addListener(b,"click",this.onMouseEvent.bind(this,"click")),d.addListener(b,"mousemove",this.onMouseMove.bind(this,"mousemove")),d.addMultiMouseDownListener(b,[300,300,250],this,"onMouseEvent"),d.addMouseWheelListener(a.container,this.onMouseWheel.bind(this,"mousewheel"));var c=a.renderer.$gutter;d.addListener(c,"mousedown",this.onMouseEvent.bind(this,"guttermousedown")),d.addListener(c,"click",this.onMouseEvent.bind(this,"gutterclick")),d.addListener(c,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick")),d.addListener(c,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"))};(function(){this.$scrollSpeed=1,this.setScrollSpeed=function(a){this.$scrollSpeed=a},this.getScrollSpeed=function(){return this.$scrollSpeed},this.onMouseEvent=function(a,b){this.editor._emit(a,new h(b,this.editor))},this.$dragDelay=250,this.setDragDelay=function(a){this.$dragDelay=a},this.getDragDelay=function(){return this.$dragDelay},this.onMouseMove=function(a,b){var c=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove;if(!c||!c.length)return;this.editor._emit(a,new h(b,this.editor))},this.onMouseWheel=function(a,b){var c=new h(b,this.editor);c.speed=this.$scrollSpeed*2,c.wheelX=b.wheelX,c.wheelY=b.wheelY,this.editor._emit(a,c)},this.setState=function(a){this.state=a},this.captureMouse=function(a,b){b&&this.setState(b),this.x=a.x,this.y=a.y;var c=this.editor.renderer;c.$keepTextAreaAtCursor&&(c.$keepTextAreaAtCursor=null);var f=this,g=function(a){f.x=a.clientX,f.y=a.clientY},h=function(a){clearInterval(j),f[f.state+"End"]&&f[f.state+"End"](a),f.$clickSelection=null,c.$keepTextAreaAtCursor==null&&(c.$keepTextAreaAtCursor=!0,c.$moveTextAreaToCursor())},i=function(){f[f.state]&&f[f.state]()};if(e.isOldIE&&a.domEvent.type=="dblclick"){setTimeout(function(){i(),h(a.domEvent)});return}d.capture(this.editor.container,g,h);var j=setInterval(i,20)}}).call(j.prototype),b.MouseHandler=j}),define("ace/mouse/default_handlers",["require","exports","module","ace/lib/dom","ace/lib/useragent"],function(a,b,c){function g(a){a.$clickSelection=null;var b=a.editor;b.setDefaultHandler("mousedown",this.onMouseDown.bind(a)),b.setDefaultHandler("dblclick",this.onDoubleClick.bind(a)),b.setDefaultHandler("tripleclick",this.onTripleClick.bind(a)),b.setDefaultHandler("quadclick",this.onQuadClick.bind(a)),b.setDefaultHandler("mousewheel",this.onScroll.bind(a));var c=["select","startSelect","drag","dragEnd","dragWait","dragWaitEnd","startDrag","focusWait"];c.forEach(function(b){a[b]=this[b]},this),a.selectByLines=this.extendSelectionBy.bind(a,"getLineRange"),a.selectByWords=this.extendSelectionBy.bind(a,"getWordRange"),a.$focusWaitTimout=250}function h(a,b,c,d){return Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))}function i(a,b){if(a.start.row==a.end.row)var c=2*b.column-a.start.column-a.end.column;else var c=2*b.row-a.start.row-a.end.row;return c<0?{cursor:a.start,anchor:a.end}:{cursor:a.end,anchor:a.start}}var d=a("../lib/dom"),e=a("../lib/useragent"),f=5;(function(){this.onMouseDown=function(a){var b=a.inSelection(),c=a.getDocumentPosition();this.mousedownEvent=a;var d=this.editor,e=a.getButton();if(e!==0){var f=d.getSelectionRange(),g=f.isEmpty();g&&(d.moveCursorToPosition(c),d.selection.clearSelection()),d.textInput.onContextMenu(a.domEvent);return}if(b&&!d.isFocused()){d.focus();if(this.$focusWaitTimout&&!this.$clickSelection)return this.setState("focusWait"),this.captureMouse(a),a.preventDefault()}return!b||this.$clickSelection||a.getShiftKey()?this.startSelect(c):b&&(this.mousedownEvent.time=(new Date).getTime(),this.setState("dragWait")),this.captureMouse(a),a.preventDefault()},this.startSelect=function(a){a=a||this.editor.renderer.screenToTextCoordinates(this.x,this.y),this.mousedownEvent.getShiftKey()?this.editor.selection.selectToPosition(a):this.$clickSelection||(this.editor.moveCursorToPosition(a),this.editor.selection.clearSelection()),this.setState("select")},this.select=function(){var a,b=this.editor,c=b.renderer.screenToTextCoordinates(this.x,this.y);if(this.$clickSelection){var d=this.$clickSelection.comparePoint(c);if(d==-1)a=this.$clickSelection.end;else if(d==1)a=this.$clickSelection.start;else{var e=i(this.$clickSelection,c);c=e.cursor,a=e.anchor}b.selection.setSelectionAnchor(a.row,a.column)}b.selection.selectToPosition(c),b.renderer.scrollCursorIntoView()},this.extendSelectionBy=function(a){var b,c=this.editor,d=c.renderer.screenToTextCoordinates(this.x,this.y),e=c.selection[a](d.row,d.column);if(this.$clickSelection){var f=this.$clickSelection.comparePoint(e.start),g=this.$clickSelection.comparePoint(e.end);if(f==-1&&g<=0){b=this.$clickSelection.end;if(e.end.row!=d.row||e.end.column!=d.column)d=e.start}else if(g==1&&f>=0){b=this.$clickSelection.start;if(e.start.row!=d.row||e.start.column!=d.column)d=e.end}else if(f==-1&&g==1)d=e.end,b=e.start;else{var h=i(this.$clickSelection,d);d=h.cursor,b=h.anchor}c.selection.setSelectionAnchor(b.row,b.column)}c.selection.selectToPosition(d),c.renderer.scrollCursorIntoView()},this.startDrag=function(){var a=this.editor;this.setState("drag"),this.dragRange=a.getSelectionRange();var b=a.getSelectionStyle();this.dragSelectionMarker=a.session.addMarker(this.dragRange,"ace_selection",b),a.clearSelection(),d.addCssClass(a.container,"ace_dragging"),this.$dragKeybinding||(this.$dragKeybinding={handleKeyboard:function(a,b,c,d){if(c=="esc")return{command:this.command}},command:{exec:function(a){var b=a.$mouseHandler;b.dragCursor=null,b.dragEnd(),b.startSelect()}}}),a.keyBinding.addKeyboardHandler(this.$dragKeybinding)},this.focusWait=function(){var a=h(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),b=(new Date).getTime();(a>f||b-this.mousedownEvent.time>this.$focusWaitTimout)&&this.startSelect()},this.dragWait=function(a){var b=h(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y),c=(new Date).getTime(),d=this.editor;b>f?this.startSelect(this.mousedownEvent.getDocumentPosition()):c-this.mousedownEvent.time>d.getDragDelay()&&this.startDrag()},this.dragWaitEnd=function(a){this.mousedownEvent.domEvent=a,this.startSelect()},this.drag=function(){var a=this.editor;this.dragCursor=a.renderer.screenToTextCoordinates(this.x,this.y),a.moveCursorToPosition(this.dragCursor),a.renderer.scrollCursorIntoView()},this.dragEnd=function(a){var b=this.editor,c=this.dragCursor,e=this.dragRange;d.removeCssClass(b.container,"ace_dragging"),b.session.removeMarker(this.dragSelectionMarker),b.keyBinding.removeKeyboardHandler(this.$dragKeybinding);if(!c)return;b.clearSelection();if(a&&(a.ctrlKey||a.altKey)){var f=b.session,g=e;g.end=f.insert(c,f.getTextRange(e)),g.start=c}else{if(e.contains(c.row,c.column))return;var g=b.moveText(e,c)}if(!g)return;b.selection.setSelectionRange(g)},this.onDoubleClick=function(a){var b=a.getDocumentPosition(),c=this.editor,d=c.session,e=d.getBracketRange(b);if(e){e.isEmpty()&&(e.start.column--,e.end.column++),this.$clickSelection=e,this.setState("select");return}this.$clickSelection=c.selection.getWordRange(b.row,b.column),this.setState("selectByWords")},this.onTripleClick=function(a){var b=a.getDocumentPosition(),c=this.editor;this.setState("selectByLines"),this.$clickSelection=c.selection.getLineRange(b.row)},this.onQuadClick=function(a){var b=this.editor;b.selectAll(),this.$clickSelection=b.getSelectionRange(),this.setState("null")},this.onScroll=function(a){var b=this.editor,c=b.renderer.isScrollableBy(a.wheelX*a.speed,a.wheelY*a.speed);if(c)this.$passScrollEvent=!1;else{if(this.$passScrollEvent)return;if(!this.$scrollStopTimeout){var d=this;this.$scrollStopTimeout=setTimeout(function(){d.$passScrollEvent=!0,d.$scrollStopTimeout=null},200)}}return b.renderer.scrollBy(a.wheelX*a.speed,a.wheelY*a.speed),a.preventDefault()}}).call(g.prototype),b.DefaultHandlers=g}),define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/event"],function(a,b,c){function f(a){function j(){h=d.createElement("div"),h.className="ace_gutter_tooltip",h.style.maxWidth="500px",h.style.display="none",b.container.appendChild(h)}function k(){h||j();var a=g.getDocumentPosition().row,d=c.$annotations[a];if(!d)return l();var e=b.session.getLength();if(a==e){var f=b.renderer.pixelToScreenCoordinates(0,g.y).row,k=g.$pos;if(f>b.session.documentToScreenRow(k.row,k.column))return l()}if(i==d)return;i=d.text.join("\n"),h.style.display="block",h.innerHTML=i,b.on("mousewheel",l),m(g)}function l(){f&&(f=clearTimeout(f)),i&&(h.style.display="none",i=null,b.removeEventListener("mousewheel",l))}function m(a){var c=b.renderer.$gutter.getBoundingClientRect();h.style.left=a.x-c.left+15+"px",a.y+3*b.renderer.lineHeight+15<c.bottom?(h.style.bottom="",h.style.top=a.y-c.top+15+"px"):(h.style.top="",h.style.bottom=c.bottom-a.y+5+"px")}var b=a.editor,c=b.renderer.$gutterLayer;a.editor.setDefaultHandler("guttermousedown",function(d){if(!b.isFocused())return;var e=c.getRegion(d);if(e)return;var f=d.getDocumentPosition().row,g=b.session.selection;return d.getShiftKey()?g.selectTo(f,0):a.$clickSelection=b.selection.getLineRange(f),a.captureMouse(d,"selectByLines"),d.preventDefault()});var f,g,h,i;a.editor.setDefaultHandler("guttermousemove",function(a){var b=a.domEvent.target||a.domEvent.srcElement;if(d.hasCssClass(b,"ace_fold-widget"))return l();i&&m(a),g=a;if(f)return;f=setTimeout(function(){f=null,g?k():l()},50)}),e.addListener(b.renderer.$gutter,"mouseout",function(a){g=null;if(!i||f)return;f=setTimeout(function(){f=null,l()},50)})}var d=a("../lib/dom"),e=a("../lib/event");b.GutterHandler=f}),define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(a,b,c){var d=a("../lib/event"),e=a("../lib/useragent"),f=b.MouseEvent=function(a,b){this.domEvent=a,this.editor=b,this.x=this.clientX=a.clientX,this.y=this.clientY=a.clientY,this.$pos=null,this.$inSelection=null,this.propagationStopped=!1,this.defaultPrevented=!1};(function(){this.stopPropagation=function(){d.stopPropagation(this.domEvent),this.propagationStopped=!0},this.preventDefault=function(){d.preventDefault(this.domEvent),this.defaultPrevented=!0},this.stop=function(){this.stopPropagation(),this.preventDefault()},this.getDocumentPosition=function(){return this.$pos?this.$pos:(this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY),this.$pos)},this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection;var a=this.editor;if(a.getReadOnly())this.$inSelection=!1;else{var b=a.getSelectionRange();if(b.isEmpty())this.$inSelection=!1;else{var c=this.getDocumentPosition();this.$inSelection=b.contains(c.row,c.column)}}return this.$inSelection},this.getButton=function(){return d.getButton(this.domEvent)},this.getShiftKey=function(){return this.domEvent.shiftKey},this.getAccelKey=e.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(f.prototype)}),define("ace/mouse/dragdrop",["require","exports","module","ace/lib/event"],function(a,b,c){var d=a("../lib/event"),e=function(a){var b=a.editor,c,e,f,g,h,i,j,k=0,l=b.container;d.addListener(l,"dragenter",function(a){k++;if(!c){h=b.getSelectionRange(),i=b.selection.isBackwards();var e=b.getSelectionStyle();c=b.session.addMarker(h,"ace_selection",e),b.clearSelection(),clearInterval(g),g=setInterval(m,20)}return d.preventDefault(a)}),d.addListener(l,"dragover",function(a){return e=a.clientX,f=a.clientY,d.preventDefault(a)});var m=function(){j=b.renderer.screenToTextCoordinates(e,f),b.moveCursorToPosition(j),b.renderer.scrollCursorIntoView()};d.addListener(l,"dragleave",function(a){k--;if(k>0)return;return console.log(a.type,k,a.target),clearInterval(g),b.session.removeMarker(c),c=null,b.selection.setSelectionRange(h,i),d.preventDefault(a)}),d.addListener(l,"drop",function(a){return console.log(a.type,k,a.target),k=0,clearInterval(g),b.session.removeMarker(c),c=null,h.end=b.session.insert(j,a.dataTransfer.getData("Text")),h.start=j,b.focus(),b.selection.setSelectionRange(h),d.preventDefault(a)})};b.DragdropHandler=e}),define("ace/mouse/fold_handler",["require","exports","module"],function(a,b,c){function d(a){a.on("click",function(b){var c=b.getDocumentPosition(),d=a.session,e=d.getFoldAt(c.row,c.column,1);e&&(b.getAccelKey()?d.removeFold(e):d.expandFold(e),b.stop())}),a.on("gutterclick",function(b){var c=a.renderer.$gutterLayer.getRegion(b);if(c=="foldWidgets"){var d=b.getDocumentPosition().row,e=a.session;e.foldWidgets&&e.foldWidgets[d]&&a.session.onFoldWidgetClick(d,b),b.stop()}})}b.FoldHandler=d}),define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(a,b,c){var d=a("../lib/keys"),e=a("../lib/event"),f=function(a){this.$editor=a,this.$data={},this.$handlers=[],this.setDefaultHandler(a.commands)};(function(){this.setDefaultHandler=function(a){this.removeKeyboardHandler(this.$defaultHandler),this.$defaultHandler=a,this.addKeyboardHandler(a,0),this.$data={editor:this.$editor}},this.setKeyboardHandler=function(a){if(this.$handlers[this.$handlers.length-1]==a)return;while(this.$handlers[1])this.removeKeyboardHandler(this.$handlers[1]);this.addKeyboardHandler(a,1)},this.addKeyboardHandler=function(a,b){if(!a)return;var c=this.$handlers.indexOf(a);c!=-1&&this.$handlers.splice(c,1),b==undefined?this.$handlers.push(a):this.$handlers.splice(b,0,a),c==-1&&a.attach&&a.attach(this.$editor)},this.removeKeyboardHandler=function(a){var b=this.$handlers.indexOf(a);return b==-1?!1:(this.$handlers.splice(b,1),a.detach&&a.detach(this.$editor),!0)},this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]},this.$callKeyboardHandlers=function(a,b,c,d){var f;for(var g=this.$handlers.length;g--;){f=this.$handlers[g].handleKeyboard(this.$data,a,b,c,d);if(f&&f.command)break}if(!f||!f.command)return!1;var h=!1,i=this.$editor.commands;return f.command!="null"?h=i.exec(f.command,this.$editor,f.args,d):h=f.passEvent!=1,h&&d&&a!=-1&&e.stopEvent(d),h},this.onCommandKey=function(a,b,c){var e=d.keyCodeToString(c);this.$callKeyboardHandlers(b,e,c,a)},this.onTextInput=function(a){var b=this.$callKeyboardHandlers(-1,a);b||this.$editor.commands.exec("insertstring",this.$editor,a)}}).call(f.prototype),b.KeyBinding=f}),define("ace/edit_session",["require","exports","module","ace/config","ace/lib/oop","ace/lib/lang","ace/lib/net","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(a,b,c){var d=a("./config"),e=a("./lib/oop"),f=a("./lib/lang"),g=a("./lib/net"),h=a("./lib/event_emitter").EventEmitter,i=a("./selection").Selection,j=a("./mode/text").Mode,k=a("./range").Range,l=a("./document").Document,m=a("./background_tokenizer").BackgroundTokenizer,n=a("./search_highlight").SearchHighlight,o=function(a,b){this.$modified=!0,this.$breakpoints=[],this.$decorations=[],this.$frontMarkers={},this.$backMarkers={},this.$markerId=1,this.$resetRowCache(0),this.$wrapData=[],this.$foldData=[],this.$rowLengthCache=[],this.$undoSelect=!0,this.$foldData.toString=function(){var a="";return this.forEach(function(b){a+="\n"+b.toString()}),a},typeof a=="object"&&a.getLine?this.setDocument(a):this.setDocument(new l(a)),this.selection=new i(this),this.setMode(b)};(function(){function s(a){return a<4352?!1:a>=4352&&a<=4447||a>=4515&&a<=4519||a>=4602&&a<=4607||a>=9001&&a<=9002||a>=11904&&a<=11929||a>=11931&&a<=12019||a>=12032&&a<=12245||a>=12272&&a<=12283||a>=12288&&a<=12350||a>=12353&&a<=12438||a>=12441&&a<=12543||a>=12549&&a<=12589||a>=12593&&a<=12686||a>=12688&&a<=12730||a>=12736&&a<=12771||a>=12784&&a<=12830||a>=12832&&a<=12871||a>=12880&&a<=13054||a>=13056&&a<=19903||a>=19968&&a<=42124||a>=42128&&a<=42182||a>=43360&&a<=43388||a>=44032&&a<=55203||a>=55216&&a<=55238||a>=55243&&a<=55291||a>=63744&&a<=64255||a>=65040&&a<=65049||a>=65072&&a<=65106||a>=65108&&a<=65126||a>=65128&&a<=65131||a>=65281&&a<=65376||a>=65504&&a<=65510}e.implement(this,h),this.setDocument=function(a){if(this.doc)throw new Error("Document is already set");this.doc=a,a.on("change",this.onChange.bind(this)),this.on("changeFold",this.onChangeFold.bind(this)),this.bgTokenizer&&(this.bgTokenizer.setDocument(this.getDocument()),this.bgTokenizer.start(0))},this.getDocument=function(){return this.doc},this.$resetRowCache=function(a){if(!a){this.$docRowCache=[],this.$screenRowCache=[];return}var b=this.$getRowCacheIndex(this.$docRowCache,a)+1,c=this.$docRowCache.length;this.$docRowCache.splice(b,c),this.$screenRowCache.splice(b,c)},this.$getRowCacheIndex=function(a,b){var c=0,d=a.length-1;while(c<=d){var e=c+d>>1,f=a[e];if(b>f)c=e+1;else{if(!(b<f))return e;d=e-1}}return c&&c-1},this.onChangeFold=function(a){var b=a.data;this.$resetRowCache(b.start.row)},this.onChange=function(a){var b=a.data;this.$modified=!0,this.$resetRowCache(b.range.start.row);var c=this.$updateInternalDataOnChange(a);!this.$fromUndo&&this.$undoManager&&!b.ignore&&(this.$deltasDoc.push(b),c&&c.length!=0&&this.$deltasFold.push({action:"removeFolds",folds:c}),this.$informUndoManager.schedule()),this.bgTokenizer.$updateOnChange(b),this._emit("change",a)},this.setValue=function(a){this.doc.setValue(a),this.selection.moveCursorTo(0,0),this.selection.clearSelection(),this.$resetRowCache(0),this.$deltas=[],this.$deltasDoc=[],this.$deltasFold=[],this.getUndoManager().reset()},this.getValue=this.toString=function(){return this.doc.getValue()},this.getSelection=function(){return this.selection},this.getState=function(a){return this.bgTokenizer.getState(a)},this.getTokens=function(a){return this.bgTokenizer.getTokens(a)},this.getTokenAt=function(a,b){var c=this.bgTokenizer.getTokens(a),d,e=0;if(b==null)f=c.length-1,e=this.getLine(a).length;else for(var f=0;f<c.length;f++){e+=c[f].value.length;if(e>=b)break}return d=c[f],d?(d.index=f,d.start=e-d.value.length,d):null},this.highlight=function(a){if(!this.$searchHighlight){var b=new n(null,"ace_selected_word","text");this.$searchHighlight=this.addDynamicMarker(b)}this.$searchHighlight.setRegexp(a)},this.setUndoManager=function(a){this.$undoManager=a,this.$deltas=[],this.$deltasDoc=[],this.$deltasFold=[],this.$informUndoManager&&this.$informUndoManager.cancel();if(a){var b=this;this.$syncInformUndoManager=function(){b.$informUndoManager.cancel(),b.$deltasFold.length&&(b.$deltas.push({group:"fold",deltas:b.$deltasFold}),b.$deltasFold=[]),b.$deltasDoc.length&&(b.$deltas.push({group:"doc",deltas:b.$deltasDoc}),b.$deltasDoc=[]),b.$deltas.length>0&&a.execute({action:"aceupdate",args:[b.$deltas,b]}),b.$deltas=[]},this.$informUndoManager=f.deferredCall(this.$syncInformUndoManager)}},this.$defaultUndoManager={undo:function(){},redo:function(){},reset:function(){}},this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager},this.getTabString=function(){return this.getUseSoftTabs()?f.stringRepeat(" ",this.getTabSize()):"	"},this.$useSoftTabs=!0,this.setUseSoftTabs=function(a){if(this.$useSoftTabs===a)return;this.$useSoftTabs=a},this.getUseSoftTabs=function(){return this.$useSoftTabs},this.$tabSize=4,this.setTabSize=function(a){if(isNaN(a)||this.$tabSize===a)return;this.$modified=!0,this.$rowLengthCache=[],this.$tabSize=a,this._emit("changeTabSize")},this.getTabSize=function(){return this.$tabSize},this.isTabStop=function(a){return this.$useSoftTabs&&a.column%this.$tabSize==0},this.$overwrite=!1,this.setOverwrite=function(a){if(this.$overwrite==a)return;this.$overwrite=a,this._emit("changeOverwrite")},this.getOverwrite=function(){return this.$overwrite},this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)},this.addGutterDecoration=function(a,b){this.$decorations[a]||(this.$decorations[a]=""),this.$decorations[a]+=" "+b,this._emit("changeBreakpoint",{})},this.removeGutterDecoration=function(a,b){this.$decorations[a]=(this.$decorations[a]||"").replace(" "+b,""),this._emit("changeBreakpoint",{})},this.getBreakpoints=function(){return this.$breakpoints},this.setBreakpoints=function(a){this.$breakpoints=[];for(var b=0;b<a.length;b++)this.$breakpoints[a[b]]="ace_breakpoint";this._emit("changeBreakpoint",{})},this.clearBreakpoints=function(){this.$breakpoints=[],this._emit("changeBreakpoint",{})},this.setBreakpoint=function(a,b){b===undefined&&(b="ace_breakpoint"),b?this.$breakpoints[a]=b:delete this.$breakpoints[a],this._emit("changeBreakpoint",{})},this.clearBreakpoint=function(a){delete this.$breakpoints[a],this._emit("changeBreakpoint",{})},this.addMarker=function(a,b,c,d){var e=this.$markerId++,f={range:a,type:c||"line",renderer:typeof c=="function"?c:null,clazz:b,inFront:!!d,id:e};return d?(this.$frontMarkers[e]=f,this._emit("changeFrontMarker")):(this.$backMarkers[e]=f,this._emit("changeBackMarker")),e},this.addDynamicMarker=function(a,b){if(!a.update)return;var c=this.$markerId++;return a.id=c,a.inFront=!!b,b?(this.$frontMarkers[c]=a,this._emit("changeFrontMarker")):(this.$backMarkers[c]=a,this._emit("changeBackMarker")),a},this.removeMarker=function(a){var b=this.$frontMarkers[a]||this.$backMarkers[a];if(!b)return;var c=b.inFront?this.$frontMarkers:this.$backMarkers;b&&(delete c[a],this._emit(b.inFront?"changeFrontMarker":"changeBackMarker"))},this.getMarkers=function(a){return a?this.$frontMarkers:this.$backMarkers},this.setAnnotations=function(a){this.$annotations={};for(var b=0;b<a.length;b++){var c=a[b],d=c.row;this.$annotations[d]?this.$annotations[d].push(c):this.$annotations[d]=[c]}this._emit("changeAnnotation",{})},this.getAnnotations=function(){return this.$annotations||{}},this.clearAnnotations=function(){this.$annotations={},this._emit("changeAnnotation",{})},this.$detectNewLine=function(a){var b=a.match(/^.*?(\r?\n)/m);b?this.$autoNewLine=b[1]:this.$autoNewLine="\n"},this.getWordRange=function(a,b){var c=this.getLine(a),d=!1;b>0&&(d=!!c.charAt(b-1).match(this.tokenRe)),d||(d=!!c.charAt(b).match(this.tokenRe));if(d)var e=this.tokenRe;else if(/^\s+$/.test(c.slice(b-1,b+1)))var e=/\s/;else var e=this.nonTokenRe;var f=b;if(f>0){do f--;while(f>=0&&c.charAt(f).match(e));f++}var g=b;while(g<c.length&&c.charAt(g).match(e))g++;return new k(a,f,a,g)},this.getAWordRange=function(a,b){var c=this.getWordRange(a,b),d=this.getLine(c.end.row);while(d.charAt(c.end.column).match(/[ \t]/))c.end.column+=1;return c},this.setNewLineMode=function(a){this.doc.setNewLineMode(a)},this.getNewLineMode=function(){return this.doc.getNewLineMode()},this.$useWorker=!0,this.setUseWorker=function(a){if(this.$useWorker==a)return;this.$useWorker=a,this.$stopWorker(),a&&this.$startWorker()},this.getUseWorker=function(){return this.$useWorker},this.onReloadTokenizer=function(a){var b=a.data;this.bgTokenizer.start(b.first),this._emit("tokenizerUpdate",a)},this.$modes={},this._loadMode=function(b,c){function i(a){if(e.$modes[b])return c(e.$modes[b]);e.$modes[b]=new a.Mode,e.$modes[b].$id=b,e._emit("loadmode",{name:b,mode:e.$modes[b]}),c(e.$modes[b])}function k(a,b){if(!d.get("packaged"))return b();g.loadScript(d.moduleUrl(a,"mode"),b)}this.$modes["null"]||(this.$modes["null"]=this.$modes["ace/mode/text"]=new j);if(this.$modes[b])return c(this.$modes[b]);var e=this,f;try{f=a(b)}catch(h){}if(f&&f.Mode)return i(f);this.$mode||this.$setModePlaceholder(),k(b,function(){a([b],i)})},this.$setModePlaceholder=function(){this.$mode=this.$modes["null"];var a=this.$mode.getTokenizer();if(!this.bgTokenizer){this.bgTokenizer=new m(a);var b=this;this.bgTokenizer.addEventListener("update",function(a){b._emit("tokenizerUpdate",a)})}else this.bgTokenizer.setTokenizer(a);this.bgTokenizer.setDocument(this.getDocument()),this.tokenRe=this.$mode.tokenRe,this.nonTokenRe=this.$mode.nonTokenRe},this.$mode=null,this.$modeId=null,this.setMode=function(a){a=a||"null";if(typeof a=="string"){if(this.$modeId==a)return;this.$modeId=a;var b=this;this._loadMode(a,function(c){if(b.$modeId!==a)return;b.setMode(c)});return}if(this.$mode===a)return;this.$mode=a,this.$modeId=a.$id,this.$stopWorker(),this.$useWorker&&this.$startWorker();var c=a.getTokenizer();if(c.addEventListener!==undefined){var d=this.onReloadTokenizer.bind(this);c.addEventListener("update",d)}if(!this.bgTokenizer){this.bgTokenizer=new m(c);var b=this;this.bgTokenizer.addEventListener("update",function(a){b._emit("tokenizerUpdate",a)})}else this.bgTokenizer.setTokenizer(c);this.bgTokenizer.setDocument(this.getDocument()),this.bgTokenizer.start(0),this.tokenRe=a.tokenRe,this.nonTokenRe=a.nonTokenRe,this.$setFolding(a.foldingRules),this._emit("changeMode")},this.$stopWorker=function(){this.$worker&&this.$worker.terminate(),this.$worker=null},this.$startWorker=function(){if(typeof Worker!="undefined"&&!a.noWorker)try{this.$worker=this.$mode.createWorker(this)}catch(b){console.log("Could not load worker"),console.log(b),this.$worker=null}else this.$worker=null},this.getMode=function(){return this.$mode},this.$scrollTop=0,this.setScrollTop=function(a){a=Math.round(Math.max(0,a));if(this.$scrollTop===a)return;this.$scrollTop=a,this._emit("changeScrollTop",a)},this.getScrollTop=function(){return this.$scrollTop},this.$scrollLeft=0,this.setScrollLeft=function(a){a=Math.round(Math.max(0,a));if(this.$scrollLeft===a)return;this.$scrollLeft=a,this._emit("changeScrollLeft",a)},this.getScrollLeft=function(){return this.$scrollLeft},this.getScreenWidth=function(){return this.$computeWidth(),this.screenWidth},this.$computeWidth=function(a){if(this.$modified||a){this.$modified=!1;if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit;var b=this.doc.getAllLines(),c=this.$rowLengthCache,d=0,e=0,f=this.$foldData[e],g=f?f.start.row:Infinity,h=b.length;for(var i=0;i<h;i++){if(i>g){i=f.end.row+1;if(i>=h)break;f=this.$foldData[e++],g=f?f.start.row:Infinity}c[i]==null&&(c[i]=this.$getStringScreenWidth(b[i])[0]),c[i]>d&&(d=c[i])}this.screenWidth=d}},this.getLine=function(a){return this.doc.getLine(a)},this.getLines=function(a,b){return this.doc.getLines(a,b)},this.getLength=function(){return this.doc.getLength()},this.getTextRange=function(a){return this.doc.getTextRange(a||this.selection.getRange())},this.insert=function(a,b){return this.doc.insert(a,b)},this.remove=function(a){return this.doc.remove(a)},this.undoChanges=function(a,b){if(!a.length)return;this.$fromUndo=!0;var c=null;for(var d=a.length-1;d!=-1;d--){var e=a[d];e.group=="doc"?(this.doc.revertDeltas(e.deltas),c=this.$getUndoSelection(e.deltas,!0,c)):e.deltas.forEach(function(a){this.addFolds(a.folds)},this)}return this.$fromUndo=!1,c&&this.$undoSelect&&!b&&this.selection.setSelectionRange(c),c},this.redoChanges=function(a,b){if(!a.length)return;this.$fromUndo=!0;var c=null;for(var d=0;d<a.length;d++){var e=a[d];e.group=="doc"&&(this.doc.applyDeltas(e.deltas),c=this.$getUndoSelection(e.deltas,!1,c))}return this.$fromUndo=!1,c&&this.$undoSelect&&!b&&this.selection.setSelectionRange(c),c},this.setUndoSelect=function(a){this.$undoSelect=a},this.$getUndoSelection=function(a,b,c){function d(a){var c=a.action=="insertText"||a.action=="insertLines";return b?!c:c}var e=a[0],f,g,h=!1;d(e)?(f=e.range.clone(),h=!0):(f=k.fromPoints(e.range.start,e.range.start),h=!1);for(var i=1;i<a.length;i++)e=a[i],d(e)?(g=e.range.start,f.compare(g.row,g.column)==-1&&f.setStart(e.range.start),g=e.range.end,f.compare(g.row,g.column)==1&&f.setEnd(e.range.end),h=!0):(g=e.range.start,f.compare(g.row,g.column)==-1&&(f=k.fromPoints(e.range.start,e.range.start)),h=!1);if(c!=null){var j=c.compareRange(f);j==1?f.setStart(c.start):j==-1&&f.setEnd(c.end)}return f},this.replace=function(a,b){return this.doc.replace(a,b)},this.moveText=function(a,b){var c=this.getTextRange(a);this.remove(a);var d=b.row,e=b.column;!a.isMultiLine()&&a.start.row==d&&a.end.column<e&&(e-=c.length);if(a.isMultiLine()&&a.end.row<d){var f=this.doc.$split(c);d-=f.length-1}var g=d+a.end.row-a.start.row,h=a.isMultiLine()?a.end.column:e+a.end.column-a.start.column,i=new k(d,e,g,h);return this.insert(i.start,c),i},this.indentRows=function(a,b,c){c=c.replace(/\t/g,this.getTabString());for(var d=a;d<=b;d++)this.insert({row:d,column:0},c)},this.outdentRows=function(a){var b=a.collapseRows(),c=new k(0,0,0,0),d=this.getTabSize();for(var e=b.start.row;e<=b.end.row;++e){var f=this.getLine(e);c.start.row=e,c.end.row=e;for(var g=0;g<d;++g)if(f.charAt(g)!=" ")break;g<d&&f.charAt(g)=="	"?(c.start.column=g,c.end.column=g+1):(c.start.column=0,c.end.column=g),this.remove(c)}},this.moveLinesUp=function(a,b){if(a<=0)return 0;var c=this.doc.removeLines(a,b);return this.doc.insertLines(a-1,c),-1},this.moveLinesDown=function(a,b){if(b>=this.doc.getLength()-1)return 0;var c=this.doc.removeLines(a,b);return this.doc.insertLines(a+1,c),1},this.duplicateLines=function(a,b){var a=this.$clipRowToDocument(a),b=this.$clipRowToDocument(b),c=this.getLines(a,b);this.doc.insertLines(a,c);var d=b-a+1;return d},this.$clipRowToDocument=function(a){return Math.max(0,Math.min(a,this.doc.getLength()-1))},this.$clipColumnToRow=function(a,b){return b<0?0:Math.min(this.doc.getLine(a).length,b)},this.$clipPositionToDocument=function(a,b){b=Math.max(0,b);if(a<0)a=0,b=0;else{var c=this.doc.getLength();a>=c?(a=c-1,b=this.doc.getLine(c-1).length):b=Math.min(this.doc.getLine(a).length,b)}return{row:a,column:b}},this.$clipRangeToDocument=function(a){a.start.row<0?(a.start.row=0,a.start.column=0):a.start.column=this.$clipColumnToRow(a.start.row,a.start.column);var b=this.doc.getLength()-1;return a.end.row>b?(a.end.row=b,a.end.column=this.doc.getLine(b).length):a.end.column=this.$clipColumnToRow(a.end.row,a.end.column),a},this.$wrapLimit=80,this.$useWrapMode=!1,this.$wrapLimitRange={min:null,max:null},this.setUseWrapMode=function(a){if(a!=this.$useWrapMode){this.$useWrapMode=a,this.$modified=!0,this.$resetRowCache(0);if(a){var b=this.getLength();this.$wrapData=[];for(var c=0;c<b;c++)this.$wrapData.push([]);this.$updateWrapData(0,b-1)}this._emit("changeWrapMode")}},this.getUseWrapMode=function(){return this.$useWrapMode},this.setWrapLimitRange=function(a,b){if(this.$wrapLimitRange.min!==a||this.$wrapLimitRange.max!==b)this.$wrapLimitRange.min=a,this.$wrapLimitRange.max=b,this.$modified=!0,this._emit("changeWrapMode")},this.adjustWrapLimit=function(a){var b=this.$constrainWrapLimit(a);return b!=this.$wrapLimit&&b>0?(this.$wrapLimit=b,this.$modified=!0,this.$useWrapMode&&(this.$updateWrapData(0,this.getLength()-1),this.$resetRowCache(0),this._emit("changeWrapLimit")),!0):!1},this.$constrainWrapLimit=function(a){var b=this.$wrapLimitRange.min;b&&(a=Math.max(b,a));var c=this.$wrapLimitRange.max;return c&&(a=Math.min(c,a)),Math.max(1,a)},this.getWrapLimit=function(){return this.$wrapLimit},this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}},this.$updateInternalDataOnChange=function(a){var b=this.$useWrapMode,c,d=a.data.action,e=a.data.range.start.row,f=a.data.range.end.row,g=a.data.range.start,h=a.data.range.end,i=null;d.indexOf("Lines")!=-1?(d=="insertLines"?f=e+a.data.lines.length:f=e,c=a.data.lines?a.data.lines.length:f-e):c=f-e;if(c!=0)if(d.indexOf("remove")!=-1){this[b?"$wrapData":"$rowLengthCache"].splice(e,c);var j=this.$foldData;i=this.getFoldsInRange(a.data.range),this.removeFolds(i);var k=this.getFoldLine(h.row),l=0;if(k){k.addRemoveChars(h.row,h.column,g.column-h.column),k.shiftRow(-c);var m=this.getFoldLine(e);m&&m!==k&&(m.merge(k),k=m),l=j.indexOf(k)+1}for(l;l<j.length;l++){var k=j[l];k.start.row>=h.row&&k.shiftRow(-c)}f=e}else{var n;if(b){n=[e,0];for(var o=0;o<c;o++)n.push([]);this.$wrapData.splice.apply(this.$wrapData,n)}else n=Array(c),n.unshift(e,0),this.$rowLengthCache.splice.apply(this.$rowLengthCache,n);var j=this.$foldData,k=this.getFoldLine(e),l=0;if(k){var p=k.range.compareInside(g.row,g.column);p==0?(k=k.split(g.row,g.column),k.shiftRow(c),k.addRemoveChars(f,0,h.column-g.column)):p==-1&&(k.addRemoveChars(e,0,h.column-g.column),k.shiftRow(c)),l=j.indexOf(k)+1}for(l;l<j.length;l++){var k=j[l];k.start.row>=e&&k.shiftRow(c)}}else{c=Math.abs(a.data.range.start.column-a.data.range.end.column),d.indexOf("remove")!=-1&&(i=this.getFoldsInRange(a.data.range),this.removeFolds(i),c=-c);var k=this.getFoldLine(e);k&&k.addRemoveChars(e,g.column,c)}return b&&this.$wrapData.length!=this.doc.getLength()&&console.error("doc.getLength() and $wrapData.length have to be the same!"),b?this.$updateWrapData(e,f):this.$updateRowLengthCache(e,f),i},this.$updateRowLengthCache=function(a,b,c){this.$rowLengthCache[a]=null,this.$rowLengthCache[b]=null},this.$updateWrapData=function(a,b){var c=this.doc.getAllLines(),d=this.getTabSize(),e=this.$wrapData,g=this.$wrapLimit,h,j,k=a;b=Math.min(b,c.length-1);while(k<=b){j=this.getFoldLine(k,j);if(!j)h=this.$getDisplayTokens(f.stringTrimRight(c[k])),e[k]=this.$computeWrapSplits(h,g,d),k++;else{h=[],j.walk(function(a,b,d,e){var f;if(a){f=this.$getDisplayTokens(a,h.length),f[0]=i;for(var g=1;g<f.length;g++)f[g]=l}else f=this.$getDisplayTokens(c[b].substring(e,d),h.length);h=h.concat(f)}.bind(this),j.end.row,c[j.end.row].length+1);while(h.length!=0&&h[h.length-1]>=p)h.pop();e[j.start.row]=this.$computeWrapSplits(h,g,d),k=j.end.row+1}}};var b=1,c=2,i=3,l=4,o=9,p=10,q=11,r=12;this.$computeWrapSplits=function(a,b){function g(b){var d=a.slice(e,b),g=d.length;d.join("").replace(/12/g,function(){g-=1}).replace(/2/g,function(){g-=1}),f+=g,c.push(f),e=b}if(a.length==0)return[];var c=[],d=a.length,e=0,f=0;while(d-e>b){var h=e+b;if(a[h]>=p){while(a[h]>=p)h++;g(h);continue}if(a[h]==i||a[h]==l){for(h;h!=e-1;h--)if(a[h]==i)break;if(h>e){g(h);continue}h=e+b;for(h;h<a.length;h++)if(a[h]!=l)break;if(h==a.length)break;g(h);continue}var j=Math.max(h-10,e-1);while(h>j&&a[h]<i)h--;while(h>j&&a[h]==o)h--;if(h>j){g(++h);continue}h=e+b,g(h)}return c},this.$getDisplayTokens=function(a,d){var e=[],f;d=d||0;for(var g=0;g<a.length;g++){var h=a.charCodeAt(g);if(h==9){f=this.getScreenTabSize(e.length+d),e.push(q);for(var i=1;i<f;i++)e.push(r)}else h==32?e.push(p):h>39&&h<48||h>57&&h<64?e.push(o):h>=4352&&s(h)?e.push(b,c):e.push(b)}return e},this.$getStringScreenWidth=function(a,b,c){if(b==0)return[0,0];b==null&&(b=Infinity),c=c||0;var d,e;for(e=0;e<a.length;e++){d=a.charCodeAt(e),d==9?c+=this.getScreenTabSize(c):d>=4352&&s(d)?c+=2:c+=1;if(c>b)break}return[c,e]},this.getRowLength=function(a){return!this.$useWrapMode||!this.$wrapData[a]?1:this.$wrapData[a].length+1},this.getScreenLastRowColumn=function(a){var b=this.screenToDocumentPosition(a,Number.MAX_VALUE);return this.documentToScreenColumn(b.row,b.column)},this.getDocumentLastRowColumn=function(a,b){var c=this.documentToScreenRow(a,b);return this.getScreenLastRowColumn(c)},this.getDocumentLastRowColumnPosition=function(a,b){var c=this.documentToScreenRow(a,b);return this.screenToDocumentPosition(c,Number.MAX_VALUE/10)},this.getRowSplitData=function(a){return this.$useWrapMode?this.$wrapData[a]:undefined},this.getScreenTabSize=function(a){return this.$tabSize-a%this.$tabSize},this.screenToDocumentRow=function(a,b){return this.screenToDocumentPosition(a,b).row},this.screenToDocumentColumn=function(a,b){return this.screenToDocumentPosition(a,b).column},this.screenToDocumentPosition=function(a,b){if(a<0)return{row:0,column:0};var c,d=0,e=0,f,g=0,h=0,i=this.$screenRowCache,j=this.$getRowCacheIndex(i,a);if(0<j&&j<i.length)var g=i[j],d=this.$docRowCache[j],k=a>g||a==g&&j==i.length-1;else var k=!0;var l=this.getLength()-1,m=this.getNextFoldLine(d),n=m?m.start.row:Infinity;while(g<=a){h=this.getRowLength(d);if(g+h-1>=a||d>=l)break;g+=h,d++,d>n&&(d=m.end.row+1,m=this.getNextFoldLine(d,m),n=m?m.start.row:Infinity),k&&(this.$docRowCache.push(d),this.$screenRowCache.push(g))}if(m&&m.start.row<=d)c=this.getFoldDisplayLine(m),d=m.start.row;else{if(g+h<=a||d>l)return{row:l,column:this.getLine(l).length};c=this.getLine(d),m=null}if(this.$useWrapMode){var o=this.$wrapData[d];o&&(f=o[a-g],a>g&&o.length&&(e=o[a-g-1]||o[o.length-1],c=c.substring(e)))}return e+=this.$getStringScreenWidth(c,b)[1],this.$useWrapMode&&e>=f&&(e=f-1),m?m.idxToPosition(e):{row:d,column:e}},this.documentToScreenPosition=function(a,b){if(typeof b=="undefined")var c=this.$clipPositionToDocument(a.row,a.column);else c=this.$clipPositionToDocument(a,b);a=c.row,b=c.column;var d=0,e=null,f=null;f=this.getFoldAt(a,b,1),f&&(a=f.start.row,b=f.start.column);var g,h=0,i=this.$docRowCache,j=this.$getRowCacheIndex(i,a);if(0<j&&j<i.length)var h=i[j],d=this.$screenRowCache[j],k=a>h||a==h&&j==i.length-1;else var k=!0;var l=this.getNextFoldLine(h),m=l?l.start.row:Infinity;while(h<a){if(h>=m){g=l.end.row+1;if(g>a)break;l=this.getNextFoldLine(g,l),m=l?l.start.row:Infinity}else g=h+1;d+=this.getRowLength(h),h=g,k&&(this.$docRowCache.push(h),this.$screenRowCache.push(d))}var n="";l&&h>=m?(n=this.getFoldDisplayLine(l,a,b),e=l.start.row):(n=this.getLine(a).substring(0,b),e=a);if(this.$useWrapMode){var o=this.$wrapData[e],p=0;while(n.length>=o[p])d++,p++;n=n.substring(o[p-1]||0,n.length)}return{row:d,column:this.$getStringScreenWidth(n)[0]}},this.documentToScreenColumn=function(a,b){return this.documentToScreenPosition(a,b).column},this.documentToScreenRow=function(a,b){return this.documentToScreenPosition(a,b).row},this.getScreenLength=function(){var a=0,b=null;if(!this.$useWrapMode){a=this.getLength();var c=this.$foldData;for(var d=0;d<c.length;d++)b=c[d],a-=b.end.row-b.start.row}else{var e=this.$wrapData.length,f=0,d=0,b=this.$foldData[d++],g=b?b.start.row:Infinity;while(f<e)a+=this.$wrapData[f].length+1,f++,f>g&&(f=b.end.row+1,b=this.$foldData[d++],g=b?b.start.row:Infinity)}return a}}).call(o.prototype),a("./edit_session/folding").Folding.call(o.prototype),a("./edit_session/bracket_match").BracketMatch.call(o.prototype),b.EditSession=o}),define("ace/config",["require","exports","module","ace/lib/lang"],function(a,b,c){function g(a){return a.replace(/-(.)/g,function(a,b){return b.toUpperCase()})}"no use strict";var d=a("./lib/lang"),e=function(){return this}(),f={packaged:!1,workerPath:"",modePath:"",themePath:"",suffix:".js",$moduleUrls:{}};b.get=function(a){if(!f.hasOwnProperty(a))throw new Error("Unknown config key: "+a);return f[a]},b.set=function(a,b){if(!f.hasOwnProperty(a))throw new Error("Unknown config key: "+a);f[a]=b},b.all=function(){return d.copyObject(f)},b.moduleUrl=function(a,b){if(f.$moduleUrls[a])return f.$moduleUrls[a];var c=a.split("/");b=b||c[c.length-2]||"";var d=c[c.length-1].replace(b,"").replace(/(^[\-_])|([\-_]$)/,"");return!d&&c.length>1&&(d=c[c.length-2]),this.get(b+"Path")+"/"+b+"-"+d+this.get("suffix")},b.setModuleUrl=function(a,b){return f.$moduleUrls[a]=b},b.init=function(){f.packaged=a.packaged||c.packaged||e.define&&define.packaged;if(!e.document)return"";var d={},h="",i=document.getElementsByTagName("script");for(var j=0;j<i.length;j++){var k=i[j],l=k.src||k.getAttribute("src");if(!l)continue;var m=k.attributes;for(var n=0,o=m.length;n<o;n++){var p=m[n];p.name.indexOf("data-ace-")===0&&(d[g(p.name.replace(/^data-ace-/,""))]=p.value)}var q=l.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);q&&(h=q[1])}h&&(d.base=d.base||h,d.packaged=!0),d.workerPath=d.workerPath||d.base,d.modePath=d.modePath||d.base,d.themePath=d.themePath||d.base,delete d.base;for(var r in d)typeof d[r]!="undefined"&&b.set(r,d[r])}}),define("ace/lib/net",["require","exports","module","ace/lib/useragent"],function(a,b,c){var d=a("./useragent");b.get=function(a,c){var d=b.createXhr();d.open("GET",a,!0),d.onreadystatechange=function(a){d.readyState===4&&c(d.responseText)},d.send(null)};var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];b.createXhr=function(){var a,b,c;if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;for(b=0;b<3;b++){c=e[b];try{a=new ActiveXObject(c)}catch(d){}if(a){e=[c];break}}if(!a)throw new Error("createXhr(): XMLHttpRequest not available");return a},b.loadScript=function(a,b){var c=document.getElementsByTagName("head")[0],e=document.createElement("script");e.src=a,c.appendChild(e),d.isOldIE?e.onreadystatechange=function(){this.readyState=="loaded"&&b()}:e.onload=b}}),define("ace/lib/event_emitter",["require","exports","module"],function(a,b,c){var d={};d._emit=d._dispatchEvent=function(a,b){this._eventRegistry=this._eventRegistry||{},this._defaultHandlers=this._defaultHandlers||{};var c=this._eventRegistry[a]||[],d=this._defaultHandlers[a];if(!c.length&&!d)return;b=b||{},b.type||(b.type=a),b.stopPropagation||(b.stopPropagation=function(){this.propagationStopped=!0}),b.preventDefault||(b.preventDefault=function(){this.defaultPrevented=!0});for(var e=0;e<c.length;e++){c[e](b);if(b.propagationStopped)break}if(d&&!b.defaultPrevented)return d(b)},d.setDefaultHandler=function(a,b){this._defaultHandlers=this._defaultHandlers||{};if(this._defaultHandlers[a])throw new Error("The default handler for '"+a+"' is already set");this._defaultHandlers[a]=b},d.on=d.addEventListener=function(a,b){this._eventRegistry=this._eventRegistry||{};var c=this._eventRegistry[a];c||(c=this._eventRegistry[a]=[]),c.indexOf(b)==-1&&c.push(b)},d.removeListener=d.removeEventListener=function(a,b){this._eventRegistry=this._eventRegistry||{};var c=this._eventRegistry[a];if(!c)return;var d=c.indexOf(b);d!==-1&&c.splice(d,1)},d.removeAllListeners=function(a){this._eventRegistry&&(this._eventRegistry[a]=[])},b.EventEmitter=d}),define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/lang"),f=a("./lib/event_emitter").EventEmitter,g=a("./range").Range,h=function(a){this.session=a,this.doc=a.getDocument(),this.clearSelection(),this.lead=this.selectionLead=this.doc.createAnchor(0,0),this.anchor=this.selectionAnchor=this.doc.createAnchor(0,0);var b=this;this.lead.on("change",function(a){b._emit("changeCursor"),b.$isEmpty||b._emit("changeSelection"),!b.$keepDesiredColumnOnChange&&a.old.column!=a.value.column&&(b.$desiredColumn=null)}),this.selectionAnchor.on("change",function(){b.$isEmpty||b._emit("changeSelection")})};(function(){d.implement(this,f),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return this.isEmpty()?!1:this.getRange().isMultiLine()},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(a,b){this.anchor.setPosition(a,b),this.$isEmpty&&(this.$isEmpty=!1,this._emit("changeSelection"))},this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.shiftSelection=function(a){if(this.$isEmpty){this.moveCursorTo(this.lead.row,this.lead.column+a);return}var b=this.getSelectionAnchor(),c=this.getSelectionLead(),d=this.isBackwards();(!d||b.column!==0)&&this.setSelectionAnchor(b.row,b.column+a),(d||c.column!==0)&&this.$moveSelection(function(){this.moveCursorTo(c.row,c.column+a)})},this.isBackwards=function(){var a=this.anchor,b=this.lead;return a.row>b.row||a.row==b.row&&a.column>b.column},this.getRange=function(){var a=this.anchor,b=this.lead;return this.isEmpty()?g.fromPoints(b,b):this.isBackwards()?g.fromPoints(b,a):g.fromPoints(a,b)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){var a=this.doc.getLength()-1;this.setSelectionAnchor(0,0),this.moveCursorTo(a,this.doc.getLine(a).length)},this.setRange=this.setSelectionRange=function(a,b){b?(this.setSelectionAnchor(a.end.row,a.end.column),this.selectTo(a.start.row,a.start.column)):(this.setSelectionAnchor(a.start.row,a.start.column),this.selectTo(a.end.row,a.end.column)),this.$desiredColumn=null},this.$moveSelection=function(a){var b=this.lead;this.$isEmpty&&this.setSelectionAnchor(b.row,b.column),a.call(this)},this.selectTo=function(a,b){this.$moveSelection(function(){this.moveCursorTo(a,b)})},this.selectToPosition=function(a){this.$moveSelection(function(){this.moveCursorToPosition(a)})},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(a,b){if(typeof b=="undefined"){var c=a||this.lead;a=c.row,b=c.column}return this.session.getWordRange(a,b)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var a=this.getCursor(),b=this.session.getAWordRange(a.row,a.column);this.setSelectionRange(b)},this.getLineRange=function(a,b){var c=typeof a=="number"?a:this.lead.row,d,e=this.session.getFoldLine(c);return e?(c=e.start.row,d=e.end.row):d=c,b?new g(c,0,d,this.session.getLine(d).length):new g(c,0,d+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.moveCursorLeft=function(){var a=this.lead.getPosition(),b;if(b=this.session.getFoldAt(a.row,a.column,-1))this.moveCursorTo(b.start.row,b.start.column);else if(a.column==0)a.row>0&&this.moveCursorTo(a.row-1,this.doc.getLine(a.row-1).length);else{var c=this.session.getTabSize();this.session.isTabStop(a)&&this.doc.getLine(a.row).slice(a.column-c,a.column).split(" ").length-1==c?this.moveCursorBy(0,-c):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var a=this.lead.getPosition(),b;if(b=this.session.getFoldAt(a.row,a.column,1))this.moveCursorTo(b.end.row,b.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else{var c=this.session.getTabSize(),a=this.lead;this.session.isTabStop(a)&&this.doc.getLine(a.row).slice(a.column,a.column+c).split(" ").length-1==c?this.moveCursorBy(0,c):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var a=this.lead.row,b=this.lead.column,c=this.session.documentToScreenRow(a,b),d=this.session.screenToDocumentPosition(c,0),e=this.session.getDisplayLine(a,null,d.row,d.column),f=e.match(/^\s*/);f[0].length==b?this.moveCursorTo(d.row,d.column):this.moveCursorTo(d.row,d.column+f[0].length)},this.moveCursorLineEnd=function(){var a=this.lead,b=this.session.getDocumentLastRowColumnPosition(a.row,a.column);if(this.lead.column==b.column){var c=this.session.getLine(b.row);if(b.column==c.length){var d=c.search(/\s+$/);d>0&&(b.column=d)}}this.moveCursorTo(b.row,b.column)},this.moveCursorFileEnd=function(){var a=this.doc.getLength()-1,b=this.doc.getLine(a).length;this.moveCursorTo(a,b)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var a=this.lead.row,b=this.lead.column,c=this.doc.getLine(a),d=c.substring(b),e;this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var f=this.session.getFoldAt(a,b,1);if(f){this.moveCursorTo(f.end.row,f.end.column);return}if(e=this.session.nonTokenRe.exec(d))b+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,d=c.substring(b);if(b>=c.length){this.moveCursorTo(a,c.length),this.moveCursorRight(),a<this.doc.getLength()-1&&this.moveCursorWordRight();return}if(e=this.session.tokenRe.exec(d))b+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0;this.moveCursorTo(a,b)},this.moveCursorLongWordLeft=function(){var a=this.lead.row,b=this.lead.column,c;if(c=this.session.getFoldAt(a,b,-1)){this.moveCursorTo(c.start.row,c.start.column);return}var d=this.session.getFoldStringAt(a,b,-1);d==null&&(d=this.doc.getLine(a).substring(0,b));var f=e.stringReverse(d),g;this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;if(g=this.session.nonTokenRe.exec(f))b-=this.session.nonTokenRe.lastIndex,f=f.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0;if(b<=0){this.moveCursorTo(a,0),this.moveCursorLeft(),a>0&&this.moveCursorWordLeft();return}if(g=this.session.tokenRe.exec(f))b-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0;this.moveCursorTo(a,b)},this.$shortWordEndIndex=function(a){var b,c=0,d,e=/\s/,f=this.session.tokenRe;f.lastIndex=0;if(b=this.session.tokenRe.exec(a))c=this.session.tokenRe.lastIndex;else{while((d=a[c])&&e.test(d))c++;if(c<=1){f.lastIndex=0;while((d=a[c])&&!f.test(d)){f.lastIndex=0,c++;if(e.test(d)){if(c>2){c--;break}while((d=a[c])&&e.test(d))c++;if(c>2)break}}}}return f.lastIndex=0,c},this.moveCursorShortWordRight=function(){var a=this.lead.row,b=this.lead.column,c=this.doc.getLine(a),d=c.substring(b),e=this.session.getFoldAt(a,b,1);if(e)return this.moveCursorTo(e.end.row,e.end.column);if(b==c.length){var f=this.doc.getLength();do a++,d=this.doc.getLine(a);while(a<f&&/^\s*$/.test(d));/^\s+/.test(d)||(d=""),b=0}var g=this.$shortWordEndIndex(d);this.moveCursorTo(a,b+g)},this.moveCursorShortWordLeft=function(){var a=this.lead.row,b=this.lead.column,c;if(c=this.session.getFoldAt(a,b,-1))return this.moveCursorTo(c.start.row,c.start.column);var d=this.session.getLine(a).substring(0,b);if(b==0){do a--,d=this.doc.getLine(a);while(a>0&&/^\s*$/.test(d));b=d.length,/\s+$/.test(d)||(d="")}var f=e.stringReverse(d),g=this.$shortWordEndIndex(f);return this.moveCursorTo(a,b-g)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(a,b){var c=this.session.documentToScreenPosition(this.lead.row,this.lead.column);b===0&&(this.$desiredColumn?c.column=this.$desiredColumn:this.$desiredColumn=c.column);var d=this.session.screenToDocumentPosition(c.row+a,c.column);this.moveCursorTo(d.row,d.column+b,b===0)},this.moveCursorToPosition=function(a){this.moveCursorTo(a.row,a.column)},this.moveCursorTo=function(a,b,c){var d=this.session.getFoldAt(a,b,1);d&&(a=d.start.row,b=d.start.column),this.$keepDesiredColumnOnChange=!0,this.lead.setPosition(a,b),this.$keepDesiredColumnOnChange=!1,c||(this.$desiredColumn=null)},this.moveCursorToScreen=function(a,b,c){var d=this.session.screenToDocumentPosition(a,b);this.moveCursorTo(d.row,d.column,c)},this.detach=function(){this.lead.detach(),this.anchor.detach(),this.session=this.doc=null},this.fromOrientedRange=function(a){this.setSelectionRange(a,a.cursor==a.start),this.$desiredColumn=a.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(a){var b=this.getRange();return a?(a.start.column=b.start.column,a.start.row=b.start.row,a.end.column=b.end.column,a.end.row=b.end.row):a=b,a.cursor=this.isBackwards()?a.start:a.end,a.desiredColumn=this.$desiredColumn,a}}).call(h.prototype),b.Selection=h}),define("ace/range",["require","exports","module"],function(a,b,c){var d=function(a,b,c,d){this.start={row:a,column:b},this.end={row:c,column:d}};(function(){this.isEqual=function(a){return this.start.row==a.start.row&&this.end.row==a.end.row&&this.start.column==a.start.column&&this.end.column==a.end.column},this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"},this.contains=function(a,b){return this.compare(a,b)==0},this.compareRange=function(a){var b,c=a.end,d=a.start;return b=this.compare(c.row,c.column),b==1?(b=this.compare(d.row,d.column),b==1?2:b==0?1:0):b==-1?-2:(b=this.compare(d.row,d.column),b==-1?-1:b==1?42:0)},this.comparePoint=function(a){return this.compare(a.row,a.column)},this.containsRange=function(a){return this.comparePoint(a.start)==0&&this.comparePoint(a.end)==0},this.intersects=function(a){var b=this.compareRange(a);return b==-1||b==0||b==1},this.isEnd=function(a,b){return this.end.row==a&&this.end.column==b},this.isStart=function(a,b){return this.start.row==a&&this.start.column==b},this.setStart=function(a,b){typeof a=="object"?(this.start.column=a.column,this.start.row=a.row):(this.start.row=a,this.start.column=b)},this.setEnd=function(a,b){typeof a=="object"?(this.end.column=a.column,this.end.row=a.row):(this.end.row=a,this.end.column=b)},this.inside=function(a,b){return this.compare(a,b)==0?this.isEnd(a,b)||this.isStart(a,b)?!1:!0:!1},this.insideStart=function(a,b){return this.compare(a,b)==0?this.isEnd(a,b)?!1:!0:!1},this.insideEnd=function(a,b){return this.compare(a,b)==0?this.isStart(a,b)?!1:!0:!1},this.compare=function(a,b){return!this.isMultiLine()&&a===this.start.row?b<this.start.column?-1:b>this.end.column?1:0:a<this.start.row?-1:a>this.end.row?1:this.start.row===a?b>=this.start.column?0:-1:this.end.row===a?b<=this.end.column?0:1:0},this.compareStart=function(a,b){return this.start.row==a&&this.start.column==b?-1:this.compare(a,b)},this.compareEnd=function(a,b){return this.end.row==a&&this.end.column==b?1:this.compare(a,b)},this.compareInside=function(a,b){return this.end.row==a&&this.end.column==b?1:this.start.row==a&&this.start.column==b?-1:this.compare(a,b)},this.clipRows=function(a,b){if(this.end.row>b)var c={row:b+1,column:0};if(this.start.row>b)var e={row:b+1,column:0};if(this.start.row<a)var e={row:a,column:0};if(this.end.row<a)var c={row:a,column:0};return d.fromPoints(e||this.start,c||this.end)},this.extend=function(a,b){var c=this.compare(a,b);if(c==0)return this;if(c==-1)var e={row:a,column:b};else var f={row:a,column:b};return d.fromPoints(e||this.start,f||this.end)},this.isEmpty=function(){return this.start.row==this.end.row&&this.start.column==this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return d.fromPoints(this.start,this.end)},this.collapseRows=function(){return this.end.column==0?new d(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new d(this.start.row,0,this.end.row,0)},this.toScreenRange=function(a){var b=a.documentToScreenPosition(this.start),c=a.documentToScreenPosition(this.end);return new d(b.row,b.column,c.row,c.column)}}).call(d.prototype),d.fromPoints=function(a,b){return new d(a.row,a.column,b.row,b.column)},b.Range=d}),define("ace/mode/text",["require","exports","module","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour","ace/unicode"],function(a,b,c){var d=a("../tokenizer").Tokenizer,e=a("./text_highlight_rules").TextHighlightRules,f=a("./behaviour").Behaviour,g=a("../unicode"),h=function(){this.$tokenizer=new d((new e).getRules()),this.$behaviour=new f};(function(){this.tokenRe=new RegExp("^["+g.packages.L+g.packages.Mn+g.packages.Mc+g.packages.Nd+g.packages.Pc+"\\$_]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+g.packages.L+g.packages.Mn+g.packages.Mc+g.packages.Nd+g.packages.Pc+"\\$_]|s])+","g"),this.getTokenizer=function(){return this.$tokenizer},this.toggleCommentLines=function(a,b,c,d){},this.getNextLineIndent=function(a,b,c){return""},this.checkOutdent=function(a,b,c){return!1},this.autoOutdent=function(a,b,c){},this.$getIndent=function(a){var b=a.match(/^(\s+)/);return b?b[1]:""},this.createWorker=function(a){return null},this.createModeDelegates=function(a){if(!this.$embeds)return;this.$modes={};for(var b=0;b<this.$embeds.length;b++)a[this.$embeds[b]]&&(this.$modes[this.$embeds[b]]=new a[this.$embeds[b]]);var c=["toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction"];for(var b=0;b<c.length;b++)(function(a){var d=c[b],e=a[d];a[c[b]]=function(){return this.$delegator(d,arguments,e)}})(this)},this.$delegator=function(a,b,c){var d=b[0];for(var e=0;e<this.$embeds.length;e++){if(!this.$modes[this.$embeds[e]])continue;var f=d.split(this.$embeds[e]);if(!f[0]&&f[1]){b[0]=f[1];var g=this.$modes[this.$embeds[e]];return g[a].apply(g,b)}}var h=c.apply(this,b);return c?h:undefined},this.transformAction=function(a,b,c,d,e){if(this.$behaviour){var f=this.$behaviour.getBehaviours();for(var g in f)if(f[g][b]){var h=f[g][b].apply(this,arguments);if(h)return h}}}}).call(h.prototype),b.Mode=h}),define("ace/tokenizer",["require","exports","module"],function(a,b,c){var d=function(a,b){b=b?"g"+b:"g",this.rules=a,this.regExps={},this.matchMappings={};for(var c in this.rules){var d=this.rules[c],e=d,f=[],g=0,h=this.matchMappings[c]={};for(var i=0;i<e.length;i++){e[i].regex instanceof RegExp&&(e[i].regex=e[i].regex.toString().slice(1,-1));var j=(new RegExp("(?:("+e[i].regex+")|(.))")).exec("a").length-2,k=e[i].regex.replace(/\\([0-9]+)/g,function(a,b){return"\\"+(parseInt(b,10)+g+1)});if(j>1&&e[i].token.length!==j-1)throw new Error("Matching groups and length of the token array don't match in rule #"+i+" of state "+c);h[g]={rule:i,len:j},g+=j,f.push(k)}this.regExps[c]=new RegExp("(?:("+f.join(")|(")+")|(.))",b)}};(function(){this.getLineTokens=function(a,b){var c=b||"start",d=this.rules[c],e=this.matchMappings[c],f=this.regExps[c];f.lastIndex=0;var g,h=[],i=0,j={type:null,value:""};while(g=f.exec(a)){var k="text",l=null,m=[g[0]];for(var n=0;n<g.length-2;n++){if(g[n+1]===undefined)continue;l=d[e[n].rule],e[n].len>1&&(m=g.slice(n+2,n+1+e[n].len)),typeof l.token=="function"?k=l.token.apply(this,m):k=l.token,l.next&&(c=l.next,d=this.rules[c],e=this.matchMappings[c],i=f.lastIndex,f=this.regExps[c],f.lastIndex=i);break}if(m[0]){typeof k=="string"&&(m=[m.join("")],k=[k]);for(var n=0;n<m.length;n++){if(!m[n])continue;(!l||l.merge||k[n]==="text")&&j.type===k[n]?j.value+=m[n]:(j.type&&h.push(j),j={type:k[n],value:m[n]})}}if(i==a.length)break;i=f.lastIndex}return j.type&&h.push(j),{tokens:h,state:c}}}).call(d.prototype),b.Tokenizer=d}),define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(a,b,c){var d=a("../lib/lang"),e=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{token:"text",regex:".+"}]}};(function(){this.addRules=function(a,b){for(var c in a){var d=a[c];for(var e=0;e<d.length;e++){var f=d[e];f.next&&(f.next=b+f.next)}this.$rules[b+c]=d}},this.getRules=function(){return this.$rules},this.embedRules=function(a,b,c,e){var f=(new a).getRules();if(e)for(var g=0;g<e.length;g++)e[g]=b+e[g];else{e=[];for(var h in f)e.push(b+h)}this.addRules(f,b);for(var g=0;g<e.length;g++)Array.prototype.unshift.apply(this.$rules[e[g]],d.deepCopy(c));this.$embeds||(this.$embeds=[]),this.$embeds.push(b)},this.getEmbeds=function(){return this.$embeds}}).call(e.prototype),b.TextHighlightRules=e}),define("ace/mode/behaviour",["require","exports","module"],function(a,b,c){var d=function(){this.$behaviours={}};(function(){this.add=function(a,b,c){switch(undefined){case this.$behaviours:this.$behaviours={};case this.$behaviours[a]:this.$behaviours[a]={}}this.$behaviours[a][b]=c},this.addBehaviours=function(a){for(var b in a)for(var c in a[b])this.add(b,c,a[b][c])},this.remove=function(a){this.$behaviours&&this.$behaviours[a]&&delete this.$behaviours[a]},this.inherit=function(a,b){if(typeof a=="function")var c=(new a).getBehaviours(b);else var c=a.getBehaviours(b);this.addBehaviours(c)},this.getBehaviours=function(a){if(!a)return this.$behaviours;var b={};for(var c=0;c<a.length;c++)this.$behaviours[a[c]]&&(b[a[c]]=this.$behaviours[a[c]]);return b}}).call(d.prototype),b.Behaviour=d}),define("ace/unicode",["require","exports","module"],function(a,b,c){function d(a){var c=/\w{4}/g;for(var d in a)b.packages[d]=a[d].replace(c,"\\u$&")}b.packages={},d({L:"0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Ll:"0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",Lu:"0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",Lt:"01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lm:"02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",Lo:"01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",M:"0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",Mn:"0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Mc:"0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",Me:"0488048906DE20DD-20E020E2-20E4A670-A672",N:"0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nd:"0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl:"16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",No:"00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",P:"0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",Pd:"002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",Ps:"0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",Pe:"0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",Pi:"00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",Pf:"00BB2019201D203A2E032E052E0A2E0D2E1D2E21",Pc:"005F203F20402054FE33FE34FE4D-FE4FFF3F",Po:"0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",S:"0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",Sm:"002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",Sc:"002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",Sk:"005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",So:"00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",Z:"002000A01680180E2000-200A20282029202F205F3000",Zs:"002000A01680180E2000-200A202F205F3000",Zl:"2028",Zp:"2029",C:"0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",Cc:"0000-001F007F-009F",Cf:"00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",Co:"E000-F8FF",Cs:"D800-DFFF",Cn:"03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"})}),define("ace/document",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/range","ace/anchor"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/event_emitter").EventEmitter,f=a("./range").Range,g=a("./anchor").Anchor,h=function(a){this.$lines=[],a.length==0?this.$lines=[""]:Array.isArray(a)?this.insertLines(0,a):this.insert({row:0,column:0},a)};(function(){d.implement(this,e),this.setValue=function(a){var b=this.getLength();this.remove(new f(0,0,b,this.getLine(b-1).length)),this.insert({row:0,column:0},a)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(a,b){return new g(this,a,b)},"aaa".split(/a/).length==0?this.$split=function(a){return a.replace(/\r\n|\r/g,"\n").split("\n")}:this.$split=function(a){return a.split(/\r\n|\r|\n/)},this.$detectNewLine=function(a){var b=a.match(/^.*?(\r\n|\r|\n)/m);b?this.$autoNewLine=b[1]:this.$autoNewLine="\n"},this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n";case"unix":return"\n";case"auto":return this.$autoNewLine}},this.$autoNewLine="\n",this.$newLineMode="auto",this.setNewLineMode=function(a){if(this.$newLineMode===a)return;this.$newLineMode=a},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(a){return a=="\r\n"||a=="\r"||a=="\n"},this.getLine=function(a){return this.$lines[a]||""},this.getLines=function(a,b){return this.$lines.slice(a,b+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(a){if(a.start.row==a.end.row)return this.$lines[a.start.row].substring(a.start.column,a.end.column);var b=this.getLines(a.start.row+1,a.end.row-1);return b.unshift((this.$lines[a.start.row]||"").substring(a.start.column)),b.push((this.$lines[a.end.row]||"").substring(0,a.end.column)),b.join(this.getNewLineCharacter())},this.$clipPosition=function(a){var b=this.getLength();return a.row>=b&&(a.row=Math.max(0,b-1),a.column=this.getLine(b-1).length),a},this.insert=function(a,b){if(!b||b.length===0)return a;a=this.$clipPosition(a),this.getLength()<=1&&this.$detectNewLine(b);var c=this.$split(b),d=c.splice(0,1)[0],e=c.length==0?null:c.splice(c.length-1,1)[0];return a=this.insertInLine(a,d),e!==null&&(a=this.insertNewLine(a),a=this.insertLines(a.row,c),a=this.insertInLine(a,e||"")),a},this.insertLines=function(a,b){if(b.length==0)return{row:a,column:0};if(b.length>65535){var c=this.insertLines(a,b.slice(65535));b=b.slice(0,65535)}var d=[a,0];d.push.apply(d,b),this.$lines.splice.apply(this.$lines,d);var e=new f(a,0,a+b.length,0),g={action:"insertLines",range:e,lines:b};return this._emit("change",{data:g}),c||e.end},this.insertNewLine=function(a){a=this.$clipPosition(a);var b=this.$lines[a.row]||"";this.$lines[a.row]=b.substring(0,a.column),this.$lines.splice(a.row+1,0,b.substring(a.column,b.length));var c={row:a.row+1,column:0},d={action:"insertText",range:f.fromPoints(a,c),text:this.getNewLineCharacter()};return this._emit("change",{data:d}),c},this.insertInLine=function(a,b){if(b.length==0)return a;var c=this.$lines[a.row]||"";this.$lines[a.row]=c.substring(0,a.column)+b+c.substring(a.column);var d={row:a.row,column:a.column+b.length},e={action:"insertText",range:f.fromPoints(a,d),text:b};return this._emit("change",{data:e}),d},this.remove=function(a){a.start=this.$clipPosition(a.start),a.end=this.$clipPosition(a.end);if(a.isEmpty())return a.start;var b=a.start.row,c=a.end.row;if(a.isMultiLine()){var d=a.start.column==0?b:b+1,e=c-1;a.end.column>0&&this.removeInLine(c,0,a.end.column),e>=d&&this.removeLines(d,e),d!=b&&(this.removeInLine(b,a.start.column,this.getLine(b).length),this.removeNewLine(a.start.row))}else this.removeInLine(b,a.start.column,a.end.column);return a.start},this.removeInLine=function(a,b,c){if(b==c)return;var d=new f(a,b,a,c),e=this.getLine(a),g=e.substring(b,c),h=e.substring(0,b)+e.substring(c,e.length);this.$lines.splice(a,1,h);var i={action:"removeText",range:d,text:g};return this._emit("change",{data:i}),d.start},this.removeLines=function(a,b){var c=new f(a,0,b+1,0),d=this.$lines.splice(a,b-a+1),e={action:"removeLines",range:c,nl:this.getNewLineCharacter(),lines:d};return this._emit("change",{data:e}),d},this.removeNewLine=function(a){var b=this.getLine(a),c=this.getLine(a+1),d=new f(a,b.length,a+1,0),e=b+c;this.$lines.splice(a,2,e);var g={action:"removeText",range:d,text:this.getNewLineCharacter()};this._emit("change",{data:g})},this.replace=function(a,b){if(b.length==0&&a.isEmpty())return a.start;if(b==this.getTextRange(a))return a.end;this.remove(a);if(b)var c=this.insert(a.start,b);else c=a.start;return c},this.applyDeltas=function(a){for(var b=0;b<a.length;b++){var c=a[b],d=f.fromPoints(c.range.start,c.range.end);c.action=="insertLines"?this.insertLines(d.start.row,c.lines):c.action=="insertText"?this.insert(d.start,c.text):c.action=="removeLines"?this.removeLines(d.start.row,d.end.row-1):c.action=="removeText"&&this.remove(d)}},this.revertDeltas=function(a){for(var b=a.length-1;b>=0;b--){var c=a[b],d=f.fromPoints(c.range.start,c.range.end);c.action=="insertLines"?this.removeLines(d.start.row,d.end.row-1):c.action=="insertText"?this.remove(d):c.action=="removeLines"?this.insertLines(d.start.row,c.lines):c.action=="removeText"&&this.insert(d.start,c.text)}}}).call(h.prototype),b.Document=h}),define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/event_emitter").EventEmitter,f=b.Anchor=function(a,b,c){this.document=a,typeof c=="undefined"?this.setPosition(b.row,b.column):this.setPosition(b,c),this.$onChange=this.onChange.bind(this),a.on("change",this.$onChange)};(function(){d.implement(this,e),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.onChange=function(a){var b=a.data,c=b.range;if(c.start.row==c.end.row&&c.start.row!=this.row)return;if(c.start.row>this.row)return;if(c.start.row==this.row&&c.start.column>this.column)return;var d=this.row,e=this.column;b.action==="insertText"?c.start.row===d&&c.start.column<=e?c.start.row===c.end.row?e+=c.end.column-c.start.column:(e-=c.start.column,d+=c.end.row-c.start.row):c.start.row!==c.end.row&&c.start.row<d&&(d+=c.end.row-c.start.row):b.action==="insertLines"?c.start.row<=d&&(d+=c.end.row-c.start.row):b.action=="removeText"?c.start.row==d&&c.start.column<e?c.end.column>=e?e=c.start.column:e=Math.max(0,e-(c.end.column-c.start.column)):c.start.row!==c.end.row&&c.start.row<d?(c.end.row==d&&(e=Math.max(0,e-c.end.column)+c.start.column),d-=c.end.row-c.start.row):c.end.row==d&&(d-=c.end.row-c.start.row,e=Math.max(0,e-c.end.column)+c.start.column):b.action=="removeLines"&&c.start.row<=d&&(c.end.row<=d?d-=c.end.row-c.start.row:(d=c.start.row,e=0)),this.setPosition(d,e,!0)},this.setPosition=function(a,b,c){var d;c?d={row:a,column:b}:d=this.$clipPositionToDocument(a,b);if(this.row==d.row&&this.column==d.column)return;var e={row:this.row,column:this.column};this.row=d.row,this.column=d.column,this._emit("change",{old:e,value:d})},this.detach=function(){this.document.removeEventListener("change",this.$onChange)},this.$clipPositionToDocument=function(a,b){var c={};return a>=this.document.getLength()?(c.row=Math.max(0,this.document.getLength()-1),c.column=this.document.getLine(c.row).length):a<0?(c.row=0,c.column=0):(c.row=a,c.column=Math.min(this.document.getLine(c.row).length,Math.max(0,b))),b<0&&(c.column=0),c}}).call(f.prototype)}),define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/event_emitter").EventEmitter,f=5e3,g=function(a,b){this.running=!1,this.lines=[],this.states=[],this.currentLine=0,this.tokenizer=a;var c=this;this.$worker=function(){if(!c.running)return;var a=new Date,b=c.currentLine,d=c.doc,e=0,f=d.getLength();while(c.currentLine<f){c.$tokenizeRow(c.currentLine);while(c.lines[c.currentLine])c.currentLine++;e++;if(e%5==0&&new Date-a>20){c.fireUpdateEvent(b,c.currentLine-1),c.running=setTimeout(c.$worker,20);return}}c.running=!1,c.fireUpdateEvent(b,f-1)}};(function(){d.implement(this,e),this.setTokenizer=function(a){this.tokenizer=a,this.lines=[],this.states=[],this.start(0)},this.setDocument=function(a){this.doc=a,this.lines=[],this.states=[],this.stop()},this.fireUpdateEvent=function(a,b){var c={first:a,last:b};this._emit("update",{data:c})},this.start=function(a){this.currentLine=Math.min(a||0,this.currentLine,this.doc.getLength()),this.lines.splice(this.currentLine,this.lines.length),this.states.splice(this.currentLine,this.states.length),this.stop(),this.running=setTimeout(this.$worker,700)},this.$updateOnChange=function(a){var b=a.range,c=b.start.row,d=b.end.row-c;if(d===0)this.lines[c]=null;else if(a.action=="removeText"||a.action=="removeLines")this.lines.splice(c,d+1,null),this.states.splice(c,d+1,null);else{var e=Array(d+1);e.unshift(c,1),this.lines.splice.apply(this.lines,e),this.states.splice.apply(this.states,e)}this.currentLine=Math.min(c,this.currentLine,this.doc.getLength()),this.stop(),this.running=setTimeout(this.$worker,700)},this.stop=function(){this.running&&clearTimeout(this.running),this.running=!1},this.getTokens=function(a){return this.lines[a]||this.$tokenizeRow(a)},this.getState=function(a){return this.currentLine==a&&this.$tokenizeRow(a),this.states[a]||"start"},this.$tokenizeRow=function(a){var b=this.doc.getLine(a),c=this.states[a-1];if(b.length>f){var d={value:b.substr(f),type:"text"};b=b.slice(0,f)}var e=this.tokenizer.getLineTokens(b,c);return d&&(e.tokens.push(d),e.state="start"),this.states[a]!==e.state?(this.states[a]=e.state,this.lines[a+1]=null,this.currentLine>a+1&&(this.currentLine=a+1)):this.currentLine==a&&(this.currentLine=a+1),this.lines[a]=e.tokens}}).call(g.prototype),b.BackgroundTokenizer=g}),define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(a,b,c){var d=a("./lib/lang"),e=a("./lib/oop"),f=a("./range").Range,g=function(a,b,c){this.setRegexp(a),this.clazz=b,this.type=c||"text"};(function(){this.setRegexp=function(a){if(this.regExp+""==a+"")return;this.regExp=a,this.cache=[]},this.update=function(a,b,c,e){if(!this.regExp)return;var g=e.firstRow,h=e.lastRow;for(var i=g;i<=h;i++){var j=this.cache[i];j==null&&(j=d.getMatchOffsets(c.getLine(i),this.regExp),j=j.map(function(a){return new f(i,a.offset,i,a.offset+a.length)}),this.cache[i]=j.length?j:"");for(var k=j.length;k--;)b.drawSingleLineMarker(a,j[k].toScreenRange(c),this.clazz,e,null,this.type)}}}).call(g.prototype),b.SearchHighlight=g}),define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(a,b,c){function h(){this.getFoldAt=function(a,b,c){var d=this.getFoldLine(a);if(!d)return null;var e=d.folds;for(var f=0;f<e.length;f++){var g=e[f];if(g.range.contains(a,b)){if(c==1&&g.range.isEnd(a,b))continue;if(c==-1&&g.range.isStart(a,b))continue;return g}}},this.getFoldsInRange=function(a){a=a.clone();var b=a.start,c=a.end,d=this.$foldData,e=[];b.column+=1,c.column-=1;for(var f=0;f<d.length;f++){var g=d[f].range.compareRange(a);if(g==2)continue;if(g==-2)break;var h=d[f].folds;for(var i=0;i<h.length;i++){var j=h[i];g=j.range.compareRange(a);if(g==-2)break;if(g==2)continue;if(g==42)break;e.push(j)}}return e},this.getAllFolds=function(){function c(b){a.push(b);if(!b.subFolds)return;for(var d=0;d<b.subFolds.length;d++)c(b.subFolds[d])}var a=[],b=this.$foldData;for(var d=0;d<b.length;d++)for(var e=0;e<b[d].folds.length;e++)c(b[d].folds[e]);return a},this.getFoldStringAt=function(a,b,c,d){d=d||this.getFoldLine(a);if(!d)return null;var e={end:{column:0}},f,g;for(var h=0;h<d.folds.length;h++){g=d.folds[h];var i=g.range.compareEnd(a,b);if(i==-1){f=this.getLine(g.start.row).substring(e.end.column,g.start.column);break}if(i===0)return null;e=g}return f||(f=this.getLine(g.start.row).substring(e.end.column)),c==-1?f.substring(0,b-e.end.column):c==1?f.substring(b-e.end.column):f},this.getFoldLine=function(a,b){var c=this.$foldData,d=0;b&&(d=c.indexOf(b)),d==-1&&(d=0);for(d;d<c.length;d++){var e=c[d];if(e.start.row<=a&&e.end.row>=a)return e;if(e.end.row>a)return null}return null},this.getNextFoldLine=function(a,b){var c=this.$foldData,d=0;b&&(d=c.indexOf(b)),d==-1&&(d=0);for(d;d<c.length;d++){var e=c[d];if(e.end.row>=a)return e}return null},this.getFoldedRowCount=function(a,b){var c=this.$foldData,d=b-a+1;for(var e=0;e<c.length;e++){var f=c[e],g=f.end.row,h=f.start.row;if(g>=b){h<b&&(h>=a?d-=b-h:d=0);break}g>=a&&(h>=a?d-=g-h:d-=g-a+1)}return d},this.$addFoldLine=function(a){return this.$foldData.push(a),this.$foldData.sort(function(a,b){return a.start.row-b.start.row}),a},this.addFold=function(a,b){var c=this.$foldData,d=!1,g;a instanceof f?g=a:g=new f(b,a),this.$clipRangeToDocument(g.range);var h=g.start.row,i=g.start.column,j=g.end.row,k=g.end.column;if(g.placeholder.length<2)throw"Placeholder has to be at least 2 characters";if(h==j&&k-i<2)throw"The range has to be at least 2 characters width";var l=this.getFoldAt(h,i,1),m=this.getFoldAt(j,k,-1);if(l&&m==l)return l.addSubFold(g);if(l&&!l.range.isStart(h,i)||m&&!m.range.isEnd(j,k))throw"A fold can't intersect already existing fold"+g.range+l.range;var n=this.getFoldsInRange(g.range);n.length>0&&(this.removeFolds(n),g.subFolds=n);for(var o=0;o<c.length;o++){var p=c[o];if(j==p.start.row){p.addFold(g),d=!0;break}if(h==p.end.row){p.addFold(g),d=!0;if(!g.sameRow){var q=c[o+1];if(q&&q.start.row==j){p.merge(q);break}}break}if(j<=p.start.row)break}return d||(p=this.$addFoldLine(new e(this.$foldData,g))),this.$useWrapMode?this.$updateWrapData(p.start.row,p.start.row):this.$updateRowLengthCache(p.start.row,p.start.row),this.$modified=!0,this._emit("changeFold",{data:g}),g},this.addFolds=function(a){a.forEach(function(a){this.addFold(a)},this)},this.removeFold=function(a){var b=a.foldLine,c=b.start.row,d=b.end.row,e=this.$foldData,f=b.folds;if(f.length==1)e.splice(e.indexOf(b),1);else if(b.range.isEnd(a.end.row,a.end.column))f.pop(),b.end.row=f[f.length-1].end.row,b.end.column=f[f.length-1].end.column;else if(b.range.isStart(a.start.row,a.start.column))f.shift(),b.start.row=f[0].start.row,b.start.column=f[0].start.column;else if(a.sameRow)f.splice(f.indexOf(a),1);else{var g=b.split(a.start.row,a.start.column);f=g.folds,f.shift(),g.start.row=f[0].start.row,g.start.column=f[0].start.column}this.$useWrapMode?this.$updateWrapData(c,d):this.$updateRowLengthCache(c,d),this.$modified=!0,this._emit("changeFold",{data:a})},this.removeFolds=function(a){var b=[];for(var c=0;c<a.length;c++)b.push(a[c]);b.forEach(function(a){this.removeFold(a)},this),this.$modified=!0},this.expandFold=function(a){this.removeFold(a),a.subFolds.forEach(function(a){this.addFold(a)},this),a.subFolds=[]},this.expandFolds=function(a){a.forEach(function(a){this.expandFold(a)},this)},this.unfold=function(a,b){var c,e;a==null?c=new d(0,0,this.getLength(),0):typeof a=="number"?c=new d(a,0,a,this.getLine(a).length):"row"in a?c=d.fromPoints(a,a):c=a,e=this.getFoldsInRange(c);if(b)this.removeFolds(e);else while(e.length)this.expandFolds(e),e=this.getFoldsInRange(c)},this.isRowFolded=function(a,b){return!!this.getFoldLine(a,b)},this.getRowFoldEnd=function(a,b){var c=this.getFoldLine(a,b);return c?c.end.row:a},this.getFoldDisplayLine=function(a,b,c,d,e){d==null&&(d=a.start.row,e=0),b==null&&(b=a.end.row,c=this.getLine(b).length);var f=this.doc,g="";return a.walk(function(a,b,c,h){if(b<d)return;if(b==d){if(c<e)return;h=Math.max(e,h)}a?g+=a:g+=f.getLine(b).substring(h,c)}.bind(this),b,c),g},this.getDisplayLine=function(a,b,c,d){var e=this.getFoldLine(a);if(!e){var f;return f=this.doc.getLine(a),f.substring(d||0,b||f.length)}return this.getFoldDisplayLine(e,a,b,c,d)},this.$cloneFoldData=function(){var a=[];return a=this.$foldData.map(function(b){var c=b.folds.map(function(a){return a.clone()});return new e(a,c)}),a},this.toggleFold=function(a){var b=this.selection,c=b.getRange(),d,e;if(c.isEmpty()){var f=c.start;d=this.getFoldAt(f.row,f.column);if(d){this.expandFold(d);return}(e=this.findMatchingBracket(f))?c.comparePoint(e)==1?c.end=e:(c.start=e,c.start.column++,c.end.column--):(e=this.findMatchingBracket({row:f.row,column:f.column+1}))?(c.comparePoint(e)==1?c.end=e:c.start=e,c.start.column++):c=this.getCommentFoldRange(f.row,f.column)||c}else{var g=this.getFoldsInRange(c);if(a&&g.length){this.expandFolds(g);return}g.length==1&&(d=g[0])}d||(d=this.getFoldAt(c.start.row,c.start.column));if(d&&d.range.toString()==c.toString()){this.expandFold(d);return}var h="...";if(!c.isMultiLine()){h=this.getTextRange(c);if(h.length<4)return;h=h.trim().substring(0,2)+".."}this.addFold(h,c)},this.getCommentFoldRange=function(a,b){var c=new g(this,a,b),e=c.getCurrentToken();if(e&&/^comment|string/.test(e.type)){var f=new d,h=new RegExp(e.type.replace(/\..*/,"\\."));do e=c.stepBackward();while(e&&h.test(e.type));c.stepForward(),f.start.row=c.getCurrentTokenRow(),f.start.column=c.getCurrentTokenColumn()+2,c=new g(this,a,b);do e=c.stepForward();while(e&&h.test(e.type));return e=c.stepBackward(),f.end.row=c.getCurrentTokenRow(),f.end.column=c.getCurrentTokenColumn()+e.value.length,f}},this.foldAll=function(a,b){var c=this.foldWidgets;b=b||this.getLength();for(var d=a||0;d<b;d++){c[d]==null&&(c[d]=this.getFoldWidget(d));if(c[d]!="start")continue;var e=this.getFoldWidgetRange(d);if(e&&e.end.row<b)try{this.addFold("...",e)}catch(f){}}},this.$foldStyles={manual:1,markbegin:1,markbeginend:1},this.$foldStyle="markbegin",this.setFoldStyle=function(a){if(!this.$foldStyles[a])throw new Error("invalid fold style: "+a+"["+Object.keys(this.$foldStyles).join(", ")+"]");if(this.$foldStyle==a)return;this.$foldStyle=a,a=="manual"&&this.unfold();var b=this.$foldMode;this.$setFolding(null),this.$setFolding(b)},this.$setFolding=function(a){if(this.$foldMode==a)return;this.$foldMode=a,this.removeListener("change",this.$updateFoldWidgets),this._emit("changeAnnotation");if(!a||this.$foldStyle=="manual"){this.foldWidgets=null;return}this.foldWidgets=[],this.getFoldWidget=a.getFoldWidget.bind(a,this,this.$foldStyle),this.getFoldWidgetRange=a.getFoldWidgetRange.bind(a,this,this.$foldStyle),this.$updateFoldWidgets=this.updateFoldWidgets.bind(this),this.on("change",this.$updateFoldWidgets)},this.onFoldWidgetClick=function(a,b){var c=this.getFoldWidget(a),d=this.getLine(a),e=b.shiftKey,f=e||b.ctrlKey||b.altKey||b.metaKey,g;c=="end"?g=this.getFoldAt(a,0,-1):g=this.getFoldAt(a,d.length,1);if(g){f?this.removeFold(g):this.expandFold(g);return}var h=this.getFoldWidgetRange(a);if(h){if(!h.isMultiLine()){g=this.getFoldAt(h.start.row,h.start.column,1);if(g&&h.isEqual(g.range)){this.removeFold(g);return}}e||this.addFold("...",h),f&&this.foldAll(h.start.row+1,h.end.row)}else f&&this.foldAll(a+1,this.getLength()),(b.target||b.srcElement).className+=" invalid"},this.updateFoldWidgets=function(a){var b=a.data,c=b.range,d=c.start.row,e=c.end.row-d;if(e===0)this.foldWidgets[d]=null;else if(b.action=="removeText"||b.action=="removeLines")this.foldWidgets.splice(d,e+1,null);else{var f=Array(e+1);f.unshift(d,1),this.foldWidgets.splice.apply(this.foldWidgets,f)}}}var d=a("../range").Range,e=a("./fold_line").FoldLine,f=a("./fold").Fold,g=a("../token_iterator").TokenIterator;b.Folding=h}),define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(a,b,c){function e(a,b){this.foldData=a,Array.isArray(b)?this.folds=b:b=this.folds=[b];var c=b[b.length-1];this.range=new d(b[0].start.row,b[0].start.column,c.end.row,c.end.column),this.start=this.range.start,this.end=this.range.end,this.folds.forEach(function(a){a.setFoldLine(this)},this)}var d=a("../range").Range;(function(){this.shiftRow=function(a){this.start.row+=a,this.end.row+=a,this.folds.forEach(function(b){b.start.row+=a,b.end.row+=a})},this.addFold=function(a){if(a.sameRow){if(a.start.row<this.startRow||a.endRow>this.endRow)throw"Can't add a fold to this FoldLine as it has no connection";this.folds.push(a),this.folds.sort(function(a,b){return-a.range.compareEnd(b.start.row,b.start.column)}),this.range.compareEnd(a.start.row,a.start.column)>0?(this.end.row=a.end.row,this.end.column=a.end.column):this.range.compareStart(a.end.row,a.end.column)<0&&(this.start.row=a.start.row,this.start.column=a.start.column)}else if(a.start.row==this.end.row)this.folds.push(a),this.end.row=a.end.row,this.end.column=a.end.column;else{if(a.end.row!=this.start.row)throw"Trying to add fold to FoldRow that doesn't have a matching row";this.folds.unshift(a),this.start.row=a.start.row,this.start.column=a.start.column}a.foldLine=this},this.containsRow=function(a){return a>=this.start.row&&a<=this.end.row},this.walk=function(a,b,c){var d=0,e=this.folds,f,g,h,i=!0;b==null&&(b=this.end.row,c=this.end.column);for(var j=0;j<e.length;j++){f=e[j],g=f.range.compareStart(b,c);if(g==-1){a(null,b,c,d,i);return}h=a(null,f.start.row,f.start.column,d,i),h=!h&&a(f.placeholder,f.start.row,f.start.column,d);if(h||g==0)return;i=!f.sameRow,d=f.end.column}a(null,b,c,d,i)},this.getNextFoldTo=function(a,b){var c,d;for(var e=0;e<this.folds.length;e++){c=this.folds[e],d=c.range.compareEnd(a,b);if(d==-1)return{fold:c,kind:"after"};if(d==0)return{fold:c,kind:"inside"}}return null},this.addRemoveChars=function(a,b,c){var d=this.getNextFoldTo(a,b),e,f;if(d){e=d.fold;if(d.kind=="inside"&&e.start.column!=b&&e.start.row!=a)window.console&&window.console.log(a,b,e);else if(e.start.row==a){f=this.folds;var g=f.indexOf(e);g==0&&(this.start.column+=c);for(g;g<f.length;g++){e=f[g],e.start.column+=c;if(!e.sameRow)return;e.end.column+=c}this.end.column+=c}}},this.split=function(a,b){var c=this.getNextFoldTo(a,b).fold,d=this.folds,f=this.foldData;if(!c)return null;var g=d.indexOf(c),h=d[g-1];this.end.row=h.end.row,this.end.column=h.end.column,d=d.splice(g,d.length-g);var i=new e(f,d);return f.splice(f.indexOf(this)+1,0,i),i},this.merge=function(a){var b=a.folds;for(var c=0;c<b.length;c++)this.addFold(b[c]);var d=this.foldData;d.splice(d.indexOf(a),1)},this.toString=function(){var a=[this.range.toString()+": ["];return this.folds.forEach(function(b){a.push("  "+b.toString())}),a.push("]"),a.join("\n")},this.idxToPosition=function(a){var b=0,c;for(var d=0;d<this.folds.length;d++){var c=this.folds[d];a-=c.start.column-b;if(a<0)return{row:c.start.row,column:c.start.column+a};a-=c.placeholder.length;if(a<0)return c.start;b=c.end.column}return{row:this.end.row,column:this.end.column+a}}}).call(e.prototype),b.FoldLine=e}),define("ace/edit_session/fold",["require","exports","module"],function(a,b,c){var d=b.Fold=function(a,b){this.foldLine=null,this.placeholder=b,this.range=a,this.start=a.start,this.end=a.end,this.sameRow=a.start.row==a.end.row,this.subFolds=[]};(function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()},this.setFoldLine=function(a){this.foldLine=a,this.subFolds.forEach(function(b){b.setFoldLine(a)})},this.clone=function(){var a=this.range.clone(),b=new d(a,this.placeholder);return this.subFolds.forEach(function(a){b.subFolds.push(a.clone())}),b},this.addSubFold=function(a){if(this.range.isEqual(a))return this;if(!this.range.containsRange(a))throw"A fold can't intersect already existing fold"+a.range+this.range;var b=a.range.start.row,c=a.range.start.column;for(var d=0,e=-1;d<this.subFolds.length;d++){e=this.subFolds[d].range.compare(b,c);if(e!=1)break}var f=this.subFolds[d];if(e==0)return f.addSubFold(a);var b=a.range.end.row,c=a.range.end.column;for(var g=d,e=-1;g<this.subFolds.length;g++){e=this.subFolds[g].range.compare(b,c);if(e!=1)break}var h=this.subFolds[g];if(e==0)throw"A fold can't intersect already existing fold"+a.range+this.range;var i=this.subFolds.splice(d,g-d,a);return a.setFoldLine(this.foldLine),a}}).call(d.prototype)}),define("ace/token_iterator",["require","exports","module"],function(a,b,c){var d=function(a,b,c){this.$session=a,this.$row=b,this.$rowTokens=a.getTokens(b);var d=a.getTokenAt(b,c);this.$tokenIndex=d?d.index:-1};(function(){this.stepBackward=function(){this.$tokenIndex-=1;while(this.$tokenIndex<0){this.$row-=1;if(this.$row<0)return this.$row=0,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]},this.stepForward=function(){var a=this.$session.getLength();this.$tokenIndex+=1;while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1;if(this.$row>=a)return this.$row=a-1,null;this.$rowTokens=this.$session.getTokens(this.$row),this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]},this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]},this.getCurrentTokenRow=function(){return this.$row},this.getCurrentTokenColumn=function(){var a=this.$rowTokens,b=this.$tokenIndex,c=a[b].start;if(c!==undefined)return c;c=0;while(b>0)b-=1,c+=a[b].value.length;return c}}).call(d.prototype),b.TokenIterator=d}),define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(a,b,c){function f(){this.findMatchingBracket=function(a){if(a.column==0)return null;var b=this.getLine(a.row).charAt(a.column-1);if(b=="")return null;var c=b.match(/([\(\[\{])|([\)\]\}])/);return c?c[1]?this.$findClosingBracket(c[1],a):this.$findOpeningBracket(c[2],a):null},this.getBracketRange=function(a){var b=this.getLine(a.row),c=!0,d,f=b.charAt(a.column-1),g=f&&f.match(/([\(\[\{])|([\)\]\}])/);g||(f=b.charAt(a.column),a={row:a.row,column:a.column+1},g=f&&f.match(/([\(\[\{])|([\)\]\}])/),c=!1);if(!g)return null;if(g[1]){var h=this.$findClosingBracket(g[1],a);if(!h)return null;d=e.fromPoints(a,h),c||(d.end.column++,d.start.column--),d.cursor=d.end}else{var h=this.$findOpeningBracket(g[2],a);if(!h)return null;d=e.fromPoints(h,a),c||(d.start.column++,d.end.column--),d.cursor=d.start}return d},this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{"},this.$findOpeningBracket=function(a,b,c){var e=this.$brackets[a],f=1,g=new d(this,b.row,b.column),h=g.getCurrentToken();h||(h=g.stepForward());if(!h)return;c||(c=new RegExp("(\\.?"+h.type.replace(".","\\.").replace("rparen",".paren")+")+"));var i=b.column-g.getCurrentTokenColumn()-2,j=h.value;for(;;){while(i>=0){var k=j.charAt(i);if(k==e){f-=1;if(f==0)return{row:g.getCurrentTokenRow(),column:i+g.getCurrentTokenColumn()}}else k==a&&(f+=1);i-=1}do h=g.stepBackward();while(h&&!c.test(h.type));if(h==null)break;j=h.value,i=j.length-1}return null},this.$findClosingBracket=function(a,b,c){var e=this.$brackets[a],f=1,g=new d(this,b.row,b.column),h=g.getCurrentToken();h||(h=g.stepForward());if(!h)return;c||(c=new RegExp("(\\.?"+h.type.replace(".","\\.").replace("lparen",".paren")+")+"));var i=b.column-g.getCurrentTokenColumn();for(;;){var j=h.value,k=j.length;while(i<k){var l=j.charAt(i);if(l==e){f-=1;if(f==0)return{row:g.getCurrentTokenRow(),column:i+g.getCurrentTokenColumn()}}else l==a&&(f+=1);i+=1}do h=g.stepForward();while(h&&!c.test(h.type));if(h==null)break;i=0}return null}}var d=a("../token_iterator").TokenIterator,e=a("../range").Range;b.BracketMatch=f}),define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(a,b,c){var d=a("./lib/lang"),e=a("./lib/oop"),f=a("./range").Range,g=function(){this.$options={}};(function(){this.set=function(a){return e.mixin(this.$options,a),this},this.getOptions=function(){return d.copyObject(this.$options)},this.setOptions=function(a){this.$options=a},this.find=function(a){var b=this.$matchIterator(a,this.$options);if(!b)return!1;var c=null;return b.forEach(function(a,b,d){if(!a.start){var e=a.offset+(d||0);c=new f(b,e,b,e+a.length)}else c=a;return!0}),c},this.findAll=function(a){var b=this.$options;if(!b.needle)return[];this.$assembleRegExp(b);var c=b.range,e=c?a.getLines(c.start.row,c.end.row):a.doc.getAllLines(),g=[],h=b.re;if(b.$isMultiLine){var i=h.length,j=e.length-i;for(var k=h.offset||0;k<=j;k++){for(var l=0;l<i;l++)if(e[k+l].search(h[l])==-1)break;var m=e[k],n=e[k+i-1],o=m.match(h[0])[0].length,p=n.match(h[i-1])[0].length;g.push(new f(k,m.length-o,k+i-1,p))}}else for(var q=0;q<e.length;q++){var r=d.getMatchOffsets(e[q],h);for(var l=0;l<r.length;l++){var s=r[l];g.push(new f(q,s.offset,q,s.offset+s.length))}}if(c){var t=c.start.column,u=c.start.column,q=0,l=g.length-1;while(q<l&&g[q].start.column<t&&g[q].start.row==c.start.row)q++;while(q<l&&g[l].end.column>u&&g[l].end.row==c.end.row)l--;return g.slice(q,l+1)}return g},this.replace=function(a,b){var c=this.$options,d=this.$assembleRegExp(c);if(c.$isMultiLine)return b;if(!d)return;var e=d.exec(a);if(!e||e[0].length!=a.length)return null;b=a.replace(d,b);if(c.preserveCase){b=b.split("");for(var f=Math.min(a.length,a.length);f--;){var g=a[f];g&&g.toLowerCase()!=g?b[f]=b[f].toUpperCase():b[f]=b[f].toLowerCase()}b=b.join("")}return b},this.$matchIterator=function(a,b){var c=this.$assembleRegExp(b);if(!c)return!1;var e=this,g,h=b.backwards;if(b.$isMultiLine)var i=c.length,j=function(b,d,e){var h=b.search(c[0]);if(h==-1)return;for(var j=1;j<i;j++){b=a.getLine(d+j);if(b.search(c[j])==-1)return}var k=b.match(c[i-1])[0].length,l=new f(d,h,d+i-1,k);c.offset==1?(l.start.row--,l.start.column=Number.MAX_VALUE):e&&(l.start.column+=e);if(g(l))return!0};else if(h)var j=function(a,b,e){var f=d.getMatchOffsets(a,c);for(var h=f.length-1;h>=0;h--)if(g(f[h],b,e))return!0};else var j=function(a,b,e){var f=d.getMatchOffsets(a,c);for(var h=0;h<f.length;h++)if(g(f[h],b,e))return!0};return{forEach:function(c){g=c,e.$lineIterator(a,b).forEach(j)}}},this.$assembleRegExp=function(a){if(a.needle instanceof RegExp)return a.re=a.needle;var b=a.needle;if(!a.needle)return a.re=!1;a.regExp||(b=d.escapeRegExp(b)),a.wholeWord&&(b="\\b"+b+"\\b");var c=a.caseSensitive?"g":"gi";a.$isMultiLine=/[\n\r]/.test(b);if(a.$isMultiLine)return a.re=this.$assembleMultilineRegExp(b,c);try{var e=new RegExp(b,c)}catch(f){e=!1}return a.re=e},this.$assembleMultilineRegExp=function(a,b){var c=a.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),d=[];for(var e=0;e<c.length;e++)try{d.push(new RegExp(c[e],b))}catch(f){return!1}return c[0]==""?(d.shift(),d.offset=1):d.offset=0,d},this.$lineIterator=function(a,b){var c=b.backwards==1,d=b.skipCurrent!=0,e=b.range,f=b.start;f||(f=e?e[c?"end":"start"]:a.selection.getRange()),f.start&&(f=f[d!=c?"end":"start"]);var g=e?e.start.row:0,h=e?e.end.row:a.getLength()-1,i=c?function(c){var d=f.row,e=a.getLine(d).substring(0,f.column);if(c(e,d))return;for(d--;d>=g;d--)if(c(a.getLine(d),d))return;if(b.wrap==0)return;for(d=h,g=f.row;d>=g;d--)if(c(a.getLine(d),d))return}:function(c){var d=f.row,e=a.getLine(d).substr(f.column);if(c(e,d,f.column))return;for(d+=1;d<=h;d++)if(c(a.getLine(d),d))return;if(b.wrap==0)return;for(d=g,h=f.row;d<=h;d++)if(c(a.getLine(d),d))return};return{forEach:i}}}).call(g.prototype),b.Search=g}),define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(a,b,c){var d=a("../lib/oop"),e=a("../keyboard/hash_handler").HashHandler,f=a("../lib/event_emitter").EventEmitter,g=function(a,b){this.platform=a,this.commands={},this.commmandKeyBinding={},this.addCommands(b),this.setDefaultHandler("exec",function(a){return a.command.exec(a.editor,a.args||{})})};d.inherits(g,e),function(){d.implement(this,f),this.exec=function(a,b,c){typeof a=="string"&&(a=this.commands[a]);if(!a)return!1;if(b&&b.$readOnly&&!a.readOnly)return!1;var d=this._emit("exec",{editor:b,command:a,args:c});return d===!1?!1:!0},this.toggleRecording=function(a){if(this.$inReplay)return;return a&&a._emit("changeStatus"),this.recording?(this.macro.pop(),this.removeEventListener("exec",this.$addCommandToMacro),this.macro.length||(this.macro=this.oldMacro),this.recording=!1):(this.$addCommandToMacro||(this.$addCommandToMacro=function(a){this.macro.push([a.command,a.args])}.bind(this)),this.oldMacro=this.macro,this.macro=[],this.on("exec",this.$addCommandToMacro),this.recording=!0)},this.replay=function(a){if(this.$inReplay||!this.macro)return;if(this.recording)return this.toggleRecording(a);try{this.$inReplay=!0,this.macro.forEach(function(b){typeof b=="string"?this.exec(b,a):this.exec(b[0],a,b[1])},this)}finally{this.$inReplay=!1}},this.trimMacro=function(a){return a.map(function(a){return typeof a[0]!="string"&&(a[0]=a[0].name),a[1]||(a=a[0]),a})}}.call(g.prototype),b.CommandManager=g}),define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys"],function(a,b,c){function e(a,b){this.platform=b,this.commands={},this.commmandKeyBinding={},this.addCommands(a)}var d=a("../lib/keys");(function(){this.addCommand=function(a){this.commands[a.name]&&this.removeCommand(a),this.commands[a.name]=a,a.bindKey&&this._buildKeyHash(a)},this.removeCommand=function(a){var b=typeof a=="string"?a:a.name;a=this.commands[b],delete this.commands[b];var c=this.commmandKeyBinding;for(var d in c)for(var e in c[d])c[d][e]==a&&delete c[d][e]},this.bindKey=function(a,b){if(!a)return;if(typeof b=="function"){this.addCommand({exec:b,bindKey:a,name:a});return}var c=this.commmandKeyBinding;a.split("|").forEach(function(a){var d=this.parseKeys(a,b),e=d.hashId;(c[e]||(c[e]={}))[d.key]=b},this)},this.addCommands=function(a){a&&Object.keys(a).forEach(function(b){var c=a[b];if(typeof c=="string")return this.bindKey(c,b);typeof c=="function"&&(c={exec:c}),c.name||(c.name=b),this.addCommand(c)},this)},this.removeCommands=function(a){Object.keys(a).forEach(function(b){this.removeCommand(a[b])},this)},this.bindKeys=function(a){Object.keys(a).forEach(function(b){this.bindKey(b,a[b])},this)},this._buildKeyHash=function(a){var b=a.bindKey;if(!b)return;var c=typeof b=="string"?b:b[this.platform];this.bindKey(c,a)},this.parseKeys=function(a){var b,c=0,e=a.toLowerCase().trim().split(/\s*\-\s*/);for(var f=0,g=e.length;f<g;f++)d.KEY_MODS[e[f]]?c|=d.KEY_MODS[e[f]]:b=e[f]||"-";return e[0]=="text"&&e.length==2&&(c=-1,b=e[1]),{key:b,hashId:c}},this.findKeyCommand=function(b,c){var d=this.commmandKeyBinding;return d[b]&&d[b][c.toLowerCase()]},this.handleKeyboard=function(a,b,c,d){return{command:this.findKeyCommand(b,c)}}}).call(e.prototype),b.HashHandler=e}),define("ace/commands/default_commands",["require","exports","module","ace/lib/lang"],function(a,b,c){function e(a,b){return{win:a,mac:b}}var d=a("../lib/lang");b.commands=[{name:"selectall",bindKey:e("Ctrl-A","Command-A"),exec:function(a){a.selectAll()},readOnly:!0},{name:"centerselection",bindKey:e(null,"Ctrl-L"),exec:function(a){a.centerSelection()},readOnly:!0},{name:"gotoline",bindKey:e("Ctrl-L","Command-L"),exec:function(a){var b=parseInt(prompt("Enter line number:"),10);isNaN(b)||a.gotoLine(b)},readOnly:!0},{name:"fold",bindKey:e("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(a){a.session.toggleFold(!1)},readOnly:!0},{name:"unfold",bindKey:e("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(a){a.session.toggleFold(!0)},readOnly:!0},{name:"foldall",bindKey:e("Alt-0","Command-Option-0"),exec:function(a){a.session.foldAll()},readOnly:!0},{name:"unfoldall",bindKey:e("Alt-Shift-0","Command-Option-Shift-0"),exec:function(a){a.session.unfold()},readOnly:!0},{name:"findnext",bindKey:e("Ctrl-K","Command-G"),exec:function(a){a.findNext()},readOnly:!0},{name:"findprevious",bindKey:e("Ctrl-Shift-K","Command-Shift-G"),exec:function(a){a.findPrevious()},readOnly:!0},{name:"find",bindKey:e("Ctrl-F","Command-F"),exec:function(a){var b=prompt("Find:",a.getCopyText());a.find(b)},readOnly:!0},{name:"overwrite",bindKey:"Insert",exec:function(a){a.toggleOverwrite()},readOnly:!0},{name:"selecttostart",bindKey:e("Ctrl-Shift-Home","Command-Shift-Up"),exec:function(a){a.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:!0},{name:"gotostart",bindKey:e("Ctrl-Home","Command-Home|Command-Up"),exec:function(a){a.navigateFileStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectup",bindKey:e("Shift-Up","Shift-Up"),exec:function(a){a.getSelection().selectUp()},multiSelectAction:"forEach",readOnly:!0},{name:"golineup",bindKey:e("Up","Up|Ctrl-P"),exec:function(a,b){a.navigateUp(b.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selecttoend",bindKey:e("Ctrl-Shift-End","Command-Shift-Down"),exec:function(a){a.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoend",bindKey:e("Ctrl-End","Command-End|Command-Down"),exec:function(a){a.navigateFileEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"selectdown",bindKey:e("Shift-Down","Shift-Down"),exec:function(a){a.getSelection().selectDown()},multiSelectAction:"forEach",readOnly:!0},{name:"golinedown",bindKey:e("Down","Down|Ctrl-N"),exec:function(a,b){a.navigateDown(b.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectwordleft",bindKey:e("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(a){a.getSelection().selectWordLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"gotowordleft",bindKey:e("Ctrl-Left","Option-Left"),exec:function(a){a.navigateWordLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttolinestart",bindKey:e("Alt-Shift-Left","Command-Shift-Left"),exec:function(a){a.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"gotolinestart",bindKey:e("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(a){a.navigateLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectleft",bindKey:e("Shift-Left","Shift-Left"),exec:function(a){a.getSelection().selectLeft()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoleft",bindKey:e("Left","Left|Ctrl-B"),exec:function(a,b){a.navigateLeft(b.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectwordright",bindKey:e("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(a){a.getSelection().selectWordRight()},multiSelectAction:"forEach",readOnly:!0},{name:"gotowordright",bindKey:e("Ctrl-Right","Option-Right"),exec:function(a){a.navigateWordRight()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttolineend",bindKey:e("Alt-Shift-Right","Command-Shift-Right"),exec:function(a){a.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"gotolineend",bindKey:e("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(a){a.navigateLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"selectright",bindKey:e("Shift-Right","Shift-Right"),exec:function(a){a.getSelection().selectRight()},multiSelectAction:"forEach",readOnly:!0},{name:"gotoright",bindKey:e("Right","Right|Ctrl-F"),exec:function(a,b){a.navigateRight(b.times)},multiSelectAction:"forEach",readOnly:!0},{name:"selectpagedown",bindKey:"Shift-PageDown",exec:function(a){a.selectPageDown()},readOnly:!0},{name:"pagedown",bindKey:e(null,"Option-PageDown"),exec:function(a){a.scrollPageDown()},readOnly:!0},{name:"gotopagedown",bindKey:e("PageDown","PageDown|Ctrl-V"),exec:function(a){a.gotoPageDown()},readOnly:!0},{name:"selectpageup",bindKey:"Shift-PageUp",exec:function(a){a.selectPageUp()},readOnly:!0},{name:"pageup",bindKey:e(null,"Option-PageUp"),exec:function(a){a.scrollPageUp()},readOnly:!0},{name:"gotopageup",bindKey:"PageUp",exec:function(a){a.gotoPageUp()},readOnly:!0},{name:"scrollup",bindKey:e("Ctrl-Up",null),exec:function(a){a.renderer.scrollBy(0,-2*a.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"scrolldown",bindKey:e("Ctrl-Down",null),exec:function(a){a.renderer.scrollBy(0,2*a.renderer.layerConfig.lineHeight)},readOnly:!0},{name:"selectlinestart",bindKey:"Shift-Home",exec:function(a){a.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:!0},{name:"selectlineend",bindKey:"Shift-End",exec:function(a){a.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:!0},{name:"togglerecording",bindKey:e("Ctrl-Alt-E","Command-Option-E"),exec:function(a){a.commands.toggleRecording(a)},readOnly:!0},{name:"replaymacro",bindKey:e("Ctrl-Shift-E","Command-Shift-E"),exec:function(a){a.commands.replay(a)},readOnly:!0},{name:"jumptomatching",bindKey:e("Ctrl-P","Ctrl-Shift-P"),exec:function(a){a.jumpToMatching()},multiSelectAction:"forEach",readOnly:!0},{name:"selecttomatching",bindKey:e("Ctrl-Shift-P",null),exec:function(a){a.jumpToMatching(!0)},readOnly:!0},{name:"cut",exec:function(a){var b=a.getSelectionRange();a._emit("cut",b),a.selection.isEmpty()||(a.session.remove(b),a.clearSelection())},multiSelectAction:"forEach"},{name:"removeline",bindKey:e("Ctrl-D","Command-D"),exec:function(a){a.removeLines()},multiSelectAction:"forEach"},{name:"duplicateSelection",bindKey:e("Ctrl-Shift-D","Command-Shift-D"),exec:function(a){a.duplicateSelection()},multiSelectAction:"forEach"},{name:"togglecomment",bindKey:e("Ctrl-/","Command-/"),exec:function(a){a.toggleCommentLines()},multiSelectAction:"forEach"},{name:"replace",bindKey:e("Ctrl-R","Command-Option-F"),exec:function(a){var b=prompt("Find:",a.getCopyText());if(!b)return;var c=prompt("Replacement:");if(!c)return;a.replace(c,{needle:b})}},{name:"replaceall",bindKey:e("Ctrl-Shift-R","Command-Shift-Option-F"),exec:function(a){var b=prompt("Find:");if(!b)return;var c=prompt("Replacement:");if(!c)return;a.replaceAll(c,{needle:b})}},{name:"undo",bindKey:e("Ctrl-Z","Command-Z"),exec:function(a){a.undo()}},{name:"redo",bindKey:e("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(a){a.redo()}},{name:"copylinesup",bindKey:e("Alt-Shift-Up","Command-Option-Up"),exec:function(a){a.copyLinesUp()}},{name:"movelinesup",bindKey:e("Alt-Up","Option-Up"),exec:function(a){a.moveLinesUp()}},{name:"copylinesdown",bindKey:e("Alt-Shift-Down","Command-Option-Down"),exec:function(a){a.copyLinesDown()}},{name:"movelinesdown",bindKey:e("Alt-Down","Option-Down"),exec:function(a){a.moveLinesDown()}},{name:"del",bindKey:e("Delete","Delete|Ctrl-D"),exec:function(a){a.remove("right")},multiSelectAction:"forEach"},{name:"backspace",bindKey:e("Command-Backspace|Option-Backspace|Shift-Backspace|Backspace","Ctrl-Backspace|Command-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(a){a.remove("left")},multiSelectAction:"forEach"},{name:"removetolinestart",bindKey:e("Alt-Backspace","Command-Backspace"),exec:function(a){a.removeToLineStart()},multiSelectAction:"forEach"},{name:"removetolineend",bindKey:e("Alt-Delete","Ctrl-K"),exec:function(a){a.removeToLineEnd()},multiSelectAction:"forEach"},{name:"removewordleft",bindKey:e("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(a){a.removeWordLeft()},multiSelectAction:"forEach"},{name:"removewordright",bindKey:e("Ctrl-Delete","Alt-Delete"),exec:function(a){a.removeWordRight()},multiSelectAction:"forEach"},{name:"outdent",bindKey:e("Shift-Tab","Shift-Tab"),exec:function(a){a.blockOutdent()},multiSelectAction:"forEach"},{name:"indent",bindKey:e("Tab","Tab"),exec:function(a){a.indent()},multiSelectAction:"forEach"},{name:"insertstring",exec:function(a,b){a.insert(b)},multiSelectAction:"forEach"},{name:"inserttext",exec:function(a,b){a.insert(d.stringRepeat(b.text||"",b.times||1))},multiSelectAction:"forEach"},{name:"splitline",bindKey:e(null,"Ctrl-O"),exec:function(a){a.splitLine()},multiSelectAction:"forEach"},{name:"transposeletters",bindKey:e("Ctrl-T","Ctrl-T"),exec:function(a){a.transposeLetters()},multiSelectAction:function(a){a.transposeSelections(1)}},{name:"touppercase",bindKey:e("Ctrl-U","Ctrl-U"),exec:function(a){a.toUpperCase()},multiSelectAction:"forEach"},{name:"tolowercase",bindKey:e("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(a){a.toLowerCase()},multiSelectAction:"forEach"}]}),define("ace/undomanager",["require","exports","module"],function(a,b,c){var d=function(){this.reset()};(function(){this.execute=function(a){var b=a.args[0];this.$doc=a.args[1],this.$undoStack.push(b),this.$redoStack=[]},this.undo=function(a){var b=this.$undoStack.pop(),c=null;return b&&(c=this.$doc.undoChanges(b,a),this.$redoStack.push(b)),c},this.redo=function(a){var b=this.$redoStack.pop(),c=null;return b&&(c=this.$doc.redoChanges(b,a),this.$undoStack.push(b)),c},this.reset=function(){this.$undoStack=[],this.$redoStack=[]},this.hasUndo=function(){return this.$undoStack.length>0},this.hasRedo=function(){return this.$redoStack.length>0}}).call(d.prototype),b.UndoManager=d}),define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/useragent","ace/config","ace/lib/net","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/renderloop","ace/lib/event_emitter","ace/requirejs/text!ace/css/editor.css"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/dom"),f=a("./lib/event"),g=a("./lib/useragent"),h=a("./config"),i=a("./lib/net"),j=a("./layer/gutter").Gutter,k=a("./layer/marker").Marker,l=a("./layer/text").Text,m=a("./layer/cursor").Cursor,n=a("./scrollbar").ScrollBar,o=a("./renderloop").RenderLoop,p=a("./lib/event_emitter").EventEmitter,q=a("ace/requirejs/text!./css/editor.css");e.importCssString(q,"ace_editor");var r=function(a,b){var c=this;this.container=a,this.$keepTextAreaAtCursor=!g.isIE,e.addCssClass(a,"ace_editor"),this.setTheme(b),this.$gutter=e.createElement("div"),this.$gutter.className="ace_gutter",this.container.appendChild(this.$gutter),this.scroller=e.createElement("div"),this.scroller.className="ace_scroller",this.container.appendChild(this.scroller),this.content=e.createElement("div"),this.content.className="ace_content",this.scroller.appendChild(this.content),this.setHighlightGutterLine(!0),this.$gutterLayer=new j(this.$gutter),this.$gutterLayer.on("changeGutterWidth",this.onResize.bind(this,!0)),this.$markerBack=new k(this.content);var d=this.$textLayer=new l(this.content);this.canvas=d.element,this.$markerFront=new k(this.content),this.characterWidth=d.getCharacterWidth(),this.lineHeight=d.getLineHeight(),this.$cursorLayer=new m(this.content),this.$cursorPadding=8,this.$horizScroll=!1,this.$horizScrollAlwaysVisible=!1,this.$animatedScroll=!1,this.scrollBar=new n(a),this.scrollBar.addEventListener("scroll",function(a){c.$inScrollAnimation||c.session.setScrollTop(a.data)}),this.scrollTop=0,this.scrollLeft=0,f.addListener(this.scroller,"scroll",function(){var a=c.scroller.scrollLeft;c.scrollLeft=a,c.session.setScrollLeft(a)}),this.cursorPos={row:0,column:0},this.$textLayer.addEventListener("changeCharacterSize",function(){c.characterWidth=d.getCharacterWidth(),c.lineHeight=d.getLineHeight(),c.$updatePrintMargin(),c.onResize(!0),c.$loop.schedule(c.CHANGE_FULL)}),this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0},this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:1,characterWidth:1,minHeight:1,maxHeight:1,offset:0,height:1},this.$loop=new o(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),this.$loop.schedule(this.CHANGE_FULL),this.setPadding(4),this.$updatePrintMargin()};(function(){this.showGutter=!0,this.CHANGE_CURSOR=1,this.CHANGE_MARKER=2,this.CHANGE_GUTTER=4,this.CHANGE_SCROLL=8,this.CHANGE_LINES=16,this.CHANGE_TEXT=32,this.CHANGE_SIZE=64,this.CHANGE_MARKER_BACK=128,this.CHANGE_MARKER_FRONT=256,this.CHANGE_FULL=512,this.CHANGE_H_SCROLL=1024,d.implement(this,p),this.setSession=function(a){this.session=a,this.scroller.className="ace_scroller",this.$cursorLayer.setSession(a),this.$markerBack.setSession(a),this.$markerFront.setSession(a),this.$gutterLayer.setSession(a),this.$textLayer.setSession(a),this.$loop.schedule(this.CHANGE_FULL)},this.updateLines=function(a,b){b===undefined&&(b=Infinity),this.$changedLines?(this.$changedLines.firstRow>a&&(this.$changedLines.firstRow=a),this.$changedLines.lastRow<b&&(this.$changedLines.lastRow=b)):this.$changedLines={firstRow:a,lastRow:b},this.$loop.schedule(this.CHANGE_LINES)},this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER),this.$textLayer.onChangeTabSize()},this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)},this.updateFull=function(a){a?this.$renderChanges(this.CHANGE_FULL,!0):this.$loop.schedule(this.CHANGE_FULL)},this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()},this.onResize=function(a,b,c,d){var f=this.CHANGE_SIZE,g=this.$size;if(this.resizing>2)return;this.resizing>1?this.resizing++:this.resizing=a?1:0,d||(d=e.getInnerHeight(this.container));if(a||g.height!=d)g.height=d,this.scroller.style.height=d+"px",g.scrollerHeight=this.scroller.clientHeight,this.scrollBar.setHeight(g.scrollerHeight),this.session&&(this.session.setScrollTop(this.getScrollTop()),f|=this.CHANGE_FULL);c||(c=e.getInnerWidth(this.container));if(a||this.resizing>1||g.width!=c){g.width=c;var b=this.showGutter?this.$gutter.offsetWidth:0;this.scroller.style.left=b+"px",g.scrollerWidth=Math.max(0,c-b-this.scrollBar.getWidth()),this.scroller.style.right=this.scrollBar.getWidth()+"px";if(this.session.getUseWrapMode()&&this.adjustWrapLimit()||a)f|=this.CHANGE_FULL}a?this.$renderChanges(f,!0):this.$loop.schedule(f),a&&delete this.resizing},this.adjustWrapLimit=function(){var a=this.$size.scrollerWidth-this.$padding*2,b=Math.floor(a/this.characterWidth);return this.session.adjustWrapLimit(b)},this.setAnimatedScroll=function(a){this.$animatedScroll=a},this.getAnimatedScroll=function(){return this.$animatedScroll},this.setShowInvisibles=function(a){this.$textLayer.setShowInvisibles(a)&&this.$loop.schedule(this.CHANGE_TEXT)},this.getShowInvisibles=function(){return this.$textLayer.showInvisibles},this.getDisplayIndentGuides=function(){return this.$textLayer.displayIndentGuides},this.setDisplayIndentGuides=function(a){this.$textLayer.setDisplayIndentGuides(a)&&this.$loop.schedule(this.CHANGE_TEXT)},this.$showPrintMargin=!0,this.setShowPrintMargin=function(a){this.$showPrintMargin=a,this.$updatePrintMargin()},this.getShowPrintMargin=function(){return this.$showPrintMargin},this.$printMarginColumn=80,this.setPrintMarginColumn=function(a){this.$printMarginColumn=a,this.$updatePrintMargin()},this.getPrintMarginColumn=function(){return this.$printMarginColumn},this.getShowGutter=function(){return this.showGutter},this.setShowGutter=function(a){if(this.showGutter===a)return;this.$gutter.style.display=a?"block":"none",this.showGutter=a,this.onResize(!0)},this.getFadeFoldWidgets=function(){return e.hasCssClass(this.$gutter,"ace_fade-fold-widgets")},this.setFadeFoldWidgets=function(a){a?e.addCssClass(this.$gutter,"ace_fade-fold-widgets"):e.removeCssClass(this.$gutter,"ace_fade-fold-widgets")},this.$highlightGutterLine=!1,this.setHighlightGutterLine=function(a){if(this.$highlightGutterLine==a)return;this.$highlightGutterLine=a;if(!this.$gutterLineHighlight){this.$gutterLineHighlight=e.createElement("div"),this.$gutterLineHighlight.className="ace_gutter_active_line",this.$gutter.appendChild(this.$gutterLineHighlight);return}this.$gutterLineHighlight.style.display=a?"":"none",this.$cursorLayer.$pixelPos&&this.$updateGutterLineHighlight()},this.getHighlightGutterLine=function(){return this.$highlightGutterLine},this.$updateGutterLineHighlight=function(){this.$gutterLineHighlight.style.top=this.$cursorLayer.$pixelPos.top-this.layerConfig.offset+"px",this.$gutterLineHighlight.style.height=this.layerConfig.lineHeight+"px"},this.$updatePrintMargin=function(){var a;if(!this.$showPrintMargin&&!this.$printMarginEl)return;this.$printMarginEl||(a=e.createElement("div"),a.className="ace_print_margin_layer",this.$printMarginEl=e.createElement("div"),this.$printMarginEl.className="ace_print_margin",a.appendChild(this.$printMarginEl),this.content.insertBefore(a,this.$textLayer.element));var b=this.$printMarginEl.style;b.left=this.characterWidth*this.$printMarginColumn+this.$padding+"px",b.visibility=this.$showPrintMargin?"visible":"hidden"},this.getContainerElement=function(){return this.container},this.getMouseEventTarget=function(){return this.content},this.getTextAreaContainer=function(){return this.container},this.$moveTextAreaToCursor=function(){if(!this.$keepTextAreaAtCursor)return;var a=this.$cursorLayer.$pixelPos.top,b=this.$cursorLayer.$pixelPos.left;a-=this.layerConfig.offset;if(a<0||a>this.layerConfig.height-this.lineHeight)return;var c=this.characterWidth;this.$composition&&(c+=this.textarea.scrollWidth),b-=this.scrollLeft,b>this.$size.scrollerWidth-c&&(b=this.$size.scrollerWidth-c),this.showGutter&&(b+=this.$gutterLayer.gutterWidth),this.textarea.style.height=this.lineHeight+"px",this.textarea.style.width=c+"px",this.textarea.style.left=b+"px",this.textarea.style.top=a-1+"px"},this.getFirstVisibleRow=function(){return this.layerConfig.firstRow},this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)},this.getLastFullyVisibleRow=function(){var a=Math.floor((this.layerConfig.height+this.layerConfig.offset)/this.layerConfig.lineHeight);return this.layerConfig.firstRow-1+a},this.getLastVisibleRow=function(){return this.layerConfig.lastRow},this.$padding=null,this.setPadding=function(a){this.$padding=a,this.$textLayer.setPadding(a),this.$cursorLayer.setPadding(a),this.$markerFront.setPadding(a),this.$markerBack.setPadding(a),this.$loop.schedule(this.CHANGE_FULL),this.$updatePrintMargin()},this.getHScrollBarAlwaysVisible=function(){return this.$horizScrollAlwaysVisible},this.setHScrollBarAlwaysVisible=function(a){this.$horizScrollAlwaysVisible!=a&&(this.$horizScrollAlwaysVisible=a,(!this.$horizScrollAlwaysVisible||!this.$horizScroll)&&this.$loop.schedule(this.CHANGE_SCROLL))},this.$updateScrollBar=function(){this.scrollBar.setInnerHeight(this.layerConfig.maxHeight),this.scrollBar.setScrollTop(this.scrollTop)},this.$renderChanges=function(a,b){if(!b&&(!a||!this.session||!this.container.offsetWidth))return;(a&this.CHANGE_FULL||a&this.CHANGE_SIZE||a&this.CHANGE_TEXT||a&this.CHANGE_LINES||a&this.CHANGE_SCROLL)&&this.$computeLayerConfig();if(a&this.CHANGE_H_SCROLL){this.scroller.scrollLeft=this.scrollLeft;var c=this.scroller.scrollLeft;this.scrollLeft=c,this.session.setScrollLeft(c),this.scroller.className=this.scrollLeft==0?"ace_scroller":"ace_scroller horscroll"}if(a&this.CHANGE_FULL){this.$textLayer.checkForSizeChanges(),this.$updateScrollBar(),this.$textLayer.update(this.layerConfig),this.showGutter&&this.$gutterLayer.update(this.layerConfig),this.$markerBack.update(this.layerConfig),this.$markerFront.update(this.layerConfig),this.$cursorLayer.update(this.layerConfig),this.$moveTextAreaToCursor(),this.$highlightGutterLine&&this.$updateGutterLineHighlight();return}if(a&this.CHANGE_SCROLL){this.$updateScrollBar(),a&this.CHANGE_TEXT||a&this.CHANGE_LINES?this.$textLayer.update(this.layerConfig):this.$textLayer.scrollLines(this.layerConfig),this.showGutter&&this.$gutterLayer.update(this.layerConfig),this.$markerBack.update(this.layerConfig),this.$markerFront.update(this.layerConfig),this.$cursorLayer.update(this.layerConfig),this.$moveTextAreaToCursor(),this.$highlightGutterLine&&this.$updateGutterLineHighlight();return}a&this.CHANGE_TEXT?(this.$textLayer.update(this.layerConfig),this.showGutter&&this.$gutterLayer.update(this.layerConfig)):a&this.CHANGE_LINES?(this.$updateLines()||a&this.CHANGE_GUTTER&&this.showGutter)&&this.$gutterLayer.update(this.layerConfig):(a&this.CHANGE_TEXT||a&this.CHANGE_GUTTER)&&this.showGutter&&this.$gutterLayer.update(this.layerConfig),a&this.CHANGE_CURSOR&&(this.$cursorLayer.update(this.layerConfig),this.$moveTextAreaToCursor(),this.$highlightGutterLine&&this.$updateGutterLineHighlight()),a&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)&&this.$markerFront.update(this.layerConfig),a&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)&&this.$markerBack.update(this.layerConfig),a&this.CHANGE_SIZE&&this.$updateScrollBar()},this.$computeLayerConfig=function(){var a=this.session,b=this.scrollTop%this.lineHeight,c=this.$size.scrollerHeight+this.lineHeight,d=this.$getLongestLine(),e=this.$horizScrollAlwaysVisible||this.$size.scrollerWidth-d<0,f=this.$horizScroll!==e;this.$horizScroll=e,f&&(this.scroller.style.overflowX=e?"scroll":"hidden",e||this.session.setScrollLeft(0));var g=this.session.getScreenLength()*this.lineHeight;this.session.setScrollTop(Math.max(0,Math.min(this.scrollTop,g-this.$size.scrollerHeight)));var h=Math.ceil(c/this.lineHeight)-1,i=Math.max(0,Math.round((this.scrollTop-b)/this.lineHeight)),j=i+h,k,l,m=this.lineHeight;i=a.screenToDocumentRow(i,0);var n=a.getFoldLine(i);n&&(i=n.start.row),k=a.documentToScreenRow(i,0),l=a.getRowLength(i)*m,j=Math.min(a.screenToDocumentRow(j,0),a.getLength()-1),c=this.$size.scrollerHeight+a.getRowLength(j)*m+l,b=this.scrollTop-k*m,this.layerConfig={width:d,padding:this.$padding,firstRow:i,firstRowScreen:k,lastRow:j,lineHeight:m,characterWidth:this.characterWidth,minHeight:c,maxHeight:g,offset:b,height:this.$size.scrollerHeight},this.$gutterLayer.element.style.marginTop=-b+"px",this.content.style.marginTop=-b+"px",this.content.style.width=d+2*this.$padding+"px",this.content.style.height=c+"px",f&&this.onResize(!0)},this.$updateLines=function(){var a=this.$changedLines.firstRow,b=this.$changedLines.lastRow;this.$changedLines=null;var c=this.layerConfig;if(a>c.lastRow+1)return;if(b<c.firstRow)return;if(b===Infinity){this.showGutter&&this.$gutterLayer.update(c),this.$textLayer.update(c);return}return this.$textLayer.updateLines(c,a,b),!0},this.$getLongestLine=function(){var a=this.session.getScreenWidth();return this.$textLayer.showInvisibles&&(a+=1),Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(a*this.characterWidth))},this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(!0)),this.$loop.schedule(this.CHANGE_MARKER_FRONT)},this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers()),this.$loop.schedule(this.CHANGE_MARKER_BACK)},this.addGutterDecoration=function(a,b){this.$gutterLayer.addGutterDecoration(a,b)},this.removeGutterDecoration=function(a,b){this.$gutterLayer.removeGutterDecoration(a,b)},this.updateBreakpoints=function(a){this.$loop.schedule(this.CHANGE_GUTTER)},this.setAnnotations=function(a){this.$gutterLayer.setAnnotations(a),this.$loop.schedule(this.CHANGE_GUTTER)},this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)},this.hideCursor=function(){this.$cursorLayer.hideCursor()},this.showCursor=function(){this.$cursorLayer.showCursor()},this.scrollSelectionIntoView=function(a,b,c){this.scrollCursorIntoView(a,c),this.scrollCursorIntoView(b,c)},this.scrollCursorIntoView=function(a,b){if(this.$size.scrollerHeight===0)return;var c=this.$cursorLayer.getPixelPosition(a),d=c.left,e=c.top;this.scrollTop>e?(b&&(e-=b*this.$size.scrollerHeight),this.session.setScrollTop(e)):this.scrollTop+this.$size.scrollerHeight<e+this.lineHeight&&(b&&(e+=b*this.$size.scrollerHeight),this.session.setScrollTop(e+this.lineHeight-this.$size.scrollerHeight));var f=this.scrollLeft;f>d?(d<this.$padding+2*this.layerConfig.characterWidth&&(d=0),this.session.setScrollLeft(d)):f+this.$size.scrollerWidth<d+this.characterWidth&&this.session.setScrollLeft(Math.round(d+this.characterWidth-this.$size.scrollerWidth))},this.getScrollTop=function(){return this.session.getScrollTop()},this.getScrollLeft=function(){return this.session.getScrollLeft()},this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight},this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)},this.scrollToRow=function(a){this.session.setScrollTop(a*this.lineHeight)},this.alignCursor=function(a,b){typeof a=="number"&&(a={row:a,column:0});var c=this.$cursorLayer.getPixelPosition(a),d=c.top-this.$size.scrollerHeight*(b||0);this.session.setScrollTop(d)},this.STEPS=8,this.$calcSteps=function(a,b){var c=0,d=this.STEPS,e=[],f=function(a,b,c){return c*(Math.pow(a-1,3)+1)+b};for(c=0;c<d;++c)e.push(f(c/this.STEPS,a,b-a));return e},this.scrollToLine=function(a,b,c,d){var e=this.$cursorLayer.getPixelPosition({row:a,column:0}),f=e.top;b&&(f-=this.$size.scrollerHeight/2);var g=this.scrollTop;this.session.setScrollTop(f),c!==!1&&this.animateScrolling(g,d)},this.animateScrolling=function(a,b){var c=this.scrollTop;if(this.$animatedScroll&&Math.abs(a-c)<1e5){var d=this,e=d.$calcSteps(a,c);this.$inScrollAnimation=!0,clearInterval(this.$timer),d.session.setScrollTop(e.shift()),this.$timer=setInterval(function(){e.length?(d.session.setScrollTop(e.shift()),d.session.$scrollTop=c):c!=null?(d.session.$scrollTop=-1,d.session.setScrollTop(c),c=null):(d.$timer=clearInterval(d.$timer),d.$inScrollAnimation=!1,b&&b())},10)}},this.scrollToY=function(a){this.scrollTop!==a&&(this.$loop.schedule(this.CHANGE_SCROLL),this.scrollTop=a)},this.scrollToX=function(a){a<0&&(a=0),this.scrollLeft!==a&&(this.scrollLeft=a),this.$loop.schedule(this.CHANGE_H_SCROLL)},this.scrollBy=function(a,b){b&&this.session.setScrollTop(this.session.getScrollTop()+b),a&&this.session.setScrollLeft(this.session.getScrollLeft()+a)},this.isScrollableBy=function(a,b){if(b<0&&this.session.getScrollTop()>0)return!0;if(b>0&&this.session.getScrollTop()+this.$size.scrollerHeight<this.layerConfig.maxHeight)return!0},this.pixelToScreenCoordinates=function(a,b){var c=this.scroller.getBoundingClientRect(),d=(a+this.scrollLeft-c.left-this.$padding)/this.characterWidth,e=Math.floor((b+this.scrollTop-c.top)/this.lineHeight),f=Math.round(d);return{row:e,column:f,side:d-f>0?1:-1}},this.screenToTextCoordinates=function(a,b){var c=this.scroller.getBoundingClientRect(),d=Math.round((a+this.scrollLeft-c.left-this.$padding)/this.characterWidth),e=Math.floor((b+this.scrollTop-c.top)/this.lineHeight);return this.session.screenToDocumentPosition(e,Math.max(d,0))},this.textToScreenCoordinates=function(a,b){var c=this.scroller.getBoundingClientRect(),d=this.session.documentToScreenPosition(a,b),e=this.$padding+Math.round(d.column*this.characterWidth),f=d.row*this.lineHeight;return{pageX:c.left+e-this.scrollLeft,pageY:c.top+f-this.scrollTop}},this.visualizeFocus=function(){e.addCssClass(this.container,"ace_focus")},this.visualizeBlur=function(){e.removeCssClass(this.container,"ace_focus")},this.showComposition=function(a){this.$composition||(this.$composition={keepTextAreaAtCursor:this.$keepTextAreaAtCursor,cssText:this.textarea.style.cssText}),this.$keepTextAreaAtCursor=!0,e.addCssClass(this.textarea,"ace_composition"),this.textarea.style.cssText="",this.$moveTextAreaToCursor()},this.setCompositionText=function(a){this.$moveTextAreaToCursor()},this.hideComposition=function(){if(!this.$composition)return;e.removeCssClass(this.textarea,"ace_composition"),this.$keepTextAreaAtCursor=this.$composition.keepTextAreaAtCursor,this.textarea.style.cssText=this.$composition.cssText,this.$composition=null},this._loadTheme=function(a,b){if(!h.get("packaged"))return b();i.loadScript(h.moduleUrl(a,"theme"),b)},this.setTheme=function(b){function h(a){e.importCssString(a.cssText,a.cssClass,c.container.ownerDocument),c.$theme&&e.removeCssClass(c.container,c.$theme),c.$theme=a?a.cssClass:null,c.$theme&&e.addCssClass(c.container,c.$theme),a&&a.isDark?e.addCssClass(c.container,"ace_dark"):e.removeCssClass(c.container,"ace_dark"),c.$size&&(c.$size.width=0,c.onResize())}var c=this;this.$themeValue=b;if(!b||typeof b=="string"){var d=b||"ace/theme/textmate",f;try{f=a(d)}catch(g){}if(f)return h(f);c._loadTheme(d,function(){a([d],function(a){if(c.$themeValue!==b)return;h(a)})})}else h(b)},this.getTheme=function(){return this.$themeValue},this.setStyle=function(b){e.addCssClass(this.container,b)},this.unsetStyle=function(b){e.removeCssClass(this.container,b)},this.destroy=function(){this.$textLayer.destroy(),this.$cursorLayer.destroy()}}).call(r.prototype),b.VirtualRenderer=r}),define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter"],function(a,b,c){var d=a("../lib/dom"),e=a("../lib/oop"),f=a("../lib/event_emitter").EventEmitter,g=function(a){this.element=d.createElement("div"),this.element.className="ace_layer ace_gutter-layer",a.appendChild(this.element),this.setShowFoldWidgets(this.$showFoldWidgets),this.gutterWidth=0,this.$annotations=[]};(function(){e.implement(this,f),this.setSession=function(a){this.session=a},this.addGutterDecoration=function(a,b){window.console&&console.warn&&console.warn("deprecated use session.addGutterDecoration"),this.session.addGutterDecoration(a,b)},this.removeGutterDecoration=function(a,b){window.console&&console.warn&&console.warn("deprecated use session.removeGutterDecoration"),this.session.removeGutterDecoration(a,b)},this.setAnnotations=function(a){this.$annotations=[];for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];if(!c)continue;var d=this.$annotations[b]={text:[]};for(var e=0;e<c.length;e++){var f=c[e],g=f.text.replace(/"/g,"&quot;").replace(/'/g,"&#8217;").replace(/</,"&lt;");d.text.indexOf(g)===-1&&d.text.push(g);var h=f.type;h=="error"?d.className=" ace_error":h=="warning"&&d.className!=" ace_error"?d.className=" ace_warning":h=="info"&&!d.className&&(d.className=" ace_info")}}},this.update=function(a){var b={className:""},c=[],e=a.firstRow,f=a.lastRow,g=this.session.getNextFoldLine(e),h=g?g.start.row:Infinity,i=this.$showFoldWidgets&&this.session.foldWidgets,j=this.session.$breakpoints,k=this.session.$decorations,l=0;for(;;){e>h&&(e=g.end.row+1,g=this.session.getNextFoldLine(e,g),h=g?g.start.row:Infinity);if(e>f)break;var m=this.$annotations[e]||b;c.push("<div class='ace_gutter-cell ",j[e]||"",k[e]||"",m.className,"' style='height:",this.session.getRowLength(e)*a.lineHeight,"px;'>",l=e+1);if(i){var n=i[e];n==null&&(n=i[e]=this.session.getFoldWidget(e)),n&&c.push("<span class='ace_fold-widget ",n,n=="start"&&e==h&&e<g.end.row?" closed":" open","'></span>")}c.push("</div>"),e++}this.element=d.setInnerHtml(this.element,c.join("")),this.element.style.height=a.minHeight+"px",this.session.$useWrapMode&&(l=this.session.getLength());var o=(""+l).length*a.characterWidth,p=this.$padding||this.$computePadding();o+=p.left+p.right,o!==this.gutterWidth&&(this.gutterWidth=o,this.element.style.width=Math.ceil(this.gutterWidth)+"px",this._emit("changeGutterWidth",o))},this.$showFoldWidgets=!0,this.setShowFoldWidgets=function(a){a?d.addCssClass(this.element,"ace_folding-enabled"):d.removeCssClass(this.element,"ace_folding-enabled"),this.$showFoldWidgets=a,this.$padding=null},this.getShowFoldWidgets=function(){return this.$showFoldWidgets},this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0};var a=d.computedStyle(this.element.firstChild);return this.$padding={},this.$padding.left=parseInt(a.paddingLeft)+1,this.$padding.right=parseInt(a.paddingRight),this.$padding},this.getRegion=function(a){var b=this.$padding||this.$computePadding(),c=this.element.getBoundingClientRect();if(a.x<b.left+c.left)return"markers";if(this.$showFoldWidgets&&a.x>c.right-b.right)return"foldWidgets"}}).call(g.prototype),b.Gutter=g}),define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(a,b,c){var d=a("../range").Range,e=a("../lib/dom"),f=function(a){this.element=e.createElement("div"),this.element.className="ace_layer ace_marker-layer",a.appendChild(this.element)};(function(){this.$padding=0,this.setPadding=function(a){this.$padding=a},this.setSession=function(a){this.session=a},this.setMarkers=function(a){this.markers=a},this.update=function(a){var a=a||this.config;if(!a)return;this.config=a;var b=[];for(var c in this.markers){var d=this.markers[c];if(!d.range){d.update(b,this,this.session,a);continue}var f=d.range.clipRows(a.firstRow,a.lastRow);if(f.isEmpty())continue;f=f.toScreenRange(this.session);if(d.renderer){var g=this.$getTop(f.start.row,a),h=Math.round(this.$padding+f.start.column*a.characterWidth);d.renderer(b,f,h,g,a)}else f.isMultiLine()?d.type=="text"?this.drawTextMarker(b,f,d.clazz,a):this.drawMultiLineMarker(b,f,d.clazz,a,d.type):this.drawSingleLineMarker(b,f,d.clazz+" start",a,null,d.type)}this.element=e.setInnerHtml(this.element,b.join(""))},this.$getTop=function(a,b){return(a-b.firstRowScreen)*b.lineHeight},this.drawTextMarker=function(a,b,c,e){var f=b.start.row,g=new d(f,b.start.column,f,this.session.getScreenLastRowColumn(f));this.drawSingleLineMarker(a,g,c+" start",e,1,"text"),f=b.end.row,g=new d(f,0,f,b.end.column),this.drawSingleLineMarker(a,g,c,e,0,"text");for(f=b.start.row+1;f<b.end.row;f++)g.start.row=f,g.end.row=f,g.end.column=this.session.getScreenLastRowColumn(f),this.drawSingleLineMarker(a,g,c,e,1,"text")},this.drawMultiLineMarker=function(a,b,c,d,e){var f=e==="background"?0:this.$padding,g=d.lineHeight,h=this.$getTop(b.start.row,d),i=Math.round(f+b.start.column*d.characterWidth);a.push("<div class='",c," start' style='","height:",g,"px;","right:0;","top:",h,"px;","left:",i,"px;'></div>"),h=this.$getTop(b.end.row,d);var j=Math.round(b.end.column*d.characterWidth);a.push("<div class='",c,"' style='","height:",g,"px;","width:",j,"px;","top:",h,"px;","left:",f,"px;'></div>"),g=(b.end.row-b.start.row-1)*d.lineHeight;if(g<0)return;h=this.$getTop(b.start.row+1,d),a.push("<div class='",c,"' style='","height:",g,"px;","right:0;","top:",h,"px;","left:",f,"px;'></div>")},this.drawSingleLineMarker=function(a,b,c,d,e,f){var g=f==="background"?0:this.$padding,h=d.lineHeight;if(f==="background")var i=d.width;else i=Math.round((b.end.column+(e||0)-b.start.column)*d.characterWidth);var j=this.$getTop(b.start.row,d),k=Math.round(g+b.start.column*d.characterWidth);a.push("<div class='",c,"' style='","height:",h,"px;","width:",i,"px;","top:",j,"px;","left:",k,"px;'></div>")}}).call(f.prototype),b.Marker=f}),define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/lib/event_emitter"],function(a,b,c){var d=a("../lib/oop"),e=a("../lib/dom"),f=a("../lib/lang"),g=a("../lib/useragent"),h=a("../lib/event_emitter").EventEmitter,i=function(a){this.element=e.createElement("div"),this.element.className="ace_layer ace_text-layer",a.appendChild(this.element),this.$characterSize=this.$measureSizes()||{width:0,height:0},this.$pollSizeChanges()};(function(){d.implement(this,h),this.EOF_CHAR="¶",this.EOL_CHAR="¬",this.TAB_CHAR="→",this.SPACE_CHAR="·",this.$padding=0,this.setPadding=function(a){this.$padding=a,this.element.style.padding="0 "+a+"px"},this.getLineHeight=function(){return this.$characterSize.height||1},this.getCharacterWidth=function(){return this.$characterSize.width||1},this.checkForSizeChanges=function(){var a=this.$measureSizes();a&&(this.$characterSize.width!==a.width||this.$characterSize.height!==a.height)&&(this.$characterSize=a,this._emit("changeCharacterSize",{data:a}))},this.$pollSizeChanges=function(){var a=this;this.$pollSizeChangesTimer=setInterval(function(){a.checkForSizeChanges()},500)},this.$fontStyles={fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},this.$measureSizes=g.isIE||g.isOldGecko?function(){var a=1e3;if(!this.$measureNode){var b=this.$measureNode=e.createElement("div"),c=b.style;c.width=c.height="auto",c.left=c.top=-a*40+"px",c.visibility="hidden",c.position="fixed",c.overflow="visible",c.whiteSpace="nowrap",b.innerHTML=f.stringRepeat("Xy",a);if(this.element.ownerDocument.body)this.element.ownerDocument.body.appendChild(b);else{var d=this.element.parentNode;while(!e.hasCssClass(d,"ace_editor"))d=d.parentNode;d.appendChild(b)}}if(!this.element.offsetWidth)return null;var c=this.$measureNode.style,g=e.computedStyle(this.element);for(var h in this.$fontStyles)c[h]=g[h];var i={height:this.$measureNode.offsetHeight,width:this.$measureNode.offsetWidth/(a*2)};return i.width==0||i.height==0?null:i}:function(){if(!this.$measureNode){var a=this.$measureNode=e.createElement("div"),b=a.style;b.width=b.height="auto",b.left=b.top="-100px",b.visibility="hidden",b.position="fixed",b.overflow="visible",b.whiteSpace="nowrap",a.innerHTML="X";var c=this.element.parentNode;while(c&&!e.hasCssClass(c,"ace_editor"))c=c.parentNode;if(!c)return this.$measureNode=null;c.appendChild(a)}var d=this.$measureNode.getBoundingClientRect(),f={height:d.height,width:d.width};return f.width==0||f.height==0?null:f},this.setSession=function(a){this.session=a,this.$computeTabString()},this.showInvisibles=!1,this.setShowInvisibles=function(a){return this.showInvisibles==a?!1:(this.showInvisibles=a,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(a){return this.displayIndentGuides==a?!1:(this.displayIndentGuides=a,this.$computeTabString(),!0)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var a=this.session.getTabSize();this.tabSize=a;var b=this.$tabStrings=[0];for(var c=1;c<a+1;c++)this.showInvisibles?b.push("<span class='ace_invisible'>"+this.TAB_CHAR+Array(c).join("&#160;")+"</span>"):b.push((new Array(c+1)).join("&#160;"));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var d="ace_indent-guide",e=Array(this.tabSize+1).join("&#160;"),f=e;this.showInvisibles&&(d+=" ace_invisible",f=this.TAB_CHAR+e.substr(6)),this.$tabStrings[" "]="<span class='"+d+"'>"+e+"</span>",this.$tabStrings["	"]="<span class='"+d+"'>"+f+"</span>"}},this.updateLines=function(a,b,c){(this.config.lastRow!=a.lastRow||this.config.firstRow!=a.firstRow)&&this.scrollLines(a),this.config=a;var d=Math.max(b,a.firstRow),f=Math.min(c,a.lastRow),g=this.element.childNodes,h=0;for(var i=a.firstRow;i<d;i++){var j=this.session.getFoldLine(i);if(j){if(j.containsRow(d)){d=j.start.row;break}i=j.end.row}h++}var i=d,j=this.session.getNextFoldLine(i),k=j?j.start.row:Infinity;for(;;){i>k&&(i=j.end.row+1,j=this.session.getNextFoldLine(i,j),k=j?j.start.row:Infinity);if(i>f)break;var l=g[h++];if(l){var m=[];this.$renderLine(m,i,!this.$useLineGroups(),i==k?j:!1),e.setInnerHtml(l,m.join(""))}i++}},this.scrollLines=function(a){var b=this.config;this.config=a;if(!b||b.lastRow<a.firstRow)return this.update(a);if(a.lastRow<b.firstRow)return this.update(a);var c=this.element;if(b.firstRow<a.firstRow)for(var d=this.session.getFoldedRowCount(b.firstRow,a.firstRow-1);d>0;d--)c.removeChild(c.firstChild);if(b.lastRow>a.lastRow)for(var d=this.session.getFoldedRowCount(a.lastRow+1,b.lastRow);d>0;d--)c.removeChild(c.lastChild);if(a.firstRow<b.firstRow){var e=this.$renderLinesFragment(a,a.firstRow,b.firstRow-1);c.firstChild?c.insertBefore(e,c.firstChild):c.appendChild(e)}if(a.lastRow>b.lastRow){var e=this.$renderLinesFragment(a,b.lastRow+1,a.lastRow);c.appendChild(e)}},this.$renderLinesFragment=function(a,b,c){var d=this.element.ownerDocument.createDocumentFragment(),f=b,g=this.session.getNextFoldLine(f),h=g?g.start.row:Infinity;for(;;){f>h&&(f=g.end.row+1,g=this.session.getNextFoldLine(f,g),h=g?g.start.row:Infinity);if(f>c)break;var i=e.createElement("div"),j=[];this.$renderLine(j,f,!1,f==h?g:!1),i.innerHTML=j.join("");if(this.$useLineGroups())i.className="ace_line_group",d.appendChild(i);else{var k=i.childNodes;while(k.length)d.appendChild(k[0])}f++}return d},this.update=function(a){this.config=a;var b=[],c=a.firstRow,d=a.lastRow,f=c,g=this.session.getNextFoldLine(f),h=g?g.start.row:Infinity;for(;;){f>h&&(f=g.end.row+1,g=this.session.getNextFoldLine(f,g),h=g?g.start.row:Infinity);if(f>d)break;this.$useLineGroups()&&b.push("<div class='ace_line_group'>"),this.$renderLine(b,f,!1,f==h?g:!1),this.$useLineGroups()&&b.push("</div>"),f++}this.element=e.setInnerHtml(this.element,b.join(""))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderToken=function(a,b,c,d){var e=this,f=/\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,g=function(a,c,d,f,g){if(c)return(new Array(a.length+1)).join("&#160;");if(a=="&")return"&#38;";if(a=="<")return"&#60;";if(a=="	"){var h=e.session.getScreenTabSize(b+f);return b+=h-1,e.$tabStrings[h]}if(a=="　"){var i=e.showInvisibles?"ace_cjk ace_invisible":"ace_cjk",j=e.showInvisibles?e.SPACE_CHAR:"";return b+=1,"<span class='"+i+"' style='width:"+e.config.characterWidth*2+"px'>"+j+"</span>"}return d?"<span class='ace_invisible ace_invalid'>"+e.SPACE_CHAR+"</span>":(b+=1,"<span class='ace_cjk' style='width:"+e.config.characterWidth*2+"px'>"+a+"</span>")},h=d.replace(f,g);if(!this.$textToken[c.type]){var i="ace_"+c.type.replace(/\./g," ace_"),j="";c.type=="fold"&&(j=" style='width:"+c.value.length*this.config.characterWidth+"px;' "),a.push("<span class='",i,"'",j,">",h,"</span>")}else a.push(h);return b+d.length},this.renderIndentGuide=function(a,b){var c=b.search(this.$indentGuideRe);return c<=0?b:b[0]==" "?(c-=c%this.tabSize,a.push(Array(c/this.tabSize+1).join(this.$tabStrings[" "])),b.substr(c)):b[0]=="	"?(a.push(Array(c+1).join(this.$tabStrings["	"])),b.substr(c)):b},this.$renderWrappedLine=function(a,b,c,d){var e=0,f=0,g=c[0],h=0;for(var i=0;i<b.length;i++){var j=b[i],k=j.value;if(i==0&&this.displayIndentGuides){e=k.length,k=this.renderIndentGuide(a,k);if(!k)continue;e-=k.length}if(e+k.length<g)h=this.$renderToken(a,h,j,k),e+=k.length;else{while(e+k.length>=g)h=this.$renderToken(a,h,j,k.substring(0,g-e)),k=k.substring(g-e),e=g,d||a.push("</div>","<div class='ace_line' style='height:",this.config.lineHeight,"px'>"),f++,h=0,g=c[f]||Number.MAX_VALUE;k.length!=0&&(e+=k.length,h=this.$renderToken(a,h,j,k))}}},this.$renderSimpleLine=function(a,b){var c=0,d=b[0],e=d.value;this.displayIndentGuides&&(e=this.renderIndentGuide(a,e)),e&&(c=this.$renderToken(a,c,d,e));for(var f=1;f<b.length;f++)d=b[f],e=d.value,c=this.$renderToken(a,c,d,e)},this.$renderLine=function(a,b,c,d){!d&&d!=0&&(d=this.session.getFoldLine(b));if(d)var e=this.$getFoldLineTokens(b,d);else var e=this.session.getTokens(b);c||a.push("<div class='ace_line' style='height:",this.config.lineHeight,"px'>");if(e.length){var f=this.session.getRowSplitData(b);f&&f.length?this.$renderWrappedLine(a,e,f,c):this.$renderSimpleLine(a,e)}this.showInvisibles&&(d&&(b=d.end.row),a.push("<span class='ace_invisible'>",b==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,"</span>")),c||a.push("</div>")},this.$getFoldLineTokens=function(a,b){function e(a,b,c){var e=0,f=0;while(f+a[e].value.length<b){f+=a[e].value.length,e++;if(e==a.length)return}if(f!=b){var g=a[e].value.substring(b-f);g.length>c-b&&(g=g.substring(0,c-b)),d.push({type:a[e].type,value:g}),f=b+g.length,e+=1}while(f<c&&e<a.length){var g=a[e].value;g.length+f>c?d.push({type:a[e].type,value:g.substring(0,c-f)}):d.push(a[e]),f+=g.length,e+=1}}var c=this.session,d=[],f=c.getTokens(a);return b.walk(function(a,b,g,h,i){a?d.push({type:"fold",value:a}):(i&&(f=c.getTokens(b)),f.length&&e(f,h,g))},b.end.row,this.session.getLine(b.end.row).length),d},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$measureNode&&this.$measureNode.parentNode.removeChild(this.$measureNode),delete this.$measureNode}}).call(i.prototype),b.Text=i}),define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(a,b,c){var d=a("../lib/dom"),e=function(a){this.element=d.createElement("div"),this.element.className="ace_layer ace_cursor-layer",a.appendChild(this.element),this.isVisible=!1,this.cursors=[],this.cursor=this.addCursor()};(function(){this.$padding=0,this.setPadding=function(a){this.$padding=a},this.setSession=function(a){this.session=a},this.addCursor=function(){var a=d.createElement("div"),b="ace_cursor";return this.isVisible||(b+=" ace_hidden"),this.overwrite&&(b+=" ace_overwrite"),a.className=b,this.element.appendChild(a),this.cursors.push(a),a},this.removeCursor=function(){if(this.cursors.length>1){var a=this.cursors.pop();return a.parentNode.removeChild(a),a}},this.hideCursor=function(){this.isVisible=!1;for(var a=this.cursors.length;a--;)d.addCssClass(this.cursors[a],"ace_hidden");clearInterval(this.blinkId)},this.showCursor=function(){this.isVisible=!0;for(var a=this.cursors.length;a--;)d.removeCssClass(this.cursors[a],"ace_hidden");this.element.style.visibility="",this.restartTimer()},this.restartTimer=function(){clearInterval(this.blinkId);if(!this.isVisible)return;var a=this.cursors.length==1?this.cursor:this.element;this.blinkId=setInterval(function(){a.style.visibility="hidden",setTimeout(function(){a.style.visibility=""},400)},1e3)},this.getPixelPosition=function(a,b){if(!this.config||!this.session)return{left:0,top:0};a||(a=this.session.selection.getCursor());var c=this.session.documentToScreenPosition(a),d=Math.round(this.$padding+c.column*this.config.characterWidth),e=(c.row-(b?this.config.firstRowScreen:0))*this.config.lineHeight;return{left:d,top:e}},this.update=function(a){this.config=a;if(this.session.selectionMarkerCount>0){var b=this.session.$selectionMarkers,c=0,d,e=0;for(var c=b.length;c--;){d=b[c];var f=this.getPixelPosition(d.cursor,!0),g=(this.cursors[e++]||this.addCursor()).style;g.left=f.left+"px",g.top=f.top+"px",g.width=a.characterWidth+"px",g.height=a.lineHeight+"px"}if(e>1)while(this.cursors.length>e)this.removeCursor()}else{var f=this.getPixelPosition(null,!0),g=this.cursor.style;g.left=f.left+"px",g.top=f.top+"px",g.width=a.characterWidth+"px",g.height=a.lineHeight+"px";while(this.cursors.length>1)this.removeCursor()}var h=this.session.getOverwrite();h!=this.overwrite&&this.$setOverite(h),this.$pixelPos=f,this.restartTimer()},this.$setOverite=function(a){this.overwrite=a;for(var b=this.cursors.length;b--;)a?d.addCssClass(this.cursors[b],"ace_overwrite"):d.removeCssClass(this.cursors[b],"ace_overwrite")},this.destroy=function(){clearInterval(this.blinkId)}}).call(e.prototype),b.Cursor=e}),define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(a,b,c){var d=a("./lib/oop"),e=a("./lib/dom"),f=a("./lib/event"),g=a("./lib/event_emitter").EventEmitter,h=function(a){this.element=e.createElement("div"),this.element.className="ace_sb",this.inner=e.createElement("div"),this.element.appendChild(this.inner),a.appendChild(this.element),this.width=e.scrollbarWidth(a.ownerDocument),this.element.style.width=(this.width||15)+5+"px",f.addListener(this.element,"scroll",this.onScroll.bind(this))};(function(){d.implement(this,g),this.onScroll=function(){this._emit("scroll",{data:this.element.scrollTop})},this.getWidth=function(){return this.width},this.setHeight=function(a){this.element.style.height=a+"px"},this.setInnerHeight=function(a){this.inner.style.height=a+"px"},this.setScrollTop=function(a){this.element.scrollTop=a}}).call(h.prototype),b.ScrollBar=h}),define("ace/renderloop",["require","exports","module","ace/lib/event"],function(a,b,c){var d=a("./lib/event"),e=function(a,b){this.onRender=a,this.pending=!1,this.changes=0,this.window=b||window};(function(){this.schedule=function(a){this.changes=this.changes|a;if(!this.pending){this.pending=!0;var b=this;d.nextTick(function(){b.pending=!1;var a;while(a=b.changes)b.changes=0,b.onRender(a)},this.window)}}}).call(e.prototype),b.RenderLoop=e}),define("ace/requirejs/text!ace/css/editor.css",[],".ace_editor {\n    position: absolute;\n    overflow: hidden;\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Droid Sans Mono', 'Consolas', monospace;\n    font-size: 12px;\n}\n\n.ace_scroller {\n    position: absolute;\n    overflow: hidden;\n}\n\n.ace_content {\n    position: absolute;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    cursor: text;\n}\n\n.ace_gutter {\n    position: absolute;\n    overflow : hidden;\n    height: 100%;\n    width: auto;\n    cursor: default;\n    z-index: 4;\n}\n\n.ace_gutter_active_line {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.ace_scroller.horscroll {\n    box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;\n}\n\n.ace_gutter-cell {\n    padding-left: 19px;\n    padding-right: 6px;\n    background-repeat: no-repeat;\n}\n\n.ace_gutter-cell.ace_error {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=\");\n    background-repeat: no-repeat;\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_warning {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==\");\n    background-position: 2px center;\n}\n\n.ace_gutter-cell.ace_info {\n    background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7\");\n    background-position: 2px center;\n}\n.ace_dark .ace_gutter-cell.ace_info {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=\");\n}\n\n.ace_editor .ace_sb {\n    position: absolute;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    right: 0;\n}\n\n.ace_editor .ace_sb div {\n    position: absolute;\n    width: 1px;\n    left: 0;\n}\n\n.ace_editor .ace_print_margin_layer {\n    z-index: 0;\n    position: absolute;\n    overflow: hidden;\n    margin: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.ace_editor .ace_print_margin {\n    position: absolute;\n    height: 100%;\n}\n\n.ace_editor > textarea {\n    position: absolute;\n    z-index: 0;\n    width: 0.5em;\n    height: 1em;\n    opacity: 0;\n    background: transparent;\n    appearance: none;\n    -moz-appearance: none;\n    border: none;\n    resize: none;\n    outline: none;\n    overflow: hidden;\n}\n\n.ace_editor > textarea.ace_composition {\n    background: #fff;\n    color: #000;\n    z-index: 1000;\n    opacity: 1;\n    border: solid lightgray 1px;\n    margin: -1px\n}\n\n.ace_layer {\n    z-index: 1;\n    position: absolute;\n    overflow: hidden;\n    white-space: nowrap;\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    /* setting pointer-events: auto; on node under the mouse, which changes\n        during scroll, will break mouse wheel scrolling in Safari */\n    pointer-events: none;\n}\n\n.ace_gutter .ace_layer {\n    position: relative;\n    width: auto;\n    text-align: right;\n    pointer-events: auto;\n}\n\n.ace_text-layer {\n    color: black;\n    font: inherit !important;\n}\n\n.ace_cjk {\n    display: inline-block;\n    text-align: center;\n}\n\n.ace_cursor-layer {\n    z-index: 4;\n}\n\n.ace_cursor {\n    z-index: 4;\n    position: absolute;\n}\n\n.ace_cursor.ace_hidden {\n    opacity: 0.2;\n}\n\n.ace_editor.multiselect .ace_cursor {\n    border-left-width: 1px;\n}\n\n.ace_line {\n    white-space: nowrap;\n}\n\n.ace_marker-layer .ace_step {\n    position: absolute;\n    z-index: 3;\n}\n\n.ace_marker-layer .ace_selection {\n    position: absolute;\n    z-index: 5;\n}\n\n.ace_marker-layer .ace_bracket {\n    position: absolute;\n    z-index: 6;\n}\n\n.ace_marker-layer .ace_active_line {\n    position: absolute;\n    z-index: 2;\n}\n\n.ace_marker-layer .ace_selected_word {\n    position: absolute;\n    z-index: 4;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n.ace_line .ace_fold {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n\n    display: inline-block;\n    height: 11px;\n    margin-top: -2px;\n    vertical-align: middle;\n\n    background-image:\n        url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),\n        url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82\");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n    color: transparent;\n\n    border: 1px solid black;\n    -moz-border-radius: 2px;\n    -webkit-border-radius: 2px;\n    border-radius: 2px;\n\n    cursor: pointer;\n    pointer-events: auto;\n}\n\n.ace_dark .ace_fold {\n}\n\n.ace_fold:hover{\n    background-image:\n        url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),\n        url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82\");\n    background-repeat: no-repeat, repeat-x;\n    background-position: center center, top left;\n}\n\n.ace_dragging .ace_content {\n    cursor: move;\n}\n\n.ace_gutter_tooltip {\n    background-color: #FFFFD5;\n    border: 1px solid gray;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n    color: black;\n    display: inline-block;\n    padding: 4px;\n    position: absolute;\n    z-index: 300;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    cursor: default;\n}\n\n.ace_folding-enabled > .ace_gutter-cell {\n    padding-right: 13px;\n}\n\n.ace_fold-widget {\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n\n    margin: 0 -12px 0 1px;\n    display: inline-block;\n    height: 100%;\n    width: 11px;\n    vertical-align: bottom;\n\n    background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82\");\n    background-repeat: no-repeat;\n    background-position: center;\n\n    border-radius: 3px;\n    \n    border: 1px solid transparent;\n}\n\n.ace_fold-widget.end {\n    background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82\");\n}\n\n.ace_fold-widget.closed {\n    background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82\");\n}\n\n.ace_fold-widget:hover {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(255, 255, 255, 0.2);\n    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n}\n\n.ace_fold-widget:active {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    background-color: rgba(0, 0, 0, 0.05);\n    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);\n}\n/**\n * Dark version for fold widgets\n */\n.ace_dark .ace_fold-widget {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");\n}\n.ace_dark .ace_fold-widget.end {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");\n}\n.ace_dark .ace_fold-widget.closed {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");\n}\n.ace_dark .ace_fold-widget:hover {\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    background-color: rgba(255, 255, 255, 0.1);\n}\n.ace_dark .ace_fold-widget:active {\n    -moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    -webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);\n}\n    \n    \n    \n.ace_fold-widget.invalid {\n    background-color: #FFB4B4;\n    border-color: #DE5555;\n}\n\n.ace_fade-fold-widgets .ace_fold-widget {\n       -moz-transition: opacity 0.4s ease 0.05s;\n    -webkit-transition: opacity 0.4s ease 0.05s;\n         -o-transition: opacity 0.4s ease 0.05s;\n        -ms-transition: opacity 0.4s ease 0.05s;\n            transition: opacity 0.4s ease 0.05s;\n    opacity: 0;\n}\n\n.ace_fade-fold-widgets:hover .ace_fold-widget {\n       -moz-transition: opacity 0.05s ease 0.05s;\n    -webkit-transition: opacity 0.05s ease 0.05s;\n         -o-transition: opacity 0.05s ease 0.05s;\n        -ms-transition: opacity 0.05s ease 0.05s;\n            transition: opacity 0.05s ease 0.05s;\n    opacity:1;\n}\n"),define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor"],function(a,b,c){function l(a,b,c){return k.$options.wrap=!0,k.$options.needle=b,k.$options.backwards=c==-1,k.find(a)}function o(a,b){return a.row==b.row&&a.column==b.column}function p(a){a.$onAddRange=a.$onAddRange.bind(a),a.$onRemoveRange=a.$onRemoveRange.bind(a),a.$onMultiSelect=a.$onMultiSelect.bind(a),a.$onSingleSelect=a.$onSingleSelect.bind(a),b.onSessionChange.call(a,a),a.on("changeSession",b.onSessionChange.bind(a)),a.on("mousedown",g),a.commands.addCommands(i.defaultCommands),q(a)}function q(a){function e(){c&&(d.style.cursor="",c=!1)}var b=a.textInput.getElement(),c=!1,d=a.renderer.content;h.addListener(b,"keydown",function(a){a.keyCode==18&&!(a.ctrlKey||a.shiftKey||a.metaKey)?c||(d.style.cursor="crosshair",c=!0):c&&(d.style.cursor="")}),h.addListener(b,"keyup",e),h.addListener(b,"blur",e)}var d=a("./range_list").RangeList,e=a("./range").Range,f=a("./selection").Selection,g=a("./mouse/multi_select_handler").onMouseDown,h=a("./lib/event"),i=a("./commands/multi_select_commands");b.commands=i.defaultCommands.concat(i.multiSelectCommands);var j=a("./search").Search,k=new j,m=a("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(m.prototype),function(){this.ranges=null,this.rangeList=null,this.addRange=function(a,b){if(!a)return;if(!this.inMultiSelectMode&&this.rangeCount==0){var c=this.toOrientedRange();if(a.intersects(c))return b||this.fromOrientedRange(a);this.rangeList.add(c),this.$onAddRange(c)}a.cursor||(a.cursor=a.end);var d=this.rangeList.add(a);return this.$onAddRange(a),d.length&&this.$onRemoveRange(d),this.rangeCount>1&&!this.inMultiSelectMode&&(this._emit("multiSelect"),this.inMultiSelectMode=!0,this.session.$undoSelect=!1,this.rangeList.attach(this.session)),b||this.fromOrientedRange(a)},this.toSingleRange=function(a){a=a||this.ranges[0];var b=this.rangeList.removeAll();b.length&&this.$onRemoveRange(b),a&&this.fromOrientedRange(a)},this.substractPoint=function(a){var b=this.rangeList.substractPoint(a);if(b)return this.$onRemoveRange(b),b[0]},this.mergeOverlappingRanges=function(){var a=this.rangeList.merge();a.length?this.$onRemoveRange(a):this.ranges[0]&&this.fromOrientedRange(this.ranges[0])},this.$onAddRange=function(a){this.rangeCount=this.rangeList.ranges.length,this.ranges.unshift(a),this._emit("addRange",{range:a})},this.$onRemoveRange=function(a){this.rangeCount=this.rangeList.ranges.length;if(this.rangeCount==1&&this.inMultiSelectMode){var b=this.rangeList.ranges.pop();a.push(b),this.rangeCount=0}for(var c=a.length;c--;){var d=this.ranges.indexOf(a[c]);this.ranges.splice(d,1)}this._emit("removeRange",{ranges:a}),this.rangeCount==0&&this.inMultiSelectMode&&(this.inMultiSelectMode=!1,this._emit("singleSelect"),this.session.$undoSelect=!0,this.rangeList.detach(this.session)),b=b||this.ranges[0],b&&!b.isEqual(this.getRange())&&this.fromOrientedRange(b)},this.$initRangeList=function(){if(this.rangeList)return;this.rangeList=new d,this.ranges=[],this.rangeCount=0},this.getAllRanges=function(){return this.rangeList.ranges.concat()},this.splitIntoLines=function(){if(this.rangeCount>1){var a=this.rangeList.ranges,b=a[a.length-1],c=e.fromPoints(a[0].start,b.end);this.toSingleRange(),this.setSelectionRange(c,b.cursor==b.start)}else{var c=this.getRange(),d=c.start.row,f=c.end.row;if(d==f)return;var g=[],h=this.getLineRange(d,!0);h.start.column=c.start.column,g.push(h);for(var i=d+1;i<f;i++)g.push(this.getLineRange(i,!0));h=this.getLineRange(f,!0),h.end.column=c.end.column,g.push(h),g.forEach(this.addRange,this)}},this.toggleBlockSelection=function(){if(this.rangeCount>1){var a=this.rangeList.ranges,b=a[a.length-1],c=e.fromPoints(a[0].start,b.end);this.toSingleRange(),this.setSelectionRange(c,b.cursor==b.start)}else{var d=this.session.documentToScreenPosition(this.selectionLead),f=this.session.documentToScreenPosition(this.selectionAnchor),g=this.rectangularRangeBlock(d,f);g.forEach(this.addRange,this)}},this.rectangularRangeBlock=function(a,b,c){var d=[],f=a.column<b.column;if(f)var g=a.column,h=b.column;else var g=b.column,h=a.column;var i=a.row<b.row;if(i)var j=a.row,k=b.row;else var j=b.row,k=a.row;g<0&&(g=0),j<0&&(j=0),j==k&&(c=!0);for(var l=j;l<=k;l++){var m=e.fromPoints(this.session.screenToDocumentPosition(l,g),this.session.screenToDocumentPosition(l,h));if(m.isEmpty()){if(n&&o(m.end,n))break;var n=m.end}m.cursor=f?m.start:m.end,d.push(m)}i&&d.reverse();if(!c){var p=d.length-1;while(d[p].isEmpty()&&p>0)p--;if(p>0){var q=0;while(d[q].isEmpty())q++}for(var r=p;r>=q;r--)d[r].isEmpty()&&d.splice(r,1)}return d}}.call(f.prototype);var n=a("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.addSelectionMarker=function(a){a.cursor||(a.cursor=a.end);var b=this.getSelectionStyle();return a.marker=this.session.addMarker(a,"ace_selection",b),this.session.$selectionMarkers.push(a),this.session.selectionMarkerCount=this.session.$selectionMarkers.length,a},this.removeSelectionMarker=function(a){if(!a.marker)return;this.session.removeMarker(a.marker);var b=this.session.$selectionMarkers.indexOf(a);b!=-1&&this.session.$selectionMarkers.splice(b,1),this.session.selectionMarkerCount=this.session.$selectionMarkers.length},this.removeSelectionMarkers=function(a){var b=this.session.$selectionMarkers;for(var c=a.length;c--;){var d=a[c];if(!d.marker)continue;this.session.removeMarker(d.marker);var e=b.indexOf(d);e!=-1&&b.splice(e,1)}this.session.selectionMarkerCount=b.length},this.$onAddRange=function(a){this.addSelectionMarker(a.range),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onRemoveRange=function(a){this.removeSelectionMarkers(a.ranges),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelect=function(a){if(this.inMultiSelectMode)return;this.inMultiSelectMode=!0,this.setStyle("multiselect"),this.keyBinding.addKeyboardHandler(i.keyboardHandler),this.commands.on("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onSingleSelect=function(a){if(this.session.multiSelect.inVirtualMode)return;this.inMultiSelectMode=!1,this.unsetStyle("multiselect"),this.keyBinding.removeKeyboardHandler(i.keyboardHandler),this.commands.removeEventListener("exec",this.$onMultiSelectExec),this.renderer.updateCursor(),this.renderer.updateBackMarkers()},this.$onMultiSelectExec=function(a){var b=a.command,c=a.editor;if(!c.multiSelect)return;b.multiSelectAction?b.multiSelectAction=="forEach"?c.forEachSelection(b,a.args):b.multiSelectAction=="single"?(c.exitMultiSelectMode(),b.exec(c,a.args||{})):b.multiSelectAction(c,a.args||{}):(b.exec(c,a.args||{}),c.multiSelect.addRange(c.multiSelect.toOrientedRange()),c.multiSelect.mergeOverlappingRanges()),a.preventDefault()},this.forEachSelection=function(a,b){if(this.inVirtualSelectionMode)return;var c=this.session,d=this.selection,e=d.rangeList,g=d._eventRegistry;d._eventRegistry={};var h=new f(c);this.inVirtualSelectionMode=!0;for(var i=e.ranges.length;i--;)h.fromOrientedRange(e.ranges[i]),this.selection=c.selection=h,a.exec(this,b||{}),h.toOrientedRange(e.ranges[i]);h.detach(),this.selection=c.selection=d,this.inVirtualSelectionMode=!1,d._eventRegistry=g,d.mergeOverlappingRanges(),this.onCursorChange(),this.onSelectionChange()},this.exitMultiSelectMode=function(){if(this.inVirtualSelectionMode)return;this.multiSelect.toSingleRange()},this.getCopyText=function(){var a="";if(this.inMultiSelectMode){var b=this.multiSelect.rangeList.ranges;a=[];for(var c=0;c<b.length;c++)a.push(this.session.getTextRange(b[c]));a=a.join(this.session.getDocument().getNewLineCharacter())}else this.selection.isEmpty()||(a=this.session.getTextRange(this.getSelectionRange()));return a},this.onPaste=function(a){if(this.$readOnly)return;this._emit("paste",a);if(!this.inMultiSelectMode)return this.insert(a);var b=a.split(/\r\n|\r|\n/),c=this.selection.rangeList.ranges;if(b.length>c.length||b.length<=2||!b[1])return this.commands.exec("insertstring",this,a);for(var d=c.length;d--;){var e=c[d];e.isEmpty()||this.session.remove(e),this.session.insert(e.start,b[d])}},this.findAll=function(a,b,c){b=b||{},b.needle=a||b.needle,this.$search.set(b);var d=this.$search.findAll(this.session);if(!d.length)return 0;this.$blockScrolling+=1;var e=this.multiSelect;c||e.toSingleRange(d[0]);for(var f=d.length;f--;)e.addRange(d[f],!0);return this.$blockScrolling-=1,d.length},this.selectMoreLines=function(a,b){var c=this.selection.toOrientedRange(),d=c.cursor==c.end,f=this.session.documentToScreenPosition(c.cursor);this.selection.$desiredColumn&&(f.column=this.selection.$desiredColumn);var g=this.session.screenToDocumentPosition(f.row+a,f.column);if(!c.isEmpty())var h=this.session.documentToScreenPosition(d?c.end:c.start),i=this.session.screenToDocumentPosition(h.row+a,h.column);else var i=g;if(d){var j=e.fromPoints(g,i);j.cursor=j.start}else{var j=e.fromPoints(i,g);j.cursor=j.end}j.desiredColumn=f.column;if(!this.selection.inMultiSelectMode)this.selection.addRange(c);else if(b)var k=c.cursor;this.selection.addRange(j),k&&this.selection.substractPoint(k)},this.transposeSelections=function(a){var b=this.session,c=b.multiSelect,d=c.ranges;for(var e=d.length;e--;){var f=d[e];if(f.isEmpty()){var g=b.getWordRange(f.start.row,f.start.column);f.start.row=g.start.row,f.start.column=g.start.column,f.end.row=g.end.row,f.end.column=g.end.column}}c.mergeOverlappingRanges();var h=[];for(var e=d.length;e--;){var f=d[e];h.unshift(b.getTextRange(f))}a<0?h.unshift(h.pop()):h.push(h.shift());for(var e=d.length;e--;){var f=d[e],g=f.clone();b.replace(f,h[e]),f.start.row=g.start.row,f.start.column=g.start.column}},this.selectMore=function(a,b){var c=this.session,d=c.multiSelect,e=d.toOrientedRange();if(e.isEmpty()){var e=c.getWordRange(e.start.row,e.start.column);e.cursor=e.end,this.multiSelect.addRange(e)}var f=c.getTextRange(e),g=l(c,f,a);g&&(g.cursor=a==-1?g.start:g.end,this.multiSelect.addRange(g)),b&&this.multiSelect.substractPoint(e.cursor)}}).call(n.prototype),b.onSessionChange=function(a){var b=a.session;b.multiSelect||(b.$selectionMarkers=[],b.selection.$initRangeList(),b.multiSelect=b.selection),this.multiSelect=b.multiSelect;var c=a.oldSession;c&&(c.multiSelect&&c.multiSelect.editor==this&&(c.multiSelect.editor=null),b.multiSelect.removeEventListener("addRange",this.$onAddRange),b.multiSelect.removeEventListener("removeRange",this.$onRemoveRange),b.multiSelect.removeEventListener("multiSelect",this.$onMultiSelect),b.multiSelect.removeEventListener("singleSelect",this.$onSingleSelect)),b.multiSelect.on("addRange",this.$onAddRange),b.multiSelect.on("removeRange",this.$onRemoveRange),b.multiSelect.on("multiSelect",this.$onMultiSelect),b.multiSelect.on("singleSelect",this.$onSingleSelect),this.inMultiSelectMode!=b.selection.inMultiSelectMode&&(b.selection.inMultiSelectMode?this.$onMultiSelect():this.$onSingleSelect())},b.MultiSelect=p}),define("ace/range_list",["require","exports","module"],function(a,b,c){var d=function(){this.ranges=[]};(function(){this.comparePoints=function(a,b){return a.row-b.row||a.column-b.column},this.pointIndex=function(a,b){var c=this.ranges;for(var d=b||0;d<c.length;d++){var e=c[d],f=this.comparePoints(a,e.end);if(f>0)continue;return f==0?d:(f=this.comparePoints(a,e.start),f>=0?d:-d-1)}return-d-1},this.add=function(a){var b=this.pointIndex(a.start);b<0&&(b=-b-1);var c=this.pointIndex(a.end,b);return c<0?c=-c-1:c++,this.ranges.splice(b,c-b,a)},this.addList=function(a){var b=[];for(var c=a.length;c--;)b.push.call(b,this.add(a[c]));return b},this.substractPoint=function(a){var b=this.pointIndex(a);if(b>=0)return this.ranges.splice(b,1)},this.merge=function(){var a=[],b=this.ranges,c=b[0],d;for(var e=1;e<b.length;e++){d=c,c=b[e];var f=this.comparePoints(d.end,c.start);if(f<0)continue;if(f==0&&!d.isEmpty()&&!c.isEmpty())continue;this.comparePoints(d.end,c.end)<0&&(d.end.row=c.end.row,d.end.column=c.end.column),b.splice(e,1),a.push(c),c=d,e--}return a},this.contains=function(a,b){return this.pointIndex({row:a,column:b})>=0},this.containsPoint=function(a){return this.pointIndex(a)>=0},this.rangeAtPoint=function(a){var b=this.pointIndex(a);if(b>=0)return this.ranges[b]},this.clipRows=function(a,b){var c=this.ranges;if(c[0].start.row>b||c[c.length-1].start.row<a)return[];var d=this.pointIndex({row:a,column:0});d<0&&(d=-d-1);var e=this.pointIndex({row:b,column:0},d);e<0&&(e=-e-1);var f=[];for(var g=d;g<e;g++)f.push(c[g]);return f},this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)},this.attach=function(a){this.session&&this.detach(),this.session=a,this.onChange=this.$onChange.bind(this),this.session.on("change",this.onChange)},this.detach=function(){if(!this.session)return;this.session.removeListener("change",this.onChange),this.session=null},this.$onChange=function(a){var b=a.data.range;if(a.data.action[0]=="i")var c=b.start,d=b.end;else var d=b.start,c=b.end;var e=c.row,f=d.row,g=f-e,h=-c.column+d.column,i=this.ranges;for(var j=0,k=i.length;j<k;j++){var l=i[j];if(l.end.row<e)continue;if(l.start.row>e)break;l.start.row==e&&l.start.column>=c.column&&(l.start.column+=h,l.start.row+=g),l.end.row==e&&l.end.column>=c.column&&(l.end.column+=h,l.end.row+=g)}if(g!=0&&j<k)for(;j<k;j++){var l=i[j];l.start.row+=g,l.end.row+=g}}}).call(d.prototype),b.RangeList=d}),define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event"],function(a,b,c){function e(a,b){return a.row==b.row&&a.column==b.column}function f(a){var b=a.domEvent,c=b.altKey,f=b.shiftKey,g=a.getAccelKey(),h=a.getButton();if(a.editor.inMultiSelectMode&&h==2){a.editor.textInput.onContextMenu(a.domEvent);return}if(!g&&!c){h==0&&a.editor.inMultiSelectMode&&a.editor.exitMultiSelectMode();return}var i=a.editor,j=i.selection,k=i.inMultiSelectMode,l=a.getDocumentPosition(),m=j.getCursor(),n=a.inSelection()||j.isEmpty()&&e(l,m),o=a.x,p=a.y,q=function(a){o=a.clientX,p=a.clientY},r=function(){var a=i.renderer.pixelToScreenCoordinates(o,p),b=s.screenToDocumentPosition(a.row,a.column);if(e(u,a)&&e(b,j.selectionLead))return;u=a,i.selection.moveCursorToPosition(b),i.selection.clearSelection(),i.renderer.scrollCursorIntoView(),i.removeSelectionMarkers(x),x=j.rectangularRangeBlock(u,t),x.forEach(i.addSelectionMarker,i),i.updateSelectionMarkers()},s=i.session,t=i.renderer.pixelToScreenCoordinates(o,p),u=t;if(g&&!f&&!c&&h==0){if(!k&&n)return;if(!k){var v=j.toOrientedRange();i.addSelectionMarker(v)}var w=j.rangeList.rangeAtPoint(l);d.capture(i.container,function(){},function(){var a=j.toOrientedRange();w&&a.isEmpty()&&e(w.cursor,a.cursor)?j.substractPoint(a.cursor):(v&&(i.removeSelectionMarker(v),j.addRange(v)),j.addRange(a))})}else if(!f&&c&&h==0){a.stop(),k&&!g?j.toSingleRange():!k&&g&&j.addRange(),j.moveCursorToPosition(l),j.clearSelection();var x=[],y=function(a){clearInterval(A),i.removeSelectionMarkers(x);for(var b=0;b<x.length;b++)j.addRange(x[b])},z=r;d.capture(i.container,q,y);var A=setInterval(function(){z()},20);return a.preventDefault()}}var d=a("../lib/event");b.onMouseDown=f}),define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(a,b,c){b.defaultCommands=[{name:"addCursorAbove",exec:function(a){a.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},readonly:!0},{name:"addCursorBelow",exec:function(a){a.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},readonly:!0},{name:"addCursorAboveSkipCurrent",exec:function(a){a.selectMoreLines(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},readonly:!0},{name:"addCursorBelowSkipCurrent",exec:function(a){a.selectMoreLines(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},readonly:!0},{name:"selectMoreBefore",exec:function(a){a.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},readonly:!0},{name:"selectMoreAfter",exec:function(a){a.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},readonly:!0},{name:"selectNextBefore",exec:function(a){a.selectMore(-1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},readonly:!0},{name:"selectNextAfter",exec:function(a){a.selectMore(1,!0)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},readonly:!0},{name:"splitIntoLines",exec:function(a){a.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Shift-L",mac:"Ctrl-Shift-L"},readonly:!0}],b.multiSelectCommands=[{name:"singleSelection",bindKey:"esc",exec:function(a){a.exitMultiSelectMode()},readonly:!0,isAvailable:function(a){return a&&a.inMultiSelectMode}}];var d=a("../keyboard/hash_handler").HashHandler;b.keyboardHandler=new d(b.multiSelectCommands)}),define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/config"],function(a,b,c){var d=a("../lib/oop"),e=a("../lib/event_emitter").EventEmitter,f=a("../config"),g=function(b,c,d){this.changeListener=this.changeListener.bind(this);if(f.get("packaged"))this.$worker=new Worker(f.moduleUrl(c,"worker"));else{var e;typeof a.supports!="undefined"&&a.supports.indexOf("ucjs2-pinf-0")>=0?e=a.nameToUrl("ace/worker/worker_sourcemint"):(a.nameToUrl&&!a.toUrl&&(a.toUrl=a.nameToUrl),e=this.$normalizePath(a.toUrl("ace/worker/worker",null,"_"))),this.$worker=new Worker(e);var g={};for(var h=0;h<b.length;h++){var i=b[h],j=this.$normalizePath(a.toUrl(i,null,"_").replace(/.js(\?.*)?$/,""));g[i]=j}}this.$worker.postMessage({init:!0,tlns:g,module:c,classname:d}),this.callbackId=1,this.callbacks={};var k=this;this.$worker.onerror=function(a){throw window.console&&console.log&&console.log(a),a},this.$worker.onmessage=function(a){var b=a.data;switch(b.type){case"log":window.console&&console.log&&console.log(b.data);break;case"event":k._emit(b.name,{data:b.data});break;case"call":var c=k.callbacks[b.id];c&&(c(b.data),delete k.callbacks[b.id])}}};(function(){d.implement(this,e),this.$normalizePath=function(a){return location.host?(a=a.replace(/^[a-z]+:\/\/[^\/]+/,""),a=location.protocol+"//"+location.host+(a.charAt(0)=="/"?"":location.pathname.replace(/\/[^\/]*$/,""))+"/"+a.replace(/^[\/]+/,""),a):a},this.terminate=function(){this._emit("terminate",{}),this.$worker.terminate(),this.$worker=null,this.$doc.removeEventListener("change",this.changeListener),this.$doc=null},this.send=function(a,b){this.$worker.postMessage({command:a,args:b})},this.call=function(a,b,c){if(c){var d=this.callbackId++;this.callbacks[d]=c,b.push(d)}this.send(a,b)},this.emit=function(a,b){try{this.$worker.postMessage({event:a,data:{data:b.data}})}catch(c){}},this.attachToDocument=function(a){this.$doc&&this.terminate(),this.$doc=a,this.call("setValue",[a.getValue()]),a.on("change",this.changeListener)},this.changeListener=function(a){a.range={start:a.data.range.start,end:a.data.range.end},this.emit("change",a)}}).call(g.prototype),b.WorkerClient=g}),define("ace/keyboard/state_handler",["require","exports","module"],function(a,b,c){function e(a){this.keymapping=this.$buildKeymappingRegex(a)}var d=!1;e.prototype={$buildKeymappingRegex:function(a){for(var b in a)this.$buildBindingsRegex(a[b]);return a},$buildBindingsRegex:function(a){a.forEach(function(a){a.key?a.key=new RegExp("^"+a.key+"$"):Array.isArray(a.regex)?("key"in a||(a.key=new RegExp("^"+a.regex[1]+"$")),a.regex=new RegExp(a.regex.join("")+"$")):a.regex&&(a.regex=new RegExp(a.regex+"$"))})},$composeBuffer:function(a,b,c,d){if(a.state==null||a.buffer==null)a.state="start",a.buffer="";var e=[];b&1&&e.push("ctrl"),b&8&&e.push("command"),b&2&&e.push("option"),b&4&&e.push("shift"),c&&e.push(c);var f=e.join("-"),g=a.buffer+f;b!=2&&(a.buffer=g);var h={bufferToUse:g,symbolicName:f};return d&&(h.keyIdentifier=d.keyIdentifier),h},$find:function(a,b,c,e,f,g){var h={};return this.keymapping[a.state].some(function(i){var j;if(i.key&&!i.key.test(c))return!1;if(i.regex&&!(j=i.regex.exec(b)))return!1;if(i.match&&!i.match(b,e,f,c,g))return!1;if(i.disallowMatches)for(var k=0;k<i.disallowMatches.length;k++)if(!!j[i.disallowMatches[k]])return!1;if(i.exec){h.command=i.exec;if(i.params){var l;h.args={},i.params.forEach(function(a){a.match!=null&&j!=null?l=j[a.match]||a.defaultValue:l=a.defaultValue,a.type==="number"&&(l=parseInt(l)),h.args[a.name]=l})}a.buffer=""}return i.then&&(a.state=i.then,a.buffer=""),h.command==null&&(h.command="null"),d&&console.log("KeyboardStateMapper#find",i),!0}),h.command?h:(a.buffer="",!1)},handleKeyboard:function(a,b,c,e,f){b==-1&&(b=0);if(b==0||c!=""&&c!=String.fromCharCode(0)){var g=this.$composeBuffer(a,b,c,f),h=g.bufferToUse,i=g.symbolicName,j=g.keyIdentifier;return g=this.$find(a,h,i,b,c,j),d&&console.log("KeyboardStateMapper#match",h,i,g),g}return null}},b.matchCharacterOnly=function(a,b,c,d){return b==0?!0:b==4&&c.length==1?!0:!1},b.StateHandler=e}),define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(a,b,c){var d=a("./range").Range,e=a("./lib/event_emitter").EventEmitter,f=a("./lib/oop"),g=function(a,b,c,d,e,f){var g=this;this.length=b,this.session=a,this.doc=a.getDocument(),this.mainClass=e,this.othersClass=f,this.$onUpdate=this.onUpdate.bind(this),this.doc.on("change",this.$onUpdate),this.$others=d,this.$onCursorChange=function(){setTimeout(function(){g.onCursorChange()})},this.$pos=c;var h=a.getUndoManager().$undoStack||a.getUndoManager().$undostack||{length:-1};this.$undoStackDepth=h.length,this.setup(),a.selection.on("changeCursor",this.$onCursorChange)};(function(){f.implement(this,e),this.setup=function(){var a=this,b=this.doc,c=this.session,e=this.$pos;this.pos=b.createAnchor(e.row,e.column),this.markerId=c.addMarker(new d(e.row,e.column,e.row,e.column+this.length),this.mainClass,null,!1),this.pos.on("change",function(b){c.removeMarker(a.markerId),a.markerId=c.addMarker(new d(b.value.row,b.value.column,b.value.row,b.value.column+a.length),a.mainClass,null,!1)}),this.others=[],this.$others.forEach(function(c){var d=b.createAnchor(c.row,c.column);a.others.push(d)}),c.setUndoSelect(!1)},this.showOtherMarkers=function(){if(this.othersActive)return;var a=this.session,b=this;this.othersActive=!0,this.others.forEach(function(c){c.markerId=a.addMarker(new d(c.row,c.column,c.row,c.column+b.length),b.othersClass,null,!1),c.on("change",function(e){a.removeMarker(c.markerId),c.markerId=a.addMarker(new d(e.value.row,e.value.column,e.value.row,e.value.column+b.length),b.othersClass,null,!1)})})},this.hideOtherMarkers=function(){if(!this.othersActive)return;this.othersActive=!1;for(var a=0;a<this.others.length;a++)this.session.removeMarker(this.others[a].markerId)},this.onUpdate=function(a){var b=a.data,c=b.range;if(c.start.row!==c.end.row)return;if(c.start.row!==this.pos.row)return;if(this.$updating)return;this.$updating=!0;var e=b.action==="insertText"?c.end.column-c.start.column:c.start.column-c.end.column;if(c.start.column>=this.pos.column&&c.start.column<=this.pos.column+this.length+1){var f=c.start.column-this.pos.column;this.length+=e;if(!this.session.$fromUndo){if(b.action==="insertText")for(var g=this.others.length-1;g>=0;g--){var h=this.others[g],i={row:h.row,column:h.column+f};h.row===c.start.row&&c.start.column<h.column&&(i.column+=e),this.doc.insert(i,b.text)}else if(b.action==="removeText")for(var g=this.others.length-1;g>=0;g--){var h=this.others[g],i={row:h.row,column:h.column+f};h.row===c.start.row&&c.start.column<h.column&&(i.column+=e),this.doc.remove(new d(i.row,i.column,i.row,i.column-e))}c.start.column===this.pos.column&&b.action==="insertText"?setTimeout(function(){this.pos.setPosition(this.pos.row,this.pos.column-e);for(var a=0;a<this.others.length;a++){var b=this.others[a],d={row:b.row,column:b.column-e};b.row===c.start.row&&c.start.column<b.column&&(d.column+=e),b.setPosition(d.row,d.column)}}.bind(this),0):c.start.column===this.pos.column&&b.action==="removeText"&&setTimeout(function(){for(var a=0;a<this.others.length;a++){var b=this.others[a];b.row===c.start.row&&c.start.column<b.column&&b.setPosition(b.row,b.column-e)}}.bind(this),0)}this.pos._emit("change",{value:this.pos});for(var g=0;g<this.others.length;g++)this.others[g]._emit("change",{value:this.others[g]})}this.$updating=!1},this.onCursorChange=function(a){if(this.$updating)return;var b=this.session.selection.getCursor();b.row===this.pos.row&&b.column>=this.pos.column&&b.column<=this.pos.column+this.length?(this.showOtherMarkers(),this._emit("cursorEnter",a)):(this.hideOtherMarkers(),this._emit("cursorLeave",a))},this.detach=function(){this.session.removeMarker(this.markerId),this.hideOtherMarkers(),this.doc.removeEventListener("change",this.$onUpdate),this.session.selection.removeEventListener("changeCursor",this.$onCursorChange),this.pos.detach();for(var a=0;a<this.others.length;a++)this.others[a].detach();this.session.setUndoSelect(!0)},this.cancel=function(){if(this.$undoStackDepth===-1)throw Error("Canceling placeholders only supported with undo manager attached to session.");var a=this.session.getUndoManager(),b=(a.$undoStack||a.$undostack).length-this.$undoStackDepth;for(var c=0;c<b;c++)a.undo(!0)}}).call(g.prototype),b.PlaceHolder=g}),define("ace/theme/textmate",["require","exports","module","ace/requirejs/text!ace/theme/textmate.css","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssClass="ace-tm",b.cssText=a("ace/requirejs/text!./textmate.css");var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)}),define("ace/requirejs/text!ace/theme/textmate.css",[],'.ace-tm .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-tm .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-tm .ace_gutter {\n  background: #f0f0f0;\n  color: #333;\n}\n\n.ace-tm .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-tm .ace_fold {\n    background-color: #6B72E6;\n}\n\n.ace-tm .ace_text-layer {\n}\n\n.ace-tm .ace_cursor {\n  border-left: 2px solid black;\n}\n\n.ace-tm .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid black;\n}\n        \n.ace-tm .ace_line .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-tm .ace_line .ace_storage,\n.ace-tm .ace_line .ace_keyword {\n  color: blue;\n}\n\n.ace-tm .ace_line .ace_constant {\n  color: rgb(197, 6, 11);\n}\n\n.ace-tm .ace_line .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-tm .ace_line .ace_constant.ace_language {\n  color: rgb(88, 92, 246);\n}\n\n.ace-tm .ace_line .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_line .ace_invalid {\n  background-color: rgba(255, 0, 0, 0.1);\n  color: red;\n}\n\n.ace-tm .ace_line .ace_support.ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-tm .ace_line .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-tm .ace_line .ace_support.ace_type,\n.ace-tm .ace_line .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-tm .ace_line .ace_keyword.ace_operator {\n  color: rgb(104, 118, 135);\n}\n\n.ace-tm .ace_line .ace_string {\n  color: rgb(3, 106, 7);\n}\n\n.ace-tm .ace_line .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-tm .ace_line .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-tm .ace_line .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-tm .ace_line .ace_constant.ace_numeric {\n  color: rgb(0, 0, 205);\n}\n\n.ace-tm .ace_line .ace_variable {\n  color: rgb(49, 132, 149);\n}\n\n.ace-tm .ace_line .ace_xml_pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-tm .ace_entity.ace_name.ace_function {\n  color: #0000A2;\n}\n\n.ace-tm .ace_markup.ace_markupine {\n    text-decoration:underline;\n}\n\n.ace-tm .ace_markup.ace_heading {\n  color: rgb(12, 7, 255);\n}\n\n.ace-tm .ace_markup.ace_list {\n  color:rgb(185, 6, 144);\n}\n\n.ace-tm .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n.ace-tm.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px white;\n  border-radius: 2px;\n}\n.ace-tm .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-tm .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-tm .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-tm .ace_marker-layer .ace_active_line {\n  background: rgba(0, 0, 0, 0.07);\n}\n\n.ace-tm .ace_gutter_active_line {\n    background-color : #dcdcdc;\n}\n\n.ace-tm .ace_marker-layer .ace_selected_word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-tm .ace_meta.ace_tag {\n  color:rgb(0, 22, 142);\n}\n\n.ace-tm .ace_string.ace_regex {\n  color: rgb(255, 0, 0)\n}\n\n.ace-tm .ace_indent-guide {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;\n}\n');
            (function() {
                window.require(["ace/ace"], function(a) {
                    a && a.config.init();
                    if (!window.ace)
                        window.ace = {};
                    for (var key in a) if (a.hasOwnProperty(key))
                        ace[key] = a[key];
                });
            })();
        ;define("ace/theme/eclipse",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssText='.ace-eclipse .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-eclipse .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-eclipse .ace_gutter {  background: #ebebeb;  border-right: 1px solid rgb(159, 159, 159);  color: rgb(136, 136, 136);}.ace-eclipse .ace_print_margin {  width: 1px;  background: #ebebeb;}.ace-eclipse .ace_fold {    background-color: rgb(60, 76, 114);}.ace-eclipse .ace_text-layer {}.ace-eclipse .ace_cursor {  border-left: 2px solid black;}.ace-eclipse .ace_line .ace_storage,.ace-eclipse .ace_line .ace_keyword,.ace-eclipse .ace_line .ace_variable {  color: rgb(127, 0, 85);}.ace-eclipse .ace_line .ace_constant.ace_buildin {  color: rgb(88, 72, 246);}.ace-eclipse .ace_line .ace_constant.ace_library {  color: rgb(6, 150, 14);}.ace-eclipse .ace_line .ace_function {  color: rgb(60, 76, 114);}.ace-eclipse .ace_line .ace_string {  color: rgb(42, 0, 255);}.ace-eclipse .ace_line .ace_comment {  color: rgb(63, 127, 95);}.ace-eclipse .ace_line .ace_comment.ace_doc {  color: rgb(63, 95, 191);}.ace-eclipse .ace_line .ace_comment.ace_doc.ace_tag {  color: rgb(127, 159, 191);}.ace-eclipse .ace_line .ace_constant.ace_numeric {}.ace-eclipse .ace_line .ace_tag {  color: rgb(63, 127, 127);}.ace-eclipse .ace_line .ace_type {  color: rgb(127, 0, 127);}.ace-eclipse .ace_line .ace_xml_pe {  color: rgb(104, 104, 91);}.ace-eclipse .ace_marker-layer .ace_selection {  background: rgb(181, 213, 255);}.ace-eclipse .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid rgb(192, 192, 192);}.ace-eclipse .ace_line .ace_meta.ace_tag {  color:rgb(63, 127, 127);}.ace-eclipse .ace_entity.ace_other.ace_attribute-name {  color:rgb(127, 0, 127);}.ace-eclipse .ace_marker-layer .ace_step {  background: rgb(255, 255, 0);}.ace-eclipse .ace_marker-layer .ace_active_line {  background: rgb(232, 242, 254);}.ace-eclipse .ace_marker-layer .ace_selected_word {  border: 1px solid rgb(181, 213, 255);}.ace-eclipse .ace_indent-guide {  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}',b.cssClass="ace-eclipse";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)});define("ace/mode/java",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/tokenizer","ace/mode/java_highlight_rules"],function(a,b,c){var d=a("../lib/oop"),e=a("./javascript").Mode,f=a("../tokenizer").Tokenizer,g=a("./java_highlight_rules").JavaHighlightRules,h=function(){e.call(this),this.$tokenizer=new f((new g).getRules())};d.inherits(h,e),function(){this.createWorker=function(a){return null}}.call(h.prototype),b.Mode=h}),define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(a,b,c){var d=a("../lib/oop"),e=a("./text").Mode,f=a("../tokenizer").Tokenizer,g=a("./javascript_highlight_rules").JavaScriptHighlightRules,h=a("./matching_brace_outdent").MatchingBraceOutdent,i=a("../range").Range,j=a("../worker/worker_client").WorkerClient,k=a("./behaviour/cstyle").CstyleBehaviour,l=a("./folding/cstyle").FoldMode,m=function(){this.$tokenizer=new f((new g).getRules()),this.$outdent=new h,this.$behaviour=new k,this.foldingRules=new l};d.inherits(m,e),function(){this.toggleCommentLines=function(a,b,c,d){var e=!0,f=/^(\s*)\/\//;for(var g=c;g<=d;g++)if(!f.test(b.getLine(g))){e=!1;break}if(e){var h=new i(0,0,0,0);for(var g=c;g<=d;g++){var j=b.getLine(g),k=j.match(f);h.start.row=g,h.end.row=g,h.end.column=k[0].length,b.replace(h,k[1])}}else b.indentRows(c,d,"//")},this.getNextLineIndent=function(a,b,c){var d=this.$getIndent(b),e=this.$tokenizer.getLineTokens(b,a),f=e.tokens,g=e.state;if(f.length&&f[f.length-1].type=="comment")return d;if(a=="start"||a=="regex_allowed"){var h=b.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);h&&(d+=c)}else if(a=="doc-start"){if(g=="start"||a=="regex_allowed")return"";var h=b.match(/^\s*(\/?)\*/);h&&(h[1]&&(d+=" "),d+="* ")}return d},this.checkOutdent=function(a,b,c){return this.$outdent.checkOutdent(b,c)},this.autoOutdent=function(a,b,c){this.$outdent.autoOutdent(b,c)},this.createWorker=function(a){var b=new j(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");return b.attachToDocument(a.getDocument()),b.on("jslint",function(b){var c=[];for(var d=0;d<b.data.length;d++){var e=b.data[d];e&&c.push({row:e.line-1,column:e.character-1,text:e.reason,type:"warning",lint:e})}a.setAnnotations(c)}),b.on("narcissus",function(b){a.setAnnotations([b.data])}),b.on("terminate",function(){a.clearAnnotations()}),b}}.call(m.prototype),b.Mode=m}),define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/unicode","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("../lib/oop"),e=a("../lib/lang"),f=a("../unicode"),g=a("./doc_comment_highlight_rules").DocCommentHighlightRules,h=a("./text_highlight_rules").TextHighlightRules,i=function(){var a=e.arrayToMap("Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document".split("|")),b=e.arrayToMap("break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|const|yield|import|get|set".split("|")),c="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield",d=e.arrayToMap("__parent__|__count__|escape|unescape|with|__proto__".split("|")),h=e.arrayToMap("const|let|var|function".split("|")),i=e.arrayToMap("null|Infinity|NaN|undefined".split("|")),j=e.arrayToMap("class|enum|extends|super|export|implements|private|public|interface|package|protected|static".split("|")),k="["+f.packages.L+"\\$_]["+f.packages.L+f.packages.Mn+f.packages.Mc+f.packages.Nd+f.packages.Pc+"\\$_]*\\b",l="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";this.$rules={start:[{token:"comment",regex:/\/\/.*$/},g.getStartRule("doc-start"),{token:"comment",merge:!0,regex:/\/\*/,next:"comment"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+\b/},{token:"constant.numeric",regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+k+")(\\.)(prototype)(\\.)("+k+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator","text"],regex:"("+k+")(\\.)(prototype)(\\.)("+k+")(\\s*)(=)(\\s*)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+k+")(\\.)("+k+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+k+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+k+")(\\.)("+k+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+k+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+k+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"constant.language.boolean",regex:/(?:true|false)\b/},{token:"keyword",regex:"(?:"+c+")\\b",next:"regex_allowed"},{token:["punctuation.operator","support.function"],regex:/(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:opzzzz|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:["punctuation.operator","support.function.dom"],regex:/(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:["punctuation.operator","support.constant"],regex:/(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|timeEnd|assert)\b/},{token:function(c){return a.hasOwnProperty(c)?"variable.language":d.hasOwnProperty(c)?"invalid.deprecated":h.hasOwnProperty(c)?"storage.type":b.hasOwnProperty(c)?"keyword":i.hasOwnProperty(c)?"constant.language":j.hasOwnProperty(c)?"invalid.illegal":c=="debugger"?"invalid.deprecated":"identifier"},regex:k},{token:"keyword.operator",regex:/!|\$|%|&|\*|\-\-|\-|\+\+|\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|\*=|%=|\+=|\-=|&=|\^=|\b(?:in|instanceof|new|delete|typeof|void)/,next:"regex_allowed"},{token:"punctuation.operator",regex:/\?|\:|\,|\;|\./,next:"regex_allowed"},{token:"paren.lparen",regex:/[\[({]/,next:"regex_allowed"},{token:"paren.rparen",regex:/[\])}]/},{token:"keyword.operator",regex:/\/=?/,next:"regex_allowed"},{token:"comment",regex:/^#!.*$/},{token:"text",regex:/\s+/}],regex_allowed:[g.getStartRule("doc-start"),{token:"comment",merge:!0,regex:"\\/\\*",next:"comment_regex_allowed"},{token:"comment",regex:"\\/\\/.*$"},{token:"string.regexp",regex:"\\/",next:"regex",merge:!0},{token:"text",regex:"\\s+"},{token:"empty",regex:"",next:"start"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/\\w*",next:"start",merge:!0},{token:"string.regexp",regex:"[^\\\\/\\[]+",merge:!0},{token:"string.regexp.charachterclass",regex:"\\[",next:"regex_character_class",merge:!0},{token:"empty",regex:"",next:"start"}],regex_character_class:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp.charachterclass",regex:"]",next:"regex",merge:!0},{token:"string.regexp.charachterclass",regex:"[^\\\\\\]]+",merge:!0},{token:"empty",regex:"",next:"start"}],function_arguments:[{token:"variable.parameter",regex:k},{token:"punctuation.operator",regex:"[, ]+",merge:!0},{token:"punctuation.operator",regex:"$",merge:!0},{token:"empty",regex:"",next:"start"}],comment_regex_allowed:[{token:"comment",regex:".*?\\*\\/",merge:!0,next:"regex_allowed"},{token:"comment",merge:!0,regex:".+"}],comment:[{token:"comment",regex:".*?\\*\\/",merge:!0,next:"start"},{token:"comment",merge:!0,regex:".+"}],qqstring:[{token:"constant.language.escape",regex:l},{token:"string",regex:'[^"\\\\]+',merge:!0},{token:"string",regex:"\\\\$",next:"qqstring",merge:!0},{token:"string",regex:'"|$',next:"start",merge:!0}],qstring:[{token:"constant.language.escape",regex:l},{token:"string",regex:"[^'\\\\]+",merge:!0},{token:"string",regex:"\\\\$",next:"qstring",merge:!0},{token:"string",regex:"'|$",next:"start",merge:!0}]},this.embedRules(g,"doc-",[g.getEndRule("start")])};d.inherits(i,h),b.JavaScriptHighlightRules=i}),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("../lib/oop"),e=a("./text_highlight_rules").TextHighlightRules,f=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc",merge:!0,regex:"\\s+"},{token:"comment.doc",merge:!0,regex:"TODO"},{token:"comment.doc",merge:!0,regex:"[^@\\*]+"},{token:"comment.doc",merge:!0,regex:"."}]}};d.inherits(f,e),f.getStartRule=function(a){return{token:"comment.doc",merge:!0,regex:"\\/\\*(?=\\*)",next:a}},f.getEndRule=function(a){return{token:"comment.doc",merge:!0,regex:"\\*\\/",next:a}},b.DocCommentHighlightRules=f}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(a,b,c){var d=a("../range").Range,e=function(){};(function(){this.checkOutdent=function(a,b){return/^\s+$/.test(a)?/^\s*\}/.test(b):!1},this.autoOutdent=function(a,b){var c=a.getLine(b),e=c.match(/^(\s*\})/);if(!e)return 0;var f=e[1].length,g=a.findMatchingBracket({row:b,column:f});if(!g||g.row==b)return 0;var h=this.$getIndent(a.getLine(g.row));a.replace(new d(b,0,b,f-1),h)},this.$getIndent=function(a){var b=a.match(/^(\s+)/);return b?b[1]:""}}).call(e.prototype),b.MatchingBraceOutdent=e}),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour"],function(a,b,c){var d=a("../../lib/oop"),e=a("../behaviour").Behaviour,f=function(){this.add("braces","insertion",function(a,b,c,d,e){if(e=="{"){var f=c.getSelectionRange(),g=d.doc.getTextRange(f);return g!==""?{text:"{"+g+"}",selection:!1}:{text:"{}",selection:[1,1]}}if(e=="}"){var h=c.getCursorPosition(),i=d.doc.getLine(h.row),j=i.substring(h.column,h.column+1);if(j=="}"){var k=d.$findOpeningBracket("}",{column:h.column+1,row:h.row});if(k!==null)return{text:"",selection:[1,1]}}}else if(e=="\n"){var h=c.getCursorPosition(),i=d.doc.getLine(h.row),j=i.substring(h.column,h.column+1);if(j=="}"){var l=d.findMatchingBracket({row:h.row,column:h.column+1});if(!l)return null;var m=this.getNextLineIndent(a,i.substring(0,i.length-1),d.getTabString()),n=this.$getIndent(d.doc.getLine(l.row));return{text:"\n"+m+"\n"+n,selection:[1,m.length,1,m.length]}}}}),this.add("braces","deletion",function(a,b,c,d,e){var f=d.doc.getTextRange(e);if(!e.isMultiLine()&&f=="{"){var g=d.doc.getLine(e.start.row),h=g.substring(e.end.column,e.end.column+1);if(h=="}")return e.end.column++,e}}),this.add("parens","insertion",function(a,b,c,d,e){if(e=="("){var f=c.getSelectionRange(),g=d.doc.getTextRange(f);return g!==""?{text:"("+g+")",selection:!1}:{text:"()",selection:[1,1]}}if(e==")"){var h=c.getCursorPosition(),i=d.doc.getLine(h.row),j=i.substring(h.column,h.column+1);if(j==")"){var k=d.$findOpeningBracket(")",{column:h.column+1,row:h.row});if(k!==null)return{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(a,b,c,d,e){var f=d.doc.getTextRange(e);if(!e.isMultiLine()&&f=="("){var g=d.doc.getLine(e.start.row),h=g.substring(e.start.column+1,e.start.column+2);if(h==")")return e.end.column++,e}}),this.add("brackets","insertion",function(a,b,c,d,e){if(e=="["){var f=c.getSelectionRange(),g=d.doc.getTextRange(f);return g!==""?{text:"["+g+"]",selection:!1}:{text:"[]",selection:[1,1]}}if(e=="]"){var h=c.getCursorPosition(),i=d.doc.getLine(h.row),j=i.substring(h.column,h.column+1);if(j=="]"){var k=d.$findOpeningBracket("]",{column:h.column+1,row:h.row});if(k!==null)return{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(a,b,c,d,e){var f=d.doc.getTextRange(e);if(!e.isMultiLine()&&f=="["){var g=d.doc.getLine(e.start.row),h=g.substring(e.start.column+1,e.start.column+2);if(h=="]")return e.end.column++,e}}),this.add("string_dquotes","insertion",function(a,b,c,d,e){if(e=='"'||e=="'"){var f=e,g=c.getSelectionRange(),h=d.doc.getTextRange(g);if(h!=="")return{text:f+h+f,selection:!1};var i=c.getCursorPosition(),j=d.doc.getLine(i.row),k=j.substring(i.column-1,i.column);if(k=="\\")return null;var l=d.getTokens(g.start.row),m=0,n,o=-1;for(var p=0;p<l.length;p++){n=l[p],n.type=="string"?o=-1:o<0&&(o=n.value.indexOf(f));if(n.value.length+m>g.start.column)break;m+=l[p].value.length}if(!n||o<0&&n.type!=="comment"&&(n.type!=="string"||g.start.column!==n.value.length+m-1&&n.value.lastIndexOf(f)===n.value.length-1))return{text:f+f,selection:[1,1]};if(n&&n.type==="string"){var q=j.substring(i.column,i.column+1);if(q==f)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(a,b,c,d,e){var f=d.doc.getTextRange(e);if(!e.isMultiLine()&&(f=='"'||f=="'")){var g=d.doc.getLine(e.start.row),h=g.substring(e.start.column+1,e.start.column+2);if(h=='"')return e.end.column++,e}})};d.inherits(f,e),b.CstyleBehaviour=f}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(a,b,c){var d=a("../../lib/oop"),e=a("../../range").Range,f=a("./fold_mode").FoldMode,g=b.FoldMode=function(){};d.inherits(g,f),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(a,b,c){var d=a.getLine(c),f=d.match(this.foldingStartMarker);if(f){var g=f.index;if(f[1])return this.openingBracketBlock(a,f[1],c,g);var h=a.getCommentFoldRange(c,g+f[0].length);return h.end.column-=2,h}if(b!=="markbeginend")return;var f=d.match(this.foldingStopMarker);if(f){var g=f.index+f[0].length;if(f[2]){var h=a.getCommentFoldRange(c,g);return h.end.column-=2,h}var i={row:c,column:g},j=a.$findOpeningBracket(f[1],i);if(!j)return;return j.column++,i.column--,e.fromPoints(j,i)}}}.call(g.prototype)}),define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(a,b,c){var d=a("../../range").Range,e=b.FoldMode=function(){};(function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(a,b,c){var d=a.getLine(c);return this.foldingStartMarker.test(d)?"start":b=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(d)?"end":""},this.getFoldWidgetRange=function(a,b,c){return null},this.indentationBlock=function(a,b,c){var e=/\S/,f=a.getLine(b),g=f.search(e);if(g==-1)return;var h=c||f.length,i=a.getLength(),j=b,k=b;while(++b<i){var l=a.getLine(b).search(e);if(l==-1)continue;if(l<=g)break;k=b}if(k>j){var m=a.getLine(k).length;return new d(j,h,k,m)}},this.openingBracketBlock=function(a,b,c,e,f){var g={row:c,column:e+1},h=a.$findClosingBracket(b,g,f);if(!h)return;var i=a.foldWidgets[h.row];return i==null&&(i=this.getFoldWidget(a,h.row)),i=="start"&&h.row>g.row&&(h.row--,h.column=a.getLine(h.row).length),d.fromPoints(g,h)}}).call(e.prototype)}),define("ace/mode/java_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("../lib/oop"),e=a("../lib/lang"),f=a("./doc_comment_highlight_rules").DocCommentHighlightRules,g=a("./text_highlight_rules").TextHighlightRules,h=function(){var a=e.arrayToMap("abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while".split("|")),b=e.arrayToMap("null|Infinity|NaN|undefined".split("|")),c=e.arrayToMap("AbstractMethodError|AssertionError|ClassCircularityError|ClassFormatError|Deprecated|EnumConstantNotPresentException|ExceptionInInitializerError|IllegalAccessError|IllegalThreadStateException|InstantiationError|InternalError|NegativeArraySizeException|NoSuchFieldError|Override|Process|ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|SuppressWarnings|TypeNotPresentException|UnknownError|UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|InstantiationException|IndexOutOfBoundsException|ArrayIndexOutOfBoundsException|CloneNotSupportedException|NoSuchFieldException|IllegalArgumentException|NumberFormatException|SecurityException|Void|InheritableThreadLocal|IllegalStateException|InterruptedException|NoSuchMethodException|IllegalAccessException|UnsupportedOperationException|Enum|StrictMath|Package|Compiler|Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|Character|Boolean|StackTraceElement|Appendable|StringBuffer|Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|StackOverflowError|OutOfMemoryError|VirtualMachineError|ArrayStoreException|ClassCastException|LinkageError|NoClassDefFoundError|ClassNotFoundException|RuntimeException|Exception|ThreadDeath|Error|Throwable|System|ClassLoader|Cloneable|Class|CharSequence|Comparable|String|Object".split("|")),d=e.arrayToMap("".split("|"));this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},f.getStartRule("doc-start"),{token:"comment",merge:!0,regex:"\\/\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(e){return e=="this"?"variable.language":a.hasOwnProperty(e)?"keyword":c.hasOwnProperty(e)?"support.function":d.hasOwnProperty(e)?"support.function":b.hasOwnProperty(e)?"constant.language":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}]},this.embedRules(f,"doc-",[f.getEndRule("start")])};d.inherits(h,g),b.JavaHighlightRules=h});/*!
	jQuery ColorBox v1.3.34 - 2013-02-04
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		className: false,
		
		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,

		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',
	
	// Special Handling for IE
	isIE = !$.support.leadingWhitespace, // IE6 to IE8
	isIE6 = isIE && !window.XMLHttpRequest, // IE6
	event_ie6 = prefix + '_IE6',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $({}),
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	className,
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : $window.height()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(url) {
		return settings.photo || settings.photoRegex.test(url);
	}

	function retinaUrl(url) {
		return settings.retinaUrl && window.devicePixelRatio > 1 ? url.replace(settings.photoRegex, settings.retinaSuffix) : url;
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		// for external use
		$(document).trigger(event);

		// for internal use
		$events.trigger(event);

		if ($.isFunction(callback)) {
			callback.call(element);
		}
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		clear,
		set,
		start,
		stop;
		
		if (settings.slideshow && $related[1]) {
			clear = function () {
				clearTimeout(timeOut);
			};

			set = function () {
				if (settings.loop || $related[index + 1]) {
					timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
				}
			};

			start = function () {
				$slideshow
					.html(settings.slideshowStop)
					.unbind(click)
					.one(click, stop);

				$events
					.bind(event_complete, set)
					.bind(event_load, clear)
					.bind(event_cleanup, stop);

				$box.removeClass(className + "off").addClass(className + "on");
			};
			
			stop = function () {
				clear();
				
				$events
					.unbind(event_complete, set)
					.unbind(event_load, clear)
					.unbind(event_cleanup, stop);
				
				$slideshow
					.html(settings.slideshowStart)
					.unbind(click)
					.one(click, function () {
						publicMethod.next();
						start();
					});

				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
			$box.removeClass(className + "off " + className + "on");
		}
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to ColorBox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden').appendTo($content);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();//Subtraction needed for IE6
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);

				if (settings.returnFocus) {
					$(element).blur();
					$events.one(event_closed, function () {
						$(element).focus();
					});
				}
				
				$overlay.css({
					opacity: parseFloat(settings.opacity),
					cursor: settings.overlayClose ? "pointer" : "auto",
					visibility: 'visible'
				}).show();
				
				// Opens inital empty ColorBox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();

				if (isIE6) {
					$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
						$overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
					}).trigger('resize.' + event_ie6);
				}
				
				slideshow();

				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();
				
				$close.html(settings.close).show();
			}
			
			publicMethod.load(true);
		}
	}

	// ColorBox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;

			$window = $(window);
			$box = $tag(div).attr({id: colorbox, 'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''}).hide();
			$overlay = $tag(div, "Overlay", isIE6 ? 'position:absolute' : '').hide();
			$loadingOverlay = $tag(div, "LoadingOverlay").add($tag(div, "LoadingGraphic"));
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$next = $tag(div, "Next"),
				$prev = $tag(div, "Previous"),
				$slideshow = $tag(div, "Slideshow"),
				$close = $tag(div, "Close")
			);
			
			$wrap.append( // The 3x3 Grid that makes up ColorBox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add ColorBox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1]) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else { // For jQuery 1.3.x -> 1.6.x
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if ColorBox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if ($.isFunction($this)) { // assume a call to $.colorbox
				$this = $('<a/>');
				options.open = true;
			} else if (!$this[0]) { // colorbox being applied to empty collection
				return $this;
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed && !isIE6) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max($window.height() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max($window.height() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});

		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt(that.style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt(that.style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		if(speed===0){ // temporary workaround to side-step jQuery-UI 1.8 bug (http://bugs.jquery.com/ticket/12273)
			$box.css(css);
		}
		$box.dequeue().animate(css, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;
		
		$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		callback = function () {
			var total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() {
				if (isIE) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.remove();
				trigger(event_complete, settings.onComplete);
			};
			
			if (isIE) {
				//This fadeIn helps the bicubic resampling to kick-in.
				if (photo) {
					$loaded.fadeIn(100);
				}
			}
			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				if (settings.slideshow) {
					$slideshow.show();
				}
				
				// Preloads images within a rel group
				if (settings.preloading) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var src,
							img,
							i = $related[this],
							data = $.data(i, colorbox);

						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = $(i).attr('href');
						}

						if (src && (isImage(src) || data.photo)) {
							img = new Image();
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}

				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.href,
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true, // allow HTML5 video to go fullscreen
						webkitAllowFullScreen : true,
						mozallowfullscreen : true
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.fastIframe) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	publicMethod.load = function (launched) {
		var href, setResize, prep = publicMethod.prep, $inline;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		if (!launched) {
			makeSettings();
		}

		if (className) {
			$box.add($overlay).removeClass(className);
		}
		if (settings.className) {
			$box.add($overlay).addClass(settings.className);
		}
		className = settings.className;
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.appendTo($content);
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(href)) {

			href = retinaUrl(href);

			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.one('load', function () {
				var percent;

				if (settings.retinaImage && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}
				
				if (isIE) {
					photo.style.msInterpolationMode = 'bicubic';
				}
				
				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status) {
				prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
			});
		}
	};
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			publicMethod.load();
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			publicMethod.load();
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix + ' .' + event_ie6);
			
			$overlay.fadeTo(200, 0);
			
			$box.stop().fadeTo(300, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes ColorBox made to the document, but does not remove the plugin
	// from jQuery.
	publicMethod.remove = function () {
		$([]).add($box).add($overlay).remove();
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));
;/***

    P R O C E S S I N G . J S - 1.4.1
    a port of the Processing visualization language

    Processing.js is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.

    http://processingjs.org

***/

(function(D,d,q,t){var G=function(){};var s=function(){if("console" in D){return function(N){D.console.log("Processing.js: "+N)}}return G}();var w=function(N){var O=new XMLHttpRequest;O.open("GET",N,false);if(O.overrideMimeType){O.overrideMimeType("text/plain")}O.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");O.send(null);if(O.status!==200&&O.status!==0){throw"XMLHttpRequest failed, status code "+O.status}return O.responseText};var n="document" in this&&!("fake" in this.document);d.head=d.head||d.getElementsByTagName("head")[0];function C(N,O){if(N in D){return D[N]}if(typeof D[O]==="function"){return D[O]}return function(Q){if(Q instanceof Array){return Q}if(typeof Q==="number"){var P=[];P.length=Q;return P}}}if(d.documentMode>=9&&!d.doctype){throw"The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>"}var e=C("Float32Array","WebGLFloatArray"),K=C("Int32Array","WebGLIntArray"),y=C("Uint16Array","WebGLUnsignedShortArray"),b=C("Uint8Array","WebGLUnsignedByteArray");var B={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:0.0001,MAX_FLOAT:3.4028235e+38,MIN_FLOAT:-3.4028235e+38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:q.PI,TWO_PI:2*q.PI,HALF_PI:q.PI/2,THIRD_PI:q.PI/3,QUARTER_PI:q.PI/4,DEG_TO_RAD:q.PI/180,RAD_TO_DEG:180/q.PI,WHITESPACE:" \t\n\r\u000c\u00a0",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1<<0,ADD:1<<1,SUBTRACT:1<<2,LIGHTEST:1<<3,DARKEST:1<<4,DIFFERENCE:1<<5,EXCLUSION:1<<6,MULTIPLY:1<<7,SCREEN:1<<8,OVERLAY:1<<9,HARD_LIGHT:1<<10,SOFT_LIGHT:1<<11,DODGE:1<<12,BURN:1<<13,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:1<<15,PREC_MAXVAL:(1<<15)-1,PREC_ALPHA_SHIFT:24-15,PREC_RED_SHIFT:16-15,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8};function h(P){if(typeof P==="string"){var O=0;for(var N=0;N<P.length;++N){O=O*31+P.charCodeAt(N)&4294967295}return O}if(typeof P!=="object"){return P&4294967295}if(P.hashCode instanceof Function){return P.hashCode()}if(P.$id===t){P.$id=q.floor(q.random()*65536)-32768<<16|q.floor(q.random()*65536)}return P.$id}function r(O,N){if(O===null||N===null){return O===null&&N===null}if(typeof O==="string"){return O===N}if(typeof O!=="object"){return O===N}if(O.equals instanceof Function){return O.equals(N)}return O===N}var o=function(O){if(O.iterator instanceof Function){return O.iterator()}if(O instanceof Array){var N=-1;this.hasNext=function(){return ++N<O.length};this.next=function(){return O[N]}}else{throw"Unable to iterate: "+O}};var f=function(){function O(Q){var P=0;this.hasNext=function(){return P<Q.length};this.next=function(){return Q[P++]};this.remove=function(){Q.splice(P,1)}}function N(P){var Q;if(P instanceof N){Q=P.toArray()}else{Q=[];if(typeof P==="number"){Q.length=P>0?P:0}}this.get=function(R){return Q[R]};this.contains=function(R){return this.indexOf(R)>-1};this.indexOf=function(T){for(var S=0,R=Q.length;S<R;++S){if(r(T,Q[S])){return S}}return -1};this.lastIndexOf=function(S){for(var R=Q.length-1;R>=0;--R){if(r(S,Q[R])){return R}}return -1};this.add=function(){if(arguments.length===1){Q.push(arguments[0])}else{if(arguments.length===2){var R=arguments[0];if(typeof R==="number"){if(R>=0&&R<=Q.length){Q.splice(R,0,arguments[1])}else{throw R+" is not a valid index"}}else{throw typeof R+" is not a number"}}else{throw"Please use the proper number of parameters."}}};this.addAll=function(S,R){var T;if(typeof S==="number"){if(S<0||S>Q.length){throw"Index out of bounds for addAll: "+S+" greater or equal than "+Q.length}T=new o(R);while(T.hasNext()){Q.splice(S++,0,T.next())}}else{T=new o(S);while(T.hasNext()){Q.push(T.next())}}};this.set=function(){if(arguments.length===2){var R=arguments[0];if(typeof R==="number"){if(R>=0&&R<Q.length){Q.splice(R,1,arguments[1])}else{throw R+" is not a valid index."}}else{throw typeof R+" is not a number"}}else{throw"Please use the proper number of parameters."}};this.size=function(){return Q.length};this.clear=function(){Q.length=0};this.remove=function(R){if(typeof R==="number"){return Q.splice(R,1)[0]}R=this.indexOf(R);if(R>-1){Q.splice(R,1);return true}return false};this.removeAll=function(V){var S,R,U,T=new N;T.addAll(this);this.clear();for(S=0,R=0;S<T.size();S++){U=T.get(S);if(!V.contains(U)){this.add(R++,U)}}if(this.size()<T.size()){return true}return false};this.isEmpty=function(){return !Q.length};this.clone=function(){return new N(this)};this.toArray=function(){return Q.slice(0)};this.iterator=function(){return new O(Q)}}return N}();var x=function(){function N(){if(arguments.length===1&&arguments[0] instanceof N){return arguments[0].clone()}var W=arguments.length>0?arguments[0]:16;var X=arguments.length>1?arguments[1]:0.75;var Q=[];Q.length=W;var S=0;var O=this;function U(Z){var Y=h(Z)%Q.length;return Y<0?Q.length+Y:Y}function R(){if(S<=X*Q.length){return}var ab=[];for(var aa=0;aa<Q.length;++aa){if(Q[aa]!==t){ab=ab.concat(Q[aa])}}var ac=Q.length*2;Q=[];Q.length=ac;for(var Z=0;Z<ab.length;++Z){var Y=U(ab[Z].key);var ad=Q[Y];if(ad===t){Q[Y]=ad=[]}ad.push(ab[Z])}}function P(ad,ae){var Y=0;var ac=-1;var ab=false;var aa;function Z(){while(!ab){++ac;if(Y>=Q.length){ab=true}else{if(Q[Y]===t||ac>=Q[Y].length){ac=-1;++Y}else{return}}}}this.hasNext=function(){return !ab};this.next=function(){aa=ad(Q[Y][ac]);Z();return aa};this.remove=function(){if(aa!==t){ae(aa);--ac;Z()}};Z()}function V(Y,Z,aa){this.clear=function(){O.clear()};this.contains=function(ab){return Z(ab)};this.containsAll=function(ac){var ab=ac.iterator();while(ab.hasNext()){if(!this.contains(ab.next())){return false}}return true};this.isEmpty=function(){return O.isEmpty()};this.iterator=function(){return new P(Y,aa)};this.remove=function(ab){if(this.contains(ab)){aa(ab);return true}return false};this.removeAll=function(ae){var ab=ae.iterator();var ad=false;while(ab.hasNext()){var ac=ab.next();if(this.contains(ac)){aa(ac);ad=true}}return true};this.retainAll=function(af){var ad=this.iterator();var ac=[];while(ad.hasNext()){var ae=ad.next();if(!af.contains(ae)){ac.push(ae)}}for(var ab=0;ab<ac.length;++ab){aa(ac[ab])}return ac.length>0};this.size=function(){return O.size()};this.toArray=function(){var ab=[];var ac=this.iterator();while(ac.hasNext()){ab.push(ac.next())}return ab}}function T(Y){this._isIn=function(Z){return Z===O&&Y.removed===t};this.equals=function(Z){return r(Y.key,Z.getKey())};this.getKey=function(){return Y.key};this.getValue=function(){return Y.value};this.hashCode=function(Z){return h(Y.key)};this.setValue=function(aa){var Z=Y.value;Y.value=aa;return Z}}this.clear=function(){S=0;Q=[];Q.length=W};this.clone=function(){var Y=new N;Y.putAll(this);return Y};this.containsKey=function(aa){var Y=U(aa);var ab=Q[Y];if(ab===t){return false}for(var Z=0;Z<ab.length;++Z){if(r(ab[Z].key,aa)){return true}}return false};this.containsValue=function(aa){for(var Z=0;Z<Q.length;++Z){var ab=Q[Z];if(ab===t){continue}for(var Y=0;Y<ab.length;++Y){if(r(ab[Y].value,aa)){return true}}}return false};this.entrySet=function(){return new V(function(Y){return new T(Y)},function(Y){return Y instanceof T&&Y._isIn(O)},function(Y){return O.remove(Y.getKey())})};this.get=function(aa){var Y=U(aa);var ab=Q[Y];if(ab===t){return null}for(var Z=0;Z<ab.length;++Z){if(r(ab[Z].key,aa)){return ab[Z].value}}return null};this.isEmpty=function(){return S===0};this.keySet=function(){return new V(function(Y){return Y.key},function(Y){return O.containsKey(Y)},function(Y){return O.remove(Y)})};this.values=function(){return new V(function(Y){return Y.value},function(Y){return O.containsValue(Y)},function(Y){return O.removeByValue(Y)})};this.put=function(aa,ac){var Y=U(aa);var ad=Q[Y];if(ad===t){++S;Q[Y]=[{key:aa,value:ac}];R();return null}for(var Z=0;Z<ad.length;++Z){if(r(ad[Z].key,aa)){var ab=ad[Z].value;ad[Z].value=ac;return ab}}++S;ad.push({key:aa,value:ac});R();return null};this.putAll=function(Y){var Z=Y.entrySet().iterator();while(Z.hasNext()){var aa=Z.next();this.put(aa.getKey(),aa.getValue())}};this.remove=function(aa){var Y=U(aa);var ac=Q[Y];if(ac===t){return null}for(var Z=0;Z<ac.length;++Z){if(r(ac[Z].key,aa)){--S;var ab=ac[Z].value;ac[Z].removed=true;if(ac.length>1){ac.splice(Z,1)}else{Q[Y]=t}return ab}}return null};this.removeByValue=function(aa){var ac,Z,Y,ab;for(ac in Q){if(Q.hasOwnProperty(ac)){for(Z=0,Y=Q[ac].length;Z<Y;Z++){ab=Q[ac][Z];if(ab.value===aa){Q[ac].splice(Z,1);return true}}}}return false};this.size=function(){return S}}return N}();var A=function(){function N(Q,S,R){this.x=Q||0;this.y=S||0;this.z=R||0}N.dist=function(R,Q){return R.dist(Q)};N.dot=function(R,Q){return R.dot(Q)};N.cross=function(R,Q){return R.cross(Q)};N.angleBetween=function(R,Q){return q.acos(R.dot(Q)/(R.mag()*Q.mag()))};N.prototype={set:function(Q,S,R){if(arguments.length===1){this.set(Q.x||Q[0]||0,Q.y||Q[1]||0,Q.z||Q[2]||0)}else{this.x=Q;this.y=S;this.z=R}},get:function(){return new N(this.x,this.y,this.z)},mag:function(){var Q=this.x,S=this.y,R=this.z;return q.sqrt(Q*Q+S*S+R*R)},add:function(Q,S,R){if(arguments.length===1){this.x+=Q.x;this.y+=Q.y;this.z+=Q.z}else{this.x+=Q;this.y+=S;this.z+=R}},sub:function(Q,S,R){if(arguments.length===1){this.x-=Q.x;this.y-=Q.y;this.z-=Q.z}else{this.x-=Q;this.y-=S;this.z-=R}},mult:function(Q){if(typeof Q==="number"){this.x*=Q;this.y*=Q;this.z*=Q}else{this.x*=Q.x;this.y*=Q.y;this.z*=Q.z}},div:function(Q){if(typeof Q==="number"){this.x/=Q;this.y/=Q;this.z/=Q}else{this.x/=Q.x;this.y/=Q.y;this.z/=Q.z}},dist:function(T){var S=this.x-T.x,R=this.y-T.y,Q=this.z-T.z;return q.sqrt(S*S+R*R+Q*Q)},dot:function(Q,S,R){if(arguments.length===1){return this.x*Q.x+this.y*Q.y+this.z*Q.z}return this.x*Q+this.y*S+this.z*R},cross:function(R){var Q=this.x,T=this.y,S=this.z;return new N(T*R.z-R.y*S,S*R.x-R.z*Q,Q*R.y-R.x*T)},normalize:function(){var Q=this.mag();if(Q>0){this.div(Q)}},limit:function(Q){if(this.mag()>Q){this.normalize();this.mult(Q)}},heading2D:function(){return -q.atan2(-this.y,this.x)},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};function O(Q){return function(T,S){var R=T.get();R[Q](S);return R}}for(var P in N.prototype){if(N.prototype.hasOwnProperty(P)&&!N.hasOwnProperty(P)){N[P]=O(P)}}return N}();function M(){}M.prototype=B;var g=new M;g.ArrayList=f;g.HashMap=x;g.PVector=A;g.ObjectIterator=o;g.PConstants=B;g.defineProperty=function(O,N,P){if("defineProperty" in Object){Object.defineProperty(O,N,P)}else{if(P.hasOwnProperty("get")){O.__defineGetter__(N,P.get)}if(P.hasOwnProperty("set")){O.__defineSetter__(N,P.set)}}};function m(O,N,R){if(!O.hasOwnProperty(N)||typeof O[N]!=="function"){O[N]=R;return}var Q=O[N];if("$overloads" in Q){Q.$defaultOverload=R;return}if(!("$overloads" in R)&&Q.length===R.length){return}var T,P;if("$overloads" in R){T=R.$overloads.slice(0);T[Q.length]=Q;P=R.$defaultOverload}else{T=[];T[R.length]=R;T[Q.length]=Q;P=Q}var S=function(){var U=S.$overloads[arguments.length]||("$methodArgsIndex" in S&&arguments.length>S.$methodArgsIndex?S.$overloads[S.$methodArgsIndex]:null)||S.$defaultOverload;return U.apply(this,arguments)};S.$overloads=T;if("$methodArgsIndex" in R){S.$methodArgsIndex=R.$methodArgsIndex}S.$defaultOverload=P;S.name=N;O[N]=S}function i(Q,P){function R(S){g.defineProperty(Q,S,{get:function(){return P[S]},set:function(T){P[S]=T},enumerable:true})}var O=[];for(var N in P){if(typeof P[N]==="function"){m(Q,N,P[N])}else{if(N.charAt(0)!=="$"&&!(N in Q)){O.push(N)}}}while(O.length>0){R(O.shift())}Q.$super=P}g.extendClassChain=function(O){var P=[O];for(var N=O.$upcast;N;N=N.$upcast){i(N,O);P.push(N);O=N}while(P.length>0){P.pop().$self=O}};g.extendStaticMembers=function(N,O){i(N,O)};g.extendInterfaceMembers=function(N,O){i(N,O)};g.addMethod=function(Q,P,S,R){var N=Q[P];if(N||R){var O=S.length;if("$overloads" in N){N.$overloads[O]=S}else{var T=function(){var V=T.$overloads[arguments.length]||("$methodArgsIndex" in T&&arguments.length>T.$methodArgsIndex?T.$overloads[T.$methodArgsIndex]:null)||T.$defaultOverload;return V.apply(this,arguments)};var U=[];if(N){U[N.length]=N}U[O]=S;T.$overloads=U;T.$defaultOverload=N||S;if(R){T.$methodArgsIndex=O}T.name=P;Q[P]=T}}else{Q[P]=S}};function l(N){if(typeof N!=="string"){return false}return["byte","int","char","color","float","long","double"].indexOf(N)!==-1}g.createJavaArray=function(S,T){var O=null,P=null;if(typeof S==="string"){if(S==="boolean"){P=false}else{if(l(S)){P=0}}}if(typeof T[0]==="number"){var N=0|T[0];if(T.length<=1){O=[];O.length=N;for(var R=0;R<N;++R){O[R]=P}}else{O=[];var U=T.slice(1);for(var Q=0;Q<N;++Q){O.push(g.createJavaArray(S,U))}}}return O};var E={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};(function(O){var R=("open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()").split(" "),Q=R.length,N,S;function P(T){return function(){throw"Processing.js does not support "+T+"."}}while(Q--){N=R[Q];S=N.replace("()","");O[S]=P(N)}})(g);g.defineProperty(g,"screenWidth",{get:function(){return D.innerWidth}});g.defineProperty(g,"screenHeight",{get:function(){return D.innerHeight}});g.defineProperty(g,"online",{get:function(){return true}});var k=[];var J={};var L=function(N){k.splice(J[N],1);delete J[N]};var a=function(N){if(N.externals.canvas.id===t||!N.externals.canvas.id.length){N.externals.canvas.id="__processing"+k.length}J[N.externals.canvas.id]=k.length;k.push(N)};function p(X){var Q=250,ae=X.size/Q,N=d.createElement("canvas");N.width=2*Q;N.height=2*Q;N.style.opacity=0;var W=X.getCSSDefinition(Q+"px","normal"),Y=N.getContext("2d");Y.font=W;var ac="dbflkhyjqpg";N.width=Y.measureText(ac).width;Y.font=W;var T=d.createElement("div");T.style.position="absolute";T.style.opacity=0;T.style.fontFamily='"'+X.name+'"';T.style.fontSize=Q+"px";T.innerHTML=ac+"<br/>"+ac;d.body.appendChild(T);var U=N.width,ab=N.height,V=ab/2;Y.fillStyle="white";Y.fillRect(0,0,U,ab);Y.fillStyle="black";Y.fillText(ac,0,V);var P=Y.getImageData(0,0,U,ab).data;var Z=0,S=U*4,aa=P.length;while(++Z<aa&&P[Z]===255){G()}var R=q.round(Z/S);Z=aa-1;while(--Z>0&&P[Z]===255){G()}var ad=q.round(Z/S);X.ascent=ae*(V-R);X.descent=ae*(ad-V);if(d.defaultView.getComputedStyle){var O=d.defaultView.getComputedStyle(T,null).getPropertyValue("height");O=ae*O.replace("px","");if(O>=X.size*2){X.leading=q.round(O/2)}}d.body.removeChild(T);if(X.caching){return Y}}function H(N,O){if(N===t){N=""}this.name=N;if(O===t){O=0}this.size=O;this.glyph=false;this.ascent=0;this.descent=0;this.leading=1.2*O;var R=N.indexOf(" Italic Bold");if(R!==-1){N=N.substring(0,R)}this.style="normal";var Q=N.indexOf(" Italic");if(Q!==-1){N=N.substring(0,Q);this.style="italic"}this.weight="normal";var P=N.indexOf(" Bold");if(P!==-1){N=N.substring(0,P);this.weight="bold"}this.family="sans-serif";if(N!==t){switch(N){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=N;break;default:this.family='"'+N+'", sans-serif';break}}this.context2d=p(this);this.css=this.getCSSDefinition();if(this.context2d){this.context2d.font=this.css}}H.prototype.caching=true;H.prototype.getCSSDefinition=function(P,N){if(P===t){P=this.size+"px"}if(N===t){N=this.leading+"px"}var O=[this.style,"normal",this.weight,P+"/"+N,this.family];return O.join(" ")};H.prototype.measureTextWidth=function(N){return this.context2d.measureText(N).width};H.prototype.measureTextWidthFallback=function(P){var O=d.createElement("canvas"),N=O.getContext("2d");N.font=this.css;return N.measureText(P).width};H.PFontCache={length:0};H.get=function(Q,R){R=(R*10+0.5|0)/10;var O=H.PFontCache,N=Q+"/"+R;if(!O[N]){O[N]=new H(Q,R);O.length++;if(O.length===50){H.prototype.measureTextWidth=H.prototype.measureTextWidthFallback;H.prototype.caching=false;var P;for(P in O){if(P!=="length"){O[P].context2d=null}}return new H(Q,R)}if(O.length===400){H.PFontCache={};H.get=H.getFallback;return new H(Q,R)}}return O[N]};H.getFallback=function(N,O){return new H(N,O)};H.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};H.preloading={template:{},initialized:false,initialize:function(){var P=function(){var R="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#";var Q=function(S){return"AAAAAAAA".substr(~~S?7-S:6)};return R.replace(/[#237]/g,Q)};var N=d.createElement("style");N.setAttribute("type","text/css");N.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+P()+"')\n       format('truetype');\n}";d.head.appendChild(N);var O=d.createElement("span");O.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';O.innerHTML="AAAAAAAA";d.body.appendChild(O);this.template=O;this.initialized=true},getElementWidth:function(N){return d.defaultView.getComputedStyle(N,"").getPropertyValue("width")},timeAttempted:0,pending:function(R){if(!this.initialized){this.initialize()}var P,N,Q=this.getElementWidth(this.template);for(var O=0;O<this.fontList.length;O++){P=this.fontList[O];N=this.getElementWidth(P);if(this.timeAttempted<4000&&N===Q){this.timeAttempted+=R;return true}else{d.body.removeChild(P);this.fontList.splice(O--,1);this.timeAttempted=0}}if(this.fontList.length===0){return false}return true},fontList:[],addedList:{},add:function(N){if(!this.initialized){this.initialize()}var R=typeof N==="object"?N.fontFace:N,Q=typeof N==="object"?N.url:N;if(this.addedList[R]){return}var P=d.createElement("style");P.setAttribute("type","text/css");P.innerHTML="@font-face{\n  font-family: '"+R+"';\n  src:  url('"+Q+"');\n}\n";d.head.appendChild(P);this.addedList[R]=true;var O=d.createElement("span");O.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";O.style.fontFamily='"'+R+'", "PjsEmptyFont", fantasy';O.innerHTML="AAAAAAAA";d.body.appendChild(O);this.fontList.push(O)}};g.PFont=H;var F=this.Processing=function(be,ba){if(!(this instanceof F)){throw"called Processing constructor as if it were a function: missing 'new'."}var ae,cV=be===t&&ba===t;if(cV){ae=d.createElement("canvas")}else{ae=typeof be==="string"?d.getElementById(be):be}if(!(ae instanceof HTMLCanvasElement)){throw"called Processing constructor without passing canvas element reference or id."}function dw(ea){F.debug("Unimplemented - "+ea)}var cW=this;cW.externals={canvas:ae,context:t,sketch:t};cW.name="Processing.js Instance";cW.use3DContext=false;cW.focused=false;cW.breakShape=false;cW.glyphTable={};cW.pmouseX=0;cW.pmouseY=0;cW.mouseX=0;cW.mouseY=0;cW.mouseButton=0;cW.mouseScroll=0;cW.mouseClicked=t;cW.mouseDragged=t;cW.mouseMoved=t;cW.mousePressed=t;cW.mouseReleased=t;cW.mouseScrolled=t;cW.mouseOver=t;cW.mouseOut=t;cW.touchStart=t;cW.touchEnd=t;cW.touchMove=t;cW.touchCancel=t;cW.key=t;cW.keyCode=t;cW.keyPressed=G;cW.keyReleased=G;cW.keyTyped=G;cW.draw=t;cW.setup=t;cW.__mousePressed=false;cW.__keyPressed=false;cW.__frameRate=60;cW.frameCount=0;cW.width=100;cW.height=100;var d8,cQ,dY,bD=true,aH=true,bo=[1,1,1,1],a1=4294967295,aq=true,ce=true,c0=[0,0,0,1],cv=4278190080,b3=true,dW=1,ax=false,dO=false,aC=true,b4=0,bK=0,cN=3,a8=0,a7=0,a6=0,a2=0,dU=60,az=1000/dU,Z="default",ck=ae.style.cursor,dR=20,cj=0,d6=[],aJ=0,Q=20,cM=false,a4=-3355444,cy=20,bU=255,bJ=255,bI=255,bG=255,cZ=false,aK=false,dN=0,d5=0,cY=1,bf=null,bw=null,a5=false,dq=Date.now(),dt=dq,P=0,cE,c3,aQ,aL,bz,cd,U,dC={attributes:{},locations:{}},dx,dQ,bT,bh,cJ,dk,aB,b2,bg,b8,at,aG,bC,aw,af,c7,bS,cs={width:0,height:0},d4=2,dT=false,cH,ac,R,N=37,c1=0,cI=4,Y="Arial",d0=12,a3=9,dA=2,d7=14,W=H.get(Y,d0),aj,cn=null,dV=false,d3,bZ=1000,ag=[],dI=null,dX=[16,17,18,20,33,34,35,36,37,38,39,40,144,155,112,113,114,115,116,117,118,119,120,121,122,123,157];var ad,dp,aU,bX;if(d.defaultView&&d.defaultView.getComputedStyle){ad=parseInt(d.defaultView.getComputedStyle(ae,null)["paddingLeft"],10)||0;dp=parseInt(d.defaultView.getComputedStyle(ae,null)["paddingTop"],10)||0;aU=parseInt(d.defaultView.getComputedStyle(ae,null)["borderLeftWidth"],10)||0;bX=parseInt(d.defaultView.getComputedStyle(ae,null)["borderTopWidth"],10)||0}var dL=0;var bL=0,bM=0,bt=[],bs=[],br=[],ah=new e(720),bl=new e(720),cF,cA;var bV,ch,dJ,aT,am,da,ab,db,ap=false,ci=false,cK=60*(q.PI/180),dl=cW.width/2,dj=cW.height/2,di=dj/q.tan(cK/2),a0=di/10,av=di*10,b5=cW.width/cW.height;var bb=[],cb=[],c2=0,dP=false,aa=false,du=true;var S=0;var bm=[];var dh=new e([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]);var bH=new e([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]);var df=new e([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);var ak=new e([0,0,0,0,1,0,1,1,0,1,0,0]);var ai=new e([0,0,1,0,0,1,0,0,1,0,0,1]);var aO="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;void main(void) {  vFrontColor = aColor;  gl_PointSize = uPointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}";var bQ="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  gl_FragColor = vFrontColor;}";var dE="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec2 aTextureCoord;uniform vec4 uColor;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform float uPointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = uPointSize;  vFrontColor = uColor;  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);  vTextureCoord = aTextureCoord;}";var aW="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int uIsDrawingText;uniform bool uSmooth;void main(void){  if(uSmooth == true){    float dist = distance(gl_PointCoord, vec2(0.5));    if(dist > 0.5){      discard;    }  }  if(uIsDrawingText == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);  }  else{    gl_FragColor = vFrontColor;  }}";var bA=/Windows/.test(navigator.userAgent);var dn="varying vec4 vFrontColor;attribute vec3 aVertex;attribute vec3 aNormal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 uColor;uniform bool uUsingMat;uniform vec3 uSpecular;uniform vec3 uMaterialEmissive;uniform vec3 uMaterialAmbient;uniform vec3 uMaterialSpecular;uniform float uShininess;uniform mat4 uModel;uniform mat4 uView;uniform mat4 uProjection;uniform mat4 uNormalTransform;uniform int uLightCount;uniform vec3 uFalloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light uLights0;uniform Light uLights1;uniform Light uLights2;uniform Light uLights3;uniform Light uLights4;uniform Light uLights5;uniform Light uLights6;uniform Light uLights7;Light getLight(int index){  if(index == 0) return uLights0;  if(index == 1) return uLights1;  if(index == 2) return uLights2;  if(index == 3) return uLights3;  if(index == 4) return uLights4;  if(index == 5) return uLights5;  if(index == 6) return uLights6;  return uLights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerFactor = pow( nDotVH, uShininess );  }  col += light.color * nDotVP;  spec += uSpecular * powerFactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerFactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerFactor = 0.0;  }  else {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerFactor = 0.0;  vec3 VP = light.position - ecPos;  vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+(bA?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ) );  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );  if( nDotVP != 0.0 ) {    powerFactor = pow( nDotHV, uShininess );  }  spec += uSpecular * powerFactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0 );  vec3 finalDiffuse = vec3( 0.0 );  vec3 finalSpecular = vec3( 0.0 );  vec4 col = uColor;  if ( uColor[0] == -1.0 ){    col = aColor;  }  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( uLightCount == 0 ) {    vFrontColor = col + vec4(uMaterialSpecular, 1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= uLightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( uUsingMat == false ) {     vFrontColor = vec4(       vec3( col ) * finalAmbient +       vec3( col ) * finalDiffuse +       vec3( col ) * finalSpecular,       col[3] );   }   else{     vFrontColor = vec4(        uMaterialEmissive +        (vec3(col) * uMaterialAmbient * finalAmbient ) +        (vec3(col) * finalDiffuse) +        (uMaterialSpecular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );}";var aF="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 vFrontColor;uniform sampler2D uSampler;uniform bool uUsingTexture;varying vec2 vTexture;void main(void){  if( uUsingTexture ){    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;  }  else{    gl_FragColor = vFrontColor;  }}";function d2(ec,eb,ee,ed){var ea=dC.locations[ec];if(ea===t){ea=d8.getUniformLocation(eb,ee);dC.locations[ec]=ea}if(ea!==null){if(ed.length===4){d8.uniform4fv(ea,ed)}else{if(ed.length===3){d8.uniform3fv(ea,ed)}else{if(ed.length===2){d8.uniform2fv(ea,ed)}else{d8.uniform1f(ea,ed)}}}}}function dZ(ec,eb,ee,ed){var ea=dC.locations[ec];if(ea===t){ea=d8.getUniformLocation(eb,ee);dC.locations[ec]=ea}if(ea!==null){if(ed.length===4){d8.uniform4iv(ea,ed)}else{if(ed.length===3){d8.uniform3iv(ea,ed)}else{if(ed.length===2){d8.uniform2iv(ea,ed)}else{d8.uniform1i(ea,ed)}}}}}function a9(ee,ec,ef,ed,eb){var ea=dC.locations[ee];if(ea===t){ea=d8.getUniformLocation(ec,ef);dC.locations[ee]=ea}if(ea!==-1){if(eb.length===16){d8.uniformMatrix4fv(ea,ed,eb)}else{if(eb.length===9){d8.uniformMatrix3fv(ea,ed,eb)}else{d8.uniformMatrix2fv(ea,ed,eb)}}}}function dc(ee,ec,ef,eb,ed){var ea=dC.attributes[ee];if(ea===t){ea=d8.getAttribLocation(ec,ef);dC.attributes[ee]=ea}if(ea!==-1){d8.bindBuffer(d8.ARRAY_BUFFER,ed);d8.vertexAttribPointer(ea,eb,d8.FLOAT,false,0,0);d8.enableVertexAttribArray(ea)}}function cg(ec,eb,ed){var ea=dC.attributes[ec];if(ea===t){ea=d8.getAttribLocation(eb,ed);dC.attributes[ec]=ea}if(ea!==-1){d8.disableVertexAttribArray(ea)}}var bF=function(ec,ee,eb){var ef=ec.createShader(ec.VERTEX_SHADER);ec.shaderSource(ef,ee);ec.compileShader(ef);if(!ec.getShaderParameter(ef,ec.COMPILE_STATUS)){throw ec.getShaderInfoLog(ef)}var ed=ec.createShader(ec.FRAGMENT_SHADER);ec.shaderSource(ed,eb);ec.compileShader(ed);if(!ec.getShaderParameter(ed,ec.COMPILE_STATUS)){throw ec.getShaderInfoLog(ed)}var ea=ec.createProgram();ec.attachShader(ea,ef);ec.attachShader(ea,ed);ec.linkProgram(ea);if(!ec.getProgramParameter(ea,ec.LINK_STATUS)){throw"Error linking shaders."}return ea};var aZ=function(ea,ee,eb,ed,ec){return{x:ea,y:ee,w:eb,h:ed}};var bk=aZ;var b1=function(ea,ee,eb,ed,ec){return{x:ea,y:ee,w:ec?eb:eb-ea,h:ec?ed:ed-ee}};var aN=function(ea,ee,eb,ed,ec){return{x:ea-eb/2,y:ee-ed/2,w:eb,h:ed}};var ds=function(){};var bR=function(){};var bB=function(){};var ca=function(){};bR.prototype=new ds;bR.prototype.constructor=bR;bB.prototype=new ds;bB.prototype.constructor=bB;ca.prototype=new ds;ca.prototype.constructor=ca;ds.prototype.a3DOnlyFunction=G;var cl={};var bP=cW.Character=function(ea){if(typeof ea==="string"&&ea.length===1){this.code=ea.charCodeAt(0)}else{if(typeof ea==="number"){this.code=ea}else{if(ea instanceof bP){this.code=ea}else{this.code=NaN}}}return cl[this.code]===t?cl[this.code]=this:cl[this.code]};bP.prototype.toString=function(){return String.fromCharCode(this.code)};bP.prototype.valueOf=function(){return this.code};var O=cW.PShape=function(ea){this.family=ea||0;this.visible=true;this.style=true;this.children=[];this.nameTable=[];this.params=[];this.name="";this.image=null;this.matrix=null;this.kind=null;this.close=null;this.width=null;this.height=null;this.parent=null};O.prototype={isVisible:function(){return this.visible},setVisible:function(ea){this.visible=ea},disableStyle:function(){this.style=false;for(var eb=0,ea=this.children.length;eb<ea;eb++){this.children[eb].disableStyle()}},enableStyle:function(){this.style=true;for(var eb=0,ea=this.children.length;eb<ea;eb++){this.children[eb].enableStyle()}},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(ea){this.name=ea},getName:function(){return this.name},draw:function(ea){ea=ea||cW;if(this.visible){this.pre(ea);this.drawImpl(ea);this.post(ea)}},drawImpl:function(ea){if(this.family===0){this.drawGroup(ea)}else{if(this.family===1){this.drawPrimitive(ea)}else{if(this.family===3){this.drawGeometry(ea)}else{if(this.family===21){this.drawPath(ea)}}}}},drawPath:function(ec){var ed,eb;if(this.vertices.length===0){return}ec.beginShape();if(this.vertexCodes.length===0){if(this.vertices[0].length===2){for(ed=0,eb=this.vertices.length;ed<eb;ed++){ec.vertex(this.vertices[ed][0],this.vertices[ed][1])}}else{for(ed=0,eb=this.vertices.length;ed<eb;ed++){ec.vertex(this.vertices[ed][0],this.vertices[ed][1],this.vertices[ed][2])}}}else{var ea=0;if(this.vertices[0].length===2){for(ed=0,eb=this.vertexCodes.length;ed<eb;ed++){if(this.vertexCodes[ed]===0){ec.vertex(this.vertices[ea][0],this.vertices[ea][1],this.vertices[ea]["moveTo"]);ec.breakShape=false;ea++}else{if(this.vertexCodes[ed]===1){ec.bezierVertex(this.vertices[ea+0][0],this.vertices[ea+0][1],this.vertices[ea+1][0],this.vertices[ea+1][1],this.vertices[ea+2][0],this.vertices[ea+2][1]);ea+=3}else{if(this.vertexCodes[ed]===2){ec.curveVertex(this.vertices[ea][0],this.vertices[ea][1]);ea++}else{if(this.vertexCodes[ed]===3){ec.breakShape=true}}}}}}else{for(ed=0,eb=this.vertexCodes.length;ed<eb;ed++){if(this.vertexCodes[ed]===0){ec.vertex(this.vertices[ea][0],this.vertices[ea][1],this.vertices[ea][2]);if(this.vertices[ea]["moveTo"]===true){bb[bb.length-1]["moveTo"]=true}else{if(this.vertices[ea]["moveTo"]===false){bb[bb.length-1]["moveTo"]=false}}ec.breakShape=false}else{if(this.vertexCodes[ed]===1){ec.bezierVertex(this.vertices[ea+0][0],this.vertices[ea+0][1],this.vertices[ea+0][2],this.vertices[ea+1][0],this.vertices[ea+1][1],this.vertices[ea+1][2],this.vertices[ea+2][0],this.vertices[ea+2][1],this.vertices[ea+2][2]);ea+=3}else{if(this.vertexCodes[ed]===2){ec.curveVertex(this.vertices[ea][0],this.vertices[ea][1],this.vertices[ea][2]);ea++}else{if(this.vertexCodes[ed]===3){ec.breakShape=true}}}}}}}ec.endShape(this.close?2:1)},drawGeometry:function(ec){var ed,eb;ec.beginShape(this.kind);if(this.style){for(ed=0,eb=this.vertices.length;ed<eb;ed++){ec.vertex(this.vertices[ed])}}else{for(ed=0,eb=this.vertices.length;ed<eb;ed++){var ea=this.vertices[ed];if(ea[2]===0){ec.vertex(ea[0],ea[1])}else{ec.vertex(ea[0],ea[1],ea[2])}}}ec.endShape()},drawGroup:function(eb){for(var ec=0,ea=this.children.length;ec<ea;ec++){this.children[ec].draw(eb)}},drawPrimitive:function(ea){if(this.kind===2){ea.point(this.params[0],this.params[1])}else{if(this.kind===4){if(this.params.length===4){ea.line(this.params[0],this.params[1],this.params[2],this.params[3])}else{ea.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}}else{if(this.kind===8){ea.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else{if(this.kind===16){ea.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])}else{if(this.kind===30){if(this.image!==null){var ee=bk;ea.imageMode(0);ea.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3]);bk=ee}else{var eb=bK;ea.rectMode(0);ea.rect(this.params[0],this.params[1],this.params[2],this.params[3]);bK=eb}}else{if(this.kind===31){var ec=cN;ea.ellipseMode(0);ea.ellipse(this.params[0],this.params[1],this.params[2],this.params[3]);cN=ec}else{if(this.kind===32){var ed=cN;ea.ellipseMode(0);ea.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5]);cN=ed}else{if(this.kind===41){if(this.params.length===1){ea.box(this.params[0])}else{ea.box(this.params[0],this.params[1],this.params[2])}}else{if(this.kind===40){ea.sphere(this.params[0])}}}}}}}}}},pre:function(ea){if(this.matrix){ea.pushMatrix();ea.transform(this.matrix)}if(this.style){ea.pushStyle();this.styles(ea)}},post:function(ea){if(this.matrix){ea.popMatrix()}if(this.style){ea.popStyle()}},styles:function(ea){if(this.stroke){ea.stroke(this.strokeColor);ea.strokeWeight(this.strokeWeight);ea.strokeCap(this.strokeCap);ea.strokeJoin(this.strokeJoin)}else{ea.noStroke()}if(this.fill){ea.fill(this.fillColor)}else{ea.noFill()}},getChild:function(ed){var eb,ea;if(typeof ed==="number"){return this.children[ed]}var ec;if(ed===""||this.name===ed){return this}if(this.nameTable.length>0){for(eb=0,ea=this.nameTable.length;eb<ea||ec;eb++){if(this.nameTable[eb].getName===ed){ec=this.nameTable[eb];break}}if(ec){return ec}}for(eb=0,ea=this.children.length;eb<ea;eb++){ec=this.children[eb].getChild(ed);if(ec){return ec}}return null},getChildCount:function(){return this.children.length},addChild:function(ea){this.children.push(ea);ea.parent=this;if(ea.getName()!==null){this.addName(ea.getName(),ea)}},addName:function(eb,ea){if(this.parent!==null){this.parent.addName(eb,ea)}else{this.nameTable.push([eb,ea])}},translate:function(){if(arguments.length===2){this.checkMatrix(2);this.matrix.translate(arguments[0],arguments[1])}else{this.checkMatrix(3);this.matrix.translate(arguments[0],arguments[1],0)}},checkMatrix:function(ea){if(this.matrix===null){if(ea===2){this.matrix=new cW.PMatrix2D}else{this.matrix=new cW.PMatrix3D}}else{if(ea===3&&this.matrix instanceof cW.PMatrix2D){this.matrix=new cW.PMatrix3D}}},rotateX:function(ea){this.rotate(ea,1,0,0)},rotateY:function(ea){this.rotate(ea,0,1,0)},rotateZ:function(ea){this.rotate(ea,0,0,1)},rotate:function(){if(arguments.length===1){this.checkMatrix(2);this.matrix.rotate(arguments[0])}else{this.checkMatrix(3);this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3])}},scale:function(){if(arguments.length===2){this.checkMatrix(2);this.matrix.scale(arguments[0],arguments[1])}else{if(arguments.length===3){this.checkMatrix(2);this.matrix.scale(arguments[0],arguments[1],arguments[2])}else{this.checkMatrix(2);this.matrix.scale(arguments[0])}}},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(ea){if(arguments.length===1){this.applyMatrix(ea.elements[0],ea.elements[1],0,ea.elements[2],ea.elements[3],ea.elements[4],0,ea.elements[5],0,0,1,0,0,0,0,1)}else{if(arguments.length===6){this.checkMatrix(2);this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)}else{if(arguments.length===16){this.checkMatrix(3);this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15])}}}}};var cr=cW.PShapeSVG=function(){cW.PShape.call(this);if(arguments.length===1){this.element=arguments[0];this.vertexCodes=[];this.vertices=[];this.opacity=1;this.stroke=false;this.strokeColor=4278190080;this.strokeWeight=1;this.strokeCap="butt";this.strokeJoin="miter";this.strokeGradient=null;this.strokeGradientPaint=null;this.strokeName=null;this.strokeOpacity=1;this.fill=true;this.fillColor=4278190080;this.fillGradient=null;this.fillGradientPaint=null;this.fillName=null;this.fillOpacity=1;if(this.element.getName()!=="svg"){throw"root is not <svg>, it's <"+this.element.getName()+">"}}else{if(arguments.length===2){if(typeof arguments[1]==="string"){if(arguments[1].indexOf(".svg")>-1){this.element=new cW.XMLElement(cW,arguments[1]);this.vertexCodes=[];this.vertices=[];this.opacity=1;this.stroke=false;this.strokeColor=4278190080;this.strokeWeight=1;this.strokeCap="butt";this.strokeJoin="miter";this.strokeGradient="";this.strokeGradientPaint="";this.strokeName="";this.strokeOpacity=1;this.fill=true;this.fillColor=4278190080;this.fillGradient=null;this.fillGradientPaint=null;this.fillOpacity=1}}else{if(arguments[0]){this.element=arguments[1];this.vertexCodes=arguments[0].vertexCodes.slice();this.vertices=arguments[0].vertices.slice();this.stroke=arguments[0].stroke;this.strokeColor=arguments[0].strokeColor;this.strokeWeight=arguments[0].strokeWeight;this.strokeCap=arguments[0].strokeCap;this.strokeJoin=arguments[0].strokeJoin;this.strokeGradient=arguments[0].strokeGradient;this.strokeGradientPaint=arguments[0].strokeGradientPaint;this.strokeName=arguments[0].strokeName;this.fill=arguments[0].fill;this.fillColor=arguments[0].fillColor;this.fillGradient=arguments[0].fillGradient;this.fillGradientPaint=arguments[0].fillGradientPaint;this.fillName=arguments[0].fillName;this.strokeOpacity=arguments[0].strokeOpacity;this.fillOpacity=arguments[0].fillOpacity;this.opacity=arguments[0].opacity}}}}this.name=this.element.getStringAttribute("id");var ea=this.element.getStringAttribute("display","inline");this.visible=ea!=="none";var ef=this.element.getAttribute("transform");if(ef){this.matrix=this.parseMatrix(ef)}var ec=this.element.getStringAttribute("viewBox");if(ec!==null){var ee=ec.split(" ");this.width=ee[2];this.height=ee[3]}var eb=this.element.getStringAttribute("width");var ed=this.element.getStringAttribute("height");if(eb!==null){this.width=this.parseUnitSize(eb);this.height=this.parseUnitSize(ed)}else{if(this.width===0||this.height===0){this.width=1;this.height=1;throw"The width and/or height is not readable in the <svg> tag of this file."}}this.parseColors(this.element);this.parseChildren(this.element)};cr.prototype=new O;cr.prototype.parseMatrix=function(){function ea(ec){var eb=[];ec.replace(/\((.*?)\)/,function(){return function(ed,ee){eb=ee.replace(/,+/g," ").split(/\s+/)}}());return eb}return function(ei){this.checkMatrix(2);var eb=[];ei.replace(/\s*(\w+)\((.*?)\)/g,function(el){eb.push(cW.trim(el))});if(eb.length===0){return null}for(var eg=0,ee=eb.length;eg<ee;eg++){var ec=ea(eb[eg]);if(eb[eg].indexOf("matrix")!==-1){this.matrix.set(ec[0],ec[2],ec[4],ec[1],ec[3],ec[5])}else{if(eb[eg].indexOf("translate")!==-1){var eh=ec[0];var ef=ec.length===2?ec[1]:0;this.matrix.translate(eh,ef)}else{if(eb[eg].indexOf("scale")!==-1){var ek=ec[0];var ej=ec.length===2?ec[1]:ec[0];this.matrix.scale(ek,ej)}else{if(eb[eg].indexOf("rotate")!==-1){var ed=ec[0];if(ec.length===1){this.matrix.rotate(cW.radians(ed))}else{if(ec.length===3){this.matrix.translate(ec[1],ec[2]);this.matrix.rotate(cW.radians(ec[0]));this.matrix.translate(-ec[1],-ec[2])}}}else{if(eb[eg].indexOf("skewX")!==-1){this.matrix.skewX(parseFloat(ec[0]))}else{if(eb[eg].indexOf("skewY")!==-1){this.matrix.skewY(ec[0])}else{if(eb[eg].indexOf("shearX")!==-1){this.matrix.shearX(ec[0])}else{if(eb[eg].indexOf("shearY")!==-1){this.matrix.shearY(ec[0])}}}}}}}}}return this.matrix}}();cr.prototype.parseChildren=function(ef){var eb=ef.getChildren();var ee=new cW.PShape;for(var ed=0,ec=eb.length;ed<ec;ed++){var ea=this.parseChild(eb[ed]);if(ea){ee.addChild(ea)}}this.children.push(ee)};cr.prototype.getName=function(){return this.name};cr.prototype.parseChild=function(ec){var eb=ec.getName();var ea;if(eb==="g"){ea=new cr(this,ec)}else{if(eb==="defs"){ea=new cr(this,ec)}else{if(eb==="line"){ea=new cr(this,ec);ea.parseLine()}else{if(eb==="circle"){ea=new cr(this,ec);ea.parseEllipse(true)}else{if(eb==="ellipse"){ea=new cr(this,ec);ea.parseEllipse(false)}else{if(eb==="rect"){ea=new cr(this,ec);ea.parseRect()}else{if(eb==="polygon"){ea=new cr(this,ec);ea.parsePoly(true)}else{if(eb==="polyline"){ea=new cr(this,ec);ea.parsePoly(false)}else{if(eb==="path"){ea=new cr(this,ec);ea.parsePath()}else{if(eb==="radialGradient"){dw("PShapeSVG.prototype.parseChild, name = radialGradient")}else{if(eb==="linearGradient"){dw("PShapeSVG.prototype.parseChild, name = linearGradient")}else{if(eb==="text"){dw("PShapeSVG.prototype.parseChild, name = text")}else{if(eb==="filter"){dw("PShapeSVG.prototype.parseChild, name = filter")}else{if(eb==="mask"){dw("PShapeSVG.prototype.parseChild, name = mask")}else{G()}}}}}}}}}}}}}}return ea};cr.prototype.parsePath=function(){this.family=21;this.kind=0;var ef=[];var ez;var ey=cW.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(ey===null){return}ey=cW.__toCharArray(ey);var ed=0,ec=0,ek=0,ei=0,ej=0,eh=0,eq=0,ep=0,eb=0,ea=0,em=0,el=0,eo=0,en=0,ex=0,et=0;var er="";var ev=[];var ew=false;var eg;var ee;var eu,es;while(ex<ey.length){et=ey[ex].valueOf();if(et>=65&&et<=90||et>=97&&et<=122){eu=ex;ex++;if(ex<ey.length){ev=[];et=ey[ex].valueOf();while(!(et>=65&&et<=90||et>=97&&et<=100||et>=102&&et<=122)&&ew===false){if(et===32){if(er!==""){ev.push(parseFloat(er));er=""}ex++}else{if(et===45){if(ey[ex-1].valueOf()===101){er+=ey[ex].toString();ex++}else{if(er!==""){ev.push(parseFloat(er))}er=ey[ex].toString();ex++}}else{er+=ey[ex].toString();ex++}}if(ex===ey.length){ew=true}else{et=ey[ex].valueOf()}}}if(er!==""){ev.push(parseFloat(er));er=""}ee=ey[eu];et=ee.valueOf();if(et===77){if(ev.length>=2&&ev.length%2===0){ed=ev[0];ec=ev[1];this.parsePathMoveto(ed,ec);if(ev.length>2){for(eu=2,es=ev.length;eu<es;eu+=2){ed=ev[eu];ec=ev[eu+1];this.parsePathLineto(ed,ec)}}}}else{if(et===109){if(ev.length>=2&&ev.length%2===0){ed+=ev[0];ec+=ev[1];this.parsePathMoveto(ed,ec);if(ev.length>2){for(eu=2,es=ev.length;eu<es;eu+=2){ed+=ev[eu];ec+=ev[eu+1];this.parsePathLineto(ed,ec)}}}}else{if(et===76){if(ev.length>=2&&ev.length%2===0){for(eu=0,es=ev.length;eu<es;eu+=2){ed=ev[eu];ec=ev[eu+1];this.parsePathLineto(ed,ec)}}}else{if(et===108){if(ev.length>=2&&ev.length%2===0){for(eu=0,es=ev.length;eu<es;eu+=2){ed+=ev[eu];ec+=ev[eu+1];this.parsePathLineto(ed,ec)}}}else{if(et===72){for(eu=0,es=ev.length;eu<es;eu++){ed=ev[eu];this.parsePathLineto(ed,ec)}}else{if(et===104){for(eu=0,es=ev.length;eu<es;eu++){ed+=ev[eu];this.parsePathLineto(ed,ec)}}else{if(et===86){for(eu=0,es=ev.length;eu<es;eu++){ec=ev[eu];this.parsePathLineto(ed,ec)}}else{if(et===118){for(eu=0,es=ev.length;eu<es;eu++){ec+=ev[eu];this.parsePathLineto(ed,ec)}}else{if(et===67){if(ev.length>=6&&ev.length%6===0){for(eu=0,es=ev.length;eu<es;eu+=6){ej=ev[eu];eq=ev[eu+1];eh=ev[eu+2];ep=ev[eu+3];eb=ev[eu+4];ea=ev[eu+5];this.parsePathCurveto(ej,eq,eh,ep,eb,ea);ed=eb;ec=ea}}}else{if(et===99){if(ev.length>=6&&ev.length%6===0){for(eu=0,es=ev.length;eu<es;eu+=6){ej=ed+ev[eu];eq=ec+ev[eu+1];eh=ed+ev[eu+2];ep=ec+ev[eu+3];eb=ed+ev[eu+4];ea=ec+ev[eu+5];this.parsePathCurveto(ej,eq,eh,ep,eb,ea);ed=eb;ec=ea}}}else{if(et===83){if(ev.length>=4&&ev.length%4===0){for(eu=0,es=ev.length;eu<es;eu+=4){if(eg.toLowerCase()==="c"||eg.toLowerCase()==="s"){em=this.vertices[this.vertices.length-2][0];el=this.vertices[this.vertices.length-2][1];eo=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1];ej=eo+(eo-em);eq=en+(en-el)}else{ej=this.vertices[this.vertices.length-1][0];eq=this.vertices[this.vertices.length-1][1]}eh=ev[eu];ep=ev[eu+1];eb=ev[eu+2];ea=ev[eu+3];this.parsePathCurveto(ej,eq,eh,ep,eb,ea);ed=eb;ec=ea}}}else{if(et===115){if(ev.length>=4&&ev.length%4===0){for(eu=0,es=ev.length;eu<es;eu+=4){if(eg.toLowerCase()==="c"||eg.toLowerCase()==="s"){em=this.vertices[this.vertices.length-2][0];el=this.vertices[this.vertices.length-2][1];eo=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1];ej=eo+(eo-em);eq=en+(en-el)}else{ej=this.vertices[this.vertices.length-1][0];eq=this.vertices[this.vertices.length-1][1]}eh=ed+ev[eu];ep=ec+ev[eu+1];eb=ed+ev[eu+2];ea=ec+ev[eu+3];this.parsePathCurveto(ej,eq,eh,ep,eb,ea);ed=eb;ec=ea}}}else{if(et===81){if(ev.length>=4&&ev.length%4===0){for(eu=0,es=ev.length;eu<es;eu+=4){ek=ev[eu];ei=ev[eu+1];eb=ev[eu+2];ea=ev[eu+3];this.parsePathQuadto(ed,ec,ek,ei,eb,ea);ed=eb;ec=ea}}}else{if(et===113){if(ev.length>=4&&ev.length%4===0){for(eu=0,es=ev.length;eu<es;eu+=4){ek=ed+ev[eu];ei=ec+ev[eu+1];eb=ed+ev[eu+2];ea=ec+ev[eu+3];this.parsePathQuadto(ed,ec,ek,ei,eb,ea);ed=eb;ec=ea}}}else{if(et===84){if(ev.length>=2&&ev.length%2===0){for(eu=0,es=ev.length;eu<es;eu+=2){if(eg.toLowerCase()==="q"||eg.toLowerCase()==="t"){em=this.vertices[this.vertices.length-2][0];el=this.vertices[this.vertices.length-2][1];eo=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1];ek=eo+(eo-em);ei=en+(en-el)}else{ek=ed;ei=ec}eb=ev[eu];ea=ev[eu+1];this.parsePathQuadto(ed,ec,ek,ei,eb,ea);ed=eb;ec=ea}}}else{if(et===116){if(ev.length>=2&&ev.length%2===0){for(eu=0,es=ev.length;eu<es;eu+=2){if(eg.toLowerCase()==="q"||eg.toLowerCase()==="t"){em=this.vertices[this.vertices.length-2][0];el=this.vertices[this.vertices.length-2][1];eo=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1];ek=eo+(eo-em);ei=en+(en-el)}else{ek=ed;ei=ec}eb=ed+ev[eu];ea=ec+ev[eu+1];this.parsePathQuadto(ed,ec,ek,ei,eb,ea);ed=eb;ec=ea}}}else{if(et===90||et===122){this.close=true}}}}}}}}}}}}}}}}}eg=ee.toString()}else{ex++}}};cr.prototype.parsePathQuadto=function(ec,ee,ea,ef,eb,ed){if(this.vertices.length>0){this.parsePathCode(1);this.parsePathVertex(ec+(ea-ec)*2/3,ee+(ef-ee)*2/3);this.parsePathVertex(eb+(ea-eb)*2/3,ed+(ef-ed)*2/3);this.parsePathVertex(eb,ed)}else{throw"Path must start with M/m"}};cr.prototype.parsePathCurveto=function(ed,ef,eb,ee,ea,ec){if(this.vertices.length>0){this.parsePathCode(1);this.parsePathVertex(ed,ef);this.parsePathVertex(eb,ee);this.parsePathVertex(ea,ec)}else{throw"Path must start with M/m"}};cr.prototype.parsePathLineto=function(eb,ea){if(this.vertices.length>0){this.parsePathCode(0);this.parsePathVertex(eb,ea);this.vertices[this.vertices.length-1]["moveTo"]=false}else{throw"Path must start with M/m"}};cr.prototype.parsePathMoveto=function(eb,ea){if(this.vertices.length>0){this.parsePathCode(3)}this.parsePathCode(0);this.parsePathVertex(eb,ea);this.vertices[this.vertices.length-1]["moveTo"]=true};cr.prototype.parsePathVertex=function(ea,ec){var eb=[];eb[0]=ea;eb[1]=ec;this.vertices.push(eb)};cr.prototype.parsePathCode=function(ea){this.vertexCodes.push(ea)};cr.prototype.parsePoly=function(ee){this.family=21;this.close=ee;var eb=cW.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(eb!==null){var ea=eb.split(" ");if(ea.length%2===0){for(var ed=0,ec=ea.length;ed<ec;ed++){var ef=[];ef[0]=ea[ed];ef[1]=ea[++ed];this.vertices.push(ef)}}else{throw"Error parsing polygon points: odd number of coordinates provided"}}};cr.prototype.parseRect=function(){this.kind=30;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(this.params[2]<0||this.params[3]<0){throw"svg error: negative width or height found while parsing <rect>"}};cr.prototype.parseEllipse=function(ec){this.kind=31;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var eb,ea;if(ec){eb=ea=this.element.getFloatAttribute("r");if(eb<0){throw"svg error: negative radius found while parsing <circle>"}}else{eb=this.element.getFloatAttribute("rx");ea=this.element.getFloatAttribute("ry");if(eb<0||ea<0){throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"}}this.params[0]-=eb;this.params[1]-=ea;this.params[2]=eb*2;this.params[3]=ea*2};cr.prototype.parseLine=function(){this.kind=4;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};cr.prototype.parseColors=function(ec){if(ec.hasAttribute("opacity")){this.setOpacity(ec.getAttribute("opacity"))}if(ec.hasAttribute("stroke")){this.setStroke(ec.getAttribute("stroke"))}if(ec.hasAttribute("stroke-width")){this.setStrokeWeight(ec.getAttribute("stroke-width"))}if(ec.hasAttribute("stroke-linejoin")){this.setStrokeJoin(ec.getAttribute("stroke-linejoin"))}if(ec.hasAttribute("stroke-linecap")){this.setStrokeCap(ec.getStringAttribute("stroke-linecap"))}if(ec.hasAttribute("fill")){this.setFill(ec.getStringAttribute("fill"))}if(ec.hasAttribute("style")){var ef=ec.getStringAttribute("style");var ed=ef.toString().split(";");for(var eb=0,ea=ed.length;eb<ea;eb++){var ee=cW.trim(ed[eb].split(":"));if(ee[0]==="fill"){this.setFill(ee[1])}else{if(ee[0]==="fill-opacity"){this.setFillOpacity(ee[1])}else{if(ee[0]==="stroke"){this.setStroke(ee[1])}else{if(ee[0]==="stroke-width"){this.setStrokeWeight(ee[1])}else{if(ee[0]==="stroke-linecap"){this.setStrokeCap(ee[1])}else{if(ee[0]==="stroke-linejoin"){this.setStrokeJoin(ee[1])}else{if(ee[0]==="stroke-opacity"){this.setStrokeOpacity(ee[1])}else{if(ee[0]==="opacity"){this.setOpacity(ee[1])}}}}}}}}}}};cr.prototype.setFillOpacity=function(ea){this.fillOpacity=parseFloat(ea);this.fillColor=this.fillOpacity*255<<24|this.fillColor&16777215};cr.prototype.setFill=function(ea){var eb=this.fillColor&4278190080;if(ea==="none"){this.fill=false}else{if(ea.indexOf("#")===0){this.fill=true;if(ea.length===4){ea=ea.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.fillColor=eb|parseInt(ea.substring(1),16)&16777215}else{if(ea.indexOf("rgb")===0){this.fill=true;this.fillColor=eb|this.parseRGB(ea)}else{if(ea.indexOf("url(#")===0){this.fillName=ea.substring(5,ea.length-1)}else{if(E[ea]){this.fill=true;this.fillColor=eb|parseInt(E[ea].substring(1),16)&16777215}}}}}};cr.prototype.setOpacity=function(ea){this.strokeColor=parseFloat(ea)*255<<24|this.strokeColor&16777215;this.fillColor=parseFloat(ea)*255<<24|this.fillColor&16777215};cr.prototype.setStroke=function(ea){var eb=this.strokeColor&4278190080;if(ea==="none"){this.stroke=false}else{if(ea.charAt(0)==="#"){this.stroke=true;if(ea.length===4){ea=ea.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.strokeColor=eb|parseInt(ea.substring(1),16)&16777215}else{if(ea.indexOf("rgb")===0){this.stroke=true;this.strokeColor=eb|this.parseRGB(ea)}else{if(ea.indexOf("url(#")===0){this.strokeName=ea.substring(5,ea.length-1)}else{if(E[ea]){this.stroke=true;this.strokeColor=eb|parseInt(E[ea].substring(1),16)&16777215}}}}}};cr.prototype.setStrokeWeight=function(ea){this.strokeWeight=this.parseUnitSize(ea)};cr.prototype.setStrokeJoin=function(ea){if(ea==="miter"){this.strokeJoin="miter"}else{if(ea==="round"){this.strokeJoin="round"}else{if(ea==="bevel"){this.strokeJoin="bevel"}}}};cr.prototype.setStrokeCap=function(ea){if(ea==="butt"){this.strokeCap="butt"}else{if(ea==="round"){this.strokeCap="round"}else{if(ea==="square"){this.strokeCap="square"}}}};cr.prototype.setStrokeOpacity=function(ea){this.strokeOpacity=parseFloat(ea);this.strokeColor=this.strokeOpacity*255<<24|this.strokeColor&16777215};cr.prototype.parseRGB=function(eb){var ec=eb.substring(eb.indexOf("(")+1,eb.indexOf(")"));var ea=ec.split(", ");return ea[0]<<16|ea[1]<<8|ea[2]};cr.prototype.parseUnitSize=function(eb){var ea=eb.length-2;if(ea<0){return eb}if(eb.indexOf("pt")===ea){return parseFloat(eb.substring(0,ea))*1.25}if(eb.indexOf("pc")===ea){return parseFloat(eb.substring(0,ea))*15}if(eb.indexOf("mm")===ea){return parseFloat(eb.substring(0,ea))*3.543307}if(eb.indexOf("cm")===ea){return parseFloat(eb.substring(0,ea))*35.43307}if(eb.indexOf("in")===ea){return parseFloat(eb.substring(0,ea))*90}if(eb.indexOf("px")===ea){return parseFloat(eb.substring(0,ea))}return parseFloat(eb)};cW.shape=function(ec,eb,ee,ed,ea){if(arguments.length>=1&&arguments[0]!==null){if(ec.isVisible()){cW.pushMatrix();if(S===3){if(arguments.length===5){cW.translate(eb-ed/2,ee-ea/2);cW.scale(ed/ec.getWidth(),ea/ec.getHeight())}else{if(arguments.length===3){cW.translate(eb-ec.getWidth()/2,-ec.getHeight()/2)}else{cW.translate(-ec.getWidth()/2,-ec.getHeight()/2)}}}else{if(S===0){if(arguments.length===5){cW.translate(eb,ee);cW.scale(ed/ec.getWidth(),ea/ec.getHeight())}else{if(arguments.length===3){cW.translate(eb,ee)}}}else{if(S===1){if(arguments.length===5){ed-=eb;ea-=ee;cW.translate(eb,ee);cW.scale(ed/ec.getWidth(),ea/ec.getHeight())}else{if(arguments.length===3){cW.translate(eb,ee)}}}}}ec.draw(cW);if(arguments.length===1&&S===3||arguments.length>1){cW.popMatrix()}}}};cW.shapeMode=function(ea){S=ea};cW.loadShape=function(ea){if(arguments.length===1){if(ea.indexOf(".svg")>-1){return new cr(null,ea)}}return null};var cT=function(ee,ed,ea,eb,ec){this.fullName=ee||"";this.name=ed||"";this.namespace=ea||"";this.value=eb;this.type=ec};cT.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(ea){this.value=ea}};var b9=cW.XMLElement=function(ea,ec,ed,eb){this.attributes=[];this.children=[];this.fullName=null;this.name=null;this.namespace="";this.content=null;this.parent=null;this.lineNr="";this.systemID="";this.type="ELEMENT";if(ea){if(typeof ea==="string"){if(ec===t&&ea.indexOf("<")>-1){this.parse(ea)}else{this.fullName=ea;this.namespace=ec;this.systemId=ed;this.lineNr=eb}}else{this.parse(ec)}}};b9.prototype={parse:function(ea){var ec;try{var ee=ea.substring(ea.length-4);if(ee===".xml"||ee===".svg"){ea=w(ea)}ec=(new DOMParser).parseFromString(ea,"text/xml");var eb=ec.documentElement;if(eb){this.parseChildrenRecursive(null,eb)}else{throw"Error loading document"}return this}catch(ed){throw ed}},parseChildrenRecursive:function(ei,eg){var ef,eb,eh,ee,ed,ea;if(!ei){this.fullName=eg.localName;this.name=eg.nodeName;ef=this}else{ef=new b9(eg.nodeName);ef.parent=ei}if(eg.nodeType===3&&eg.textContent!==""){return this.createPCDataElement(eg.textContent)}if(eg.nodeType===4){return this.createCDataElement(eg.textContent)}if(eg.attributes){for(ee=0,ed=eg.attributes.length;ee<ed;ee++){eh=eg.attributes[ee];eb=new cT(eh.getname,eh.nodeName,eh.namespaceURI,eh.nodeValue,eh.nodeType);ef.attributes.push(eb)}}if(eg.childNodes){for(ee=0,ed=eg.childNodes.length;ee<ed;ee++){var ec=eg.childNodes[ee];ea=ef.parseChildrenRecursive(ef,ec);if(ea!==null){ef.children.push(ea)}}}return ef},createElement:function(eb,ec,ed,ea){if(ed===t){return new b9(eb,ec)}return new b9(eb,ec,ed,ea)},createPCDataElement:function(eb,ea){if(eb.replace(/^\s+$/g,"")===""){return null}var ec=new b9;ec.type="TEXT";ec.content=eb;return ec},createCDataElement:function(ec){var ed=this.createPCDataElement(ec);if(ed===null){return null}ed.type="CDATA";var eb={"<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"},ea;for(ea in eb){if(!Object.hasOwnProperty(eb,ea)){ec=ec.replace(new RegExp(ea,"g"),eb[ea])}}ed.cdata=ec;return ed},hasAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])!==null}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])!==null}},equals:function(ef){if(!(ef instanceof b9)){return false}var ec,eb;if(this.fullName!==ef.fullName){return false}if(this.attributes.length!==ef.getAttributeCount()){return false}if(this.attributes.length!==ef.attributes.length){return false}var ej,eh,ea,eg,ei;for(ec=0,eb=this.attributes.length;ec<eb;ec++){ej=this.attributes[ec].getName();eh=this.attributes[ec].getNamespace();ei=ef.findAttribute(ej,eh);if(ei===null){return false}if(this.attributes[ec].getValue()!==ei.getValue()){return false}if(this.attributes[ec].getType()!==ei.getType()){return false}}if(this.children.length!==ef.getChildCount()){return false}if(this.children.length>0){var ee,ed;for(ec=0,eb=this.children.length;ec<eb;ec++){ee=this.getChild(ec);ed=ef.getChild(ec);if(!ee.equals(ed)){return false}}return true}return this.content===ef.content},getContent:function(){if(this.type==="TEXT"||this.type==="CDATA"){return this.content}var ea=this.children;if(ea.length===1&&(ea[0].type==="TEXT"||ea[0].type==="CDATA")){return ea[0].content}return null},getAttribute:function(){var ea;if(arguments.length===2){ea=this.findAttribute(arguments[0]);if(ea){return ea.getValue()}return arguments[1]}else{if(arguments.length===1){ea=this.findAttribute(arguments[0]);if(ea){return ea.getValue()}return null}else{if(arguments.length===3){ea=this.findAttribute(arguments[0],arguments[1]);if(ea){return ea.getValue()}return arguments[2]}}}},getStringAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(ea){return this.getStringAttribute(ea)},getFloatAttribute:function(){if(arguments.length===1){return parseFloat(this.getAttribute(arguments[0],0))}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(ea){return this.getFloatAttribute(ea)},getIntAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0],0)}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(ea){return this.getIntAttribute(ea)},hasChildren:function(){return this.children.length>0},addChild:function(ea){if(ea!==null){ea.parent=this;this.children.push(ea)}},insertChild:function(ec,ea){if(ec){if(ec.getLocalName()===null&&!this.hasChildren()){var eb=this.children[this.children.length-1];if(eb.getLocalName()===null){eb.setContent(eb.getContent()+ec.getContent());return}}ec.parent=this;this.children.splice(ea,0,ec)}},getChild:function(eb){if(typeof eb==="number"){return this.children[eb]}if(eb.indexOf("/")!==-1){return this.getChildRecursive(eb.split("/"),0)}var ea,ee;for(var ed=0,ec=this.getChildCount();ed<ec;ed++){ea=this.getChild(ed);ee=ea.getName();if(ee!==null&&ee===eb){return ea}}return null},getChildren:function(){if(arguments.length===1){if(typeof arguments[0]==="number"){return this.getChild(arguments[0])}if(arguments[0].indexOf("/")!==-1){return this.getChildrenRecursive(arguments[0].split("/"),0)}var ee=[];var ea,ed;for(var ec=0,eb=this.getChildCount();ec<eb;ec++){ea=this.getChild(ec);ed=ea.getName();if(ed!==null&&ed===arguments[0]){ee.push(ea)}}return ee}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(eb,eg){if(eg===eb.length){return this}var ea,ef,ee=eb[eg];for(var ed=0,ec=this.getChildCount();ed<ec;ed++){ea=this.getChild(ed);ef=ea.getName();if(ef!==null&&ef===ee){return ea.getChildRecursive(eb,eg+1)}}return null},getChildrenRecursive:function(ea,ee){if(ee===ea.length-1){return this.getChildren(ea[ee])}var ed=this.getChildren(ea[ee]);var ec=[];for(var eb=0;eb<ed.length;eb++){ec=ec.concat(ed[eb].getChildrenRecursive(ea,ee+1))}return ec},isLeaf:function(){return !this.hasChildren()},listChildren:function(){var ea=[];for(var ec=0,eb=this.children.length;ec<eb;ec++){ea.push(this.getChild(ec).getName())}return ea},removeAttribute:function(eb,ed){this.namespace=ed||"";for(var ec=0,ea=this.attributes.length;ec<ea;ec++){if(this.attributes[ec].getName()===eb&&this.attributes[ec].getNamespace()===this.namespace){this.attributes.splice(ec,1);break}}},removeChild:function(ec){if(ec){for(var eb=0,ea=this.children.length;eb<ea;eb++){if(this.children[eb].equals(ec)){this.children.splice(eb,1);break}}}},removeChildAtIndex:function(ea){if(this.children.length>ea){this.children.splice(ea,1)}},findAttribute:function(eb,ed){this.namespace=ed||"";for(var ec=0,ea=this.attributes.length;ec<ea;ec++){if(this.attributes[ec].getName()===eb&&this.attributes[ec].getNamespace()===this.namespace){return this.attributes[ec]}}return null},setAttribute:function(){var ea;if(arguments.length===3){var ec=arguments[0].indexOf(":");var eb=arguments[0].substring(ec+1);ea=this.findAttribute(eb,arguments[1]);if(ea){ea.setValue(arguments[2])}else{ea=new cT(arguments[0],eb,arguments[1],arguments[2],"CDATA");this.attributes.push(ea)}}else{ea=this.findAttribute(arguments[0]);if(ea){ea.setValue(arguments[1])}else{ea=new cT(arguments[0],arguments[0],null,arguments[1],"CDATA");this.attributes.push(ea)}}},setString:function(ea,eb){this.setAttribute(ea,eb)},setInt:function(ea,eb){this.setAttribute(ea,eb)},setFloat:function(ea,eb){this.setAttribute(ea,eb)},setContent:function(ea){if(this.children.length>0){F.debug("Tried to set content for XMLElement with children")}this.content=ea},setName:function(){if(arguments.length===1){this.name=arguments[0];this.fullName=arguments[0];this.namespace=null}else{var ea=arguments[0].indexOf(":");if(arguments[1]===null||ea<0){this.name=arguments[0]}else{this.name=arguments[0].substring(ea+1)}this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if(this.type==="TEXT"){return this.content}if(this.type==="CDATA"){return this.cdata}var ec=this.fullName;var ed="<"+ec;var eb,ee;for(eb=0;eb<this.attributes.length;eb++){var ea=this.attributes[eb];ed+=" "+ea.getName()+'="'+ea.getValue()+'"'}if(this.children.length===0){if(this.content===""){ed+="/>"}else{ed+=">"+this.content+"</"+ec+">"}}else{ed+=">";for(ee=0;ee<this.children.length;ee++){ed+=this.children[ee].toString()}ed+="</"+ec+">"}return ed}};b9.parse=function(eb){var ea=new b9;ea.parse(eb);return ea};var dg=cW.XML=cW.XMLElement;cW.loadXML=function(ea){return new dg(cW,ea)};var cm=function(ed){var ea=0;for(var eb=0;eb<ed.length;eb++){if(eb!==0){ea=q.max(ea,q.abs(ed[eb]))}else{ea=q.abs(ed[eb])}}var ec=(ea+"").indexOf(".");if(ec===0){ec=1}else{if(ec===-1){ec=(ea+"").length}}return ec};var aX=cW.PMatrix2D=function(){if(arguments.length===0){this.reset()}else{if(arguments.length===1&&arguments[0] instanceof aX){this.set(arguments[0].array())}else{if(arguments.length===6){this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}};aX.prototype={set:function(){if(arguments.length===6){var ea=arguments;this.set([ea[0],ea[1],ea[2],ea[3],ea[4],ea[5]])}else{if(arguments.length===1&&arguments[0] instanceof aX){this.elements=arguments[0].array()}else{if(arguments.length===1&&arguments[0] instanceof Array){this.elements=arguments[0].slice()}}}},get:function(){var ea=new aX;ea.set(this.elements);return ea},reset:function(){this.set([1,0,0,0,1,0])},array:function aE(){return this.elements.slice()},translate:function(eb,ea){this.elements[2]=eb*this.elements[0]+ea*this.elements[1]+this.elements[2];this.elements[5]=eb*this.elements[3]+ea*this.elements[4]+this.elements[5]},invTranslate:function(eb,ea){this.translate(-eb,-ea)},transpose:function(){},mult:function(eb,ec){var ea,ed;if(eb instanceof A){ea=eb.x;ed=eb.y;if(!ec){ec=new A}}else{if(eb instanceof Array){ea=eb[0];ed=eb[1];if(!ec){ec=[]}}}if(ec instanceof Array){ec[0]=this.elements[0]*ea+this.elements[1]*ed+this.elements[2];ec[1]=this.elements[3]*ea+this.elements[4]*ed+this.elements[5]}else{if(ec instanceof A){ec.x=this.elements[0]*ea+this.elements[1]*ed+this.elements[2];ec.y=this.elements[3]*ea+this.elements[4]*ed+this.elements[5];ec.z=0}}return ec},multX:function(ea,eb){return ea*this.elements[0]+eb*this.elements[1]+this.elements[2]},multY:function(ea,eb){return ea*this.elements[3]+eb*this.elements[4]+this.elements[5]},skewX:function(ea){this.apply(1,0,1,ea,0,0)},skewY:function(ea){this.apply(1,0,1,0,ea,0)},shearX:function(ea){this.apply(1,0,1,q.tan(ea),0,0)},shearY:function(ea){this.apply(1,0,1,0,q.tan(ea),0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var ef=this.determinant();if(q.abs(ef)>-2147483648){var eb=this.elements[0];var eg=this.elements[1];var ee=this.elements[2];var ed=this.elements[3];var ec=this.elements[4];var ea=this.elements[5];this.elements[0]=ec/ef;this.elements[3]=-ed/ef;this.elements[1]=-eg/ef;this.elements[4]=eb/ef;this.elements[2]=(eg*ea-ec*ee)/ef;this.elements[5]=(ed*ee-eb*ea)/ef;return true}return false},scale:function(eb,ea){if(eb&&!ea){ea=eb}if(eb&&ea){this.elements[0]*=eb;this.elements[1]*=ea;this.elements[3]*=eb;this.elements[4]*=ea}},invScale:function(eb,ea){if(eb&&!ea){ea=eb}this.scale(1/eb,1/ea)},apply:function(){var ec;if(arguments.length===1&&arguments[0] instanceof aX){ec=arguments[0].array()}else{if(arguments.length===6){ec=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){ec=arguments[0]}}}var ea=[0,0,this.elements[2],0,0,this.elements[5]];var ed=0;for(var ee=0;ee<2;ee++){for(var eb=0;eb<3;eb++,ed++){ea[ed]+=this.elements[ee*3+0]*ec[eb+0]+this.elements[ee*3+1]*ec[eb+3]}}this.elements=ea.slice()},preApply:function(){var eb;if(arguments.length===1&&arguments[0] instanceof aX){eb=arguments[0].array()}else{if(arguments.length===6){eb=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){eb=arguments[0]}}}var ea=[0,0,eb[2],0,0,eb[5]];ea[2]=eb[2]+this.elements[2]*eb[0]+this.elements[5]*eb[1];ea[5]=eb[5]+this.elements[2]*eb[3]+this.elements[5]*eb[4];ea[0]=this.elements[0]*eb[0]+this.elements[3]*eb[1];ea[3]=this.elements[0]*eb[3]+this.elements[3]*eb[4];ea[1]=this.elements[1]*eb[0]+this.elements[4]*eb[1];ea[4]=this.elements[1]*eb[3]+this.elements[4]*eb[4];this.elements=ea.slice()},rotate:function(ec){var ee=q.cos(ec);var ea=q.sin(ec);var ed=this.elements[0];var eb=this.elements[1];this.elements[0]=ee*ed+ea*eb;this.elements[1]=-ea*ed+ee*eb;ed=this.elements[3];eb=this.elements[4];this.elements[3]=ee*ed+ea*eb;this.elements[4]=-ea*ed+ee*eb},rotateZ:function(ea){this.rotate(ea)},invRotateZ:function(ea){this.rotateZ(ea-q.PI)},print:function(){var eb=cm(this.elements);var ea=""+cW.nfs(this.elements[0],eb,4)+" "+cW.nfs(this.elements[1],eb,4)+" "+cW.nfs(this.elements[2],eb,4)+"\n"+cW.nfs(this.elements[3],eb,4)+" "+cW.nfs(this.elements[4],eb,4)+" "+cW.nfs(this.elements[5],eb,4)+"\n\n";cW.println(ea)}};var aP=cW.PMatrix3D=function(){this.reset()};aP.prototype={set:function(){if(arguments.length===16){this.elements=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof aP){this.elements=arguments[0].array()}else{if(arguments.length===1&&arguments[0] instanceof Array){this.elements=arguments[0].slice()}}}},get:function(){var ea=new aP;ea.set(this.elements);return ea},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function aE(){return this.elements.slice()},translate:function(eb,ea,ec){if(ec===t){ec=0}this.elements[3]+=eb*this.elements[0]+ea*this.elements[1]+ec*this.elements[2];this.elements[7]+=eb*this.elements[4]+ea*this.elements[5]+ec*this.elements[6];this.elements[11]+=eb*this.elements[8]+ea*this.elements[9]+ec*this.elements[10];this.elements[15]+=eb*this.elements[12]+ea*this.elements[13]+ec*this.elements[14]},transpose:function(){var ea=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=ea;ea=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=ea;ea=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=ea;ea=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=ea;ea=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=ea;ea=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=ea},mult:function(ec,ed){var ea,ef,ee,eb;if(ec instanceof A){ea=ec.x;ef=ec.y;ee=ec.z;eb=1;if(!ed){ed=new A}}else{if(ec instanceof Array){ea=ec[0];ef=ec[1];ee=ec[2];eb=ec[3]||1;if(!ed||ed.length!==3&&ed.length!==4){ed=[0,0,0]}}}if(ed instanceof Array){if(ed.length===3){ed[0]=this.elements[0]*ea+this.elements[1]*ef+this.elements[2]*ee+this.elements[3];ed[1]=this.elements[4]*ea+this.elements[5]*ef+this.elements[6]*ee+this.elements[7];ed[2]=this.elements[8]*ea+this.elements[9]*ef+this.elements[10]*ee+this.elements[11]}else{if(ed.length===4){ed[0]=this.elements[0]*ea+this.elements[1]*ef+this.elements[2]*ee+this.elements[3]*eb;ed[1]=this.elements[4]*ea+this.elements[5]*ef+this.elements[6]*ee+this.elements[7]*eb;ed[2]=this.elements[8]*ea+this.elements[9]*ef+this.elements[10]*ee+this.elements[11]*eb;ed[3]=this.elements[12]*ea+this.elements[13]*ef+this.elements[14]*ee+this.elements[15]*eb}}}if(ed instanceof A){ed.x=this.elements[0]*ea+this.elements[1]*ef+this.elements[2]*ee+this.elements[3];ed.y=this.elements[4]*ea+this.elements[5]*ef+this.elements[6]*ee+this.elements[7];ed.z=this.elements[8]*ea+this.elements[9]*ef+this.elements[10]*ee+this.elements[11]}return ed},preApply:function(){var ec;if(arguments.length===1&&arguments[0] instanceof aP){ec=arguments[0].array()}else{if(arguments.length===16){ec=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){ec=arguments[0]}}}var ea=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var ed=0;for(var ee=0;ee<4;ee++){for(var eb=0;eb<4;eb++,ed++){ea[ed]+=this.elements[eb+0]*ec[ee*4+0]+this.elements[eb+4]*ec[ee*4+1]+this.elements[eb+8]*ec[ee*4+2]+this.elements[eb+12]*ec[ee*4+3]}}this.elements=ea.slice()},apply:function(){var ec;if(arguments.length===1&&arguments[0] instanceof aP){ec=arguments[0].array()}else{if(arguments.length===16){ec=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){ec=arguments[0]}}}var ea=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var ed=0;for(var ee=0;ee<4;ee++){for(var eb=0;eb<4;eb++,ed++){ea[ed]+=this.elements[ee*4+0]*ec[eb+0]+this.elements[ee*4+1]*ec[eb+4]+this.elements[ee*4+2]*ec[eb+8]+this.elements[ee*4+3]*ec[eb+12]}}this.elements=ea.slice()},rotate:function(ee,ea,eg,ed){if(!eg){this.rotateZ(ee)}else{var ef=cW.cos(ee);var ec=cW.sin(ee);var eb=1-ef;this.apply(eb*ea*ea+ef,eb*ea*eg-ec*ed,eb*ea*ed+ec*eg,0,eb*ea*eg+ec*ed,eb*eg*eg+ef,eb*eg*ed-ec*ea,0,eb*ea*ed-ec*eg,eb*eg*ed+ec*ea,eb*ed*ed+ef,0,0,0,0,1)}},invApply:function(){if(ab===t){ab=new aP}var ea=arguments;ab.set(ea[0],ea[1],ea[2],ea[3],ea[4],ea[5],ea[6],ea[7],ea[8],ea[9],ea[10],ea[11],ea[12],ea[13],ea[14],ea[15]);if(!ab.invert()){return false}this.preApply(ab);return true},rotateX:function(eb){var ec=cW.cos(eb);var ea=cW.sin(eb);this.apply([1,0,0,0,0,ec,-ea,0,0,ea,ec,0,0,0,0,1])},rotateY:function(eb){var ec=cW.cos(eb);var ea=cW.sin(eb);this.apply([ec,0,ea,0,0,1,0,0,-ea,0,ec,0,0,0,0,1])},rotateZ:function(eb){var ec=q.cos(eb);var ea=q.sin(eb);this.apply([ec,-ea,0,0,ea,ec,0,0,0,0,1,0,0,0,0,1])},scale:function(ec,eb,ea){if(ec&&!eb&&!ea){eb=ea=ec}else{if(ec&&eb&&!ea){ea=1}}if(ec&&eb&&ea){this.elements[0]*=ec;this.elements[1]*=eb;this.elements[2]*=ea;this.elements[4]*=ec;this.elements[5]*=eb;this.elements[6]*=ea;this.elements[8]*=ec;this.elements[9]*=eb;this.elements[10]*=ea;this.elements[12]*=ec;this.elements[13]*=eb;this.elements[14]*=ea}},skewX:function(eb){var ea=q.tan(eb);this.apply(1,ea,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(eb){var ea=q.tan(eb);this.apply(1,0,0,0,ea,1,0,0,0,0,1,0,0,0,0,1)},shearX:function(eb){var ea=q.tan(eb);this.apply(1,ea,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},shearY:function(eb){var ea=q.tan(eb);this.apply(1,0,0,0,ea,1,0,0,0,0,1,0,0,0,0,1)},multX:function(ea,ed,ec,eb){if(!ec){return this.elements[0]*ea+this.elements[1]*ed+this.elements[3]}if(!eb){return this.elements[0]*ea+this.elements[1]*ed+this.elements[2]*ec+this.elements[3]}return this.elements[0]*ea+this.elements[1]*ed+this.elements[2]*ec+this.elements[3]*eb},multY:function(ea,ed,ec,eb){if(!ec){return this.elements[4]*ea+this.elements[5]*ed+this.elements[7]}if(!eb){return this.elements[4]*ea+this.elements[5]*ed+this.elements[6]*ec+this.elements[7]}return this.elements[4]*ea+this.elements[5]*ed+this.elements[6]*ec+this.elements[7]*eb},multZ:function(ea,ed,ec,eb){if(!eb){return this.elements[8]*ea+this.elements[9]*ed+this.elements[10]*ec+this.elements[11]}return this.elements[8]*ea+this.elements[9]*ed+this.elements[10]*ec+this.elements[11]*eb},multW:function(ea,ed,ec,eb){if(!eb){return this.elements[12]*ea+this.elements[13]*ed+this.elements[14]*ec+this.elements[15]}return this.elements[12]*ea+this.elements[13]*ed+this.elements[14]*ec+this.elements[15]*eb},invert:function(){var ej=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4];var ei=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4];var eh=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4];var eg=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5];var ef=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5];var ee=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6];var ed=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12];var ec=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12];var eb=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12];var eo=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13];var em=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13];var el=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14];var en=ej*el-ei*em+eh*eo+eg*eb-ef*ec+ee*ed;if(q.abs(en)<=1e-9){return false}var ek=[];ek[0]=+this.elements[5]*el-this.elements[6]*em+this.elements[7]*eo;ek[4]=-this.elements[4]*el+this.elements[6]*eb-this.elements[7]*ec;ek[8]=+this.elements[4]*em-this.elements[5]*eb+this.elements[7]*ed;ek[12]=-this.elements[4]*eo+this.elements[5]*ec-this.elements[6]*ed;ek[1]=-this.elements[1]*el+this.elements[2]*em-this.elements[3]*eo;ek[5]=+this.elements[0]*el-this.elements[2]*eb+this.elements[3]*ec;ek[9]=-this.elements[0]*em+this.elements[1]*eb-this.elements[3]*ed;ek[13]=+this.elements[0]*eo-this.elements[1]*ec+this.elements[2]*ed;ek[2]=+this.elements[13]*ee-this.elements[14]*ef+this.elements[15]*eg;ek[6]=-this.elements[12]*ee+this.elements[14]*eh-this.elements[15]*ei;ek[10]=+this.elements[12]*ef-this.elements[13]*eh+this.elements[15]*ej;ek[14]=-this.elements[12]*eg+this.elements[13]*ei-this.elements[14]*ej;ek[3]=-this.elements[9]*ee+this.elements[10]*ef-this.elements[11]*eg;ek[7]=+this.elements[8]*ee-this.elements[10]*eh+this.elements[11]*ei;ek[11]=-this.elements[8]*ef+this.elements[9]*eh-this.elements[11]*ej;ek[15]=+this.elements[8]*eg-this.elements[9]*ei+this.elements[10]*ej;var ea=1/en;ek[0]*=ea;ek[1]*=ea;ek[2]*=ea;ek[3]*=ea;ek[4]*=ea;ek[5]*=ea;ek[6]*=ea;ek[7]*=ea;ek[8]*=ea;ek[9]*=ea;ek[10]*=ea;ek[11]*=ea;ek[12]*=ea;ek[13]*=ea;ek[14]*=ea;ek[15]*=ea;this.elements=ek.slice();return true},toString:function(){var eb="";for(var ea=0;ea<15;ea++){eb+=this.elements[ea]+", "}eb+=this.elements[15];return eb},print:function(){var eb=cm(this.elements);var ea=""+cW.nfs(this.elements[0],eb,4)+" "+cW.nfs(this.elements[1],eb,4)+" "+cW.nfs(this.elements[2],eb,4)+" "+cW.nfs(this.elements[3],eb,4)+"\n"+cW.nfs(this.elements[4],eb,4)+" "+cW.nfs(this.elements[5],eb,4)+" "+cW.nfs(this.elements[6],eb,4)+" "+cW.nfs(this.elements[7],eb,4)+"\n"+cW.nfs(this.elements[8],eb,4)+" "+cW.nfs(this.elements[9],eb,4)+" "+cW.nfs(this.elements[10],eb,4)+" "+cW.nfs(this.elements[11],eb,4)+"\n"+cW.nfs(this.elements[12],eb,4)+" "+cW.nfs(this.elements[13],eb,4)+" "+cW.nfs(this.elements[14],eb,4)+" "+cW.nfs(this.elements[15],eb,4)+"\n\n";cW.println(ea)},invTranslate:function(eb,ea,ec){this.preApply(1,0,0,-eb,0,1,0,-ea,0,0,1,-ec,0,0,0,1)},invRotateX:function(eb){var ec=q.cos(-eb);var ea=q.sin(-eb);this.preApply([1,0,0,0,0,ec,-ea,0,0,ea,ec,0,0,0,0,1])},invRotateY:function(eb){var ec=q.cos(-eb);var ea=q.sin(-eb);this.preApply([ec,0,ea,0,0,1,0,0,-ea,0,ec,0,0,0,0,1])},invRotateZ:function(eb){var ec=q.cos(-eb);var ea=q.sin(-eb);this.preApply([ec,-ea,0,0,ea,ec,0,0,0,0,1,0,0,0,0,1])},invScale:function(ea,ec,eb){this.preApply([1/ea,0,0,0,0,1/ec,0,0,0,0,1/eb,0,0,0,0,1])}};var V=cW.PMatrixStack=function(){this.matrixStack=[]};V.prototype.load=function(){var ea=dY.$newPMatrix();if(arguments.length===1){ea.set(arguments[0])}else{ea.set(arguments)}this.matrixStack.push(ea)};bR.prototype.$newPMatrix=function(){return new aX};bB.prototype.$newPMatrix=function(){return new aP};V.prototype.push=function(){this.matrixStack.push(this.peek())};V.prototype.pop=function(){return this.matrixStack.pop()};V.prototype.peek=function(){var ea=dY.$newPMatrix();ea.set(this.matrixStack[this.matrixStack.length-1]);return ea};V.prototype.mult=function(ea){this.matrixStack[this.matrixStack.length-1].apply(ea)};cW.split=function(eb,ea){return eb.split(ea)};cW.splitTokens=function(eg,ef){if(ef===t){return eg.split(/\s+/g)}var ed=ef.split(/()/g),eb="",ea=eg.length,ec,eh,ee=[];for(ec=0;ec<ea;ec++){eh=eg[ec];if(ed.indexOf(eh)>-1){if(eb!==""){ee.push(eb)}eb=""}else{eb+=eh}}if(eb!==""){ee.push(eb)}return ee};cW.append=function(eb,ea){eb[eb.length]=ea;return eb};cW.concat=function(eb,ea){return eb.concat(ea)};cW.sort=function(ef,ed){var eb=[];if(ef.length>0){var ee=ed>0?ed:ef.length;for(var ec=0;ec<ee;ec++){eb.push(ef[ec])}if(typeof ef[0]==="string"){eb.sort()}else{eb.sort(function(eh,eg){return eh-eg})}if(ed>0){for(var ea=eb.length;ea<ef.length;ea++){eb.push(ef[ea])}}}return eb};cW.splice=function(ee,ed,eb){if(ed.length===0){return ee}if(ed instanceof Array){for(var ec=0,ea=eb;ec<ed.length;ea++,ec++){ee.splice(ea,0,ed[ec])}}else{ee.splice(eb,0,ed)}return ee};cW.subset=function(ed,ec,eb){var ea=eb!==t?ec+eb:ed.length;return ed.slice(ec,ea)};cW.join=function(eb,ea){return eb.join(ea)};cW.shorten=function(ed){var eb=[];var ea=ed.length;for(var ec=0;ec<ea;ec++){eb[ec]=ed[ec]}eb.pop();return eb};cW.expand=function(ec,ed){var eb=ec.slice(0),ea=ed||ec.length*2;eb.length=ea;return eb};cW.arrayCopy=function(){var eg,ee=0,ec,eb=0,ef;if(arguments.length===2){eg=arguments[0];ec=arguments[1];ef=eg.length}else{if(arguments.length===3){eg=arguments[0];ec=arguments[1];ef=arguments[2]}else{if(arguments.length===5){eg=arguments[0];ee=arguments[1];ec=arguments[2];eb=arguments[3];ef=arguments[4]}}}for(var ed=ee,ea=eb;ed<ef+ee;ed++,ea++){if(ec[ea]!==t){ec[ea]=eg[ed]}else{throw"array index out of bounds exception"}}};cW.reverse=function(ea){return ea.reverse()};cW.mix=function(eb,ea,ec){return eb+((ea-eb)*ec>>8)};cW.peg=function(ea){return ea<0?0:ea>255?255:ea};cW.modes=function(){var ef=4278190080,ec=16711680,eb=65280,ee=255,ed=q.min,ea=q.max;function eg(el,eo,ek,et,ev,eu,em,eq,ep,ei,ej){var es=ed(((el&4278190080)>>>24)+eo,255)<<24;var eh=ek+((ep-ek)*eo>>8);eh=(eh<0?0:eh>255?255:eh)<<16;var en=et+((ei-et)*eo>>8);en=(en<0?0:en>255?255:en)<<8;var er=ev+((ej-ev)*eo>>8);er=er<0?0:er>255?255:er;return es|eh|en|er}return{replace:function(ei,eh){return eh},blend:function(ej,ei){var el=(ei&ef)>>>24,eh=ej&ec,en=ej&eb,ep=ej&ee,eo=ei&ec,ek=ei&eb,em=ei&ee;return ed(((ej&ef)>>>24)+el,255)<<24|eh+((eo-eh)*el>>8)&ec|en+((ek-en)*el>>8)&eb|ep+((em-ep)*el>>8)&ee},add:function(ei,eh){var ej=(eh&ef)>>>24;return ed(((ei&ef)>>>24)+ej,255)<<24|ed((ei&ec)+((eh&ec)>>8)*ej,ec)&ec|ed((ei&eb)+((eh&eb)>>8)*ej,eb)&eb|ed((ei&ee)+((eh&ee)*ej>>8),ee)},subtract:function(ei,eh){var ej=(eh&ef)>>>24;return ed(((ei&ef)>>>24)+ej,255)<<24|ea((ei&ec)-((eh&ec)>>8)*ej,eb)&ec|ea((ei&eb)-((eh&eb)>>8)*ej,ee)&eb|ea((ei&ee)-((eh&ee)*ej>>8),0)},lightest:function(ei,eh){var ej=(eh&ef)>>>24;return ed(((ei&ef)>>>24)+ej,255)<<24|ea(ei&ec,((eh&ec)>>8)*ej)&ec|ea(ei&eb,((eh&eb)>>8)*ej)&eb|ea(ei&ee,(eh&ee)*ej>>8)},darkest:function(ej,ei){var el=(ei&ef)>>>24,eh=ej&ec,en=ej&eb,ep=ej&ee,eo=ed(ej&ec,((ei&ec)>>8)*el),ek=ed(ej&eb,((ei&eb)>>8)*el),em=ed(ej&ee,(ei&ee)*el>>8);return ed(((ej&ef)>>>24)+el,255)<<24|eh+((eo-eh)*el>>8)&ec|en+((ek-en)*el>>8)&eb|ep+((em-ep)*el>>8)&ee},difference:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=ej>er?ej-er:er-ej,eh=eq>em?eq-em:em-eq,ei=es>ep?es-ep:ep-es;return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},exclusion:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=ej+er-(ej*er>>7),eh=eq+em-(eq*em>>7),ei=es+ep-(es*ep>>7);return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},multiply:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=ej*er>>8,eh=eq*em>>8,ei=es*ep>>8;return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},screen:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=255-((255-ej)*(255-er)>>8),eh=255-((255-eq)*(255-em)>>8),ei=255-((255-es)*(255-ep)>>8);return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},hard_light:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=er<128?ej*er>>7:255-((255-ej)*(255-er)>>7),eh=em<128?eq*em>>7:255-((255-eq)*(255-em)>>7),ei=ep<128?es*ep>>7:255-((255-es)*(255-ep)>>7);return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},soft_light:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=(ej*er>>7)+(ej*ej>>8)-(ej*ej*er>>15),eh=(eq*em>>7)+(eq*eq>>8)-(eq*eq*em>>15),ei=(es*ep>>7)+(es*es>>8)-(es*es*ep>>15);return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},overlay:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee,eo=ej<128?ej*er>>7:255-((255-ej)*(255-er)>>7),eh=eq<128?eq*em>>7:255-((255-eq)*(255-em)>>7),ei=es<128?es*ep>>7:255-((255-es)*(255-ep)>>7);return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},dodge:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee;var eo=255;if(er!==255){eo=(ej<<8)/(255-er);eo=eo<0?0:eo>255?255:eo}var eh=255;if(em!==255){eh=(eq<<8)/(255-em);eh=eh<0?0:eh>255?255:eh}var ei=255;if(ep!==255){ei=(es<<8)/(255-ep);ei=ei<0?0:ei>255?255:ei}return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)},burn:function(el,ek){var en=(ek&ef)>>>24,ej=(el&ec)>>16,eq=(el&eb)>>8,es=el&ee,er=(ek&ec)>>16,em=(ek&eb)>>8,ep=ek&ee;var eo=0;if(er!==0){eo=(255-ej<<8)/er;eo=255-(eo<0?0:eo>255?255:eo)}var eh=0;if(em!==0){eh=(255-eq<<8)/em;eh=255-(eh<0?0:eh>255?255:eh)}var ei=0;if(ep!==0){ei=(255-es<<8)/ep;ei=255-(ei<0?0:ei>255?255:ei)}return eg(el,en,ej,eq,es,er,em,ep,eo,eh,ei)}}}();function dH(ef,ee,ec,eb){var ea,ed,eh,ei;if(cY===3){var eg=cW.color.toRGB(ef,ee,ec);ea=eg[0];ed=eg[1];eh=eg[2]}else{ea=q.round(255*(ef/bJ));ed=q.round(255*(ee/bI));eh=q.round(255*(ec/bG))}ei=q.round(255*(eb/bU));ea=ea<0?0:ea;ed=ed<0?0:ed;eh=eh<0?0:eh;ei=ei<0?0:ei;ea=ea>255?255:ea;ed=ed>255?255:ed;eh=eh>255?255:eh;ei=ei>255?255:ei;return ei<<24&4278190080|ea<<16&16711680|ed<<8&65280|eh&255}function dK(ea,ec){var eb;if(ea&4278190080){eb=q.round(255*(ec/bU));eb=eb>255?255:eb;eb=eb<0?0:eb;return ea-(ea&4278190080)+(eb<<24&4278190080)}if(cY===1){return dH(ea,ea,ea,ec)}if(cY===3){return dH(0,0,ea/bJ*bG,ec)}}function dM(ea){if(ea<=bJ&&ea>=0){if(cY===1){return dH(ea,ea,ea,bU)}if(cY===3){return dH(0,0,ea/bJ*bG,bU)}}if(ea){if(ea>2147483647){ea-=4294967296}return ea}}cW.color=function(ea,ed,ec,eb){if(ea!==t&&ed!==t&&ec!==t&&eb!==t){return dH(ea,ed,ec,eb)}if(ea!==t&&ed!==t&&ec!==t){return dH(ea,ed,ec,bU)}if(ea!==t&&ed!==t){return dK(ea,ed)}if(typeof ea==="number"){return dM(ea)}return dH(bJ,bI,bG,bU)};cW.color.toString=function(ea){return"rgba("+((ea>>16)&255)+","+((ea>>8)&255)+","+(ea&255)+","+((ea>>24)&255)/255+")"};cW.color.toInt=function(ed,ec,ea,eb){return eb<<24&4278190080|ed<<16&16711680|ec<<8&65280|ea&255};cW.color.toArray=function(ea){return[(ea>>16)&255,(ea>>8)&255,ea&255,(ea>>24)&255]};cW.color.toGLArray=function(ea){return[((ea&16711680)>>>16)/255,((ea>>8)&255)/255,(ea&255)/255,((ea>>24)&255)/255]};cW.color.toRGB=function(ec,ei,ef){ec=ec>bJ?bJ:ec;ei=ei>bI?bI:ei;ef=ef>bG?bG:ef;ec=ec/bJ*360;ei=ei/bI*100;ef=ef/bG*100;var eh=q.round(ef/100*255);if(ei===0){return[eh,eh,eh]}var ed=ec%360;var ee=ed%60;var eb=q.round(ef*(100-ei)/10000*255);var ea=q.round(ef*(6000-ei*ee)/600000*255);var eg=q.round(ef*(6000-ei*(60-ee))/600000*255);switch(q.floor(ed/60)){case 0:return[eh,eg,eb];case 1:return[ea,eh,eb];case 2:return[eb,eh,eg];case 3:return[eb,ea,eh];case 4:return[eg,eb,eh];case 5:return[eh,eb,ea]}};function aS(eh){var eg,ef,eb;eg=((eh>>16)&255)/255;ef=((eh>>8)&255)/255;eb=(eh&255)/255;var ea=cW.max(cW.max(eg,ef),eb),ed=cW.min(cW.min(eg,ef),eb),ec,ee;if(ed===ea){return[0,0,ea*bG]}ee=(ea-ed)/ea;if(eg===ea){ec=(ef-eb)/(ea-ed)}else{if(ef===ea){ec=2+(eb-eg)/(ea-ed)}else{ec=4+(eg-ef)/(ea-ed)}}ec/=6;if(ec<0){ec+=1}else{if(ec>1){ec-=1}}return[ec*bJ,ee*bI,ea*bG]}cW.brightness=function(ea){return aS(ea)[2]};cW.saturation=function(ea){return aS(ea)[1]};cW.hue=function(ea){return aS(ea)[0]};cW.red=function(ea){return((ea>>16)&255)/255*bJ};cW.green=function(ea){return((ea&65280)>>>8)/255*bI};cW.blue=function(ea){return(ea&255)/255*bG};cW.alpha=function(ea){return((ea>>24)&255)/255*bU};cW.lerpColor=function(em,el,ef){var ek,eq,er,es,eo,ea,eg,eu,en,ev,ee,et;var ei,eh,eb,ep,ej;var ed=cW.color(em);var ec=cW.color(el);if(cY===3){ei=aS(ed);eu=((ed>>24)&255)/bU;eh=aS(ec);et=((ec&4278190080)>>>24)/bU;ep=cW.lerp(ei[0],eh[0],ef);ej=cW.lerp(ei[1],eh[1],ef);er=cW.lerp(ei[2],eh[2],ef);eb=cW.color.toRGB(ep,ej,er);es=cW.lerp(eu,et,ef)*bU;return es<<24&4278190080|(eb[0]&255)<<16|(eb[1]&255)<<8|eb[2]&255}eo=(ed>>16)&255;ea=(ed>>8)&255;eg=ed&255;eu=((ed>>24)&255)/bU;en=(ec&16711680)>>>16;ev=(ec>>8)&255;ee=ec&255;et=((ec>>24)&255)/bU;ek=cW.lerp(eo,en,ef)|0;eq=cW.lerp(ea,ev,ef)|0;er=cW.lerp(eg,ee,ef)|0;es=cW.lerp(eu,et,ef)*bU;return es<<24&4278190080|ek<<16&16711680|eq<<8&65280|er&255};cW.colorMode=function(){cY=arguments[0];if(arguments.length>1){bJ=arguments[1];bI=arguments[2]||arguments[1];bG=arguments[3]||arguments[1];bU=arguments[4]||arguments[1]}};cW.blendColor=function(eb,ea,ec){if(ec===0){return cW.modes.replace(eb,ea)}else{if(ec===1){return cW.modes.blend(eb,ea)}else{if(ec===2){return cW.modes.add(eb,ea)}else{if(ec===4){return cW.modes.subtract(eb,ea)}else{if(ec===8){return cW.modes.lightest(eb,ea)}else{if(ec===16){return cW.modes.darkest(eb,ea)}else{if(ec===32){return cW.modes.difference(eb,ea)}else{if(ec===64){return cW.modes.exclusion(eb,ea)}else{if(ec===128){return cW.modes.multiply(eb,ea)}else{if(ec===256){return cW.modes.screen(eb,ea)}else{if(ec===1024){return cW.modes.hard_light(eb,ea)}else{if(ec===2048){return cW.modes.soft_light(eb,ea)}else{if(ec===512){return cW.modes.overlay(eb,ea)}else{if(ec===4096){return cW.modes.dodge(eb,ea)}else{if(ec===8192){return cW.modes.burn(eb,ea)}}}}}}}}}}}}}}}};function aD(){d8.save()}function cP(){d8.restore();b3=true;aq=true}cW.printMatrix=function(){dJ.print()};bR.prototype.translate=function(ea,eb){dJ.translate(ea,eb);aT.invTranslate(ea,eb);d8.translate(ea,eb)};bB.prototype.translate=function(ea,ec,eb){dJ.translate(ea,ec,eb);aT.invTranslate(ea,ec,eb)};bR.prototype.scale=function(ea,eb){dJ.scale(ea,eb);aT.invScale(ea,eb);d8.scale(ea,eb||ea)};bB.prototype.scale=function(ea,ec,eb){dJ.scale(ea,ec,eb);aT.invScale(ea,ec,eb)};bR.prototype.transform=function(eb){var ea=eb.array();d8.transform(ea[0],ea[3],ea[1],ea[4],ea[2],ea[5])};bB.prototype.transformm=function(ea){throw"p.transform is currently not supported in 3D mode"};bR.prototype.pushMatrix=function(){am.load(dJ);da.load(aT);aD()};bB.prototype.pushMatrix=function(){am.load(dJ);da.load(aT)};bR.prototype.popMatrix=function(){dJ.set(am.pop());aT.set(da.pop());cP()};bB.prototype.popMatrix=function(){dJ.set(am.pop());aT.set(da.pop())};bR.prototype.resetMatrix=function(){dJ.reset();aT.reset();d8.setTransform(1,0,0,1,0,0)};bB.prototype.resetMatrix=function(){dJ.reset();aT.reset()};ds.prototype.applyMatrix=function(){var ea=arguments;dJ.apply(ea[0],ea[1],ea[2],ea[3],ea[4],ea[5],ea[6],ea[7],ea[8],ea[9],ea[10],ea[11],ea[12],ea[13],ea[14],ea[15]);aT.invApply(ea[0],ea[1],ea[2],ea[3],ea[4],ea[5],ea[6],ea[7],ea[8],ea[9],ea[10],ea[11],ea[12],ea[13],ea[14],ea[15])};bR.prototype.applyMatrix=function(){var ea=arguments;for(var eb=ea.length;eb<16;eb++){ea[eb]=0}ea[10]=ea[15]=1;ds.prototype.applyMatrix.apply(this,ea)};cW.rotateX=function(ea){dJ.rotateX(ea);aT.invRotateX(ea)};bR.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."};bB.prototype.rotateZ=function(ea){dJ.rotateZ(ea);aT.invRotateZ(ea)};cW.rotateY=function(ea){dJ.rotateY(ea);aT.invRotateY(ea)};bR.prototype.rotate=function(ea){dJ.rotateZ(ea);aT.invRotateZ(ea);d8.rotate(ea)};bB.prototype.rotate=function(ea){cW.rotateZ(ea)};bR.prototype.shearX=function(ea){dJ.shearX(ea);d8.transform(1,0,ea,1,0,0)};bB.prototype.shearX=function(ea){dJ.shearX(ea)};bR.prototype.shearY=function(ea){dJ.shearY(ea);d8.transform(1,ea,0,1,0,0)};bB.prototype.shearY=function(ea){dJ.shearY(ea)};cW.pushStyle=function(){aD();cW.pushMatrix();var ea={doFill:aH,currentFillColor:a1,doStroke:ce,currentStrokeColor:cv,curTint:bf,curRectMode:bK,curColorMode:cY,colorModeX:bJ,colorModeZ:bG,colorModeY:bI,colorModeA:bU,curTextFont:W,horizontalTextAlignment:N,verticalTextAlignment:c1,textMode:cI,curFontName:Y,curTextSize:d0,curTextAscent:a3,curTextDescent:dA,curTextLeading:d7};bm.push(ea)};cW.popStyle=function(){var ea=bm.pop();if(ea){cP();cW.popMatrix();aH=ea.doFill;a1=ea.currentFillColor;ce=ea.doStroke;cv=ea.currentStrokeColor;bf=ea.curTint;bK=ea.curRectMode;cY=ea.curColorMode;bJ=ea.colorModeX;bG=ea.colorModeZ;bI=ea.colorModeY;bU=ea.colorModeA;W=ea.curTextFont;Y=ea.curFontName;d0=ea.curTextSize;N=ea.horizontalTextAlignment;c1=ea.verticalTextAlignment;cI=ea.textMode;a3=ea.curTextAscent;dA=ea.curTextDescent;d7=ea.curTextLeading}else{throw"Too many popStyle() without enough pushStyle()"}};cW.year=function(){return(new Date).getFullYear()};cW.month=function(){return(new Date).getMonth()+1};cW.day=function(){return(new Date).getDate()};cW.hour=function(){return(new Date).getHours()};cW.minute=function(){return(new Date).getMinutes()};cW.second=function(){return(new Date).getSeconds()};cW.millis=function(){return Date.now()-dq};function ct(){var ea=(Date.now()-dt)/1000;P++;var eb=P/ea;if(ea>0.5){dt=Date.now();P=0;cW.__frameRate=eb}cW.frameCount++}bR.prototype.redraw=function(){ct();d8.lineWidth=dW;var ea=cW.pmouseX,eb=cW.pmouseY;cW.pmouseX=dN;cW.pmouseY=d5;aD();cW.draw();cP();dN=cW.mouseX;d5=cW.mouseY;cW.pmouseX=ea;cW.pmouseY=eb};bB.prototype.redraw=function(){ct();var ea=cW.pmouseX,eb=cW.pmouseY;cW.pmouseX=dN;cW.pmouseY=d5;d8.clear(d8.DEPTH_BUFFER_BIT);dC={attributes:{},locations:{}};cW.noLights();cW.lightFalloff(1,0,0);cW.shininess(1);cW.ambient(255,255,255);cW.specular(0,0,0);cW.emissive(0,0,0);cW.camera();cW.draw();dN=cW.mouseX;d5=cW.mouseY;cW.pmouseX=ea;cW.pmouseY=eb};cW.noLoop=function(){aC=false;ax=false;clearInterval(b4);cQ.onPause()};cW.loop=function(){if(ax){return}dt=Date.now();P=0;b4=D.setInterval(function(){try{cQ.onFrameStart();cW.redraw();cQ.onFrameEnd()}catch(ea){D.clearInterval(b4);throw ea}},az);aC=true;ax=true;cQ.onLoop()};cW.frameRate=function(ea){dU=ea;az=1000/dU;if(aC){cW.noLoop();cW.loop()}};var au=[];function bO(ec,eb,ea){if(ec.addEventListener){ec.addEventListener(eb,ea,false)}else{ec.attachEvent("on"+eb,ea)}au.push({elem:ec,type:eb,fn:ea})}function de(ea){var ed=ea.elem,ec=ea.type,eb=ea.fn;if(ed.removeEventListener){ed.removeEventListener(ec,eb,false)}else{if(ed.detachEvent){ed.detachEvent("on"+ec,eb)}}}cW.exit=function(){D.clearInterval(b4);L(cW.externals.canvas.id);delete ae.onmousedown;for(var eb in F.lib){if(F.lib.hasOwnProperty(eb)){if(F.lib[eb].hasOwnProperty("detach")){F.lib[eb].detach(cW)}}}var ea=au.length;while(ea--){de(au[ea])}cQ.onExit()};cW.cursor=function(){if(arguments.length>1||arguments.length===1&&arguments[0] instanceof cW.PImage){var ed=arguments[0],ea,ef;if(arguments.length>=3){ea=arguments[1];ef=arguments[2];if(ea<0||ef<0||ef>=ed.height||ea>=ed.width){throw"x and y must be non-negative and less than the dimensions of the image"}}else{ea=ed.width>>>1;ef=ed.height>>>1}var eb=ed.toDataURL();var ec='url("'+eb+'") '+ea+" "+ef+", default";Z=ae.style.cursor=ec}else{if(arguments.length===1){var ee=arguments[0];Z=ae.style.cursor=ee}else{Z=ae.style.cursor=ck}}};cW.noCursor=function(){Z=ae.style.cursor=B.NOCURSOR};cW.link=function(ea,eb){if(eb!==t){D.open(ea,eb)}else{D.location=ea}};cW.beginDraw=G;cW.endDraw=G;bR.prototype.toImageData=function(ea,ed,eb,ec){ea=ea!==t?ea:0;ed=ed!==t?ed:0;eb=eb!==t?eb:cW.width;ec=ec!==t?ec:cW.height;return d8.getImageData(ea,ed,eb,ec)};bB.prototype.toImageData=function(ei,eh,ej,ee){ei=ei!==t?ei:0;eh=eh!==t?eh:0;ej=ej!==t?ej:cW.width;ee=ee!==t?ee:cW.height;var eg=d.createElement("canvas"),ek=eg.getContext("2d"),ed=ek.createImageData(ej,ee),eb=new b(ej*ee*4);d8.readPixels(ei,eh,ej,ee,d8.RGBA,d8.UNSIGNED_BYTE,eb);for(var ec=0,ef=eb.length,ea=ed.data;ec<ef;ec++){ea[ec]=eb[(ee-1-q.floor(ec/4/ej))*ej*4+ec%(ej*4)]}return ed};cW.status=function(ea){D.status=ea};cW.binary=function(eb,ec){var ed;if(ec>0){ed=ec}else{if(eb instanceof bP){ed=16;eb|=0}else{ed=32;while(ed>1&&!(eb>>>ed-1&1)){ed--}}}var ea="";while(ed>0){ea+=eb>>>--ed&1?"1":"0"}return ea};cW.unbinary=function(eb){var ed=eb.length-1,ec=1,ea=0;while(ed>=0){var ee=eb[ed--];if(ee!=="0"&&ee!=="1"){throw"the value passed into unbinary was not an 8 bit binary number"}if(ee==="1"){ea+=ec}ec<<=1}return ea};function cX(em,ek,ee,ep,eg,en){var ec=em<0?ee:ek;var eb=eg===0;var el=eg===t||eg<0?0:eg;var ej=q.abs(em);if(eb){el=1;ej*=10;while(q.abs(q.round(ej)-ej)>0.000001&&el<7){++el;ej*=10}}else{if(el!==0){ej*=q.pow(10,el)}}var ed,ei=ej*2;if(q.floor(ej)===ej){ed=ej}else{if(q.floor(ei)===ei){var ea=q.floor(ej);ed=ea+ea%2}else{ed=q.round(ej)}}var ef="";var eo=ep+el;while(eo>0||ed>0){eo--;ef=""+ed%10+ef;ed=q.floor(ed/10)}if(en!==t){var eh=ef.length-3-el;while(eh>0){ef=ef.substring(0,eh)+en+ef.substring(eh);eh-=3}}if(el>0){return ec+ef.substring(0,ef.length-el)+"."+ef.substring(ef.length-el,ef.length)}return ec+ef}function ao(eg,ef,ea,ei,eb,eh){if(eg instanceof Array){var ed=[];for(var ec=0,ee=eg.length;ec<ee;ec++){ed.push(cX(eg[ec],ef,ea,ei,eb,eh))}return ed}return cX(eg,ef,ea,ei,eb,eh)}cW.nf=function(ec,ea,eb){return ao(ec,"","-",ea,eb)};cW.nfs=function(ec,ea,eb){return ao(ec," ","-",ea,eb)};cW.nfp=function(ec,ea,eb){return ao(ec,"+","-",ea,eb)};cW.nfc=function(ec,ea,eb){return ao(ec,"","-",ea,eb,",")};var aM=function(ec,eb){eb=eb===t||eb===null?eb=8:eb;if(ec<0){ec=4294967295+ec+1}var ea=Number(ec).toString(16).toUpperCase();while(ea.length<eb){ea="0"+ea}if(ea.length>=eb){ea=ea.substring(ea.length-eb,ea.length)}return ea};cW.hex=function(eb,ea){if(arguments.length===1){if(eb instanceof bP){ea=4}else{ea=8}}return aM(eb,ea)};function dF(ea){var eb=parseInt("0x"+ea,16);if(eb>2147483647){eb-=4294967296}return eb}cW.unhex=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(dF(ec[eb]))}return ea}return dF(ec)};cW.loadStrings=function(eb){if(localStorage[eb]){return localStorage[eb].split("\n")}var ea=w(eb);if(typeof ea!=="string"||ea===""){return[]}ea=ea.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return ea.split("\n")};cW.saveStrings=function(eb,ea){localStorage[eb]=ea.join("\n")};cW.loadBytes=function(ec){var eb=w(ec);var ea=[];for(var ed=0;ed<eb.length;ed++){ea.push(eb.charCodeAt(ed))}return ea};function bc(ea){return Array.prototype.slice.call(ea,1)}cW.matchAll=function(eb,ea){var ed=[],ec;var ee=new RegExp(ea,"g");while((ec=ee.exec(eb))!==null){ed.push(ec);if(ec[0].length===0){++ee.lastIndex}}return ed.length>0?ed:null};cW.__contains=function(eb,ea){if(typeof eb!=="string"){return eb.contains.apply(eb,bc(arguments))}return eb!==null&&ea!==null&&typeof ea==="string"&&eb.indexOf(ea)>-1};cW.__replaceAll=function(ea,ec,eb){if(typeof ea!=="string"){return ea.replaceAll.apply(ea,bc(arguments))}return ea.replace(new RegExp(ec,"g"),eb)};cW.__replaceFirst=function(ea,ec,eb){if(typeof ea!=="string"){return ea.replaceFirst.apply(ea,bc(arguments))}return ea.replace(new RegExp(ec,""),eb)};cW.__replace=function(ed,ef,ee){if(typeof ed!=="string"){return ed.replace.apply(ed,bc(arguments))}if(ef instanceof RegExp){return ed.replace(ef,ee)}if(typeof ef!=="string"){ef=ef.toString()}if(ef===""){return ed}var ec=ed.indexOf(ef);if(ec<0){return ed}var eb=0,ea="";do{ea+=ed.substring(eb,ec)+ee;eb=ec+ef.length}while((ec=ed.indexOf(ef,eb))>=0);return ea+ed.substring(eb)};cW.__equals=function(eb,ea){if(eb.equals instanceof Function){return eb.equals.apply(eb,bc(arguments))}return eb.valueOf()===ea.valueOf()};cW.__equalsIgnoreCase=function(eb,ea){if(typeof eb!=="string"){return eb.equalsIgnoreCase.apply(eb,bc(arguments))}return eb.toLowerCase()===ea.toLowerCase()};cW.__toCharArray=function(ec){if(typeof ec!=="string"){return ec.toCharArray.apply(ec,bc(arguments))}var ed=[];for(var eb=0,ea=ec.length;eb<ea;++eb){ed[eb]=new bP(ec.charAt(eb))}return ed};cW.__split=function(ed,ee,eb){if(typeof ed!=="string"){return ed.split.apply(ed,bc(arguments))}var eg=new RegExp(ee);if(eb===t||eb<1){return ed.split(eg)}var ea=[],ef=ed,eh;while((eh=ef.search(eg))!==-1&&ea.length<eb-1){var ec=eg.exec(ef).toString();ea.push(ef.substring(0,eh));ef=ef.substring(eh+ec.length)}if(eh!==-1||ef!==""){ea.push(ef)}return ea};cW.__codePointAt=function(ed,eb){var ee=ed.charCodeAt(eb),ec,ea;if(55296<=ee&&ee<=56319){ec=ee;ea=ed.charCodeAt(eb+1);return(ec-55296)*1024+(ea-56320)+65536}return ee};cW.match=function(eb,ea){return eb.match(ea)};cW.__matches=function(eb,ea){return(new RegExp(ea)).test(eb)};cW.__startsWith=function(ea,ec,eb){if(typeof ea!=="string"){return ea.startsWith.apply(ea,bc(arguments))}eb=eb||0;if(eb<0||eb>ea.length){return false}return ec===""||ec===ea?true:ea.indexOf(ec)===eb};cW.__endsWith=function(eb,ec){if(typeof eb!=="string"){return eb.endsWith.apply(eb,bc(arguments))}var ea=ec?ec.length:0;return ec===""||ec===eb?true:eb.indexOf(ec)===eb.length-ea};cW.__hashCode=function(ea){if(ea.hashCode instanceof Function){return ea.hashCode.apply(ea,bc(arguments))}return h(ea)};cW.__printStackTrace=function(ea){cW.println("Exception: "+ea.toString())};var d9=[];cW.println=function(ea){var eb=d9.length;if(eb){F.logger.log(d9.join(""));d9.length=0}if(arguments.length===0&&eb===0){F.logger.log("")}else{if(arguments.length!==0){F.logger.log(ea)}}};cW.print=function(ea){d9.push(ea)};cW.str=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(ec[eb].toString()+"")}return ea}return ec.toString()+""};cW.trim=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(ec[eb].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))}return ea}return ec.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")};function aR(ea){if(typeof ea==="number"){return ea!==0}if(typeof ea==="boolean"){return ea}if(typeof ea==="string"){return ea.toLowerCase()==="true"}if(ea instanceof bP){return ea.code===49||ea.code===84||ea.code===116}}cW.parseBoolean=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(aR(ec[eb]))}return ea}return aR(ec)};cW.parseByte=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(0-(ec[eb]&128)|ec[eb]&127)}return ea}return 0-(ec&128)|ec&127};cW.parseChar=function(ec){if(typeof ec==="number"){return new bP(String.fromCharCode(ec&65535))}if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(new bP(String.fromCharCode(ec[eb]&65535)))}return ea}throw"char() may receive only one argument of type int, byte, int[], or byte[]."};function cO(ea){if(typeof ea==="number"){return ea}if(typeof ea==="boolean"){return ea?1:0}if(typeof ea==="string"){return parseFloat(ea)}if(ea instanceof bP){return ea.code}}cW.parseFloat=function(ec){if(ec instanceof Array){var ea=[];for(var eb=0;eb<ec.length;eb++){ea.push(cO(ec[eb]))}return ea}return cO(ec)};function al(ec,ea){if(typeof ec==="number"){return ec&4294967295}if(typeof ec==="boolean"){return ec?1:0}if(typeof ec==="string"){var eb=parseInt(ec,ea||10);return eb&4294967295}if(ec instanceof bP){return ec.code}}cW.parseInt=function(ed,ec){if(ed instanceof Array){var ea=[];for(var eb=0;eb<ed.length;eb++){if(typeof ed[eb]==="string"&&!/^\s*[+\-]?\d+\s*$/.test(ed[eb])){ea.push(0)}else{ea.push(al(ed[eb],ec))}}return ea}return al(ed,ec)};cW.__int_cast=function(ea){return 0|ea};cW.__instanceof=function(ec,eb){if(typeof eb!=="function"){throw"Function is expected as type argument for instanceof operator"}if(typeof ec==="string"){return eb===Object||eb===String}if(ec instanceof eb){return true}if(typeof ec!=="object"||ec===null){return false}var ee=ec.constructor;if(eb.$isInterface){var ed=[];while(ee){if(ee.$interfaces){ed=ed.concat(ee.$interfaces)}ee=ee.$base}while(ed.length>0){var ea=ed.shift();if(ea===eb){return true}if(ea.$interfaces){ed=ed.concat(ea.$interfaces)}}return false}while(ee.hasOwnProperty("$base")){ee=ee.$base;if(ee===eb){return true}}return false};cW.abs=q.abs;cW.ceil=q.ceil;cW.constrain=function(eb,ec,ea){return eb>ea?ea:eb<ec?ec:eb};cW.dist=function(){var ec,eb,ea;if(arguments.length===4){ec=arguments[0]-arguments[2];eb=arguments[1]-arguments[3];return q.sqrt(ec*ec+eb*eb)}if(arguments.length===6){ec=arguments[0]-arguments[3];eb=arguments[1]-arguments[4];ea=arguments[2]-arguments[5];return q.sqrt(ec*ec+eb*eb+ea*ea)}};cW.exp=q.exp;cW.floor=q.floor;cW.lerp=function(eb,ea,ec){return(ea-eb)*ec+eb};cW.log=q.log;cW.mag=function(eb,ea,ec){if(ec){return q.sqrt(eb*eb+ea*ea+ec*ec)}return q.sqrt(eb*eb+ea*ea)};cW.map=function(ed,eb,ec,ea,ee){return ea+(ee-ea)*((ed-eb)/(ec-eb))};cW.max=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[1]:arguments[0]}var eb=arguments.length===1?arguments[0]:arguments;if(!("length" in eb&&eb.length>0)){throw"Non-empty array is expected"}var ea=eb[0],ed=eb.length;for(var ec=1;ec<ed;++ec){if(ea<eb[ec]){ea=eb[ec]}}return ea};cW.min=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[0]:arguments[1]}var ea=arguments.length===1?arguments[0]:arguments;if(!("length" in ea&&ea.length>0)){throw"Non-empty array is expected"}var ec=ea[0],ed=ea.length;for(var eb=1;eb<ed;++eb){if(ec>ea[eb]){ec=ea[eb]}}return ec};cW.norm=function(eb,ea,ec){return(eb-ea)/(ec-ea)};cW.pow=q.pow;cW.round=q.round;cW.sq=function(ea){return ea*ea};cW.sqrt=q.sqrt;cW.acos=q.acos;cW.asin=q.asin;cW.atan=q.atan;cW.atan2=q.atan2;cW.cos=q.cos;cW.degrees=function(ea){return ea*180/q.PI};cW.radians=function(ea){return ea/180*q.PI};cW.sin=q.sin;cW.tan=q.tan;var bY=q.random;cW.random=function(){if(arguments.length===0){return bY()}if(arguments.length===1){return bY()*arguments[0]}var eb=arguments[0],ea=arguments[1];return bY()*(ea-eb)+eb};function co(ec,eb){var ee=ec||362436069,ea=eb||521288629;var ed=function(){ee=36969*(ee&65535)+(ee>>>16)&4294967295;ea=18000*(ea&65535)+(ea>>>16)&4294967295;return((ee&65535)<<16|ea&65535)&4294967295};this.nextDouble=function(){var ef=ed()/4294967296;return ef<0?1+ef:ef};this.nextInt=ed}co.createRandomized=function(){var ea=new Date;return new co(ea/60000&4294967295,ea&4294967295)};cW.randomSeed=function(ea){bY=(new co(ea)).nextDouble};cW.Random=function(ea){var ed=false,eb,ec;this.nextGaussian=function(){if(ed){ed=false;return eb}var eh,ef,ee;do{eh=2*ec()-1;ef=2*ec()-1;ee=eh*eh+ef*ef}while(ee>=1||ee===0);var eg=q.sqrt(-2*q.log(ee)/ee);eb=ef*eg;ed=true;return eh*eg};ec=ea===t?q.random:(new co(ea)).nextDouble};function dz(eh){var eb=eh!==t?new co(eh):co.createRandomized();var eg,ee;var ed=new b(512);for(eg=0;eg<256;++eg){ed[eg]=eg}for(eg=0;eg<256;++eg){var ej=ed[ee=eb.nextInt()&255];ed[ee]=ed[eg];ed[eg]=ej}for(eg=0;eg<256;++eg){ed[eg+256]=ed[eg]}function ea(en,ek,eq,ep){var eo=en&15;var em=eo<8?ek:eq,el=eo<4?eq:eo===12||eo===14?ek:ep;return((eo&1)===0?em:-em)+((eo&2)===0?el:-el)}function ef(em,ek,en){var el=(em&1)===0?ek:en;return(em&2)===0?-el:el}function ei(el,ek){return(el&1)===0?-ek:ek}function ec(em,el,ek){return el+em*(ek-el)}this.noise3d=function(ew,ev,eu){var en=q.floor(ew)&255,el=q.floor(ev)&255,ek=q.floor(eu)&255;ew-=q.floor(ew);ev-=q.floor(ev);eu-=q.floor(eu);var er=(3-2*ew)*ew*ew,eq=(3-2*ev)*ev*ev,ep=(3-2*eu)*eu*eu;var ey=ed[en]+el,et=ed[ey]+ek,es=ed[ey+1]+ek,ex=ed[en+1]+el,eo=ed[ex]+ek,em=ed[ex+1]+ek;return ec(ep,ec(eq,ec(er,ea(ed[et],ew,ev,eu),ea(ed[eo],ew-1,ev,eu)),ec(er,ea(ed[es],ew,ev-1,eu),ea(ed[em],ew-1,ev-1,eu))),ec(eq,ec(er,ea(ed[et+1],ew,ev,eu-1),ea(ed[eo+1],ew-1,ev,eu-1)),ec(er,ea(ed[es+1],ew,ev-1,eu-1),ea(ed[em+1],ew-1,ev-1,eu-1))))};this.noise2d=function(ek,er){var eq=q.floor(ek)&255,eo=q.floor(er)&255;ek-=q.floor(ek);er-=q.floor(er);var em=(3-2*ek)*ek*ek,el=(3-2*er)*er*er;var ep=ed[eq]+eo,en=ed[eq+1]+eo;return ec(el,ec(em,ef(ed[ep],ek,er),ef(ed[en],ek-1,er)),ec(em,ef(ed[ep+1],ek,er-1),ef(ed[en+1],ek-1,er-1)))};this.noise1d=function(ek){var em=q.floor(ek)&255;ek-=q.floor(ek);var el=(3-2*ek)*ek*ek;return ec(el,ei(ed[em],ek),ei(ed[em+1],ek-1))}}var bW={generator:t,octaves:4,fallout:0.5,seed:t};cW.noise=function(ea,eh,eg){if(bW.generator===t){bW.generator=new dz(bW.seed)}var ef=bW.generator;var ee=1,eb=1,ed=0;for(var ec=0;ec<bW.octaves;++ec){ee*=bW.fallout;switch(arguments.length){case 1:ed+=ee*(1+ef.noise1d(eb*ea))/2;break;case 2:ed+=ee*(1+ef.noise2d(eb*ea,eb*eh))/2;break;case 3:ed+=ee*(1+ef.noise3d(eb*ea,eb*eh,eb*eg))/2;break}eb*=2}return ed};cW.noiseDetail=function(eb,ea){bW.octaves=eb;if(ea!==t){bW.fallout=ea}};cW.noiseSeed=function(ea){bW.seed=ea;bW.generator=t};ds.prototype.size=function(eb,ee,ed){if(ce){cW.stroke(0)}if(aH){cW.fill(255)}var ec={fillStyle:d8.fillStyle,strokeStyle:d8.strokeStyle,lineCap:d8.lineCap,lineJoin:d8.lineJoin};if(ae.style.length>0){ae.style.removeProperty("width");ae.style.removeProperty("height")}ae.width=cW.width=eb||100;ae.height=cW.height=ee||100;for(var ef in ec){if(ec.hasOwnProperty(ef)){d8[ef]=ec[ef]}}cW.textFont(W);cW.background();bZ=q.max(1000,eb*ee*0.05);cW.externals.context=d8;for(var ea=0;ea<720;ea++){ah[ea]=cW.sin(ea*(q.PI/180)*0.5);bl[ea]=cW.cos(ea*(q.PI/180)*0.5)}};bR.prototype.size=function(ea,ec,eb){if(d8===t){d8=ae.getContext("2d");am=new V;da=new V;dJ=new aX;aT=new aX}ds.prototype.size.apply(this,arguments)};bB.prototype.size=function(){var eb=false;return function ea(ed,ef,ee){if(eb){throw"Multiple calls to size() for 3D renders are not allowed."}eb=true;function eg(ei){var el=["experimental-webgl","webgl","webkit-3d"],ek;for(var ej=0,eh=el.length;ej<eh;ej++){ek=ei.getContext(el[ej],{antialias:false,preserveDrawingBuffer:true});if(ek){break}}return ek}try{ae.width=cW.width=ed||100;ae.height=cW.height=ef||100;d8=eg(ae);c7=d8.createTexture();bS=d8.createTexture()}catch(ec){F.debug(ec)}if(!d8){throw"WebGL context is not supported on this browser."}d8.viewport(0,0,ae.width,ae.height);d8.enable(d8.DEPTH_TEST);d8.enable(d8.BLEND);d8.blendFunc(d8.SRC_ALPHA,d8.ONE_MINUS_SRC_ALPHA);dQ=bF(d8,dE,aW);bT=bF(d8,aO,bQ);cW.strokeWeight(1);dx=bF(d8,dn,aF);d8.useProgram(dx);dZ("usingTexture3d",dx,"usingTexture",dT);cW.lightFalloff(1,0,0);cW.shininess(1);cW.ambient(255,255,255);cW.specular(0,0,0);cW.emissive(0,0,0);bh=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,bh);d8.bufferData(d8.ARRAY_BUFFER,dh,d8.STATIC_DRAW);cJ=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,cJ);d8.bufferData(d8.ARRAY_BUFFER,df,d8.STATIC_DRAW);dk=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,dk);d8.bufferData(d8.ARRAY_BUFFER,bH,d8.STATIC_DRAW);aB=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,aB);d8.bufferData(d8.ARRAY_BUFFER,ak,d8.STATIC_DRAW);b2=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,b2);d8.bufferData(d8.ARRAY_BUFFER,ai,d8.STATIC_DRAW);bg=d8.createBuffer();b8=d8.createBuffer();at=d8.createBuffer();aG=d8.createBuffer();bC=d8.createBuffer();af=d8.createBuffer();aw=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,aw);d8.bufferData(d8.ARRAY_BUFFER,new e([0,0,0]),d8.STATIC_DRAW);cH=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,cH);d8.bufferData(d8.ARRAY_BUFFER,new e([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),d8.STATIC_DRAW);ac=d8.createBuffer();d8.bindBuffer(d8.ARRAY_BUFFER,ac);d8.bufferData(d8.ARRAY_BUFFER,new e([0,0,1,0,1,1,0,1]),d8.STATIC_DRAW);R=d8.createBuffer();d8.bindBuffer(d8.ELEMENT_ARRAY_BUFFER,R);d8.bufferData(d8.ELEMENT_ARRAY_BUFFER,new y([0,1,2,2,3,0]),d8.STATIC_DRAW);bV=new aP;ch=new aP;dJ=new aP;aT=new aP;db=new aP;cW.camera();cW.perspective();am=new V;da=new V;c3=new aP;aQ=new aP;aL=new aP;bz=new aP;cd=new aP;U=new aP;U.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);ds.prototype.size.apply(this,arguments)}}();bR.prototype.ambientLight=ds.prototype.a3DOnlyFunction;bB.prototype.ambientLight=function(ea,ed,ei,ej,ef,ee){if(dL===8){throw"can only create "+8+" lights"}var eg=new A(ej,ef,ee);var eh=new aP;eh.scale(1,-1,1);eh.apply(dJ.array());eh.mult(eg,eg);var eb=dH(ea,ed,ei,0);var ec=[((eb>>16)&255)/255,((eb>>8)&255)/255,(eb&255)/255];d8.useProgram(dx);d2("uLights.color.3d."+dL,dx,"uLights"+dL+".color",ec);d2("uLights.position.3d."+dL,dx,"uLights"+dL+".position",eg.array());dZ("uLights.type.3d."+dL,dx,"uLights"+dL+".type",0);dZ("uLightCount3d",dx,"uLightCount",++dL)};bR.prototype.directionalLight=ds.prototype.a3DOnlyFunction;bB.prototype.directionalLight=function(ea,eg,ei,eh,ef,ee){if(dL===8){throw"can only create "+8+" lights"}d8.useProgram(dx);var ej=new aP;ej.scale(1,-1,1);ej.apply(dJ.array());ej=ej.array();var ec=[ej[0]*eh+ej[4]*ef+ej[8]*ee,ej[1]*eh+ej[5]*ef+ej[9]*ee,ej[2]*eh+ej[6]*ef+ej[10]*ee];var eb=dH(ea,eg,ei,0);var ed=[((eb>>16)&255)/255,((eb>>8)&255)/255,(eb&255)/255];d2("uLights.color.3d."+dL,dx,"uLights"+dL+".color",ed);d2("uLights.position.3d."+dL,dx,"uLights"+dL+".position",ec);dZ("uLights.type.3d."+dL,dx,"uLights"+dL+".type",1);dZ("uLightCount3d",dx,"uLightCount",++dL)};bR.prototype.lightFalloff=ds.prototype.a3DOnlyFunction;bB.prototype.lightFalloff=function(eb,ea,ec){d8.useProgram(dx);d2("uFalloff3d",dx,"uFalloff",[eb,ea,ec])};bR.prototype.lightSpecular=ds.prototype.a3DOnlyFunction;bB.prototype.lightSpecular=function(ee,ed,ea){var eb=dH(ee,ed,ea,0);var ec=[((eb>>16)&255)/255,((eb>>8)&255)/255,(eb&255)/255];d8.useProgram(dx);d2("uSpecular3d",dx,"uSpecular",ec)};cW.lights=function(){cW.ambientLight(128,128,128);cW.directionalLight(128,128,128,0,0,-1);cW.lightFalloff(1,0,0);cW.lightSpecular(0,0,0)};bR.prototype.pointLight=ds.prototype.a3DOnlyFunction;bB.prototype.pointLight=function(ea,ed,ei,ej,ef,ee){if(dL===8){throw"can only create "+8+" lights"}var eg=new A(ej,ef,ee);var eh=new aP;eh.scale(1,-1,1);eh.apply(dJ.array());eh.mult(eg,eg);var eb=dH(ea,ed,ei,0);var ec=[((eb>>16)&255)/255,((eb>>8)&255)/255,(eb&255)/255];d8.useProgram(dx);d2("uLights.color.3d."+dL,dx,"uLights"+dL+".color",ec);d2("uLights.position.3d."+dL,dx,"uLights"+dL+".position",eg.array());dZ("uLights.type.3d."+dL,dx,"uLights"+dL+".type",2);dZ("uLightCount3d",dx,"uLightCount",++dL)};bR.prototype.noLights=ds.prototype.a3DOnlyFunction;bB.prototype.noLights=function(){dL=0;d8.useProgram(dx);dZ("uLightCount3d",dx,"uLightCount",dL)};bR.prototype.spotLight=ds.prototype.a3DOnlyFunction;bB.prototype.spotLight=function(ea,ei,en,eo,em,ek,ej,eh,ef,ee,eg){if(dL===8){throw"can only create "+8+" lights"}d8.useProgram(dx);var el=new A(eo,em,ek);var ep=new aP;ep.scale(1,-1,1);ep.apply(dJ.array());ep.mult(el,el);ep=ep.array();var ec=[ep[0]*ej+ep[4]*eh+ep[8]*ef,ep[1]*ej+ep[5]*eh+ep[9]*ef,ep[2]*ej+ep[6]*eh+ep[10]*ef];var eb=dH(ea,ei,en,0);var ed=[((eb>>16)&255)/255,((eb>>8)&255)/255,(eb&255)/255];d2("uLights.color.3d."+dL,dx,"uLights"+dL+".color",ed);d2("uLights.position.3d."+dL,dx,"uLights"+dL+".position",el.array());d2("uLights.direction.3d."+dL,dx,"uLights"+dL+".direction",ec);d2("uLights.concentration.3d."+dL,dx,"uLights"+dL+".concentration",eg);d2("uLights.angle.3d."+dL,dx,"uLights"+dL+".angle",ee);dZ("uLights.type.3d."+dL,dx,"uLights"+dL+".type",3);dZ("uLightCount3d",dx,"uLightCount",++dL)};bR.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"};bB.prototype.beginCamera=function(){if(ap){throw"You cannot call beginCamera() again before calling endCamera()"}ap=true;dJ=ch;aT=bV};bR.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"};bB.prototype.endCamera=function(){if(!ap){throw"You cannot call endCamera() before calling beginCamera()"}dJ.set(bV);aT.set(ch);ap=false};cW.camera=function(el,ek,ei,eg,ee,ed,et,er,ep){if(el===t){dl=cW.width/2;dj=cW.height/2;di=dj/q.tan(cK/2);el=dl;ek=dj;ei=di;eg=dl;ee=dj;ed=0;et=0;er=1;ep=0}var ef=new A(el-eg,ek-ee,ei-ed);var eh=new A(et,er,ep);ef.normalize();var ej=A.cross(eh,ef);eh=A.cross(ef,ej);ej.normalize();eh.normalize();var eu=ej.x,es=ej.y,eq=ej.z;var ec=eh.x,eb=eh.y,ea=eh.z;var eo=ef.x,en=ef.y,em=ef.z;bV.set(eu,es,eq,0,ec,eb,ea,0,eo,en,em,0,0,0,0,1);bV.translate(-el,-ek,-ei);ch.reset();ch.invApply(eu,es,eq,0,ec,eb,ea,0,eo,en,em,0,0,0,0,1);ch.translate(el,ek,ei);dJ.set(bV);aT.set(ch)};cW.perspective=function(ee,ec,ef,eb){if(arguments.length===0){dj=ae.height/2;di=dj/q.tan(cK/2);a0=di/10;av=di*10;b5=cW.width/cW.height;ee=cK;ec=b5;ef=a0;eb=av}var eg,ea,eh,ed;eg=ef*q.tan(ee/2);ea=-eg;eh=eg*ec;ed=ea*ec;cW.frustum(ed,eh,ea,eg,ef,eb)};bR.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"};bB.prototype.frustum=function(eg,ec,eb,ef,ee,ea){ci=true;db=new aP;db.set(2*ee/(ec-eg),0,(ec+eg)/(ec-eg),0,0,2*ee/(ef-eb),(ef+eb)/(ef-eb),0,0,0,-(ea+ee)/(ea-ee),-(2*ea*ee)/(ea-ee),0,0,-1,0);var ed=new aP;ed.set(db);ed.transpose();d8.useProgram(dQ);a9("projection2d",dQ,"uProjection",false,ed.array());d8.useProgram(dx);a9("projection3d",dx,"uProjection",false,ed.array());d8.useProgram(bT);a9("uProjectionUS",bT,"uProjection",false,ed.array())};cW.ortho=function(eb,em,ea,ek,eh,eg){if(arguments.length===0){eb=0;em=cW.width;ea=0;ek=cW.height;eh=-10;eg=10}var el=2/(em-eb);var ej=2/(ek-ea);var ei=-2/(eg-eh);var ef=-(em+eb)/(em-eb);var ee=-(ek+ea)/(ek-ea);var ed=-(eg+eh)/(eg-eh);db=new aP;db.set(el,0,0,ef,0,ej,0,ee,0,0,ei,ed,0,0,0,1);var ec=new aP;ec.set(db);ec.transpose();d8.useProgram(dQ);a9("projection2d",dQ,"uProjection",false,ec.array());d8.useProgram(dx);a9("projection3d",dx,"uProjection",false,ec.array());d8.useProgram(bT);a9("uProjectionUS",bT,"uProjection",false,ec.array());ci=false};cW.printProjection=function(){db.print()};cW.printCamera=function(){bV.print()};bR.prototype.box=ds.prototype.a3DOnlyFunction;bB.prototype.box=function(ec,ef,eh){if(!ef||!eh){ef=eh=ec}var ee=new aP;ee.scale(ec,ef,eh);var eb=new aP;eb.scale(1,-1,1);eb.apply(dJ.array());eb.transpose();if(aH){d8.useProgram(dx);a9("model3d",dx,"uModel",false,ee.array());a9("view3d",dx,"uView",false,eb.array());d8.enable(d8.POLYGON_OFFSET_FILL);d8.polygonOffset(1,1);d2("color3d",dx,"uColor",bo);if(dL>0){var ed=new aP;ed.set(eb);var ea=new aP;ea.set(ee);ed.mult(ea);var eg=new aP;eg.set(ed);eg.invert();eg.transpose();a9("uNormalTransform3d",dx,"uNormalTransform",false,eg.array());dc("aNormal3d",dx,"aNormal",3,cJ)}else{cg("aNormal3d",dx,"aNormal")}dc("aVertex3d",dx,"aVertex",3,bh);cg("aColor3d",dx,"aColor");cg("aTexture3d",dx,"aTexture");d8.drawArrays(d8.TRIANGLES,0,dh.length/3);d8.disable(d8.POLYGON_OFFSET_FILL)}if(dW>0&&ce){d8.useProgram(dQ);a9("uModel2d",dQ,"uModel",false,ee.array());a9("uView2d",dQ,"uView",false,eb.array());d2("uColor2d",dQ,"uColor",c0);dZ("uIsDrawingText2d",dQ,"uIsDrawingText",false);dc("vertex2d",dQ,"aVertex",3,dk);cg("aTextureCoord2d",dQ,"aTextureCoord");d8.drawArrays(d8.LINES,0,bH.length/3)}};var cD=function(){var eb;cF=[];for(eb=0;eb<bM;eb++){cF.push(0);cF.push(-1);cF.push(0);cF.push(bt[eb]);cF.push(bs[eb]);cF.push(br[eb])}cF.push(0);cF.push(-1);cF.push(0);cF.push(bt[0]);cF.push(bs[0]);cF.push(br[0]);var ef,ec,ee;var ed=0;for(eb=2;eb<bL;eb++){ef=ec=ed;ed+=bM;ee=ed;for(var ea=0;ea<bM;ea++){cF.push(bt[ef]);cF.push(bs[ef]);cF.push(br[ef++]);cF.push(bt[ee]);cF.push(bs[ee]);cF.push(br[ee++])}ef=ec;ee=ed;cF.push(bt[ef]);cF.push(bs[ef]);cF.push(br[ef]);cF.push(bt[ee]);cF.push(bs[ee]);cF.push(br[ee])}for(eb=0;eb<bM;eb++){ee=ed+eb;cF.push(bt[ee]);cF.push(bs[ee]);cF.push(br[ee]);cF.push(0);cF.push(1);cF.push(0)}cF.push(bt[ed]);cF.push(bs[ed]);cF.push(br[ed]);cF.push(0);cF.push(1);cF.push(0);d8.bindBuffer(d8.ARRAY_BUFFER,bg);d8.bufferData(d8.ARRAY_BUFFER,new e(cF),d8.STATIC_DRAW)};cW.sphereDetail=function(eb,em){var eh;if(arguments.length===1){eb=em=arguments[0]}if(eb<3){eb=3}if(em<2){em=2}if(eb===bM&&em===bL){return}var el=720/eb;var ef=new e(eb);var ec=new e(eb);for(eh=0;eh<eb;eh++){ef[eh]=bl[eh*el%720|0];ec[eh]=ah[eh*el%720|0]}var ek=eb*(em-1)+2;var ej=0;bt=new e(ek);bs=new e(ek);br=new e(ek);var ei=720*0.5/em;var ee=ei;for(eh=1;eh<em;eh++){var ed=ah[ee%720|0];var ea=-bl[ee%720|0];for(var eg=0;eg<eb;eg++){bt[ej]=ef[eg]*ed;bs[ej]=ea;br[ej++]=ec[eg]*ed}ee+=ei}bM=eb;bL=em;cD()};bR.prototype.sphere=ds.prototype.a3DOnlyFunction;bB.prototype.sphere=function(){var ee=arguments[0];if(bM<3||bL<2){cW.sphereDetail(30)}var ed=new aP;ed.scale(ee,ee,ee);var eb=new aP;eb.scale(1,-1,1);eb.apply(dJ.array());eb.transpose();if(aH){if(dL>0){var ec=new aP;ec.set(eb);var ea=new aP;ea.set(ed);ec.mult(ea);var ef=new aP;ef.set(ec);ef.invert();ef.transpose();a9("uNormalTransform3d",dx,"uNormalTransform",false,ef.array());dc("aNormal3d",dx,"aNormal",3,bg)}else{cg("aNormal3d",dx,"aNormal")}d8.useProgram(dx);cg("aTexture3d",dx,"aTexture");a9("uModel3d",dx,"uModel",false,ed.array());a9("uView3d",dx,"uView",false,eb.array());dc("aVertex3d",dx,"aVertex",3,bg);cg("aColor3d",dx,"aColor");d8.enable(d8.POLYGON_OFFSET_FILL);d8.polygonOffset(1,1);d2("uColor3d",dx,"uColor",bo);d8.drawArrays(d8.TRIANGLE_STRIP,0,cF.length/3);d8.disable(d8.POLYGON_OFFSET_FILL)}if(dW>0&&ce){d8.useProgram(dQ);a9("uModel2d",dQ,"uModel",false,ed.array());a9("uView2d",dQ,"uView",false,eb.array());dc("aVertex2d",dQ,"aVertex",3,bg);cg("aTextureCoord2d",dQ,"aTextureCoord");d2("uColor2d",dQ,"uColor",c0);dZ("uIsDrawingText",dQ,"uIsDrawingText",false);d8.drawArrays(d8.LINE_STRIP,0,cF.length/3)}};cW.modelX=function(eg,ef,ee){var ei=dJ.array();var ek=ch.array();var ea=ei[0]*eg+ei[1]*ef+ei[2]*ee+ei[3];var ej=ei[4]*eg+ei[5]*ef+ei[6]*ee+ei[7];var eh=ei[8]*eg+ei[9]*ef+ei[10]*ee+ei[11];var eb=ei[12]*eg+ei[13]*ef+ei[14]*ee+ei[15];var ec=ek[0]*ea+ek[1]*ej+ek[2]*eh+ek[3]*eb;var ed=ek[12]*ea+ek[13]*ej+ek[14]*eh+ek[15]*eb;return ed!==0?ec/ed:ec};cW.modelY=function(eg,ef,ee){var ei=dJ.array();var ek=ch.array();var ea=ei[0]*eg+ei[1]*ef+ei[2]*ee+ei[3];var ej=ei[4]*eg+ei[5]*ef+ei[6]*ee+ei[7];var eh=ei[8]*eg+ei[9]*ef+ei[10]*ee+ei[11];var eb=ei[12]*eg+ei[13]*ef+ei[14]*ee+ei[15];var ec=ek[4]*ea+ek[5]*ej+ek[6]*eh+ek[7]*eb;var ed=ek[12]*ea+ek[13]*ej+ek[14]*eh+ek[15]*eb;return ed!==0?ec/ed:ec};cW.modelZ=function(eg,ef,ee){var ei=dJ.array();var ek=ch.array();var ea=ei[0]*eg+ei[1]*ef+ei[2]*ee+ei[3];var ej=ei[4]*eg+ei[5]*ef+ei[6]*ee+ei[7];var eh=ei[8]*eg+ei[9]*ef+ei[10]*ee+ei[11];var ec=ei[12]*eg+ei[13]*ef+ei[14]*ee+ei[15];var eb=ek[8]*ea+ek[9]*ej+ek[10]*eh+ek[11]*ec;var ed=ek[12]*ea+ek[13]*ej+ek[14]*eh+ek[15]*ec;return ed!==0?eb/ed:eb};bR.prototype.ambient=ds.prototype.a3DOnlyFunction;bB.prototype.ambient=function(ed,ec,eb){d8.useProgram(dx);dZ("uUsingMat3d",dx,"uUsingMat",true);var ea=cW.color(ed,ec,eb);d2("uMaterialAmbient3d",dx,"uMaterialAmbient",cW.color.toGLArray(ea).slice(0,3))};bR.prototype.emissive=ds.prototype.a3DOnlyFunction;bB.prototype.emissive=function(ed,ec,eb){d8.useProgram(dx);dZ("uUsingMat3d",dx,"uUsingMat",true);var ea=cW.color(ed,ec,eb);d2("uMaterialEmissive3d",dx,"uMaterialEmissive",cW.color.toGLArray(ea).slice(0,3))};bR.prototype.shininess=ds.prototype.a3DOnlyFunction;bB.prototype.shininess=function(ea){d8.useProgram(dx);dZ("uUsingMat3d",dx,"uUsingMat",true);d2("uShininess3d",dx,"uShininess",ea)};bR.prototype.specular=ds.prototype.a3DOnlyFunction;bB.prototype.specular=function(ed,ec,eb){d8.useProgram(dx);dZ("uUsingMat3d",dx,"uUsingMat",true);var ea=cW.color(ed,ec,eb);d2("uMaterialSpecular3d",dx,"uMaterialSpecular",cW.color.toGLArray(ea).slice(0,3))};cW.screenX=function(eh,eg,ef){var ej=dJ.array();if(ej.length===16){var ea=ej[0]*eh+ej[1]*eg+ej[2]*ef+ej[3];var ek=ej[4]*eh+ej[5]*eg+ej[6]*ef+ej[7];var ei=ej[8]*eh+ej[9]*eg+ej[10]*ef+ej[11];var eb=ej[12]*eh+ej[13]*eg+ej[14]*ef+ej[15];var ee=db.array();var ec=ee[0]*ea+ee[1]*ek+ee[2]*ei+ee[3]*eb;var ed=ee[12]*ea+ee[13]*ek+ee[14]*ei+ee[15]*eb;if(ed!==0){ec/=ed}return cW.width*(1+ec)/2}return dJ.multX(eh,eg)};cW.screenY=function aA(eh,eg,ef){var ej=dJ.array();if(ej.length===16){var ea=ej[0]*eh+ej[1]*eg+ej[2]*ef+ej[3];var ek=ej[4]*eh+ej[5]*eg+ej[6]*ef+ej[7];var ei=ej[8]*eh+ej[9]*eg+ej[10]*ef+ej[11];var eb=ej[12]*eh+ej[13]*eg+ej[14]*ef+ej[15];var ee=db.array();var ec=ee[4]*ea+ee[5]*ek+ee[6]*ei+ee[7]*eb;var ed=ee[12]*ea+ee[13]*ek+ee[14]*ei+ee[15]*eb;if(ed!==0){ec/=ed}return cW.height*(1+ec)/2}return dJ.multY(eh,eg)};cW.screenZ=function ay(eh,eg,ef){var ej=dJ.array();if(ej.length!==16){return 0}var ee=db.array();var ea=ej[0]*eh+ej[1]*eg+ej[2]*ef+ej[3];var ek=ej[4]*eh+ej[5]*eg+ej[6]*ef+ej[7];var ei=ej[8]*eh+ej[9]*eg+ej[10]*ef+ej[11];var ec=ej[12]*eh+ej[13]*eg+ej[14]*ef+ej[15];var eb=ee[8]*ea+ee[9]*ek+ee[10]*ei+ee[11]*ec;var ed=ee[12]*ea+ee[13]*ek+ee[14]*ei+ee[15]*ec;if(ed!==0){eb/=ed}return(eb+1)/2};ds.prototype.fill=function(){var ea=cW.color(arguments[0],arguments[1],arguments[2],arguments[3]);if(ea===a1&&aH){return}aH=true;a1=ea};bR.prototype.fill=function(){ds.prototype.fill.apply(this,arguments);aq=true};bB.prototype.fill=function(){ds.prototype.fill.apply(this,arguments);bo=cW.color.toGLArray(a1)};function bn(){if(aH){if(aq){d8.fillStyle=cW.color.toString(a1);aq=false}d8.fill()}}cW.noFill=function(){aH=false};ds.prototype.stroke=function(){var ea=cW.color(arguments[0],arguments[1],arguments[2],arguments[3]);if(ea===cv&&ce){return}ce=true;cv=ea};bR.prototype.stroke=function(){ds.prototype.stroke.apply(this,arguments);b3=true};bB.prototype.stroke=function(){ds.prototype.stroke.apply(this,arguments);c0=cW.color.toGLArray(cv)};function dd(){if(ce){if(b3){d8.strokeStyle=cW.color.toString(cv);b3=false}d8.stroke()}}cW.noStroke=function(){ce=false};ds.prototype.strokeWeight=function(ea){dW=ea};bR.prototype.strokeWeight=function(ea){ds.prototype.strokeWeight.apply(this,arguments);d8.lineWidth=ea};bB.prototype.strokeWeight=function(ea){ds.prototype.strokeWeight.apply(this,arguments);d8.useProgram(dQ);d2("pointSize2d",dQ,"uPointSize",ea);d8.useProgram(bT);d2("pointSizeUnlitShape",bT,"uPointSize",ea);d8.lineWidth(ea)};cW.strokeCap=function(ea){dY.$ensureContext().lineCap=ea};cW.strokeJoin=function(ea){dY.$ensureContext().lineJoin=ea};bR.prototype.smooth=function(){dO=true;var ea=ae.style;ea.setProperty("image-rendering","optimizeQuality","important");ea.setProperty("-ms-interpolation-mode","bicubic","important");if(d8.hasOwnProperty("mozImageSmoothingEnabled")){d8.mozImageSmoothingEnabled=true}};bB.prototype.smooth=function(){dO=true};bR.prototype.noSmooth=function(){dO=false;var ea=ae.style;ea.setProperty("image-rendering","optimizeSpeed","important");ea.setProperty("image-rendering","-moz-crisp-edges","important");ea.setProperty("image-rendering","-webkit-optimize-contrast","important");ea.setProperty("image-rendering","optimize-contrast","important");ea.setProperty("-ms-interpolation-mode","nearest-neighbor","important");if(d8.hasOwnProperty("mozImageSmoothingEnabled")){d8.mozImageSmoothingEnabled=false}};bB.prototype.noSmooth=function(){dO=false};bR.prototype.point=function(ea,eb){if(!ce){return}ea=q.round(ea);eb=q.round(eb);d8.fillStyle=cW.color.toString(cv);aq=true;if(dW>1){d8.beginPath();d8.arc(ea,eb,dW/2,0,6.283185307179586,false);d8.fill()}else{d8.fillRect(ea,eb,1,1)}};bB.prototype.point=function(ea,ee,ed){var ec=new aP;ec.translate(ea,ee,ed||0);ec.transpose();var eb=new aP;eb.scale(1,-1,1);eb.apply(dJ.array());eb.transpose();d8.useProgram(dQ);a9("uModel2d",dQ,"uModel",false,ec.array());a9("uView2d",dQ,"uView",false,eb.array());if(dW>0&&ce){d2("uColor2d",dQ,"uColor",c0);dZ("uIsDrawingText2d",dQ,"uIsDrawingText",false);dZ("uSmooth2d",dQ,"uSmooth",dO);dc("aVertex2d",dQ,"aVertex",3,aw);cg("aTextureCoord2d",dQ,"aTextureCoord");d8.drawArrays(d8.POINTS,0,1)}};cW.beginShape=function(ea){dR=ea;d6=[];bb=[]};bR.prototype.vertex=function(eb,ed,ea){var ec=[];if(du){du=false}ec.isVert=true;ec[0]=eb;ec[1]=ed;ec[2]=0;ec[3]=0;ec[4]=0;ec[5]=a1;ec[6]=cv;bb.push(ec);if(ea){bb[bb.length-1]["moveTo"]=ea}};bB.prototype.vertex=function(ea,ef,ee,ed,ec){var eb=[];if(du){du=false}eb.isVert=true;if(ec===t&&dT){ec=ed;ed=ee;ee=0}if(ed!==t&&ec!==t){if(d4===2){ed/=cs.width;ec/=cs.height}ed=ed>1?1:ed;ed=ed<0?0:ed;ec=ec>1?1:ec;ec=ec<0?0:ec}eb[0]=ea;eb[1]=ef;eb[2]=ee||0;eb[3]=ed||0;eb[4]=ec||0;eb[5]=bo[0];eb[6]=bo[1];eb[7]=bo[2];eb[8]=bo[3];eb[9]=c0[0];eb[10]=c0[1];eb[11]=c0[2];eb[12]=c0[3];eb[13]=a8;eb[14]=a7;eb[15]=a6;bb.push(eb)};var d1=function(ec,eb){var ea=new aP;ea.scale(1,-1,1);ea.apply(dJ.array());ea.transpose();d8.useProgram(bT);a9("uViewUS",bT,"uView",false,ea.array());dZ("uSmoothUS",bT,"uSmooth",dO);dc("aVertexUS",bT,"aVertex",3,aw);d8.bufferData(d8.ARRAY_BUFFER,new e(ec),d8.STREAM_DRAW);dc("aColorUS",bT,"aColor",4,aG);d8.bufferData(d8.ARRAY_BUFFER,new e(eb),d8.STREAM_DRAW);d8.drawArrays(d8.POINTS,0,ec.length/3)};var bj=function(ee,ed,ec){var eb;if(ed==="LINES"){eb=d8.LINES}else{if(ed==="LINE_LOOP"){eb=d8.LINE_LOOP}else{eb=d8.LINE_STRIP}}var ea=new aP;ea.scale(1,-1,1);ea.apply(dJ.array());ea.transpose();d8.useProgram(bT);a9("uViewUS",bT,"uView",false,ea.array());dc("aVertexUS",bT,"aVertex",3,b8);d8.bufferData(d8.ARRAY_BUFFER,new e(ee),d8.STREAM_DRAW);dc("aColorUS",bT,"aColor",4,bC);d8.bufferData(d8.ARRAY_BUFFER,new e(ec),d8.STREAM_DRAW);d8.drawArrays(eb,0,ee.length/3)};var dm=function(ef,ee,ed,ec){var eb;if(ee==="TRIANGLES"){eb=d8.TRIANGLES}else{if(ee==="TRIANGLE_FAN"){eb=d8.TRIANGLE_FAN}else{eb=d8.TRIANGLE_STRIP}}var ea=new aP;ea.scale(1,-1,1);ea.apply(dJ.array());ea.transpose();d8.useProgram(dx);a9("model3d",dx,"uModel",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);a9("view3d",dx,"uView",false,ea.array());d8.enable(d8.POLYGON_OFFSET_FILL);d8.polygonOffset(1,1);d2("color3d",dx,"uColor",[-1,0,0,0]);dc("vertex3d",dx,"aVertex",3,at);d8.bufferData(d8.ARRAY_BUFFER,new e(ef),d8.STREAM_DRAW);if(dT&&bf!==null){bw(ed)}dc("aColor3d",dx,"aColor",4,aG);d8.bufferData(d8.ARRAY_BUFFER,new e(ed),d8.STREAM_DRAW);cg("aNormal3d",dx,"aNormal");if(dT){dZ("uUsingTexture3d",dx,"uUsingTexture",dT);dc("aTexture3d",dx,"aTexture",2,af);d8.bufferData(d8.ARRAY_BUFFER,new e(ec),d8.STREAM_DRAW)}d8.drawArrays(eb,0,ef.length/3);d8.disable(d8.POLYGON_OFFSET_FILL)};function cS(){bn();dd();d8.closePath()}bR.prototype.endShape=function(eh){if(bb.length===0){return}var ed=eh===2;if(ed){bb.push(bb[0])}var ec=[];var ea=[];var ej=[];var em=[];var ef=[];var ei;du=true;var eg,ee,eb;var el=bb.length;for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ea.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=5;ee<9;ee++){ej.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=9;ee<13;ee++){em.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];ef.push(ei[3]);ef.push(ei[4])}if(dP&&(dR===20||dR===t)){if(el>3){var ek=[],en=1-aJ;d8.beginPath();d8.moveTo(bb[1][0],bb[1][1]);for(eg=1;eg+2<el;eg++){ei=bb[eg];ek[0]=[ei[0],ei[1]];ek[1]=[ei[0]+(en*bb[eg+1][0]-en*bb[eg-1][0])/6,ei[1]+(en*bb[eg+1][1]-en*bb[eg-1][1])/6];ek[2]=[bb[eg+1][0]+(en*bb[eg][0]-en*bb[eg+2][0])/6,bb[eg+1][1]+(en*bb[eg][1]-en*bb[eg+2][1])/6];ek[3]=[bb[eg+1][0],bb[eg+1][1]];d8.bezierCurveTo(ek[1][0],ek[1][1],ek[2][0],ek[2][1],ek[3][0],ek[3][1])}cS()}}else{if(aa&&(dR===20||dR===t)){d8.beginPath();for(eg=0;eg<el;eg++){ei=bb[eg];if(bb[eg]["isVert"]){if(bb[eg]["moveTo"]){d8.moveTo(ei[0],ei[1])}else{d8.lineTo(ei[0],ei[1])}}else{d8.bezierCurveTo(bb[eg][0],bb[eg][1],bb[eg][2],bb[eg][3],bb[eg][4],bb[eg][5])}}cS()}else{if(dR===2){for(eg=0;eg<el;eg++){ei=bb[eg];if(ce){cW.stroke(ei[6])}cW.point(ei[0],ei[1])}}else{if(dR===4){for(eg=0;eg+1<el;eg+=2){ei=bb[eg];if(ce){cW.stroke(bb[eg+1][6])}cW.line(ei[0],ei[1],bb[eg+1][0],bb[eg+1][1])}}else{if(dR===9){for(eg=0;eg+2<el;eg+=3){ei=bb[eg];d8.beginPath();d8.moveTo(ei[0],ei[1]);d8.lineTo(bb[eg+1][0],bb[eg+1][1]);d8.lineTo(bb[eg+2][0],bb[eg+2][1]);d8.lineTo(ei[0],ei[1]);if(aH){cW.fill(bb[eg+2][5]);bn()}if(ce){cW.stroke(bb[eg+2][6]);dd()}d8.closePath()}}else{if(dR===10){for(eg=0;eg+1<el;eg++){ei=bb[eg];d8.beginPath();d8.moveTo(bb[eg+1][0],bb[eg+1][1]);d8.lineTo(ei[0],ei[1]);if(ce){cW.stroke(bb[eg+1][6])}if(aH){cW.fill(bb[eg+1][5])}if(eg+2<el){d8.lineTo(bb[eg+2][0],bb[eg+2][1]);if(ce){cW.stroke(bb[eg+2][6])}if(aH){cW.fill(bb[eg+2][5])}}cS()}}else{if(dR===11){if(el>2){d8.beginPath();d8.moveTo(bb[0][0],bb[0][1]);d8.lineTo(bb[1][0],bb[1][1]);d8.lineTo(bb[2][0],bb[2][1]);if(aH){cW.fill(bb[2][5]);bn()}if(ce){cW.stroke(bb[2][6]);dd()}d8.closePath();for(eg=3;eg<el;eg++){ei=bb[eg];d8.beginPath();d8.moveTo(bb[0][0],bb[0][1]);d8.lineTo(bb[eg-1][0],bb[eg-1][1]);d8.lineTo(ei[0],ei[1]);if(aH){cW.fill(ei[5]);bn()}if(ce){cW.stroke(ei[6]);dd()}d8.closePath()}}}else{if(dR===16){for(eg=0;eg+3<el;eg+=4){ei=bb[eg];d8.beginPath();d8.moveTo(ei[0],ei[1]);for(ee=1;ee<4;ee++){d8.lineTo(bb[eg+ee][0],bb[eg+ee][1])}d8.lineTo(ei[0],ei[1]);if(aH){cW.fill(bb[eg+3][5]);bn()}if(ce){cW.stroke(bb[eg+3][6]);dd()}d8.closePath()}}else{if(dR===17){if(el>3){for(eg=0;eg+1<el;eg+=2){ei=bb[eg];d8.beginPath();if(eg+3<el){d8.moveTo(bb[eg+2][0],bb[eg+2][1]);d8.lineTo(ei[0],ei[1]);d8.lineTo(bb[eg+1][0],bb[eg+1][1]);d8.lineTo(bb[eg+3][0],bb[eg+3][1]);if(aH){cW.fill(bb[eg+3][5])}if(ce){cW.stroke(bb[eg+3][6])}}else{d8.moveTo(ei[0],ei[1]);d8.lineTo(bb[eg+1][0],bb[eg+1][1])}cS()}}}else{d8.beginPath();d8.moveTo(bb[0][0],bb[0][1]);for(eg=1;eg<el;eg++){ei=bb[eg];if(ei.isVert){if(ei.moveTo){d8.moveTo(ei[0],ei[1])}else{d8.lineTo(ei[0],ei[1])}}}cS()}}}}}}}}}dP=false;aa=false;cb=[];c2=0;if(ed){bb.pop()}};bB.prototype.endShape=function(eh){if(bb.length===0){return}var ed=eh===2;var ec=[];var ea=[];var ej=[];var em=[];var ef=[];var ei;du=true;var eg,ee,eb;var el=bb.length;for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ea.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=5;ee<9;ee++){ej.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=9;ee<13;ee++){em.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];ef.push(ei[3]);ef.push(ei[4])}if(ed){ea.push(bb[0][0]);ea.push(bb[0][1]);ea.push(bb[0][2]);for(eg=5;eg<9;eg++){ej.push(bb[0][eg])}for(eg=9;eg<13;eg++){em.push(bb[0][eg])}ef.push(bb[0][3]);ef.push(bb[0][4])}if(dP&&(dR===20||dR===t)){ec=ea;if(ce){bj(ec,null,em)}if(aH){dm(ea,null,ej)}}else{if(aa&&(dR===20||dR===t)){ec=ea;ec.splice(ec.length-3);em.splice(em.length-4);if(ce){bj(ec,null,em)}if(aH){dm(ea,"TRIANGLES",ej)}}else{if(dR===2){for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ec.push(ei[ee])}}d1(ec,em)}else{if(dR===4){for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ec.push(ei[ee])}}for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=5;ee<9;ee++){ej.push(ei[ee])}}bj(ec,"LINES",em)}else{if(dR===9){if(el>2){for(eg=0;eg+2<el;eg+=3){ea=[];ef=[];ec=[];ej=[];em=[];for(ee=0;ee<3;ee++){for(eb=0;eb<3;eb++){ec.push(bb[eg+ee][eb]);ea.push(bb[eg+ee][eb])}}for(ee=0;ee<3;ee++){for(eb=3;eb<5;eb++){ef.push(bb[eg+ee][eb])}}for(ee=0;ee<3;ee++){for(eb=5;eb<9;eb++){ej.push(bb[eg+ee][eb]);em.push(bb[eg+ee][eb+4])}}if(ce){bj(ec,"LINE_LOOP",em)}if(aH||dT){dm(ea,"TRIANGLES",ej,ef)}}}}else{if(dR===10){if(el>2){for(eg=0;eg+2<el;eg++){ec=[];ea=[];em=[];ej=[];ef=[];for(ee=0;ee<3;ee++){for(eb=0;eb<3;eb++){ec.push(bb[eg+ee][eb]);ea.push(bb[eg+ee][eb])}}for(ee=0;ee<3;ee++){for(eb=3;eb<5;eb++){ef.push(bb[eg+ee][eb])}}for(ee=0;ee<3;ee++){for(eb=5;eb<9;eb++){em.push(bb[eg+ee][eb+4]);ej.push(bb[eg+ee][eb])}}if(aH||dT){dm(ea,"TRIANGLE_STRIP",ej,ef)}if(ce){bj(ec,"LINE_LOOP",em)}}}}else{if(dR===11){if(el>2){for(eg=0;eg<3;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ec.push(ei[ee])}}for(eg=0;eg<3;eg++){ei=bb[eg];for(ee=9;ee<13;ee++){em.push(ei[ee])}}if(ce){bj(ec,"LINE_LOOP",em)}for(eg=2;eg+1<el;eg++){ec=[];em=[];ec.push(bb[0][0]);ec.push(bb[0][1]);ec.push(bb[0][2]);em.push(bb[0][9]);em.push(bb[0][10]);em.push(bb[0][11]);em.push(bb[0][12]);for(ee=0;ee<2;ee++){for(eb=0;eb<3;eb++){ec.push(bb[eg+ee][eb])}}for(ee=0;ee<2;ee++){for(eb=9;eb<13;eb++){em.push(bb[eg+ee][eb])}}if(ce){bj(ec,"LINE_STRIP",em)}}if(aH||dT){dm(ea,"TRIANGLE_FAN",ej,ef)}}}else{if(dR===16){for(eg=0;eg+3<el;eg+=4){ec=[];for(ee=0;ee<4;ee++){ei=bb[eg+ee];for(eb=0;eb<3;eb++){ec.push(ei[eb])}}if(ce){bj(ec,"LINE_LOOP",em)}if(aH){ea=[];ej=[];ef=[];for(ee=0;ee<3;ee++){ea.push(bb[eg][ee])}for(ee=5;ee<9;ee++){ej.push(bb[eg][ee])}for(ee=0;ee<3;ee++){ea.push(bb[eg+1][ee])}for(ee=5;ee<9;ee++){ej.push(bb[eg+1][ee])}for(ee=0;ee<3;ee++){ea.push(bb[eg+3][ee])}for(ee=5;ee<9;ee++){ej.push(bb[eg+3][ee])}for(ee=0;ee<3;ee++){ea.push(bb[eg+2][ee])}for(ee=5;ee<9;ee++){ej.push(bb[eg+2][ee])}if(dT){ef.push(bb[eg+0][3]);ef.push(bb[eg+0][4]);ef.push(bb[eg+1][3]);ef.push(bb[eg+1][4]);ef.push(bb[eg+3][3]);ef.push(bb[eg+3][4]);ef.push(bb[eg+2][3]);ef.push(bb[eg+2][4])}dm(ea,"TRIANGLE_STRIP",ej,ef)}}}else{if(dR===17){var ek=[];if(el>3){for(eg=0;eg<2;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ec.push(ei[ee])}}for(eg=0;eg<2;eg++){ei=bb[eg];for(ee=9;ee<13;ee++){em.push(ei[ee])}}bj(ec,"LINE_STRIP",em);if(el>4&&el%2>0){ek=ea.splice(ea.length-3);bb.pop()}for(eg=0;eg+3<el;eg+=2){ec=[];em=[];for(ee=0;ee<3;ee++){ec.push(bb[eg+1][ee])}for(ee=0;ee<3;ee++){ec.push(bb[eg+3][ee])}for(ee=0;ee<3;ee++){ec.push(bb[eg+2][ee])}for(ee=0;ee<3;ee++){ec.push(bb[eg+0][ee])}for(ee=9;ee<13;ee++){em.push(bb[eg+1][ee])}for(ee=9;ee<13;ee++){em.push(bb[eg+3][ee])}for(ee=9;ee<13;ee++){em.push(bb[eg+2][ee])}for(ee=9;ee<13;ee++){em.push(bb[eg+0][ee])}if(ce){bj(ec,"LINE_STRIP",em)}}if(aH||dT){dm(ea,"TRIANGLE_LIST",ej,ef)}}}else{if(el===1){for(ee=0;ee<3;ee++){ec.push(bb[0][ee])}for(ee=9;ee<13;ee++){em.push(bb[0][ee])}d1(ec,em)}else{for(eg=0;eg<el;eg++){ei=bb[eg];for(ee=0;ee<3;ee++){ec.push(ei[ee])}for(ee=5;ee<9;ee++){em.push(ei[ee])}}if(ce&&ed){bj(ec,"LINE_LOOP",em)}else{if(ce&&!ed){bj(ec,"LINE_STRIP",em)}}if(aH||dT){dm(ea,"TRIANGLE_FAN",ej,ef)}}}}}}}}}dT=false;d8.useProgram(dx);dZ("usingTexture3d",dx,"uUsingTexture",dT)}}dP=false;aa=false;cb=[];c2=0};var aY=function(ed,ec){var ee=1/ed;var eb=ee*ee;var ea=eb*ee;ec.set(0,0,0,1,ea,eb,ee,0,6*ea,2*eb,0,0,6*ea,0,0,0)};var dr=function(){if(!aL){c3=new aP;aL=new aP;cM=true}var ea=aJ;c3.set((ea-1)/2,(ea+3)/2,(-3-ea)/2,(1-ea)/2,1-ea,(-5-ea)/2,ea+2,(ea-1)/2,(ea-1)/2,0,(1-ea)/2,0,0,1,0,0);aY(Q,aL);if(!cd){aQ=new aP}aQ.set(c3);aQ.preApply(cd);aL.apply(c3)};bR.prototype.bezierVertex=function(){aa=true;var ea=[];if(du){throw"vertex() must be used at least once before calling bezierVertex()"}for(var eb=0;eb<arguments.length;eb++){ea[eb]=arguments[eb]}bb.push(ea);bb[bb.length-1]["isVert"]=false};bB.prototype.bezierVertex=function(){aa=true;var eh=[];if(du){throw"vertex() must be used at least once before calling bezierVertex()"}if(arguments.length===9){if(bz===t){bz=new aP}var em=bb.length-1;aY(cy,bz);bz.apply(U);var eo=bz.array();var ed=bb[em][0],en=bb[em][1],eg=bb[em][2];var ej=eo[4]*ed+eo[5]*arguments[0]+eo[6]*arguments[3]+eo[7]*arguments[6];var ei=eo[8]*ed+eo[9]*arguments[0]+eo[10]*arguments[3]+eo[11]*arguments[6];var ef=eo[12]*ed+eo[13]*arguments[0]+eo[14]*arguments[3]+eo[15]*arguments[6];var ep=eo[4]*en+eo[5]*arguments[1]+eo[6]*arguments[4]+eo[7]*arguments[7];var el=eo[8]*en+eo[9]*arguments[1]+eo[10]*arguments[4]+eo[11]*arguments[7];var ek=eo[12]*en+eo[13]*arguments[1]+eo[14]*arguments[4]+eo[15]*arguments[7];var ec=eo[4]*eg+eo[5]*arguments[2]+eo[6]*arguments[5]+eo[7]*arguments[8];var eb=eo[8]*eg+eo[9]*arguments[2]+eo[10]*arguments[5]+eo[11]*arguments[8];var ea=eo[12]*eg+eo[13]*arguments[2]+eo[14]*arguments[5]+eo[15]*arguments[8];for(var ee=0;ee<cy;ee++){ed+=ej;ej+=ei;ei+=ef;en+=ep;ep+=el;el+=ek;eg+=ec;ec+=eb;eb+=ea;cW.vertex(ed,en,eg)}cW.vertex(arguments[6],arguments[7],arguments[8])}};cW.texture=function(ed){var eb=dY.$ensureContext();if(ed.__texture){eb.bindTexture(eb.TEXTURE_2D,ed.__texture)}else{if(ed.localName==="canvas"){eb.bindTexture(eb.TEXTURE_2D,c7);eb.texImage2D(eb.TEXTURE_2D,0,eb.RGBA,eb.RGBA,eb.UNSIGNED_BYTE,ed);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_MAG_FILTER,eb.LINEAR);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_MIN_FILTER,eb.LINEAR);eb.generateMipmap(eb.TEXTURE_2D);cs.width=ed.width;cs.height=ed.height}else{var ec=eb.createTexture(),ef=d.createElement("canvas"),ea=ef.getContext("2d"),ee;if(ed.width&ed.width-1===0){ef.width=ed.width}else{ee=1;while(ee<ed.width){ee*=2}ef.width=ee}if(ed.height&ed.height-1===0){ef.height=ed.height}else{ee=1;while(ee<ed.height){ee*=2}ef.height=ee}ea.drawImage(ed.sourceImg,0,0,ed.width,ed.height,0,0,ef.width,ef.height);eb.bindTexture(eb.TEXTURE_2D,ec);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_MIN_FILTER,eb.LINEAR_MIPMAP_LINEAR);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_MAG_FILTER,eb.LINEAR);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_WRAP_T,eb.CLAMP_TO_EDGE);eb.texParameteri(eb.TEXTURE_2D,eb.TEXTURE_WRAP_S,eb.CLAMP_TO_EDGE);eb.texImage2D(eb.TEXTURE_2D,0,eb.RGBA,eb.RGBA,eb.UNSIGNED_BYTE,ef);eb.generateMipmap(eb.TEXTURE_2D);ed.__texture=ec;cs.width=ed.width;cs.height=ed.height}}dT=true;eb.useProgram(dx);dZ("usingTexture3d",dx,"uUsingTexture",dT)};cW.textureMode=function(ea){d4=ea};var ar=function(ev,eg,em,et,ef,el,er,ee,ek,ep,ed,ei){var ew=et;var eh=ef;var en=el;var ej=aL.array();var eu=ej[4]*ev+ej[5]*et+ej[6]*er+ej[7]*ep;var es=ej[8]*ev+ej[9]*et+ej[10]*er+ej[11]*ep;var eq=ej[12]*ev+ej[13]*et+ej[14]*er+ej[15]*ep;var ez=ej[4]*eg+ej[5]*ef+ej[6]*ee+ej[7]*ed;var ey=ej[8]*eg+ej[9]*ef+ej[10]*ee+ej[11]*ed;var ex=ej[12]*eg+ej[13]*ef+ej[14]*ee+ej[15]*ed;var ec=ej[4]*em+ej[5]*el+ej[6]*ek+ej[7]*ei;var eb=ej[8]*em+ej[9]*el+ej[10]*ek+ej[11]*ei;var ea=ej[12]*em+ej[13]*el+ej[14]*ek+ej[15]*ei;cW.vertex(ew,eh,en);for(var eo=0;eo<Q;eo++){ew+=eu;eu+=es;es+=eq;eh+=ez;ez+=ey;ey+=ex;en+=ec;ec+=eb;eb+=ea;cW.vertex(ew,eh,en)}};bR.prototype.curveVertex=function(ea,eb){dP=true;cW.vertex(ea,eb)};bB.prototype.curveVertex=function(ea,ed,ec){dP=true;if(!cM){dr()}var eb=[];eb[0]=ea;eb[1]=ed;eb[2]=ec;cb.push(eb);c2++;if(c2>3){ar(cb[c2-4][0],cb[c2-4][1],cb[c2-4][2],cb[c2-3][0],cb[c2-3][1],cb[c2-3][2],cb[c2-2][0],cb[c2-2][1],cb[c2-2][2],cb[c2-1][0],cb[c2-1][1],cb[c2-1][2])}};bR.prototype.curve=function(ef,eh,ed,eg,eb,ee,ea,ec){cW.beginShape();cW.curveVertex(ef,eh);cW.curveVertex(ed,eg);cW.curveVertex(eb,ee);cW.curveVertex(ea,ec);cW.endShape()};bB.prototype.curve=function(ec,ek,eg,eb,ej,ef,ea,ei,ee,el,eh,ed){if(ed!==t){cW.beginShape();cW.curveVertex(ec,ek,eg);cW.curveVertex(eb,ej,ef);cW.curveVertex(ea,ei,ee);cW.curveVertex(el,eh,ed);cW.endShape();return}cW.beginShape();cW.curveVertex(ec,ek);cW.curveVertex(eg,eb);cW.curveVertex(ej,ef);cW.curveVertex(ea,ei);cW.endShape()};cW.curveTightness=function(ea){aJ=ea};cW.curveDetail=function(ea){Q=ea;dr()};cW.rectMode=function(ea){bK=ea};cW.imageMode=function(ea){switch(ea){case 0:bk=aZ;break;case 1:bk=b1;break;case 3:bk=aN;break;default:throw"Invalid imageMode"}};cW.ellipseMode=function(ea){cN=ea};cW.arc=function(em,ek,ed,eo,ec,el){if(ed<=0||el<ec){return}if(cN===1){ed=ed-em;eo=eo-ek}else{if(cN===2){em=em-ed;ek=ek-eo;ed=ed*2;eo=eo*2}else{if(cN===3){em=em-ed/2;ek=ek-eo/2}}}while(ec<0){ec+=6.283185307179586;el+=6.283185307179586}if(el-ec>6.283185307179586){ec=0;el=6.283185307179586}var en=ed/2,ep=eo/2,eh=em+en,ef=ek+ep,eb=0|0.5+ec*cW.RAD_TO_DEG*2,ej=0|0.5+el*cW.RAD_TO_DEG*2,ei,eg;if(aH){var ee=ce;ce=false;cW.beginShape();cW.vertex(eh,ef);for(ei=eb;ei<=ej;ei++){eg=ei%720;cW.vertex(eh+bl[eg]*en,ef+ah[eg]*ep)}cW.endShape(2);ce=ee}if(ce){var ea=aH;aH=false;cW.beginShape();for(ei=eb;ei<=ej;ei++){eg=ei%720;cW.vertex(eh+bl[eg]*en,ef+ah[eg]*ep)}cW.endShape();aH=ea}};bR.prototype.line=function(eb,ei,ea,eg){if(!ce){return}eb=q.round(eb);ea=q.round(ea);ei=q.round(ei);eg=q.round(eg);if(eb===ea&&ei===eg){cW.point(eb,ei);return}var ec=t,ej=t,ef=true,eh=dJ.array(),ed=[1,0,0,0,1,0];for(var ee=0;ee<6&&ef;ee++){ef=eh[ee]===ed[ee]}if(ef){if(eb===ea){if(ei>eg){ec=ei;ei=eg;eg=ec}eg++;if(dW%2===1){d8.translate(0.5,0)}}else{if(ei===eg){if(eb>ea){ec=eb;eb=ea;ea=ec}ea++;if(dW%2===1){d8.translate(0,0.5)}}}if(dW===1){ej=d8.lineCap;d8.lineCap="butt"}}d8.beginPath();d8.moveTo(eb||0,ei||0);d8.lineTo(ea||0,eg||0);dd();if(ef){if(eb===ea&&dW%2===1){d8.translate(-0.5,0)}else{if(ei===eg&&dW%2===1){d8.translate(0,-0.5)}}if(dW===1){d8.lineCap=ej}}};bB.prototype.line=function(ec,ef,eh,eb,ed,eg){if(ed===t||eg===t){eg=0;ed=eb;eb=eh;eh=0}if(ec===eb&&ef===ed&&eh===eg){cW.point(ec,ef,eh);return}var ee=[ec,ef,eh,eb,ed,eg];var ea=new aP;ea.scale(1,-1,1);ea.apply(dJ.array());ea.transpose();if(dW>0&&ce){d8.useProgram(dQ);a9("uModel2d",dQ,"uModel",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);a9("uView2d",dQ,"uView",false,ea.array());d2("uColor2d",dQ,"uColor",c0);dZ("uIsDrawingText",dQ,"uIsDrawingText",false);dc("aVertex2d",dQ,"aVertex",3,b8);cg("aTextureCoord2d",dQ,"aTextureCoord");d8.bufferData(d8.ARRAY_BUFFER,new e(ee),d8.STREAM_DRAW);d8.drawArrays(d8.LINES,0,2)}};bR.prototype.bezier=function(){if(arguments.length!==8){throw"You must use 8 parameters for bezier() in 2D mode"}cW.beginShape();cW.vertex(arguments[0],arguments[1]);cW.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]);cW.endShape()};bB.prototype.bezier=function(){if(arguments.length!==12){throw"You must use 12 parameters for bezier() in 3D mode"}cW.beginShape();cW.vertex(arguments[0],arguments[1],arguments[2]);cW.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);cW.endShape()};cW.bezierDetail=function(ea){cy=ea};cW.bezierPoint=function(eb,ea,ee,ed,ec){return(1-ec)*(1-ec)*(1-ec)*eb+3*(1-ec)*(1-ec)*ec*ea+3*(1-ec)*ec*ec*ee+ec*ec*ec*ed};cW.bezierTangent=function(eb,ea,ee,ed,ec){return 3*ec*ec*(-eb+3*ea-3*ee+ed)+6*ec*(eb-2*ea+ee)+3*(-eb+ea)};cW.curvePoint=function(eb,ea,ee,ed,ec){return 0.5*(2*ea+(-eb+ee)*ec+(2*eb-5*ea+4*ee-ed)*ec*ec+(-eb+3*ea-3*ee+ed)*ec*ec*ec)};cW.curveTangent=function(eb,ea,ee,ed,ec){return 0.5*(-eb+ee+2*(2*eb-5*ea+4*ee-ed)*ec+3*(-eb+3*ea-3*ee+ed)*ec*ec)};cW.triangle=function(ed,ef,eb,ee,ea,ec){cW.beginShape(9);cW.vertex(ed,ef,0);cW.vertex(eb,ee,0);cW.vertex(ea,ec,0);cW.endShape()};cW.quad=function(ef,eh,ed,eg,eb,ee,ea,ec){cW.beginShape(16);cW.vertex(ef,eh,0);cW.vertex(ed,eg,0);cW.vertex(eb,ee,0);cW.vertex(ea,ec,0);cW.endShape()};var bN=function(eg,ef,ea,eh,ej,ee,ei,eb){if(eb===t){ee=ej;ei=ej;eb=ej}var ec=ea/2,ed=eh/2;if(ej>ec||ej>ed){ej=q.min(ec,ed)}if(ee>ec||ee>ed){ee=q.min(ec,ed)}if(ei>ec||ei>ed){ei=q.min(ec,ed)}if(eb>ec||eb>ed){eb=q.min(ec,ed)}if(!aH||ce){d8.translate(0.5,0.5)}d8.beginPath();d8.moveTo(eg+ej,ef);d8.lineTo(eg+ea-ee,ef);d8.quadraticCurveTo(eg+ea,ef,eg+ea,ef+ee);d8.lineTo(eg+ea,ef+eh-ei);d8.quadraticCurveTo(eg+ea,ef+eh,eg+ea-ei,ef+eh);d8.lineTo(eg+eb,ef+eh);d8.quadraticCurveTo(eg,ef+eh,eg,ef+eh-eb);d8.lineTo(eg,ef+ej);d8.quadraticCurveTo(eg,ef,eg+ej,ef);if(!aH||ce){d8.translate(-0.5,-0.5)}bn();dd()};bR.prototype.rect=function(eb,eh,ee,ea,ec,ef,ed,eg){if(!ee&&!ea){return}if(bK===1){ee-=eb;ea-=eh}else{if(bK===2){ee*=2;ea*=2;eb-=ee/2;eh-=ea/2}else{if(bK===3){eb-=ee/2;eh-=ea/2}}}eb=q.round(eb);eh=q.round(eh);ee=q.round(ee);ea=q.round(ea);if(ec!==t){bN(eb,eh,ee,ea,ec,ef,ed,eg);return}if(ce&&dW%2===1){d8.translate(0.5,0.5)}d8.beginPath();d8.rect(eb,eh,ee,ea);bn();dd();if(ce&&dW%2===1){d8.translate(-0.5,-0.5)}};bB.prototype.rect=function(ei,eh,ea,ek,em,ef,el,eb){if(em!==t){throw"rect() with rounded corners is not supported in 3D mode"}if(bK===1){ea-=ei;ek-=eh}else{if(bK===2){ea*=2;ek*=2;ei-=ea/2;eh-=ek/2}else{if(bK===3){ei-=ea/2;eh-=ek/2}}}var ee=new aP;ee.translate(ei,eh,0);ee.scale(ea,ek,1);ee.transpose();var eg=new aP;eg.scale(1,-1,1);eg.apply(dJ.array());eg.transpose();if(dW>0&&ce){d8.useProgram(dQ);a9("uModel2d",dQ,"uModel",false,ee.array());a9("uView2d",dQ,"uView",false,eg.array());d2("uColor2d",dQ,"uColor",c0);dZ("uIsDrawingText2d",dQ,"uIsDrawingText",false);dc("aVertex2d",dQ,"aVertex",3,aB);cg("aTextureCoord2d",dQ,"aTextureCoord");d8.drawArrays(d8.LINE_LOOP,0,ak.length/3)}if(aH){d8.useProgram(dx);a9("uModel3d",dx,"uModel",false,ee.array());a9("uView3d",dx,"uView",false,eg.array());d8.enable(d8.POLYGON_OFFSET_FILL);d8.polygonOffset(1,1);d2("color3d",dx,"uColor",bo);if(dL>0){var ej=new aP;ej.set(eg);var ec=new aP;ec.set(ee);ej.mult(ec);var ed=new aP;ed.set(ej);ed.invert();ed.transpose();a9("uNormalTransform3d",dx,"uNormalTransform",false,ed.array());dc("aNormal3d",dx,"aNormal",3,b2)}else{cg("normal3d",dx,"aNormal")}dc("vertex3d",dx,"aVertex",3,aB);d8.drawArrays(d8.TRIANGLE_FAN,0,ak.length/3);d8.disable(d8.POLYGON_OFFSET_FILL)}};bR.prototype.ellipse=function(eg,ef,eb,ei){eg=eg||0;ef=ef||0;if(eb<=0&&ei<=0){return}if(cN===2){eb*=2;ei*=2}else{if(cN===1){eb=eb-eg;ei=ei-ef;eg+=eb/2;ef+=ei/2}else{if(cN===0){eg+=eb/2;ef+=ei/2}}}if(eb===ei){d8.beginPath();d8.arc(eg,ef,eb/2,0,6.283185307179586,false);bn();dd()}else{var eh=eb/2,ee=ei/2,ea=0.5522847498307933,ed=ea*eh,ec=ea*ee;cW.beginShape();cW.vertex(eg+eh,ef);cW.bezierVertex(eg+eh,ef-ec,eg+ed,ef-ee,eg,ef-ee);cW.bezierVertex(eg-ed,ef-ee,eg-eh,ef-ec,eg-eh,ef);cW.bezierVertex(eg-eh,ef+ec,eg-ed,ef+ee,eg,ef+ee);cW.bezierVertex(eg+ed,ef+ee,eg+eh,ef+ec,eg+eh,ef);cW.endShape()}};bB.prototype.ellipse=function(en,em,ec,ep){en=en||0;em=em||0;if(ec<=0&&ep<=0){return}if(cN===2){ec*=2;ep*=2}else{if(cN===1){ec=ec-en;ep=ep-em;en+=ec/2;em+=ep/2}else{if(cN===0){en+=ec/2;em+=ep/2}}}var eo=ec/2,ej=ep/2,ea=0.5522847498307933,ee=ea*eo,ed=ea*ej;cW.beginShape();cW.vertex(en+eo,em);cW.bezierVertex(en+eo,em-ed,0,en+ee,em-ej,0,en,em-ej,0);cW.bezierVertex(en-ee,em-ej,0,en-eo,em-ed,0,en-eo,em,0);cW.bezierVertex(en-eo,em+ed,0,en-ee,em+ej,0,en,em+ej,0);cW.bezierVertex(en+ee,em+ej,0,en+eo,em+ed,0,en+eo,em,0);cW.endShape();if(aH){var ef=0,ek=0,eh,eg;for(eh=0;eh<bb.length;eh++){ef+=bb[eh][0];ek+=bb[eh][1]}ef/=bb.length;ek/=bb.length;var ei=[],eb=[],el=[];ei[0]=ef;ei[1]=ek;ei[2]=0;ei[3]=0;ei[4]=0;ei[5]=bo[0];ei[6]=bo[1];ei[7]=bo[2];ei[8]=bo[3];ei[9]=c0[0];ei[10]=c0[1];ei[11]=c0[2];ei[12]=c0[3];ei[13]=a8;ei[14]=a7;ei[15]=a6;bb.unshift(ei);for(eh=0;eh<bb.length;eh++){for(eg=0;eg<3;eg++){eb.push(bb[eh][eg])}for(eg=5;eg<9;eg++){el.push(bb[eh][eg])}}dm(eb,"TRIANGLE_FAN",el)}};cW.normal=function(ea,ec,eb){if(arguments.length!==3||!(typeof ea==="number"&&typeof ec==="number"&&typeof eb==="number")){throw"normal() requires three numeric arguments."}a8=ea;a7=ec;a6=eb;if(dR!==0){if(a2===0){a2=1}else{if(a2===1){a2=2}}}};cW.save=function(eb,ea){if(ea!==t){return D.open(ea.toDataURL(),"_blank")}return D.open(cW.externals.canvas.toDataURL(),"_blank")};var cw=0;cW.saveFrame=function(ea){if(ea===t){ea="screen-####.png"}var eb=ea.replace(/#+/,function(ed){var ec=""+cw++;while(ec.length<ed.length){ec="0"+ec}return ec});cW.save(eb)};var cc=d.createElement("canvas").getContext("2d");var X=[t,t,t];function by(eh,eb,eg){var ed=X.shift();if(ed===t){ed={};ed.canvas=d.createElement("canvas");ed.context=ed.canvas.getContext("2d")}X.push(ed);var ec=ed.canvas,ee=ed.context,ef=eb||eh.width,ea=eg||eh.height;ec.width=ef;ec.height=ea;if(!eh){ee.clearRect(0,0,ef,ea)}else{if("data" in eh){ee.putImageData(eh,0,0)}else{ee.clearRect(0,0,ef,ea);ee.drawImage(eh,0,0,ef,ea)}}return ed}function b0(ea){return{getLength:function(eb){return function(){if(eb.isRemote){throw"Image is loaded remotely. Cannot get length."}else{return eb.imageData.data.length?eb.imageData.data.length/4:0}}}(ea),getPixel:function(eb){return function(ec){var ee=ec*4,ed=eb.imageData.data;if(eb.isRemote){throw"Image is loaded remotely. Cannot get pixels."}return(ed[ee+3]&255)<<24|(ed[ee]&255)<<16|(ed[ee+1]&255)<<8|ed[ee+2]&255}}(ea),setPixel:function(eb){return function(ec,ef){var ee=ec*4,ed=eb.imageData.data;if(eb.isRemote){throw"Image is loaded remotely. Cannot set pixel."}ed[ee+0]=(ef>>16)&255;ed[ee+1]=(ef>>8)&255;ed[ee+2]=ef&255;ed[ee+3]=(ef>>24)&255;eb.__isDirty=true}}(ea),toArray:function(eb){return function(){var ec=[],ef=eb.imageData.data,ee=eb.width*eb.height;if(eb.isRemote){throw"Image is loaded remotely. Cannot get pixels."}for(var ed=0,eg=0;ed<ee;ed++,eg+=4){ec.push((ef[eg+3]&255)<<24|(ef[eg]&255)<<16|(ef[eg+1]&255)<<8|ef[eg+2]&255)}return ec}}(ea),set:function(eb){return function(ec){var eg,ef,eh;if(this.isRemote){throw"Image is loaded remotely. Cannot set pixels."}ef=eb.imageData.data;for(var ed=0,ee=ec.length;ed<ee;ed++){eh=ec[ed];eg=ed*4;ef[eg+0]=(eh>>16)&255;ef[eg+1]=(eh>>8)&255;ef[eg+2]=eh&255;ef[eg+3]=(eh>>24)&255}eb.__isDirty=true}}(ea)}}var cG=function(ed,eg,ee){this.__isDirty=false;if(ed instanceof HTMLImageElement){this.fromHTMLImageData(ed)}else{if(eg||ee){this.width=ed||1;this.height=eg||1;var eb=this.sourceImg=d.createElement("canvas");eb.width=this.width;eb.height=this.height;var eh=this.imageData=eb.getContext("2d").createImageData(this.width,this.height);this.format=ee===2||ee===4?ee:1;if(this.format===1){for(var ec=3,ef=this.imageData.data,ea=ef.length;ec<ea;ec+=4){ef[ec]=255}}this.__isDirty=true;this.updatePixels()}else{this.width=0;this.height=0;this.imageData=cc.createImageData(1,1);this.format=2}}this.pixels=b0(this)};cG.prototype={__isPImage:true,updatePixels:function(){var ea=this.sourceImg;if(ea&&ea instanceof HTMLCanvasElement&&this.__isDirty){ea.getContext("2d").putImageData(this.imageData,0,0)}this.__isDirty=false},fromHTMLImageData:function(ea){var eb=by(ea);try{var ed=eb.context.getImageData(0,0,ea.width,ea.height);this.fromImageData(ed)}catch(ec){if(ea.width&&ea.height){this.isRemote=true;this.width=ea.width;this.height=ea.height}}this.sourceImg=ea},get:function(ea,ed,eb,ec){if(!arguments.length){return cW.get(this)}if(arguments.length===2){return cW.get(ea,ed,this)}if(arguments.length===4){return cW.get(ea,ed,eb,ec,this)}},set:function(ea,ec,eb){cW.set(ea,ec,eb,this);this.__isDirty=true},blend:function(ei,ee,ed,eb,eg,ej,eh,ef,ea,ec){if(arguments.length===9){cW.blend(this,ei,ee,ed,eb,eg,ej,eh,ef,ea,this)}else{if(arguments.length===10){cW.blend(ei,ee,ed,eb,eg,ej,eh,ef,ea,ec,this)}}delete this.sourceImg},copy:function(eh,ee,ed,ec,eb,ei,eg,ef,ea){if(arguments.length===8){cW.blend(this,eh,ee,ed,ec,eb,ei,eg,ef,0,this)}else{if(arguments.length===9){cW.blend(eh,ee,ed,ec,eb,ei,eg,ef,ea,0,this)}}delete this.sourceImg},filter:function(eb,ea){if(arguments.length===2){cW.filter(eb,ea,this)}else{if(arguments.length===1){cW.filter(eb,null,this)}}delete this.sourceImg},save:function(ea){cW.save(ea,this)},resize:function(ea,ec){if(this.isRemote){throw"Image is loaded remotely. Cannot resize."}if(this.width!==0||this.height!==0){if(ea===0&&ec!==0){ea=q.floor(this.width/this.height*ec)}else{if(ec===0&&ea!==0){ec=q.floor(this.height/this.width*ea)}}var eb=by(this.imageData).canvas;var ed=by(eb,ea,ec).context.getImageData(0,0,ea,ec);this.fromImageData(ed)}},mask:function(ea){var ed=this.toImageData(),ec,eb;if(ea instanceof cG||ea.__isPImage){if(ea.width===this.width&&ea.height===this.height){ea=ea.toImageData();for(ec=2,eb=this.width*this.height*4;ec<eb;ec+=4){ed.data[ec+1]=ea.data[ec]}}else{throw"mask must have the same dimensions as PImage."}}else{if(ea instanceof Array){if(this.width*this.height===ea.length){for(ec=0,eb=ea.length;ec<eb;++ec){ed.data[ec*4+3]=ea[ec]}}else{throw"mask array must be the same length as PImage pixels array."}}}this.fromImageData(ed)},loadPixels:G,toImageData:function(){if(this.isRemote){return this.sourceImg}if(!this.__isDirty){return this.imageData}var ea=by(this.sourceImg);return ea.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote){throw"Image is loaded remotely. Cannot create dataURI."}var ea=by(this.imageData);return ea.canvas.toDataURL()},fromImageData:function(ee){var eb=ee.width,ed=ee.height,ec=d.createElement("canvas"),ea=ec.getContext("2d");this.width=ec.width=eb;this.height=ec.height=ed;ea.putImageData(ee,0,0);this.format=2;this.imageData=ee;this.sourceImg=ec}};cW.PImage=cG;cW.createImage=function(ea,eb,ec){return new cG(ea,eb,ec)};cW.loadImage=function(eb,ec,ee){if(ec){eb=eb+"."+ec}var ed;if(cQ.imageCache.images[eb]){ed=new cG(cQ.imageCache.images[eb]);ed.loaded=true;return ed}ed=new cG;var ea=d.createElement("img");ed.sourceImg=ea;ea.onload=function(ei,eg,ef){var ej=ei;var eh=eg;var ek=ef;return function(){eh.fromHTMLImageData(ej);eh.loaded=true;if(ek){ek()}}}(ea,ed,ee);ea.src=eb;return ed};cW.requestImage=cW.loadImage;function c9(ea,ed){var eb;if(ea>=cW.width||ea<0||ed<0||ed>=cW.height){return 0}if(dV){var ec=((0|ea)+cW.width*(0|ed))*4;eb=cW.imageData.data;return(eb[ec+3]&255)<<24|(eb[ec]&255)<<16|(eb[ec+1]&255)<<8|eb[ec+2]&255}eb=cW.toImageData(0|ea,0|ed,1,1).data;return(eb[3]&255)<<24|(eb[0]&255)<<16|(eb[1]&255)<<8|eb[2]&255}function c8(ea,ee,eb){if(eb.isRemote){throw"Image is loaded remotely. Cannot get x,y."}var ed=ee*eb.width*4+ea*4,ec=eb.imageData.data;return(ec[ed+3]&255)<<24|(ec[ed]&255)<<16|(ec[ed+1]&255)<<8|ec[ed+2]&255}function c6(ea,ee,eb,ec){var ed=new cG(eb,ec,2);ed.fromImageData(cW.toImageData(ea,ee,eb,ec));return ed}function c5(ef,ee,eg,el,er){if(er.isRemote){throw"Image is loaded remotely. Cannot get x,y,w,h."}var ep=new cG(eg,el,2),ec=ep.imageData.data,ed=er.width,em=er.height,eo=er.imageData.data;var ea=q.max(0,-ee),eb=q.max(0,-ef),eh=q.min(el,em-ee),ei=q.min(eg,ed-ef);for(var ek=ea;ek<eh;++ek){var en=((ee+ek)*ed+(ef+eb))*4;var eq=(ek*eg+eb)*4;for(var ej=eb;ej<ei;++ej){ec[eq++]=eo[en++];ec[eq++]=eo[en++];ec[eq++]=eo[en++];ec[eq++]=eo[en++]}}ep.__isDirty=true;return ep}cW.get=function(ea,ee,eb,ed,ec){if(ec!==undefined){return c5(ea,ee,eb,ed,ec)}if(ed!==undefined){return c6(ea,ee,eb,ed)}if(eb!==undefined){return c8(ea,ee,eb)}if(ee!==undefined){return c9(ea,ee)}if(ea!==undefined){return c5(0,0,ea.width,ea.height,ea)}return c6(0,0,cW.width,cW.height)};cW.createGraphics=function(ea,ec,eb){var ed=new F;ed.size(ea,ec,eb);ed.background(0,0);return ed};function T(){if(dV){d8=aj;dV=false;cW.updatePixels()}}function cq(){function eb(ef,ed){function ee(){T();d8[ed].apply(d8,arguments)}ef[ed]=ee}function ea(eg,ee){function ed(){T();return d8[ee]}function ef(eh){T();d8[ee]=eh}cW.defineProperty(eg,ee,{get:ed,set:ef})}for(var ec in d8){if(typeof d8[ec]==="function"){eb(this,ec)}else{ea(this,ec)}}}function cC(){if(dV){return}cW.loadPixels();if(cn===null){aj=d8;cn=new cq}dV=true;d8=cn;d3=0}function bx(ea,ec,eb){if(ea<cW.width&&ea>=0&&ec>=0&&ec<cW.height){cC();cW.pixels.setPixel((0|ea)+cW.width*(0|ec),eb);if(++d3>bZ){T()}}}function bv(ea,eg,ed,eb){if(eb.isRemote){throw"Image is loaded remotely. Cannot set x,y."}var ef=cW.color.toArray(ed);var ee=eg*eb.width*4+ea*4;var ec=eb.imageData.data;ec[ee]=ef[0];ec[ee+1]=ef[1];ec[ee+2]=ef[2];ec[ee+3]=ef[3]}cW.set=function(ea,ef,ed,ec){var eb,ee;if(arguments.length===3){if(typeof ed==="number"){bx(ea,ef,ed)}else{if(ed instanceof cG||ed.__isPImage){cW.image(ed,ea,ef)}}}else{if(arguments.length===4){bv(ea,ef,ed,ec)}}};cW.imageData={};cW.pixels={getLength:function(){return cW.imageData.data.length?cW.imageData.data.length/4:0},getPixel:function(ea){var ec=ea*4,eb=cW.imageData.data;return eb[ec+3]<<24&4278190080|eb[ec+0]<<16&16711680|eb[ec+1]<<8&65280|eb[ec+2]&255},setPixel:function(ea,ed){var ec=ea*4,eb=cW.imageData.data;eb[ec+0]=(ed&16711680)>>>16;eb[ec+1]=(ed&65280)>>>8;eb[ec+2]=ed&255;eb[ec+3]=(ed&4278190080)>>>24},toArray:function(){var ea=[],ec=cW.imageData.width*cW.imageData.height,ed=cW.imageData.data;for(var eb=0,ee=0;eb<ec;eb++,ee+=4){ea.push(ed[ee+3]<<24&4278190080|ed[ee+0]<<16&16711680|ed[ee+1]<<8&65280|ed[ee+2]&255)}return ea},set:function(ea){for(var eb=0,ec=ea.length;eb<ec;eb++){this.setPixel(eb,ea[eb])}}};cW.loadPixels=function(){cW.imageData=dY.$ensureContext().getImageData(0,0,cW.width,cW.height)};cW.updatePixels=function(){if(cW.imageData){dY.$ensureContext().putImageData(cW.imageData,0,0)}};cW.hint=function(eb){var ea=dY.$ensureContext();if(eb===4){ea.disable(ea.DEPTH_TEST);ea.depthMask(false);ea.clear(ea.DEPTH_BUFFER_BIT)}else{if(eb===-4){ea.enable(ea.DEPTH_TEST);ea.depthMask(true)}else{if(eb===-1||eb===2){dO=true}else{if(eb===1){dO=false}}}}};var bE=function(ed,ec,eb,ea){var ee;if(ed instanceof cG||ed.__isPImage){ee=ed;if(!ee.loaded){throw"Error using image in background(): PImage not loaded."}if(ee.width!==cW.width||ee.height!==cW.height){throw"Background image must be the same dimensions as the canvas."}}else{ee=cW.color(ed,ec,eb,ea)}a4=ee};bR.prototype.background=function(ed,ec,eb,ea){if(ed!==t){bE(ed,ec,eb,ea)}if(a4 instanceof cG||a4.__isPImage){aD();d8.setTransform(1,0,0,1,0,0);cW.image(a4,0,0);cP()}else{aD();d8.setTransform(1,0,0,1,0,0);if(cW.alpha(a4)!==bU){d8.clearRect(0,0,cW.width,cW.height)}d8.fillStyle=cW.color.toString(a4);d8.fillRect(0,0,cW.width,cW.height);aq=true;cP()}};bB.prototype.background=function(ed,ec,eb,ea){if(arguments.length>0){bE(ed,ec,eb,ea)}var ee=cW.color.toGLArray(a4);d8.clearColor(ee[0],ee[1],ee[2],ee[3]);d8.clear(d8.COLOR_BUFFER_BIT|d8.DEPTH_BUFFER_BIT)};bR.prototype.image=function(ed,ei,eg,ej,ee){ei=q.round(ei);eg=q.round(eg);if(ed.width>0){var ek=ej||ed.width;var eh=ee||ed.height;var ea=bk(ei||0,eg||0,ej||ed.width,ee||ed.height,arguments.length<4);var ef=!!ed.sourceImg&&bf===null;if(ef){var eb=ed.sourceImg;if(ed.__isDirty){ed.updatePixels()}d8.drawImage(eb,0,0,eb.width,eb.height,ea.x,ea.y,ea.w,ea.h)}else{var ec=ed.toImageData();if(bf!==null){bf(ec);ed.__isDirty=true}d8.drawImage(by(ec).canvas,0,0,ed.width,ed.height,ea.x,ea.y,ea.w,ea.h)}}};bB.prototype.image=function(ec,ea,ee,eb,ed){if(ec.width>0){ea=q.round(ea);ee=q.round(ee);eb=eb||ec.width;ed=ed||ec.height;cW.beginShape(cW.QUADS);cW.texture(ec);cW.vertex(ea,ee,0,0,0);cW.vertex(ea,ee+ed,0,0,ed);cW.vertex(ea+eb,ee+ed,0,eb,ed);cW.vertex(ea+eb,ee,0,eb,0);cW.endShape()}};cW.tint=function(ed,ec,ea,ei){var ef=cW.color(ed,ec,ea,ei);var eb=cW.red(ef)/bJ;var ee=cW.green(ef)/bI;var eg=cW.blue(ef)/bG;var eh=cW.alpha(ef)/bU;bf=function(em){var el=em.data,ek=4*em.width*em.height;for(var ej=0;ej<ek;){el[ej++]*=eb;el[ej++]*=ee;el[ej++]*=eg;el[ej++]*=eh}};bw=function(ek){for(var ej=0;ej<ek.length;){ek[ej++]=eb;ek[ej++]=ee;ek[ej++]=eg;ek[ej++]=eh}}};cW.noTint=function(){bf=null;bw=null};cW.copy=function(ea,ef,ee,eg,ec,ei,eh,eb,ed){if(ed===t){ed=eb;eb=eh;eh=ei;ei=ec;ec=eg;eg=ee;ee=ef;ef=ea;ea=cW}cW.blend(ea,ef,ee,eg,ec,ei,eh,eb,ed,0)};cW.blend=function(ea,ek,ej,en,ef,ep,eo,eb,eh,eg,ed){if(ea.isRemote){throw"Image is loaded remotely. Cannot blend image."}if(eg===t){eg=eh;eh=eb;eb=eo;eo=ep;ep=ef;ef=en;en=ej;ej=ek;ek=ea;ea=cW}var ec=ek+en,ei=ej+ef,em=ep+eb,ee=eo+eh,el=ed||cW;if(ed===t||eg===t){cW.loadPixels()}ea.loadPixels();if(ea===cW&&cW.intersect(ek,ej,ec,ei,ep,eo,em,ee)){cW.blit_resize(cW.get(ek,ej,ec-ek,ei-ej),0,0,ec-ek-1,ei-ej-1,el.imageData.data,el.width,el.height,ep,eo,em,ee,eg)}else{cW.blit_resize(ea,ek,ej,ec,ei,el.imageData.data,el.width,el.height,ep,eo,em,ee,eg)}if(ed===t){cW.updatePixels()}};var bp=function(ee){var ea=cW.floor(ee*3.5),ec,eb;ea=ea<1?1:ea<248?ea:248;if(cW.shared.blurRadius!==ea){cW.shared.blurRadius=ea;cW.shared.blurKernelSize=1+(cW.shared.blurRadius<<1);cW.shared.blurKernel=new e(cW.shared.blurKernelSize);var eg=cW.shared.blurKernel;var ef=cW.shared.blurKernelSize;var ed=cW.shared.blurRadius;for(ec=0;ec<ef;ec++){eg[ec]=0}var eh=(ea-1)*(ea-1);for(ec=1;ec<ea;ec++){eg[ea+ec]=eg[eb]=eh}eg[ea]=ea*ea}};var b7=function(eo,et){var ec,ef,el,eq,er,eA,es;var ev,en,ez,ey,ep;var ei=et.pixels.getLength();var eu=new e(ei);var eD=new e(ei);var eh=new e(ei);var eC=new e(ei);var eB=0;var ek,ej,ex,ee;bp(eo);var eb=et.height;var ea=et.width;var ew=cW.shared.blurKernelSize;var em=cW.shared.blurRadius;var eg=cW.shared.blurKernel;var ed=et.imageData.data;for(ej=0;ej<eb;ej++){for(ek=0;ek<ea;ek++){eq=el=ef=er=ec=0;ev=ek-em;if(ev<0){ep=-ev;ev=0}else{if(ev>=ea){break}ep=0}for(ex=ep;ex<ew;ex++){if(ev>=ea){break}ee=(ev+eB)*4;es=eg[ex];er+=es*ed[ee+3];ef+=es*ed[ee];el+=es*ed[ee+1];eq+=es*ed[ee+2];ec+=es;ev++}en=eB+ek;eC[en]=er/ec;eu[en]=ef/ec;eD[en]=el/ec;eh[en]=eq/ec}eB+=ea}eB=0;ez=-em;ey=ez*ea;for(ej=0;ej<eb;ej++){for(ek=0;ek<ea;ek++){eq=el=ef=er=ec=0;if(ez<0){ep=en=-ez;ev=ek}else{if(ez>=eb){break}ep=0;en=ez;ev=ek+ey}for(ex=ep;ex<ew;ex++){if(en>=eb){break}es=eg[ex];er+=es*eC[ev];ef+=es*eu[ev];el+=es*eD[ev];eq+=es*eh[ev];ec+=es;en++;ev+=ea}ee=(ek+eB)*4;ed[ee]=ef/ec;ed[ee+1]=el/ec;ed[ee+2]=eq/ec;ed[ee+3]=er/ec}eB+=ea;ey+=ea;ez++}};var cf=function(er,el){var eh=0;var ev=el.pixels.getLength();var em=new K(ev);var ep,eb,ek,ej,ed;var eq,ee,eg,ei,ec,en,eu,ea,es,ef,et,eo;if(!er){while(eh<ev){ep=eh;eb=eh+el.width;while(eh<eb){ek=ej=el.pixels.getPixel(eh);ee=eh-1;eq=eh+1;eg=eh-el.width;ei=eh+el.width;if(ee<ep){ee=eh}if(eq>=eb){eq=eh}if(eg<0){eg=0}if(ei>=ev){ei=eh}eu=el.pixels.getPixel(eg);en=el.pixels.getPixel(ee);ea=el.pixels.getPixel(ei);ec=el.pixels.getPixel(eq);ed=77*(ek>>16&255)+151*(ek>>8&255)+28*(ek&255);ef=77*(en>>16&255)+151*(en>>8&255)+28*(en&255);es=77*(ec>>16&255)+151*(ec>>8&255)+28*(ec&255);et=77*(eu>>16&255)+151*(eu>>8&255)+28*(eu&255);eo=77*(ea>>16&255)+151*(ea>>8&255)+28*(ea&255);if(ef>ed){ej=en;ed=ef}if(es>ed){ej=ec;ed=es}if(et>ed){ej=eu;ed=et}if(eo>ed){ej=ea;ed=eo}em[eh++]=ej}}}else{while(eh<ev){ep=eh;eb=eh+el.width;while(eh<eb){ek=ej=el.pixels.getPixel(eh);ee=eh-1;eq=eh+1;eg=eh-el.width;ei=eh+el.width;if(ee<ep){ee=eh}if(eq>=eb){eq=eh}if(eg<0){eg=0}if(ei>=ev){ei=eh}eu=el.pixels.getPixel(eg);en=el.pixels.getPixel(ee);ea=el.pixels.getPixel(ei);ec=el.pixels.getPixel(eq);ed=77*(ek>>16&255)+151*(ek>>8&255)+28*(ek&255);ef=77*(en>>16&255)+151*(en>>8&255)+28*(en&255);es=77*(ec>>16&255)+151*(ec>>8&255)+28*(ec&255);et=77*(eu>>16&255)+151*(eu>>8&255)+28*(eu&255);eo=77*(ea>>16&255)+151*(ea>>8&255)+28*(ea&255);if(ef<ed){ej=en;ed=ef}if(es<ed){ej=ec;ed=es}if(et<ed){ej=eu;ed=et}if(eo<ed){ej=ea;ed=eo}em[eh++]=ej}}}el.pixels.set(em)};cW.filter=function(eh,eg,ed){var ek,ef,eb,ej;if(arguments.length===3){ed.loadPixels();ek=ed}else{cW.loadPixels();ek=cW}if(eg===t){eg=null}if(ek.isRemote){throw"Image is loaded remotely. Cannot filter image."}var el=ek.pixels.getLength();switch(eh){case 11:var em=eg||1;b7(em,ek);break;case 12:if(ek.format===4){for(ej=0;ej<el;ej++){ef=255-ek.pixels.getPixel(ej);ek.pixels.setPixel(ej,4278190080|ef<<16|ef<<8|ef)}ek.format=1}else{for(ej=0;ej<el;ej++){ef=ek.pixels.getPixel(ej);eb=77*(ef>>16&255)+151*(ef>>8&255)+28*(ef&255)>>8;ek.pixels.setPixel(ej,ef&4278190080|eb<<16|eb<<8|eb)}}break;case 13:for(ej=0;ej<el;ej++){ek.pixels.setPixel(ej,ek.pixels.getPixel(ej)^16777215)}break;case 15:if(eg===null){throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"}var ep=cW.floor(eg);if(ep<2||ep>255){throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"}var ei=ep-1;for(ej=0;ej<el;ej++){var ea=ek.pixels.getPixel(ej)>>16&255;var en=ek.pixels.getPixel(ej)>>8&255;var ec=ek.pixels.getPixel(ej)&255;ea=(ea*ep>>8)*255/ei;en=(en*ep>>8)*255/ei;ec=(ec*ep>>8)*255/ei;ek.pixels.setPixel(ej,4278190080&ek.pixels.getPixel(ej)|ea<<16|en<<8|ec)}break;case 14:for(ej=0;ej<el;ej++){ek.pixels.setPixel(ej,ek.pixels.getPixel(ej)|4278190080)}ek.format=1;break;case 16:if(eg===null){eg=0.5}if(eg<0||eg>1){throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"}var ee=cW.floor(eg*255);for(ej=0;ej<el;ej++){var eo=cW.max((ek.pixels.getPixel(ej)&16711680)>>16,cW.max((ek.pixels.getPixel(ej)&65280)>>8,ek.pixels.getPixel(ej)&255));ek.pixels.setPixel(ej,ek.pixels.getPixel(ej)&4278190080|(eo<ee?0:16777215))}break;case 17:cf(true,ek);break;case 18:cf(false,ek);break}ek.updatePixels()};cW.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null};cW.intersect=function(ec,ej,eb,ei,en,eg,em,ef){var el=eb-ec+1;var ee=ei-ej+1;var ea=em-en+1;var eh=ef-eg+1;if(en<ec){ea+=en-ec;if(ea>el){ea=el}}else{var ek=el+ec-en;if(ea>ek){ea=ek}}if(eg<ej){eh+=eg-ej;if(eh>ee){eh=ee}}else{var ed=ee+ej-eg;if(eh>ed){eh=ed}}return !(ea<=0||eh<=0)};var dS={};dS[1]=cW.modes.blend;dS[2]=cW.modes.add;dS[4]=cW.modes.subtract;dS[8]=cW.modes.lightest;dS[16]=cW.modes.darkest;dS[0]=cW.modes.replace;dS[32]=cW.modes.difference;dS[64]=cW.modes.exclusion;dS[128]=cW.modes.multiply;dS[256]=cW.modes.screen;dS[512]=cW.modes.overlay;dS[1024]=cW.modes.hard_light;dS[2048]=cW.modes.soft_light;dS[4096]=cW.modes.dodge;dS[8192]=cW.modes.burn;cW.blit_resize=function(en,ez,et,ey,es,eE,ej,er,ex,eo,ew,em,ep){var eC,eB;if(ez<0){ez=0}if(et<0){et=0}if(ey>=en.width){ey=en.width-1}if(es>=en.height){es=en.height-1}var eI=ey-ez;var eN=es-et;var ea=ew-ex;var ek=em-eo;if(ea<=0||ek<=0||eI<=0||eN<=0||ex>=ej||eo>=er||ez>=en.width||et>=en.height){return}var eh=q.floor(eI/ea*32768);var ee=q.floor(eN/ek*32768);var eG=cW.shared;eG.srcXOffset=q.floor(ex<0?-ex*eh:ez*32768);eG.srcYOffset=q.floor(eo<0?-eo*ee:et*32768);if(ex<0){ea+=ex;ex=0}if(eo<0){ek+=eo;eo=0}ea=q.min(ea,ej-ex);ek=q.min(ek,er-eo);var eu=eo*ej+ex;var eQ;eG.srcBuffer=en.imageData.data;eG.iw=en.width;eG.iw1=en.width-1;eG.ih1=en.height-1;var ev=cW.filter_bilinear,eK=cW.filter_new_scanline,ei=dS[ep],eH,eM,eF,eJ,ec,ed,eb=4278190080,eL=16711680,eA=65280,eg=255,eP=32767,eD=15,el=1,eq=9,ef=eG.srcBuffer,eO=q.min;for(eB=0;eB<ek;eB++){eG.sX=eG.srcXOffset;eG.fracV=eG.srcYOffset&eP;eG.ifV=eP-eG.fracV;eG.v1=(eG.srcYOffset>>eD)*eG.iw;eG.v2=eO((eG.srcYOffset>>eD)+1,eG.ih1)*eG.iw;for(eC=0;eC<ea;eC++){eM=(eu+eC)*4;eQ=eE[eM+3]<<24&eb|eE[eM]<<16&eL|eE[eM+1]<<8&eA|eE[eM+2]&eg;eG.fracU=eG.sX&eP;eG.ifU=eP-eG.fracU;eG.ul=eG.ifU*eG.ifV>>eD;eG.ll=eG.ifU*eG.fracV>>eD;eG.ur=eG.fracU*eG.ifV>>eD;eG.lr=eG.fracU*eG.fracV>>eD;eG.u1=eG.sX>>eD;eG.u2=eO(eG.u1+1,eG.iw1);eF=(eG.v1+eG.u1)*4;eJ=(eG.v1+eG.u2)*4;ec=(eG.v2+eG.u1)*4;ed=(eG.v2+eG.u2)*4;eG.cUL=ef[eF+3]<<24&eb|ef[eF]<<16&eL|ef[eF+1]<<8&eA|ef[eF+2]&eg;eG.cUR=ef[eJ+3]<<24&eb|ef[eJ]<<16&eL|ef[eJ+1]<<8&eA|ef[eJ+2]&eg;eG.cLL=ef[ec+3]<<24&eb|ef[ec]<<16&eL|ef[ec+1]<<8&eA|ef[ec+2]&eg;eG.cLR=ef[ed+3]<<24&eb|ef[ed]<<16&eL|ef[ed+1]<<8&eA|ef[ed+2]&eg;eG.r=eG.ul*((eG.cUL&eL)>>16)+eG.ll*((eG.cLL&eL)>>16)+eG.ur*((eG.cUR&eL)>>16)+eG.lr*((eG.cLR&eL)>>16)<<el&eL;eG.g=eG.ul*(eG.cUL&eA)+eG.ll*(eG.cLL&eA)+eG.ur*(eG.cUR&eA)+eG.lr*(eG.cLR&eA)>>>eD&eA;eG.b=eG.ul*(eG.cUL&eg)+eG.ll*(eG.cLL&eg)+eG.ur*(eG.cUR&eg)+eG.lr*(eG.cLR&eg)>>>eD;eG.a=eG.ul*((eG.cUL&eb)>>>24)+eG.ll*((eG.cLL&eb)>>>24)+eG.ur*((eG.cUR&eb)>>>24)+eG.lr*((eG.cLR&eb)>>>24)<<eq&eb;eH=ei(eQ,eG.a|eG.r|eG.g|eG.b);eE[eM]=(eH&eL)>>>16;eE[eM+1]=(eH&eA)>>>8;eE[eM+2]=eH&eg;eE[eM+3]=(eH&eb)>>>24;eG.sX+=eh}eu+=ej;eG.srcYOffset+=ee}};cW.loadFont=function(eb,ec){if(eb===t){throw"font name required in loadFont."}if(eb.indexOf(".svg")===-1){if(ec===t){ec=W.size}return H.get(eb,ec)}var ea=cW.loadGlyphs(eb);return{name:eb,css:"12px sans-serif",glyph:true,units_per_em:ea.units_per_em,horiz_adv_x:1/ea.units_per_em*ea.horiz_adv_x,ascent:ea.ascent,descent:ea.descent,width:function(eh){var ef=0;var ed=eh.length;for(var ee=0;ee<ed;ee++){try{ef+=parseFloat(cW.glyphLook(cW.glyphTable[eb],eh[ee]).horiz_adv_x)}catch(eg){F.debug(eg)}}return ef/cW.glyphTable[eb].units_per_em}}};cW.createFont=function(ea,eb){return cW.loadFont(ea,eb)};cW.textFont=function(ea,ec){if(ec!==t){if(!ea.glyph){ea=H.get(ea.name,ec)}d0=ec}W=ea;Y=W.name;a3=W.ascent;dA=W.descent;d7=W.leading;var eb=dY.$ensureContext();eb.font=W.css};cW.textSize=function(eb){W=H.get(Y,eb);d0=eb;a3=W.ascent;dA=W.descent;d7=W.leading;var ea=dY.$ensureContext();ea.font=W.css};cW.textAscent=function(){return a3};cW.textDescent=function(){return dA};cW.textLeading=function(ea){d7=ea};cW.textAlign=function(eb,ea){N=eb;c1=ea||0};function bu(ea){if(ea instanceof String){return ea}if(typeof ea==="number"){if(ea===(0|ea)){return ea.toString()}return cW.nf(ea,0,3)}if(ea===null||ea===t){return""}return ea.toString()}bR.prototype.textWidth=function(ee){var ea=bu(ee).split(/\r?\n/g),ec=0;var eb,ed=ea.length;d8.font=W.css;for(eb=0;eb<ed;++eb){ec=q.max(ec,W.measureTextWidth(ea[eb]))}return ec|0};bB.prototype.textWidth=function(ef){var ea=bu(ef).split(/\r?\n/g),ed=0;var ec,ee=ea.length;if(cE===t){cE=d.createElement("canvas")}var eb=cE.getContext("2d");eb.font=W.css;for(ec=0;ec<ee;++ec){ed=q.max(ed,eb.measureText(ea[ec]).width)}return ed|0};cW.glyphLook=function(ea,eb){try{switch(eb){case"1":return ea.one;case"2":return ea.two;case"3":return ea.three;case"4":return ea.four;case"5":return ea.five;case"6":return ea.six;case"7":return ea.seven;case"8":return ea.eight;case"9":return ea.nine;case"0":return ea.zero;case" ":return ea.space;case"$":return ea.dollar;case"!":return ea.exclam;case'"':return ea.quotedbl;case"#":return ea.numbersign;case"%":return ea.percent;case"&":return ea.ampersand;case"'":return ea.quotesingle;case"(":return ea.parenleft;case")":return ea.parenright;case"*":return ea.asterisk;case"+":return ea.plus;case",":return ea.comma;case"-":return ea.hyphen;case".":return ea.period;case"/":return ea.slash;case"_":return ea.underscore;case":":return ea.colon;case";":return ea.semicolon;case"<":return ea.less;case"=":return ea.equal;case">":return ea.greater;case"?":return ea.question;case"@":return ea.at;case"[":return ea.bracketleft;case"\\":return ea.backslash;case"]":return ea.bracketright;case"^":return ea.asciicircum;case"`":return ea.grave;case"{":return ea.braceleft;case"|":return ea.bar;case"}":return ea.braceright;case"~":return ea.asciitilde;default:return ea[eb]}}catch(ec){F.debug(ec)}};bR.prototype.text$line=function(ei,el,ek,ej,ef){var eh=0,eg=0;if(!W.glyph){if(ei&&"fillText" in d8){if(aq){d8.fillStyle=cW.color.toString(a1);aq=false}if(ef===39||ef===3){eh=W.measureTextWidth(ei);if(ef===39){eg=-eh}else{eg=-eh/2}}d8.fillText(ei,el+eg,ek)}}else{var ea=cW.glyphTable[Y];aD();d8.translate(el,ek+d0);if(ef===39||ef===3){eh=ea.width(ei);if(ef===39){eg=-eh}else{eg=-eh/2}}var em=ea.units_per_em,ee=1/em*d0;d8.scale(ee,ee);for(var eb=0,ec=ei.length;eb<ec;eb++){try{cW.glyphLook(ea,ei[eb]).draw()}catch(ed){F.debug(ed)}}cP()}};bB.prototype.text$line=function(eh,el,ek,ei,ef){if(cE===t){cE=d.createElement("canvas")}var eb=d8;d8=cE.getContext("2d");d8.font=W.css;var eg=W.measureTextWidth(eh);cE.width=eg;cE.height=d0;d8=cE.getContext("2d");d8.font=W.css;d8.textBaseline="top";bR.prototype.text$line(eh,0,0,0,37);var ea=cE.width/cE.height;d8=eb;d8.bindTexture(d8.TEXTURE_2D,bS);d8.texImage2D(d8.TEXTURE_2D,0,d8.RGBA,d8.RGBA,d8.UNSIGNED_BYTE,cE);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MAG_FILTER,d8.LINEAR);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MIN_FILTER,d8.LINEAR);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_WRAP_T,d8.CLAMP_TO_EDGE);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_WRAP_S,d8.CLAMP_TO_EDGE);var ee=0;if(ef===39){ee=-eg}else{if(ef===3){ee=-eg/2}}var ec=new aP;var ed=d0*0.5;ec.translate(el+ee-ed/2,ek-ed,ei);ec.scale(-ea*ed,-ed,ed);ec.translate(-1,-1,-1);ec.transpose();var ej=new aP;ej.scale(1,-1,1);ej.apply(dJ.array());ej.transpose();d8.useProgram(dQ);dc("aVertex2d",dQ,"aVertex",3,cH);dc("aTextureCoord2d",dQ,"aTextureCoord",2,ac);dZ("uSampler2d",dQ,"uSampler",[0]);dZ("uIsDrawingText2d",dQ,"uIsDrawingText",true);a9("uModel2d",dQ,"uModel",false,ec.array());a9("uView2d",dQ,"uView",false,ej.array());d2("uColor2d",dQ,"uColor",bo);d8.bindBuffer(d8.ELEMENT_ARRAY_BUFFER,R);d8.drawElements(d8.TRIANGLES,6,d8.UNSIGNED_SHORT,0)};function bi(ed,eg,ef,ee){var ei,ec;if(ed.indexOf("\n")<0){ei=[ed];ec=1}else{ei=ed.split(/\r?\n/g);ec=ei.length}var ea=0;if(c1===101){ea=a3+dA}else{if(c1===3){ea=a3/2-(ec-1)*d7/2}else{if(c1===102){ea=-(dA+(ec-1)*d7)}}}for(var eb=0;eb<ec;++eb){var eh=ei[eb];dY.text$line(eh,eg,ef+ea,ee,N);ea+=d7}}function bd(eq,el,ek,ep,en,ej){if(eq.length===0||ep===0||en===0){return}if(d0>en){return}var em=-1;var ee=0;var ea=0;var eg=[];for(var ef=0,es=eq.length;ef<es;ef++){var eh=eq[ef];var ev=eh===" ";var eo=W.measureTextWidth(eh);if(eh!=="\n"&&ea+eo<=ep){if(ev){em=ef}ea+=eo}else{if(em+1===ee){if(ef>0){em=ef}else{return}}if(eh==="\n"){eg.push({text:eq.substring(ee,ef),width:ea});ee=ef+1}else{eg.push({text:eq.substring(ee,em+1),width:ea});ee=em+1}ea=0;ef=ee-1}}if(ee<es){eg.push({text:eq.substring(ee),width:ea})}var eu=1,ei=a3;if(N===3){eu=ep/2}else{if(N===39){eu=ep}}var er=eg.length,eb=q.min(er,q.floor(en/d7));if(c1===101){ei=a3+dA}else{if(c1===3){ei=en/2-d7*(eb/2-1)}else{if(c1===102){ei=dA+d7}}}var ec,ed,et;for(ec=0;ec<er;ec++){et=ec*d7;if(ei+et>en-dA){break}ed=eg[ec];dY.text$line(ed.text,el+eu,ek+ei+et,ej,N)}}cW.text=function(){if(cI===5){return}if(arguments.length===3){bi(bu(arguments[0]),arguments[1],arguments[2],0)}else{if(arguments.length===4){bi(bu(arguments[0]),arguments[1],arguments[2],arguments[3])}else{if(arguments.length===5){bd(bu(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0)}else{if(arguments.length===6){bd(bu(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}}};cW.textMode=function(ea){cI=ea};cW.loadGlyphs=function(eg){var ei,eh,ee,ec,ep,eo,en,eq,ek,er,el,em="[0-9\\-]+",ej;var ef=function(ex,ew){var eu=0,et=[],es,ev=new RegExp(ex,"g");es=et[eu]=ev.exec(ew);while(es){eu++;es=et[eu]=ev.exec(ew)}return et};var eb=function(ex){var ey=ef("[A-Za-z][0-9\\- ]+|Z",ex);var ew=function(){aD();return dY.$ensureContext()};var eu=function(){bn();dd();cP()};ej="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";ei=0;eh=0;ee=0;ec=0;ep=0;eo=0;ex=0;eq=0;ek="";er=ey.length-1;for(var et=0;et<er;et++){var es=ey[et][0],ev=ef(em,es);switch(es[0]){case"M":ei=parseFloat(ev[0][0]);eh=parseFloat(ev[1][0]);ej+="curContext.moveTo("+ei+","+-eh+");";break;case"L":ei=parseFloat(ev[0][0]);eh=parseFloat(ev[1][0]);ej+="curContext.lineTo("+ei+","+-eh+");";break;case"H":ei=parseFloat(ev[0][0]);ej+="curContext.lineTo("+ei+","+-eh+");";break;case"V":eh=parseFloat(ev[0][0]);ej+="curContext.lineTo("+ei+","+-eh+");";break;case"T":ep=parseFloat(ev[0][0]);eo=parseFloat(ev[1][0]);if(ek==="Q"||ek==="T"){ex=q.sqrt(q.pow(ei-ee,2)+q.pow(ec-eh,2));eq=q.PI+q.atan2(ee-ei,ec-eh);ee=ei+q.sin(eq)*ex;ec=eh+q.cos(eq)*ex}else{ee=ei;ec=eh}ej+="curContext.quadraticCurveTo("+ee+","+-ec+","+ep+","+-eo+");";ei=ep;eh=eo;break;case"Q":ee=parseFloat(ev[0][0]);ec=parseFloat(ev[1][0]);ep=parseFloat(ev[2][0]);eo=parseFloat(ev[3][0]);ej+="curContext.quadraticCurveTo("+ee+","+-ec+","+ep+","+-eo+");";ei=ep;eh=eo;break;case"Z":ej+="curContext.closePath();";break}ek=es[0]}ej+="afterPathDraw();";ej+="curContext.translate("+el+",0);";ej+="}}";return(new Function("beforePathDraw","afterPathDraw",ej))(ew,eu)};var ea=function(ev){var eu=ev.getElementsByTagName("font");cW.glyphTable[eg].horiz_adv_x=eu[0].getAttribute("horiz-adv-x");var ex=ev.getElementsByTagName("font-face")[0];cW.glyphTable[eg].units_per_em=parseFloat(ex.getAttribute("units-per-em"));cW.glyphTable[eg].ascent=parseFloat(ex.getAttribute("ascent"));cW.glyphTable[eg].descent=parseFloat(ex.getAttribute("descent"));var ez=ev.getElementsByTagName("glyph"),et=ez.length;for(var ey=0;ey<et;ey++){var es=ez[ey].getAttribute("unicode");var ew=ez[ey].getAttribute("glyph-name");el=ez[ey].getAttribute("horiz-adv-x");if(el===null){el=cW.glyphTable[eg].horiz_adv_x}en=ez[ey].getAttribute("d");if(en!==t){ej=eb(en);cW.glyphTable[eg][ew]={name:ew,unicode:es,horiz_adv_x:el,draw:ej.draw}}}};var ed=function(){var eu;try{eu=d.implementation.createDocument("","",null)}catch(ew){F.debug(ew.message);return}try{eu.async=false;eu.load(eg);ea(eu.getElementsByTagName("svg")[0])}catch(et){F.debug(et);try{var es=new D.XMLHttpRequest;es.open("GET",eg,false);es.send(null);ea(es.responseXML.documentElement)}catch(ev){F.debug(et)}}};cW.glyphTable[eg]={};ed(eg);return cW.glyphTable[eg]};cW.param=function(ec){var eb="data-processing-"+ec;if(ae.hasAttribute(eb)){return ae.getAttribute(eb)}for(var ed=0,ea=ae.childNodes.length;ed<ea;++ed){var ee=ae.childNodes.item(ed);if(ee.nodeType!==1||ee.tagName.toLowerCase()!=="param"){continue}if(ee.getAttribute("name")===ec){return ee.getAttribute("value")}}if(cQ.params.hasOwnProperty(ec)){return cQ.params[ec]}return null};function cL(eb){if(eb==="3D"){dY=new bB}else{if(eb==="2D"){dY=new bR}else{dY=new ca}}for(var ea in ca.prototype){if(ca.prototype.hasOwnProperty(ea)&&ea.indexOf("$")<0){cW[ea]=dY[ea]}}dY.$init()}function cU(ea){return function(){cL("2D");return dY[ea].apply(this,arguments)}}ca.prototype.translate=cU("translate");ca.prototype.transform=cU("transform");ca.prototype.scale=cU("scale");ca.prototype.pushMatrix=cU("pushMatrix");ca.prototype.popMatrix=cU("popMatrix");ca.prototype.resetMatrix=cU("resetMatrix");ca.prototype.applyMatrix=cU("applyMatrix");ca.prototype.rotate=cU("rotate");ca.prototype.rotateZ=cU("rotateZ");ca.prototype.shearX=cU("shearX");ca.prototype.shearY=cU("shearY");ca.prototype.redraw=cU("redraw");ca.prototype.toImageData=cU("toImageData");ca.prototype.ambientLight=cU("ambientLight");ca.prototype.directionalLight=cU("directionalLight");ca.prototype.lightFalloff=cU("lightFalloff");ca.prototype.lightSpecular=cU("lightSpecular");ca.prototype.pointLight=cU("pointLight");ca.prototype.noLights=cU("noLights");ca.prototype.spotLight=cU("spotLight");ca.prototype.beginCamera=cU("beginCamera");ca.prototype.endCamera=cU("endCamera");ca.prototype.frustum=cU("frustum");ca.prototype.box=cU("box");ca.prototype.sphere=cU("sphere");ca.prototype.ambient=cU("ambient");ca.prototype.emissive=cU("emissive");ca.prototype.shininess=cU("shininess");ca.prototype.specular=cU("specular");ca.prototype.fill=cU("fill");ca.prototype.stroke=cU("stroke");ca.prototype.strokeWeight=cU("strokeWeight");ca.prototype.smooth=cU("smooth");ca.prototype.noSmooth=cU("noSmooth");ca.prototype.point=cU("point");ca.prototype.vertex=cU("vertex");ca.prototype.endShape=cU("endShape");ca.prototype.bezierVertex=cU("bezierVertex");ca.prototype.curveVertex=cU("curveVertex");ca.prototype.curve=cU("curve");ca.prototype.line=cU("line");ca.prototype.bezier=cU("bezier");ca.prototype.rect=cU("rect");ca.prototype.ellipse=cU("ellipse");ca.prototype.background=cU("background");ca.prototype.image=cU("image");ca.prototype.textWidth=cU("textWidth");ca.prototype.text$line=cU("text$line");ca.prototype.$ensureContext=cU("$ensureContext");ca.prototype.$newPMatrix=cU("$newPMatrix");ca.prototype.size=function(ea,ec,eb){cL(eb===2?"3D":"2D");cW.size(ea,ec,eb)};ca.prototype.$init=G;bR.prototype.$init=function(){cW.size(cW.width,cW.height);d8.lineCap="round";cW.noSmooth();cW.disableContextMenu()};bB.prototype.$init=function(){cW.use3DContext=true;cW.disableContextMenu()};ds.prototype.$ensureContext=function(){return d8};function dy(eb,ed){var ec=eb,ea=0,ee=0;cW.pmouseX=cW.mouseX;cW.pmouseY=cW.mouseY;if(ec.offsetParent){do{ea+=ec.offsetLeft;ee+=ec.offsetTop}while(!!(ec=ec.offsetParent))}ec=eb;do{ea-=ec.scrollLeft||0;ee-=ec.scrollTop||0}while(!!(ec=ec.parentNode));ea+=ad;ee+=dp;ea+=aU;ee+=bX;ea+=D.pageXOffset;ee+=D.pageYOffset;return{X:ea,Y:ee}}function aI(ea,eb){var ec=dy(ea,eb);cW.mouseX=eb.pageX-ec.X;cW.mouseY=eb.pageY-ec.Y}function cu(eb){var ed=dy(eb.changedTouches[0].target,eb.changedTouches[0]),ea;for(ea=0;ea<eb.touches.length;ea++){var ef=eb.touches[ea];ef.offsetX=ef.pageX-ed.X;ef.offsetY=ef.pageY-ed.Y}for(ea=0;ea<eb.targetTouches.length;ea++){var ec=eb.targetTouches[ea];ec.offsetX=ec.pageX-ed.X;ec.offsetY=ec.pageY-ed.Y}for(ea=0;ea<eb.changedTouches.length;ea++){var ee=eb.changedTouches[ea];ee.offsetX=ee.pageX-ed.X;ee.offsetY=ee.pageY-ed.Y}return eb}bO(ae,"touchstart",function(ec){ae.setAttribute("style","-webkit-user-select: none");ae.setAttribute("onclick","void(0)");ae.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var eb=0,ea=au.length;eb<ea;eb++){var ed=au[eb].type;if(ed==="mouseout"||ed==="mousemove"||ed==="mousedown"||ed==="mouseup"||ed==="DOMMouseScroll"||ed==="mousewheel"||ed==="touchstart"){de(au[eb])}}if(cW.touchStart!==t||cW.touchMove!==t||cW.touchEnd!==t||cW.touchCancel!==t){bO(ae,"touchstart",function(ee){if(cW.touchStart!==t){ee=cu(ee);cW.touchStart(ee)}});bO(ae,"touchmove",function(ee){if(cW.touchMove!==t){ee.preventDefault();ee=cu(ee);cW.touchMove(ee)}});bO(ae,"touchend",function(ee){if(cW.touchEnd!==t){ee=cu(ee);cW.touchEnd(ee)}});bO(ae,"touchcancel",function(ee){if(cW.touchCancel!==t){ee=cu(ee);cW.touchCancel(ee)}})}else{bO(ae,"touchstart",function(ee){aI(ae,ee.touches[0]);cW.__mousePressed=true;cW.mouseDragging=false;cW.mouseButton=37;if(typeof cW.mousePressed==="function"){cW.mousePressed()}});bO(ae,"touchmove",function(ee){ee.preventDefault();aI(ae,ee.touches[0]);if(typeof cW.mouseMoved==="function"&&!cW.__mousePressed){cW.mouseMoved()}if(typeof cW.mouseDragged==="function"&&cW.__mousePressed){cW.mouseDragged();cW.mouseDragging=true}});bO(ae,"touchend",function(ee){cW.__mousePressed=false;if(typeof cW.mouseClicked==="function"&&!cW.mouseDragging){cW.mouseClicked()}if(typeof cW.mouseReleased==="function"){cW.mouseReleased()}})}ae.dispatchEvent(ec)});(function(){var ea=true,eb=function(ec){ec.preventDefault();ec.stopPropagation()};cW.disableContextMenu=function(){if(!ea){return}bO(ae,"contextmenu",eb);ea=false};cW.enableContextMenu=function(){if(ea){return}de({elem:ae,type:"contextmenu",fn:eb});ea=true}})();bO(ae,"mousemove",function(ea){aI(ae,ea);if(typeof cW.mouseMoved==="function"&&!cW.__mousePressed){cW.mouseMoved()}if(typeof cW.mouseDragged==="function"&&cW.__mousePressed){cW.mouseDragged();cW.mouseDragging=true}});bO(ae,"mouseout",function(ea){if(typeof cW.mouseOut==="function"){cW.mouseOut()}});bO(ae,"mouseover",function(ea){aI(ae,ea);if(typeof cW.mouseOver==="function"){cW.mouseOver()}});ae.onmousedown=function(){ae.focus();return false};bO(ae,"mousedown",function(ea){cW.__mousePressed=true;cW.mouseDragging=false;switch(ea.which){case 1:cW.mouseButton=37;break;case 2:cW.mouseButton=3;break;case 3:cW.mouseButton=39;break}if(typeof cW.mousePressed==="function"){cW.mousePressed()}});bO(ae,"mouseup",function(ea){cW.__mousePressed=false;if(typeof cW.mouseClicked==="function"&&!cW.mouseDragging){cW.mouseClicked()}if(typeof cW.mouseReleased==="function"){cW.mouseReleased()}});var an=function(ea){var eb=0;if(ea.wheelDelta){eb=ea.wheelDelta/120;if(D.opera){eb=-eb}}else{if(ea.detail){eb=-ea.detail/3}}cW.mouseScroll=eb;if(eb&&typeof cW.mouseScrolled==="function"){cW.mouseScrolled()}};bO(d,"DOMMouseScroll",an);bO(d,"mousewheel",an);if(!ae.getAttribute("tabindex")){ae.setAttribute("tabindex",0)}function dD(eb){var ea=eb.which||eb.keyCode;switch(ea){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return ea}function cB(eb){var ec=eb.which||eb.keyCode;var ea=eb.shiftKey||eb.ctrlKey||eb.altKey||eb.metaKey;switch(ec){case 13:ec=ea?13:10;break;case 8:ec=ea?127:8;break}return new bP(ec)}function cR(ea){if(typeof ea.preventDefault==="function"){ea.preventDefault()}else{if(typeof ea.stopPropagation==="function"){ea.stopPropagation()}}return false}function dG(){var ea;for(ea in ag){if(ag.hasOwnProperty(ea)){cW.__keyPressed=true;return}}cW.__keyPressed=false}function cx(){cW.__keyPressed=false;ag=[];dI=null}function bq(ea,eb){ag[ea]=eb;dI=null;cW.key=eb;cW.keyCode=ea;cW.keyPressed();cW.keyCode=0;cW.keyTyped();dG()}function cz(eb){var ea=dD(eb);if(ea===127){bq(ea,new bP(127));return}if(dX.indexOf(ea)<0){dI=ea;return}var ec=new bP(65535);cW.key=ec;cW.keyCode=ea;ag[ea]=ec;cW.keyPressed();dI=null;dG();return cR(eb)}function dv(eb){if(dI===null){return}var ea=dI,ec=cB(eb);bq(ea,ec);return cR(eb)}function cp(eb){var ea=dD(eb),ec=ag[ea];if(ec===t){return}cW.key=ec;cW.keyCode=ea;cW.keyReleased();delete ag[ea];dG()}if(!cV){if(ba instanceof F.Sketch){cQ=ba}else{if(typeof ba==="function"){cQ=new F.Sketch(ba)}else{if(!ba){cQ=new F.Sketch(function(){})}else{cQ=F.compile(ba)}}}cW.externals.sketch=cQ;cL();ae.onfocus=function(){cW.focused=true};ae.onblur=function(){cW.focused=false;if(!cQ.options.globalKeyEvents){cx()}};if(cQ.options.pauseOnBlur){bO(D,"focus",function(){if(aC){cW.loop()}});bO(D,"blur",function(){if(aC&&ax){cW.noLoop();aC=true}cx()})}var aV=cQ.options.globalKeyEvents?D:ae;bO(aV,"keydown",cz);bO(aV,"keypress",dv);bO(aV,"keyup",cp);for(var c4 in F.lib){if(F.lib.hasOwnProperty(c4)){if(F.lib[c4].hasOwnProperty("attach")){F.lib[c4].attach(cW)}else{if(F.lib[c4] instanceof Function){F.lib[c4].call(this)}}}}var dB=100;var b6=function(ed){if(!(cQ.imageCache.pending||H.preloading.pending(dB))){if(D.opera){var ec,eb,ea=cQ.imageCache.operaCache;for(ec in ea){if(ea.hasOwnProperty(ec)){eb=ea[ec];if(eb!==null){d.body.removeChild(eb)}delete ea[ec]}}}cQ.attach(ed,g);cQ.onLoad(ed);if(ed.setup){ed.setup();ed.resetMatrix();cQ.onSetup()}T();if(ed.draw){if(!aC){ed.redraw()}else{ed.loop()}}}else{D.setTimeout(function(){b6(ed)},dB)}};a(this);b6(cW)}else{cQ=new F.Sketch;cL();cW.size=function(ea,ec,eb){if(eb&&eb===2){cL("3D")}else{cL("2D")}cW.size(ea,ec,eb)}}};F.debug=s;F.prototype=g;function u(){var R=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadXML","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","Random","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shearX","shearY","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","transform","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","XML","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith","__matches"];var P={};var Q,O;for(Q=0,O=R.length;Q<O;++Q){P[R[Q]]=null}for(var S in F.lib){if(F.lib.hasOwnProperty(S)){if(F.lib[S].exports){var N=F.lib[S].exports;for(Q=0,O=N.length;Q<O;++Q){P[N[Q]]=null}}}}return P}function c(ar){var aX=u();function aE(bq){var bt=[];var bv=bq.split(/([\{\[\(\)\]\}])/);var by=bv[0];var bw=[];for(var bs=1;bs<bv.length;bs+=2){var bx=bv[bs];if(bx==="["||bx==="{"||bx==="("){bw.push(by);by=bx}else{if(bx==="]"||bx==="}"||bx===")"){var br=bx==="}"?"A":bx===")"?"B":"C";var bu=bt.length;bt.push(by+bx);by=bw.pop()+'"'+br+(bu+1)+'"'}}by+=bv[bs+1]}bt.unshift(by);return bt}function aj(br,bq){return br.replace(/'(\d+)'/g,function(bt,bs){var bu=bq[bs];if(bu.charAt(0)==="/"){return bu}return/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(bu)?"(new $p.Character("+bu+"))":bu})}function aP(bt){var bs=/^\s*/.exec(bt),bq;if(bs[0].length===bt.length){bq={left:bs[0],middle:"",right:""}}else{var br=/\s*$/.exec(bt);bq={left:bs[0],middle:bt.substring(bs[0].length,br.index),right:br[0]}}bq.untrim=function(bu){return this.left+bu+this.right};return bq}function a6(bq){return bq.replace(/^\s+/,"").replace(/\s+$/,"")}function av(bs,bt){for(var br=0,bq=bt.length;br<bq;++br){bs[bt[br]]=null}return bs}function ba(br){for(var bq in br){if(br.hasOwnProperty(bq)){return false}}return true}function aQ(bq){return bq.substring(2,bq.length-1)}var bg=ar.replace(/\r\n?|\n\r/g,"\n");var N=[];var a3=bg.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(by,br,bv,bw,bt,bx,bq,bs){var bu;if(br||bv){bu=N.length;N.push(by);return"'"+bu+"'"}if(bw){bu=N.length;N.push(bx);return bt+"'"+bu+"'"}return bs!==""?" ":"\n"});a3=a3.replace(/__x([0-9A-F]{4})/g,function(br,bq){return"__x005F_x"+bq});a3=a3.replace(/\$/g,"__x0024");var Z;var aA=a3;var aa=function(br,bs,bq,bt){if(!!bs||!!bt){return br}Z=true;return""};do{Z=false;aA=aA.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,aa)}while(Z);var bk=aE(aA);var al;var aJ={},a9,az=0;function bc(br,bq){var bs=bk.length;bk.push(br);return'"'+bq+bs+'"'}function a7(){return"class"+ ++az}function bl(br,bs,bq){br.classId=bs;br.scopeId=bq;aJ[bs]=br}var V,S,ap,aV,bi,aZ;var O=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g;var bb=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g;var aM=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/;var bm=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g;var W=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/;var au=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;function ae(br){var bq=br;bq=bq.replace(O,function(bs){return bc(bs,"E")});bq=bq.replace(bb,function(bs){return bc(bs,"D")});bq=bq.replace(au,function(bs){return bc(bs,"H")});return bq}function bd(bs,br){var bq=bs.replace(bm,function(bx,bu,bv,by,bw,bt){if(bv!==br){return bx}return bc(bx,"G")});return bq}function aH(bq){this.name=bq}aH.prototype.toString=function(){return this.name};function ao(br,bq){this.params=br;this.methodArgsParam=bq}ao.prototype.getNames=function(){var bs=[];for(var br=0,bq=this.params.length;br<bq;++br){bs.push(this.params[br].name)}return bs};ao.prototype.prependMethodArgs=function(bq){if(!this.methodArgsParam){return bq}return"{\nvar "+this.methodArgsParam.name+" = Array.prototype.slice.call(arguments, "+this.params.length+");\n"+bq.substring(1)};ao.prototype.toString=function(){if(this.params.length===0){return"()"}var bq="(";for(var bs=0,br=this.params.length;bs<br;++bs){bq+=this.params[bs]+", "}return bq.substring(0,bq.length-2)+")"};function aD(bw){var bt=a6(bw.substring(1,bw.length-1));var bq=[],bu=null;if(bt!==""){var br=bt.split(",");for(var bs=0;bs<br.length;++bs){var bv=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(br[bs]);if(bs===br.length-1&&br[bs].indexOf("...")>=0){bu=new aH(bv[1]);break}bq.push(new aH(bv[1]))}}return new ao(bq,bu)}function aq(bu){var bt=bu;bt=bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(bw,bv,bx){return bx});bt=bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(bw,bv,bx){return bc(bw,"F")});bt=bt.replace(au,function(bv){return bc(bv,"H")});bt=bt.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(bA,bz,bx){var bw=bx.replace(/"C(\d+)"/g,function(bC,bB){return bk[bB]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");var by="{"+bw.substring(1,bw.length-1)+"}";var bv="('"+bz+"', "+bc(by,"A")+")";return"$p.createJavaArray"+bc(bv,"B")});bt=bt.replace(/(\.\s*length)\s*"B\d+"/g,"$1");bt=bt.replace(/#([0-9A-Fa-f]{6})\b/g,function(bv,bw){return"0xFF"+bw});bt=bt.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(by,bw,bx){var bz=bk[bw];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(bz)){return by}if(/^\(\s*int\s*\)$/.test(bz)){return"(int)"+bx}var bv=bz.split(/"C(\d+)"/g);if(bv.length>1){if(!/^\[\s*\]$/.test(bk[bv[1]])){return by}}return""+bx});bt=bt.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(bw,bv){var bx=aP(bv);return bx.untrim("__int_cast("+bx.middle+")")});bt=bt.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");bt=bt.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(bx,bw,bv){if(bw===bv){return bx}return bv===""?"0"+bw:bw});bt=bt.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");bt=bt.replace(/([^\s])%([^=\s])/g,"$1 % $2");bt=bt.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");bt=bt.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(bw,bv){return"parse"+bv.substring(0,1).toUpperCase()+bv.substring(1)+'"B'});bt=bt.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(bw,bA,bv,bz,by,bB){if(bv){var bx=bk[bz];if(by){return"pixels.setPixel"+bc("("+bx.substring(1,bx.length-1)+","+bB+")","B")}return"pixels.getPixel"+bc("("+bx.substring(1,bx.length-1)+")","B")}if(bA){return"pixels.getLength"+bc("()","B")}if(by){return"pixels.set"+bc("("+bB+")","B")}return"pixels.toArray"+bc("()","B")});var bs;function br(bw,bv,bA,by){var bx=bk[by];bs=true;var bz=aP(bx.substring(1,bx.length-1));return"__"+bA+(bz.middle===""?bc("("+bv.replace(/\.\s*$/,"")+")","B"):bc("("+bv.replace(/\.\s*$/,"")+","+bz.middle+")","B"))}do{bs=false;bt=bt.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g,br)}while(bs);function bq(bx,bv,bw){bs=true;return"__instanceof"+bc("("+bv+", "+bw+")","B")}do{bs=false;bt=bt.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,bq)}while(bs);bt=bt.replace(/\bthis(\s*"B\d+")/g,"$$constr$1");return bt}function aC(br,bq){this.baseInterfaceName=br;this.body=bq;bq.owner=this}aC.prototype.toString=function(){return"new ("+this.body+")"};function ai(bs){var br=(new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/)).exec(bs);var bv=a9,bu=a7();a9=bu;var bq=br[1]+"$"+bu;var bt=new aC(bq,V(bk[br[2]],bq,"","implements "+br[1]));bl(bt,bu,bv);a9=bv;return bt}function af(br,bs,bq){this.name=br;this.params=bs;this.body=bq}af.prototype.toString=function(){var bs=al;var bt=av({"this":null},this.params.getNames());al=function(bu){return bt.hasOwnProperty(bu.name)?bu.name:bs(bu)};var br="function";if(this.name){br+=" "+this.name}var bq=this.params.prependMethodArgs(this.body.toString());br+=this.params+" "+bq;al=bs;return br};function aK(br){var bq=(new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/)).exec(br);return new af(bq[1]!=="function"?bq[1]:null,aD(bk[bq[2]]),ap(bk[bq[3]]))}function ad(bq){this.members=bq}ad.prototype.toString=function(){var bs=al;al=function(bu){return bu.name==="this"?"this":bs(bu)};var bq="";for(var bt=0,br=this.members.length;bt<br;++bt){if(this.members[bt].label){bq+=this.members[bt].label+": "}bq+=this.members[bt].value.toString()+", "}al=bs;return bq.substring(0,bq.length-2)};function aF(bt){var bq=bt.split(",");for(var bs=0;bs<bq.length;++bs){var br=bq[bs].indexOf(":");if(br<0){bq[bs]={value:aZ(bq[bs])}}else{bq[bs]={label:a6(bq[bs].substring(0,br)),value:aZ(a6(bq[bs].substring(br+1)))}}}return new ad(bq)}function ay(bs){if(bs.charAt(0)==="("||bs.charAt(0)==="["){return bs.charAt(0)+ay(bs.substring(1,bs.length-1))+bs.charAt(bs.length-1)}if(bs.charAt(0)==="{"){if(/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(bs)){return"{"+bc(bs.substring(1,bs.length-1),"I")+"}"}return"["+ay(bs.substring(1,bs.length-1))+"]"}var br=aP(bs);var bq=aq(br.middle);bq=bq.replace(/"[ABC](\d+)"/g,function(bu,bt){return ay(bk[bt])});return br.untrim(bq)}function R(bq){return bq.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(bt,bv,br,bx,bw,bu){if(bv){return bt}var bs={name:br,member:bw,callSign:!!bu};return al(bs)+(bx===t?"":bx)})}function bp(br,bq){this.expr=br;this.transforms=bq}bp.prototype.toString=function(){var bq=this.transforms;var br=R(this.expr);return br.replace(/"!(\d+)"/g,function(bt,bs){return bq[bs].toString()})};aZ=function(bs){var br=[];var bq=ay(bs);bq=bq.replace(/"H(\d+)"/g,function(bu,bt){br.push(aK(bk[bt]));return'"!'+(br.length-1)+'"'});bq=bq.replace(/"F(\d+)"/g,function(bu,bt){br.push(ai(bk[bt]));return'"!'+(br.length-1)+'"'});bq=bq.replace(/"I(\d+)"/g,function(bu,bt){br.push(aF(bk[bt]));return'"!'+(br.length-1)+'"'});return new bp(bq,br)};function a4(bq,bs,br){this.name=bq;this.value=bs;this.isDefault=br}a4.prototype.toString=function(){return this.name+" = "+this.value};function ak(bu,br){var bv=bu.indexOf("=");var bq,bt,bs;if(bv<0){bq=bu;bt=br;bs=true}else{bq=bu.substring(0,bv);bt=aZ(bu.substring(bv+1));bs=false}return new a4(a6(bq.replace(/(\s*"C\d+")+/g,"")),bt,bs)}function aT(bq){if(bq==="int"||bq==="float"){return"0"}if(bq==="boolean"){return"false"}if(bq==="color"){return"0x00000000"}return"null"}function aI(br,bq){this.definitions=br;this.varType=bq}aI.prototype.getNames=function(){var bs=[];for(var br=0,bq=this.definitions.length;br<bq;++br){bs.push(this.definitions[br].name)}return bs};aI.prototype.toString=function(){return"var "+this.definitions.join(",")};function ah(bq){this.expression=bq}ah.prototype.toString=function(){return this.expression.toString()};function bn(bu){if(aM.test(bu)){var bt=W.exec(bu);var bs=bu.substring(bt[0].length).split(",");var bq=aT(bt[2]);for(var br=0;br<bs.length;++br){bs[br]=ak(bs[br],bq)}return new aI(bs,bt[2])}return new ah(aZ(bu))}function a1(bq,bs,br){this.initStatement=bq;this.condition=bs;this.step=br}a1.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};function aS(br,bq){this.initStatement=br;this.container=bq}aS.prototype.toString=function(){var bq=this.initStatement.toString();if(bq.indexOf("=")>=0){bq=bq.substring(0,bq.indexOf("="))}return"("+bq+" in "+this.container+")"};function aY(br,bq){this.initStatement=br;this.container=bq}aY.iteratorId=0;aY.prototype.toString=function(){var bu=this.initStatement.toString();var br="$it"+aY.iteratorId++;var bt=bu.replace(/^\s*var\s*/,"").split("=")[0];var bs="var "+br+" = new $p.ObjectIterator("+this.container+"), "+bt+" = void(0)";var bq=br+".hasNext() && (("+bt+" = "+br+".next()) || true)";return"("+bs+"; "+bq+";)"};function Y(br){var bq;if(/\bin\b/.test(br)){bq=br.substring(1,br.length-1).split(/\bin\b/g);return new aS(bn(a6(bq[0])),aZ(bq[1]))}if(br.indexOf(":")>=0&&br.indexOf(";")<0){bq=br.substring(1,br.length-1).split(":");return new aY(bn(a6(bq[0])),aZ(bq[1]))}bq=br.substring(1,br.length-1).split(";");return new a1(bn(a6(bq[0])),aZ(bq[1]),aZ(bq[2]))}function a2(bq){bq.sort(function(bs,br){return br.weight-bs.weight})}function ab(bs,bq,br){this.name=bs;this.body=bq;this.isStatic=br;bq.owner=this}ab.prototype.toString=function(){return""+this.body};function an(bs,bq,br){this.name=bs;this.body=bq;this.isStatic=br;bq.owner=this}an.prototype.toString=function(){return""+this.body};function T(bs){var br=O.exec(bs);O.lastIndex=0;var bt=br[1].indexOf("static")>=0;var bq=bk[aQ(br[6])],bv;var bw=a9,bu=a7();a9=bu;if(br[2]==="interface"){bv=new ab(br[3],S(bq,br[3],br[4]),bt)}else{bv=new an(br[3],V(bq,br[3],br[4],br[5]),bt)}bl(bv,bu,bw);a9=bw;return bv}function ac(bs,bt,bq,br){this.name=bs;this.params=bt;this.body=bq;this.isStatic=br}ac.prototype.toString=function(){var bt=av({},this.params.getNames());var bs=al;al=function(bu){return bt.hasOwnProperty(bu.name)?bu.name:bs(bu)};var br=this.params.prependMethodArgs(this.body.toString());var bq="function "+this.methodId+this.params+" "+br+"\n";al=bs;return bq};function P(bt){var br=bb.exec(bt);bb.lastIndex=0;var bs=br[1].indexOf("static")>=0;var bq=br[6]!==";"?bk[aQ(br[6])]:"{}";return new ac(br[3],aD(bk[aQ(br[4])]),ap(bq),bs)}function am(bs,br,bq){this.definitions=bs;this.fieldType=br;this.isStatic=bq}am.prototype.getNames=function(){var bs=[];for(var br=0,bq=this.definitions.length;br<bq;++br){bs.push(this.definitions[br].name)}return bs};am.prototype.toString=function(){var bx=al({name:"[this]"});if(this.isStatic){var bw=this.owner.name;var bu=[];for(var bv=0,bt=this.definitions.length;bv<bt;++bv){var bs=this.definitions[bv];var bq=bs.name,by=bw+"."+bq;var br="if("+by+" === void(0)) {\n "+by+" = "+bs.value+"; }\n$p.defineProperty("+bx+", '"+bq+"', { get: function(){return "+by+";}, set: function(val){"+by+" = val;} });\n";bu.push(br)}return bu.join("")}return bx+"."+this.definitions.join("; "+bx+".")};function bf(bv){var bu=W.exec(bv);var bq=bu[1].indexOf("static")>=0;var bt=bv.substring(bu[0].length).split(/,\s*/g);var br=aT(bu[2]);for(var bs=0;bs<bt.length;++bs){bt[bs]=ak(bt[bs],br)}return new am(bt,bu[2],bq)}function aN(br,bq){this.params=br;this.body=bq}aN.prototype.toString=function(){var bt=av({},this.params.getNames());var br=al;al=function(bu){return bt.hasOwnProperty(bu.name)?bu.name:br(bu)};var bs="function $constr_"+this.params.params.length+this.params.toString();var bq=this.params.prependMethodArgs(this.body.toString());if(!/\$(superCstr|constr)\b/.test(bq)){bq="{\n$superCstr();\n"+bq.substring(1)}al=br;return bs+bq+"\n"};function at(bs){var bq=(new RegExp(/"B(\d+)"\s*"A(\d+)"/)).exec(bs);var br=aD(bk[bq[1]]);return new aN(br,ap(bk[bq[2]]))}function aO(bs,bv,bu,bq,bw,bx){var bt,br;this.name=bs;this.interfacesNames=bv;this.methodsNames=bu;this.fields=bq;this.innerClasses=bw;this.misc=bx;for(bt=0,br=bq.length;bt<br;++bt){bq[bt].owner=this}}aO.prototype.getMembers=function(bx,bq,bv){if(this.owner.base){this.owner.base.body.getMembers(bx,bq,bv)}var bu,bt,bs,br;for(bu=0,bs=this.fields.length;bu<bs;++bu){var bz=this.fields[bu].getNames();for(bt=0,br=bz.length;bt<br;++bt){bx[bz[bt]]=this.fields[bu]}}for(bu=0,bs=this.methodsNames.length;bu<bs;++bu){var bw=this.methodsNames[bu];bq[bw]=true}for(bu=0,bs=this.innerClasses.length;bu<bs;++bu){var by=this.innerClasses[bu];bv[by.name]=by}};aO.prototype.toString=function(){function br(bH){var bG=0;while(bH){++bG;bH=bH.scope}return bG}var bA=br(this.owner);var bB=this.name;var bx="";var bC="";var bE={},bz={},by={};this.getMembers(bE,bz,by);var bw,bu,bv,bt;if(this.owner.interfaces){var bq=[],bs;for(bw=0,bu=this.interfacesNames.length;bw<bu;++bw){if(!this.owner.interfaces[bw]){continue}bs=al({name:this.interfacesNames[bw]});bq.push(bs);bx+="$p.extendInterfaceMembers("+bB+", "+bs+");\n"}bC+=bB+".$interfaces = ["+bq.join(", ")+"];\n"}bC+=bB+".$isInterface = true;\n";bC+=bB+".$methods = ['"+this.methodsNames.join("', '")+"'];\n";a2(this.innerClasses);for(bw=0,bu=this.innerClasses.length;bw<bu;++bw){var bF=this.innerClasses[bw];if(bF.isStatic){bx+=bB+"."+bF.name+" = "+bF+";\n"}}for(bw=0,bu=this.fields.length;bw<bu;++bw){var bD=this.fields[bw];if(bD.isStatic){bx+=bB+"."+bD.definitions.join(";\n"+bB+".")+";\n"}}return"(function() {\nfunction "+bB+"() { throw 'Unable to create the interface'; }\n"+bx+bC+"return "+bB+";\n})()"};S=function(bw,br,bB){var bC=bw.substring(1,bw.length-1);bC=ae(bC);bC=bd(bC,br);var bz=[],bt=[];bC=bC.replace(/"([DE])(\d+)"/g,function(bF,bE,bD){if(bE==="D"){bz.push(bD)}else{if(bE==="E"){bt.push(bD)}}return""});var bx=bC.split(/;(?:\s*;)*/g);var bu;var bv,bs;if(bB!==t){bu=bB.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(bv=0,bs=bz.length;bv<bs;++bv){var bq=P(bk[bz[bv]]);bz[bv]=bq.name}for(bv=0,bs=bx.length-1;bv<bs;++bv){var bA=aP(bx[bv]);bx[bv]=bf(bA.middle)}var by=bx.pop();for(bv=0,bs=bt.length;bv<bs;++bv){bt[bv]=T(bk[bt[bv]])}return new aO(br,bu,bz,bx,bt,{tail:by})};function aB(br,by,bx,bw,bs,bz,bA,bu,bq){var bv,bt;this.name=br;this.baseClassName=by;this.interfacesNames=bx;this.functions=bw;this.methods=bs;this.fields=bz;this.cstrs=bA;this.innerClasses=bu;this.misc=bq;for(bv=0,bt=bz.length;bv<bt;++bv){bz[bv].owner=this}}aB.prototype.getMembers=function(bx,br,bw){if(this.owner.base){this.owner.base.body.getMembers(bx,br,bw)}var bv,bu,bt,bs;for(bv=0,bt=this.fields.length;bv<bt;++bv){var bz=this.fields[bv].getNames();for(bu=0,bs=bz.length;bu<bs;++bu){bx[bz[bu]]=this.fields[bv]}}for(bv=0,bt=this.methods.length;bv<bt;++bv){var bq=this.methods[bv];br[bq.name]=bq}for(bv=0,bt=this.innerClasses.length;bv<bt;++bv){var by=this.innerClasses[bv];bw[by.name]=by}};aB.prototype.toString=function(){function bN(bV){var bU=0;while(bV){++bU;bV=bV.scope}return bU}var bB=bN(this.owner);var bG="$this_"+bB;var bs=this.name;var bx="var "+bG+" = this;\n";var bH="";var bz="";var bS={},bT={},bJ={};this.getMembers(bS,bT,bJ);var bR=al;al=function(bV){var bU=bV.name;if(bU==="this"){return bV.callSign||!bV.member?bG+".$self":bG}if(bS.hasOwnProperty(bU)){return bS[bU].isStatic?bs+"."+bU:bG+"."+bU}if(bJ.hasOwnProperty(bU)){return bG+"."+bU}if(bT.hasOwnProperty(bU)){return bT[bU].isStatic?bs+"."+bU:bG+".$self."+bU}return bR(bV)};var bA;if(this.baseClassName){bA=bR({name:this.baseClassName});bx+="var $super = { $upcast: "+bG+" };\n";bx+="function $superCstr(){"+bA+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n";bz+=bs+".$base = "+bA+";\n"}else{bx+="function $superCstr(){$p.extendClassChain("+bG+")}\n"}if(this.owner.base){bH+="$p.extendStaticMembers("+bs+", "+bA+");\n"}var bM,bK,bL,bI;if(this.owner.interfaces){var bw=[],bq;for(bM=0,bK=this.interfacesNames.length;bM<bK;++bM){if(!this.owner.interfaces[bM]){continue}bq=bR({name:this.interfacesNames[bM]});bw.push(bq);bH+="$p.extendInterfaceMembers("+bs+", "+bq+");\n"}bz+=bs+".$interfaces = ["+bw.join(", ")+"];\n"}if(this.functions.length>0){bx+=this.functions.join("\n")+"\n"}a2(this.innerClasses);for(bM=0,bK=this.innerClasses.length;bM<bK;++bM){var bD=this.innerClasses[bM];if(bD.isStatic){bH+=bs+"."+bD.name+" = "+bD+";\n";bx+=bG+"."+bD.name+" = "+bs+"."+bD.name+";\n"}else{bx+=bG+"."+bD.name+" = "+bD+";\n"}}for(bM=0,bK=this.fields.length;bM<bK;++bM){var br=this.fields[bM];if(br.isStatic){bH+=bs+"."+br.definitions.join(";\n"+bs+".")+";\n";for(bL=0,bI=br.definitions.length;bL<bI;++bL){var bu=br.definitions[bL].name,by=bs+"."+bu;bx+="$p.defineProperty("+bG+", '"+bu+"', {get: function(){return "+by+"}, set: function(val){"+by+" = val}});\n"}}else{bx+=bG+"."+br.definitions.join(";\n"+bG+".")+";\n"}}var bC={};for(bM=0,bK=this.methods.length;bM<bK;++bM){var bt=this.methods[bM];var bP=bC[bt.name];var bv=bt.name+"$"+bt.params.params.length;var bF=!!bt.params.methodArgsParam;if(bP){++bP;bv+="_"+bP}else{bP=1}bt.methodId=bv;bC[bt.name]=bP;if(bt.isStatic){bH+=bt;bH+="$p.addMethod("+bs+", '"+bt.name+"', "+bv+", "+bF+");\n";bx+="$p.addMethod("+bG+", '"+bt.name+"', "+bv+", "+bF+");\n"}else{bx+=bt;bx+="$p.addMethod("+bG+", '"+bt.name+"', "+bv+", "+bF+");\n"}}bx+=a6(this.misc.tail);if(this.cstrs.length>0){bx+=this.cstrs.join("\n")+"\n"}bx+="function $constr() {\n";var bQ=[];for(bM=0,bK=this.cstrs.length;bM<bK;++bM){var bO=this.cstrs[bM].params.params.length;var bE=!!this.cstrs[bM].params.methodArgsParam;bQ.push("if(arguments.length "+(bE?">=":"===")+" "+bO+") { $constr_"+bO+".apply("+bG+", arguments); }")}if(bQ.length>0){bx+=bQ.join(" else ")+" else "}bx+="$superCstr();\n}\n";bx+="$constr.apply(null, arguments);\n";al=bR;return"(function() {\nfunction "+bs+"() {\n"+bx+"}\n"+bH+bz+"return "+bs+";\n})()"};V=function(bz,br,bq,bC){var bE=bz.substring(1,bz.length-1);bE=ae(bE);bE=bd(bE,br);var bs=[],bt=[],bD=[],bw=[];bE=bE.replace(/"([DEGH])(\d+)"/g,function(bH,bG,bF){if(bG==="D"){bs.push(bF)}else{if(bG==="E"){bt.push(bF)}else{if(bG==="H"){bw.push(bF)}else{bD.push(bF)}}}return""});var by=bE.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var bx,bv;var bu;if(bq!==t){bx=bq.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")}if(bC!==t){bv=bC.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(bu=0;bu<bw.length;++bu){bw[bu]=aK(bk[bw[bu]])}for(bu=0;bu<bs.length;++bu){bs[bu]=P(bk[bs[bu]])}for(bu=0;bu<by.length-1;++bu){var bB=aP(by[bu]);by[bu]=bf(bB.middle)}var bA=by.pop();for(bu=0;bu<bD.length;++bu){bD[bu]=at(bk[bD[bu]])}for(bu=0;bu<bt.length;++bu){bt[bu]=T(bk[bt[bu]])}return new aB(br,bx,bv,bw,bs,by,bD,bt,{tail:bA})};function aw(br,bq){this.name=br;this.body=bq;bq.owner=this}aw.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};function a5(br,bq){this.name=br;this.body=bq;bq.owner=this}a5.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};function bo(bs){var br=O.exec(bs);O.lastIndex=0;var bq=bk[aQ(br[6])];var bv=a9,bt=a7();a9=bt;var bu;if(br[2]==="interface"){bu=new aw(br[3],S(bq,br[3],br[4]))}else{bu=new a5(br[3],V(bq,br[3],br[4],br[5]))}bl(bu,bt,bv);a9=bv;return bu}function aR(br,bs,bq){this.name=br;this.params=bs;this.body=bq}aR.prototype.toString=function(){var bt=av({},this.params.getNames());var bs=al;al=function(bu){return bt.hasOwnProperty(bu.name)?bu.name:bs(bu)};var br=this.params.prependMethodArgs(this.body.toString());var bq="function "+this.name+this.params+" "+br+"\n$p."+this.name+" = "+this.name+";";al=bs;return bq};function aW(bs){var br=bb.exec(bs);var bq=bb.lastIndex=0;return new aR(br[3],aD(bk[aQ(br[4])]),ap(bk[aQ(br[6])]))}function ag(bq){var br=bq;br=br.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");return br}function aU(bq,br){this.argument=bq;this.misc=br}aU.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};function Q(bq,br){this.argument=bq;this.misc=br}Q.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};function ax(bq,br,bs){this.name=bq;this.argument=br;this.misc=bs}ax.prototype.toString=function(){var bq=this.misc.prefix;if(this.argument!==t){bq+=this.argument.toString()}return bq};function aL(bq){this.expr=bq}aL.prototype.toString=function(){return"case "+this.expr+":"};function X(bq){this.label=bq}X.prototype.toString=function(){return this.label};aV=function(by,bz,bs){var bD=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g);var bA=[];by=ag(by);var bx=0,bt,br;while((bt=bD.exec(by))!==null){if(bt[1]!==t){var bw=by.lastIndexOf('"B',bD.lastIndex);var bC=by.substring(bx,bw);if(bt[1]==="for"){bA.push(new aU(Y(bk[bt[2]]),{prefix:bC}))}else{if(bt[1]==="catch"){bA.push(new Q(aD(bk[bt[2]]),{prefix:bC}))}else{bA.push(new ax(bt[1],aZ(bk[bt[2]]),{prefix:bC}))}}}else{if(bt[3]!==t){bA.push(new ax(bt[3],t,{prefix:by.substring(bx,bD.lastIndex)}))}else{if(bt[4]!==t){br=by.substring(bx,bD.lastIndex-bt[4].length);if(a6(br).length!==0){continue}bA.push(br);var bu=bt[4].charAt(1),bq=bt[5];if(bu==="D"){bA.push(bz(bk[bq]))}else{if(bu==="E"){bA.push(bs(bk[bq]))}else{if(bu==="H"){bA.push(aK(bk[bq]))}else{bA.push(ap(bk[bq]))}}}}else{if(bt[6]!==t){bA.push(new aL(aZ(a6(bt[7]))))}else{if(bt[8]!==t){br=by.substring(bx,bD.lastIndex-bt[8].length);if(a6(br).length!==0){continue}bA.push(new X(by.substring(bx,bD.lastIndex)))}else{var bB=aP(by.substring(bx,bD.lastIndex-1));bA.push(bB.left);bA.push(bn(bB.middle));bA.push(bB.right+";")}}}}}bx=bD.lastIndex}var bv=aP(by.substring(bx));bA.push(bv.left);if(bv.middle!==""){bA.push(bn(bv.middle));bA.push(";"+bv.right)}return bA};function be(br){var bs=[];for(var bt=0,bq=br.length;bt<bq;++bt){var bu=br[bt];if(bu instanceof aI){bs=bs.concat(bu.getNames())}else{if(bu instanceof aU&&bu.argument.initStatement instanceof aI){bs=bs.concat(bu.argument.initStatement.getNames())}else{if(bu instanceof ab||bu instanceof an||bu instanceof aw||bu instanceof a5||bu instanceof aR||bu instanceof af){bs.push(bu.name)}}}}return av({},bs)}function U(bq){this.statements=bq}U.prototype.toString=function(){var bs=be(this.statements);var br=al;if(!ba(bs)){al=function(bt){return bs.hasOwnProperty(bt.name)?bt.name:br(bt)}}var bq="{\n"+this.statements.join("")+"\n}";al=br;return bq};ap=function(br){var bq=aP(br.substring(1,br.length-1));return new U(aV(bq.middle))};function aG(bq){this.statements=bq}aG.prototype.toString=function(){var bu=[],bv=[],bw;for(var bt=0,br=this.statements.length;bt<br;++bt){bw=this.statements[bt];if(bw instanceof a5||bw instanceof aw){bu.push(bw)}else{bv.push(bw)}}a2(bu);var bs=be(this.statements);al=function(by){var bx=by.name;if(bs.hasOwnProperty(bx)){return bx}if(aX.hasOwnProperty(bx)||B.hasOwnProperty(bx)||g.hasOwnProperty(bx)){return"$p."+bx}return bx};var bq="// this code was autogenerated from PJS\n(function($p) {\n"+bu.join("")+"\n"+bv.join("")+"\n})";al=null;return bq};bi=function(){var bq=ae(bk[0]);bq=bq.replace(/\bimport\s+[^;]+;/g,"");return new aG(aV(bq,aW,bo))};function bj(bq){var bu={};var bs,by;for(bs in aJ){if(aJ.hasOwnProperty(bs)){by=aJ[bs];var bE=by.scopeId,br=by.name;if(bE){var bD=aJ[bE];by.scope=bD;if(bD.inScope===t){bD.inScope={}}bD.inScope[br]=by}else{bu[br]=by}}}function bB(bF,bI){var bL=bI.split(".");var bH=bF.scope,bK;while(bH){if(bH.hasOwnProperty(bL[0])){bK=bH[bL[0]];break}bH=bH.scope}if(bK===t){bK=bu[bL[0]]}for(var bJ=1,bG=bL.length;bJ<bG&&bK;++bJ){bK=bK.inScope[bL[bJ]]}return bK}for(bs in aJ){if(aJ.hasOwnProperty(bs)){by=aJ[bs];var bx=by.body.baseClassName;if(bx){var bA=bB(by,bx);if(bA){by.base=bA;if(!bA.derived){bA.derived=[]}bA.derived.push(by)}}var bw=by.body.interfacesNames,bC=[],bv,bt;if(bw&&bw.length>0){for(bv=0,bt=bw.length;bv<bt;++bv){var bz=bB(by,bw[bv]);bC.push(bz);if(!bz){continue}if(!bz.derived){bz.derived=[]}bz.derived.push(by)}if(bC.length>0){by.interfaces=bC}}}}}function a8(bq){var bv=[],bs={};var br,by,bw;for(br in aJ){if(aJ.hasOwnProperty(br)){bw=aJ[br];if(!bw.inScope&&!bw.derived){bv.push(br);bw.weight=0}else{var bx=[];if(bw.inScope){for(by in bw.inScope){if(bw.inScope.hasOwnProperty(by)){bx.push(bw.inScope[by])}}}if(bw.derived){bx=bx.concat(bw.derived)}bs[br]=bx}}}function bz(bB,bD){var bA=bs[bB];if(!bA){return false}var bC=bA.indexOf(bD);if(bC<0){return false}bA.splice(bC,1);if(bA.length>0){return false}delete bs[bB];return true}while(bv.length>0){br=bv.shift();bw=aJ[br];if(bw.scopeId&&bz(bw.scopeId,bw)){bv.push(bw.scopeId);aJ[bw.scopeId].weight=bw.weight+1}if(bw.base&&bz(bw.base.classId,bw)){bv.push(bw.base.classId);bw.base.weight=bw.weight+1}if(bw.interfaces){var bu,bt;for(bu=0,bt=bw.interfaces.length;bu<bt;++bu){if(!bw.interfaces[bu]||!bz(bw.interfaces[bu].classId,bw)){continue}bv.push(bw.interfaces[bu].classId);bw.interfaces[bu].weight=bw.weight+1}}}}var bh=bi();bj(bh);a8(bh);var a0=bh.toString();a0=a0.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n");a0=a0.replace(/__x([0-9A-F]{4})/g,function(br,bq){return String.fromCharCode(parseInt(bq,16))});return aj(a0,N)}function z(O,ad){var X=(new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g)).exec(O);if(X&&X.length===2){var N=[],Q=X.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(ag,ah){N.push(ah);return"{"+(N.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";");var W=function(ag){return ag.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")};for(var aa=0,Y=Q.length;aa<Y;aa++){var U=Q[aa].split("=");if(U&&U.length===2){var af=W(U[0]),V=W(U[1]),ae=[];if(af==="preload"){ae=V.split(",");for(var Z=0,ab=ae.length;Z<ab;Z++){var ac=W(ae[Z]);ad.imageCache.add(ac)}}else{if(af==="font"){ae=V.split(",");for(var R=0,T=ae.length;R<T;R++){var S=W(ae[R]),P=/^\{(\d*?)\}$/.exec(S);H.preloading.add(P?JSON.parse("{"+N[P[1]]+"}"):S)}}else{if(af==="pauseOnBlur"){ad.options.pauseOnBlur=V==="true"}else{if(af==="globalKeyEvents"){ad.options.globalKeyEvents=V==="true"}else{if(af.substring(0,6)==="param-"){ad.params[af.substring(6)]=V}else{ad.options[af]=V}}}}}}}}return O}F.compile=function(N){var Q=new F.Sketch;var O=z(N,Q);var P=c(O);Q.sourceCode=P;return Q};var j=function(){var T={},Q="undefined",R="function",N=!1,S=!0,O=512,P="log";if(typeof tinylog!==Q&&typeof tinylog[P]===R){T[P]=tinylog[P]}else{if(typeof d!==Q&&!d.fake){(function(){var ao=d,am="div",ac="style",ag="title",ab={zIndex:10000,position:"fixed",bottom:"0px",width:"100%",height:"15%",fontFamily:"sans-serif",color:"#ccc",backgroundColor:"black"},ae={position:"relative",fontFamily:"monospace",overflow:"auto",height:"100%",paddingTop:"5px"},ai={height:"5px",marginTop:"-5px",cursor:"n-resize",backgroundColor:"darkgrey"},an={position:"absolute",top:"5px",right:"20px",color:"#111",MozBorderRadius:"4px",webkitBorderRadius:"4px",borderRadius:"4px",cursor:"pointer",fontWeight:"normal",textAlign:"center",padding:"3px 5px",backgroundColor:"#333",fontSize:"12px"},Y={minHeight:"16px"},af={fontSize:"12px",margin:"0 8px 0 8px",maxWidth:"100%",whiteSpace:"pre-wrap",overflow:"auto"},ad=ao.defaultView,al=ao.documentElement,U=al[ac],W=function(){var aq=arguments.length,ap,at,ar;while(aq--){at=arguments[aq--];ap=arguments[aq][ac];for(ar in at){if(at.hasOwnProperty(ar)){ap[ar]=at[ar]}}}},aj=function(ar,aq,ap){if(ar.addEventListener){ar.addEventListener(aq,ap,N)}else{if(ar.attachEvent){ar.attachEvent("on"+aq,ap)}}return[ar,aq,ap]},V=function(ar,aq,ap){if(ar.removeEventListener){ar.removeEventListener(aq,ap,N)}else{if(ar.detachEvent){ar.detachEvent("on"+aq,ap)}}},aa=function(aq){var ap=aq.childNodes,ar=ap.length;while(ar--){aq.removeChild(ap.item(0))}},ak=function(aq,ap){return aq.appendChild(ap)},ah=function(ap){return ao.createElement(ap)},Z=function(ap){return ao.createTextNode(ap)},X=T[P]=function(aE){var aw,ax=U.paddingBottom,ar=ah(am),aB=ar[ac],aC=ak(ar,ah(am)),au=ak(ar,ah(am)),at=ak(ar,ah(am)),aD=N,av=N,aq=N,ay=0,ap=function(){U.paddingBottom=ar.clientHeight+"px"},aA=function(aF){var aG=ad.innerHeight,aH=aC.clientHeight;if(aF<0){aF=0}else{if(aF+aH>aG){aF=aG-aH}}aB.height=aF/aG*100+"%";ap()},az=[aj(ao,"mousemove",function(aF){if(aD){aA(ad.innerHeight-aF.clientY);au.scrollTop=aq}}),aj(ao,"mouseup",function(){if(aD){aD=aq=N}}),aj(aC,"dblclick",function(aF){aF.preventDefault();if(av){aA(av);av=N}else{av=ar.clientHeight;aB.height="0px"}}),aj(aC,"mousedown",function(aF){aF.preventDefault();aD=S;aq=au.scrollTop}),aj(aC,"contextmenu",function(){aD=N}),aj(at,"click",function(){aw()})];aw=function(){var aF=az.length;while(aF--){V.apply(T,az[aF])}al.removeChild(ar);U.paddingBottom=ax;aa(au);aa(ar);T[P]=X};W(ar,ab,au,ae,aC,ai,at,an);at[ag]="Close Log";ak(at,Z("\u2716"));aC[ag]="Double-click to toggle log minimization";al.insertBefore(ar,al.firstChild);T[P]=function(aH){if(ay===O){au.removeChild(au.firstChild)}else{ay++}var aG=ak(au,ah(am)),aF=ak(aG,ah(am));aG[ag]=(new Date).toLocaleTimeString();W(aG,Y,aF,af);ak(aF,Z(aH));au.scrollTop=au.scrollHeight};T[P](aE);ap()}})()}else{if(typeof print===R){T[P]=print}}}return T}();F.logger=j;F.version="1.4.1";F.lib={};F.registerLibrary=function(N,O){F.lib[N]=O;if(O.hasOwnProperty("init")){O.init(g)}};F.instances=k;F.getInstanceById=function(N){return k[J[N]]};F.Sketch=function(N){this.attachFunction=N;this.options={pauseOnBlur:false,globalKeyEvents:false};this.onLoad=G;this.onSetup=G;this.onPause=G;this.onLoop=G;this.onFrameStart=G;this.onFrameEnd=G;this.onExit=G;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(P,O){if(this.images[P]){return}if(!n){this.images[P]=null}if(!O){O=new Image;O.onload=function(R){return function(){R.pending--}}(this);this.pending++;O.src=P}this.images[P]=O;if(D.opera){var Q=d.createElement("div");Q.appendChild(O);Q.style.position="absolute";Q.style.opacity=0;Q.style.width="1px";Q.style.height="1px";if(!this.operaCache[P]){d.body.appendChild(Q);this.operaCache[P]=Q}}}};this.sourceCode=undefined;this.attach=function(P){if(typeof this.attachFunction==="function"){this.attachFunction(P)}else{if(this.sourceCode){var O=(new Function("return ("+this.sourceCode+");"))();O(P);this.attachFunction=O}else{throw"Unable to attach sketch to the processing instance"}}};this.toString=function(){var O;var P="((function(Sketch) {\n";P+="var sketch = new Sketch(\n"+this.sourceCode+");\n";for(O in this.options){if(this.options.hasOwnProperty(O)){var Q=this.options[O];P+="sketch.options."+O+" = "+(typeof Q==="string"?'"'+Q+'"':""+Q)+";\n"}}for(O in this.imageCache){if(this.options.hasOwnProperty(O)){P+='sketch.imageCache.add("'+O+'");\n'}}P+="return sketch;\n})(Processing.Sketch))";return P}};var v=function(Q,N){var O=[],U=[],V=N.length,S=0;function T(W,Y){var X=new XMLHttpRequest;X.onreadystatechange=function(){if(X.readyState===4){var Z;if(X.status!==200&&X.status!==0){Z="Invalid XHR status "+X.status}else{if(X.responseText===""){if("withCredentials" in new XMLHttpRequest&&(new XMLHttpRequest).withCredentials===false&&D.location.protocol==="file:"){Z="XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."}else{Z="File is empty."}}}Y(X.responseText,Z)}};X.open("GET",W,true);if(X.overrideMimeType){X.overrideMimeType("application/json")}X.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");X.send(null)}function P(X,W){function Z(ac,aa){O[X]=ac;++S;if(aa){U.push(W+" ==> "+aa)}if(S===V){if(U.length===0){try{return new F(Q,O.join("\n"))}catch(ab){throw"Processing.js: Unable to execute pjs sketch: "+ab}}else{throw"Processing.js: Unable to load pjs sketch files: "+U.join("\n")}}}if(W.charAt(0)==="#"){var Y=d.getElementById(W.substring(1));if(Y){Z(Y.text||Y.textContent)}else{Z("","Unable to load pjs sketch: element with id '"+W.substring(1)+"' was not found")}return}T(W,Z)}for(var R=0;R<V;++R){P(R,N[R])}};var I=function(){d.removeEventListener("DOMContentLoaded",I,false);k=[];var O=d.getElementsByTagName("canvas"),U;for(var T=0,P=O.length;T<P;T++){var W=O[T].getAttribute("data-processing-sources");if(W===null){W=O[T].getAttribute("data-src");if(W===null){W=O[T].getAttribute("datasrc")}}if(W){U=W.split(/\s+/g);for(var S=0;S<U.length;){if(U[S]){S++}else{U.splice(S,1)}}v(O[T],U)}}var ac,aa,N,Z,ab=d.getElementsByTagName("script"),Q=[];for(ac=ab.length-1;ac>=0;ac--){Q.push(ab[ac])}for(ac=0,aa=Q.length;ac<aa;ac++){var Y=Q[ac];if(!Y.getAttribute){continue}var X=Y.getAttribute("type");if(X&&(X.toLowerCase()==="text/processing"||X.toLowerCase()==="application/processing")){var V=Y.getAttribute("data-processing-target");O=t;if(V){O=d.getElementById(V)}else{var R=Y.nextSibling;while(R&&R.nodeType!==1){R=R.nextSibling}if(R&&R.nodeName.toLowerCase()==="canvas"){O=R}}if(O){if(Y.getAttribute("src")){U=Y.getAttribute("src").split(/\s+/);v(O,U);continue}N=Y.textContent||Y.text;Z=new F(O,N)}}}};F.reload=function(){if(k.length>0){for(var N=k.length-1;N>=0;N--){if(k[N]){k[N].exit()}}}I()};F.loadSketchFromSources=v;F.disableInit=function(){if(n){d.removeEventListener("DOMContentLoaded",I,false)}};if(n){D.Processing=F;d.addEventListener("DOMContentLoaded",I,false)}else{this.Processing=F}})(window,window.document,Math);
;// lib/handlebars/base.js

/*jshint eqnull:true*/
this.Handlebars = {};

(function(Handlebars) {

Handlebars.VERSION = "1.0.rc.1";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "", data;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      if (data) { data.index = i; }
      ret = ret + fn(context[i], { data: data });
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context) {
  Handlebars.log(context);
});

}(this.Handlebars));
;
// lib/handlebars/compiler/parser.js
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"DATA":27,"param":28,"STRING":29,"INTEGER":30,"BOOLEAN":31,"hashSegments":32,"hashSegment":33,"ID":34,"EQUALS":35,"pathSegments":36,"SEP":37,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",27:"DATA",29:"STRING",30:"INTEGER",31:"BOOLEAN",34:"ID",35:"EQUALS",37:"SEP"},
productions_: [0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[17,1],[25,2],[25,1],[28,1],[28,1],[28,1],[28,1],[28,1],[26,1],[32,2],[32,1],[33,3],[33,3],[33,3],[33,3],[33,3],[21,1],[36,3],[36,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]); 
break;
case 3: this.$ = new yy.ProgramNode($$[$0]); 
break;
case 4: this.$ = new yy.ProgramNode([]); 
break;
case 5: this.$ = [$$[$0]]; 
break;
case 6: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 7: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0]); 
break;
case 8: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0]); 
break;
case 9: this.$ = $$[$0]; 
break;
case 10: this.$ = $$[$0]; 
break;
case 11: this.$ = new yy.ContentNode($$[$0]); 
break;
case 12: this.$ = new yy.CommentNode($$[$0]); 
break;
case 13: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 14: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 15: this.$ = $$[$0-1]; 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]); 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true); 
break;
case 18: this.$ = new yy.PartialNode($$[$0-1]); 
break;
case 19: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]); 
break;
case 20: 
break;
case 21: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]]; 
break;
case 22: this.$ = [[$$[$0-1]].concat($$[$0]), null]; 
break;
case 23: this.$ = [[$$[$0-1]], $$[$0]]; 
break;
case 24: this.$ = [[$$[$0]], null]; 
break;
case 25: this.$ = [[new yy.DataNode($$[$0])], null]; 
break;
case 26: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 27: this.$ = [$$[$0]]; 
break;
case 28: this.$ = $$[$0]; 
break;
case 29: this.$ = new yy.StringNode($$[$0]); 
break;
case 30: this.$ = new yy.IntegerNode($$[$0]); 
break;
case 31: this.$ = new yy.BooleanNode($$[$0]); 
break;
case 32: this.$ = new yy.DataNode($$[$0]); 
break;
case 33: this.$ = new yy.HashNode($$[$0]); 
break;
case 34: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 35: this.$ = [$$[$0]]; 
break;
case 36: this.$ = [$$[$0-2], $$[$0]]; 
break;
case 37: this.$ = [$$[$0-2], new yy.StringNode($$[$0])]; 
break;
case 38: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])]; 
break;
case 39: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])]; 
break;
case 40: this.$ = [$$[$0-2], new yy.DataNode($$[$0])]; 
break;
case 41: this.$ = new yy.IdNode($$[$0]); 
break;
case 42: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 43: this.$ = [$$[$0]]; 
break;
}
},
table: [{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,27:[1,24],34:[1,26],36:25},{17:27,21:23,27:[1,24],34:[1,26],36:25},{17:28,21:23,27:[1,24],34:[1,26],36:25},{17:29,21:23,27:[1,24],34:[1,26],36:25},{21:30,34:[1,26],36:25},{1:[2,1]},{6:31,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,32],21:23,27:[1,24],34:[1,26],36:25},{10:33,20:[1,34]},{10:35,20:[1,34]},{18:[1,36]},{18:[2,24],21:41,25:37,26:38,27:[1,45],28:39,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,25]},{18:[2,41],27:[2,41],29:[2,41],30:[2,41],31:[2,41],34:[2,41],37:[1,48]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],37:[2,43]},{18:[1,49]},{18:[1,50]},{18:[1,51]},{18:[1,52],21:53,34:[1,26],36:25},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:54,34:[1,26],36:25},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:41,26:55,27:[1,45],28:56,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,23]},{18:[2,27],27:[2,27],29:[2,27],30:[2,27],31:[2,27],34:[2,27]},{18:[2,33],33:57,34:[1,58]},{18:[2,28],27:[2,28],29:[2,28],30:[2,28],31:[2,28],34:[2,28]},{18:[2,29],27:[2,29],29:[2,29],30:[2,29],31:[2,29],34:[2,29]},{18:[2,30],27:[2,30],29:[2,30],30:[2,30],31:[2,30],34:[2,30]},{18:[2,31],27:[2,31],29:[2,31],30:[2,31],31:[2,31],34:[2,31]},{18:[2,32],27:[2,32],29:[2,32],30:[2,32],31:[2,32],34:[2,32]},{18:[2,35],34:[2,35]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],35:[1,59],37:[2,43]},{34:[1,60]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,61]},{18:[1,62]},{18:[2,21]},{18:[2,26],27:[2,26],29:[2,26],30:[2,26],31:[2,26],34:[2,26]},{18:[2,34],34:[2,34]},{35:[1,59]},{21:63,27:[1,67],29:[1,64],30:[1,65],31:[1,66],34:[1,26],36:25},{18:[2,42],27:[2,42],29:[2,42],30:[2,42],31:[2,42],34:[2,42],37:[2,42]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,36],34:[2,36]},{18:[2,37],34:[2,37]},{18:[2,38],34:[2,38]},{18:[2,39],34:[2,39]},{18:[2,40],34:[2,40]}],
defaultActions: {16:[2,1],24:[2,25],38:[2,23],55:[2,21]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                                   if(yy_.yytext) return 14;
                                 
break;
case 1: return 14; 
break;
case 2:
                                   if(yy_.yytext.slice(-1) !== "\\") this.popState();
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1);
                                   return 14;
                                 
break;
case 3: return 24; 
break;
case 4: return 16; 
break;
case 5: return 20; 
break;
case 6: return 19; 
break;
case 7: return 19; 
break;
case 8: return 23; 
break;
case 9: return 23; 
break;
case 10: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15; 
break;
case 11: return 22; 
break;
case 12: return 35; 
break;
case 13: return 34; 
break;
case 14: return 34; 
break;
case 15: return 37; 
break;
case 16: /*ignore whitespace*/ 
break;
case 17: this.popState(); return 18; 
break;
case 18: this.popState(); return 18; 
break;
case 19: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 29; 
break;
case 20: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 29; 
break;
case 21: yy_.yytext = yy_.yytext.substr(1); return 27; 
break;
case 22: return 31; 
break;
case 23: return 31; 
break;
case 24: return 30; 
break;
case 25: return 34; 
break;
case 26: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 34; 
break;
case 27: return 'INVALID'; 
break;
case 28: return 5; 
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"INITIAL":{"rules":[0,1,28],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = handlebars;
exports.Parser = handlebars.Parser;
exports.parse = function () { return handlebars.parse.apply(handlebars, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
};
;
// lib/handlebars/compiler/base.js
Handlebars.Parser = handlebars;

Handlebars.parse = function(string) {
  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(string);
};

Handlebars.print = function(ast) {
  return new Handlebars.PrintVisitor().accept(ast);
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  // override in the host environment
  log: function(level, str) {}
};

Handlebars.log = function(level, str) { Handlebars.logger.log(level, str); };
;
// lib/handlebars/compiler/ast.js
(function() {

  Handlebars.AST = {};

  Handlebars.AST.ProgramNode = function(statements, inverse) {
    this.type = "program";
    this.statements = statements;
    if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
  };

  Handlebars.AST.MustacheNode = function(rawParams, hash, unescaped) {
    this.type = "mustache";
    this.escaped = !unescaped;
    this.hash = hash;

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var eligibleHelper = this.eligibleHelper = id.isSimple;

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = eligibleHelper && (params.length || hash);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  };

  Handlebars.AST.PartialNode = function(id, context) {
    this.type    = "partial";

    // TODO: disallow complex IDs

    this.id      = id;
    this.context = context;
  };

  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  Handlebars.AST.BlockNode = function(mustache, program, inverse, close) {
    verifyMatch(mustache.id, close);
    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;

    if (this.inverse && !this.program) {
      this.isInverse = true;
    }
  };

  Handlebars.AST.ContentNode = function(string) {
    this.type = "content";
    this.string = string;
  };

  Handlebars.AST.HashNode = function(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  };

  Handlebars.AST.IdNode = function(parts) {
    this.type = "ID";
    this.original = parts.join(".");

    var dig = [], depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i];

      if(part === "..") { depth++; }
      else if(part === "." || part === "this") { this.isScoped = true; }
      else { dig.push(part); }
    }

    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;
  };

  Handlebars.AST.DataNode = function(id) {
    this.type = "DATA";
    this.id = id;
  };

  Handlebars.AST.StringNode = function(string) {
    this.type = "STRING";
    this.string = string;
  };

  Handlebars.AST.IntegerNode = function(integer) {
    this.type = "INTEGER";
    this.integer = integer;
  };

  Handlebars.AST.BooleanNode = function(bool) {
    this.type = "BOOLEAN";
    this.bool = bool;
  };

  Handlebars.AST.CommentNode = function(comment) {
    this.type = "comment";
    this.comment = comment;
  };

})();;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/compiler/compiler.js

/*jshint eqnull:true*/
Handlebars.Compiler = function() {};
Handlebars.JavaScriptCompiler = function() {};

(function(Compiler, JavaScriptCompiler) {
  // the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    guid: 0,

    compile: function(program, options) {
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.program(program);
    },

    accept: function(node) {
      return this[node.type](node);
    },

    program: function(program) {
      var statements = program.statements, statement;
      this.opcodes = [];

      for(var i=0, l=statements.length; i<l; i++) {
        statement = statements[i];
        this[statement.type](statement);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var type = this.classifyMustache(mustache);

      if (type === "helper") {
        this.helperMustache(mustache, program, inverse);
      } else if (type === "simple") {
        this.simpleMustache(mustache);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('pushLiteral', '{}');
        this.opcode('blockValue');
      } else {
        this.ambiguousMustache(mustache, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('pushLiteral', '{}');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('push', '{}');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        this.accept(val);
        this.opcode('assignToHash', pair[0]);
      }
    },

    partial: function(partial) {
      var id = partial.id;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', id.original);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var options = this.options;
      var type = this.classifyMustache(mustache);

      if (type === "simple") {
        this.simpleMustache(mustache);
      } else if (type === "helper") {
        this.helperMustache(mustache);
      } else {
        this.ambiguousMustache(mustache);
      }

      if(mustache.escaped && !options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousMustache: function(mustache, program, inverse) {
      var id = mustache.id, name = id.parts[0];

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name);
    },

    simpleMustache: function(mustache, program, inverse) {
      var id = mustache.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperMustache: function(mustache, program, inverse) {
      var params = this.setupFullMustacheParams(mustache, program, inverse),
          name = mustache.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.knownHelpersOnly) {
        throw new Error("You specified knownHelpersOnly, but used the unknown helper " + name);
      } else {
        this.opcode('invokeHelper', params.length, name);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      this.opcode('lookupData', data.id);
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(isNaN(depth)) { throw new Error("EWOT"); }
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifyMustache: function(mustache) {
      var isHelper   = mustache.isHelper;
      var isEligible = mustache.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = mustache.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.string);
        } else {
          this[param.type](param);
        }
      }
    },

    setupMustacheParams: function(mustache) {
      var params = mustache.params;
      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('pushLiteral', '{}');
      }

      return params;
    },

    // this will replace setupMustacheParams when we're done
    setupFullMustacheParams: function(mustache, program, inverse) {
      var params = mustache.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('pushLiteral', '{}');
      }

      return params;
    }
  };

  var Literal = function(value) {
    this.value = value;
  };

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name, type) {
      if (/^[0-9]+$/.test(name)) {
        return parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        return parent + "." + name;
      }
      else {
        return parent + "['" + name + "']";
      }
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return "buffer += " + string + ";";
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.compileStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }
      }

      return this.createFunctionContext(asObject);
    },

    nextOpcode: function() {
      var opcodes = this.environment.opcodes, opcode = opcodes[this.i + 1];
      return opcodes[this.i + 1];
    },

    eat: function(opcode) {
      this.i = this.i + 1;
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;
        var copies = "helpers = helpers || " + namespace + ".helpers;";
        if (this.environment.usePartial) { copies = copies + " partials = partials || " + namespace + ".partials;"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        var aliases = [];
        for (var alias in this.context.aliases) {
          this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.source.push("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      if (asObject) {
        params.push(this.source.join("\n  "));

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + this.source.join("\n  ") + '}';
        Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
        return functionSource;
      }
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return current + " = blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.source.push("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      this.source.push(this.appendToBuffer(this.quotedString(content)));
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      var local = this.popStack();
      this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.source.push("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      var opcode = this.nextOpcode(), extra = "";
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      if(opcode && opcode.opcode === 'appendContent') {
        extra = " + " + this.quotedString(opcode.args[0]);
        this.eat(opcode);
      }

      this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + extra));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.pushStack(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + "() : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data[id], ...
    //
    // Push the result of looking up `id` on the current data
    lookupData: function(id) {
      this.pushStack(this.nameLookup('data', id, 'data'));
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string) {
      this.pushStackLiteral('depth' + this.lastContext);
      this.pushString(string);
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.pushStack(expr);
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';

      var helper = this.lastHelper = this.setupHelper(paramSize, name);
      this.register('foundHelper', helper.name);

      this.pushStack("foundHelper ? foundHelper.call(" +
        helper.callParams + ") " + ": helperMissing.call(" +
        helper.helperMissingParams + ")");
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.pushStack(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name) {
      this.context.aliases.functionType = '"function"';

      this.pushStackLiteral('{}');
      var helper = this.setupHelper(0, name);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
      this.register('foundHelper', helperName);

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      this.source.push('if (foundHelper) { ' + nextStack + ' = foundHelper.call(' + helper.callParams + '); }');
      this.source.push('else { ' + nextStack + ' = ' + nonHelper + '; ' + nextStack + ' = typeof ' + nextStack + ' === functionType ? ' + nextStack + '() : ' + nextStack + '; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.pushStack("self.invokePartial(" + params.join(", ") + ");");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack();
      var hash = this.topStack();

      this.source.push(hash + "['" + key + "'] = " + value + ";");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        var index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context);
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      if(depths.length === 0) {
        return "self.program(" + programParams.join(", ") + ")";
      } else {
        programParams.shift();
        return "self.programWithDepth(" + programParams.join(", ") + ")";
      }
    },

    register: function(name, val) {
      this.useRegister(name);
      this.source.push(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      this.compileStack.push(new Literal(item));
      return item;
    },

    pushStack: function(item) {
      this.source.push(this.incrStack() + " = " + item + ";");
      this.compileStack.push("stack" + this.stackSlot);
      return "stack" + this.stackSlot;
    },

    replaceStack: function(callback) {
      var item = callback.call(this, this.topStack());

      this.source.push(this.topStack() + " = " + item + ";");
      return "stack" + this.stackSlot;
    },

    nextStack: function(skipCompileStack) {
      var name = this.incrStack();
      this.compileStack.push("stack" + this.stackSlot);
      return name;
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return "stack" + this.stackSlot;
    },

    popStack: function() {
      var item = this.compileStack.pop();

      if (item instanceof Literal) {
        return item.value;
      } else {
        this.stackSlot--;
        return item;
      }
    },

    topStack: function() {
      var item = this.compileStack[this.compileStack.length - 1];

      if (item instanceof Literal) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r') + '"';
    },

    setupHelper: function(paramSize, name) {
      var params = [];
      this.setupParams(paramSize, params);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params) {
      var options = [], contexts = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
         this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      params.push("{" + options.join(",") + "}");
      return params.join(", ");
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
      return true;
    }
    return false;
  };

})(Handlebars.Compiler, Handlebars.JavaScriptCompiler);

Handlebars.precompile = function(string, options) {
  options = options || {};

  var ast = Handlebars.parse(string);
  var environment = new Handlebars.Compiler().compile(ast, options);
  return new Handlebars.JavaScriptCompiler().compile(environment, options);
};

Handlebars.compile = function(string, options) {
  options = options || {};

  var compiled;
  function compile() {
    var ast = Handlebars.parse(string);
    var environment = new Handlebars.Compiler().compile(ast, options);
    var templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, true);
    return Handlebars.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  return function(context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  };
};
;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
;if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}
/*global describe, it, beforeEach, expect, xit, jasmine */

(function (ns) {
    "use strict";

    var namespace = function (ns, aliases, func) {
        var nsRegExp = /^([a-zA-Z]+)(\.[a-zA-Z]*)*$/,
            nsArray,
            currentNS,
            i;

        //check to assure ns is a properly formatted namespace string
        if (ns.match(nsRegExp) === null || ns === "window") {
            throw new Error("namespace: " + ns + " is a malformed namespace string");
        }

        //check to assure that if alias is defined that func is defined
        if (aliases !== undefined && func === undefined) {
            if (typeof (aliases) === "function") {
                func = aliases;
                aliases = undefined;
            } else if (typeof (aliases) === "object") {
                throw new Error("namespace: if second argument exists, final function argument must exist");
            } else if (typeof (aliases) !== "object") {
                throw new Error("namespace: second argument must be an object of aliased local namespaces");
            }
        } else if (typeof (aliases) !== "object" && typeof (func) === "function") {
            throw new Error("namespace: second argument must be an object of aliased local namespaces");
        }

        //parse namespace string
        nsArray = ns.split(".");

        //set the root namespace to window (if it's not explictly stated)
        if (nsArray[0] === "window") {
            currentNS = window;
        } else {
            currentNS = (window[nsArray[0]] === undefined) ? window[nsArray[0]] = {} : window[nsArray[0]];
        }

        //confirm func is actually a function
        if (func !== undefined && typeof (func) !== "function") {
            throw new Error("namespace: last parameter must be a function that accepts a namespace parameter");
        }

        //build namespace
        for (i = 1; i < nsArray.length; i = i + 1) {
            if (currentNS[nsArray[i]] === undefined) {
                currentNS[nsArray[i]] = {};
            }
            currentNS = currentNS[nsArray[i]];
        }

        //namespaces.push(currentNS);
        //namespace = currentNS;

        //if the function was defined, but no aliases run it on the current namespace
        if (aliases === undefined && func) {
            func(currentNS);
        } else if (func) {
            for (i in aliases) {
                if (aliases.hasOwnProperty(i)) {
                    aliases[i] = namespace(aliases[i]);
                }
            }
            func.call(aliases, currentNS);
        }

        //return namespace
        return currentNS;
    };

    return namespace(ns, function (exports) {
        exports.namespace = namespace;
    });
}("window.jermaine.util"));
window.jermaine.util.namespace("window.jermaine.util", function (ns) {
    "use strict";
    var EventEmitter = function () {
        var that = this,
            listeners = {};

        //an registers event and a listener
        this.on = function (event, listener) {
            if (typeof(event) !== "string") {
                throw new Error("EventEmitter: first argument to 'on' should be a string");
            }
            if (typeof(listener) !== "function") {
                throw new Error("EventEmitter: second argument to 'on' should be a function");
            }
            if (!listeners[event]) {
                listeners[event] = [];
            }
            listeners[event].push(listener);
            return that;
        };

        //alias addListener
        this.addListener = this.on;
    
        this.once = function (event, listener) {
            var f = function () {
                listener(arguments);
                that.removeListener(event, f);
            };

            that.on(event, f);
            return that;
        };

        this.removeListener = function (event, listener) {
            var index;

            if (typeof(event) !== "string") {
                throw new Error("EventEmitter: first parameter to removeListener method must be a string representing an event");
            }
            if (typeof(listener) !== "function") {
                throw new Error("EventEmitter: second parameter must be a function to remove as an event listener");
            }
            if (listeners[event] === undefined || listeners[event].length === 0) {
                throw new Error("EventEmitter: there are no listeners registered for the '" + event + "' event");
            }

            index = listeners[event].indexOf(listener);

            if (index !== -1) {
                //remove it from the list
                listeners[event].splice(index,1);
            }

            return that;
        };

        this.removeAllListeners = function (event) {
            if (typeof(event) !== "string") {
                throw new Error("EventEmitter: parameter to removeAllListeners should be a string representing an event");
            }

            if (listeners[event] !== undefined) {
                listeners[event] = [];
            }
            
            return that;
        };
    
        this.setMaxListeners = function (number) {
            return that;
        };

        //get the listeners for an event
        this.listeners = function (event) {
            if (typeof(event) !== 'string') {
                throw new Error("EventEmitter: listeners method must be called with the name of an event");
            } else if (listeners[event] === undefined) {
                return [];
            }
            return listeners[event];
        };

        //execute each of the listeners in order with the specified arguments
        this.emit = function (event, data) {
            var i,
                params;


            if (arguments.length > 1) {
                params = [];
            }

            for (i = 1; i < arguments.length; ++i) {
                params.push(arguments[i]);
            }

            if (listeners[event] !== undefined) {
                for (i = 0; i < listeners[event].length; i=i+1) {
                    listeners[event][i].apply(this, params);
                }
            }
        };

        return that;
    }; //end EventEmitter

    ns.EventEmitter = EventEmitter;
});
window.jermaine.util.namespace("window.jermaine", function (ns) {
    "use strict";
    var that = this,
        Validator,
        validators = {};

    Validator = function (spec) {
        var validatorFunction = function (arg) {
            var result, 
                resultObject = {},
                errorMessage;
            result = spec.call(resultObject, arg);
            if (!result) {
                errorMessage = resultObject.message || "validator failed with parameter " + arg;
                throw new Error(errorMessage);
            }
            return result;
        };
        return validatorFunction;
    };

    Validator.addValidator = function (name, v) {
        if (name === undefined || typeof(name) !== "string") {
            throw new Error("addValidator requires a name to be specified as the first parameter");
        }

        if (v === undefined || typeof(v) !== "function") {
            throw new Error("addValidator requires a function as the second parameter");
        }

        if (validators[name] === undefined) {
            validators[name] = function (expected) {
                return new Validator(function (val) {
                    var resultObject = {"actual":val, "param":val},
                        result = v.call(resultObject, expected);
                    this.message = resultObject.message;
                    return result;
                });
            };
        } else {
            throw new Error("Validator '" + name +"' already defined");
        }
    };

    Validator.getValidator = function (name) {
        var result;

        if (name === undefined) {
            throw new Error("Validator: getValidator method requires a string parameter");
        } else if (typeof (name) !== "string") {
            throw new Error("Validator: parameter to getValidator method must be a string");
        }

        result = validators[name];

        if (result === undefined) {
            throw new Error("Validator: '" + name + "' does not exist");
        }

        return result;
    };


    Validator.validators = function () {
        var prop,
            result = [];
        for (prop in validators) {
            if (validators.hasOwnProperty(prop)) {
                result.push(prop);
            }
        }

        return result;
    };

    Validator.addValidator("isGreaterThan", function (val) {
        this.message = this.param + " should be greater than " + val;
        return this.param > val;
    });

    Validator.addValidator("isLessThan", function (val) {
        this.message = this.param + " should be less than " + val;
        return this.param < val;
    });

    Validator.addValidator("isA", function (val) {
        var types = ["string", "number", "boolean", "function", "object"];
        if (typeof(val) === "string" && types.indexOf(val) > -1) {
            this.message = this.param + " should be a " + val;
            return typeof(this.param) === val;
        } else if (val === 'integer') {
            // special case for 'integer'; since javascript has no integer type,
            // just check for number type and check that it's numerically an int
            if (this.param.toString !== undefined)  {
                this.message = this.param.toString() + " should be an integer";
            } else {
                this.message = "parameter should be an integer";
            }
            return (typeof(this.param) === 'number') && (parseInt(this.param,10) === this.param);
        } else if (typeof(val) === "string") {
            throw new Error("Validator: isA accepts a string which is one of " + types);
        } else {
            throw new Error("Validator: isA only accepts a string for a primitive types for the time being");
        }
    });

    validators.isAn = validators.isA;

    Validator.addValidator("isOneOf", function (val) {
        this.message = this.param + " should be one of the set: " + val;
        return val.indexOf(this.param) > -1;
    });

    ns.Validator = Validator;
});
/**
 * Attr
 * 
 * Creates an encapsulated, chainable attribute that are validated by 
 * user-specified validation functions and can be attached to an arbitrary
 * JavaScript object. They can also call user-specified listeners upon being
 * accessed or changed.
 *
 * Jermaine models hold and manipulate Attr (and AttrList) objects until they
 * are attached to an object.
 */

/*!
 *
 * Notes and ToDos:
 * + what about isNotGreaterThan()?, isNotLessThan()?  Or, better still: a
 *   general 'not' operator, as in jasmine?
 *
 * + Attr should be decoupled from AttrList, see the clone() method
 *
 * + See issue 24 on github
 */
window.jermaine.util.namespace("window.jermaine", function (ns) {
    "use strict";

    var Attr = function (name) {
        var validators = [],
            that = this,
            errorMessage = "invalid setter call for " + name,
            defaultValueOrFunction,
            i,
            prop,
            addValidator,
            immutable = false,
            validator,
            listeners = {},
            AttrList = window.jermaine.AttrList,
            Validator = window.jermaine.Validator;

        // check for errors with constructor parameters
        if (name === undefined || typeof(name) !== 'string') {
            throw new Error("Attr: constructor requires a name parameter " +
                            "which must be a string");
        }

        // set up the validator that combines all validators
        validator = function (thingBeingValidated) {
            for (i = 0; i < validators.length; ++i) {
                validators[i](thingBeingValidated);
            }
            return true;
        };


        ////////////////////////////////////////////////////////////////////////
        /////////////////////////// MODIFIERS //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /**
         * Validate this attribute with the given validator. This also allows
         * this.message to be overridden to specify the error message on
         * validation failure.
         *
         * Examples:
         *
         *     age.validatesWith(function (age) {
         *         this.message = "age must be between 18 and 99, " + age +
         *                        " fails.";
         *         return age >= 18 && age <= 99;
         *     });
         *
         *     name.validatesWith(function (name) {
         *         this.message = "name must be a string and contain at least" +
         *                        " 3 letters, " + name + " fails.";
         *         return typeof(name) === "string && name.length >= 3;
         *     });
         *
         *
         * @param {Function} returns true if the argument passes validation 
         */
        this.validatesWith = function (v) {
            if (typeof(v) === 'function') {
                validators.push(new Validator(v));
                return this;
            } else {
                throw new Error("Attr: validator must be a function");
            }
        };

        /**
         * Assign a default value to all attributes of this type. The default
         * value may be an explicit value or object, or it may be a function
         * that returns a default value.
         *
         * Examples:
         *
         * @param {value} the explicit default value, or a function that
         *                returns the default value
         */
        this.defaultsTo = function (value) {
            defaultValueOrFunction = value;
            return this;
        };

        /**
         * Make this attribute read-only. If a setter is called on this
         * attribute, it will throw an error
         *
         * Examples:
         */
        this.isReadOnly = function () {
            immutable = true;
            return this;
        };

        /**
         * Make this attribute writable. Note that this is the default for all 
         * attributes, but this may be called if an attribute has been set to
         * read only and then needs to be changed back
         *
         * Examples:
         */
        this.isWritable = function () {
            immutable = false;
            return this;
        };

        /**
         * Sets up a listener for 'sets' or 'gets' to this attribute. It throws
         * an error if the event is not "set" or "get", and if a setter is
         * already set up for the event, it overrides it.
         *
         * Examples:
         *
         * @param {event} String that can only be "set" or "get"
         * @param {listener} Function that is called when the event occurs
         */
        this.on = function (event, listener) {
            if (event !== "set" && event !== "get") {
                throw new Error("Attr: first argument to the 'on' method " +
                                "should be 'set' or 'get'");
            } else if (typeof(listener) !== "function") {
                throw new Error("Attr: second argument to the 'on' method " +
                                "should be a function");
            } else {
                listeners[event] = listener;
            }
        };

        ////////////////////////////////////////////////////////////////////////
        /////////////////////////// END MODIFIERS //////////////////////////////
        ////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////
        /////////////////////// GETTERS ////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /**
         * Returns the name of this attribute
         */
        this.name = function () {
            return name;
        };

        /**
         * Returns a function that combines all of the validators into
         * a single function that returns true or false.
         */
        this.validator = function () {
            return validator;
        };

        ////////////////////////////////////////////////////////////////////////
        /////////////////////// END GETTERS ////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////
        /////////////////////// SYNTACTIC SUGAR ////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /**
         * An alias for this object, for readability when calling multiple
         * modifiers
         *
         * Examples:
         */
        this.and = this;

        /**
         * An alias for this object, for readability.
         *
         * Examples:
         */
        this.which = this;

        /**
         * An alias for isReadOnly
         */
        this.isImmutable = this.isReadOnly;

        /**
         * An alias for isWritable
         */
        this.isMutable = this.isWritable;

        ////////////////////////////////////////////////////////////////////////
        /////////////////////// END SYNTACTIC SUGAR ////////////////////////////
        ////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////
        /////////////////////// UTILITIES //////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /**
         * Returns an attribute with the same modifiers, defaultValue, and
         * validators. This is used in Jermaine's approach to inheritance.
         *
         * Examples:
         */
        this.clone = function () {
            var result,
                i;

            // set the result to the default attribute or attribute list
            // TODO: figure out how to make this work without explicitly
            //       knowing about AttrList so it can be decoupled from this
            //       code
            result = this instanceof AttrList?new AttrList(name):new Attr(name);

            // add this attributes validators to the new attribute
            for (i = 0; i < validators.length; ++i) {
                result.validatesWith(validators[i]);
            }

            // set up the same default for the new attribute
            result.defaultsTo(defaultValueOrFunction);

            // if the this attr is immutable, the cloned attr should also be
            // immutable
            if (immutable) {
                result.isImmutable();
            }

            return result;
        };

        /**
         * This attaches the attribute to a concrete object. It adds the
         * getter/setter function to the object, and captures the actual
         * value of the attribute in a closure.
         *
         * The resulting getter/setter calls all validators on the parameter
         * and calls the appropriate listener on this attribute. It also
         * returns the object itself so that attribute setters can be chained.
         *
         * Examples:
         *
         * @param {obj} the object to which this attribute will be attached
         */
        this.addTo = function (obj) {
            var attribute,
                listener,
                defaultValue;

            if (!obj || typeof(obj) !== 'object') {
                throw new Error("Attr: addAttr method requires an object " +
                                "parameter");
            }

            // This is the attribute getter/setter method that gets addded to
            // the object
            obj[name] = function (newValue) {
                var preValue;

                if (newValue !== undefined) {
                    // setter
                    if (immutable && attribute !== undefined) {
                        throw new Error("cannot set the immutable property " +
                                         name + " after it has been set");
                    } else if (!validator(newValue)) {
                        throw new Error(errorMessage);
                    } else {
                        // get the oldValue
                        preValue = attribute;

                        // first set the value
                        attribute = newValue;

                        // call the set listener
                        if (listeners.set !== undefined) {
                            listeners.set.call(obj, newValue, preValue);
                        }
                    }
                    return obj;
                } else {
                    // call the get listener
                    if (listeners.get !== undefined) {
                        listeners.get.call(obj, attribute);
                    }
                    return attribute;
                }
            };


            // assign the default value, depends on whether it is a function
            // or an explicit value
            defaultValue = typeof(defaultValueOrFunction) === 'function'?
                defaultValueOrFunction():
                defaultValueOrFunction;

            // call the setter with the defaultValue upon attaching it to the
            // object
            if (defaultValue !== undefined && validator(defaultValue)) {
                obj[name](defaultValue);
            } else if (defaultValue !== undefined && !validator(defaultValue)) {
                throw new Error("Attr: Default value of " + defaultValue +
                                " does not pass validation for " + name);
            }
        };

        ////////////////////////////////////////////////////////////////////////
        /////////////////////// END UTILITIES //////////////////////////////////
        ////////////////////////////////////////////////////////////////////////



        ////////////////////////////////////////////////////////////////////////
        /////////////////////// VALIDATOR RELATED //////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        // add a single validator object to the attribute
        addValidator = function (name) {
            that[name] = function (param) {
                validators.push(Validator.getValidator(name)(param));
                return that;
            };
        };

        // the Validator object contains several default validators
        // that need to be attached to all Attrs
        for (i = 0; i < Validator.validators().length; ++i) {
            addValidator(Validator.validators()[i]);
        }

        ////////////////////////////////////////////////////////////////////////
        /////////////////////// END VALIDATOR RELATED //////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };

    // export Attr to the specified namespace
    ns.Attr = Attr;
});
window.jermaine.util.namespace("window.jermaine", function (ns) {
    "use strict";

    function AttrList(name) {
        var that = this,
            listeners = {};

        //this is where the inheritance happens now
        ns.Attr.call(this, name);

        var delegate = function (obj, func) {
            return function () { return obj[func].apply(obj, arguments); };
        };

        //syntactic sugar to keep things grammatically correct
        this.validateWith = this.validatesWith;

        //disable defaultsTo and isImmutable until we figure out how to make it make sense
        this.defaultsTo = function () {
            //no op
        };

        this.isImmutable = function () {
            //no op
        };

        this.isMutable = function () {
            //no op
        };

        this.eachOfWhich = this;

        this.on = function (event, listener) {
            if (event !== "add") {
                throw new Error("AttrList: 'on' only responds to 'add' event");
            }

            if (typeof(listener) !== "function") {
                throw new Error("AttrList: 'on' requires a listener function as the second parameter");
            }

            listeners[event] = listener;
        };


        this.addTo = function (obj) {
            var prop,
            arr = [],
            actualList = {};
            if(!obj || typeof(obj) !== 'object') {
                throw new Error("AttrList: addTo method requires an object parameter");                
            } else {
                actualList.pop = delegate(arr, "pop");
                
                actualList.add = function (item) {
                    if ((that.validator())(item)) {
                        arr.push(item);
                        if (listeners.add !== undefined) {
                            //listeners.add.call();
                            listeners.add.call(obj, item, actualList.size());
                        }
                        return this;         
                    } else {
                        throw new Error(that.errorMessage());
                    }
                };

                actualList.replace = function (index, obj) {
                    if ((typeof(index) !== 'number') || (parseInt(index, 10) !== index)) {
                        throw new Error("AttrList: replace method requires index parameter to be an integer");
                    }

                    if (index < 0 || index >= this.size()) {
                        throw new Error("AttrList: replace method index parameter out of bounds");
                    }

                    if (!(that.validator())(obj)) {
                        throw new Error(that.errorMessage());
                    }

                    arr[index] = obj;
                    return this;
                };

                actualList.at = function (index) {
                    if (index < 0 || index >= this.size()) {
                        throw new Error("AttrList: Index out of bounds");
                    }
                    return arr[index];
                };

                //to keep things more java-y
                actualList.get = actualList.at;

                actualList.size = function () {
                    return arr.length;
                };

                actualList.toJSON = function (JSONreps) {
                    var result = [], 
                        i, j;

                    //check to make sure the current list is not in JSONreps
                    if (JSONreps !== undefined) {
                        for (i = 0;i < JSONreps.length; ++i) {
                            if (JSONreps[i].object === this) {
                                result = JSONreps[i].JSONrep;
                            }
                        }
                    }
                    
                    for (i = 0; i < arr.length; ++i) {
                        if (arr[i].toJSON) {
                            result.push(arr[i].toJSON(JSONreps));
                        } else {
                            result.push(arr[i]);
                        }
                    }
                    return result;
                };

                obj[name] = function () {
                    return actualList;
                };
            }
        };
    }

    //this needs to stay if we're going to use instanceof
    //but note we override all of the methods via delegation
    //so it's not doing anything except for making an AttrList
    //an instance of Attr
    AttrList.prototype = new window.jermaine.Attr(name);

    ns.AttrList = AttrList;
});
window.jermaine.util.namespace("window.jermaine", function (ns) {
    "use strict";

    var Method = function (name, method) {
        if (!name || typeof(name) !== "string") { 
            throw new Error("Method: constructor requires a name parameter which must be a string");
        } else if (!method || typeof(method) !== "function") {
            throw new Error("Method: second parameter must be a function");
        }
        
        this.addTo = function (obj) {
            if (!obj || typeof(obj) !== 'object') {
                throw new Error("Method: addTo method requires an object parameter");
            }
            
            obj[name] = method;
        };
    };
    ns.Method = Method;
});
window.jermaine.util.namespace("window.jermaine", function (ns) {
    "use strict";

    var Model = function (specification) {
        var methods = {},
            attributes = {},
            pattern,
            modified = true,
            requiredConstructorArgs = [],
            optionalConstructorArgs = [],
            parents = [],
            Method = ns.Method,
            Attr = ns.Attr,
            AttrList = ns.AttrList,
            EventEmitter = ns.util.EventEmitter,
            property,
            listProperties,
            updateConstructor,
            isImmutable,
            initializer = function () {},
            constructor = function () {},
            model = function () {
                if (modified) {
                    //validate the model if it has been modified
                    model.validate();
                    updateConstructor();
                }
                return constructor.apply(this, arguments);
            };


        //temporary fix so API stays the same
        if (arguments.length > 1) {
            specification = arguments[arguments.length-1];
        }

        //handle specification function
        if (specification && typeof(specification) === "function") {
            model = new Model();
            specification.call(model);
            return model;
        } else if (specification) {
            throw new Error("Model: specification parameter must be a function");
        }

        /********** BEGIN PRIVATE METHODS ****************/
        /* private method that abstracts hasA/hasMany */
        var hasAProperty = function (type, name) {
            var Property,
                methodName,
                attribute;

            //Property is one of Attr or AttrList
            Property = type==="Attr"?Attr:AttrList;

            //methodName is either hasA or hasMany
            methodName = type==="Attr"?"hasA":"hasMany";

            modified = true;
            
            if (typeof(name) === 'string') {
                attribute = new Property(name);
                attributes[name] = attribute;
                return attribute;
            } else {
                throw new Error("Model: " + methodName + " parameter must be a string");
            }
        };

        /* private method that abstracts attribute/method */
        property = function (type, name) {
            var result;

            if (typeof(name) !== "string") {
                throw new Error("Model: expected string argument to " + type + " method, but recieved " + name);
            }

            result = type==="attribute" ? attributes[name] : methods[name];

            if (result === undefined) {
                throw new Error("Model: " + type + " " + name  + " does not exist!");
            }

            return result;
        };

        /* private method that abstracts attributes/methods */
        listProperties = function (type) {
            var i,
            list = [],
            properties = type==="attributes"?attributes:methods;

            for (i in properties) {
                if (properties.hasOwnProperty(i)) {
                    list.push(i);
                }
            }

            return list;
        };

        /* private function that updates the constructor */
        updateConstructor = function () {
            constructor = function () {
                var i, j,
                    err,
                    attribute,
                    attributeList = model.attributes(), 
                    methodList = model.methods(), 
                    emitter = new EventEmitter(),
                    attr,
                    attrChangeListeners = {},
                    changeHandler,
                    addProperties,
                    that = this;

                if (!(this instanceof model)) {
                    if (arguments.length > 0) {
                        //bad form, but hopefully temporary
                        /*jshint newcap:false */
                        return new model(arguments);
                    } else {
                        //bad form, but hopefully temporary
                        /*jshint newcap:false */
                        return new model();
                    }
                    //throw new Error("Model: instances must be created using the new operator");
                }


                ////////////////////////////////////////////////////////////////
                ////////////// PUBLIC API FOR ALL INSTANCES ////////////////////
                ////////////////////////////////////////////////////////////////

                // this is a method associated with unit test
                // it("should not increment the listeners associated with the last object created"
                // it has been removed now that the bug has been fixed
                /*this.attrChangeListeners = function () {
                    return attrChangeListeners;
                };*/

                /**
                 * Returns the EventEmitter associated with this instance.
                 *
                 */
                this.emitter = function () {
                    return emitter;
                };

                /**
                 * Wrapper methods added to the internal EventEmitter object
                 * 
                 */

                this.emitter().removeJermaineChangeListener = function (attrName, obj) {
                    if (typeof(attrName) !== "string") {
                        throw new Error("attrName must be a string");
                    } else if (typeof(obj) !== "object" || obj.toJSON === undefined ||
                               obj.emitter === undefined) {
                        throw new Error("obj must be a jermaine object");
                    } else {
                        obj.emitter().removeListener("change", attrChangeListeners[attrName]);
                    }
                };

                this.emitter().addJermaineChangeListener = function (attrName, obj) {
                    if (typeof(attrName) !== "string") {
                        throw new Error("attrName must be a string");
                    } else if (typeof(obj) !== "object" || obj.toJSON === undefined ||
                               obj.emitter === undefined) {
                        throw new Error("obj must be a jermaine object");
                    } else {
                        if (attrChangeListeners[attrName] === undefined) {
                            attrChangeListeners[attrName] = function (data) {
                                var newData = [],
                                emit = true;
                                
                                for (i = 0; i < data.length && emit === true; ++i) {
                                    newData.push(data[i]);
                                    if (data[i].origin === that) {
                                        emit = false;
                                    }
                                }
                                
                                if (emit) {
                                    newData.push({key:attrName, origin:that});
                                    that.emit("change", newData);
                                }
                            };
                            
                        }
                        obj.emitter().on("change", attrChangeListeners[attrName]);
                    }
                };


                /**
                 * Registers a listener for this instance's changes.
                 *
                 */
                this.on = this.emitter().on;

                /**
                 * Emits an event
                 */
                this.emit = this.emitter().emit;

                /**
                 * Returns a JSON representation of this instance.
                 *
                 */
                this.toJSON = function (JSONreps) {
                    var attributeValue,
                        i, j,
                        thisJSONrep = {},
                        attributeJSONrep;

                    if (JSONreps === undefined) {
                        // first call
                        JSONreps = [];
                        JSONreps.push({object:this, JSONrep:thisJSONrep});
                    } else if (typeof(JSONreps) !== "object") {
                        // error condition 
                        throw new Error("Instance: toJSON should not take a parameter (unless called recursively)");
                    } else {
                        // find the current JSON representation of this object, if it exists
                        for (i = 0; i < JSONreps.length; ++i) {
                            if (JSONreps[i].object === this) {
                                thisJSONrep = JSONreps[i].JSONrep;
                            }
                        }
                    }

                    for (i = 0; i < attributeList.length; ++i) {
                        attributeJSONrep = null;
                        // get the attribute
                        attributeValue = this[attributeList[i]]();
                        
                        // find the current JSON representation for the attribute, if it exists
                        for (j = 0; j < JSONreps.length; ++j) {
                            if (JSONreps[j].object === attributeValue) {
                                attributeJSONrep = JSONreps[j].JSONrep;
                            }
                        }

                        if (attributeValue !== undefined && attributeValue !== null && attributeValue.toJSON !== undefined && attributeJSONrep === null) {
                            // create a new entry for the attribute
                            attributeJSONrep = (attributes[attributeList[i]] instanceof AttrList)?[]:{};
                            JSONreps.push({object:attributeValue, JSONrep:attributeJSONrep});
                            JSONreps[JSONreps.length-1].JSONrep = attributeValue.toJSON(JSONreps);
                        }

                        // fill out the JSON representation for this object
                        if(attributeJSONrep === null) {
                            thisJSONrep[attributeList[i]] = attributeValue;
                        } else {
                            thisJSONrep[attributeList[i]] = attributeJSONrep;
                        }
                    }
                    return thisJSONrep;
                };

                /**
                 * Returns a String representation of this instance
                 *
                 */
                this.toString = (pattern !== undefined)?pattern:function () {
                    return "Jermaine Model Instance";
                };


                ////////////////////////////////////////////////////////////////
                ////////////// END PUBLIC API FOR ALL INSTANCES ////////////////
                ////////////////////////////////////////////////////////////////


                /**
                 * This is a private method that sets up handling for the setter
                 * It attaches a change listener on new objects
                 * and it removes the change listener from old objects
                 */
                changeHandler = function (attr) {
                    if (!(attr instanceof AttrList)) {
                        //when set handler is called, this should be the current object
                        attr.on("set", function (newValue, preValue) {
                            // if preValue is a model instance, we need to remove the listener from it
                            if (preValue !== undefined && preValue !== null && preValue.on !== undefined &&
                                preValue.toJSON !== undefined && preValue.emitter !== undefined) {
                                // we now assume preValue is a model instance
                                
                                // sanity check 1
                                if (preValue.emitter().listeners("change").length < 1) {
                                    throw new Error("preValue should always have a listener defined if it is a model");
                                }
                                
                                this.emitter().removeJermaineChangeListener(attr.name(), preValue);
                            }
                            
                            // if newValue is a model instance, we need to attach a listener to it
                            if (newValue !== undefined && newValue !== null && newValue.on !== undefined &&
                                newValue.toJSON !== undefined && newValue.emitter !== undefined) {
                                // we now assume newValue is a model instance
                                
                                // attach a listener
                                this.emitter().addJermaineChangeListener(attr.name(), newValue);
                            }

                            // finally emit that a change has happened
                            this.emit("change", [{key:attr.name(), value:newValue, origin:this}]);
                        });
                    } else {
                        attr.on("add", function (newValue, newSize) {
                            this.emit("change", [{action:"add", key:attr.name(), value:newValue, origin:this}]);
                        });
                    }
                };

                //set up event handling for sub objects
                for (i = 0; i < attributeList.length;  ++i) {
                    attr = model.attribute(attributeList[i]);

                    // temporarily not adding handlers to attr lists
                    // until we get the bugs sorted out
                    // see model test "should not add change listeners to attr list"
                    //if (!(attr instanceof AttrList)) {
                    changeHandler.call(this, attr);
                    //}
                }


                // add all of the attributes and the methods to the object
                for (i = 0; i < attributeList.length + methodList.length; ++i)  {
                    if (i < attributeList.length) {
                        //if the object is immutable, all attributes should be immutable
                        if (isImmutable) {
                            model.attribute(attributeList[i]).isImmutable();
                        }
                        model.attribute(attributeList[i]).addTo(this);
                    } else {
                        model.method(methodList[i-attributeList.length]).addTo(this);
                    }
                }

                // build the object using the constructor arguments
                if(arguments.length > 0) {
                    if (arguments.length < requiredConstructorArgs.length) {
                        //construct and throw error
                        err = "Constructor requires ";
                        for(i = 0; i < requiredConstructorArgs.length; ++i) {
                            err += requiredConstructorArgs[i];
                            err += i===requiredConstructorArgs.length-1?"":", ";
                        }
                        err += " to be specified";
                        throw new Error(err);
                    } if (arguments.length > requiredConstructorArgs.length + optionalConstructorArgs.length) {
                        throw new Error("Too many arguments to constructor. Expected " + requiredConstructorArgs.length + " required arguments and " +
                                        optionalConstructorArgs.length + " optional arguments");
                    }
                    else {
                        for (i = 0; i < arguments.length; ++i) {
                            attribute = i < requiredConstructorArgs.length?
                                requiredConstructorArgs[i]:
                                optionalConstructorArgs[i-requiredConstructorArgs.length];

                            if (model.attribute(attribute) instanceof AttrList) {
                                //make sure that arguments[i] is an array
                                if (Object.prototype.toString.call(arguments[i]) !== "[object Array]") {
                                    throw new Error("Model: Constructor requires 'names' attribute to be set with an Array");
                                } else {
                                    //iterate over the array adding the elements
                                    for (j = 0; j < arguments[i].length; ++j) {
                                        this[attribute]().add(arguments[i][j]);
                                    }
                                }
                            } else {
                                //go ahead and set it like normal
                                this[attribute](arguments[i]);
                            }
                        }
                    }
                }

                // finally, call the initializer
                initializer.call(this);
            };
        };
        /*********** END PRIVATE METHODS **************/


        /*********** BEGIN PUBLIC API *****************/
        model.hasA = function (attr) {
            return hasAProperty("Attr", attr);
        };
        
        model.hasAn = model.hasA;
        model.hasSome = model.hasA;
        
        model.hasMany = function (attrs) {
            return hasAProperty("AttrList", attrs);
        };

        model.isA = function (parent) {
            var i,
                parentAttributes,
                parentMethods,
                isAModel;

            modified = true;

            //checks to make sure a potentialModel has all attributes of a model
            isAModel = function (potentialModel) {
                var i,
                    M = new Model();
                for (i in M) {
                    if (M.hasOwnProperty(i) && typeof(potentialModel[i]) !== typeof(M[i])) {
                        return false;
                    }
                }
                return true;
            };

            //confirm parent is a model via duck-typing
            if (typeof (parent) !== "function" || !isAModel(parent)) {
                throw new Error("Model: parameter sent to isA function must be a Model");
            }

            //only allow single inheritance for now
            if (parents.length === 0) {
                parents.push(parent);
            } else {
                throw new Error("Model: Model only supports single inheritance at this time");
            }

            //add attributes and methods to current model
            parentAttributes = parents[0].attributes();
            for (i = 0; i < parentAttributes.length; ++i) {
                if (attributes[parentAttributes[i]] === undefined) {
                    attributes[parentAttributes[i]] = parents[0].attribute(parentAttributes[i]).clone();
                    //subclass attributes are mutable by default
                    attributes[parentAttributes[i]].isMutable();
                }
            }

            parentMethods = parents[0].methods();
            for (i = 0; i < parentMethods.length; ++i) {
                if (methods[parentMethods[i]] === undefined) {
                    methods[parentMethods[i]] = parents[0].method(parentMethods[i]);
                }
            }            

            for (i = 0; i < parents.length; i++) {
                model.prototype = new parents[i]();
            }
        };

        model.isAn = model.isA;

        model.parent = function () {
            return parents[0].apply(this, arguments);
        };

        model.attribute = function (attr) {
            return property("attribute", attr);
        };

        model.attributes = function () {
            return listProperties("attributes");
        };

        model.method = function (m) {
            return property("method", m);
        };
        
        model.methods = function () {
            return listProperties("methods");
        };

        model.isBuiltWith = function () {
            var optionalParamFlag = false,
            i;

            modified = true;
            requiredConstructorArgs = [];
            optionalConstructorArgs = [];

            for (i = 0; i < arguments.length; ++i) {
                if (typeof(arguments[i]) === "string" && arguments[i].charAt(0) !== '%') {
                    //in required parms
                    if (optionalParamFlag) {
                        //throw error
                        throw new Error("Model: isBuiltWith requires parameters preceded with a % to be the final parameters before the optional function");
                    } else {
                        //insert into required array
                        requiredConstructorArgs.push(arguments[i]);
                    }
                } else if(typeof(arguments[i]) === "string" && arguments[i].charAt(0) === '%') {
                    //in optional parms
                    optionalParamFlag = true;
                    //insert into optional array
                    optionalConstructorArgs.push(arguments[i].slice(1));
                } else if(typeof(arguments[i]) === "function" && i === arguments.length - 1) {
                    //init function
                    initializer = arguments[i];
                } else {
                    throw new Error("Model: isBuiltWith parameters must be strings except for a function as the optional final parameter");
                }
            }
        };
        
        model.isImmutable = function () {
            isImmutable = true;
        };

        model.looksLike = function (p) {
            modified = true;
            pattern = p;
        };

        model.respondsTo = function (methodName, methodBody) {
            var m = new Method(methodName, methodBody);
            modified = true;
            methods[methodName] = m;
        };
        
        model.validate = function () {
            var i,
                attributes = this.attributes(),
                methods = this.methods();

            //check to make sure that isBuiltWith has actual attributes
            for (i = 0; i < requiredConstructorArgs.length; ++i) {
                try {
                    this.attribute(requiredConstructorArgs[i]);
                } catch (e) {
                    throw new Error(requiredConstructorArgs[i] + ", specified in the isBuiltWith method, is not an attribute");
                }
            }

            for (i = 0; i < optionalConstructorArgs.length; ++i) {
                try {
                    this.attribute(optionalConstructorArgs[i]);
                } catch (e) {
                    throw new Error(optionalConstructorArgs[i] + ", specified in the isBuiltWith method, is not an attribute");
                }
            }

            //check for method/attribute collisions
            for (i = 0; i < attributes.length; i++) {
                if (methods.indexOf(attributes[i]) > -1) {
                    throw new Error("Model: invalid model specification to " + attributes[i] + " being both an attribute and method");
                }
            }

            //check to make sure that all attributes are requiredConstructorArgs if the object is immutable
            if (isImmutable) {
                for (i = 0; i < attributes.length; i++) {
                    if (requiredConstructorArgs.indexOf(attributes[i]) < 0) {
                        throw new Error("immutable objects must have all attributes required in a call to isBuiltWith");
                    }
                }
            }

            //set modifiedSinceLastValidation to false
            modified = false;
        };
        /************** END PUBLIC API ****************/
        
        //here we are returning our model object
        //which is a function with a bunch of methods that
        //manipulate how the function behaves
        return model;
    };

    ns.Model = Model;
});
;(function (window) {
    ////////////// WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////
    window.jermaine.BaseView = new window.jermaine.Model(function () {
        var watchers = {};

        this.hasAn("instance");
        this.hasA("renderer").which.isA("function");

        this.respondsTo("render", function () {
            return this.renderer()(this.instance().toJSON());
        });

        this.respondsTo("watches", function (attribute, responder) {
            watchers[attribute] = responder;
        });

        this.respondsTo("rendersWith", function (r) {
            this.renderer(r);
        });

        this.isBuiltWith("instance", "%renderer", function () {
            var that = this,
                key;

            //it's possible this is called with an empty constructor,
            //so instance could be undefined
            if (this.instance() !== undefined) {
                this.instance().on("change", function(data) {
                    var i;

                    //reset key
                    key = "";

                    for (i = data.length-1; i >= 0; i--) {
                        key += data[i].key;
                        if (i !== 0) {
                            key += ".";
                        }
                    }

                    if (watchers[key] !== undefined) {
                        //do something with the new value

                        //note we sent in 'that' because in the view, this
                        //should point to the view itself, not the model
                        watchers[key].call(that, data[0].value);
                    }
                });
            }
        });
    });
    ////////////// END WILL EVENTUALLY BE MOVED TO JERMAINE //////////////////

    window.jermaine.View = function (specification) {
        var watchers = {},
            renderer = null,
            initializer = null,
            view,
            ResultView;

        ResultView = new window.jermaine.Model (function () {
            var that = this;

            this.isA(window.jermaine.BaseView);

            this.isBuiltWith("instance", function () {
                var key;

                that.parent.apply(this, [this.instance()]);

                for (key in watchers) {
                    this.watches(key, watchers[key]);
                }

                if (renderer !== null) {
                    this.renderer(renderer);
                }

                if (initializer !== null) {
                    initializer.call(this);
                }
            });
        });

        ResultView.rendersWith = function (r) {
            renderer = r;
        };

        ResultView.watches = function (a, r) {
            watchers[a] = r;
        };

        ResultView.initializesWith = function (init) {
            initializer = init;
        };

        specification.call(ResultView);

        return ResultView;
    };

}(window));
