---
category: Components
type: Navigation
title: Pagination
cols: 1
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

## When To Use

- When it will take a long time to load/render all items.
- If you want to browse the data by switching in the pages.

```html
<v-pagination :total="50" v-model="model"></v-pagination>
```

## API

Property | Description | Type | Default
-----|-----|-----|------
value | current page number,two-way binding | number | -
total | total number of data | number | 0
pageSize | number of data per page | number | -
onChange | a callback function, can be executed when the page number is changing, and it takes the resulting page number and pageSize as its arguments | Function(page, pageSize) | noop
showSizeChanger | determine whether `pageSize` can be changed | boolean | false
pageSizeOptions | specify the sizeChanger selections | string[] | ['10', '20', '30', '40']
onShowSizeChange | a callback function, can be executed when `pageSize` is changing | Function(current, size) | noop
showQuickJumper | determine whether you can jump to a page directly | boolean | false
size | specify the size of `Pagination`, can be set to `small` | string | ""
simple | whether to use simple mode | boolean | -
showTotal | to display the total number and range | Function(total, range) | -
