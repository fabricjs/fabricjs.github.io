---
editUrl: false
next: false
prev: false
title: "wrapWithFixedAnchor"
---

> **wrapWithFixedAnchor**\<`T`\>(`actionHandler`): [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

Defined in: [src/controls/wrapWithFixedAnchor.ts:9](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/controls/wrapWithFixedAnchor.ts#L9)

Wrap an action handler with saving/restoring object position on the transform.
this is the code that permits to objects to keep their position while transforming.

## Type Parameters

### T

`T` *extends* [`Transform`](/api/type-aliases/transform/)

## Parameters

### actionHandler

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

the function to wrap

## Returns

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

a function with an action handler signature
