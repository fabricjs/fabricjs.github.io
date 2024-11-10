---
editUrl: false
next: false
prev: false
title: "TAnimationBaseOptions"
---

> **TAnimationBaseOptions**\<`T`\>: `object`

## Type Parameters

• **T**

## Type declaration

### delay

> **delay**: `number`

Delay to start the animation in ms

#### Default

```ts
0
```

### duration

> **duration**: `number`

Duration of the animation in ms

#### Default

```ts
500
```

### easing

> **easing**: [`TEasingFunction`](/api/namespaces/util/type-aliases/teasingfunction/)\<`T`\>

Easing function

#### Default

```ts
{defaultEasing}
```

### target

> **target**: `unknown`

The object this animation is being performed on

## Defined in

[src/util/animation/types.ts:49](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/util/animation/types.ts#L49)
