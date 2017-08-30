import React, { Component } from 'react';

import GridCell from './GridCell.jsx';
import { colors } from './colors.jsx';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  renderGrid() {
    let rows = new Array(40);
    rows.fill(0);
    return (
      rows.map((elem, row) =>
        <div className="grid-row" key={row}>
          {this.renderGridRow(row)}
        </div>
      )
    );
  }

  renderGridRow(row) {
    return (
      this.props.grid.slice(row*40, row*40+40).map((cell, index) =>
        <GridCell
          key={index.toString()}
          index={row*40+index}
          color={colors[cell]} />
      )
    );
  }

  render() {
    return (
      <div className="grid">
        {this.renderGrid()}
      </div>
    );
  }
}

export default Grid;
