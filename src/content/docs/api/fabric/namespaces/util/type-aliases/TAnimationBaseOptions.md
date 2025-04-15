---
editUrl: false
next: false
prev: false
title: "TAnimationBaseOptions"
---

> **TAnimationBaseOptions**\<`T`\> = `object`

Defined in: [src/util/animation/types.ts:49](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/animation/types.ts#L49)

## Type Parameters

### T

`T`

## Properties

### delay

> **delay**: `number`

Defined in: [src/util/animation/types.ts:60](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/animation/types.ts#L60)

Delay to start the animation in ms

#### Default

```ts
0
```

***

### duration

> **duration**: `number`

Defined in: [src/util/animation/types.ts:54](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/animation/types.ts#L54)

Duration of the animation in ms

#### Default

```ts
500
```

***

### easing

> **easing**: [`TEasingFunction`](/api/fabric/namespaces/util/type-aliases/teasingfunction/)\<`T`\>

Defined in: [src/util/animation/types.ts:66](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/animation/types.ts#L66)

Easing function

#### Default

```ts
{defaultEasing}
```

***

### target

> **target**: `unknown`

Defined in: [src/util/animation/types.ts:71](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/animation/types.ts#L71)

The object this animation is being performed on
