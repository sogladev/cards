import React from 'react';
import { Text } from 'react-native'
import Card from './Card';

export default class Deck extends React.Component {
    state = {
        cards: [],
    }

    get amountOfCards() {return this.state.cards.length};

    get isEmpty() {return this.state.cards.length <= 0};

    fill(numOfJokers=0) {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const suits = [0, 1, 2, 3]
        for (let suit in suits){
            for (let num in nums){
                this.state.cards.push(new Card(num, suit));
            }
        }
        for (let j=0; j< numOfJokers; j++){
            // Let joker be num = 13, suit = 0
            this.state.cards.push(new Card(13, 0));
        }
        console.log(`Filled deck with new total of ${this.state.cards.length} cards`);
        return this
    }

    shuffle() {
        this.state.cards.sort( () => Math.random() - 0.5 );
        return this
    }

    deal() {
        if (this.isEmpty){
            console.log(`The deck is empty!`);
            return
        }
        const dealtCard = this.state.cards.pop();
        console.log(`Dealt a card. The deck has ${this.state.cards.length} cards left`);
        return dealtCard;
    }

    add(card) {
        if (card instanceof Card){
            this.state.cards.push(card);
        }
        return this
    }

    render(){
        return this.props.deck.state.cards.map(card =>
            <Text style={this.props.style}
                key={card.toString()}>{card.toString()}
            </Text>
        )
    }
}
