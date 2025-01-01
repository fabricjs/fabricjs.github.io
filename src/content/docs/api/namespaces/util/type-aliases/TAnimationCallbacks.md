---
editUrl: false
next: false
prev: false
title: "TAnimationCallbacks"
---

> **TAnimationCallbacks**\<`T`\>: `object`

Defined in: [src/util/animation/types.ts:74](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/animation/types.ts#L74)

## Type Parameters

• **T**

## Type declaration

### abort

> **abort**: [`TAbortCallback`](/api/namespaces/util/type-aliases/tabortcallback/)\<`T`\>

Function called at each frame.
If it returns true, abort

### onChange

> **onChange**: [`TOnAnimationChangeCallback`](/api/namespaces/util/type-aliases/tonanimationchangecallback/)\<`T`\>

Called at each frame of the animation

### onComplete

> **onComplete**: [`TOnAnimationChangeCallback`](/api/namespaces/util/type-aliases/tonanimationchangecallback/)\<`T`\>

Called after the last frame of the animation

### onStart

> **onStart**: `VoidFunction`

Called when the animation starts
