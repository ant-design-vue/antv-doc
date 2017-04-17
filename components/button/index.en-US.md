---
category: Components
type: General
title: Button
---

To trigger an operation.

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## API

To get a customized button, just set `type`/`shape`/`size`/`loading`/`disabled`.

Property | Description | Type | Default
-----|-----|-----|------
type | can be set to `primary` `dashed` `danger`(added in 2.7) or omitted | string | 'default'
icon | set the icon of button, see: Icon component | string | -
shape | can be set to `circle` or omitted | string | -
size | can be set to `small` `large` or omitted | string | `default`
loading | to set the loading status of button | boolean | `false`

<style>
[id^=components-button-demo-] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
[id^=components-button-demo-] .ant-btn-group > .ant-btn {
  margin-right: 0;
}
</style>
