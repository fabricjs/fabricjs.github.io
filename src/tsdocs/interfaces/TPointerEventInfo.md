# Interface: TPointerEventInfo\<E\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`TPointerEvent`](/apidocs/modules.md#tpointerevent) = [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

## Hierarchy

- [`TEvent`](/apidocs/interfaces/TEvent.md)\<`E`\>

  ↳ **`TPointerEventInfo`**

## Properties

### absolutePointer

• **absolutePointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use scenePoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:144](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L144)

___

### e

• **e**: `E`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:84](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L84)

___

### pointer

• **pointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use viewportPoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:138](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L138)

___

### scenePoint

• **scenePoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:145](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L145)

___

### subTargets

• `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:131](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L131)

___

### target

• `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:130](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L130)

___

### transform

• `Optional` **transform**: ``null`` \| [`Transform`](/apidocs/modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:132](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L132)

___

### viewportPoint

• **viewportPoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:146](https://github.com/fabricjs/fabric.js/blob/d47d51d01/src/EventTypeDefs.ts#L146)
