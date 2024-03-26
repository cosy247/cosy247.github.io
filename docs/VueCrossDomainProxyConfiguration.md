---
title: Vue前端项目跨域
tags: 前端 跨域
draft: 存在这一行时表示在草稿箱中
description: Vue前端项目跨域
---

# 修改浏览器快捷方式

1. 创建浏览器快捷方式

2. 右键点击属性

3. 在目标这一列后面添加` --disable-web-security --user-data-dir="c:\temp\chromedev"`
其中`c:\temp\chromedev`文件夹可以随便取名，将用来存储当前快捷方式浏览器的信息，不存在文件夹时将自动创建。注意`--disable`前面需要添加一个空格

![Alt text](assets/VueCrossDomainProxyConfiguration/image.png)

# 使用vue代理

