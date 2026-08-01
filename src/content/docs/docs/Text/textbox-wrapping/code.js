const canvas = new fabric.Canvas(canvasEl);

const box = new fabric.Textbox(
  'Drag the side handles to change the wrapping width. The corner handles scale instead.',
  {
    width: 260,
    fontSize: 20,
    fill: '#334155',
    textAlign: 'left',
    // set to true to break anywhere instead of at spaces (useful for CJK)
    splitByGrapheme: false,
    cornerColor: '#ffffff',
    cornerStrokeColor: '#334155',
    borderColor: '#334155',
    transparentCorners: false,
  },
);

canvas.add(box);
canvas.centerObject(box);
canvas.setActiveObject(box);

// height is derived from the wrapped result on every layout pass
console.log('lines:', box.textLines.length, 'height:', box.height);
