import React, { useEffect, useCallback, useRef, memo, useState } from 'react';
import * as fabric from 'fabric';
import './index.css';

// old html demo converted to a component with MINIMAL react adapatation.
// value true if is a canvas event, false if is an object event
const canvasEvents = [
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
const objectsEvents = [
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

const EventCheckbox = memo(({ eventName, onChange, checked }) => {

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
})

const LogEntry = memo(({ logEntry, color }) => {
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

export const EventInspectorUI = () => {
  const canvasRef = useRef();
  
  const logs = useRef([]);
  const [logsUpdated, setLogsUpdated] = useState(0);
  const [eventStatusObj, setEventStatusObj] = useState(
    Object.fromEntries(
      objectsEvents.map((key) => [key, true])
    )
  );
  const [eventStatusCanvas, setEventStatusCanvas] = useState(
    Object.fromEntries(
      canvasEvents.map((key) => [key, true])
    )
  );

  useEffect(() => {
    fabric.FabricObject.ownDefaults.transparentCorners = false;
    const canvas = canvasRef.current = new fabric.Canvas('c1');
    canvas.add(
      new fabric.Rect({
        width: 50,
        height: 50,
        fill: 'red',
        top: 100,
        left: 100,
      })
    );
    canvas.add(
      new fabric.Rect({
        width: 30,
        height: 30,
        fill: 'green',
        top: 50,
        left: 50,
      })
    );
    canvas.add(
      new fabric.Circle({ radius: 20, fill: 'blue', top: 160, left: 140 })
    );
    canvas.add(
      new fabric.Textbox('Textbox edit and drag me on textbox 2', { fill: 'black', top: 70, left: 200 })
    );
    canvas.add(
      new fabric.Textbox('Textbox 2', { fill: 'black', top: 120, left: 200 })
    );
  }, [])

  const logCallback = useCallback((eventData, eventName) => {
    const id = performance.now();
    logs.current.push({ id, eventName, code: JSON.stringify(eventData, null, '\t') });
    setLogsUpdated(id);
  }, [logs]);

  const onChangeCanvas = useCallback((eventName, checked) => {
    const method = checked ? 'on' : 'off';
    const canvas = canvasRef.current;
    canvas[method](eventName, (eventData) => logCallback(eventData, eventName))
    eventStatusCanvas[eventName] = checked;
    setEventStatusCanvas({...eventStatusCanvas});
  }, [eventStatusCanvas, setEventStatusCanvas]);

  const onChangeObject = useCallback((eventName, checked) => {
    const method = checked ? 'on' : 'off';
    const canvas = canvasRef.current;
    canvas.getObjects().forEach((obj) => {
      obj[method](eventName, (eventData) => logCallback(eventData, eventName));
    });
    eventStatusObj[eventName] = checked;
    setEventStatusObj({...eventStatusObj});
  }, [eventStatusObj, setEventStatusObj]);

  return (
    <>
      <div className="demo-main">
        <div className="column-main">
          <p>To avoid event spamming, you can disable the checkboxs below.</p>
          <div>
            <label htmlFor="toggle">
              <input type="checkbox" id="toggle" checked />
              All events
            </label>

            <label htmlFor="move">
              <input type="checkbox" id="move" checked />
              Movement events
            </label>
            <label htmlFor="dragover">
              <input type="checkbox" id="dragover" checked />
              DragOver
            </label>

            <label htmlFor="canvas_events">
              <input type="checkbox" id="canvas_events" checked />
              Canvas
            </label>

            <label htmlFor="green">
              <input type="checkbox" id="green" checked />
              Green
            </label>

            <label htmlFor="red">
              <input type="checkbox" id="red" checked />
              Red
            </label>

            <label htmlFor="blue">
              <input type="checkbox" id="blue" checked />
              Blue
            </label>

            <label htmlFor="black">
              <input type="checkbox" id="black" checked />
              Black
            </label>
          </div>

          <div className="demo-body">
            <canvas id="c1" width="600" height="400"></canvas>
            <div>
              Drag me on the canvas
              <br />
              <br />
              <div
                id="drag-me"
                draggable="true"
                onDragStart={(event) =>
                  event.dataTransfer.setData('text/plain', '')
                }
              ></div>
            </div>
          </div>
          <div id="log1">{
            logs.current.map(logEntry => (
              <LogEntry key={logEntry.id} logEntry={logEntry} color="blue" />
            ))
          }</div>
          <button id="clear_log" onClick={() => setLogs([])}>clear log</button>
        </div>
        <div className="events-checkboxes">
          <div className="column-events">
            <div >
              <strong>Canvas events</strong>
            </div>
            {canvasEvents.map(eventKey => 
              <EventCheckbox key={`canvas_${eventKey}`} checked={eventStatusCanvas[eventKey]} onChange={onChangeCanvas} eventName={eventKey} />
            )}
          </div>
          <div className="column-events">
            <div>
              <strong>Objects events</strong>
            </div>
            {objectsEvents.map(eventKey => 
              <EventCheckbox key={`obj_${eventKey}`} checked={eventStatusObj[eventKey]} onChange={onChangeObject} eventName={eventKey} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
