import React from 'react';
import { Dimensions } from 'react-native';

import Card from './Card';
import './deck.css'


export default class Deck extends React.Component {
    get amountOfCardsToShow() {
        const h = Dimensions.get('window').height;
        let n = this.props.cardArray.amountOfCards
        n = n > 0 ? n : 1
        console.debug(`h:${h}  n:${n} d:${(h/n).toFixed(2)}`)
        return Math.floor(h/n) < 7.2  ? 1 : n
    }
    render(){
        return (
        <div className='deck'>
        {
        this.props.cardArray.cards.slice(-this.amountOfCardsToShow).map(
            (index, i) =>
             <Card
                clickHandler={this.props.clickHandler}
                key={index}
                isFaceUp={this.props.isFaceUp}
                index={index}
            />
        )}
        </div>
        )
    }
}