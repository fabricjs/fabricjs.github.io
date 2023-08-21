---
date: '2013-05-13'
title: 'Intersection'
description: 'Intersections in FabricJS'
thumbnail: 'intersection.png'
tags: ['intersection']
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
<pre data-lang="html">
  <p style="background: #ffc; display: inline-block">Note that intersection is checked against <b>bounding boxes</b>, not actual shapes</p>
  <br>
  <canvas id="c" width="500" height="500" style="border:1px solid #aaa"></canvas>
</pre>
<pre data-lang="js">
(function() {
	var canvas = this.__canvas = new fabric.Canvas('c');
	fabric.Object.prototype.transparentCorners = false;

    var rect1 = new fabric.Rect({
    	width: 200,
    	height: 100,
    	left: 0,
    	top: 50,
    	angle: 30,
    	fill: 'rgba(255,0,0,0.5)'
    });

    var rect2 = new fabric.Rect({
    	width: 100,
    	height: 100,
    	left: 350,
    	top: 250,
    	angle: -10,
    	fill: 'rgba(0,200,0,0.5)'
    });

    var rect3 = new fabric.Rect({
    	width: 50,
    	height: 100,
    	left: 275,
    	top: 350,
    	angle: 45,
    	stroke: '#eee',
    	strokeWidth: 10,
    	fill: 'rgba(0,0,200,0.5)'
    });

    var circle = new fabric.Circle({
    	radius: 50,
    	left: 275,
    	top: 75,
    	fill: '#aac'
    });

    var triangle = new fabric.Triangle({
    	width: 100,
    	height: 100,
    	left: 50,
    	top: 300,
    	fill: '#cca'
    });

    canvas.add(rect1, rect2, rect3, circle, triangle);
    canvas.on({
    	'object:moving': onChange,
    	'object:scaling': onChange,
    	'object:rotating': onChange,
    });

    function onChange(options) {
    	options.target.setCoords();
    	canvas.forEachObject(function(obj) {
    		if (obj === options.target) return;
    		obj.set('opacity', options.target.intersectsWithObject(obj) ? 0.5 : 1);
    	});
    }

})();

</pre>
</div>
