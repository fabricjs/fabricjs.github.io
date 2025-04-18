---
editUrl: false
next: false
prev: false
title: "request"
---

> **request**(`url`, `options?`): `XMLHttpRequest`

Defined in: [src/util/internals/dom\_request.ts:20](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/util/internals/dom_request.ts#L20)

Cross-browser abstraction for sending XMLHttpRequest

:::caution[Deprecated]
this has to go away, we can use a modern browser method to do the same.
:::

## Parameters

### url

`string`

URL to send XMLHttpRequest to

### options?

`requestOptions` = `{}`

Options object

## Returns

`XMLHttpRequest`

request
