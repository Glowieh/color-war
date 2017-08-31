import React, { Component } from 'react';

import CurrentColor from './CurrentColor.jsx';
import ColorPicker from './ColorPicker.jsx';
import Undo from './Undo.jsx';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div className="current-colors">
          <CurrentColor
            player="1"
            color={this.props.player1Color} />
          <CurrentColor
            player="2"
            color={this.props.player2Color} />
        </div>
        <ColorPicker
          player1Color={this.props.player1Color}
          player2Color={this.props.player2Color} />
        <Undo />
      </div>
    );
  }
}

export default Controls;
