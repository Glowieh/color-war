import React from 'react';

function Winner(props) {
  return (
    <div className="winner">
      {((props.winner !== 0) ? <h2>Player {props.winner} wins!</h2> : "")}
    </div>
  );
}

export default Winner;
