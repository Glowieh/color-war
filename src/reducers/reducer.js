import { Config } from '../Config.jsx';

const initialState = {
  grid: [],
  gridSize: {width: Config.defaultGridWidth, height: Config.defaultGridHeight},
  winner: 0,
  currentPlayer: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_GAME': {
      return Object.assign({}, state, {
        grid: action.grid,
        gridSize: action.gridSize,
        player1Color: action.grid[0],
        player2Color: action.grid[action.gridSize.width*action.gridSize.height-1]
      })
    }
    case 'PICK_COLOR': {
      let nextPlayer, player1Color, player2Color, x, y;
      let winner = 0;
      let grid = state.grid.slice();

      if(state.currentPlayer === 1) {
        x = y = 0;
        nextPlayer = 2;
        player1Color = action.color;
        player2Color = state.player2Color;
      }
      else {
        x = state.gridSize.width-1;
        y = state.gridSize.height-1;
        nextPlayer = 1;
        player1Color = state.player1Color;
        player2Color = action.color;
      }

      floodFill(grid, state.gridSize, action.color, x, y);
      if(checkWin(action.color, grid, state.gridSize)) {
        winner = state.currentPlayer;
        nextPlayer = state.currentPlayer;
      }

      return Object.assign({}, state, {
        currentPlayer: nextPlayer,
        grid,
        player1Color,
        player2Color,
        winner
      })
    }
    default: {
      return state
    }
  }
}

const checkWin = (color, grid, gridSize) => {
  let acc = grid.reduce((sum, tile) => {
    if(tile === color) {
      return sum+1;
    }
    return sum;
  }, 0);

  if(acc*2 >= gridSize.width*gridSize.height) {
    return true;
  }
  else {
    return false;
  }
}

const floodFill = (grid, gridSize, color, x, y) => {
  let originalColor = grid[getGridIndex(x, y, gridSize)];
  grid[getGridIndex(x, y, gridSize)] = color;

  if(x+1 < gridSize.width && grid[getGridIndex(x+1, y, gridSize)] === originalColor) {
    floodFill(grid, gridSize, color, x+1, y);
  }
  if(x-1 >= 0 && grid[getGridIndex(x-1, y, gridSize)] === originalColor) {
    floodFill(grid, gridSize, color, x-1, y);
  }
  if(y+1 < gridSize.height && grid[getGridIndex(x, y+1, gridSize)] === originalColor) {
    floodFill(grid, gridSize, color, x, y+1);
  }
  if(y-1 >= 0 && grid[getGridIndex(x, y-1, gridSize)] === originalColor) {
    floodFill(grid, gridSize, color, x, y-1);
  }
}

const getGridIndex = (x, y, gridSize) => {
  return gridSize.width * y + x;
}

export default reducer;
