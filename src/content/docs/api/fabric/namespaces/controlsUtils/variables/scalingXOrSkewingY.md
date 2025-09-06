---
editUrl: false
next: false
prev: false
title: "scalingXOrSkewingY"
---

> `const` **scalingXOrSkewingY**: [`TransformActionHandler`](/api/type-aliases/transformactionhandler/)

Defined in: [src/controls/scaleSkew.ts:65](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/controls/scaleSkew.ts#L65)

Composed action handler to either scale X or skew Y
Needs to be wrapped with `wrapWithFixedAnchor` to be effective

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
