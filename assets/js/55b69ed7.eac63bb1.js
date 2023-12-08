"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[150],{4137:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},l=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(h,p(p({ref:e},l),{},{components:n})):a.createElement(h,p({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,p=new Array(r);p[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1828:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=n(3117),o=n(102),r=(n(7294),n(4137)),p=["components"],i={title:"How to set up AdGuard VPN automation for iPhone and iPad apps",sidebar_position:1,sidebar_label:"How to set up AdGuard VPN automation"},u=void 0,d={unversionedId:"adguard-vpn-for-ios/solving-problems/automation",id:"adguard-vpn-for-ios/solving-problems/automation",title:"How to set up AdGuard VPN automation for iPhone and iPad apps",description:"There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.",source:"@site/docs/adguard-vpn-for-ios/solving-problems/automation.md",sourceDirName:"adguard-vpn-for-ios/solving-problems",slug:"/adguard-vpn-for-ios/solving-problems/automation",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-ios/solving-problems/automation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-ios/solving-problems/automation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to set up AdGuard VPN automation for iPhone and iPad apps",sidebar_position:1,sidebar_label:"How to set up AdGuard VPN automation"},sidebar:"sidebar",previous:{title:"Installation and removal",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-ios/installation"},next:{title:"How to collect and send logs",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-ios/solving-problems/logs"}},l={},s=[{value:"Setting up AdGuard VPN automatic activation",id:"setting-up-adguard-vpn-automatic-activation",level:2},{value:"Configuring AdGuard VPN automatic shutdown",id:"configuring-adguard-vpn-automatic-shutdown",level:2}],c={toc:s};function m(t){var e=t.components,n=(0,o.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads."),(0,r.kt)("h2",{id:"setting-up-adguard-vpn-automatic-activation"},"Setting up AdGuard VPN automatic activation"),(0,r.kt)("p",null,"If you need a VPN for one or more apps, set up AdGuard VPN to automatically turn on and off when you open and close them. Go to the Exclusions tab, select General mode and follow the instructions. Here we describe how to create automation for Twitter, but you can choose any other app."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg",alt:"Instruction. Part 1"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/shortcuts/id915249334"},"the ",(0,r.kt)("em",{parentName:"a"},"Shortcuts")," app")," from the App Store and go to the ",(0,r.kt)("em",{parentName:"li"},"Automation")," section by tapping the clock icon at the bottom of the screen."),(0,r.kt)("li",{parentName:"ol"},"Tap the ",(0,r.kt)("em",{parentName:"li"},"Create Personal Automation")," button, then find ",(0,r.kt)("em",{parentName:"li"},"App")," in the list that opens and tap it."),(0,r.kt)("li",{parentName:"ol"},"In the next window, make sure that the ",(0,r.kt)("em",{parentName:"li"},"Is Opened")," option is selected, and then tap ",(0,r.kt)("em",{parentName:"li"},"Choose")," to choose the app.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg",alt:"Instruction. Part 2"}),"\n4. Start entering the name of the app (in our case it's Twitter) and select it. Tap ",(0,r.kt)("em",{parentName:"p"},"Done"),", then tap ",(0,r.kt)("em",{parentName:"p"},"Next")," in the upper right corner of the screen. In the opened window, tap ",(0,r.kt)("em",{parentName:"p"},"Add Action"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg",alt:"Instruction. Part 3"}),"\n5. Start entering \u201cAdGuard VPN\u201d and select the AdGuard VPN app. In the new window tap ",(0,r.kt)("em",{parentName:"p"},"Set a VPN connection"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg",alt:"Instruction. Part 4"}),"\n6. Make sure the variables say ",(0,r.kt)("em",{parentName:"p"},"Turn")," VPN connection ",(0,r.kt)("em",{parentName:"p"},"On")," and tap ",(0,r.kt)("em",{parentName:"p"},"Next"),".\n7. In the next window, move the slider next to the ",(0,r.kt)("em",{parentName:"p"},"Ask before running")," option to the inactive position. Confirm your choice, then tap ",(0,r.kt)("em",{parentName:"p"},"Done"),"."),(0,r.kt)("p",null,"Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app."),(0,r.kt)("h2",{id:"configuring-adguard-vpn-automatic-shutdown"},"Configuring AdGuard VPN automatic shutdown"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg",alt:"Instruction. Part 1"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the same ",(0,r.kt)("em",{parentName:"li"},"Shortcuts")," app start creating a new automation: tap ",(0,r.kt)("em",{parentName:"li"},"Automation")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Create Personal Automation")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"App"),"."),(0,r.kt)("li",{parentName:"ol"},"Make sure that the ",(0,r.kt)("em",{parentName:"li"},"Is Closed")," option is selected and uncheck the box under the adjacent option. Then tap ",(0,r.kt)("em",{parentName:"li"},"Choose"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg",alt:"Instruction. Part 2"}),"\n3. Start entering ",(0,r.kt)("em",{parentName:"p"},"Twitter")," and select the app. Then tap ",(0,r.kt)("em",{parentName:"p"},"Done")," in the upper right corner of the screen. Tap ",(0,r.kt)("em",{parentName:"p"},"Add Action")," and select AdGuard VPN."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg",alt:"Instruction. Part 3"}),"\n4. In the new window tap ",(0,r.kt)("em",{parentName:"p"},"Set VPN connection"),".\n5. Then tap the word ",(0,r.kt)("em",{parentName:"p"},"On")," so that it changes to the word ",(0,r.kt)("em",{parentName:"p"},"Off"),", then tap ",(0,r.kt)("em",{parentName:"p"},"Next")," in the upper right corner of the screen.\n6. Disable the ",(0,r.kt)("em",{parentName:"p"},"Ask before running")," option and confirm your selection. Then tap ",(0,r.kt)("em",{parentName:"p"},"Done")," at the top right corner of the screen to complete the process."),(0,r.kt)("p",null,"Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app."))}m.isMDXComponent=!0}}]);