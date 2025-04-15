---
editUrl: false
next: false
prev: false
title: "request"
---

> **request**(`url`, `options?`): `XMLHttpRequest`

Defined in: [src/util/internals/dom\_request.ts:20](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/util/internals/dom_request.ts#L20)

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
