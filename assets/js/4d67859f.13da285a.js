"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[3993],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(4137)),i=["components"],s={title:"Problems with Restricted Mode profile",sidebar_position:4},l=void 0,p={unversionedId:"adguard-vpn-for-android/solving-problems/restricted-mode",id:"adguard-vpn-for-android/solving-problems/restricted-mode",title:"Problems with Restricted Mode profile",description:"The owners of phones and tablets running the Android 7+ operating system might face the problem caused by using a profile with Restricted Mode. If you have such a profile, AdGuard VPN, like other applications that use VPN, gets restrictions on selective handling of VPN traffic. Also, one of the reasons for this problem may be using Dual App/Dual Messenger profile on your device. Below are described the recommendations that you can apply when this problem occurs.",source:"@site/docs/adguard-vpn-for-android/solving-problems/restricted-mode.md",sourceDirName:"adguard-vpn-for-android/solving-problems",slug:"/adguard-vpn-for-android/solving-problems/restricted-mode",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/restricted-mode",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-android/solving-problems/restricted-mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Problems with Restricted Mode profile",sidebar_position:4},sidebar:"sidebar",previous:{title:"Compatibility with AdGuard Ad Blocker",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/integrated-mode"},next:{title:"Compatibility of AdGuard VPN with Chromecast",permalink:"/KnowledgeBaseVPN/adguard-vpn-for-android/solving-problems/chromecast"}},d={},m=[{value:"Solutions",id:"solutions",level:2},{value:"Option 1: Grant permissions to AdGuard VPN using ADB",id:"option-1-grant-permissions-to-adguard-vpn-using-adb",level:3},{value:"Option 2: Remove <em>Restricted user account</em>",id:"option-2-remove-restricted-user-account",level:3},{value:"LG and Samsung devices",id:"lg-and-samsung-devices",level:3},{value:"Samsung",id:"samsung",level:4},{value:"LG",id:"lg",level:4}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The owners of phones and tablets running the Android 7+ operating system might face the problem caused by using ",(0,o.kt)("strong",{parentName:"p"},"a profile with Restricted Mode"),". If you have such a profile, ",(0,o.kt)("strong",{parentName:"p"},"AdGuard VPN"),", like other applications that use VPN, gets restrictions on selective handling of VPN traffic. Also, one of the reasons for this problem may be using ",(0,o.kt)("strong",{parentName:"p"},"Dual App/Dual Messenger profile")," on your device. Below are described the recommendations that you can apply when this problem occurs."),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("p",null,"You have two ways to solve the issue:"),(0,o.kt)("h3",{id:"option-1-grant-permissions-to-adguard-vpn-using-adb"},"Option 1: Grant permissions to AdGuard VPN using ADB"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate the ",(0,o.kt)("strong",{parentName:"p"},"developer mode")," and enable ",(0,o.kt)("strong",{parentName:"p"},"USB debugging"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," application on your phone;"),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"System")," section (last item in the settings menu). In this section find sub-item ",(0,o.kt)("strong",{parentName:"li"},"About phone"),";"),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Build number")," line 7 times. After that, you will receive a notification that ",(0,o.kt)("strong",{parentName:"li"},"You are now a developer")," (If necessary, enter an unlock code for the device);"),(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("strong",{parentName:"li"},"System Settings")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"Developer Options")," \u2192 Scroll down and enable ",(0,o.kt)("strong",{parentName:"li"},"USB debugging")," \u2192 Confirm debugging is enabled in the window ",(0,o.kt)("strong",{parentName:"li"},"Allow USB debugging")," after reading the warning carefully.")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"If you have any difficulties or additional questions, full instructions can be found ",(0,o.kt)("a",{parentName:"h5",href:"https://developer.android.com/studio/debug/dev-options"},"here"),".")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.xda-developers.com/install-adb-windows-macos-linux/"},"Install and configure")," ADB;"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"On the Windows platform, ",(0,o.kt)("strong",{parentName:"h5"},"Samsung")," owners may need to install ",(0,o.kt)("a",{parentName:"h5",href:"https://developer.samsung.com/mobile/android-usb-driver.html"},"this utility"),".")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your device using a ",(0,o.kt)("strong",{parentName:"p"},"USB cable")," to the computer or laptop on which you installed ",(0,o.kt)("strong",{parentName:"p"},"ADB"),";")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"the command line")," on your PC:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cmd.exe")," if you are using ",(0,o.kt)("strong",{parentName:"li"},"Windows"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terminal")," if you are using ",(0,o.kt)("strong",{parentName:"li"},"macOS"),";"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the command ",(0,o.kt)("inlineCode",{parentName:"p"},"adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS")," and press ",(0,o.kt)("strong",{parentName:"p"},"Enter"),"."))),(0,o.kt)("h3",{id:"option-2-remove-restricted-user-account"},"Option 2: Remove ",(0,o.kt)("em",{parentName:"h3"},"Restricted user account")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/a/answer/6223444?hl=en"},"find here")," how to manage user accounts from an Android device."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on ",(0,o.kt)("strong",{parentName:"p"},"Samsung")," or ",(0,o.kt)("strong",{parentName:"p"},"LG")," devices. Read below how to fix the issue in these cases."))),(0,o.kt)("h3",{id:"lg-and-samsung-devices"},"LG and Samsung devices"),(0,o.kt)("p",null,"Owners of ",(0,o.kt)("strong",{parentName:"p"},"LG")," or ",(0,o.kt)("strong",{parentName:"p"},"Samsung")," phones may also encounter a similar issue. It can be caused by using ",(0,o.kt)("strong",{parentName:"p"},"Dual App/Dual Messenger")," function (which automatically creates a restricted profile).\nTo solve this issue, you need to disable this feature."),(0,o.kt)("h4",{id:"samsung"},"Samsung"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Settings"),";"),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("strong",{parentName:"li"},"Advanced"),";"),(0,o.kt)("li",{parentName:"ul"},"Scroll down and then press ",(0,o.kt)("strong",{parentName:"li"},"Dual Messenger"),";"),(0,o.kt)("li",{parentName:"ul"},"Disable the ",(0,o.kt)("strong",{parentName:"li"},"Dual Messenger")," for all apps;"),(0,o.kt)("li",{parentName:"ul"},"Lock the device for 5 minutes;"),(0,o.kt)("li",{parentName:"ul"},"Unlock the screen and try again to create the VPN profile.")),(0,o.kt)("h4",{id:"lg"},"LG"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Settings"),";"),(0,o.kt)("li",{parentName:"ul"},"Choose the ",(0,o.kt)("strong",{parentName:"li"},"General")," tab;"),(0,o.kt)("li",{parentName:"ul"},"Scroll down and then press ",(0,o.kt)("strong",{parentName:"li"},"Dual App"),";"),(0,o.kt)("li",{parentName:"ul"},"Remove all apps from the list;"),(0,o.kt)("li",{parentName:"ul"},"Reboot your device.")))}u.isMDXComponent=!0}}]);