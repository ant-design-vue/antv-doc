---
category: Components
subtitle: 面包屑
type: Navigation
title: Breadcrumb
---

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## API

| 参数      | 说明                              | 类型              |  可选值 | 默认值 |
|-----------|-----------------------------------|-----------------|---------|--------|
| autoRoute | 设置为ture会自动根据vue-route的$route生成面包屑  | boolean |        |    `false`     |
| separator | 分隔符自定义                      | string |         | '/'    |
