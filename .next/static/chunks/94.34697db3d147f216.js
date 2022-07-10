"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{86094:function(i,n,t){t.r(n),t.d(n,{OpenloginAdapter:function(){return d},getOpenloginDefaultOptions:function(){return l}});var e=t(3388),o=t(41436),r=t(4942),s=t(72378),a=t.n(s),c=t(2043),h=t.n(c);const l=(i,n)=>({adapterSettings:{network:e.dr.MAINNET,clientId:"",uxMode:e.$e.POPUP},chainConfig:i?(0,o.h2)(i,n):void 0,loginSettings:{relogin:!0}});function p(i,n){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),t.push.apply(t,e)}return t}function g(i){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(i,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))}))}return i}class d extends o.J5{constructor(i){var n,t,s;super(),(0,r.Z)(this,"name",o.rW.OPENLOGIN),(0,r.Z)(this,"adapterNamespace",o.yk.MULTICHAIN),(0,r.Z)(this,"type",o.hN.IN_APP),(0,r.Z)(this,"openloginInstance",null),(0,r.Z)(this,"status",o.MP.NOT_READY),(0,r.Z)(this,"currentChainNamespace",o.EN.EIP155),(0,r.Z)(this,"openloginOptions",void 0),(0,r.Z)(this,"loginSettings",{}),(0,r.Z)(this,"privKeyProvider",null),h().debug("const openlogin adapter",i);const a=l(null===(n=i.chainConfig)||void 0===n?void 0:n.chainNamespace,null===(t=i.chainConfig)||void 0===t?void 0:t.chainId);if(this.openloginOptions=g(g({clientId:"",network:e.dr.MAINNET},a.adapterSettings),i.adapterSettings||{}),this.loginSettings=g(g({},a.loginSettings),i.loginSettings),null!==(s=i.chainConfig)&&void 0!==s&&s.chainNamespace){var c;this.currentChainNamespace=null===(c=i.chainConfig)||void 0===c?void 0:c.chainNamespace;const n=a.chainConfig?a.chainConfig:{};if(this.chainConfig=g(g({},n),null===i||void 0===i?void 0:i.chainConfig),h().debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget)throw o.Ty.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?g({},this.chainConfig):void 0}get provider(){var i;return(null===(i=this.privKeyProvider)||void 0===i?void 0:i.provider)||null}set provider(i){throw new Error("Not implemented")}async init(i){var n;if(super.checkInitializationRequirements(),null===(n=this.openloginOptions)||void 0===n||!n.clientId)throw o.Ty.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig)throw o.Ty.invalidParams("chainConfig is required before initialization");this.openloginInstance=new e.ZP(this.openloginOptions);const t=(0,e.Gv)();let r=!0;Object.keys(t).length>0&&t.result&&(r=!0),await this.openloginInstance.init(),this.status=o.MP.READY,this.emit(o.n2.READY,o.rW.OPENLOGIN);try{this.openloginInstance.privKey&&(i.autoConnect||r)&&await this.connect()}catch(s){h().error("Failed to connect with cached openlogin provider",s),this.emit("ERRORED",s)}}async connect(i){super.checkConnectionRequirements(),this.status=o.MP.CONNECTING,this.emit(o.n2.CONNECTING,g(g({},i),{},{adapter:o.rW.OPENLOGIN}));try{return await this.connectWithProvider(i),this.provider}catch(n){if(h().error("Failed to connect with openlogin provider",n),this.status=o.MP.READY,this.emit(o.n2.ERRORED,n),null!==n&&void 0!==n&&n.message.includes("user closed popup"))throw o.RM.popupClosed();throw o.RM.connectionError("Failed to login with openlogin")}}async disconnect(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==o.MP.CONNECTED)throw o.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw o.Ty.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),i.cleanup?(this.status=o.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=o.MP.READY,this.emit(o.n2.DISCONNECTED)}async getUserInfo(){if(this.status!==o.MP.CONNECTED)throw o.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw o.Ty.notReady("openloginInstance is not ready");return await this.openloginInstance.getUserInfo()}setAdapterSettings(i){if(this.status===o.MP.READY)return;const n=l();this.openloginOptions=g(g(g({},n.adapterSettings),this.openloginOptions||{}),i)}setChainConfig(i){super.setChainConfig(i),this.currentChainNamespace=i.chainNamespace}async connectWithProvider(i){if(!this.chainConfig)throw o.Ty.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw o.Ty.notReady("openloginInstance is not ready");if(this.currentChainNamespace===o.EN.SOLANA){const{SolanaPrivateKeyProvider:i}=await Promise.all([t.e(662),t.e(766),t.e(351),t.e(761),t.e(108),t.e(341),t.e(124)]).then(t.bind(t,44445));this.privKeyProvider=new i({config:{chainConfig:this.chainConfig}})}else{if(this.currentChainNamespace!==o.EN.EIP155)throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));{const{EthereumPrivateKeyProvider:i}=await Promise.all([t.e(662),t.e(482),t.e(351),t.e(761),t.e(62),t.e(52)]).then(t.bind(t,52062));this.privKeyProvider=new i({config:{chainConfig:this.chainConfig}})}}!this.openloginInstance.privKey&&i&&await this.openloginInstance.login(a()(this.loginSettings,{loginProvider:i.loginProvider},{extraLoginOptions:{login_hint:null===i||void 0===i?void 0:i.login_hint}}));let n=this.openloginInstance.privKey;if(n){if(this.currentChainNamespace===o.EN.SOLANA){const{getED25519Key:i}=await Promise.all([t.e(108),t.e(418)]).then(t.bind(t,33946));n=i(n).sk.toString("hex")}await this.privKeyProvider.setupProvider(n),this.status=o.MP.CONNECTED,this.emit(o.n2.CONNECTED,{adapter:o.rW.OPENLOGIN,reconnected:!i})}}}}}]);