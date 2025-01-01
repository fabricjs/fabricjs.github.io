---
editUrl: false
next: false
prev: false
title: "hasStyleChanged"
---

> **hasStyleChanged**(`prevStyle`, `thisStyle`, `forTextSpans`): `boolean`

Defined in: [src/util/misc/textStyles.ts:21](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/textStyles.ts#L21)

## Parameters

### prevStyle

`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>

first style to compare

### thisStyle

`Partial`\<[`CompleteTextStyleDeclaration`](/api/type-aliases/completetextstyledeclaration/)\>

second style to compare

### forTextSpans

`boolean` = `false`

whether to check overline, underline, and line-through properties

## Returns

`boolean`

true if the style changed
