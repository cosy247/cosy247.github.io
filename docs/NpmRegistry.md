---
id: 18
date: 2023/12/04
title: npm使用代理
tags: npm
description: npm使用代理
---

# npm 使用代理

## 设置代理

> npm config set proxy="<http_proxy>"  
> npm config set https-proxy="<https_proxy>"

## 删除代理

> npm config delete proxy npm config delete https-proxy

## 设置镜像

> npm config set registry https://registry.npm.taobao.org/

## 单次镜像

> npm install -registry https://registry.npm.taobao.org/
