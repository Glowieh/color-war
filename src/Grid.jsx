import React, { Component } from 'react';

import GridCell from './GridCell.jsx';
import { Config } from './Config.jsx';

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  renderGrid() {
    let rows = new Array(Config.gridHeight);
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
      this.props.grid.slice(row*Config.gridWidth, (row+1)*Config.gridWidth).map((cell, index) =>
        <GridCell
          key={index.toString()}
          index={row*Config.gridWidth+index}
          color={Config.colors[cell]} />
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
