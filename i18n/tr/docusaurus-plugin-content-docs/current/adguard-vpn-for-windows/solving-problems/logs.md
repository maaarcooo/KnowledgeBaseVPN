---
title: Günlükler nasıl toplanır ve gönderilir
sidebar position: 1
---

Windows için AdGuard VPN kullanırken herhangi bir sorunla karşılaşırsanız, bizi bu konuda bilgilendirebilirsiniz. Sorunları daha hızlı çözmemize yardımcı oldukları için uygulama günlüklerini de gönderirseniz çok memnun oluruz.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

Çoğu durumda, olası hataların izini sürmek için varsayılan günlük kayıt düzeyi yeterlidir. Ancak, cihaz ve bağlantılar hakkında daha ayrıntılı teknik bilgilerin gerekli olduğu durumlar vardır ve bu durumda destek ekibimiz, genişletilmiş günlük kayıt düzeyini etkinleştirmenizi ister. Bu tür günlükleri göndermek için şu adımları takip edin:

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. **Günlük kayıt düzeyi** bölümünde, **Her şeyi kaydet** öğesini seçin.

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Hataya neden olan işlemleri tekrarlayın ve meydana geldiği zamana dikkat edin.

1. Kayıt düzeyini **Varsayılan olarak tekrar kaydet** olarak değiştirin.

### Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Support** → **Export logs and system info**.

Don't worry if your log file is large. We need to know as many details as possible in order to fix your problem.

## Sending logs

To send logs to our support team, please follow the next steps:

1. Click **Support** in the menu above → **Report a bug**.

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can't reproduce the problem, be as specific as possible about when it last occurred.

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. **Detaylı sistem bilgisi gönder** öğesinin yanında bir onay işareti vardır; bu, bir rapor gönderdiğinizde günlükleri de göndereceğiniz anlamına gelir.

> Herhangi bir nedenle bize günlükleri başka bir şekilde göndermeniz daha uygunsa, bunları kendiniz dışa aktarabilirsiniz. Bunu yapmak için **Destek** → **Günlükleri ve sistem bilgisini dışa aktar** öğesine gidin.

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
