---
editUrl: false
next: false
prev: false
title: "enlivenObjectEnlivables"
---

> **enlivenObjectEnlivables**\<`R`\>(`serializedObject`, `options`?): `Promise`\<`R`\>

Defined in: [src/util/misc/objectEnlive.ts:143](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/objectEnlive.ts#L143)

Creates corresponding fabric instances residing in an object, e.g. `clipPath`

## Type Parameters

• **R** = `Record`\<`string`, `null` \| [`FabricObject`](/api/classes/fabricobject/) \| [`TFiller`](/api/type-aliases/tfiller/)\>

## Parameters

### serializedObject

`any`

### options?

[`Abortable`](/api/type-aliases/abortable/) = `{}`

## Returns

`Promise`\<`R`\>

the input object with enlived values
