"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[339],{4137:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7472:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=["components"],s={title:"VPN \uc791\ub3d9 \ubc29\uc2dd",sidebar_position:1},l=void 0,p={unversionedId:"general/how-vpn-works",id:"general/how-vpn-works",title:"VPN \uc791\ub3d9 \ubc29\uc2dd",description:"To understand how AdGuard VPN works, you should at first understand the general principles of the VPN service.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/general/how-vpn-works.md",sourceDirName:"general",slug:"/general/how-vpn-works",permalink:"/KnowledgeBaseVPN/ko/general/how-vpn-works",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/how-vpn-works.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"VPN \uc791\ub3d9 \ubc29\uc2dd",sidebar_position:1},sidebar:"sidebar",previous:{title:"AdGuard VPN Overview",permalink:"/KnowledgeBaseVPN/ko/"},next:{title:"Why AdGuard VPN is the better option",permalink:"/KnowledgeBaseVPN/ko/general/why-adguard-vpn"}},d={},u=[{value:"VPN \uae30\ub2a5",id:"vpn-\uae30\ub2a5",level:2},{value:"VPN \uad6c\uc870",id:"vpn-\uad6c\uc870",level:2},{value:"Types of VPN protocols",id:"types-of-vpn-protocols",level:2},{value:"VPN drawbacks",id:"vpn-drawbacks",level:2},{value:"AdGuard VPN",id:"adguard-vpn",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To understand how AdGuard VPN works, you should at first understand the general principles of the VPN service."),(0,o.kt)("h2",{id:"vpn-\uae30\ub2a5"},"VPN \uae30\ub2a5"),(0,o.kt)("p",null,"VPN\uc740 \uc704\uce58\ub97c \uc228\uae30\uace0 \uc6f9\uc5d0\uc11c \ub370\uc774\ud130\ub97c \ubcf4\ud638\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uac00\uc0c1 \uc0ac\uc124\ub9dd\uc785\ub2c8\ub2e4. VPN\uc740 \ucef4\ud4e8\ud130\ub098 \ubaa8\ubc14\uc77c \uae30\uae30\ub97c VPN \uc11c\ubc84\uc5d0 \uc5f0\uacb0\ud558\uace0 \uc774 \uc11c\ubc84\uc758 IP \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc678\ubd80 \uad00\ucc30\uc790\uc5d0\uac8c \uc0ac\uc6a9\uc790\uac00 \ub2e4\ub978 \uc7a5\uc18c\uc5d0 \uc788\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\uac8c \ud569\ub2c8\ub2e4. This allows you to securely access various Internet resources and protect your personal data."),(0,o.kt)("p",null,"\uadf8\ub7f0 \uc2dd\uc73c\ub85c VPN\uc740 \ub450 \uac00\uc9c0 \uc911\uc694\ud55c \uae30\ub2a5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\uc775\uba85\uc131 \uc720\uc9c0"))),(0,o.kt)("p",null,"\uc778\ud130\ub137 \uc5f0\uacb0\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790\ub294 \ub514\uc9c0\ud138 \ubc1c\uc790\uad6d\uc744 \ub0a8\uae30\uace0 \uc774\ub97c \uc81c3\uc790\uac00 \ubd84\uc11d\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN\uc744 \uc0ac\uc6a9\ud558\uba74 IP \uc8fc\uc18c\ub97c \uc228\uae30\uace0 \uc5f0\uacb0\ub41c VPN \uc11c\ubc84\uc758 IP \uc8fc\uc18c\ub85c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uac1c\uc778\uc815\ubcf4\ub97c \ubcf4\ud638\ud558\uace0 \uc6f9\uc5d0\uc11c \uc775\uba85\uc73c\ub85c \uc815\ubcf4\ub97c \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\ub370\uc774\ud130 \ubcf4\ud638"))),(0,o.kt)("p",null,"\uc2e0\ub8b0\ud560 \uc218 \uc5c6\uac70\ub098 \uacf5\uc6a9 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ud558\uba74 \uae30\uae30\uc758 \ub370\uc774\ud130\uac00 \uc0ac\uc774\ubc84 \ubc94\uc8c4\uc790\uc5d0\uac8c \ucde8\uc57d\ud574\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc740\ud589 \uce74\ub4dc \uc138\ubd80 \uc815\ubcf4, \uc0ac\uc6a9\uc790 \uc774\ub984 \ubc0f \ube44\ubc00\ubc88\ud638, \uc5ec\uad8c \ub370\uc774\ud130\uc640 \uac19\uc740 \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \uc628\ub77c\uc778 \uc0ac\uae30\ubc94\uc774 \uac00\ub85c\ucc4c \uc218 \uc788\uc2b5\ub2c8\ub2e4. VPN \ud130\ub110\uc744 \ud1b5\ud574 \uc6f9\uc73c\ub85c \uc1a1\uc218\uc2e0\ub418\ub294 \uc815\ubcf4\ub294 \uc554\ud638\ud654\ub418\uc5b4 \uc720\ucd9c\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"vpn-\uad6c\uc870"},"VPN \uad6c\uc870"),(0,o.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ud558\uba74 \ucef4\ud4e8\ud130\ub098 \ubaa8\ubc14\uc77c \uc7a5\uce58\uc5d0 \uace0\uc720\ud55c ID \ubc88\ud638 \ub610\ub294 IP \uc8fc\uc18c\uac00 \ud560\ub2f9\ub429\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c 0\uc5d0\uc11c 255\uae4c\uc9c0\uc758 \uc22b\uc790\ub85c \uad6c\uc131\ub418\uba70 \uc810\uc774\ub098 \ucf5c\ub860\uc73c\ub85c \uad6c\ubd84\ub429\ub2c8\ub2e4. Knowing this sequence, one can determine the geolocation of the device. The IP address is usually set by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. \uc774 \uae30\ub85d\uc740 \uc8fc\ub85c \ub370\uc774\ud130 \uc218\uc9d1 \ubc0f \ud2b8\ub798\ud53d \ubd84\uc11d\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"VPN\uc740 \uae30\uae30\uc640 VPN \uc11c\ubc84 \uc0ac\uc774\uc5d0 \ud130\ub110\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. \ub530\ub77c\uc11c \uc6f9 \uc11c\ubc84\uc5d0\ub294 \uc7a5\uce58\uc5d0 \ub354 \uc774\uc0c1 \uc2e4\uc81c IP \uc8fc\uc18c\uac00 \uc5c6\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \ud130\ub110\uc758 \ub05d\uc810, \uc989 VPN \uc11c\ubc84\uc758 IP \uc8fc\uc18c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c VPN \ud130\ub110\uc744 \ud1b5\uacfc\ud55c \ud6c4 \ub3c4\ub2ec\ud558\ub294 \uc0ac\uc774\ud2b8\ub294 \uc120\ud0dd\ud55c VPN \uc11c\ubc84\uc758 \uc9c0\ub9ac\uc801 \uc704\uce58\ub97c \uc2e4\uc81c \uc704\uce58\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4. And the encrypted data will not fall into the hands of advertisers, hackers and security services."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg",alt:"VPN \uad6c\uc870"})),(0,o.kt)("h2",{id:"types-of-vpn-protocols"},"Types of VPN protocols"),(0,o.kt)("p",null,"VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in an open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPsec"},(0,o.kt)("em",{parentName:"a"},"IPSec")),". One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Encapsulation_(networking)"},"encapsulation")," in this protocol may result in a lower connection speed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenVPN"},(0,o.kt)("em",{parentName:"a"},"OpenVPN")),". This modern protocol is open source, so third-party manufacturers can improve and update the technology.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WireGuard"},(0,o.kt)("em",{parentName:"a"},"WireGuard")),". Its main advantages are ease of use, high efficiency and low vulnerability to attacks."))),(0,o.kt)("p",null,"In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg",alt:"How a VPN protocol works"})),(0,o.kt)("p",null,"AdGuard VPN also has its own ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/general/adguard-vpn-protocol"},(0,o.kt)("em",{parentName:"a"},"protocol")),". One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg",alt:"How concealed VPN works"})),(0,o.kt)("h2",{id:"vpn-drawbacks"},"VPN drawbacks"),(0,o.kt)("p",null,"Despite the obvious advantages, VPN is not perfect and has some disadvantages:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lower speed")),(0,o.kt)("p",null,"Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Access blocking")),(0,o.kt)("p",null,"Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"VPN \uc5f0\uacb0 \ub04a\uae40")),(0,o.kt)("p",null,"A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol \u2014 all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers."),(0,o.kt)("h2",{id:"adguard-vpn"},"AdGuard VPN"),(0,o.kt)("p",null,"\uc6b0\ub9ac\uc758 VPN \uc11c\ube44\uc2a4\uc5d0\ub294 \uba87 \uac00\uc9c0 \uc911\uc694\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/general/why-adguard-vpn"},"\uc7a5\uc810"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/general/adguard-vpn-protocol"},(0,o.kt)("em",{parentName:"a"},"Proprietary VPN protocol")),", which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/en/privacy.html"},(0,o.kt)("em",{parentName:"a"},'"No-logs" policy')),", which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"\uc218\uc2ed \uac1c\uad6d\uc5d0 \uc788\ub294 50\uac1c \uc774\uc0c1\uc758 VPN \uc11c\ubc84"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Ease of use and extensive customization options")))),(0,o.kt)("p",null,"Currently, AdGuard VPN is available as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chrome, Firefox \ubc0f Edge\uc6a9 ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/adguard-vpn-browser-extension/overview"},"\ud655\uc7a5 \ud504\ub85c\ub85c\uadf8\ub7a8"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/adguard-vpn-for-android/overview"},"Android")," \ubc0f ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/adguard-vpn-for-ios/overview"},"iOS"),"\uc6a9 \ubaa8\ubc14\uc77c \uc571")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/adguard-vpn-for-windows/overview"},"Windows")," \ubc0f ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseVPN/ko/adguard-vpn-for-mac/overview"},"Mac"),"\uc6a9 \ub370\uc2a4\ud06c\ud0d1 \uc560\ud50c\ub9ac\ucf00\uc774\uc158"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://adguard-vpn.com/en/welcome.html"},"\uc5ec\uae30"),"\uc5d0\uc11c AdGuard VPN \uae30\ub2a5(\ubb34\uc81c\ud55c \ubc84\uc804 \ud3ec\ud568)\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}h.isMDXComponent=!0}}]);