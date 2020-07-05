---
date: "2015-05-04"
title: "Manage selection"
description: "How to work with selections in FabricJS"
thumbnail: "manage-selection.png"
tags: ['selection','management']
---

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="result"
  data-prefill='{
    "scripts": ["https://unpkg.com/fabric@4.0.0-beta.12/dist/fabric.js"]
  }'
>
<pre data-lang="css" data-options-autoprefixer="true">
#drawing-mode {
  margin-bottom: 10px;
  vertical-align: top;
}
#drawing-mode-options {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  margin-top: 10px;
  background: #f5f2f0;
  padding: 10px;
}
label {
  display: inline-block; width: 130px;
}
.info {
  display: inline-block;
  width: 25px;
  background: #ffc;
}
#bd-wrapper {
  min-width: 1500px;
}
</pre>
<pre data-lang="html">
  <canvas id="c" width="450" height="450" style="border:1px solid #aaa"></canvas>
  <div style="display: inline-block; margin-left: 10px">
    <button id="group" class="btn btn-info">Group selected objecs</button><br>
    <button id="ungroup" class="btn btn-info">Ungroup selected objects</button><br>
    <button id="multiselect" class="btn btn-info">Make a multiselection</button><br>
    <button id="addmore" class="btn btn-info">Add more shapes</button><br>
    <button id="discard" class="btn btn-info">Discard selection</button><br>
  </div>
</pre>
<pre data-lang="js">
(function() {

	function add() {
		var red = new fabric.Rect({
			top: 100,
			left: 0,
			width: 80,
			height: 50,
			fill: 'red'
		});
		var blue = new fabric.Rect({
			top: 0,
			left: 100,
			width: 50,
			height: 70,
			fill: 'blue'
		});
		var green = new fabric.Rect({
			top: 100,
			left: 100,
			width: 60,
			height: 60,
			fill: 'green'
		});
		canvas.add(red, blue, green);
	}

	var $ = function(id) {
		return document.getElementById(id)
	};

	var canvas = this.__canvas = new fabric.Canvas('c');
	var red = new fabric.Rect({
		top: 100,
		left: 0,
		width: 80,
		height: 50,
		fill: 'red'
	});
	var blue = new fabric.Rect({
		top: 0,
		left: 100,
		width: 50,
		height: 70,
		fill: 'blue'
	});
	var green = new fabric.Rect({
		top: 100,
		left: 100,
		width: 60,
		height: 60,
		fill: 'green'
	});
	fabric.Object.prototype.transparentCorners = false;
	canvas.add(red, blue, green)
	var group = $('group'),
		ungroup = $('ungroup'),
		multiselect = $('multiselect'),
		addmore = $('addmore'),
		discard = $('discard');

	addmore.onclick = add;

	multiselect.onclick = function() {
		canvas.discardActiveObject();
		var sel = new fabric.ActiveSelection(canvas.getObjects(), {
			canvas: canvas,
		});
		canvas.setActiveObject(sel);
		canvas.requestRenderAll();
	}

	group.onclick = function() {
		if (!canvas.getActiveObject()) {
			return;
		}
		if (canvas.getActiveObject().type !== 'activeSelection') {
			return;
		}
		canvas.getActiveObject().toGroup();
		canvas.requestRenderAll();
	}

	ungroup.onclick = function() {
		if (!canvas.getActiveObject()) {
			return;
		}
		if (canvas.getActiveObject().type !== 'group') {
			return;
		}
		canvas.getActiveObject().toActiveSelection();
		canvas.requestRenderAll();
	}

	discard.onclick = function() {
		canvas.discardActiveObject();
		canvas.requestRenderAll();
	}
})();
</pre>
</div>