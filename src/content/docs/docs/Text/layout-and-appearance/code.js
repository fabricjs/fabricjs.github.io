const canvas = new fabric.Canvas(canvasEl);

const text = new fabric.FabricText('Layout\nand appearance', {
  fontFamily: 'Helvetica',
  fontSize: 34,
  lineHeight: 1.16,
  charSpacing: 0,
  textAlign: 'left',
  underline: false,
  fill: '#334155',
});

canvas.add(text);
canvas.centerObject(text);

// Try editing the values above and watch the bounding box change. Note that
// `height` is not fontSize * lineHeight * lineCount — see the page below.
console.log('width', text.width, 'height', text.height);
