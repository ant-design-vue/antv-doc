---
category: Components
type: Data Entry
title: Radio
---

Radio.

## When To Use

- Used to select a single state in multiple options.
- The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.

## API

### Radio

| Property           | Description                                     | Type       |  optional | Default |
|----------------|------------------------------------------|------------|---------|--------|
| value | Specifies whether the radio is selected. | any | | none |
| value          | According to value for comparison, to determine whether the selected        | any     |         | none     |

### Radio Group

radio group，wrap a group of `Radio`。

| Property           | Description                             | Type              | optional | Default |
|----------------|----------------------------------|-------------------|--------|--------|
| onChange | The callback function that is triggered when the state changes. | Function(value) | none     | none     |
| value | Used for setting the currently selected value. | any            | none     | none     |
| size           | Size, only on radio style           | string            | `large` `default` `small` | `default` |
