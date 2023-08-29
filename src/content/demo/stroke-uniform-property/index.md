---
date: '2019-02-17'
title: 'Stroke uniform property'
description: 'Demonstration of stroke'
thumbnail: 'stroke-uniform-property.png'
tags: ['property', 'stroke']
---

import { CodeEditor } from '../../../components/CodeEditor';
import { code } from './code';

The property `strokeUniform` works better when setting `noScaleCache` to false.
Setting `noScaleCache` to false will avoid keeping a cache during scale operations, giving the ability to the render to update the stroke size each scale increase or decrease.
When scaling groups, the scale action won't be executed directly on the object, so strokeUniform will misbehave.

<CodeEditor code={code} canvasId="test1" >
    <canvas  width="600" height="500" id="test1"></canvas>
    <button id="toggle" >Toggle stroke uniform</button>
</CodeEditor>
