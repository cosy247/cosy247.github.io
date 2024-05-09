---
id: 9
date: 2024/05/08
title: Web前端控制文本换行
tags: 前端
archive:
recommendations:
description: Web前端控制文本换行
---

# Web前端控制文本换行

## 默认情况

在不对页面中的标签文本进行任何处理时，标签内文本将尽可能的一行显示，并将回车符替换为空格，多个连续空格替换为单个空格。一般会在超出容器元素的宽度时的单词结尾处进行换行（中文每个字作为一个单词），如果单词长度超过了容器元素的宽度时也不会强制换行。如果想对换行进行控制，可能通过标签（可能会有js）和CSS进行控制。

## 使用 br，wbr，&shy; 进行控制

## 参考

1. [wbr：换行机会元素 - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/wbr)




      function getKebabCase(str) {
        if(!str.replace) return '';
        let temp = str.replace(/[A-Z]/g, function (i) {
          return "-" + i.toLowerCase();
        });
        if (temp.slice(0, 1) === "-") {
          temp = temp.slice(1); //如果首字母是大写，执行replace时会多一个_，需要去掉
        }
        return temp.split('-').filter(word => word.length > 1);
      }

      let words = [];

      // 1
      function pushWords(target = window, deep = 3) {
        if (deep === 0) return;
        if (typeof target === "object" && target !== null) {
          const keys = Object.keys(target);
          words.push(...keys);
          keys.forEach((key) => pushWords(target[key], deep - 1));
        }
      }
      pushWords();
      words = Array.from(new Set(words)).map((word) => getKebabCase(word)).flat();

      // 2
      Array.from(document.styleSheets).forEach(({rules}) => {
        Array.from(rules).forEach(({cssText}) => {
          const ws = cssText.replace(/(\'|\{|-|\}|\:)|\;/ig, ' ').replace(/(\'|\{|-|\}|\:)|\;/ig, ' ').replace(/\s+/g, ' ');
          words.push(ws.split(' '));
        })
      })
      words = Array.from(new Set(words)).map((word) => getKebabCase(word)).flat();

      // 3
      Object.keys(getComputedStyle(document.body)).forEach(key => {
        console.log(key);
        words.push(getKebabCase(key)) 
      })
      words = Array.from(new Set(words)).map((word) => getKebabCase(word)).flat().filter(i => i);

      console.log(words);
