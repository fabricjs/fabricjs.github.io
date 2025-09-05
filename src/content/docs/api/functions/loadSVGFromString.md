---
editUrl: false
next: false
prev: false
title: "loadSVGFromString"
---

> **loadSVGFromString**(`string`, `reviver?`, `options?`): `Promise`\<`SVGParsingOutput`\>

Defined in: [src/parser/loadSVGFromString.ts:19](https://github.com/fabricjs/fabric.js/blob/fea1b29b7495d9634e300bd4bfa43de097745805/src/parser/loadSVGFromString.ts#L19)

Takes string corresponding to an SVG document, and parses it into a set of fabric objects

## Parameters

### string

`string`

representing the svg

### reviver?

`TSvgReviverCallback`

Extra callback for further parsing of SVG elements, called after each fabric object has been created.
Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric,
or extra custom manipulation

### options?

[`LoadImageOptions`](/api/fabric/namespaces/util/type-aliases/loadimageoptions/)

Object containing options for parsing

## Returns

`Promise`\<`SVGParsingOutput`\>
