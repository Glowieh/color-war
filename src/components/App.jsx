import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.jsx';
import Controls from './Controls.jsx';

import { Config } from '../Config.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePickColor = this.handlePickColor.bind(this);
    this.handleSetGrid = this.handleSetGrid.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }

  componentDidMount() {
    this.handleSetGrid(Config.defaultGridWidth, Config.defaultGridHeight);
  }

  handleSetGrid(width, height) {
    let grid = new Array(width*height);

    grid.fill(0);
    grid = grid.map(() => Math.floor(Math.random() * 6));
    grid[0] = 0;
    grid[width*height-1] = 1;

    this.props.initGame(grid, {width, height});
  }

  handlePickColor(e) {
    let color = parseInt(e.target.value, 10);
    if(this.props.winner === 0 && color !== this.props.player1Color && color !== this.props.player2Color) {
      this.props.pickColor(color);
    }
  }

  handleUndo() {
    if(this.props.undoSteps !== 0) {
      this.props.undo();
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Color War</h1>
        <div className="main-container">
          <Grid
            grid={this.props.grid}
            gridSize={this.props.gridSize}
            handlePickColor={this.handlePickColor} />
          <Controls
            player1Color={this.props.player1Color}
            player2Color={this.props.player2Color}
            currentPlayer={this.props.currentPlayer}
            winner={this.props.winner}
            handlePickColor={this.handlePickColor}
            handleSetGrid={this.handleSetGrid}
            undoSteps={this.props.undoSteps}
            handleUndo={this.handleUndo} />
        </div>
      </div>
    );
  }
}

export default App;
