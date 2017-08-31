import React from 'react';

import { Config } from './Config.jsx';

function GridCell(props) {
  return (
    <div className="grid-cell" style={{backgroundColor: Config.colors[props.color]}}>
    </div>
  );
}

export default GridCell;
