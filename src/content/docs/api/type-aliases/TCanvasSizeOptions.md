---
editUrl: false
next: false
prev: false
title: "TCanvasSizeOptions"
---

> **TCanvasSizeOptions** = \{ `backstoreOnly?`: `true`; `cssOnly?`: `false`; \} \| \{ `backstoreOnly?`: `false`; `cssOnly?`: `true`; \}

Defined in: [src/canvas/StaticCanvas.ts:52](https://github.com/fabricjs/fabric.js/blob/e114448a1bce9b68a3e1bba337bc0c83a35c1aa5/src/canvas/StaticCanvas.ts#L52)

Having both options in TCanvasSizeOptions set to true transform the call in a calcOffset
Better try to restrict with types to avoid confusion.
