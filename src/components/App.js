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
        board: new Deck(),
        hand: new Deck(),
        amountOfCardsDrawn: 0,
    };

    handleClick = buttonName => {
        this.setState(manipulateDeck(this.state, buttonName));
    };

    render() {
        return (
            <div className="App">
                <StatusBar
                    amountInDeck={this.state.deck.amountOfCards}
                    amountOnBoard={this.state.board.amountOfCards}
                />
                <Board
                    board={this.state.board}
                    amountOfCardsDrawn={this.state.amountOfCardsDrawn}
                />
                <Menu clickHandler={this.handleClick}/>
            </div>
      );
    }
}
