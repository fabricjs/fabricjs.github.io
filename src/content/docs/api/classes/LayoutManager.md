---
editUrl: false
next: false
prev: false
title: "LayoutManager"
---

## Constructors

### new LayoutManager()

> **new LayoutManager**(`strategy`): [`LayoutManager`](/api/classes/layoutmanager/)

#### Parameters

• **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/) = `...`

#### Returns

[`LayoutManager`](/api/classes/layoutmanager/)

#### Defined in

[src/LayoutManager/LayoutManager.ts:51](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L51)

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/)

#### Defined in

[src/LayoutManager/LayoutManager.ts:49](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L49)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:340](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L340)

***

### performLayout()

> **performLayout**(`context`): `void`

#### Parameters

• **context**: [`LayoutContext`](/api/type-aliases/layoutcontext/)

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:56](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L56)

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:156](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L156)

***

### toJSON()

> **toJSON**(): `object`

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Defined in

[src/LayoutManager/LayoutManager.ts:353](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L353)

***

### toObject()

> **toObject**(): `object`

#### Returns

`object`

##### strategy

> **strategy**: `string`

##### type

> **type**: `string` = `LAYOUT_MANAGER`

#### Defined in

[src/LayoutManager/LayoutManager.ts:346](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L346)

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:150](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutManager.ts#L150)
