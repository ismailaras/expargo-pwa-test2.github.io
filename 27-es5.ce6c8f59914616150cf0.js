function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28,29,32],{"0Inu":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("fXoL"),r=t("H+bZ"),i=function(){var e=function(){function e(n){_classCallCheck(this,e),this.apiService=n}return _createClass(e,[{key:"getPackages",value:function(e){return this.apiService.get("/packages/"+e)}},{key:"getPackage",value:function(e){return this.apiService.get("/package/"+e)}},{key:"setPackagesToPaid",value:function(e,n,t){return this.apiService.post("/package/set_paid",{packages:e,amount:n,user_id:t})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.Tb(r.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"Mky/":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function e(){_classCallCheck(this,e)}}}]);