(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46991d9b"],{"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},3037:function(t,e,n){},"3a35":function(t,e,n){"use strict";var r=n("3037"),a=n.n(r);a.a},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),o=n("7b0b"),c=n("50c4"),i=n("a691"),u=n("1d80"),l=n("8aa5"),s=n("14c3"),f=Math.max,p=Math.min,h=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var E=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,b=E?"$":"$0";return[function(n,r){var a=u(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!E&&x||"string"===typeof r&&-1===r.indexOf(b)){var o=n(e,t,this,r);if(o.done)return o.value}var u=a(t),h=String(this),v="function"===typeof r;v||(r=String(r));var d=u.global;if(d){var S=u.unicode;u.lastIndex=0}var $=[];while(1){var y=s(u,h);if(null===y)break;if($.push(y),!d)break;var A=String(y[0]);""===A&&(u.lastIndex=l(h,c(u.lastIndex),S))}for(var _="",k=0,N=0;N<$.length;N++){y=$[N];for(var R=String(y[0]),C=f(p(i(y.index),h.length),0),P=[],w=1;w<y.length;w++)P.push(g(y[w]));var T=y.groups;if(v){var U=[R].concat(P,C,h);void 0!==T&&U.push(T);var I=String(r.apply(void 0,U))}else I=m(R,h,C,P,T,r);C>=k&&(_+=h.slice(k,C)+I,k=C+R.length)}return _+h.slice(k)}];function m(t,n,r,a,c,i){var u=r+t.length,l=a.length,s=d;return void 0!==c&&(c=o(c),s=v),e.call(i,s,(function(e,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":i=c[o.slice(1,-1)];break;default:var s=+o;if(0===s)return e;if(s>l){var f=h(s/10);return 0===f?e:f<=l?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):e}i=a[s-1]}return void 0===i?"":i}))}}))},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),o=function(t){return function(e,n){var o,c,i=String(a(e)),u=r(n),l=i.length;return u<0||u>=l?t?"":void 0:(o=i.charCodeAt(u),o<55296||o>56319||u+1===l||(c=i.charCodeAt(u+1))<56320||c>57343?t?i.charAt(u):o:t?i.slice(u,u+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),o=n("b622"),c=n("9263"),i=n("9112"),u=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=o(t),d=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=d&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!d||!g||"replace"===t&&(!l||!s||p)||"split"===t&&!h){var E=/./[v],x=n(v,""[t],(function(t,e,n,r,a){return e.exec===c?d&&!a?{done:!0,value:E.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=x[0],m=x[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}f&&i(RegExp.prototype[v],"sham",!0)}},e978:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("header-component",{attrs:{title:"手机号校验"}}),n("div",{staticClass:"check-id"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNo,expression:"phoneNo"}],staticClass:"input-id",attrs:{type:"text",maxlength:"11",placeholder:"请输入手机号"},domProps:{value:t.phoneNo},on:{keyup:t.keyUp,input:function(e){e.target.composing||(t.phoneNo=e.target.value)}}}),n("button",{staticClass:"subimt-btn",on:{click:t.check}},[t._v("校验")])])],1)},a=[],o=(n("ac1f"),n("5319"),function(t){var e=/^((13[0-9])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|147|166|198|199)\d{8}$/;return console.log(e.test(t)),!!e.test(t)||0===t.length&&"手机号为空"}),c={name:"checkPhoneNo",data:function(){return{phoneNo:"15732520529"}},methods:{check:function(){var t=this,e=t.phoneNo,n=o(e);alert("检验结果为 "+n)},keyUp:function(){this.phoneNo=this.phoneNo.replace(/[^(\d)]/gi,"")}}},i=c,u=(n("3a35"),n("2877")),l=Object(u["a"])(i,r,a,!1,null,"2a263f0a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-46991d9b.a2518629.js.map