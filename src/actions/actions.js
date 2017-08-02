import store from "../store/store";

export let takeTurn = index => {
  store.dispatch({ type: "TAKE_TURN", payload: index });
  console.log("SQUARE SELECTED", index);
};

export let checkWin = () => {
  store.dispatch({ type: "CHECK_WIN" });
  console.log("CHECKWIN");
};
