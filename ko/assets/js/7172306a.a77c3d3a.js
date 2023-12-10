"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7081],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,g=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],u={title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",sidebar_position:7},l=void 0,c={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",description:"\uc18c\uac1c",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/ko/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"AdGuard VPN\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc554\ud638\ud654 \uc720\ud615",sidebar_position:7},sidebar:"sidebar",previous:{title:"\uad6c\ub3c5 \ubc29\ubc95",permalink:"/KnowledgeBaseVPN/ko/general/subscription"},next:{title:"How to set up AdGuard VPN on your router",permalink:"/KnowledgeBaseVPN/ko/general/set-up-adguard-vpn-on-your-router"}},p={},d=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"AES\uc758 \uc5ed\uc0ac",id:"aes\uc758-\uc5ed\uc0ac",level:2},{value:"AES-256 \uc791\ub3d9 \ubc29\uc2dd",id:"aes-256-\uc791\ub3d9-\ubc29\uc2dd",level:2}],s={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,a.kt)("p",null,"\uc554\ud638\ud654\ub294 Virtual Private Network(VPN)\ub77c\ub294 \ub2e8\uc5b4\uc5d0 '\uac1c\uc778'(Private)\uc774\ub77c\ub294 \ub2e8\uc5b4\uac00 \uc874\uc7ac\ud558\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. A VPN creates a tunnel between your device and a VPN server, passing through which your data is encrypted and then securely transmitted to the open Internet. \uc554\ud638\ud654\ub294 \ub370\uc774\ud130\ub97c \uac00\ub85c\ucc44\ub294 \uc0ac\ub78c\uc774 \ud574\ub3c5\ud560 \uc218 \uc5c6\ub294 \ud615\ud0dc\ub85c \ubcc0\ud658\ud558\ub294 \uac83\uc73c\ub85c, \uc554\ud638\ud654\ub294 VPN \uc11c\ube44\uc2a4\uc5d0 \ud544\uc218\uc801\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"The AdGuard VPN protocol uses the most secure and fast encryption algorithm to date \u2014 AES-256. AES-256 \uc54c\uace0\ub9ac\uc998\uc774 \ubb34\uc5c7\uc778\uc9c0, \uc5b4\ub5a4 \uc7a5\uc810\uc774 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"aes\uc758-\uc5ed\uc0ac"},"AES\uc758 \uc5ed\uc0ac"),(0,a.kt)("p",null,"AES(Advanced Encryption Standard) \uc554\ud638\ud654\ub294 20\uc138\uae30 \ud6c4\ubc18 \ubbf8\uad6d \uc815\ubd80\uc758 \uc694\uccad\uc73c\ub85c \uac1c\ubc1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uae30\uc874 DES(Data Encryption Standard)\ub294 \uad6c\uc2dd\uc774 \ub418\uc5c8\uace0, \ub354 \uc548\uc804\ud55c \uc0c8 \uc554\ud638\ud654 \uc54c\uace0\ub9ac\uc998\uc774 \ud544\uc694\ud588\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc815\ubd80\uac00 \ubc1c\ud45c\ud55c \uacf5\uac1c \uacbd\uc7c1\uc5d0\uc11c Rijndael \uc554\ud638\uac00 \uc6b0\uc2b9\uc744 \ucc28\uc9c0\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uc554\ud638\ub294 DES\uc640 \ub9e4\uc6b0 \uc720\uc0ac\ud558\uc9c0\ub9cc \ud6e8\uc52c \ub354 \ubcf5\uc7a1\ud569\ub2c8\ub2e4. 2002\ub144\uc5d0 AES\ub85c \uc774\ub984\uc774 \ubc14\ub00c\uc5c8\uace0 \ubbf8\uad6d \uad6d\ub9bd \ud45c\uc900 \uae30\uc220 \uc5f0\uad6c\uc18c\uc5d0 \uc758\ud574 \uacf5\uac1c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc624\ub298\ub0a0 AES\ub294 \uc554\ud638\ud654\uc758 \uc5c5\uacc4 \ud45c\uc900\uc785\ub2c8\ub2e4. \uc624\ud508 \uc18c\uc2a4 \uad6c\uc870\ub85c \uc778\ud574 AES\ub294 NSA \ubc0f \uc815\ubd80 \uae30\uad00\uc740 \ubb3c\ub860 \ubbfc\uac04, \uc0c1\uc5c5 \ubc0f \ube44\uc601\ub9ac \uc870\uc9c1\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"aes-256-\uc791\ub3d9-\ubc29\uc2dd"},"AES-256 \uc791\ub3d9 \ubc29\uc2dd"),(0,a.kt)("p",null,"AES\ub294 \ub300\uce6d \ud0a4\ub97c \uc0ac\uc6a9\ud558\ub294 \ube14\ub85d \uc554\ud638\uc785\ub2c8\ub2e4. \ub300\uce6d \ud0a4 \uc554\ud638\ub85c\uc11c, \ub2e8 \ud558\ub098\uc758 \ube44\ubc00 \ud0a4\ub9cc \uc788\uc73c\uba74 \ub370\uc774\ud130\ub97c \uc554\ud638\ud654\ud558\uace0 \ud574\ub3c5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ube14\ub85d \uc554\ud638\ub85c\uc11c AES\ub294 \ud3c9\ubb38\uc774\ub77c\uace0 \ud558\ub294 \uc554\ud638\ud654\ub418\uc9c0 \uc54a\uc740 \uc815\ubcf4\ub97c \ube14\ub85d\uc73c\ub85c \ub098\ub204\uace0, \uc6d0\ub798\uc758 \uc554\ud638 \ud0a4\ub97c \uc5ec\ub7ec \uac1c\ub85c \ubd84\ud560\ud558\uc5ec \uac01 \ube14\ub85d\uc5d0 \uc801\uc6a9\ud569\ub2c8\ub2e4. \uacb0\uad6d \uc554\ud638\ubb38, \uc989 \uc554\ud638\ud654\ub41c \ud14d\uc2a4\ud2b8\ub97c \uc5bb\uac8c \ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"128, 192 \ubc0f 256\ube44\ud2b8\uc758 \ub2e4\uc591\ud55c \ud0a4 \ud06c\uae30\uac00 \uc788\uc73c\uba70 \ube14\ub85d\ub3c4 \ube44\ud2b8 \ub2e8\uc704\ub85c \uce21\uc815\ub429\ub2c8\ub2e4. \uc554\ud638\ud654 \ud504\ub85c\uc138\uc2a4 \uc911\uc5d0 \uc554\ud638\uae30\ub294 \ubcf4\uc548 \ud0a4\uc5d0 \ub530\ub77c \uac01 \uc815\ubcf4\ub97c \ub2e4\ub978 \uc815\ubcf4\ub85c \ubc14\uafc9\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 AES-256\uc740 14\ub77c\uc6b4\ub4dc \ub3d9\uc548 256\uac1c\uc758 \uc77c\ubc18 \ud14d\uc2a4\ud2b8 \ube14\ub85d\uc5d0\uc11c 256\uac1c\uc758 \uc554\ud638\ubb38 \ube14\ub85d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ub77c\uc6b4\ub4dc\ub294 \ub370\uc774\ud130\ub97c \ube14\ub85d\uc73c\ub85c \ubd84\ud560, \ubc14\uc774\ud2b8 \uad50\ud658, \ud589 \uc774\ub3d9 \ubc0f \uc5f4 \uc7ac\uc815\ub82c\uacfc \uac19\uc740 \uc5ec\ub7ec \ub2e8\uacc4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. The result is a completely random set of characters that will only make sense when using the right encryption key."),(0,a.kt)("p",null,"AES-256 is the strongest level of encryption: to break this cipher, 2256 discrete combinations, each consisting of 78 digits, would have to be tried."))}f.isMDXComponent=!0}}]);