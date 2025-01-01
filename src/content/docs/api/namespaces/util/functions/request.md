---
editUrl: false
next: false
prev: false
title: "request"
---

> **request**(`url`, `options`?): `XMLHttpRequest`

Defined in: [src/util/internals/dom\_request.ts:20](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/internals/dom_request.ts#L20)

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
