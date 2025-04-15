---
editUrl: false
next: false
prev: false
title: "skewHandlerY"
---

> `const` **skewHandlerY**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)

Defined in: [src/controls/skew.ts:243](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/controls/skew.ts#L243)

Wrapped Action handler for skewing on the Y axis, takes care of the
skew direction and determines the correct transform origin for the anchor point

## Param

javascript event that is doing the transform

## Param

javascript object containing a series of information around the current transform

## Param

current mouse x position, canvas normalized

## Param

current mouse y position, canvas normalized

## Returns

true if some change happened
