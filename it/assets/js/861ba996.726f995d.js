"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[7626],{4137:function(e,i,t){t.d(i,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,r,n=function(e,i){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var i=r.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},s=function(e){var i=u(e.components);return r.createElement(l.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},p=r.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,a(a({ref:i},s),{},{components:t})):r.createElement(g,a({ref:i},s))}));function f(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in i)hasOwnProperty.call(i,l)&&(c[l]=i[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4697:function(e,i,t){t.r(i),t.d(i,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(3117),n=t(102),o=(t(7294),t(4137)),a=["components"],c={title:"Che tipo di crittografia viene utilizzata in AdGuard VPN",sidebar_position:7},l=void 0,u={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"Che tipo di crittografia viene utilizzata in AdGuard VPN",description:"Introduzione",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/it/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Che tipo di crittografia viene utilizzata in AdGuard VPN",sidebar_position:7},sidebar:"sidebar",previous:{title:"Come abbonarsi",permalink:"/KnowledgeBaseVPN/it/general/subscription"},next:{title:"Come configurare AdGuard VPN sul tuo router",permalink:"/KnowledgeBaseVPN/it/general/set-up-adguard-vpn-on-your-router"}},s={},d=[{value:"Introduzione",id:"introduzione",level:2},{value:"Tour storico dell&#39;AES",id:"tour-storico-dellaes",level:2},{value:"Come funziona AES-256",id:"come-funziona-aes-256",level:2}],p={toc:d};function f(e){var i=e.components,t=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduzione"},"Introduzione"),(0,o.kt)("p",null,'La crittografia \xe8 la ragione per cui esiste la parola "privata" nel termine "Rete privata virtuale". Una VPN crea un tunnel tra il tuo dispositivo e un server VPN, tramite cui i tuoi dati sono crittografati e, quindi, trasmessi in sicurezza all\'Internet aperto. Il processo di crittografia, che consiste nel trasformare i dati in parole incomprensibili che non possono essere lette da chi li intercetta, \xe8 essenziale per qualsiasi servizio VPN.'),(0,o.kt)("p",null,"Il protocollo di AdGuard VPN utilizza l'algoritmo crittografico pi\xf9 sicuro e veloce: AES-256. Scopri cos'\xe8 e perch\xe9 \xe8 cos\xec buono."),(0,o.kt)("h2",{id:"tour-storico-dellaes"},"Tour storico dell'AES"),(0,o.kt)("p",null,"La crittografia AES (Advanced Encryption Standard) \xe8 stata sviluppata alla fine del XX secolo negli Stati Uniti. richiesta del governo: il Data Encryption Standard (DES) esistente \xe8 diventato obsoleto ed \xe8 stato richiesto un nuovo algoritmo di crittografia pi\xf9 sicuro."),(0,o.kt)("p",null,"In un concorso pubblico indetto dal governo ha vinto il cifrario Rijndael - piuttosto simile al DES ma molto pi\xf9 sofisticato. Nel 2002 \xe8 stato rinominato AES ed \xe8 stato pubblicato dalla U.S.A. Istituto nazionale di standard e tecnologia."),(0,o.kt)("p",null,"Oggi, AES \xe8 lo standard del settore per la crittografia. A causa della sua natura aperta, \xe8 utilizzato dalla NSA e dalle agenzie governative, nonch\xe9 da organizzazioni private, commerciali e senza scopo di lucro."),(0,o.kt)("h2",{id:"come-funziona-aes-256"},"Come funziona AES-256"),(0,o.kt)("p",null,"AES \xe8 un cifrario a blocchi con una chiave simmetrica. Essendo un cifrario a chiave simmetrica, richiede una sola chiave segreta per criptare e decriptare i dati. Essendo un cifrario a blocchi, AES divide le informazioni non cifrate, chiamate plaintext, in blocchi, divide la chiave crittografica originale in pi\xf9 chiavi e le applica a ciascun blocco. Alla fine, si ottiene un testo cifrato, cio\xe8 un testo crittografato."),(0,o.kt)("p",null,"Esistono chiavi di diverse dimensioni - 128, 192 e 256 bit - e anche i blocchi sono misurati in bit. Durante il processo di crittografia, il codificatore sostituisce ogni informazione con un'altra, a seconda della chiave di sicurezza. Quindi, ad esempio, AES-256 crea 256 blocchi di testo cifrato da 256 blocchi di testo plaintext in 14 round."),(0,o.kt)("p",null,"I round consistono in diverse fasi: suddivisione dei dati in blocchi, scambio di byte, spostamento di righe e riordino di colonne. Il risultato \xe8 un insieme completamente casuale di caratteri, che avr\xe0 senso soltanto utilizzando la giusta chiave crittografica."),(0,o.kt)("p",null,"AES-256 \xe8 il livello di crittografia pi\xf9 elevato: per violare questa cifratura, 2256 combinazioni discrete, ognuna di 78 cifre, dovrebbero essere provate."))}f.isMDXComponent=!0}}]);