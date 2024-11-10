---
editUrl: false
next: false
prev: false
title: "wrapWithFixedAnchor"
---

> **wrapWithFixedAnchor**\<`T`\>(`actionHandler`): [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

Wrap an action handler with saving/restoring object position on the transform.
this is the code that permits to objects to keep their position while transforming.

## Type Parameters

• **T** *extends* [`Transform`](/api/type-aliases/transform/)

## Parameters

• **actionHandler**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

the function to wrap

## Returns

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

a function with an action handler signature

## Defined in

[src/controls/wrapWithFixedAnchor.ts:9](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/controls/wrapWithFixedAnchor.ts#L9)
