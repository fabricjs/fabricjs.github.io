---
editUrl: false
next: false
prev: false
title: "enlivenObjectEnlivables"
---

> **enlivenObjectEnlivables**\<`R`\>(`serializedObject`, `options?`): `Promise`\<`R`\>

Defined in: [src/util/misc/objectEnlive.ts:143](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/util/misc/objectEnlive.ts#L143)

Creates corresponding fabric instances residing in an object, e.g. `clipPath`

## Type Parameters

### R

`R` = `Record`\<`string`, `null` \| [`TFiller`](/api/type-aliases/tfiller/) \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>\>

## Parameters

### serializedObject

`any`

### options?

[`Abortable`](/api/type-aliases/abortable/) = `{}`

## Returns

`Promise`\<`R`\>

the input object with enlived values
