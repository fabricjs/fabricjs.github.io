---
date: "2013-03-15"
title: "Clipping and masking"
description: "Clipping and masking in FabricJS"
thumbnail: "clipping.png"
tags: ['clipping','masking']
---

<div
  class="codepen-later"
  data-editable="true"
  data-height="500"
  data-default-tab="result"
  data-prefill='{
    "scripts": ["https://unpkg.com/fabric@4.0.0-rc.1/dist/fabric.js"]
  }'
>
<pre data-lang="html">
<canvas id="c" width="500" height="500" style="border:1px solid #aaa"></canvas>
</pre>
<pre data-lang="js">
(function() {
  var demoImg = 'http://fabricjs.com/assets/pug.jpg';

	var canvas = this.__canvas = new fabric.Canvas('c');
	fabric.Object.prototype.transparentCorners = false;
	var radius = 300;

	fabric.Image.fromURL(demoImg, function(img) {
		img.scale(0.5).set({
			left: 100,
			top: 100,
			angle: -15,
			clipPath: new fabric.Circle({
				radius: radius,
				originX: 'center',
				originY: 'center',
			}),
		});

		(function animate() {
			fabric.util.animate({
				startValue: Math.round(radius) === 50 ? 50 : 300,
				endValue: Math.round(radius) === 50 ? 300 : 50,
				duration: 1000,
				onChange: function(value) {
					radius = value;
					img.clipPath.set('radius', value);
					img.set('dirty', true);
					canvas.renderAll();
				},
				onComplete: animate
			});
		})();

		canvas.add(img).setActiveObject(img);
	});
})();
</pre>
</div>
