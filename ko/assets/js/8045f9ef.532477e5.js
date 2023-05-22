"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[3678],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5609:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(4137)),i=["components"],s={title:"Compatibility of AdGuard VPN with Chromecast",sidebar_position:5},c=void 0,l={unversionedId:"adguard-vpn-for-android/solving-problems/chromecast",id:"adguard-vpn-for-android/solving-problems/chromecast",title:"Compatibility of AdGuard VPN with Chromecast",description:"The built-in Chromecast technology is incompatible with running a VPN because it uses the DLNA protocol which does not support VPN connections. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won't be recognised by the mobile device.",source:"@site/docs/adguard-vpn-for-android/solving-problems/chromecast.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/chromecast",permalink:"/KnowledgeBaseVPN/ko/adguard-vpn-for-android/solving-problems/chromecast",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/chromecast.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Compatibility of AdGuard VPN with Chromecast",sidebar_position:5},sidebar:"sidebar",previous:{title:"\uc81c\ud55c \ubaa8\ub4dc \uc0c1\ud0dc\uc5d0\uc11c \ud504\ub85c\ud544 \uc0ac\uc6a9\uc73c\ub85c \uc778\ud55c \ubb38\uc81c",permalink:"/KnowledgeBaseVPN/ko/adguard-vpn-for-android/solving-problems/restricted-mode"},next:{title:"\uae30\ub2a5 \uac1c\uc694",permalink:"/KnowledgeBaseVPN/ko/adguard-vpn-for-ios/overview"}},u={},d=[],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The built-in Chromecast technology is incompatible with running a VPN because it uses the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance"},"DLNA protocol")," which does not support VPN connections. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won't be recognised by the mobile device."),(0,a.kt)("p",null,"Google has also blocked the ability to change the Chromecast's network settings by restricting access to its DNS settings. This also prevents Chromecast from working with a VPN."),(0,a.kt)("p",null,"You can solve the problem by setting up a VPN on a router. This will allow all devices connected to the router to use the VPN connection, including Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer's manual."))}m.isMDXComponent=!0}}]);