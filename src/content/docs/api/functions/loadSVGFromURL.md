---
editUrl: false
next: false
prev: false
title: "loadSVGFromURL"
---

> **loadSVGFromURL**(`url`, `reviver?`, `options?`): `Promise`\<`SVGParsingOutput`\>

Defined in: [src/parser/loadSVGFromURL.ts:21](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/parser/loadSVGFromURL.ts#L21)

Takes url corresponding to an SVG document, and parses it into a set of fabric objects.
Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)

## Parameters

### url

`string`

where the SVG is

### reviver?

`TSvgReviverCallback`

Extra callback for further parsing of SVG elements, called after each fabric object has been created.
Takes as input the original svg element and the generated `FabricObject` as arguments. Used to inspect extra properties not parsed by fabric,
or extra custom manipulation

### options?

[`LoadImageOptions`](/api/fabric/namespaces/util/type-aliases/loadimageoptions/) = `{}`

Object containing options for parsing

## Returns

`Promise`\<`SVGParsingOutput`\>

## Member Of

fabric
