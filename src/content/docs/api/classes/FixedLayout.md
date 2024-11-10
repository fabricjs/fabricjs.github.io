---
editUrl: false
next: false
prev: false
title: "FixedLayout"
---

Layout will keep target's initial size.

## Extends

- [`LayoutStrategy`](/api/classes/layoutstrategy/)

## Constructors

### new FixedLayout()

> **new FixedLayout**(): [`FixedLayout`](/api/classes/fixedlayout/)

#### Returns

[`FixedLayout`](/api/classes/fixedlayout/)

#### Inherited from

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`constructor`](/api/classes/layoutstrategy/#constructors)

## Properties

### type

> `readonly` `static` **type**: `"fixed"` = `'fixed'`

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`type`](/api/classes/layoutstrategy/#type)

#### Defined in

[src/LayoutManager/LayoutStrategies/FixedLayout.ts:14](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/FixedLayout.ts#L14)

## Methods

### calcBoundingBox()

> **calcBoundingBox**(`objects`, `context`): `undefined` \| [`LayoutStrategyResult`](/api/type-aliases/layoutstrategyresult/)

Override this method to customize layout.

#### Parameters

• **objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

• **context**: [`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)

#### Returns

`undefined` \| [`LayoutStrategyResult`](/api/type-aliases/layoutstrategyresult/)

#### Inherited from

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`calcBoundingBox`](/api/classes/layoutstrategy/#calcboundingbox)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:68](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L68)

***

### calcLayoutResult()

> **calcLayoutResult**(`context`, `objects`): `undefined` \| [`LayoutStrategyResult`](/api/type-aliases/layoutstrategyresult/)

Used by the `LayoutManager` to perform layout
@TODO/fix: if this method is calcResult, should calc unconditionally.
the condition to not calc should be evaluated by the layoutManager.

#### Parameters

• **context**: [`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)

• **objects**: [`FabricObject`](/api/classes/fabricobject/)\<`Partial`\<[`FabricObjectProps`](/api/interfaces/fabricobjectprops/)\>, [`SerializedObjectProps`](/api/interfaces/serializedobjectprops/), [`ObjectEvents`](/api/interfaces/objectevents/)\>[]

#### Returns

`undefined` \| [`LayoutStrategyResult`](/api/type-aliases/layoutstrategyresult/)

layout result **OR** `undefined` to skip layout

#### Inherited from

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`calcLayoutResult`](/api/classes/layoutstrategy/#calclayoutresult)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:33](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L33)

***

### getInitialSize()

> **getInitialSize**(`__namedParameters`, `__namedParameters`): [`Point`](/api/classes/point/)

respect target's initial size

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/) & [`CommonLayoutContext`](/api/type-aliases/commonlayoutcontext/) & `object`

• **\_\_namedParameters**: `Pick`\<[`LayoutStrategyResult`](/api/type-aliases/layoutstrategyresult/), `"center"` \| `"size"`\>

#### Returns

[`Point`](/api/classes/point/)

#### Overrides

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`getInitialSize`](/api/classes/layoutstrategy/#getinitialsize)

#### Defined in

[src/LayoutManager/LayoutStrategies/FixedLayout.ts:19](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/FixedLayout.ts#L19)

***

### shouldLayoutClipPath()

> **shouldLayoutClipPath**(`__namedParameters`): `undefined` \| `boolean`

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`shouldLayoutClipPath`](/api/classes/layoutstrategy/#shouldlayoutclippath)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:50](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L50)

***

### shouldPerformLayout()

> **shouldPerformLayout**(`__namedParameters`): `boolean`

#### Parameters

• **\_\_namedParameters**: [`StrictLayoutContext`](/api/type-aliases/strictlayoutcontext/)

#### Returns

`boolean`

#### Inherited from

[`LayoutStrategy`](/api/classes/layoutstrategy/).[`shouldPerformLayout`](/api/classes/layoutstrategy/#shouldperformlayout)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:42](https://github.com/fabricjs/fabric.js/blob/5c1240d8b4662e45868dd33f385f941de21c8e9c/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L42)
