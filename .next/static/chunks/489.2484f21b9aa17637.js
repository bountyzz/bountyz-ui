(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{2072:function(n,e,t){"use strict";var r=t(85893);t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}e.Z=function(n){var e=n.className,t=c(n,["className"]);return(0,r.jsx)("button",function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){o(n,e,t[e])}))}return n}({},t,{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ".concat(e)}))}},2405:function(n,e,t){"use strict";t.r(e);var r=t(34051),o=t.n(r),c=t(85893),i=(t(67294),t(11549)),u=t(2072),a=t(906);function l(n,e,t,r,o,c,i){try{var u=n[c](i),a=u.value}catch(l){return void t(l)}u.done?e(a):Promise.resolve(a).then(r,o)}e.default=function(){var n=(0,a.oR)(),e=function(){var n,e=(n=o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i.ZP.connect();case 1:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var c=n.apply(e,t);function i(n){l(c,r,o,i,u,"next",n)}function u(n){l(c,r,o,i,u,"throw",n)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();return n.state.loggedIn?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("p",{className:"mt-2",children:["Wallet: ",n.state.wallet]})}):(0,c.jsx)(u.Z,{onClick:e,children:"Connect your wallet"})}},11549:function(n,e,t){"use strict";var r=t(34051),o=t.n(r),c=t(54713),i=t(41436),u=t(57007);function a(n,e,t,r,o,c,i){try{var u=n[c](i),a=u.value}catch(l){return void t(l)}u.done?e(a):Promise.resolve(a).then(r,o)}function l(n,e,t){n.on(i.n2.CONNECTED,e),n.on(i.n2.CONNECTING,(function(){console.log("connecting")})),n.on(i.n2.DISCONNECTED,t),n.on(i.n2.ERRORED,(function(n){console.log("someerror or user have cancelled login request",n)})),n.on(u.J.MODAL_VISIBILITY,(function(n){console.log("modal visibility",n)}))}var s={chainNamespace:i.EN.EIP155,rpcTarget:"https://rpc-mumbai.maticvigil.com",blockExplorer:"https://mumbai-explorer.matic.today",chainId:"0x13881",displayName:"Polygon Mumbai Testnet",ticker:"matic",tickerName:"matic"},f=new c.$L({chainConfig:s,clientId:"BAEuAwh_XX88GzRhxUkwEeI-gA9R-QqIWBiZpo8F5fOhYAOLH_IsXnq4jXnMbr-y7H7lcgJBG52uJYoaLrS2Ei8"}),p=function(){var n,e=(n=o().mark((function n(e,t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(f,e,t),n.prev=1,n.next=4,f.initModal();case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:case"end":return n.stop()}}),n,null,[[1,6]])})),function(){var e=this,t=arguments;return new Promise((function(r,o){var c=n.apply(e,t);function i(n){a(c,r,o,i,u,"next",n)}function u(n){a(c,r,o,i,u,"throw",n)}i(void 0)}))});return function(n,t){return e.apply(this,arguments)}}();e.ZP={initializeModal:p,connect:function(){return f.connect()},getUserInfo:function(){return f.getUserInfo()},logout:function(){return f.logout()},web3auth:f}},46601:function(){},89214:function(){},71156:function(){},52361:function(){},94616:function(){}}]);