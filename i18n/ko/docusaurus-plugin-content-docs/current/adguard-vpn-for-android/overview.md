---
title: 기능 개요
sidebar_position: 1
---

## Android용 AdGuard VPN이란 무엇인가요?

VPN은 인터넷을 사용할 때 보안과 익명성을 제공하는 도구입니다. [Android용 AdGuard VPN은 어떻게 작동하나요?](/general/how-vpn-works) 기술적인 세부 사항은 설명하지 않더라도, VPN은 사용자 기기와 원격 VPN 서버 사이에 암호화된 보안 연결(터널이라고 함)을 생성합니다. 따라서 실제 사용자 IP가 아닌 VPN 서버의 IP 주소가 표시되기 때문에 데이터 기밀성과 사용자 익명성이 유지됩니다.

**VPN은 다음과 같은 목적으로 자주 사용됩니다.**

- 공용 Wi-Fi를 사용하는 동안에도 개인 데이터 보호
- IP 주소를 마스킹하여 온라인 활동 추적 방지
- 익명성을 유지하기 위해 실제 위치 숨기기

Android용 AdGuard VPN은 모든 일반 기능뿐만 아니라 여러 고유한 기능도 제공합니다. [이 글](/general/why-adguard-vpn)에서 AdGuard VPN 사용의 이점을 확인할 수 있습니다.

## Android용 AdGuard VPN 사용을 시작하는 방법

먼저 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)에서 AdGuard VPN을 다운로드하고 AdGuard 계정에 로그인하세요. 계정이 없는 경우 계정을 [만들어야 합니다](https://auth.adguard.com/login.html). AdGuard 계정 자격 증명으로 직접 로그인하거나 AdGuard 계정이 Google 또는 Facebook 계정과 동일한 이메일 주소로 등록된 경우 Google 또는 Facebook을 통해 로그인할 수 있습니다.

## 메인 화면

메인 화면에는 VPN 상태(연결됨/연결 해제됨)가 표시됩니다. *연결/연결 해제* 버튼과 사용 가능한 서버 목록도 있습니다.

서버의 위치와 핑 속도는 각 서버 옆에 표시됩니다. 핑 속도는 서버의 응답 시간을 나타냅니다. 핑이 낮을수록 연결 속도가 빨라집니다. 수십 개국의 50개 이상의 위치로 구성된 목록에서 가장 빠른 서버는 항상 최상위에 있습니다. *연결* 버튼을 누르거나 위치를 선택하면 가장 빠른 서버에 연결할 수 있습니다.

## 예외

AdGuard VPN이 선택한 곳에서만 작동하도록 사이트 및 앱 예외 목록을 손쉽게 관리할 수 있습니다.

### 예외 목록

예외 목록을 사용하면 특정 웹사이트 및 앱에 대한 VPN 연결을 관리할 수 있습니다. *예외*에 액세스하려면 화면 하단의 왼쪽에서 두 번째 아이콘을 누릅니다. *예외* 섹션에 도달하려면 화면 하단 왼쪽에서 두 번째 아이콘을 누르세요.

기본적으로 AdGuard VPN은 예외 목록에 추가된 웹사이트와 앱을 제외한 모든 웹사이트와 앱에서 작동하지만, 다른 모드로 쉽게 전환할 수 있습니다.

#### 웹사이트의 경우

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to *Exclusions* in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![예외](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

도메인을 수동으로 추가할 때 약간의 뉘앙스가 있습니다. 예를 들어 도메인 `yahoo.com`을 수동으로 제외하면 모든 `*.yahoo.com` 하위 도메인도 예외 목록에 나열되지만 `yahoo.jp` 또는 `yahoo.fr`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다. 또는 `youtube.com`을 예외 목록에 추가할 수 있지만 동일한 서비스 `youtu.be`의 도메인은 목록에 포함되지 않습니다. 이 경우 각 플랫폼과 관련된 모든 하위 도메인을 추가하기 때문에 기본 제공 서비스 목록을 사용하는 것이 더 안전합니다.

:::

서비스 목록에 하위 도메인을 포함할 수 있으며, 각 서비스의 상태를 반영하는 필드를 추가했습니다. 이러한 필드는 *예외* 메인 화면의 각 서비스 이름 왼쪽에서 확인할 수 있습니다.

- **완전히 활성화된 상태**는 녹색 배경에 흰색 체크 표시로 표시됩니다.
- **부분적으로 활성화된 상태**(기본 도메인이 없는 활성화된 하위 도메인)는 흰색 배경에 녹색 사각형으로 표시됩니다.
- **완전히 비활성화된 상태**는 빈 확인란으로 표시됩니다.

 그러나 목록에서 도메인을 삭제하거나 비활성화한 경우, 서비스 목록의 기본 보기로 언제든지 돌아갈 수 있습니다.

![예외 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

또 다른 유용한 기능은 *예외 목록 가져오기/내보내기*입니다. 이 기능을 사용하려면 4단계만 수행하면 됩니다.

1. 예외 목록을 내보내려는 브라우저/기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `adguard_vpn_exclusions.zip` 파일이 다운로드됩니다.
2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
3. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오. 예를 들어, Windows 기기에서 Android로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Android로 보내야 합니다.
4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

![가져오기/내보내기 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### 앱의 경우

웹 사이트뿐만 아니라 앱도 예외 목록에 추가될 수 있습니다. AdGuard VPN이 작동할 앱과 작동하지 않을 앱을 선택합니다.

*통합 모드*에서는 AdGuard 광고 차단기를 통해서만 앱을 관리할 수 있습니다.

![앱 예외 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 설정

화면 오른쪽 하단의 톱니바퀴 아이콘을 눌러 *설정*으로 이동할 수 있습니다. 첫 번째 섹션에는 *앱 설정*이 있습니다. 여기에서 다른 옵션을 선택하여 필요에 따라 Android용 AdGuard VPN을 구성하세요.

![앱 설정 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 자동 시작

슬라이더를 오른쪽으로 전환하면 장치 시작 후 AdGuard VPN 자동 시작이 활성화됩니다.

### DNS 서버

DNS 서버는 웹사이트의 이름을 브라우저가 이해할 수 있는 것(예: IP 주소)으로 변환합니다. Android용 AdGuard VPN에서는 각각 고유한 특성이 있는 여러 DNS 서버 중에서 선택할 수 있습니다. 예를 들어, [AdGuard DNS](https://adguard-dns.io/kb/)는 광고를 제거하고 기기가 추적되지 않도록 보호하며 AdGuard DNS 자녀 보호는 AdGuard DNS, 세이프 서치 및 성인 콘텐츠 차단 기능을 결합합니다. 사용자 지정 DNS 서버를 추가하는 옵션도 있습니다.

### 자동 보호

이 기능은 기기가 Wi-Fi 또는 모바일 네트워크에 연결될 때 AdGuard VPN을 자동으로 활성화합니다.

### 킬 스위치

화면의 간단한 지침에 따라 Android 기기에서 킬 스위치 기능을 설정할 수 있습니다. 이 기능을 사용하는 이유는 무엇인가요? 모바일 네트워크 또는 공용 Wi-Fi를 사용하는 동안 VPN 연결이 갑자기 끊어지면 킬 스위치가 자동으로 인터넷 연결을 종료하여 데이터가 유출되지 않도록 합니다.

킬 스위치가 켜져 있으면 *앱 설정* 및 *예외 목록*이 사용할 수 없습니다.

### 테마

기본, 시스템 기본값(동적), 다크 또는 라이트 테마 중 하나를 선택할 수 있습니다.

![시스템 동적 테마 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![라이트 테마 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![다크 테마 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### 고급 설정

*고급 설정*에서 4개의 섹션을 찾을 수 있습니다.

*운영 모드*에서는 트래픽이 어떻게 라우팅될지 지정할 수 있습니다. VPN, SOCKS5 및 통합 모드의 세 가지 모드가 있습니다. *VPN* 모드에서는 모든 트래픽이 AdGuard VPN을 통해 라우팅됩니다. *SOCKS5* 모드에서 AdGuard VPN은 트래픽 라우팅을 위해 다른 앱에서 사용할 수 있는 로컬 프록시 서버를 실행합니다. *통합 모드*에서 AdGuard VPN과 AdGuard 광고 차단기는 동시에 작동할 수 있습니다.

:::note

*통합 모드*에서는 DNS 서버, 킬 스위치, 자동 보호, 앱 예외와 같은 일부 AdGuard VPN 기능이 비활성화됩니다. AdGard 광고 차단기 앱에서 DNS 보호를 관리하고 AdGard VPN 프록시를 통해 앱을 라우팅할 수 있습니다.

:::

다음 두 섹션은 *로깅 수준*과 *진단 정보*입니다. 지원 팀에서 분명히 이를 요청하지 않은 경우, 고급화된 로깅 수준 또는 극한의 로깅 수준으로 설정하지 마십시오. 기술적인 문제가 있는 경우, 진단 정보(예: 기기 및 연결(IP 주소, ID, 핑 등)에 대한 로컬로 저장된 기술 정보)를 당사로 보낼 수 있습니다.

*고급 설정*의 마지막 섹션은 *로우 레벨 설정*입니다. 특별한 지식이 있거나 지원 팀에서 요청한 경우가 아니면 이 섹션을 사용하지 않는 것이 좋습니다. 여기에서 VPN 인터페이스에서 TUN 인터페이스 로깅 또는 IPv6 프로토콜을 활성화하고 사용할 프록시 서버 포트 또는 인터넷 프로토콜 버전을 선택할 수 있습니다.

:::note 호환성

*IPv6 활성화* 옵션은 IPv6를 지원하는 네트워크에서만 사용할 수 있습니다.

:::

### 고객 지원

*지원* 섹션에서 피드백을 남기거나, 버그를 신고하거나 지원 팀에 보낼 로그 및 시스템 정보를 내보낼 수 있습니다.
