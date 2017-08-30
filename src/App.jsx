import React, { Component } from 'react';
import './App.css';

import Grid from './Grid.jsx';
import Controls from './Controls.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {grid: []};
  }

  componentDidMount() {
    let grid = new Array(40*40);
    grid.fill(0);
    this.setState({grid: grid.map(() => Math.floor(Math.random() * 6))});
  }

  render() {
    return (
      <div>
        <h1 className="title">Color War</h1>
        <div className="main-container">
          <Grid grid={this.state.grid} />
          <Controls />
        </div>
      </div>
    );
  }
}

export default App;
