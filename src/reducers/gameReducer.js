let initialState = {
  gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  player: "X",
  winStatus: false
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

    case "CHECK_CAT":
      if (state.gameBoard.indexOf(" ") < 0) {
        setTimeout(() => alert("Cat game! Play again!"), 200);
      }
      return newState;

    case "CHECK_WIN":
      for (let i = 0; i < winningCombinations.length; i++) {
        let option1 = winningCombinations[i][0];
        let option2 = winningCombinations[i][1];
        let option3 = winningCombinations[i][2];

        if (
          state.gameBoard[option1] &&
          state.gameBoard[option1] === state.gameBoard[option2] &&
          state.gameBoard[option2] === state.gameBoard[option3] &&
          state.gameBoard[option1] !== " "
        ) {
          let letter = state.gameBoard[option1];
          let blocks = document.querySelectorAll(".block");

          blocks[option1].style.color = "green";
          blocks[option2].style.color = "green";
          blocks[option3].style.color = "green";
          setTimeout(() => alert(`Game over! ${letter}'s win!`), 200);
        }
      }
      return newState;

    case "NEW_GAME":
      let blocks = document.querySelectorAll(".block");
      for (let i = 0; i < 9; i++) {
        blocks[i].style.color = "white";
      }
      newState = initialState;
      return newState;

    default:
      return newState;
  }
};
