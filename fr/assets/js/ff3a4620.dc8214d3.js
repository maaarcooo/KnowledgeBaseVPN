"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[407],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(4137)),a=["components"],s={title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",sidebar_position:7},c=void 0,l={unversionedId:"general/adguard-vpn-encryption",id:"general/adguard-vpn-encryption",title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/general/adguard-vpn-encryption.md",sourceDirName:"general",slug:"/general/adguard-vpn-encryption",permalink:"/KnowledgeBaseVPN/fr/general/adguard-vpn-encryption",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/general/adguard-vpn-encryption.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Quel type de chiffrement est utilis\xe9 dans AdGuard VPN",sidebar_position:7},sidebar:"sidebar",previous:{title:"Comment s'abonner",permalink:"/KnowledgeBaseVPN/fr/general/subscription"},next:{title:"Features overview",permalink:"/KnowledgeBaseVPN/fr/adguard-vpn-for-android/overview"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"AES historical tour",id:"aes-historical-tour",level:2},{value:"How AES-256 works",id:"how-aes-256-works",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'Encryption is the reason the word "private" exists in the term "Virtual Private Network". A VPN creates a tunnel between your device and a VPN server, passing through which your data gets encrypted and then enters the open Internet in a secure form. The process of encryption, i.e. turning data into gibberish that no one who intercepts it can read, is essential to any VPN service.'),(0,i.kt)("p",null,"AdGuard VPN protocol uses the most secure and fast encryption algorithm to date \u2013 AES-256. Learn what it is and why it is so good."),(0,i.kt)("h2",{id:"aes-historical-tour"},"AES historical tour"),(0,i.kt)("p",null,"AES (Advanced Encryption Standard) encryption was developed in the late 20th century at the U.S. government request: the existing Data Encryption Standard (DES) became obsolete and a new, more secure encryption algorithm was required."),(0,i.kt)("p",null,"In a public competition announced by the government won the Rijndael cipher \u2014 rather similar to DES but much more sophisticated. In 2002 it was renamed AES and published by the U.S. National Institute of Standards and Technology."),(0,i.kt)("p",null,"Today, AES is the industry standard for encryption. Because of its open nature, it is used by the NSA and government agencies, as well as private, commercial, and non-profit organizations."),(0,i.kt)("h2",{id:"how-aes-256-works"},"How AES-256 works"),(0,i.kt)("p",null,"AES is a block cipher with a symmetric key. As a symmetric-key cipher, it requires only one secret key to encrypt and decrypt the data. As a block cipher, AES divides the unencrypted information, which is called plaintext, into blocks, splits the original cryptographic key into several ones and applies them to each block. In the end, a ciphertext, i.e. an encrypted text, is obtained."),(0,i.kt)("p",null,"There are different key sizes \u2014 128, 192 and 256 bits \u2014 and the blocks are also measured in bits. During the encryption process, the encryptor replaces each piece of information with another, depending on the security key. So, for example, AES-256 creates 256 blocks of ciphertext from 256 blocks of plaintext in 14 rounds."),(0,i.kt)("p",null,"The rounds consist of several steps: splitting the data into blocks, swapping bytes, shifting rows and rearranging columns. The result is a completely random set of characters, which will only make sense with an encryption key."),(0,i.kt)("p",null,"AES-256 is the strongest level of encryption: to break this cipher, a bad actor will have to try 2256 discrete combinations, each consisting of 78 digits."))}h.isMDXComponent=!0}}]);