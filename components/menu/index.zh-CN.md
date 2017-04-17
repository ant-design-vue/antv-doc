---
category: Components
cols: 1
type: Navigation
title: Menu
subtitle: 导航菜单
---

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

更多布局和导航的范例可以参考：[常用布局](https://ant.design/docs/spec/layout-cn)。

```html
<v-menu>
  <v-menu-item>菜单项</v-menu-item>
  <v-sub-menu title="子菜单">
    <v-menu-item>子菜单项</v-menu-item>
  </v-sub-menu>
</v-menu>
```

## API

### Menu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | string: `vertical` `horizontal` `inline` | `vertical` |
| defaultSelectedIndex | 初始选中的菜单项 index | string |      |
| activeIndex | 当前激活菜单的 index | string |  |
| uniqueOpened | 是否只保持一个子菜单的展开 | boolean |  `false`    |
| onOpenChange | SubMenu 展开/关闭的回调 | Function(openIndexs: string[]) | noop |
| onSelect | 被选中时调 | Function({ item, selectedIndex }) | 无   |

### Menu Item props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| index   | item 的唯一标志 |  string |  |

### Menu SubMenu props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | boolean   |  false  |
| index | 唯一标志 |  string |  |
| title    | 子菜单项值 | string\|slot:title |    |

### Menu ItemGroup props

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | string\|slot:title |    |