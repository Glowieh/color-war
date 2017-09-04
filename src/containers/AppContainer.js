import { connect } from 'react-redux'
import * as Actions from '../actions'
import App from '../components/App.jsx'

const mapStateToProps = (state) => {
  return {
    grid: state.grid,
    gridSize: state.gridSize,
    player1Color: state.player1Color,
    player2Color: state.player2Color,
    winner: state.winner,
    currentPlayer: state.currentPlayer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    pickColor: (color) => {
      dispatch(Actions.pickColor(color));
    },
    initGame: (grid, gridSize) => {
      dispatch(Actions.initGame(grid, gridSize));
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
