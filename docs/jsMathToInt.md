---
title: js数字取整
lables: js
---

去掉小数部分

```js
// parseInt
parseInt(12.321); // 12
parseInt(-12.321); // -12
// toFixed
(0).toFixed(0); // '0' 零为string
(12.321).toFixed(0); // '12' 正数为string
(-12.321).toFixed(0); // -12 负数为number
```

向上取整

```js
// ceil
Math.ceil(12.321); // 13;
Math.ceil(-12.321); // -12;
```

向下取整

```js
// floor
Math.floor(12.321); // 12;
Math.floor(-12.321); // -13;
```

四舍五入

```js
// round
Math.round(12.321); // 12;
Math.round(12.543); // 13;
Math.round(-12.321); // -12;
Math.round(-12.543); // -13;
```
