import React, { useEffect } from 'react';
import { Canvas } from 'fabric';
import './coolCanvasBanner.css';

const useCanvasInit = () => {
  useEffect(() => {
    const fabricCanvas = new Canvas('canvasbanner', {
      containerClass: 'canvas-banner',
    });
    fabricCanvas.wrapperEl.style.position = 'absolute';
    return () => {
      return fabricCanvas.dispose();
    };
  }, []);
  return null;
};

export const CoolCanvasBanner = () => {
  useCanvasInit();

  return <canvas id="canvasbanner" />;
};
