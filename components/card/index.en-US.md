---
category: Components
type: Data Display
title: Card
cols: 1
---

Simple rectangular container

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## API

```html
<v-card title="卡片标题">卡片内容</v-card>
```

| Property     | Description           | Type     | Default       |
|----------|----------------|----------|--------------|
| title    | Card title | string\|vnode   |  -  |
| extra    | Content to render in the top-right corner of the card | string\|vnode\|slot:extra     | - |
| bordered | Toggles rendering of the border around the card | boolean   |  true  |
| bodyStyle | Inline style to apply to the card content | object   |  -  |
