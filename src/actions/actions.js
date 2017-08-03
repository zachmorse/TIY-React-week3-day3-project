import store from "../store/store";

export let takeTurn = index => {
  store.dispatch({ type: "TAKE_TURN", payload: index });
  console.log("SQUARE SELECTED", index);
};

export let checkWin = () => {
  store.dispatch({ type: "CHECK_WIN" });
  console.log("check for winning condition");
};

export let checkCat = () => {
  store.dispatch({ type: "CHECK_CAT" });
  console.log("check for cat game");
};

export let newGame = () => {
  store.dispatch({ type: "NEW_GAME" });
  console.log("new game");
};
