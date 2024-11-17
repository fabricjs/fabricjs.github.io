---
editUrl: false
next: false
prev: false
title: "enlivenObjects"
---

> **enlivenObjects**\<`T`\>(`objects`, `options`?): `Promise`\<`T`[]\>

## Type Parameters

• **T** *extends* [`Shadow`](/api/classes/shadow/) \| [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> \| [`TFiller`](/api/type-aliases/tfiller/) \| [`BaseFabricObject`](/api/classes/basefabricobject/)\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\> \| [`BaseFilter`](/api/namespaces/filters/classes/basefilter/)\<`string`, `object`\>

## Parameters

• **objects**: `any`[]

Objects to enliven

• **options?**: [`EnlivenObjectOptions`](/api/namespaces/util/type-aliases/enlivenobjectoptions/) = `{}`

## Returns

`Promise`\<`T`[]\>

## Defined in

[src/util/misc/objectEnlive.ts:92](https://github.com/fabricjs/fabric.js/blob/c093e29e73123dafcfa091ff4d5e04e690bb796e/src/util/misc/objectEnlive.ts#L92)
