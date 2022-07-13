import React from 'react';
import { View } from 'react-native';
import Deck from "./Deck"

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardColumns} >
        <View style={BoardStyleLeft} >
          <Deck
            clickHandler={this.props.clickHandler}
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
        {(() => {
          if (this.props.isBoardVisible){
            return (
              <View style={BoardStyleRight} >
              <Deck
                cardArray={this.props.board}
                isFaceUp={true}
              />
              </View>)
          }
          else {
            return
          }
        })()}
      </View>
    );
  }
}

const BoardStyleLeft = {
  flex: '1',
  backgroundColor: '#3D9970', // darker olive
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
  display: 'flex',
  flexDirection:'row',
  position: 'absolute',
  left:0,
  right:0,
  top: '3em',
  bottom: '4.5em',
}

