export const initGame = (grid, gridSize) => {
  return {
    type: "INIT_GAME",
    grid,
    gridSize
  };
}

export const pickColor = (color) => {
  return {
    type: "PICK_COLOR",
    color
  };
}
