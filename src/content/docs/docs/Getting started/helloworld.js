const { StaticCanvas, FabricText } = fabric;
const canvas = new StaticCanvas();
const helloWorld = new FabricText('Hello world!');
canvas.add(helloWorld);
canvas.centerObject(helloWorld);
window.open(canvas.toDataURL());
