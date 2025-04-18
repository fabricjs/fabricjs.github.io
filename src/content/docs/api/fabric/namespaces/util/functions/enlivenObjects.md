---
editUrl: false
next: false
prev: false
title: "enlivenObjects"
---

> **enlivenObjects**\<`T`\>(`objects`, `options?`): `Promise`\<`T`[]\>

Defined in: [src/util/misc/objectEnlive.ts:92](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/misc/objectEnlive.ts#L92)

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
