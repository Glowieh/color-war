import React from 'react';

import { Config } from './Config.jsx';

function CurrentColor(props) {
  return (
    <div className="current-color">
      <h2 className={"current-color-title" + ((props.player === props.currentPlayer) ? " current-player" : "")}>Player {props.player} color:</h2>
      <button className="color-block" disabled style={{backgroundColor: Config.colors[props.color]}}></button>
    </div>
  );
}

export default CurrentColor;
