# Class: FixedLayout

Layout will keep target's initial size.

## Hierarchy

- [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

  ↳ **`FixedLayout`**

## Constructors

### constructor

**new FixedLayout**(): [`FixedLayout`](/apidocs/classes/FixedLayout.md)

#### Returns

[`FixedLayout`](/apidocs/classes/FixedLayout.md)

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[constructor](/apidocs/classes/LayoutStrategy.md#constructor)

## Properties

### type

 `Static` `Readonly` **type**: ``"fixed"``

override by subclass for persistence (TS does not support `static abstract`)

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[type](/apidocs/classes/LayoutStrategy.md#type)

#### Defined in

[src/LayoutManager/LayoutStrategies/FixedLayout.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/FixedLayout.ts#L14)

## Methods

### calcBoundingBox

**calcBoundingBox**(`objects`, `context`): `undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

Override this method to customize layout.

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[calcBoundingBox](/apidocs/classes/LayoutStrategy.md#calcboundingbox)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L74)

___

### calcLayoutResult

**calcLayoutResult**(`context`, `objects`): `undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

Used by the `LayoutManager` to perform layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `objects` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] |

#### Returns

`undefined` \| [`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult)

layout result **OR** `undefined` to skip layout

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[calcLayoutResult](/apidocs/classes/LayoutStrategy.md#calclayoutresult)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L32)

___

### getInitialSize

**getInitialSize**(`«destructured»`, `«destructured»`): [`Point`](/apidocs/classes/Point.md)

respect target's initial size

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) & [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `type`: ``"initialization"`` ; `x?`: `number` ; `y?`: `number`  } |
| `«destructured»` | `Pick`\<[`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult), ``"center"`` \| ``"size"``\> |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Overrides

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[getInitialSize](/apidocs/classes/LayoutStrategy.md#getinitialsize)

#### Defined in

[src/LayoutManager/LayoutStrategies/FixedLayout.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/FixedLayout.ts#L19)

___

### shouldLayoutClipPath

**shouldLayoutClipPath**(`«destructured»`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldLayoutClipPath](/apidocs/classes/LayoutStrategy.md#shouldlayoutclippath)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:49](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L49)

___

### shouldPerformLayout

**shouldPerformLayout**(`context`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`boolean`

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldPerformLayout](/apidocs/classes/LayoutStrategy.md#shouldperformlayout)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:41](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L41)

___

### shouldResetTransform

**shouldResetTransform**(`context`): `boolean`

called from the `onAfterLayout` hook

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`boolean`

#### Inherited from

[LayoutStrategy](/apidocs/classes/LayoutStrategy.md).[shouldResetTransform](/apidocs/classes/LayoutStrategy.md#shouldresettransform)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L67)
