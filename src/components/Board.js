import React from 'react';
import { View, Text } from 'react-native';
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg'

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardColumns} >
  <View style={BoardStyleLeft} >


 <svg 
      width="600"
      height="400"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(0.4)"
  >
  <use xlinkHref={`${SvgCards}#back`} x="20" y="0" />
  <use xlinkHref={`${SvgCards}#back`} x="10" y="0" />
  <use xlinkHref={`${SvgCards}#back`} x="00" y="0" />
  </svg>

      </View>
        { console.log(`Deck outside: ${this.props.board.deck}`) }
         <View style={BoardStyleMiddle} >
          <Cards
            deck={this.props.board.deck}
            n={this.props.amountOfCardsDrawn}
            isJustDrawn={true}
          />
        </View>
        <View style={BoardStyleRight} >
          <Cards
            deck={this.props.board.deck}
            n={this.props.amountOfCardsDrawn}
            isJustDrawn={false}
          />
        </View>
      </View>
    );
  }
}

function Cards({deck,n,isJustDrawn}){
  const styleDirection = isJustDrawn ? TextStyleLeft : TextStyleRight;
  if (isJustDrawn){
    if (n === 0){return ''}
    deck = deck.slice(-n);
  }
  else {
    deck = n === 0 ? deck : deck.slice(0,-n)
  }
  return deck.map(card =>
    <Text
        style={styleDirection} key={card.toString()}>{card.toString()}
    </Text>
  )
}

const TextStyleLeft = {
    width: '50%',
    alignItems: 'stretch',
    backgroundColor: '#DDDDDD', // silver
};


const TextStyleRight = {
    width: '33%',
    alignItems: 'stretch',
    backgroundColor: '#DDDDDD', // silver
};

const BoardStyleRight = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '50%',
    alignContent: 'space-around',
    backgroundColor: '#01FF70', // lime
}

const BoardStyleMiddle = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '40%',
    alignContent: 'space-around',
    backgroundColor: '#2ECC40', // green
}

const BoardStyleLeft = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '10%',
    alignContent: 'stretch',
    backgroundColor: '#3D9970', // olive
}

const BoardColumns = {
    flexDirection:'row',
    position: 'absolute',
    left:0,
    right:0,
    top:50,
    bottom:80,
}

