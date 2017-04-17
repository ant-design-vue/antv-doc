---
category: Components
type: Navigation
title: Dropdown
---

A dropdown list.

## When To Use

If there are too many operations to display, you can wrap them in a `Dropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API

| Property         | Description           | Type     | Default       |
|--------------|----------------|----------|--------------|
| trigger        | the trigger mode which can execute the drop-down action  | Array<'click'\|'hover'>   | ['hover']           |
| placement | placement of pop menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |

### Dropdown Menu Item

Consult [Menu's documentation] (／components/menu/#API) to find more APIs.