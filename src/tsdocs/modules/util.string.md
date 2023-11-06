# Namespace: string

[util](/apidocs/modules/util.md).string

## Functions

### capitalize

**capitalize**(`string`, `firstLetterOnly?`): `string`

Capitalizes a string

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string` | `string` | `undefined` | String to capitalize |
| `firstLetterOnly?` | `boolean` | `false` | If true only first letter is capitalized and other letters stay untouched, if false first letter is capitalized and other letters are converted to lowercase. |

#### Returns

`string`

Capitalized version of a string

#### Defined in

[src/util/lang_string.ts:9](https://github.com/fabricjs/fabric.js/blob/078809453/src/util/lang_string.ts#L9)

___

### escapeXml

**escapeXml**(`string`): `string`

Escapes XML in a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String to escape |

#### Returns

`string`

Escaped version of a string

#### Defined in

[src/util/lang_string.ts:19](https://github.com/fabricjs/fabric.js/blob/078809453/src/util/lang_string.ts#L19)

___

### graphemeSplit

**graphemeSplit**(`textstring`): `string`[]

Divide a string in the user perceived single units

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textstring` | `string` | String to escape |

#### Returns

`string`[]

array containing the graphemes

#### Defined in

[src/util/lang_string.ts:32](https://github.com/fabricjs/fabric.js/blob/078809453/src/util/lang_string.ts#L32)
