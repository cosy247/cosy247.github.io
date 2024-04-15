---
id: 240415 9043318
date: 2024/04/15
title: css选择器优先级
tags: css
archive:
recommendations:
description: css选择器优先级
---

# css 选择器优先级

## 选择器分类与等级

css 选择器可以分为：

1. ID 选择器：#id
1. 类选择器：.class
1. 标签选择器：div p
1. 属性选择器：[id] [id="test"]
1. 通用选择器（通配符）：\*
1. 伪类选择器：:hover :empty
1. 伪元素: ::after ::before

css 选择器等级共有 3 级（等级高在前）：

1. ID 选择器
1. 类选择器，属性选择器，伪类选择器，伪元素
1. 标签选择器

> 其中通配符（\*）是没有等级的。关系选择器（+、>、~...）对权重没有影响。

## 权重计算与比较

基于选择器的等级划分，权重划分为（lv1，lv2，lv3）：

```css
div.class			/* (0, 1, 1) */
*div.class			/* (0, 1, 1) */
#id.class.class 	/* (1, 2, 0) */
.class::after		/* (0, 2, 0) */
.class:empty::after	/* (0, 3, 0) */
```

权重依次比较 lv1、lv2、lv3，当分出大小后就不在比较。相同的权重，写在后面的样式将覆盖前面的。

> 对于继承的属性，是没有权重的。并且继承就以在 dom 树中最近的继承属性值为准。

在很多地方认为等级中的权重为 100、10 和 1，然后相加得到权重。例如`div.test`的权重为 11。大部分情况可以这样认为，因为一般不会用超过 10 个的统计选择器会引发进位，可以以下的选择器证明：

```css
#test {
  /* 100 or (1, 0, 0) */
  color: red;
}
.test.test.test.test.test.test.test.test.test.test.test {
  /* 110 or (0, 11, 0) */
  color: yellow;
}
```

> 结果为 red 相同的选择器可以反复添加来提交权重

### 查看权重

在浏览器调试页面中的元素界面中，将鼠标移动到选择器上可以查看选择器的权重信息。

![alt text](assets/@CssSpecificity/image-1.png)![alt text](assets/@CssSpecificity/image.png)

### 可能混淆的选择器

当选择器中有伪类时，常常会认为触发了伪类就会以伪类的样式为准，其实这其中并没有绝对的覆盖，而是遵守权重覆盖。

在比较伪元素的权重时，可以将伪元素的权重去掉，因为作用伪元素的选择器后都是需要加上伪元素选择器的。

```css
/* (0, 2, 1) */
div.test.test {
  color: red;
}
/* (0, 2, 1) */
div.test:first-child {
  color: yellow;
}
/* (0, 2, 0) */
.test:hover {
  color: blue;
}
```

> red = yellow > blue；

## 样式覆盖

当有多个选择器作用于同一个属性时，以权重高的为准。

在需要覆盖一些通用样式时，可以通过复写选择器来提示权重

```css
/* (0, 2, 0) */
.test.test {
  color: yellow;
}
/* (0, 1, 0) */
.test {
  color: red;
}
/* (0, 1, 1) */
div.test {
  color: blue;
}
```

> yellow > blue > red

### 内联样式

位于标签中 style 属性中的样式为内联样式，优先级任何选择器。

```html
<style>
  div#test.test {
    color: red;
  }
</style>
<div id="test" class="test" style="color: blue">test</div>
```

> 结果为 blue

### !important

**⚠ 不到万不得已，不要使用`!important`，这会使样式结构混乱。**

在 css 属性后面添加`!important`可以让这个属性的优先级高于任何选择器，当有两个或多个`!important`作用同一个属性时，会以选择器等级决定。

```css
.test {
  color: red;
}
div {
  color: yellow !important;
}
div.test {
  color: blue !important;
}
```

> blue > yellow > red

在需要覆盖内联样式（或者其他样式）时，可以在属性后加上`!important`来强制覆盖:

```html
<style>
  div#test.test {
    color: red !important;
  }
</style>
<div id="test" class="test" style="color: blue">test</div>
```

> 结果为 red

如果想让内联样式不被覆盖，也可以在内联样式中添加`!important`，但是这样做十分的不好：

```html
<style>
  div#test.test {
    color: red !important;
  }
</style>
<div id="test" class="test" style="color: blue !important">test</div>
```

> 结果为 blue

## 伪类选择器

一般伪类的权重为(0, 1, 0)，但是也有一些例外，他们通常像函数以下可以追加规则。

### :where()

权重为 (0, 0, 0)。 where 伪类选择器可以接受选择器列表作为参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。相当于`或者`。

```css
/* (0, 0, 1) */
div:where(.test, #test) {
  color: red;
}
```

相当于：

```css
div.test {
  color: red;
}
div#test {
  color: red;
}
```

> 权重都为 div 标签权重： (0, 0, 1)

### :not()

### :is()

### :has()

## 参考

1. [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

1. [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
