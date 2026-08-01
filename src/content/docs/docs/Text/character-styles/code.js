const canvas = new fabric.Canvas(canvasEl);

const text = new fabric.IText('Rich text on canvas', {
  fontSize: 34,
  fill: '#334155',
});

// styles is keyed by logical line, then by grapheme index within that line.
text.styles = {
  0: {
    0: { fontWeight: 'bold' },
    1: { fontWeight: 'bold' },
    2: { fontWeight: 'bold' },
    3: { fontWeight: 'bold' },
    5: { fill: '#7c3aed', fontStyle: 'italic' },
    6: { fill: '#7c3aed', fontStyle: 'italic' },
    7: { fill: '#7c3aed', fontStyle: 'italic' },
    8: { fill: '#7c3aed', fontStyle: 'italic' },
    13: { underline: true, textBackgroundColor: '#fef08a' },
    14: { underline: true, textBackgroundColor: '#fef08a' },
    15: { underline: true, textBackgroundColor: '#fef08a' },
    16: { underline: true, textBackgroundColor: '#fef08a' },
    17: { underline: true, textBackgroundColor: '#fef08a' },
    18: { underline: true, textBackgroundColor: '#fef08a' },
  },
};

// Assigning styles in place does not re-measure, so do it explicitly.
text.initDimensions();
text.setCoords();

canvas.add(text);
canvas.centerObject(text);

// The supported way to style a range: indices are graphemes, end is exclusive.
text.setSelectionStyles({ fontSize: 44 }, 0, 4);
text.initDimensions();
text.setCoords();
canvas.requestRenderAll();
