import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo';

import * as Actions from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => {
  return {
    grid: state.reducer.present.grid,
    gridSize: state.reducer.present.gridSize,
    player1Color: state.reducer.present.player1Color,
    player2Color: state.reducer.present.player2Color,
    winner: state.reducer.present.winner,
    currentPlayer: state.reducer.present.currentPlayer,
    undoSteps: state.reducer.past.length-1
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pickColor: (color) => {
      dispatch(Actions.pickColor(color));
    },
    initGame: (grid, gridSize) => {
      dispatch(Actions.initGame(grid, gridSize));
    },
    undo: () => {
      dispatch(ActionCreators.undo())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
