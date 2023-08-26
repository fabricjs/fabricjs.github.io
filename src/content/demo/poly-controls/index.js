import * as fabric from 'fabric';

const canvas = new fabric.Canvas();

const points = [
  {
    x: 3,
    y: 4,
  },
  {
    x: 16,
    y: 3,
  },
  {
    x: 30,
    y: 5,
  },
  {
    x: 25,
    y: 55,
  },
  {
    x: 19,
    y: 44,
  },
  {
    x: 15,
    y: 30,
  },
  {
    x: 15,
    y: 55,
  },
  {
    x: 9,
    y: 55,
  },
  {
    x: 6,
    y: 53,
  },
  {
    x: -2,
    y: 55,
  },
  {
    x: -4,
    y: 40,
  },
  {
    x: 0,
    y: 20,
  },
];

const poly = new fabric.Polygon(points, {
  left: 100,
  top: 50,
  fill: '#D81B60',
  strokeWidth: 4,
  stroke: 'green',
  scaleX: 4,
  scaleY: 4,
  objectCaching: false,
  transparentCorners: false,
  cornerColor: 'blue',
  exactBoundingBox: true,
});
canvas.viewportTransform = [0.7, 0, 0, 0.7, -50, 50];
canvas.add(poly);

let editing = false;
poly.on('mousedblclick', () => {
  editing = !editing;
  if (editing) {
    poly.cornerStyle = 'circle';
    poly.cornerColor = 'rgba(0,0,255,0.5)';
    poly.hasBorders = false;
    poly.controls = fabric.controlsUtils.createPolyControls(points.length);
  } else {
    poly.cornerColor = 'blue';
    poly.cornerStyle = 'rect';
    poly.hasBorders = true;
    poly.controls = fabric.controlsUtils.createObjectDefaultControls();
  }
  canvas.requestRenderAll();
});
