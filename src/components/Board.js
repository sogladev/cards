import React from 'react';
import { View } from 'react-native';

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardStyle.container}>
        { this.props.board.deck.map( card => <p key={card.toString()}>{card.toString()}</p>) }
      </View>
    );
  }
}

const BoardStyle = {
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 80,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

