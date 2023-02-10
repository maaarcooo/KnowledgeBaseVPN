"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[247],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=a,g=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7531:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(4137)),i=["components"],l={title:"AdGuard VPN \u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u5f0f",sidebar_position:7},u=void 0,c={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"AdGuard VPN \u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u5f0f",description:"\u524d\u8a00",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/zh-CN/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"AdGuard VPN \u4f7f\u7528\u7684\u52a0\u5bc6\u65b9\u5f0f",sidebar_position:7},sidebar:"sidebar",previous:{title:"\u5982\u4f55\u8ba2\u9605",permalink:"/KnowledgeBaseVPN/zh-CN/general/subscription"},next:{title:"What is a DNS leak?",permalink:"/KnowledgeBaseVPN/zh-CN/general/dns-leaks"}},p={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"AES \u5386\u53f2\u53d1\u5c55",id:"aes-\u5386\u53f2\u53d1\u5c55",level:2},{value:"AES-256 \u5de5\u4f5c\u539f\u7406",id:"aes-256-\u5de5\u4f5c\u539f\u7406",level:2}],s={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,'\u52a0\u5bc6\u662f\u201c\u865a\u62df\u79c1\u4eba\u7f51\u7edc\u201c\u4e2d\u5b58\u5728"\u79c1\u4eba"\u4e00\u8bcd\u7684\u539f\u56e0\u3002 VPN \u5728\u7528\u6237\u7684\u8bbe\u5907\u548c VPN \u670d\u52a1\u5668\u4e4b\u95f4\u5efa\u7acb\u4e00\u4e2a\u96a7\u9053\uff0c\u901a\u8fc7\u8fd9\u4e2a\u96a7\u9053\uff0c\u7528\u6237\u7684\u6570\u636e\u88ab\u52a0\u5bc6\uff0c\u7136\u540e\u4ee5\u5b89\u5168\u7684\u5f62\u5f0f\u8fdb\u5165\u5f00\u653e\u7684\u4e92\u8054\u7f51\u4e2d\u3002 \u52a0\u5bc6\u8fc7\u7a0b\uff0c\u5373\u5c06\u6570\u636e\u53d8\u6210\u4efb\u4f55\u4eba\u90fd\u65e0\u6cd5\u8bfb\u53d6\u7684\u4e71\u7801\uff0c\u5bf9\u4e8e\u4efb\u4f55 VPN \u670d\u52a1\u90fd\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002'),(0,o.kt)("p",null,"AdGuard VPN \u534f\u8bae\u4f7f\u7528\u8fc4\u4eca\u4e3a\u6b62\u6700\u5b89\u5168\u3001\u6700\u5feb\u901f\u7684\u52a0\u5bc6\u7b97\u6cd5 \u2014\u2014 AES-256\u3002 \u4e86\u89e3\u4ec0\u4e48\u662f AES-256\uff0c\u4ee5\u53ca\u5b83\u4e3a\u4f55\u5982\u6b64\u51fa\u8272\u3002"),(0,o.kt)("h2",{id:"aes-\u5386\u53f2\u53d1\u5c55"},"AES \u5386\u53f2\u53d1\u5c55"),(0,o.kt)("p",null,"AES \u52a0\u5bc6\uff08\u82f1\u8bed\uff1aAdvanced Encryption Standard\uff0c\u4e2d\u6587\uff1a\u9ad8\u7ea7\u52a0\u5bc6\u6807\u51c6\uff09\uff0c\u672c\u6280\u672f\u4e8e 20 \u4e16\u7eaa\u672b\u5728\u7f8e\u56fd\u5f00\u53d1\u3002 \u653f\u5e9c\u8981\u6c42\uff1a\u73b0\u6709\u7684 Data Encryption Standard (\u82f1\u6587\u7f29\u5199\uff1aDES\uff0c\u4e2d\u6587\uff1a\u6570\u636e\u52a0\u5bc6\u6807\u51c6) \u5df2\u8fc7\u65f6\uff0c\u9700\u8981\u4e00\u79cd\u65b0\u7684\u3001\u66f4\u5b89\u5168\u7684\u52a0\u5bc6\u7b97\u6cd5\u3002"),(0,o.kt)("p",null,"\u5728\u653f\u5e9c\u5ba3\u5e03\u7684\u516c\u5f00\u7ade\u8d5b\u4e2d\u8d62\u5f97\u4e86 Rijndael \u5bc6\u7801 \u2014\u2014 \u4e0e DES \u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u66f4\u590d\u6742\u3002 2002 \u5e74\uff0c\u66f4\u540d\u4e3a AES \u5e76\u7531\u7f8e\u56fd\u51fa\u7248 \u7f8e\u56fd\u56fd\u5bb6\u6807\u51c6\u4e0e\u6280\u672f\u7814\u7a76\u9662\u3002"),(0,o.kt)("p",null,"\u4eca\u5929\uff0cAES \u662f\u52a0\u5bc6\u7684\u6807\u51c6\u3002 \u7531\u4e8e\u5176\u5f00\u653e\u6027\uff0c\u5b83\u88ab\u56fd\u5bb6\u5b89\u5168\u5c40\u548c\u653f\u5e9c\u673a\u6784\uff0c\u4ee5\u53ca\u79c1\u4eba\u3001\u5546\u4e1a\u548c\u975e\u8425\u5229\u7ec4\u7ec7\u6240\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"aes-256-\u5de5\u4f5c\u539f\u7406"},"AES-256 \u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,"AES \u662f\u4e00\u79cd\u5e26\u6709\u5bf9\u79f0\u5bc6\u94a5\u7684\u5206\u7ec4\u5bc6\u7801\u3002 \u4f5c\u4e3a\u4e00\u79cd\u5bf9\u79f0\u5bc6\u94a5\u5bc6\u7801\uff0c\u5b83\u53ea\u9700\u8981\u4e00\u4e2a\u5bc6\u94a5\u6765\u52a0\u5bc6\u548c\u89e3\u5bc6\u6570\u636e\u3002 \u4f5c\u4e3a\u5206\u7ec4\u5bc6\u7801\uff0cAES \u5c06\u672a\u52a0\u5bc6\u7684\u4fe1\u606f\uff08\u660e\u6587\uff09\u5206\u6210\u591a\u4e2a\u5757\uff0c\u5c06\u539f\u59cb\u5bc6\u94a5\u62c6\u5206\u4e3a\u591a\u4e2a\u5bc6\u94a5\u5e76\u5c06\u5b83\u4eec\u5e94\u7528\u4e8e\u6bcf\u4e2a\u5757\u3002 \u6700\u540e\uff0c\u5f97\u5230\u4e00\u4e2a\u5bc6\u7801\u6587\u672c\uff0c\u5373\u4e00\u4e2a\u52a0\u5bc6\u6587\u672c\u3002"),(0,o.kt)("p",null,"\u6709\u4e0d\u540c\u7684\u5bc6\u94a5\u5927\u5c0f\uff0c\u5305\u62ec 128\u3001192 \u548c 256 \u4f4d\uff0c\u5e76\u4e14\u4fe1\u606f\u5757\u4e5f\u4ee5\u4f4d\u4e3a\u5355\u4f4d\u3002 \u5728\u52a0\u5bc6\u8fc7\u7a0b\u4e2d\uff0c\u52a0\u5bc6\u5668\u6839\u636e\u5b89\u5168\u5bc6\u94a5\u5c06\u6bcf\u6761\u4fe1\u606f\u66ff\u6362\u4e3a\u53e6\u4e00\u6761\u4fe1\u606f\u3002 \u56e0\u6b64\uff0c\u4f8b\u5982\uff0cAES-256 \u5728 14 \u8f6e\u4e2d\u4ece 256 \u4e2a\u660e\u6587\u5757\u521b\u5efa 256 \u4e2a\u5bc6\u6587\u5757\u3002"),(0,o.kt)("p",null,"\u8f6e\u56de\u7531\u51e0\u4e2a\u6b65\u9aa4\u7ec4\u6210\uff1a\u5c06\u6570\u636e\u5206\u5272\u6210\u5757\uff0c\u4ea4\u6362\u5b57\u8282\uff0c\u79fb\u52a8\u884c\u548c\u91cd\u65b0\u6392\u5217\u5217\u3002 \u7ed3\u679c\u662f\u4e00\u7ec4\u5b8c\u5168\u968f\u673a\u7684\u5b57\u7b26\uff0c\u53ea\u6709\u4f7f\u7528\u52a0\u5bc6\u5bc6\u94a5\u624d\u6709\u610f\u4e49\u3002"),(0,o.kt)("p",null,"AES-256 \u662f\u6700\u5f3a\u52a0\u5bc6\u7ea7\u522b\uff1a\u8981\u7834\u89e3\u6b64\u5bc6\u7801\uff0c\u4ed6\u4eba\u5fc5\u987b\u5c1d\u8bd5 2256 \u79cd\u79bb\u6563\u7ec4\u5408\uff0c\u6bcf\u79cd\u7ec4\u5408\u7531 78 \u4f4d\u6570\u5b57\u7ec4\u6210\u3002"))}f.isMDXComponent=!0}}]);