---
date: "2018-03-03"
title: "Superscript and subscript"
description: "Demonstration of text superscript and subscript feature"
thumbnail: "superscript-subscript.png"
tags: ['text']
---

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="result"
  data-prefill='{
    "scripts": ["https://unpkg.com/fabric@4.0.0-beta.12/dist/fabric.js", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.js"]
  }'
>
<pre data-lang="css" data-options-autoprefixer="true">
.controls {
	display: inline-block;
}
</pre>
<pre data-lang="html">
<canvas id="c" width="500" height="500" style="border:1px solid #ccc"></canvas>
<div class="controls">
	<p>
		<button id="super" onclick="superScript()">Set superscript on selection</button>
	</p>
	<p>
		<button id="sub" onclick="subScript()">Set subscript on selection</button>
	</p>
	<p>
		<button id="sub" onclick="remove()">Remove script informations</button>
	</p>
</div>
</pre>
<pre data-lang="js">
function remove() {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSelectionStyles({
		fontSize: undefined,
		deltaY: undefined,
	});
	canvas.requestRenderAll();
}

function superScript() {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSuperscript();
	canvas.requestRenderAll();
}

function subScript() {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSubscript();
	canvas.requestRenderAll();
}

var canvas = this.__canvas = new fabric.Canvas('c');
// create a rectangle object
var itext = new fabric.IText('This is a IText object', {
	left: 100,
	top: 150,
	fill: '#D81B60',
	strokeWidth: 2,
	stroke: "#880E4F",
});

var textbox = new fabric.Textbox('This is a Textbox object', {
	left: 20,
	top: 50,
	fill: '#880E4F',
	strokeWidth: 2,
	stroke: "#D81B60",
});

canvas.add(itext, textbox);
</pre>
</div>