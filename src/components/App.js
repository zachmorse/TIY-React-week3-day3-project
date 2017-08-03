import React, { Component } from "react";
import { connect } from "react-redux";
import { takeTurn, checkWin, checkCat, newGame } from "../actions/actions";
import "../styles/App.css";

let style = {
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "30rem"
  },
  ticTacBoxes: {
    display: "flex",
    height: 100,
    width: 100,
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
    flex: "1 1 25%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    color: "white"
  },
  masterAlign: {
    display: "flex",
    justifyContent: "center"
  }
};

function doAllTheThings(index) {
  takeTurn(index);
  checkWin();
  checkCat();
}

class App extends Component {
  render() {
    let gameArea = this.props.game.map((square, index) =>
      <div
        key={index}
        className="block"
        style={style.ticTacBoxes}
        onClick={() => doAllTheThings(index)}
      >
        {square}
      </div>
    );

    return (
      <div className="App">
        <h1>Tic Tac Toe Game</h1>
        <button onClick={() => this.props.newGame()}>Restart Game</button>
        <div style={style.masterAlign}>
          <div style={style.gameContainer}>
            {gameArea}
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    player: state.game.player,
    game: state.game.gameBoard
  };
};

let mapDispatchToProps = () => ({
  takeTurn,
  checkCat,
  checkWin,
  newGame
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
