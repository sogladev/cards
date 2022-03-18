import React from 'react';
import { View } from 'react-native';
import Card from './Card';
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg';

export default class Deck extends React.Component {
    render(){
        return (
        <View style={DeckStyle}>
            {this.props.isFaceUp ? faceUp(this.props.cardArray) : faceDown(this.props.cardArray)}
        </View>
        )
    }
}

const DeckStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    backgroundColor: '#3D9970', // olive
}

function faceUp(cardArray){
    return (
        cardArray.cards.map(
            index => <Card
                isText={false}
                isFaceUp={true}
                index={index}
            />
        )
    )
}

const cardBacks = n => {
let content = [];
for (let i = 0; i < n; i++) {
    const item = <use xlinkHref={`${SvgCards}#back`} y={i*10} x="0" />
    content.push(item);
}
return content;
};

function faceDown(cardArray){
    return (
        <svg 
        width="285"
        height="850"
            xmlns="http://www.w3.org/2000/svg"
        >
        {cardBacks(cardArray.amountOfCards > 56 ? 56 : cardArray.amountOfCards)}
        </svg>
    )
}
