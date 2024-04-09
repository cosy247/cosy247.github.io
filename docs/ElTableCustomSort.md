---
id: 7
title: Element-ui，el-table组件自定义排序
tags: 杂记
description: Element-ui，el-table组件自定义排序
---

# 前言

在[el-table](https://element.eleme.cn/#/zh-CN/component/table)组件的 el-table-column 中添加 sortable 属性为 true 即可支持列数据排序。如果需要自定义排序则需要将 sortable 属性设置为 custom 属性，并在对应的 el-table 中添加@sort-change 事件用来处理排序回调。如果这样做，那么列表的默认排序效果将会失效，列表的数据变化将通过改变 el-table 指定的 data 数据来实现。

```vue
<el-table :data="tableData" @sort-change="handleSortChange">
	<el-table-column sortable='custom'>...</el-table-column>
	...
</el-table>
```

# sort-change 回调

在 sort-change 指定的函数中会传入一个对象参数：

```js
{
    column: columnData, // 行数据
    prop: sort_key, // 点击列的key
    order: "ascending" | "descending" | null // 升序，降序，默认
}
```

column 为点击列的数据，prop 为点击列的对应指定字段名，order 参数将在 ascending、descending 和 null 中循环传入以改变排序方式。

回调函数大致可如下：

```js
// 表格元素数据
const tableData = [{...}...];

// 拷贝一份用于还原默认顺序
const initTableData = structuredClone(tableData)

function handleSortChange({ prop, order }) {
    if (order == 'ascending') { // 升序
        this.dataArr.dataList.sort((a, b) => a[prop] - b[prop]);
    } else if (order == 'descending') { // 降序
        this.dataArr.dataList.sort((a, b) => b[prop] - a[prop]);
    } else { // 默认排序
		this.dataArr.dataList = structuredClone(initTableData);
    }
}
```

# 部分数据排序


