---
editUrl: false
next: false
prev: false
title: "enlivenObjectEnlivables"
---

> **enlivenObjectEnlivables**\<`R`\>(`serializedObject`, `options`?): `Promise`\<`R`\>

## Type Parameters

• **R** = `Record`\<`string`, `null` \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> \| [`TFiller`](/api/type-aliases/tfiller/)\>

## Parameters

• **serializedObject**: `any`

• **options?**: [`Abortable`](/api/type-aliases/abortable/) = `{}`

## Returns

`Promise`\<`R`\>

the input object with enlived values

## Defined in

[src/util/misc/objectEnlive.ts:143](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/util/misc/objectEnlive.ts#L143)
