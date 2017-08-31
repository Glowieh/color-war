import React, { Component } from 'react';

import ColorButton from './ColorButton.jsx';

class ColorPicker extends Component {

  render() {
    let availableColors = [0, 1, 2, 3, 4, 5];

    return (
      <div className="color-picker">
        <h2>Pick a Color:</h2>
        {
          availableColors.map((color) => {
            if(color === this.props.player1Color || color === this.props.player2Color) {
              return null;
            }
            return <ColorButton color={color} />;
          })
        }
      </div>
    );
  }
}

export default ColorPicker;
