---
category: Components
type: Data Entry
title: Select
---

A Selector similar to Select2.

## When To Use

- A dropdown menu for choosing, an elegant alternative to the native select component.
- [Radio](/components/radio/) is a better solution when options amount is too little (less than 5).

```html
<v-select>
  <v-option value="lucy">lucy</v-option>
</v-select>
```

## API

### Select props

| Property     | Description           | Type     | Default       |
|----------|----------------|----------|--------------|
| value    | Current selected option. | string  |  -  |
| onSelect | Called when a option is selected, the params are option's value (or key) and option instance. | function(value, option) | -   |
| onChange | Called when select an option or input value change, or value of input is changed in combobox mode | function(value, label) | - |
| onSearch | Callback function that is fired when input changed. | function(value: string) |  |
| placeholder | Placeholder of select | string | - |
| size    | Size of Select input. `large` `small`  | string      |      default      |
| showSearch | Whether show search input in single mode.| boolean | false |
| disabled | Whether disabled select | boolean | false |


### Option props

| Property     | Description         | Type    | Default       |
|----------|----------------|----------|--------------|
| disabled    | Disable this option | boolean   |  false  |
| value | default to filter with this property | string | - |

### Option Group props

| Property     | Description           | Type     | Default          |
|----------|----------------|----------|-----------------|
| label    | Group label           | string\|React.Element | -  |
