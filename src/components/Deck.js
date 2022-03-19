import React from 'react';
import Card from './Card';
import './deck.css'

export default class Deck extends React.Component {
    render(){
        return (
        <div className='deck'>
        {this.props.cardArray.cards.map(
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