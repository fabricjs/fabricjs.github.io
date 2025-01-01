---
editUrl: false
next: false
prev: false
title: "parsePath"
---

> **parsePath**(`pathString`): [`TComplexPathData`](/api/namespaces/util/type-aliases/tcomplexpathdata/)

Defined in: [src/util/path/index.ts:857](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/path/index.ts#L857)

## Parameters

### pathString

`string`

## Returns

[`TComplexPathData`](/api/namespaces/util/type-aliases/tcomplexpathdata/)

An array of SVG path commands

## Example

```ts
parsePath('M 3 4 Q 3 5 2 1 4 0 Q 9 12 2 1 4 0') === [
  ['M', 3, 4],
  ['Q', 3, 5, 2, 1, 4, 0],
  ['Q', 9, 12, 2, 1, 4, 0],
];
```
