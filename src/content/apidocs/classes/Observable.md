# Class: Observable<EventSpec\>

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#events](http://fabricjs.com/fabric-intro-part-2#events)

**`See`**

[demo](http://fabricjs.com/events|Events)

## Type parameters

| Name |
| :------ |
| `EventSpec` |

## Table of contents

### Constructors

- [constructor](Observable.md#constructor)

### Properties

- [\_\_eventListeners](Observable.md#__eventlisteners)

### Methods

- [\_removeEventListener](Observable.md#_removeeventlistener)
- [fire](Observable.md#fire)
- [off](Observable.md#off)
- [on](Observable.md#on)
- [once](Observable.md#once)

## Constructors

### constructor

• **new Observable**<`EventSpec`\>()

#### Type parameters

| Name |
| :------ |
| `EventSpec` |

## Properties

### \_\_eventListeners

• `Private` **\_\_eventListeners**: `Record`<keyof `EventSpec`, `TEventCallback`<`any`\>[]\>

#### Defined in

[src/Observable.ts:12](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L12)

## Methods

### \_removeEventListener

▸ `Private` **_removeEventListener**<`K`\>(`eventName`, `handler?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `handler?` | `TEventCallback`<`any`\> |

#### Returns

`void`

#### Defined in

[src/Observable.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L98)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | `EventSpec`[`K`] | Options object |

#### Returns

`void`

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L159)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)
