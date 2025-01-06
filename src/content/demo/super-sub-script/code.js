const $ = (id) => document.getElementById(id);

$('super').onclick = () => {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSuperscript(0,4);
	canvas.requestRenderAll();
}

$('sub').onclick = () => {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSubscript(0,4);
	canvas.requestRenderAll();
}

$('remove').onclick = () => {
	var active = canvas.getActiveObject();
	if (!active) return;
	active.setSelectionStyles && active.setSelectionStyles({
		fontSize: undefined,
		deltaY: undefined,
	}, 0, 4);
	canvas.requestRenderAll();
}

const canvas = new fabric.Canvas(canvasEl);

var itext = new fabric.IText('This is a IText object', {
	left: 100,
	top: 300,
	fill: '#D81B60',
	strokeWidth: 2,
	stroke: "#880E4F",
});

var textbox = new fabric.Textbox('This is a Textbox object', {
	left: 20,
	top: 50,
	fill: '#880E4F',
	strokeWidth: 2,
	stroke: "#D81B60",
});

canvas.add(itext, textbox);
