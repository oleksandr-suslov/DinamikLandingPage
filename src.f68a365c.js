parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e=document.getElementById("time"),t=document.getElementById("greeting"),n=document.getElementById("name"),o=document.getElementById("focus");function g(){let t=new Date,n=t.getHours(),o=t.getMinutes(),u=t.getSeconds();n=n%12||12,e.innerHTML=`${s(n)}<span>:</span>${s(o)}<span>:</span>${s(u)}`,setTimeout(g,1e3)}function s(e){return(parseInt(e,10)<10?"0":"")+e}function u(){let e=(new Date).getHours();e<12?(document.body.style.backgroundImage="url('../images/morning.jpg')",t.textContent="Good morning"):e<18?(document.body.style.backgroundImage="url('../images/afternoon.jpg')",document.body.style.color="yellow",t.textContent="good afternoon"):(document.body.style.backgroundImage="url('../images/night.jpg')",t.textContent="good evening!")}g(),g(),u();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.f68a365c.js.map