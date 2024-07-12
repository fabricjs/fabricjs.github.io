const canvas = new fabric.Canvas(canvasEl);

const text = new fabric.FabricText('Fabric.JS', {
  cornerStyle: 'round',
  cornerStrokeColor: 'blue',
  cornerColor: 'lightblue',
  cornerStyle: 'circle',
  padding: 10,
  transparentCorners: false,
});
canvas.add(text);
canvas.centerObject(text);
canvas.setActiveObject(text);