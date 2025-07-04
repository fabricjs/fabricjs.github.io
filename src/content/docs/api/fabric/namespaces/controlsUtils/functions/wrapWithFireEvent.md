---
editUrl: false
next: false
prev: false
title: "wrapWithFireEvent"
---

> **wrapWithFireEvent**\<`T`, `P`\>(`eventName`, `actionHandler`, `extraEventInfo?`): [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

Defined in: [src/controls/wrapWithFireEvent.ts:16](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/controls/wrapWithFireEvent.ts#L16)

Wrap an action handler with firing an event if the action is performed

## Type Parameters

### T

`T` *extends* [`Transform`](/api/type-aliases/transform/)

### P

`P` *extends* `object` = `Record`\<`string`, `never`\>

## Parameters

### eventName

[`TModificationEvents`](/api/type-aliases/tmodificationevents/)

the event we want to fire

### actionHandler

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

the function to wrap

### extraEventInfo?

`P`

extra information to pas to the event handler

## Returns

[`TransformActionHandler`](/api/type-aliases/transformactionhandler/)\<`T`\>

a function with an action handler signature
