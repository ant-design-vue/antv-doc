---
category: Components
subtitle: 标签页
type: Navigation
title: Tabs
---

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/components/radio/#components-radio-demo-radiobutton) 可作为更次级的页签来使用。

## API

### Tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| value     | 当前激活 tab 面板的 index，双向绑定                      | string   | 无            |
| onTabClick       | tab 被点击的回调                             | Function | 无            |
| tabBarExtraContent | tab bar 上额外的元素                       | VNode | 无          |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型   | string   | 'line'      |
| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `type="line"` 时生效。  | string   | 'default'      |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (targetKey, action): void | 无 |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean   | false    |

### Tabs TabPane

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| index  | TabPane的Index   | string                  | 无     |
| tab  | 选项卡头显示文字 | string\|VNode | 无     |
