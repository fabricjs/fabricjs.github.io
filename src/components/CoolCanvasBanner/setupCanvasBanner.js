import { Canvas, Rect, Circle, Triangle } from 'fabric';

export const setupCanvasBanner = ({ canvasEl, container }) => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === container) {
        const bbox = entry.target.getBoundingClientRect();
        const { width, height } = bbox;
        canvas.setDimensions({
          width,
          height,
        });
      }
    }
  });
  const canvas = new Canvas(canvasEl, {
    containerClass: 'canvas-banner',
  });
  canvas.wrapperEl.style.position = 'absolute';
  resizeObserver.observe(container);

  // simple shapes
  const rect = new Rect({
    width: 80,
    height: 60,
    left: 100,
    top: 100,
    fill: '#f55',
    strokeWidth: 0,
  });
  const circle = new Circle({
    radius: 30,
    left: 50,
    top: 50,
    fill: 'rgb(50, 205, 50)',
    strokeWidth: 0,
  });
  const triangle = new Triangle({
    width: 80,
    height: 80,
    left: 150,
    top: 130,
    fill: '#55f',
    strokeWidth: 0,
  });

  canvas.add(triangle, rect, circle);

  canvas.add(triangle, rect, circle);

  return {
    resizeObserver,
    fabricCanvas: canvas,
  };
};
