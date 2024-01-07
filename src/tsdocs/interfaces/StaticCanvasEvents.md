# Interface: StaticCanvasEvents

## Hierarchy

- [`CollectionEvents`](/apidocs/interfaces/CollectionEvents.md)

  ↳ **`StaticCanvasEvents`**

  ↳↳ [`CanvasEvents`](/apidocs/interfaces/CanvasEvents.md)

## Properties

### after:render

 **after:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Defined in

[src/EventTypeDefs.ts:296](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L296)

___

### before:render

 **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Defined in

[src/EventTypeDefs.ts:295](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L295)

___

### canvas:cleared

 **canvas:cleared**: `never`

#### Defined in

[src/EventTypeDefs.ts:292](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L292)

___

### object:added

 **object:added**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](/apidocs/interfaces/CollectionEvents.md).[object:added](/apidocs/interfaces/CollectionEvents.md#object:added)

#### Defined in

[src/EventTypeDefs.ts:228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L228)

___

### object:layout:after

 **object:layout:after**: [`LayoutAfterEvent`](/apidocs/modules.md#layoutafterevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  }

#### Defined in

[src/EventTypeDefs.ts:298](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L298)

___

### object:layout:before

 **object:layout:before**: [`LayoutBeforeEvent`](/apidocs/modules.md#layoutbeforeevent) & \{ `target`: [`Group`](/apidocs/classes/Group.md)  }

#### Defined in

[src/EventTypeDefs.ts:297](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L297)

___

### object:removed

 **object:removed**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `target` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Inherited from

[CollectionEvents](/apidocs/interfaces/CollectionEvents.md).[object:removed](/apidocs/interfaces/CollectionEvents.md#object:removed)

#### Defined in

[src/EventTypeDefs.ts:229](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/EventTypeDefs.ts#L229)
