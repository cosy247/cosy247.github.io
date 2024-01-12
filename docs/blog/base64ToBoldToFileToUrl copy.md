---
date: 2023/10/11
draft: 存在这一行时表示在草稿箱中
title: js实现File、Blob、ArrayBuffer、base64、URL之间互转
lables: 杂记
description: js实现File、Blob、ArrayBuffer、base64、URL之间互转
---

# js 实现 File、Blob、ArrayBuffer、base64、URL 之间互转

## 引言

在 Web 前端开发中，处理不同的数据类型是非常常见的任务，其中包括 File、Blob、ArrayBuffer、base64、URL 等。这些类型在前端开发中扮演着关键的角色，因此深入了解它们之间的相互转换及其应用场景是非常重要的。本博客将介绍这些数据类型，讨论它们的特性，以及如何灵活地在它们之间进行转换。

## 1. Blob

### 1.1 Blob 的基本介绍

Blob（Binary Large Object）是一种二进制大对象，是一种存储大量二进制数据的容器。在前端开发中，Blob 常用于处理文件数据。

### 1.2 Blob 转 ArrayBuffer

将 Blob 对象转换为 ArrayBuffer 是常见的操作，特别是在需要对文件进行更复杂处理时。

```javascript
function blobToArrayBuffer(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsArrayBuffer(blob);
    });
}
```

**应用场景：** 在从后端获取的文件数据时，将 Blob 转为 ArrayBuffer 进行下一步操作。

### 1.3 Blob 转 DataURL

将 Blob 对象转换为 DataURL 通常用于在前端显示图片。

```javascript
function blobToDataURL(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
```

**应用场景：** 在前端预览用户上传的图片。

### 1.4 其他类型转 Blob

有时需要将其他类型转换为 Blob，比如将字符串转为 Blob：

```javascript
function stringToBlob(text, type) {
    return new Blob([text], { type: type || 'text/plain' });
}
```

**应用场景：** 在前端生成文件并下载时，可能需要将字符串转为 Blob。

## 2. ArrayBuffer

### 2.1 ArrayBuffer 的基本介绍

ArrayBuffer 是一种用于表示通用的、固定长度的原始二进制数据的类型化数组缓冲区。它提供了一个简单的方式来处理二进制数据。

### 2.2 ArrayBuffer 转 base64

将 ArrayBuffer 转换为 base64 是处理二进制数据时非常常见的需求。

```javascript
function arrayBufferToBase64(arrayBuffer) {
    const uint8Array = new Uint8Array(arrayBuffer);
    let binaryString = '';

    for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }

    return btoa(binaryString);
}
```

**应用场景：** 在 WebSocket 通信中，将 ArrayBuffer 转换为 base64 进行传输。

### 2.3 其他类型转 ArrayBuffer

有时需要将其他类型转换为 ArrayBuffer，比如将字符串转为 ArrayBuffer：

```javascript
function stringToArrayBuffer(text) {
    const encoder = new TextEncoder();
    return encoder.encode(text).buffer;
}
```

**应用场景：** 在进行加密操作时，可能需要将字符串转为 ArrayBuffer。

## 3. File

### 3.1 File 的基本介绍

File 是继承自 Blob 的一种特殊类型，通常用于表示用户通过文件选择框选择的文件。

### 3.2 File 转 DataURL

将 File 对象转换为 DataURL，可以方便地在前端显示文件内容。

```javascript
function fileToDataURL(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
}
```

**应用场景：** 用户上传文件后，需要在前端进行预览。

### 3.3 File 转 Blob

将 File 对象转换为 Blob，常用于在上传文件时需要处理成 Blob 对象。

```javascript
function fileToBlob(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(new Blob([reader.result]));
        reader.readAsArrayBuffer(file);
    });
}
```

**应用场景：** 将用户选择的文件进行二次处理并上传。

### 3.4 其他类型转 File

有时需要将其他类型转换为 File，比如将字符串转为 File：

```javascript
function stringToFile(text, fileName, type) {
    const blob = stringToBlob(text, type);
    return new File([blob], fileName, { type });
}
```

**应用场景：** 在前端生成文件并下载时，可能需要将字符串转为 File。

## 4. DataURL

### 4.1 DataURL 的基本介绍

DataURL 是一种将小文件直接嵌入文档的方案，将文件的内容以 base64 编码的形式嵌入 URL 中。

### 4.2 DataURL 转 Blob

有时需要将 DataURL 转换为 Blob，以便后续处理。

```javascript
function dataURLToBlob(dataURL) {
    const [, base64String] = dataURL.split(',');
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);

        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: 'image/png' });
}
```

**应用场景：** 处理前端生成的 DataURL，准备上传或者进行其他处理。

## 5. URL

### 5.1 URL 的基本介绍

URL 对象提供了一组用于处理 URL 的静态方法。`createObjectURL`方法可以用于创建包含指定 Blob 或 File 的 URL。

### 5.2 使用`createObjectURL`

```javascript
const myBlob = new Blob(['Hello, World!'], { type: 'text/plain' });
const blobURL = window.URL.createObjectURL(myBlob);

// 使用 blobURL...

// 不再需要时释放
window.URL.revokeObjectURL(blobURL);
```

**应用场景：** 在

前端生成临时 URL，用于预览或其他用途。

通过这篇博客，我们深入了解了各种数据类型之间的转换方法以及它们在实际应用中的使用场景。这将帮助你更好地处理不同类型的数据，提升前端开发的效率和灵活性。希望这些知识能够对你的 Web 开发工作有所帮助。
