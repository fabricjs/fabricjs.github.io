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

[src/util/misc/objectEnlive.ts:92](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/util/misc/objectEnlive.ts#L92)
