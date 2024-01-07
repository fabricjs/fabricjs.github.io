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

 **absolutePointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use scenePoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:149](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L149)

___

### e

 **e**: `E`

#### Inherited from

[TEvent](/apidocs/interfaces/TEvent.md).[e](/apidocs/interfaces/TEvent.md#e)

#### Defined in

[src/EventTypeDefs.ts:88](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L88)

___

### pointer

 **pointer**: [`Point`](/apidocs/classes/Point.md)

**`Deprecated`**

use viewportPoint instead.
Kept for compatibility

#### Defined in

[src/EventTypeDefs.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L143)

___

### scenePoint

 **scenePoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:150](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L150)

___

### subTargets

 `Optional` **subTargets**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[]

#### Defined in

[src/EventTypeDefs.ts:136](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L136)

___

### target

 `Optional` **target**: [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

#### Defined in

[src/EventTypeDefs.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L135)

___

### transform

 `Optional` **transform**: ``null`` \| [`Transform`](/apidocs/modules.md#transform)

#### Defined in

[src/EventTypeDefs.ts:137](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L137)

___

### viewportPoint

 **viewportPoint**: [`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/EventTypeDefs.ts:151](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L151)
