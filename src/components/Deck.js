import React from 'react';
import Card from './Card';

export default class Deck extends React.Component {
    render(){
        return this.props.cardArray.cards.map(index =>
            <Card index={index}/>
            )
    }
}