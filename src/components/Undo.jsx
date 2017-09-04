import React from 'react';

function Undo(props) {
  return (
    <div className="undo">
      <span className="undo-steps">Undoable steps: {props.undoSteps}</span>
      <button disabled={!props.undoSteps} onClick={props.onUndo}>Undo Last Move</button>
    </div>
  );
}

export default Undo;
