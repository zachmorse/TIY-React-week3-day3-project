let initialState = {
  gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  player: "X"
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  let index = action.payload;
  newState.gameBoard = state.gameBoard.slice();
  switch (action.type) {
    case "TAKE_TURN":
      newState.gameBoard[index] = state.player;
      newState.player = state.player === "X" ? "O" : "X";

      return newState;
    default:
      return newState;
  }
};
