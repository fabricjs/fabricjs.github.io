---
date: '2019-02-17'
title: 'Text super and sub scripts'
description: 'Demonstration of text features'
thumbnail: 'superscript-subscript.png'
tags: ['text', 'interactive']
---

import './index.css';
import { CodeEditor } from '../../../components/CodeEditor';
import { code } from './code';

FabricJS supports superscript and subscript as part of the rich text effort.
Those scripts are handled by manipulating in the styles object 2 properties: `fontSize` and `dy`, where dy is responsible for the vertical displacement of the text.
Since it would be complicated to handle those by hands, the Text class comes with 2 properties, `superscript` and `subscript` that are 2 schemas that contain the ratio of `dy` and `fontSize` to apply to the previous style in order to obtain the script, those are used by `text.setSuperscript()` and `text.setSubscript()`.
Is also possible to use `text.setSelectionStyles({ dy: number, fontSize: number })` to do it manually if you prefer or if you need it.

<CodeEditor code={code} canvasId="test1" >
    <div className="controls">
        <p>
            <button id="super">Set superscript on selection</button>
        </p>
        <p>
            <button id="sub">Set subscript on selection</button>
        </p>
        <p>
            <button id="remove">Remove script informations</button>
        </p>
    </div>
    <canvas  width="600" height="500" id="test1"></canvas>
</CodeEditor>
