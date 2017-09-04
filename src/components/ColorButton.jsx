import React from 'react';

import { Config } from '../Config.jsx';

function ColorButton(props) {
  return (
    <button
      className="color-button color-block"
      style={{backgroundColor: Config.colors[props.color]}}
      value={props.color}
      onClick={props.onPickColor}>
    </button>
  );
}

export default ColorButton;
