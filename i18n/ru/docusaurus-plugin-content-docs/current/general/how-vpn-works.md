---
title: Как работает VPN
sidebar_position: 1
---

Чтобы понять, как работает AdGuard VPN, для начала следует разобраться с основными принципами работы VPN-сервиса.

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="Видеоплеер YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Функции VPN

VPN — это виртуальная частная сеть (Virtual Private Network), которая скрывает ваше местоположение и защищает ваши данные в интернете. VPN соединяет компьютер или мобильное устройство с VPN-сервером и использует его IP-адрес, чтобы стороннему наблюдателю казалось, что вы находитесь в другом месте. Это позволяет вам безопасно получать доступ к различным интернет-ресурсам и защищать свои личные данные.

Таким образом, VPN выполняет две важные функции:

1. **Обеспечивает анонимность**

    Пользуясь интернетом, человек оставляет цифровой след, который затем может быть проанализирован и использован третьими лицами. Например, один из интернет-магазинов, который вы посещали, может сохранить историю вашего поиска и затем предложить вам свои товары на её основе с помощью таргетированной рекламы. Или же секретные службы, узнав ваше местоположение по IP-адресу вашего устройства и определив вашу личность, могут тайно следить за вашей активностью в интернете. Кроме того, сами веб-браузеры и интернет-провайдеры могут использовать историю поиска в своих целях, а также продавать её рекламодателям и предоставлять государственным учреждениям. VPN позволяет скрыть ваш IP-адрес и заменить его IP-адресом VPN-сервера, к которому вы подключены. Таким образом, вы сможете сохранить свою конфиденциальность и анонимно искать информацию в интернете.

1. **Защита данных**

    Если вы подключаетесь к ненадёжной или общедоступной сети, данные на вашем устройстве могут подвергнуться атаке киберпреступников. Данные банковских карт, имена пользователей и пароли, паспортные данные — все эти данные могут быть перехвачены мошенниками. VPN-туннель шифрует информацию, которую вы отправляете и получаете из интернета, делая её бесполезной в чужих руках.

## Структура VPN

Когда вы подключаетесь к сети, вашему компьютеру или мобильному устройству присваивается уникальный идентификационный номер или IP-адрес. Обычно он состоит из чисел от 0 до 255, разделённых точками или двоеточиями. Зная эту последовательность, можно определить местоположение устройства. Обычно ваш IP-адрес назначается интернет-провайдером, и он остаётся видимым на всём пути к нужному ресурсу. По этой причине веб-сервер сайта, который вы посещаете, может зарегистрировать ваш IP-адрес и запомнить все ваши запросы. Затем эта запись может быть использована для сбора данных и анализа трафика.

VPN создаёт туннель между вашим устройством и VPN-сервером. Ваши данные проходят через него, шифруются и затем попадают в открытый интернет в защищённом виде. Поэтому веб-сервер регистрирует IP-адрес конечной точки туннеля, то есть VPN-сервера, а не реальный IP-адрес устройства. Таким образом, сайт, на который вы попадёте после прохождения через VPN-туннель, будет считать геолокацию выбранного вами VPN-сервера вашим реальным местоположением. А зашифрованные данные не попадут в руки рекламодателей, хакеров и служб безопасности.

![Структура VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Типы VPN-протоколов

Протоколы безопасности VPN — это главные инструменты, которые шифруют данные в VPN-туннеле и обеспечивают конфиденциальность пользователя в интернете. Большинство современных VPN-сервисов используют один из следующих трёх VPN-протоколов:

1. [*IPSec*](https://ru.wikipedia.org/wiki/IPsec). Одно из его основных преимуществ в том, что он доступен на большинстве устройств и операционных систем и обеспечивает высокий уровень безопасности. Однако использование двойной [инкапсуляции](https://en.wikipedia.org/wiki/Encapsulation_(networking)) в этом протоколе может привести к снижению скорости соединения.

1. [*OpenVPN*](https://ru.wikipedia.org/wiki/OpenVPN). У этого современного протокола открытый исходный код, поэтому сторонние производители могут совершенствовать и обновлять технологию.

1. [*WireGuard*](https://ru.wikipedia.org/wiki/WireGuard). Его основные преимущества — простота использования, высокая эффективность и низкая уязвимость.

Помимо этих VPN-протоколов существуют и другие (например, TLS, SSTP, IKEv2), но они непопулярны или не соответствуют современным стандартам шифрования данных.

У AdGuard VPN также есть свой [*протокол*](/general/adguard-vpn-protocol). Одно из его преимуществ заключается в том, что трафик, передаваемый по протоколу AdGuard VPN, трудно отличить от обычного. VPN-туннель выглядит как обычный HTTPS-трафик, поэтому обнаружить и заблокировать его крайне сложно. Кроме того, он основан на механизмах современного протокола HTTP/2, что обеспечивает высокую скорость соединения.

## Недостатки VPN

Несмотря на очевидные преимущества, VPN не совершенен и имеет некоторые недостатки:

### Снижение скорости

Поскольку ваш трафик не идёт напрямую на веб-сервер, а сначала проходит через VPN-сервер, скорость VPN-соединения снижается. На скорость при использовании VPN влияют и другие факторы: загруженность VPN-сервера, его пропускная способность, совместимость VPN-протокола с вашей операционной системой. Все эти факторы, а также скорость самой сети, могут повлиять на качество VPN-соединения.

### Блокировка доступа

У некоторых онлайн-сервисов есть система для обнаружения использования VPN, и если они думают, что кто-то подключается через VPN, то могут заблокировать доступ. Однако не многие VPN могут маскироваться таким образом, чтобы их воспринимали только как обычный трафик. Therefore, many attempts to reach a certain website via a VPN connection end in nothing.

### Обрыв VPN-соединений

Слабый сигнал, перегрузка сети, несовместимость VPN с фаерволом, антивирусом и другими программами, устаревший VPN-протокол — всё это может стать причиной внезапного обрыва VPN-соединения, особенно у ненадёжных VPN-провайдеров.

## AdGuard VPN

У нашего VPN-сервиса есть несколько важных [преимуществ](/general/why-adguard-vpn):

- [*Собственный VPN-протокол*](/general/adguard-vpn-protocol), который стабильно работает даже при медленном интернет-соединении и маскируется под обычный трафик, что затрудняет его отслеживание и блокировку

- [*Политика без записи логов*](https://adguard-vpn.com/privacy.html), которая означает, что AdGuard VPN не собирает ваши личные данные и не передаёт их третьим лицам

- *Более 50 VPN-серверов в десятках стран;*

- *Простота использования и широкие возможности настройки.*

В настоящее время AdGuard VPN доступен как:

- [Браузерное расширение](/adguard-vpn-browser-extension/overview) для Chrome, Edge, Firefox и Opera

- Мобильное приложение для [Android](/adguard-vpn-for-android/overview) и [iOS](/adguard-vpn-for-ios/overview)

- Десктопное приложение для [Windows](/adguard-vpn-for-windows/overview) и [Mac](/adguard-vpn-for-mac/overview)

[Узнайте больше о функциях AdGuard VPN](https://adguard-vpn.com/welcome.html)
