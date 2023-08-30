"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[2407],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5842:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=t(3117),i=t(102),o=(t(7294),t(4137)),s=["components"],a={title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",sidebar_position:7},u=void 0,l={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/fr/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",sidebar_position:7},sidebar:"sidebar",previous:{title:"Comment s'abonner",permalink:"/KnowledgeBaseVPN/fr/general/subscription"},next:{title:"What is a DNS leak",permalink:"/KnowledgeBaseVPN/fr/general/dns-leaks"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"L&#39;historique de l&#39;AES",id:"lhistorique-de-laes",level:2},{value:"Comment AES-256 fonctionne-t-il",id:"comment-aes-256-fonctionne-t-il",level:2}],p={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'Le chiffrement est la raison pour laquelle le mot "priv\xe9" existe dans le terme "r\xe9seau priv\xe9 virtuel". Un VPN cr\xe9e un tunnel entre votre appareil et un serveur VPN, \xe0 travers lequel vos donn\xe9es sont crypt\xe9es, puis entrent sur Internet ouvert sous une forme s\xe9curis\xe9e. Le processus de chiffrement, c\'est-\xe0-dire transformer les donn\xe9es en charabia que personne qui les intercepte ne peut lire, est essentiel \xe0 tout service VPN.'),(0,o.kt)("p",null,"Le protocole AdGuard VPN utilise l'algorithme de chiffrement le plus s\xe9curis\xe9 et le plus rapide \xe0 ce jour - AES-256. Apprenez ce que c'est et pourquoi c'est bien."),(0,o.kt)("h2",{id:"lhistorique-de-laes"},"L'historique de l'AES"),(0,o.kt)("p",null,"Le chiffrement AES (Advanced Encryption Standard) a \xe9t\xe9 d\xe9velopp\xe9 \xe0 la fin du XXe si\xe8cle aux \xc9tats-Unis. demande du gouvernement\xa0: la norme de chiffrement des donn\xe9es (DES) existante est devenue obsol\xe8te et un nouvel algorithme de chiffrement plus s\xe9curis\xe9 \xe9tait n\xe9cessaire."),(0,o.kt)("p",null,"Lors d'un concours public annonc\xe9 par le gouvernement, le chiffrement Rijndael - assez similaire au DES mais beaucoup plus sophistiqu\xe9 - a \xe9t\xe9 nomm\xe9 vainqueur. En 2002, il a \xe9t\xe9 renomm\xe9 AES et publi\xe9 par les \xc9tats-Unis. Institut national des normes et de la technologie."),(0,o.kt)("p",null,"Aujourd'hui, AES est la norme de l'industrie pour le cryptage. En raison de sa nature ouverte, il est utilis\xe9 par la NSA et les agences gouvernementales, ainsi que par des organisations priv\xe9es, commerciales et \xe0 but non lucratif."),(0,o.kt)("h2",{id:"comment-aes-256-fonctionne-t-il"},"Comment AES-256 fonctionne-t-il"),(0,o.kt)("p",null,"AES est un chiffrement par bloc avec une cl\xe9 sym\xe9trique. En tant que chiffrement \xe0 cl\xe9 sym\xe9trique, il ne n\xe9cessite qu'une seule cl\xe9 secr\xe8te pour chiffrer et d\xe9chiffrer les donn\xe9es. En tant que chiffrement par blocs, AES divise les informations non chiffr\xe9es, appel\xe9es texte en clair, en blocs, divise la cl\xe9 cryptographique d'origine en plusieurs et les applique \xe0 chaque bloc. En fin de compte, un texte crypt\xe9, c\u2019est-\xe0-dire un texte chiffr\xe9, est obtenu."),(0,o.kt)("p",null,"Il existe diff\xe9rentes tailles de cl\xe9 - 128, 192 et 256 bits - et les blocs sont \xe9galement mesur\xe9s en bits. Au cours du processus de chiffrement, le chiffreur remplace chaque \xe9l\xe9ment d'information par un autre, en fonction de la cl\xe9 de s\xe9curit\xe9. Ainsi, par exemple, AES-256 cr\xe9e 256 blocs de texte chiffr\xe9 \xe0 partir de 256 blocs de texte en clair en 14 tours."),(0,o.kt)("p",null,"Les tours se composent de plusieurs \xe9tapes\xa0: diviser les donn\xe9es en blocs, \xe9changer des octets, d\xe9placer des lignes et r\xe9organiser les colonnes. Le r\xe9sultat est un ensemble de caract\xe8res compl\xe8tement al\xe9atoire, qui n'aura de sens qu'avec une cl\xe9 de chiffrement."),(0,o.kt)("p",null,"AES-256 est le niveau de chiffrement le plus fort : pour casser ce chiffre, un mauvais acteur devra essayer 2256 combinaisons discr\xe8tes, chacune compos\xe9e de 78 chiffres."))}f.isMDXComponent=!0}}]);