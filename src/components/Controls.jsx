import React, { Component } from 'react';

import GridSizer from './GridSizer.jsx';
import CurrentColor from './CurrentColor.jsx';
import ColorPicker from './ColorPicker.jsx';
import Winner from './Winner.jsx';
import Undo from './Undo.jsx';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <div className="current-colors">
          <GridSizer
            onSetGrid={this.props.handleSetGrid} />
          <Winner winner={this.props.winner} />
          <CurrentColor
            player={1}
            color={this.props.player1Color}
            currentPlayer={this.props.currentPlayer} />
          <CurrentColor
            player={2}
            color={this.props.player2Color}
            currentPlayer={this.props.currentPlayer} />
        </div>
        {
          ((this.props.winner === 0) ?
            <ColorPicker
              player1Color={this.props.player1Color}
              player2Color={this.props.player2Color}
              handlePickColor={this.props.handlePickColor} />
            : "")
        }
        <Undo
          undoSteps={this.props.undoSteps}
          onUndo={this.props.handleUndo} />
      </div>
    );
  }
}

export default Controls;
