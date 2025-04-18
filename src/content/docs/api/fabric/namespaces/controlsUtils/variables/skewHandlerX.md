---
editUrl: false
next: false
prev: false
title: "skewHandlerX"
---

> `const` **skewHandlerX**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)

Defined in: [src/controls/skew.ts:225](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/controls/skew.ts#L225)

Wrapped Action handler for skewing on the X axis, takes care of the
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
