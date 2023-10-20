"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[5355],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),N=o(n),c=a,m=N["".concat(i,".").concat(c)]||N[c]||s[c]||l;return n?r.createElement(m,d(d({ref:t},p),{},{components:n})):r.createElement(m,d({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,d=new Array(l);d[0]=N;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,d[1]=u;for(var o=2;o<l;o++)d[o]=n[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},6198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return s}});var r=n(3117),a=n(102),l=(n(7294),n(4137)),d=["components"],u={title:"\u4ec0\u4e48\u662f DNS \u6cc4\u6f0f",sidebar_position:9},i=void 0,o={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"\u4ec0\u4e48\u662f DNS \u6cc4\u6f0f",description:"\u5b89\u88c5 VPN \u540e\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u6cc4\u9732\u5bfc\u81f4\u60a8\u53bb\u533f\u540d\u5316\u3002 AdGuard VPN \u80fd\u6709\u6548\u4fdd\u62a4\u60a8\u7684\u6d41\u91cf\u548c\u6570\u636e\u514d\u906d\u7aa5\u63a2\u3002 \u4e0d\u8fc7\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u4f1a\u6000\u7591\u6211\u4eec\u7684 VPN \u670d\u52a1\u5b58\u5728 DNS \u6cc4\u6f0f\u3002 \u6211\u4eec\u5c06\u89e3\u91ca\u8fd9\u4e9b\u62c5\u5fe7\u4ece\u4f55\u800c\u6765\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u5b83\u4eec\u662f\u7ad9\u4e0d\u4f4f\u811a\u7684\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/zh-CN/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u4ec0\u4e48\u662f DNS \u6cc4\u6f0f",sidebar_position:9},sidebar:"sidebar",previous:{title:"AdGuard VPN \u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u5f0f",permalink:"/KnowledgeBaseVPN/zh-CN/general/adguard-vpn-encryption"},next:{title:"How to use AdGuard VPN in countries with Internet restrictions",permalink:"/KnowledgeBaseVPN/zh-CN/general/vpn-issues"}},p={},s=[{value:"\u4ec0\u4e48\u662f DNS \u6cc4\u6f0f\uff1f",id:"\u4ec0\u4e48\u662f-dns-\u6cc4\u6f0f",level:2},{value:"\u5982\u4f55\u68c0\u6d4b DNS \u6cc4\u6f0f",id:"\u5982\u4f55\u68c0\u6d4b-dns-\u6cc4\u6f0f",level:2},{value:"\u4e3a\u4ec0\u4e48 AdGuard VPN \u4e0d\u4f1a\u51fa\u73b0 DNS \u6cc4\u9732",id:"\u4e3a\u4ec0\u4e48-adguard-vpn-\u4e0d\u4f1a\u51fa\u73b0-dns-\u6cc4\u9732",level:2},{value:"\u5982\u4f55\u5728 AdGuard VPN \u4e2d\u8bbe\u7f6e\u81ea\u5b9a\u4e49 DNS \u670d\u52a1\u5668",id:"\u5982\u4f55\u5728-adguard-vpn-\u4e2d\u8bbe\u7f6e\u81ea\u5b9a\u4e49-dns-\u670d\u52a1\u5668",level:2}],N={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88c5 VPN \u540e\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u4e0d\u4f1a\u51fa\u73b0\u4efb\u4f55\u6cc4\u9732\u5bfc\u81f4\u60a8\u53bb\u533f\u540d\u5316\u3002 AdGuard VPN \u80fd\u6709\u6548\u4fdd\u62a4\u60a8\u7684\u6d41\u91cf\u548c\u6570\u636e\u514d\u906d\u7aa5\u63a2\u3002 \u4e0d\u8fc7\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u4f1a\u6000\u7591\u6211\u4eec\u7684 VPN \u670d\u52a1\u5b58\u5728 DNS \u6cc4\u6f0f\u3002 \u6211\u4eec\u5c06\u89e3\u91ca\u8fd9\u4e9b\u62c5\u5fe7\u4ece\u4f55\u800c\u6765\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u5b83\u4eec\u662f\u7ad9\u4e0d\u4f4f\u811a\u7684\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-dns-\u6cc4\u6f0f"},"\u4ec0\u4e48\u662f DNS \u6cc4\u6f0f\uff1f"),(0,l.kt)("p",null,"\u4f7f\u7528 VPN \u65f6\uff0c\u60a8\u4e0e DNS \u670d\u52a1\u5668\u7684\u8fde\u63a5\u53ef\u80fd\u4f1a\u5728\u52a0\u5bc6\u7684 VPN \u96a7\u9053\u4e4b\u5916\u8fdb\u884c\uff0cISP \u53ef\u80fd\u4f1a\u770b\u5230\u60a8\u7684\u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u6bcf\u6b21\u60a8\u6253\u5f00\u7f51\u7ad9\u65f6\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u90fd\u4f1a\u5411 ISP \u7684 DNS \u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u63a5\u6536\u6240\u8bf7\u6c42\u7f51\u7ad9\u7684 IP \u5730\u5740\u3002 \u8fd9\u6837\uff0c\u60a8\u7684 ISP \u5c31\u80fd\u770b\u5230\u4f60\u6240\u6709\u7684\u5728\u7ebf\u6d3b\u52a8\uff0c\u5e76\u80fd\u8ddf\u8e2a\u4f60\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u68c0\u6d4b-dns-\u6cc4\u6f0f"},"\u5982\u4f55\u68c0\u6d4b DNS \u6cc4\u6f0f"),(0,l.kt)("p",null,"\u6709\u5404\u79cd\u533f\u540d\u68c0\u67e5\u670d\u52a1\u53ef\u7528\u4e8e\u68c0\u6d4b DNS \u6cc4\u6f0f\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"whoer.net"),"\u3002 \u60a8\u9700\u8981\u77e5\u9053\u8fd9\u4e9b\u7f51\u7ad9\u672c\u8eab\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u800c\u4e14\u5176\u7b97\u6cd5\u4e5f\u4e0d\u660e\u786e\u3002\u76f8\u53cd\uff0c\u5b83\u4eec\u4f1a\u7528\u5047\u60f3\u7684\u6cc4\u5bc6\u4e8b\u4ef6\u6765\u6050\u5413\u7528\u6237\u5e76\u8bd5\u56fe\u51fa\u552e\u67d0\u4e9b\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u4e00\u4e9b\u5b89\u5168\u626b\u63cf\u7f51\u7ad9\u8ba4\u4e3a\uff0c\u7528\u6237 IP \u5730\u5740\u548c DNS \u670d\u52a1\u5668 IP \u5730\u5740\u91cd\u5408\u662f\u201c\u597d\u4e8b\u201d\uff0c\u8868\u660e\u6ca1\u6709\u6cc4\u6f0f\u3002 \u5b9e\u9645\u4e0a\uff0c\u8fd9\u6837\u4e2d\u91cd\u5408\u53ef\u80fd\u662f\u4f7f\u7528\u4e86 VPN\u3002 \u800c\u5f53 VPN \u88ab\u7981\u7528\u5e76\u4e14\u628a\u8bf7\u6c42\u53d1\u9001\u81f3 ISP \u7684 DNS \u670d\u52a1\u5668\u65f6\uff0cDNS \u670d\u52a1\u5668\u7684 IP \u5730\u5740\u4e0e\u60a8\u81ea\u5df1\u7684 IP \u5730\u5740\u5e76\u4e0d\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-adguard-vpn-\u4e0d\u4f1a\u51fa\u73b0-dns-\u6cc4\u9732"},"\u4e3a\u4ec0\u4e48 AdGuard VPN \u4e0d\u4f1a\u51fa\u73b0 DNS \u6cc4\u9732"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u8bbe\u5907\u4e0a\u542f\u7528 AdGuard VPN\uff0c\u5e76\u5728\u4efb\u610f\u626b\u63cf\u7f51\u7ad9\u4e0a\u8fd0\u884c\u68c0\u67e5\uff0c\u60a8\u5c31\u4f1a\u53d1\u73b0 DNS \u67e5\u8be2\u90fd\u8f6c\u5230\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS")," \u670d\u52a1\u5668\u3002 \u4f46\u662f\uff0c\u8fd9\u4e0d\u80fd\u88ab\u89c6\u4e3a\u6cc4\u6f0f\u3002"),(0,l.kt)("p",null,"AdGuard VPN \u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\u4f7f\u7528\u975e\u8fc7\u6ee4 AdGuard DNS \u670d\u52a1\u5668\u3002 \u8fd9\u53ef\u786e\u4fdd\u60a8\u7684\u67e5\u8be2\u4e0d\u4f1a\u53d1\u9001\u81f3 ISP \u7684 DNS \u670d\u52a1\u5668\uff0c\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u4fdd\u6301\u9690\u79c1\u548c\u5728\u7ebf\u533f\u540d\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0cAdGuard DNS \u662f\u4e00\u9879\u975e\u5e38\u53d7\u6b22\u8fce\u7684 DNS \u670d\u52a1\uff0c\u62e5\u6709\u8d85\u8fc7 5000 \u4e07\u7684\u7528\u6237\u3002 \u8fd9\u610f\u5473\u7740\u4ec0\u4e48\u5462\uff1f \u8bd5\u60f3\uff1a\u901a\u5e38\u7684 VPN \u670d\u52a1\u4f7f\u7528\u7684\u662f\u548c VPN \u670d\u52a1\u5668\u76f8\u540c IP \u5730\u5740\u7684 DNS \u670d\u52a1\u5668\u3002 \u5176\u7528\u6237\u6570\u91cf\u51e0\u4e4e\u4e0d\u8d85\u8fc7 1000 \u4eba\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u4f7f\u7528 AdGuard DNS \u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u5c06\u4e0e 5000 \u4e07\u7528\u6237\u8fdb\u884c\u201c\u5408\u5e76\u201d\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u6709\u4eba\u4ec5\u7528\u60a8\u7684 DNS \u670d\u52a1\u5668\u8ffd\u8e2a\u5230\u60a8\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u5728-adguard-vpn-\u4e2d\u8bbe\u7f6e\u81ea\u5b9a\u4e49-dns-\u670d\u52a1\u5668"},"\u5982\u4f55\u5728 AdGuard VPN \u4e2d\u8bbe\u7f6e\u81ea\u5b9a\u4e49 DNS \u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u73b0\u5728\u5e02\u9762\u4e0a\u6709\u8bb8\u591a\u7531",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"\u77e5\u540d DNS \u63d0\u4f9b\u5546"),"\u63d0\u4f9b\u7684\u516c\u5171 DNS \u670d\u52a1\u5668\u3002 \u5176\u4e2d\u4e00\u90e8\u5206\u53ea\u80fd\u5c65\u884c\u5176\u76f4\u63a5\u804c\u8d23\u2014\u2014\u63d0\u4f9b\u6240\u8bf7\u6c42\u57df\u7684 IP \u5730\u5740\uff0c\u800c\u8fd8\u6709\u4e00\u90e8\u5206\u5219\u53ef\u4ee5\u505a\u66f4\u591a\u7684\u4e8b\u60c5\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0cAdGuard DNS \u53ef\u5220\u9664\u5e7f\u544a\u5e76\u4fdd\u62a4\u60a8\u7684\u8bbe\u5907\u514d\u906d\u8ddf\u8e2a\uff1bAdGuard DNS \u5bb6\u5ead\u4fdd\u62a4\u53ef\u5c06 AdGuard DNS \u529f\u80fd\u548c\u5b89\u5168\u641c\u7d22\u4e0e\u5bb6\u957f\u63a7\u5236\u76f8\u7ed3\u5408\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u9009\u62e9\u4efb\u610f DNS \u670d\u52a1\u5668\uff0c\u5e76\u5728 AdGuard VPN \u4e2d\u5bf9\u5176\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN Windows \u7248\uff1a\u300c",(0,l.kt)("em",{parentName:"li"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"\u5e94\u7528\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668"),"\u300d"),(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN Mac \u7248\uff1a\u300c",(0,l.kt)("em",{parentName:"li"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"\u5e94\u7528\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668"),"\u300d"),(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN \u5b89\u5353\u7248\uff1a\u300c",(0,l.kt)("em",{parentName:"li"},"\u8bbe\u7f6e"),"\u300d\uff08\u2699 \u56fe\u6807\uff09\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"\u5e94\u7528\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668"),"\u300d"),(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN iOS \u7248\uff1a\u300c",(0,l.kt)("em",{parentName:"li"},"\u8bbe\u7f6e"),"\u300d\uff08\u2699 \u56fe\u6807\uff09\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"\u5e94\u7528\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668"),"\u300d"),(0,l.kt)("li",{parentName:"ul"},"AdGuard VPN \u6d4f\u89c8\u5668\u6269\u5c55\uff1a\u83dc\u5355\uff08\u2630 \u56fe\u6807\uff09\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"\u8bbe\u7f6e"),"\u300d\u2192\u300c",(0,l.kt)("em",{parentName:"li"},"DNS \u670d\u52a1\u5668"),"\u300d")))}c.isMDXComponent=!0}}]);