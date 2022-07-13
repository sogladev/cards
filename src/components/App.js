import './App.css';
import React from 'react';
import Board from "./Board";
import Menu from "./Menu";
import StatusBar from "./StatusBar";
import manipulateCardArray from "../logic/manipulateCardArray"
import CardArray from "../logic/CardArray"

export default class App extends React.Component {
    state = {
        deck: new CardArray().fill(),
        hand: new CardArray(),
        board: new CardArray(),
        isDeckFaceUp: false,
        isBoardVisible: true,
    };

    handleClick = buttonName => {
        this.setState(manipulateCardArray(this.state, buttonName));
    };

    render() {
        return (
            <div className="App">
                <StatusBar
                    amountInDeck={this.state.deck.amountOfCards}
                    amountInHand={this.state.hand.amountOfCards}
                    amountOnBoard={this.state.board.amountOfCards}
                />
                <Board
                    isDeckFaceUp={this.state.isDeckFaceUp}
                    deck={this.state.deck}
                    hand={this.state.hand}
                    board={this.state.board}
                    isBoardVisible={this.state.isBoardVisible}
                    clickHandler={this.handleClick}
                />
                <Menu
                    clickHandler={this.handleClick}
                    isBoardVisible={this.state.isBoardVisible}
                />
            </div>
      );
    }
}
