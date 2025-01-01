---
editUrl: false
next: false
prev: false
title: "stylesToArray"
---

> **stylesToArray**(`styles`, `text`): [`TextStyleArray`](/api/namespaces/util/type-aliases/textstylearray/)

Defined in: [src/util/misc/textStyles.ts:48](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/misc/textStyles.ts#L48)

Returns the array form of a text object's inline styles property with styles grouped in ranges
rather than per character. This format is less verbose, and is better suited for storage
so it is used in serialization (not during runtime).

## Parameters

### styles

[`TextStyle`](/api/type-aliases/textstyle/)

per character styles for a text object

### text

`string`

the text string that the styles are applied to

## Returns

[`TextStyleArray`](/api/namespaces/util/type-aliases/textstylearray/)
