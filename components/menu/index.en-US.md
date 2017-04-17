---
category: Components
cols: 1
type: Navigation
title: Menu
---

Menu list of Navigation.

## When To Use

Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website.

More layout and samples: [layout](https://ant.design/docs/spec/layout-cn).

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

| Param    | Description   | Type     | Default value       |
|----------|---------------|----------|--------------|
| mode | type of the menu; vertical, horizontal, and inline modes are supported | string: vertical horizontal inline | vertical |
| defaultSelectedIndex | the index of default selected menu item | string |      |
| activeIndex | the index of currently active sub menus | string |  |
| uniqueOpened | whether only one sub-menu can be active | boolean |  `false`   |
| onOpenChange | called when open/close sub menu | Function(openIndexs: string[]) | noop |
| onSelect | callback of the selected item | Function({ item, selectedIndex }) | none   |

### Menu Item props

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| disabled    | disabled or not | boolean   |  false  |
| index   | unique id of the menu item |  string |  |

### Menu SubMenu props

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| disabled    | disabled or not | boolean   |  false  |
| index   | unique id of the menu item |  string |  |
| title    | title of the sub menu | string\|slot:title   |    |

### Menu ItemGroup props

| Param    | Description    | Type     | Default value       |
|----------|----------------|----------|--------------|
| title    | title of the group       | string\|slot:title |    |