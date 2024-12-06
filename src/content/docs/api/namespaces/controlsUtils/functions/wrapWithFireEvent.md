---
editUrl: false
next: false
prev: false
title: "wrapWithFireEvent"
---

> **wrapWithFireEvent**\<`T`, `P`\>(`eventName`, `actionHandler`, `extraEventInfo`?): [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

## Type Parameters

• **T** *extends* [`Transform`](/api/type-aliases/transform/)

• **P** *extends* `object` = `Record`\<`string`, `never`\>

## Parameters

• **eventName**: [`TModificationEvents`](/api/type-aliases/tmodificationevents/)

the event we want to fire

• **actionHandler**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

the function to wrap

• **extraEventInfo?**: `P`

extra information to pas to the event handler

## Returns

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

a function with an action handler signature

## Defined in

[src/controls/wrapWithFireEvent.ts:16](https://github.com/fabricjs/fabric.js/blob/a0b4adf41e0a1fd81824114cedd4c32bfb8cac25/src/controls/wrapWithFireEvent.ts#L16)
