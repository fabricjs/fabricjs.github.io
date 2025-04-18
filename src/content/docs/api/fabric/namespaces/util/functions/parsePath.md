---
editUrl: false
next: false
prev: false
title: "parsePath"
---

> **parsePath**(`pathString`): [`TComplexPathData`](/api/type-aliases/tcomplexpathdata/)

Defined in: [src/util/path/index.ts:857](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/path/index.ts#L857)

## Parameters

### pathString

`string`

## Returns

[`TComplexPathData`](/api/type-aliases/tcomplexpathdata/)

An array of SVG path commands

## Example

```ts
parsePath('M 3 4 Q 3 5 2 1 4 0 Q 9 12 2 1 4 0') === [
  ['M', 3, 4],
  ['Q', 3, 5, 2, 1, 4, 0],
  ['Q', 9, 12, 2, 1, 4, 0],
];
```
