---
title: js实现File、Blob、ArrayBuffer、base64、url之间互转
tags: 前端 js
draft: 存在这一行时表示在草稿箱中
---

# File 和 Blob 的关系

File 类为 Blob 的一个子类，Blob和ArrayBuffer

![Alt text](assets/base64ToBoldToFileToUrl/image.png)

# 文件转 blob

通过 FileReader 类下的 readAsArrayBuffer 实例方法获取指定文件的二进制编码

```js
const blob = new FileReader().readAsArrayBuffer(file);
```

# 文件转 base64

通过 FileReader 类下的 readAsDataURL 实例方法获取指定文件的 base64 码

```js
const base64 = new FileReader().readAsDataURL(file);
```

# 文件转 url

通过 window.URL 类下的 createObjectURL 静态方法为文件创建一个临时地址

```js
const url = window.URL.createObjectURL(file);
```
