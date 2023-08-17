---
date: '2017-10-24'
title: 'Loading custom font'
description: 'Loading custom fonts in FabricJS'
thumbnail: 'load-custom-fonts.png'
tags: ['fonts', 'typography', 'custom']
---

When working with custom fonts on a fabric canvas, it is recommended to
use the [CSS Font preloader api](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API).
Not doing so will make your app do FOUT(s) (Flash of Unstyled Text).
This happens because font loading involve network and is async by nature, and so when you will be adding a text object with a custom font, or switching font, the canvas will try to render before the font has been actually loaded and so the browser will fallback on the specified fallback font or the default one.

If for some reason your target browsers do not support that api yet you can pick from a selection of font preloading libraries like [Font Face Observer](https://github.com/bramstein/fontfaceobserver)

In this example ....

import { CodeEditor } from '../../../components/CodeEditor';
import { code } from './code';

<CodeEditor code={code} canvasId="c" >
    <canvas  width="600" height="500" id="c"></canvas>
    <select>
      {["Pacifico", "VT323", "Quicksand", "Inconsolata"].map(font => <option value={font}>{font}</option>)}
    </select>
</CodeEditor>
