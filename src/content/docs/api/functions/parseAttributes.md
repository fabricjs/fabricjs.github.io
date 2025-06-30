---
editUrl: false
next: false
prev: false
title: "parseAttributes"
---

> **parseAttributes**(`element`, `attributes`, `cssRules?`): `Record`\<`string`, `any`\>

Defined in: [src/parser/parseAttributes.ts:19](https://github.com/fabricjs/fabric.js/blob/977f797255d8c56b5b68360b0d45bed33697d2e8/src/parser/parseAttributes.ts#L19)

Returns an object of attributes' name/value, given element and an array of attribute names;
Parses parent "g" nodes recursively upwards.

## Parameters

### element

Element to parse

`null` | `HTMLElement`

### attributes

`string`[]

Array of attributes to parse

### cssRules?

`CSSRules`

## Returns

`Record`\<`string`, `any`\>

object containing parsed attributes' names/values
