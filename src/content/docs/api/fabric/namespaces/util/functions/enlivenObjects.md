---
editUrl: false
next: false
prev: false
title: "enlivenObjects"
---

> **enlivenObjects**\<`T`\>(`objects`, `options?`): `Promise`\<`T`[]\>

Defined in: [src/util/misc/objectEnlive.ts:92](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/misc/objectEnlive.ts#L92)

## Type Parameters

### T

`T` *extends* [`Shadow`](/api/classes/shadow/) \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> \| [`TFiller`](/api/type-aliases/tfiller/) \| [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> \| [`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<`string`, `object`, `object`\>

## Parameters

### objects

`any`[]

Objects to enliven

### options?

[`EnlivenObjectOptions`](/api/fabric/namespaces/util/type-aliases/enlivenobjectoptions/) = `{}`

## Returns

`Promise`\<`T`[]\>

## TODO

type this correctly.
Creates corresponding fabric instances from their object representations
