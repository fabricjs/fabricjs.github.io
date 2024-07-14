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

[src/LayoutManager/LayoutManager.ts:50](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L50)

## Properties

### strategy

> **strategy**: [`LayoutStrategy`](/api/classes/layoutstrategy/)

#### Defined in

[src/LayoutManager/LayoutManager.ts:48](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L48)

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:338](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L338)

***

### performLayout()

> **performLayout**(`context`): `void`

#### Parameters

• **context**: [`LayoutContext`](/api/type-aliases/layoutcontext/)

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:55](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L55)

***

### subscribeTargets()

> **subscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:154](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L154)

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

[src/LayoutManager/LayoutManager.ts:351](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L351)

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

[src/LayoutManager/LayoutManager.ts:344](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L344)

***

### unsubscribeTargets()

> **unsubscribeTargets**(`context`): `void`

#### Parameters

• **context**: [`RegistrationContext`](/api/type-aliases/registrationcontext/) & `Partial`\<[`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)\>

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:148](https://github.com/fabricjs/fabric.js/blob/v6.0.0-rc4/src/LayoutManager/LayoutManager.ts#L148)
