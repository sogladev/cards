import './App.css';
import React from 'react';
import Board from "./Board";
import Menu from "./Menu";
import StatusBar from "./StatusBar";
import manipulateDeck from "../logic/manipulateDeck"
import Deck from "../logic/Deck"

export default class App extends React.Component {
    state = {
        deck: new Deck().fill(),
        hand: new Deck(),
        board: new Deck(),
    };

    handleClick = buttonName => {
        this.setState(manipulateDeck(this.state, buttonName));
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
                    deck={this.state.deck}
                    hand={this.state.hand}
                    board={this.state.board}
                />
                <Menu clickHandler={this.handleClick}/>
            </div>
      );
    }
}
