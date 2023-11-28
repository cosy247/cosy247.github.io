---
title: 文字像素化
tags: 杂记
draft: 存在这一行时表示在草稿箱中
description: 文字像素化
---

```

    function getTextRgbaData(text, precision) {
      if (!getTextRgbaData.ctx) {
        const canvas = document.createElement("canvas");
        canvas.style.height = precision * 1.2 + "px";
        canvas.style.width = precision * 1.2 + "px";
        canvas.style.display = "none";
        canvas.height = precision * 1.2;
        canvas.width = precision * 1.2;
        document.documentElement.appendChild(canvas);

        getTextRgbaData.ctx = canvas.getContext("2d");
        getTextRgbaData.ctx.textAlign = "center";
        getTextRgbaData.ctx.font = precision + "px Arial";
        getTextRgbaData.ctx.textBaseline = "middle";
      }

      const ctx = getTextRgbaData.ctx;
      ctx.fillText(text, precision / 2, precision / 2);

      const imageData = ctx.getImageData(0, 0, precision, precision).data;
      return imageData.reduce((rgbaData, d, index) => {
        const i = Math.floor(index / 4);
        const x = i % precision;
        const y = Math.floor(i / precision);
        if (!rgbaData[x]) {
          rgbaData[x] = [];
        }
        if (!rgbaData[x][y]) {
          rgbaData[x][y] = {};
        }
        rgbaData[x][y]["rgba"[index % 4]] = d;
        return rgbaData;
      }, []);
    }

    function runTextAnimation(ctx, itemSize, rgbaDatas, step = 0, frameNumber = 0) {
      if(!rgbaDatas[step]) step = 0;
      const rgbaData = rgbaDatas[step];
      rgbaData.forEach((rowRgba, x) => {
        rowRgba.forEach(({r, g, b ,a}, y) => {
          ctx.beginPath();
          ctx.arc((x * 2 + 1) * itemSize * 0.6, (y * 2 + 1) * itemSize * 0.6, itemSize / 2, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fill();
        })
      })
    }

    function init({ string, precision, itemSize }) {
      const rgbaDatas = [];
      for (const letter of string) {
        rgbaDatas.push(getTextRgbaData(letter, precision));
      }
      const canvas = document.querySelector("#canvas");
      canvas.style.height = "500px";
      canvas.style.width = "500px";
      canvas.width = precision * itemSize * 1.2;
      canvas.height = precision * itemSize * 1.2;
      const ctx = canvas.getContext("2d");
      runTextAnimation(ctx, itemSize, rgbaDatas);
    }

    init({ string: "", precision: 30, itemSize: 50 });
```
