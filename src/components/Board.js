import React from 'react';
import { View } from 'react-native';
import Deck from "./Deck"

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardColumns} >
        <View style={BoardStyleLeft} >
          <Deck
            cardArray={this.props.deck}
            isFaceUp={this.props.isDeckFaceUp}
          />
        </View>
        <View style={BoardStyleMiddle} >
          <Deck
            cardArray={this.props.hand}
            isFaceUp={true}
          />
        </View>
        <View style={BoardStyleRight} >
          <Deck
            cardArray={this.props.board}
            isFaceUp={true}
          />
        </View>
      </View>
    );
  }
}

const BoardStyleLeft = {
  flex: '1',
  backgroundColor: '#3D9970', // darker olive
  alignContent: 'center',
}

const BoardStyleMiddle = {
  flex: '1',
  alignContent: 'center',
  backgroundColor: '#3D9970', // darker olive
}

const BoardStyleRight = {
  flex: '1',
  backgroundColor: '#3D9970', // darker olive
}

const BoardColumns = {
  flexDirection:'row',
  position: 'absolute',
  alignContent: 'center',
  left:0,
  right:0,
  top: '3em',
  bottom: '4em',
}

