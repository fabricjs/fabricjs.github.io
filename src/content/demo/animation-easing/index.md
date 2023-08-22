---
date: '2012-07-25'
title: 'Animation easing'
description: 'Animating easing in FabricJS'
thumbnail: 'animation-easing.png'
tags: ['animation', 'easing']
---

import { util } from 'fabric';

<select id="easing">
  {Object.keys(util.ease).map(key => <option key={key}>{key}</option>)}
</select>
<button id="animate">Animate</button>
<canvas width="600" height="500" id="canvas"></canvas>
