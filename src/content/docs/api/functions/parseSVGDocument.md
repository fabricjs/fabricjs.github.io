---
editUrl: false
next: false
prev: false
title: "parseSVGDocument"
---

> **parseSVGDocument**(`doc`, `reviver?`, `__namedParameters?`): `Promise`\<`SVGParsingOutput`\>

Defined in: [src/parser/parseSVGDocument.ts:38](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/parser/parseSVGDocument.ts#L38)

**`Function`**

Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback

## Parameters

### doc

`Document`

SVG document to parse

### reviver?

`TSvgReviverCallback`

Extra callback for further parsing of SVG elements, called after each fabric object has been created.
Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric,
or extra custom manipulation

### \_\_namedParameters?

[`LoadImageOptions`](/api/fabric/namespaces/util/type-aliases/loadimageoptions/) = `{}`

## Returns

`Promise`\<`SVGParsingOutput`\>

SVGParsingOutput also receives `allElements` array as the last argument. This is the full list of svg nodes available in the document.
You may want to use it if you are trying to regroup the objects as they were originally grouped in the SVG. ( This was the reason why it was added )

## Static

## Member Of

fabric
