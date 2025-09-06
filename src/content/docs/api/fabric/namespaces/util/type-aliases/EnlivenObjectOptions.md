---
editUrl: false
next: false
prev: false
title: "EnlivenObjectOptions"
---

> **EnlivenObjectOptions** = [`Abortable`](/api/type-aliases/abortable/) & `object`

Defined in: [src/util/misc/objectEnlive.ts:64](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/util/misc/objectEnlive.ts#L64)

## Type Declaration

### reviver()?

> `optional` **reviver**: \<`T`\>(`serializedObj`, `instance`) => `void`

Method for further parsing of object elements,
called after each fabric object created.

#### Type Parameters

##### T

`T` *extends* [`BaseFabricObject`](/api/classes/basefabricobject/) \| [`FabricObject`](/api/classes/fabricobject/) \| [`BaseFilter`](/api/fabric/namespaces/filters/classes/basefilter/)\<`string`\> \| [`Shadow`](/api/classes/shadow/) \| [`TFiller`](/api/type-aliases/tfiller/)

#### Parameters

##### serializedObj

`Record`\<`string`, `any`\>

##### instance

`T`

#### Returns

`void`
