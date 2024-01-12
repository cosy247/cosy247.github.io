---
title: js实现File、Blob、ArrayBuffer、base64、url之间互转
lables: 前端 js
draft: 存在这一行时表示在草稿箱中
---

# File 和 Blob 的关系

File 类为 Blob 的一个子类，Blob和ArrayBuffer

![Alt text](assets/base64ToBoldToFileToUrl/image.png)

<!-- # 文件转 blob

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
``` -->


在JavaScript中，你可以使用不同的方法来实现File、Blob、ArrayBuffer、base64和url之间的互转。下面是一个简单的例子，演示了这五者之间的相互转换。

```javascript
// 1. File 转换为 Blob
function fileToBlob(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(new Blob([reader.result]));
        reader.readAsArrayBuffer(file);
    });
}

// 2. Blob 转换为 ArrayBuffer
function blobToArrayBuffer(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsArrayBuffer(blob);
    });
}

// 3. ArrayBuffer 转换为 base64
function arrayBufferToBase64(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    return btoa(String.fromCharCode.apply(null, uint8Array));
}

// 4. base64 转换为 ArrayBuffer
function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const length = binaryString.length;
    const uint8Array = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    return uint8Array.buffer;
}

// 5. Blob 转换为 Data URL
function blobToDataURL(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

// 2. File 转换为 URL
function fileToURL(file) {
    return window.URL.createObjectURL(file);
}

// 示例
const input = document.getElementById('fileInput');

input.addEventListener('change', async (event) => {
    const file = event.target.files[0];

    // File 转换为 Blob
    const blob = await fileToBlob(file);

    // Blob 转换为 ArrayBuffer
    const arrayBuffer = await blobToArrayBuffer(blob);

    // ArrayBuffer 转换为 base64
    const base64 = arrayBufferToBase64(arrayBuffer);

    // base64 转换为 ArrayBuffer
    const newArrayBuffer = base64ToArrayBuffer(base64);

    // Blob 转换为 Data URL
    const dataURL = await blobToDataURL(blob);

    console.log('File:', file);
    console.log('Blob:', blob);
    console.log('ArrayBuffer:', arrayBuffer);
    console.log('Base64:', base64);
    console.log('New ArrayBuffer:', newArrayBuffer);
    console.log('Data URL:', dataURL);
});
```

这个例子中，我们使用了FileReader对象来进行异步读取文件或Blob，并通过Promise来简化异步处理。请注意，使用这些方法时要考虑数据的大小和性能，确保在适当的场景中使用。
