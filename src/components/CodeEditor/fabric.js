import { Canvas as BaseCanvas } from 'fabric';
export * from 'fabric';

let canvases = [];

export const cleanup = () => {
  canvases.forEach((canvas) => canvas.dispose());
  canvases = [];
};

export class Canvas extends BaseCanvas {
  constructor(el = 'canvas', options = {}) {
    super(el, options);
    canvases.push(this);
  }
}
