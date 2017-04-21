---
category: Components
type: Data Entry
title: Input
---

A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.

## When To Use

- A user input in a form field is needed.
- A search input is required.

## API

### Input

| Property       | Description           | Type     | Default       |
|----------------|-----------------------|----------|---------------|
| type | The type of input, `text` or `textarea` | string  | `text`    |
| value | The input content value | string |   |
| size | The size of the input box. Note: in the context of a form, the `large` size is used. Available: `large` `default` `small` | string | `default` |
| disabled | Tell if the input is disabled. | boolean | false |
| addonBefore | The label text displayed before (on the left side of) the input field. | string\|ReactNode |   |
| addonAfter | The label text displayed after (on the right side of) the input field. | string\|ReactNode  |   |
| onPressEnter | The callback function that is triggered when pressing Enter key. | function(e) |   |
| onPressIcon | The callback function that is triggered when pressing Icon. | function(e) |   |
| autosize | Height autosize feature, available when type="textarea", can be set to `true|false` or a object `{ minRows: 2, maxRows: 6 }` | boolean\|object | false |