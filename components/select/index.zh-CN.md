---
category: Components
subtitle: 选择器
type: Data Entry
title: Select
---

类似 Select2 的选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/components/radio/) 是更好的选择。

```html
<v-select>
  <v-option value="lucy">lucy</v-option>
</v-select>
```

## API

### Select props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| value    | 指定当前选中的条目 | string |  -  |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value, option) | -   |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |
| placeholder | 选择框默认文字 | string | - |
| size    | 选择框大小，可选 `large` `small`  | string      |      default      |
| showSearch | 在选择框中显示搜索框 | boolean | false |
| disabled | 是否禁用 | boolean | false |

### Option props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| value | 默认根据此属性值进行筛选 | string | - |

### Option Group props

| 参数     | 说明           | 类型     | 默认值          |
|----------|----------------|----------|-----------------|
| label    | 组名           | string\|React.Element | 无  |
