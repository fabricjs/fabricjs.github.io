---
editUrl: false
next: false
prev: false
title: "TCanvasSizeOptions"
---

> **TCanvasSizeOptions** = \{ `backstoreOnly`: `true`; `cssOnly`: `false`; \} \| \{ `backstoreOnly`: `false`; `cssOnly`: `true`; \}

Defined in: [src/canvas/StaticCanvas.ts:52](https://github.com/fabricjs/fabric.js/blob/b4f67b1cfd353d0e2763b168e07bce6b67895452/src/canvas/StaticCanvas.ts#L52)

Having both options in TCanvasSizeOptions set to true transform the call in a calcOffset
Better try to restrict with types to avoid confusion.
