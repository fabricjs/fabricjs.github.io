---
editUrl: false
next: false
prev: false
title: "pick"
---

> **pick**\<`T`\>(`source`, `keys`): `Partial`\<`T`\>

Defined in: [src/util/misc/pick.ts:7](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/misc/pick.ts#L7)

Populates an object with properties of another object

## Type Parameters

### T

`T` *extends* `Record`\<`string`, `any`\>

## Parameters

### source

`T`

Source object

### keys

keyof `T`[] = `[]`

## Returns

`Partial`\<`T`\>

object populated with the picked keys
