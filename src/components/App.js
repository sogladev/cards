import './App.css';
import React from 'react';
import Board from "./Board";
import Menu from "./Menu";
import StatusBar from "./StatusBar";
import manipulateDeck from "../logic/manipulateDeck"

export default class App extends React.Component {
    state = {
        deck: ['King of Hearts', 'King of Clubs', 'Queen of Clubs', 'King of Spades', 'Ace of Spades'],
        next: 'Ace of Clubs',
        board: ['Two of Clubs', 'Five of Clubs', 'Six of Hearts'],
    };

    get amountOfCards() {return this.state.deck.length}

    handleClick = buttonName => {
        this.setState(manipulateDeck(this.state, buttonName));
    };

    render() {
        return (
            <div className="App">
                <Board next={this.state.next} board={this.state.board}/>
                <StatusBar amountOfCards={this.amountOfCards}/>
                <Menu clickHandler={this.handleClick}/>
            </div>
      );
    }
}
