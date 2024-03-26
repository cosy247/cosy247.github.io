---
date: 2024/03/26
draft: 存在这一行时表示在草稿箱中
title: window自定义开机自启动程序
lables: 杂记
description: window自定义开机自启动程序
---

# window 自定义开机自启动程序

## 引言

在公司上班的时候开机总是要启动很多很多程序（Vscode,微信等），但是这些程序有没有开机启动的选项，便寻求其他的自启动方法。

## 添加自启动

设置自启动的方法非常简单，打开文件夹

```
C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

将对应查询的快捷方式添加到文件夹中即可，`win + r`输入`shell:startup`可以快速打开此文件夹。

![alt text](assets/AutoStartOnWindows/image-2.png)

添加后参考如图：

![alt text](assets/AutoStartOnWindows/image-1.png)

## 关闭自启动

如果是用上面的方法添加的自启动，那么可以通过删除对应的快捷方式来关闭自启动。

另外系统的全部自启动程序（包括用上面方式开启的自启动程序）都可以在任务管理器中进行关闭。

![alt text](assets/AutoStartOnWindows/image-3.png)

需要注意，通过上面添加快捷方式添加自启动程序后再关闭后，任务管理器的自启动管理页面是不会显示该程序的。
