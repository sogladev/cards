import React from 'react';
import { View } from 'react-native';

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardStyle.container}>
        <p>Board Board Board Board Board Board Board Board Board Board</p>
      </View>
    );
  }
}

const BoardStyle = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 50,
    paddingBottom: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}

