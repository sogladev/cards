import React from 'react';
import Card from './Card';
import './card.css'

export default class Deck extends React.Component {
    render(){
        return (
        <div class='deck'>
            {deck(this.props.cardArray,
                  this.props.isFaceUp,
                  this.props.isText)
            }
        </div>
        )
    }
}

function deck(cardArray, isFaceUp, isText){
    return (
        cardArray.cards.map(
            (index, i) =>
            <div class='cardWrapper'>
             <Card class='card'
                isText={false}
                isFaceUp={isFaceUp}
                index={index}
                offsetY={0}
            />
            </div>
        )
    )
}