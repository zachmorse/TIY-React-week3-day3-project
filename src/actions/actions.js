import store from "../store/store";

export let takeTurn = index => {
  store.dispatch({ type: "TAKE_TURN", payload: index });
};

export let checkWin = () => {
  store.dispatch({ type: "CHECK_WIN" });
};

export let checkCat = () => {
  store.dispatch({ type: "CHECK_CAT" });
};

export let newGame = () => {
  store.dispatch({ type: "NEW_GAME" });
};
