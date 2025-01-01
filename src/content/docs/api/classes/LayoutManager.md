---
editUrl: false
next: false
prev: false
title: "LayoutManager"
---

Defined in: [src/LayoutManager/LayoutManager.ts:45](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L45)

## Constructors

### new LayoutManager()

> **new LayoutManager**(`strategy`): [`LayoutManager`](/api/classes/layoutmanager/)

Defined in: [src/LayoutManager/LayoutManager.ts:51](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L51)

#### Parameters

##### strategy

[`LayoutStrategy`](/api/classes/layoutstrategy/) = `...`

#### Returns

[`LayoutManager`](/api/classes/layoutmanager/)

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/)

Defined in: [src/LayoutManager/LayoutManager.ts:49](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L49)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [src/LayoutManager/LayoutManager.ts:340](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L340)

#### Returns

`void`

***

### performLayout()

> **performLayout**(`context`): `void`

Defined in: [src/LayoutManager/LayoutManager.ts:56](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L56)

#### Parameters

##### context

[`LayoutContext`](/api/type-aliases/layoutcontext/)

#### Returns

`void`

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

Defined in: [src/LayoutManager/LayoutManager.ts:156](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L156)

#### Parameters

##### context

[`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `object`

Defined in: [src/LayoutManager/LayoutManager.ts:353](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L353)

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

***

### toObject()

> **toObject**(): `object`

Defined in: [src/LayoutManager/LayoutManager.ts:346](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L346)

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

Defined in: [src/LayoutManager/LayoutManager.ts:150](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/LayoutManager/LayoutManager.ts#L150)

#### Parameters

##### context

[`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`
