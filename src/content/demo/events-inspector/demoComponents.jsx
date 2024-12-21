import React, { useCallback, memo, useState } from 'react';

export const canvasEvents = [
  'object:modified',
  'object:moving',
  'object:scaling',
  'object:rotating',
  'object:skewing',
  'object:resizing',
  'before:transform',
  'before:selection:cleared',
  'selection:cleared',
  'selection:created',
  'selection:updated',
  'mouse:up',
  'mouse:down',
  'mouse:move',
  'mouse:up:before',
  'mouse:down:before',
  'mouse:move:before',
  'mouse:dblclick',
  'mouse:wheel',
  'mouse:over',
  'mouse:out',
  'drop:before',
  'drop',
  'drag:over',
  'drag:enter',
  'drag:leave',
  'after:render',
  'path:created',
  'object:added',
  'object:removed',
  'text:selection:changed',
  'text:changed',
  'text:editing:entered',
  'text:editing:exited',
];

export const objectsEvents = [
  'modified',
  'moving',
  'scaling',
  'rotating',
  'skewing',
  'resizing',
  'mouseup',
  'mousedown',
  'mousemove',
  'mouseup:before',
  'mousedown:before',
  'mousemove:before',
  'mousedblclick',
  'mousewheel',
  'mouseover',
  'mouseout',
  'drop:before',
  'drop',
  'dragover',
  'dragenter',
  'dragleave',
  'selection:changed',
  'changed',
  'editing:entered',
  'editing:exited',
];

export const eventGroups = [{
    label: 'Events on mouse move',
    id: 'move',
    events: [
        'moving',
        'scaling',
        'rotating',
        'skewing',
        'resizing',
        'mousemove', 
        'mouse:move',
        'object:moving',
        'object:scaling',
        'object:rotating',
        'object:skewing',
        'object:resizing',
    ],
}, {
    label: 'Canvas events',
    id: 'move',
    events: canvasEvents,
}]

export const EventCheckbox = memo(({ eventName, onChange, checked }) => {

  const labelId = `chk_${eventName}`;

  const onChangeWrapped = useCallback((e) => {
    const checked = e.target.checked;
    onChange && onChange(eventName, checked);
  }, [onChange])

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChangeWrapped} id={labelId} />
      <label htmlFor={labelId}>{eventName}</label>
    </div>
  );
});

export const LogEntry = memo(({ logEntry, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='log-entry' style={{ color }}>
      <button onClick={() => setOpen(!open)}>{open ? '-' : '+'}</button>
      <strong>{logEntry.eventName}</strong>
      {open && <code>{logEntry.code}</code>}
      {open && <small>{new Date(logEntry.id).toISOString()}</small>}
    </div>
  );
});

export const EventGroupCheckbox = memo(({ groupName, label, onChange, checked }) => {
    const labelId = `grp_${groupName}`;

    const onChangeWrapped = useCallback((e) => {
      const checked = e.target.checked;
      onChange && onChange(eventName, checked);
    }, [onChange])
  
    return (
      <div>
        <input type="checkbox" checked={checked} onChange={onChangeWrapped} id={labelId} />
        <label htmlFor={labelId}>{label}</label>
      </div>
    );
});