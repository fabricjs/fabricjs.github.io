export function code(canvasEl, fabric) {
  const canvas = new fabric.Canvas(canvasEl);
  const rect = new fabric.Rect({ width: 100, height: 100 });
  canvas.add(rect);
}
