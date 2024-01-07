export const code = `
const $ = (id) => document.getElementById(id);

const canvas = new fabric.Canvas(canvasEl);

function remove() {
  const active = canvas.getActiveObject();
  if (!active) return;
  active.setSelectionStyles({
    fontSize: undefined,
    deltaY: 0,
  });
  active.set('dirty', true);
  canvas.requestRenderAll();
}

function superScript() {
  const active = canvas.getActiveObject();
  if (!active) return;
  active.setSuperscript();
  active.set('dirty', true);
  canvas.requestRenderAll();
}

function subScript() {
  const active = canvas.getActiveObject();
  if (!active) return;
  active.setSubscript();
  active.set('dirty', true);
  canvas.requestRenderAll();
}

$('remove').onclick = remove;
$('super').onclick = superScript;
$('sub').onclick = subScript;

// create a rectangle object
const itext = new fabric.IText('This is an interactive text object', {
  left: 50,
  top: 380,
  fill: '#D81B60',
  strokeWidth: 2,
  stroke: '#880E4F',
});

const textbox = new fabric.Textbox('This is an interactive text object with wrapping', {
  left: 20,
  top: 50,
  fill: '#880E4F',
  strokeWidth: 2,
  stroke: '#D81B60',
});

canvas.add(itext, textbox);
`;
