---
editUrl: false
next: false
prev: false
title: "TCanvasSizeOptions"
---

> **TCanvasSizeOptions** = \{ `backstoreOnly?`: `true`; `cssOnly?`: `false`; \} \| \{ `backstoreOnly?`: `false`; `cssOnly?`: `true`; \}

Defined in: [src/canvas/StaticCanvas.ts:52](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/canvas/StaticCanvas.ts#L52)

Having both options in TCanvasSizeOptions set to true transform the call in a calcOffset
Better try to restrict with types to avoid confusion.
