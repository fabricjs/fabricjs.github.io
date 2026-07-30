const canvas = new fabric.Canvas(canvasEl);

const text = new fabric.IText('Click once to select,\nagain to edit', {
  fontSize: 28,
  fill: '#334155',
  // appearance of the editing session
  cursorColor: '#7c3aed',
  cursorWidth: 2,
  selectionColor: 'rgba(124, 58, 237, 0.25)',
  editingBorderColor: '#7c3aed',
});

canvas.add(text);
canvas.centerObject(text);

// Object level events
text.on('editing:entered', () => console.log('editing:entered'));
text.on('changed', () => console.log('changed →', text.text));
text.on('selection:changed', () =>
  console.log('selection', text.selectionStart, text.selectionEnd),
);
text.on('editing:exited', () => console.log('editing:exited'));

// Canvas level events carry the target
canvas.on('text:changed', ({ target }) => console.log('canvas saw', target.type));
