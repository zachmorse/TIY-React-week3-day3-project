import React, { Component } from "react";
import { connect } from "react-redux";
import { takeTurn } from "../actions/actions";
import "../styles/App.css";

let style = {
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  ticTacBoxes: {
    display: "flex",
    height: 200,
    width: 200,
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
    flex: "1 1 25%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    color: "white"
  }
};

class App extends Component {
  render() {
    console.log("GAME STATE?", this.props.game);
    let gameArea = this.props.game.map((square, index) =>
      <div
        key={index}
        style={style.ticTacBoxes}
        onClick={() => this.props.takeTurn(index)}
      >
        {square}
      </div>
    );

    return (
      <div className="App">
        <h1>Tic Tac Toe Game</h1>
        <div style={style.gameContainer}>
          {gameArea}
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
  takeTurn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
