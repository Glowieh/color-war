import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.jsx';
import Controls from './Controls.jsx';
import { Config } from './Config.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {grid: [], player1Color: 0, player2Color: 1};
  }

  componentDidMount() {
    let grid = new Array(Config.gridWidth*Config.gridHeight);
    grid.fill(0);
    grid = grid.map(() => Math.floor(Math.random() * 6));
    grid[0] = 0;
    grid[Config.gridWidth*Config.gridHeight-1] = 1;
    this.setState({grid: grid, player1Color: grid[0], player2Color: grid[Config.gridWidth*Config.gridHeight-1]});
  }

  render() {
    return (
      <div>
        <h1 className="title">Color War</h1>
        <div className="main-container">
          <Grid grid={this.state.grid} />
          <Controls
            player1Color={this.state.player1Color}
            player2Color={this.state.player2Color} />
        </div>
      </div>
    );
  }
}

export default App;
