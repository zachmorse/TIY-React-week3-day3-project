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
      if (state.gameBoard[index] === " ") {
        newState.gameBoard[index] = state.player;
        newState.player = state.player === "X" ? "O" : "X";
      }
      return newState;

    case "CHECK_WIN":
      if (state.gameBoard.indexOf(" ") < 0) {
        console.log("WIN CONDITION");
      }
      return newState;

    default:
      return newState;
  }
};
