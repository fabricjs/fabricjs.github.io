---
editUrl: false
next: false
prev: false
title: "getFilterBackend"
---

> **getFilterBackend**(`strict?`): `FilterBackend`

Defined in: [src/filters/FilterBackend.ts:29](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/filters/FilterBackend.ts#L29)

Get the current fabricJS filter backend  or initialize one if not available yet

## Parameters

### strict?

`boolean` = `true`

pass `true` to create the backend if it wasn't created yet (default behavior),
pass `false` to get the backend ref without mutating it

## Returns

`FilterBackend`
