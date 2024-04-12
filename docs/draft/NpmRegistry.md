---
id: 18
title: npm使用代理
tags: npm 代理
draft: 存在这一行时表示在草稿箱中
description: npm使用代理
---

# 设置代理

> npm config set proxy="<http_proxy>"  
> npm config set https-proxy="<https_proxy>"

# 删除代理

> npm config delete proxy npm config delete https-proxy

# 设置镜像

> npm config set registry https://registry.npm.taobao.org/

# 单次镜像

> npm install -registry https://registry.npm.taobao.org/
