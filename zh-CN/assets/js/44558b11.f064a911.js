"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7586],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=["components"],d={title:"AdGuard \u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f\u7684\u517c\u5bb9\u6027",sidebar_position:3},s=void 0,p={unversionedId:"adguard-vpn-for-ios/solving-problems/integrated-mode",id:"adguard-vpn-for-ios/solving-problems/integrated-mode",title:"AdGuard \u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f\u7684\u517c\u5bb9\u6027",description:"AdGuard VPN has two operating modes: VPN and Integrated.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/adguard-vpn-for-ios/solving-problems/integrated-mode.md",sourceDirName:"adguard-vpn-for-ios/solving-problems",slug:"/adguard-vpn-for-ios/solving-problems/integrated-mode",permalink:"/KnowledgeBaseVPN/zh-CN/adguard-vpn-for-ios/solving-problems/integrated-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-ios/solving-problems/integrated-mode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"AdGuard \u5e7f\u544a\u62e6\u622a\u7a0b\u5e8f\u7684\u517c\u5bb9\u6027",sidebar_position:3},sidebar:"sidebar",previous:{title:"\u5982\u4f55\u6536\u96c6\u548c\u53d1\u9001\u65e5\u5fd7\u8bb0\u5f55",permalink:"/KnowledgeBaseVPN/zh-CN/adguard-vpn-for-ios/solving-problems/logs"},next:{title:"\u901a\u8fc7 App Store \u8d2d\u4e70\u8ba2\u9605\u7684\u4f7f\u7528\u95ee\u9898",permalink:"/KnowledgeBaseVPN/zh-CN/adguard-vpn-for-ios/solving-problems/access-issues"}},l={},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"AdGuard VPN has two operating modes: ",(0,o.kt)("em",{parentName:"p"},"VPN")," and ",(0,o.kt)("em",{parentName:"p"},"Integrated"),"."),(0,o.kt)("p",null,"The VPN mode is enabled by default and uses the ",(0,o.kt)("a",{parentName:"p",href:"/general/adguard-vpn-protocol"},"AdGuard VPN protocol"),". It provides the best combination of connection speed and security. However, this operating mode does not allow AdGuard VPN and AdGuard Ad Blocker to work simultaneously."),(0,o.kt)("p",null,"In Integrated mode, in turn, the IPsec protocol is used, which makes it possible for the AdGuard apps to work together. If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use our apps at the same time. If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open AdGuard VPN for iOS and select ",(0,o.kt)("em",{parentName:"p"},"Settings")," in the lower right corner of the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("em",{parentName:"p"},"App settings")," and select ",(0,o.kt)("em",{parentName:"p"},"Operating mode"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch the mode from ",(0,o.kt)("em",{parentName:"p"},"VPN")," to ",(0,o.kt)("em",{parentName:"p"},"Integrated"),". \u5b8c\u6210\uff01"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In ",(0,o.kt)("em",{parentName:"p"},"Integrated mode"),", ",(0,o.kt)("em",{parentName:"p"},"Exclusions")," and ",(0,o.kt)("em",{parentName:"p"},"DNS server")," are not available."))))}m.isMDXComponent=!0}}]);