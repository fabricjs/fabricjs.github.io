# Class: LayoutStrategy

Exposes a main public method [calcLayoutResult](/apidocs/classes/LayoutStrategy.md#calclayoutresult) that is used by the `LayoutManager` to perform layout.
Returning `undefined` signals the `LayoutManager` to skip the layout.

In charge of calculating the bounding box of the passed objects.

## Hierarchy

- **`LayoutStrategy`**

  ↳ [`ClipPathLayout`](/apidocs/classes/ClipPathLayout.md)

  ↳ [`FitContentLayout`](/apidocs/classes/FitContentLayout.md)

  ↳ [`FixedLayout`](/apidocs/classes/FixedLayout.md)

## Constructors

### constructor

**new LayoutStrategy**(): [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

#### Returns

[`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

## Properties

### type

 `Static` **type**: `string` = `'strategy'`

override by subclass for persistence (TS does not support `static abstract`)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:26](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L26)

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

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:32](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L32)

___

### getInitialSize

**getInitialSize**(`context`, `result`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) & [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `type`: ``"initialization"`` ; `x?`: `number` ; `y?`: `number`  } |
| `result` | `Pick`\<[`LayoutStrategyResult`](/apidocs/modules.md#layoutstrategyresult), ``"center"`` \| ``"size"``\> |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L57)

___

### shouldLayoutClipPath

**shouldLayoutClipPath**(`«destructured»`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`undefined` \| `boolean`

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

#### Defined in

[src/LayoutManager/LayoutStrategies/LayoutStrategy.ts:67](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutStrategies/LayoutStrategy.ts#L67)
