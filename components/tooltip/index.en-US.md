---
category: Components
type: Data Display
title: Tooltip
---

A simple text popup tip.

## When To Use

- The tip shows while mouse enter, and hides while mouse leave. The Tooltip doesn't support complex text and operation.
- It can provide an explanation of `button/text/operation` that can cover the usage of the default system `title`.

## API

| Property      | Description                                     | Type       | Default |
|-----------|------------------------------------------|------------|--------|
| title     | prompt text                                 | string/vnode | -     |

### Common API

The following APIs are shared by Tooltip, Popconfirm, Popover.

| Property      | Description                                     | Type       | Default |
|-----------|------------------------------------------|------------|--------|
| placement | to set the position, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |
| onVisibleChange | callback of the visible attribute changed            | (visible) => void | none     |
| mouseEnterDelay | delay time to show when mouse enter.unit: s | number | 0 |
| mouseLeaveDelay | delay time to hide when mouse leave.unit: s | number | 0.1 |
| trigger | triggering mode: can be hover, focus, or click. | string | hover |


## Note

Please ensure that the child node of `Tooltip` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` event.
