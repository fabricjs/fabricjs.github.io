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

[src/EventTypeDefs.ts:291](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L291)

___

### before:render

 **before:render**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Defined in

[src/EventTypeDefs.ts:290](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L290)

___

### canvas:cleared

 **canvas:cleared**: `never`

#### Defined in

[src/EventTypeDefs.ts:287](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L287)

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

[src/EventTypeDefs.ts:223](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L223)

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

[src/EventTypeDefs.ts:224](https://github.com/fabricjs/fabric.js/blob/078809453/src/EventTypeDefs.ts#L224)
