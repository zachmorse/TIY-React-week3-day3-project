import store from "../store/store";

export let takeTurn = () => {
  store.dispatch({ type: "TAKE_TURN" });
};
