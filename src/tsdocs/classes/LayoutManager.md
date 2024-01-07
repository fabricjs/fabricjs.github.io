# Class: LayoutManager

## Constructors

### constructor

**new LayoutManager**(`strategy?`): [`LayoutManager`](/apidocs/classes/LayoutManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `strategy` | [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) |

#### Returns

[`LayoutManager`](/apidocs/classes/LayoutManager.md)

#### Defined in

[src/LayoutManager/LayoutManager.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L35)

## Properties

### \_prevLayoutStrategy

 `Private` `Optional` **\_prevLayoutStrategy**: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

#### Defined in

[src/LayoutManager/LayoutManager.ts:30](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L30)

___

### \_subscriptions

 `Private` **\_subscriptions**: `Map`\<[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>, `VoidFunction`[]\>

#### Defined in

[src/LayoutManager/LayoutManager.ts:31](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L31)

___

### strategy

 **strategy**: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md)

#### Defined in

[src/LayoutManager/LayoutManager.ts:33](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L33)

## Methods

### commitLayout

**commitLayout**(`context`, `layoutResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `layoutResult` | `Required`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\> |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:193](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L193)

___

### dispose

**dispose**(): `void`

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:296](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L296)

___

### getLayoutResult

**getLayoutResult**(`context`): `undefined` \| `Required`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`undefined` \| `Required`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\>

#### Defined in

[src/LayoutManager/LayoutManager.ts:149](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L149)

___

### layoutObject

**layoutObject**(`context`, `«destructured»`, `object`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `«destructured»` | `Required`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\> |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:242](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L242)

___

### layoutObjects

**layoutObjects**(`context`, `layoutResult`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `layoutResult` | `Required`\<[`LayoutResult`](/apidocs/modules.md#layoutresult)\> |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:223](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L223)

___

### onAfterLayout

**onAfterLayout**(`context`, `layoutResult?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |
| `layoutResult?` | [`LayoutResult`](/apidocs/modules.md#layoutresult) |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:253](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L253)

___

### onBeforeLayout

**onBeforeLayout**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:112](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L112)

___

### performLayout

**performLayout**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`LayoutContext`](/apidocs/modules.md#layoutcontext) |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L40)

___

### subscribe

**subscribe**(`object`, `context`): `void`

subscribe to object layout triggers

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `context` | [`StrictLayoutContext`](/apidocs/modules.md#strictlayoutcontext) |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:63](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L63)

___

### toJSON

**toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `type` | `string` |

#### Defined in

[src/LayoutManager/LayoutManager.ts:308](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L308)

___

### toObject

**toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `strategy` | `string` |
| `type` | `string` |

#### Defined in

[src/LayoutManager/LayoutManager.ts:301](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L301)

___

### unsubscribe

**unsubscribe**(`object`, `context?`): `void`

unsubscribe object layout triggers

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `context?` | [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `type`: ``"initialization"`` ; `x?`: `number` ; `y?`: `number`  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } \| [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `targets`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] ; `type`: ``"added"`` \| ``"removed"``  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } \| [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `e`: [`ModifiedEvent`](/apidocs/interfaces/ModifiedEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> ; `trigger`: ``"modified"`` ; `type`: ``"object_modified"``  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } \| [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `type`: ``"object_modifying"``  } & \{ `e`: [`BasicTransformEvent`](/apidocs/interfaces/BasicTransformEvent.md)\<[`TPointerEvent`](/apidocs/modules.md#tpointerevent)\> & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `trigger`: [`TModificationEvents`](/apidocs/modules.md#tmodificationevents)  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } \| [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & \{ `type`: ``"object_modifying"``  } & \{ `e`: \{ `action`: `string` ; `index`: `number`  } & \{ `target`: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>  } ; `trigger`: ``"changed"``  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } \| [`CommonLayoutContext`](/apidocs/modules.md#commonlayoutcontext) & `ImperativeLayoutCommonOptions` & \{ `type`: ``"imperative"``  } & \{ `bubbles`: `boolean` ; `prevStrategy?`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `strategy`: [`LayoutStrategy`](/apidocs/classes/LayoutStrategy.md) ; `stopPropagation`: () => `void`  } |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:103](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L103)

___

### unsubscribeTarget

**unsubscribeTarget**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Group`](/apidocs/classes/Group.md) |

#### Returns

`void`

#### Defined in

[src/LayoutManager/LayoutManager.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/LayoutManager/LayoutManager.ts#L108)
