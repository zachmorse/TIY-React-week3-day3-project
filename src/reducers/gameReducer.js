let initialState = {
  gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  player: "X"
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  // newState.gameBoard = state.gameBoard.slice();
  switch (action.type) {
    case "TAKE_TURN":
      return newState;
    default:
      return newState;
  }
};
