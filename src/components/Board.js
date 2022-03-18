import React from 'react';
import { View } from 'react-native';
import Deck from "./Deck"

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardColumns} >
        <View style={BoardStyleLeft} >
          <Deck cardArray={this.props.deck} isFaceUp={false}/>
        </View>
        <View style={BoardStyleMiddle} >
          <Deck cardArray={this.props.hand} isFaceUp={true}/> 
        </View>
        <View style={BoardStyleRight} >
          <Deck cardArray={this.props.board} isFaceUp={true}/> 
        </View>
      </View>
    );
  }
}

const BoardStyleLeft = {
  flex: '11',
    backgroundColor: '#329062', // darker olive
}

const BoardStyleMiddle = {
  flex: '24',
    backgroundColor: '#2ECC40', // green
}

const BoardStyleRight = {
  flex: '24',
    backgroundColor: '#01FF70', // lime
}

const BoardColumns = {
    flexDirection:'row',
    position: 'absolute',
    left:0,
    right:0,
    top:50,
    bottom:80,
}

