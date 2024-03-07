"use strict";(self.webpackChunkadguard_vpn_knowledge_base=self.webpackChunkadguard_vpn_knowledge_base||[]).push([[9438],{4137:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(g,o(o({ref:a},s),{},{components:t})):r.createElement(g,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5357:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(3117),n=t(102),i=(t(7294),t(4137)),o=["components"],l={title:"Come configurare l'automazione VPN AdGuard per le app per iPhone e iPad",sidebar_position:1,sidebar_label:"Come impostare l'automazione di AdGuard VPN"},p=void 0,u={unversionedId:"adguard-vpn-for-ios/solving-problems/automation",id:"adguard-vpn-for-ios/solving-problems/automation",title:"Come configurare l'automazione VPN AdGuard per le app per iPhone e iPad",description:"Non \xe8 presente alcuna esclusione di app su AdGuard VPN per iOS. Tuttavia, \xe8 possibile automatizzare AdGuard VPN per le app su iPhone e iPad.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-vpn-for-ios/solving-problems/automation.md",sourceDirName:"adguard-vpn-for-ios/solving-problems",slug:"/adguard-vpn-for-ios/solving-problems/automation",permalink:"/KnowledgeBaseVPN/it/adguard-vpn-for-ios/solving-problems/automation",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseVPN/edit/master/docs/adguard-vpn-for-ios/solving-problems/automation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Come configurare l'automazione VPN AdGuard per le app per iPhone e iPad",sidebar_position:1,sidebar_label:"Come impostare l'automazione di AdGuard VPN"},sidebar:"sidebar",previous:{title:"Installazione e rimozione",permalink:"/KnowledgeBaseVPN/it/adguard-vpn-for-ios/installation"},next:{title:"Come raccogliere e inviare i registri",permalink:"/KnowledgeBaseVPN/it/adguard-vpn-for-ios/solving-problems/logs"}},s={},c=[{value:"Configurazione dell&#39;attivazione automatica di AdGuard VPN",id:"configurazione-dellattivazione-automatica-di-adguard-vpn",level:2},{value:"Configurazione dell&#39;arresto automatico di AdGuard VPN",id:"configurazione-dellarresto-automatico-di-adguard-vpn",level:2}],d={toc:c};function m(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Non \xe8 presente alcuna esclusione di app su AdGuard VPN per iOS. Tuttavia, \xe8 possibile automatizzare AdGuard VPN per le app su iPhone e iPad."),(0,i.kt)("h2",{id:"configurazione-dellattivazione-automatica-di-adguard-vpn"},"Configurazione dell'attivazione automatica di AdGuard VPN"),(0,i.kt)("p",null,"Se hai bisogno di una VPN per una o pi\xf9 app, configura AdGuard VPN in modo che si accenda e si spenga automaticamente quando le apri e le chiudi. Accedere alla scheda Esclusioni, selezionare la modalit\xe0 Generale e seguire le istruzioni. Qui descriviamo come creare l'automazione per Twitter, ma puoi scegliere qualsiasi altra app."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg",alt:"Istruzioni. Parte 1"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scaricare ",(0,i.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/shortcuts/id915249334"},"l'applicazione ",(0,i.kt)("em",{parentName:"a"},"Shortcuts"))," dall'App Store e accedere alla sezione ",(0,i.kt)("em",{parentName:"li"},"Automazione")," toccando l'icona dell'orologio nella parte inferiore dello schermo."),(0,i.kt)("li",{parentName:"ol"},"Toccare il pulsante ",(0,i.kt)("em",{parentName:"li"},"Crea automazione personale"),", quindi trovare ",(0,i.kt)("em",{parentName:"li"},"App")," nell'elenco che si apre e toccarlo."),(0,i.kt)("li",{parentName:"ol"},"Nella finestra successiva, assicurarsi che l'opzione ",(0,i.kt)("em",{parentName:"li"},"\xc8 aperta")," sia selezionata, quindi toccare ",(0,i.kt)("em",{parentName:"li"},"Scegliere")," per scegliere l'applicazione.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg",alt:"Istruzioni. Parte 2"}),"\n4. Inizia inserendo il nome dell'app (nel nostro caso, \xe8 Twitter) e selezionandolo. Tocca su ",(0,i.kt)("em",{parentName:"p"},"Fatto"),", quindi su ",(0,i.kt)("em",{parentName:"p"},"Avanti")," nell'angolo superiore destro della schermata. Nella finestra aperta, tocca su ",(0,i.kt)("em",{parentName:"p"},"Aggiungi azione"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg",alt:"Istruzioni. Parte 3"}),'\n5. Iniziare a digitare "AdGuard VPN" e selezionare l\'applicazione AdGuard VPN. Nella nuova finestra toccare ',(0,i.kt)("em",{parentName:"p"},"Impostare una connessione VPN"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg",alt:"Istruzioni. Parte 4"}),"\n6. Assicurarsi che le variabili dicano ",(0,i.kt)("em",{parentName:"p"},"Attivare")," la connessione VPN ",(0,i.kt)("em",{parentName:"p"},"On")," e toccare ",(0,i.kt)("em",{parentName:"p"},"Avanti"),".\n7. Nella finestra successiva, spostare il cursore accanto all'opzione ",(0,i.kt)("em",{parentName:"p"},"Chiedi prima di eseguire")," nella posizione inattiva. Conferma la tua scelta, quindi tocca su ",(0,i.kt)("em",{parentName:"p"},"Fatto"),"."),(0,i.kt)("p",null,"Ora hai un nuovo scenario: AdGuard VPN verr\xe0 abilitato automaticamente quando avvii l'app Twitter. Ora \xe8 necessario creare un altro comando per far s\xec che AdGuard VPN si spenga automaticamente quando si chiude l'applicazione."),(0,i.kt)("h2",{id:"configurazione-dellarresto-automatico-di-adguard-vpn"},"Configurazione dell'arresto automatico di AdGuard VPN"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg",alt:"Istruzioni. Parte 1"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Nella stessa app delle ",(0,i.kt)("em",{parentName:"li"},"Scorciatoie"),", inizia a creare una nuova automatizzazione: tocca su ",(0,i.kt)("em",{parentName:"li"},"Automatizzazione")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Crea automatizzazione personale")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"App"),"."),(0,i.kt)("li",{parentName:"ol"},"Assicurarsi che sia selezionata l'opzione ",(0,i.kt)("em",{parentName:"li"},"\xc8 chiuso")," e deselezionare la casella sotto l'opzione adiacente. Quindi fare clic su ",(0,i.kt)("em",{parentName:"li"},"Scegliere"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg",alt:"Istruzioni. Parte 2"}),"\n3. Iniziare a inserire ",(0,i.kt)("em",{parentName:"p"},"Twitter")," e selezionare l'app. Quindi premi ",(0,i.kt)("em",{parentName:"p"},"Fatto")," nell'angolo superiore destro dello schermo. Toccare ",(0,i.kt)("em",{parentName:"p"},"Aggiungi azione")," e selezionare AdGuard VPN."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg",alt:"Istruzioni. Parte 3"}),"\n4. Nella nuova finestra toccare ",(0,i.kt)("em",{parentName:"p"},"Impostare connessione VPN"),".\n5. Quindi toccare la parola ",(0,i.kt)("em",{parentName:"p"},"On")," in modo che si trasformi nella parola ",(0,i.kt)("em",{parentName:"p"},"Off"),", quindi toccare ",(0,i.kt)("em",{parentName:"p"},"Next")," nell'angolo superiore destro dello schermo.\n6. Disattivare l'opzione ",(0,i.kt)("em",{parentName:"p"},"Chiedi prima di eseguire")," e confermare la selezione. Quindi tocca ",(0,i.kt)("em",{parentName:"p"},"Fatto")," nell'angolo in alto a destra dello schermo per completare il processo."),(0,i.kt)("p",null,"Tutto fatto! AdGuard VPN verr\xe0 ora attivato sul dispositivo ogni volta che si apre l'app di Twitter e disattivato quando la si chiude. \xc8 possibile ripetere la stessa procedura per qualsiasi altra applicazione."))}m.isMDXComponent=!0}}]);