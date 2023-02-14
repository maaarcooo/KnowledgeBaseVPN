"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[6086],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1861:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),s=["components"],i={title:"What is a DNS leak?",sidebar_position:9},l=void 0,d={unversionedId:"general/dns-leaks",id:"general/dns-leaks",title:"What is a DNS leak?",description:"Once you install a VPN, you want to be sure that there won't be any leaks that will lead to your de-anonymization. AdGuard VPN reliably protects your traffic and your data from prying eyes. Nevertheless, in some cases you may suspect the presence of DNS leaks in our VPN service. We'll explain where these concerns come from and why they are unfounded.",source:"@site/docs/general/dns-leaks.md",sourceDirName:"general",slug:"/general/dns-leaks",permalink:"/KnowledgeBaseVPN/zh-CN/general/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"What is a DNS leak?",sidebar_position:9},sidebar:"sidebar",previous:{title:"AdGuard VPN \u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u5f0f",permalink:"/KnowledgeBaseVPN/zh-CN/general/adguard-vpn-encryption"},next:{title:"\u529f\u80fd\u6982\u8ff0",permalink:"/KnowledgeBaseVPN/zh-CN/adguard-vpn-for-android/overview"}},u={},c=[{value:"What are DNS leaks?",id:"what-are-dns-leaks",level:2},{value:"How to detect DNS leaks",id:"how-to-detect-dns-leaks",level:2},{value:"Why there are no DNS leaks in AdGuard VPN",id:"why-there-are-no-dns-leaks-in-adguard-vpn",level:2},{value:"How to set up a custom DNS server in AdGuard VPN",id:"how-to-set-up-a-custom-dns-server-in-adguard-vpn",level:2}],p={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you install a VPN, you want to be sure that there won't be any leaks that will lead to your de-anonymization. AdGuard VPN reliably protects your traffic and your data from prying eyes. Nevertheless, in some cases you may suspect the presence of DNS leaks in our VPN service. We'll explain where these concerns come from and why they are unfounded."),(0,o.kt)("h2",{id:"what-are-dns-leaks"},"What are DNS leaks?"),(0,o.kt)("p",null,"When you use a VPN, a connection to a DNS server may travel outside of the encrypted VPN tunnel and your traffic may become visible to the ISP.  "),(0,o.kt)("p",null,"In other words, every time you open a website, your browser sends a request to the ISP's DNS server and in return receives the IP address of the requested website. In this way, your ISP sees all your online activity and can track you."),(0,o.kt)("h2",{id:"how-to-detect-dns-leaks"},"How to detect DNS leaks"),(0,o.kt)("p",null,"There are all sorts of anonymity check services for detecting DNS leaks, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"whoer.net"),". It should be understood that these websites themselves are not perfect and their algorithms are not clear, as opposed to their intentions to intimidate users with imaginary leaks and potentially sell some service."),(0,o.kt)("p",null,"Some security scanning websites consider the coincidence of the user's IP address and the DNS server's IP address to be a \"good\" result, indicating that there are no leaks. In reality, such a match may indicate the use of a VPN. When VPN is disabled and the requests go to your ISP's DNS server, the IP address of the DNS server and your own one do not coincide."),(0,o.kt)("h2",{id:"why-there-are-no-dns-leaks-in-adguard-vpn"},"Why there are no DNS leaks in AdGuard VPN"),(0,o.kt)("p",null,"If you enable AdGuard VPN on your device and run a check on any of the scanner websites, it finds that DNS queries go to the ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io"},"AdGuard DNS")," servers. However, this cannot be considered a leak."),(0,o.kt)("p",null,"Using a non-filtering AdGuard DNS server is set by default in AdGuard VPN. This ensures that your queries do not go to the DNS servers of your ISP, which means that you stay private and anonymous online."),(0,o.kt)("p",null,"What's more, AdGuard DNS is a very popular DNS service, used by over 50 million people. What does this mean for you? Imagine the following situation: the usual VPN service uses the DNS server which is located at the same IP address as the VPN server. The number of its users hardly exceeds 1,000."),(0,o.kt)("p",null,'And in the case of AdGuard DNS you will "merge" with 50 million users so nobody will be able to track you by the mere fact of using that DNS server.'),(0,o.kt)("h2",{id:"how-to-set-up-a-custom-dns-server-in-adguard-vpn"},"How to set up a custom DNS server in AdGuard VPN"),(0,o.kt)("p",null,"There are many popular public DNS servers from ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/kb/general/dns-providers"},"well-known DNS providers"),". Some of them can only perform their direct duties \u2013 giving the IP addresses of the requested domains, and some can do more. "),(0,o.kt)("p",null,"For example, the filtering AdGuard DNS removes ads and protects your device from being tracked, while AdGuard DNS Family Protection combines AdGuard DNS features with Safe search and Parental control."),(0,o.kt)("p",null,"You can select any DNS server and configure it in AdGuard VPN:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in AdGuard VPN for Windows: ",(0,o.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"App settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS servers"),"."),(0,o.kt)("li",{parentName:"ul"},"in AdGuard VPN for Mac: ",(0,o.kt)("em",{parentName:"li"},"Settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"App settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS servers"),"."),(0,o.kt)("li",{parentName:"ul"},"in AdGuard VPN for Android: ",(0,o.kt)("em",{parentName:"li"},"Settings")," (gear icon) \u2192 ",(0,o.kt)("em",{parentName:"li"},"App settings")," \u2192 ",(0,o.kt)("em",{parentName:"li"},"DNS server")),(0,o.kt)("li",{parentName:"ul"},"in AdGuard VPN for iOS: ",(0,o.kt)("em",{parentName:"li"},"Settings")," (gear icon) \u2192 ",(0,o.kt)("em",{parentName:"li"},"App settings")," \u2192 *DNS server"),(0,o.kt)("li",{parentName:"ul"},"in AdGuard VPN Browser extension: the burger menu \u2192 ",(0,o.kt)("em",{parentName:"li"},"Settings")," \u2192 *DNS-server")))}h.isMDXComponent=!0}}]);