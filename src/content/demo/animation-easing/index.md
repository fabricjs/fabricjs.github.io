---
date: "2012-07-25"
title: "Animation easing"
description: "Animating easing in FabricJS"
thumbnail: "animation-easing.png"
tags: ['animation','easing']
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
  <canvas id="c" width="500" height="500" style="border:1px solid #ccc"></canvas>
  <div style="display: inline-block; width: 140px">
    <select id="easing">
      <option>easeInQuad</option>
      <option>easeOutQuad</option>
      <option>easeInOutQuad</option>
      <option>easeInCubic</option>
      <option>easeOutCubic</option>
      <option>easeInOutCubic</option>
      <option>easeInQuart</option>
      <option>easeOutQuart</option>
      <option>easeInOutQuart</option>
      <option>easeInQuint</option>
      <option>easeOutQuint</option>
      <option>easeInOutQuint</option>
      <option>easeInSine</option>
      <option>easeOutSine</option>
      <option>easeInOutSine</option>
      <option>easeInExpo</option>
      <option>easeOutExpo</option>
      <option>easeInOutExpo</option>
      <option>easeInCirc</option>
      <option>easeOutCirc</option>
      <option>easeInOutCirc</option>
      <option>easeInElastic</option>
      <option>easeOutElastic</option>
      <option>easeInOutElastic</option>
      <option>easeInBack</option>
      <option>easeOutBack</option>
      <option>easeInOutBack</option>
      <option>easeInBounce</option>
      <option>easeOutBounce</option>
      <option>easeInOutBounce</option>
    </select>
    <button id="animate">Animate</button>
  </div>
</pre>
<pre data-lang="js">
(function() {
	var canvas = this.__canvas = new fabric.Canvas('c');

	var rect = new fabric.Rect({
		width: 50,
		height: 50,
		left: 100,
		top: 100,
		stroke: '#aaf',
		strokeWidth: 5,
		fill: '#faa',
		selectable: false
	});
	canvas.add(rect);

	var animateBtn = document.getElementById('animate');
	animateBtn.onclick = function() {
		animateBtn.disabled = true;
		rect.animate('left', rect.left === 100 ? 400 : 100, {
			duration: 1000,
			onChange: canvas.renderAll.bind(canvas),
			onComplete: function() {
				animateBtn.disabled = false;
			},
			easing: fabric.util.ease[document.getElementById('easing').value]
		});
	};
})();
</pre>
</div>
