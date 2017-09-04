import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.jsx';
import Controls from './Controls.jsx';

import { Config } from './Config.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {grid: [], player1Color: 0, player2Color: 1, currentPlayer: 1, winner: 0, gridSize: {width: Config.defaultGridWidth, height: Config.defaultGridHeight}};
    this.handlePickColor = this.handlePickColor.bind(this);
    this.handleSetGrid = this.handleSetGrid.bind(this);
  }

  componentDidMount() {
    this.initGame();
  }

  initGame() {
    let grid = new Array(this.state.gridSize.width*this.state.gridSize.height);

    grid.fill(0);
    grid = grid.map(() => Math.floor(Math.random() * 6));
    grid[0] = 0;
    grid[this.state.gridSize.width*this.state.gridSize.height-1] = 1;

    this.setState({grid: grid, player1Color: grid[0], player2Color: grid[this.state.gridSize.width*this.state.gridSize.height-1], currentPlayer: 1, winner: 0});
  }

  handleSetGrid(width, height) {
    this.setState({gridSize: {width: width, height: height}}, this.initGame);
  }

  handlePickColor(e) {
    let nextPlayer, player1Color, player2Color, x, y;
    let grid = this.state.grid.slice();
    let color = parseInt(e.target.value, 10);
    let winner = 0;
    if(this.state.currentPlayer === 1) {
      x = y = 0;
      nextPlayer = 2;
      player1Color = color;
      player2Color = this.state.player2Color;
    }
    else {
      x = this.state.gridSize.width-1;
      y = this.state.gridSize.height-1;
      nextPlayer = 1;
      player1Color = this.state.player1Color;
      player2Color = color;
    }

    this.floodFill(grid, color, x, y);
    if(this.checkWin(color, grid)) {
      winner = this.state.currentPlayer;
      nextPlayer = this.state.currentPlayer;
    }
    this.setState({grid: grid, currentPlayer: nextPlayer, player1Color: player1Color, player2Color: player2Color, winner: winner});
  }

  floodFill(grid, color, x, y) {
    let originalColor = grid[this.getGridIndex(x, y)];
    grid[this.getGridIndex(x, y)] = color;

    if(x+1 < this.state.gridSize.width && grid[this.getGridIndex(x+1, y)] === originalColor) {
      this.floodFill(grid, color, x+1, y);
    }
    if(x-1 >= 0 && grid[this.getGridIndex(x-1, y)] === originalColor) {
      this.floodFill(grid, color, x-1, y);
    }
    if(y+1 < this.state.gridSize.height && grid[this.getGridIndex(x, y+1)] === originalColor) {
      this.floodFill(grid, color, x, y+1);
    }
    if(y-1 >= 0 && grid[this.getGridIndex(x, y-1)] === originalColor) {
      this.floodFill(grid, color, x, y-1);
    }
  }

  getGridIndex(x, y) {
    return this.state.gridSize.width * y + x;
  }

  checkWin(color, grid) {
    let acc = grid.reduce((sum, tile) => {
      if(tile === color) {
        return sum+1;
      }
      return sum;
    }, 0);

    if(acc*2 >= this.state.gridSize.width*this.state.gridSize.height) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Color War</h1>
        <div className="main-container">
          <Grid
            grid={this.state.grid}
            gridSize={this.state.gridSize} />
          <Controls
            player1Color={this.state.player1Color}
            player2Color={this.state.player2Color}
            currentPlayer={this.state.currentPlayer}
            winner={this.state.winner}
            handlePickColor={this.handlePickColor}
            handleSetGrid={this.handleSetGrid} />
        </div>
      </div>
    );
  }
}

export default App;
