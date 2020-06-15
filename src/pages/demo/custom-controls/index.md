---
date: "2015-03-10"
title: "Custom controls"
description: "Using the custom controls api"
thumbnail: "custom-controls.png"
tags: ['controls','customization']
---

This demo shows how to start using the **custom controls** api. This first example show how to write a custom render method for your control and how to define a custom action to run on the control mouseup. The new api offers the ability to run custom actions on:

- mousedown
- mouseup

And to run custom code for

- Positioning
- Rendering
- Cursor styling

## Creating the control
We create a new control and we add it to the object. To create a control we use `new fabric.Control(options)` In this case we want the corner to be near the top right classic control, so we give it a position of x of 0.5 that is the extreme right of the bounding box of the object. Same for y at -0.5. We do not want it to overlap with the current top right corner, so we add an `offsetY` with a positive number that will make it render a bit more down

We want our control to render an icon rather than a fabric supported circle or square. So we have to provide our own render function to the control. The function is receiving the canvas context as first argument and so a simple drawImage will make it

For the custom action we want simply to delete the object. We build a function following the mouseUpHandler signature and we use there `canvas.remove(target)`


## Adding a clone control

Let’s add a new control to allow for quick duplication of the Object. We use again `new fabric.Control(options)` and we add it to a key named `clone`. When the objects are shrunk too much, corners with offset do not look great, so in this case let’s try to keep them outside the bounding box, on the top

For the clone functionality we will simply do
```javascript
target.clone( function(cloned){
	canvas.add(cloned)
});
```