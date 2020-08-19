import React from 'react';
import PropTypes from 'prop-types';
import './horizontalPanList.css';

// Can not prevent a child onClick event from the parent's onMouseUp event
// https://github.com/facebook/react/issues/5625
export default function HorizontalPanList({
  children, panSpeedMultiplier, customClass, customLastItem,
}) {
  const panSpeedX = panSpeedMultiplier || 1.5;

  let isPointerDown = false; // to know if pointer is in downed state when pointer is moving
  let isDragging = false;
  let x = null; // we store the mousedown pos to calculate dragging
  let oldScrolX = 0; // the already scrolled x position
  let newScrolX = 0; // the new scroll x pos being calculated while mousemove is in progress

  const pointerDown = (e) => {
    // store the pointer x pos when drag-move is abt to start for use in drag-move
    x = e.touches ? e.touches[0].clientX : e.clientX;
    // get how much the elm is already scrolled along x axis
    oldScrolX = e.currentTarget.scrollLeft;
    isPointerDown = true;
    isDragging = false;
  };

  const pointerMove = (e) => {
    if (!isPointerDown) return; // if the pointer is being moved but is not in downed mode, stop
    if (!isDragging) { // if this is the first time we are in drag-phase
      isDragging = true;
    }
    /* eslint-disable-next-line max-len */
    newScrolX = oldScrolX - (((e.touches ? e.touches[0].clientX : e.clientX) - x) * panSpeedX);
    e.currentTarget.scrollTo(newScrolX, 0);
  };

  const pointerUp = () => {
    isPointerDown = !1; // set pointer-down to false
  };

  // handle the click event before it propogates to children in the capturing-phase
  // prevents anchor tags etc from firing it's click when we release mouse on the elm after dragging
  const clickCapture = (e) => {
    if (isDragging) {
      // only prevent clicks from firing on child elms if this is non-touch device
      // coz on a touch device, since it handles it by default, it prevents default clicks as well
      // https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
      if (!('ontouchstart' in window)) { /* eslint-disable-line no-undef */
        e.preventDefault();
        e.stopPropagation();
      }
      isDragging = false;
    }
  };

  return (
    <div
      className={`horizontalPanCntnr${!customClass || customClass === '' ? '' : ` ${customClass}`}`}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUpCapture={pointerUp}
      onClickCapture={clickCapture}
    >
      <ul className="horizontalPanList">
        {children.map((child) => (
          <li key={child.key}>{child}</li>
        ))}
        {customLastItem && typeof customLastItem === 'function' && (
        <li key="custom-last-item">
          {customLastItem()}
        </li>
        )}
      </ul>
    </div>
  );
}

HorizontalPanList.propTypes = {
  children: PropTypes.node.isRequired,
  panSpeedMultiplier: PropTypes.number,
  customClass: PropTypes.string,
  customLastItem: PropTypes.func,
};

HorizontalPanList.defaultProps = {
  panSpeedMultiplier: 1.5,
  customClass: '',
  customLastItem: null,
};
