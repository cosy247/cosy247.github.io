---
id: 240507 9340908
date: 2024/05/07
title: js判断设备类型
tags: 杂记
archive:
recommendations:
description: js判断设备类型
---

# js 判断设备类型

## 


```js
var os = (function () {
  var ua = navigator.userAgent,
    isWindowsPhone = /(Windows Phone)/.test(ua),
    isSymbian = /(SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(Android)/.test(ua),
    isFireFox = /(Firefox)/.test(ua),
    isChrome = /(Chrome|CriOS)/.test(ua),
    isTablet = /(iPad|PlayBook)/.test(ua) || (isAndroid && !/(Mobile)/.test(ua)) || (isFireFox && /(Tablet)/.test(ua)),
    isPhone = /(Mobi)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
  };
})();
console.log(navigator.userAgent, os);
```

## 参考

1. [使用用户代理字段进行浏览器检测 - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)
1. [User-Agent - HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent)

```

```
