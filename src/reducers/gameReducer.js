let initialState = {
  gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  player: "X"
};

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

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
        // for (let i = 0; i < winningCombinations.length; i++){
        //   if (state.gameBoard.indexOf("X"))
        // }
      }
      return newState;

    default:
      return newState;
  }
};
