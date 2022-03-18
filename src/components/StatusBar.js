import React from 'react';
import { View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View style={{flex: '4'}}>
          Cards remaining in deck: {this.props.amountInDeck}
        </View>
        <View style={{flex: '12'}}>
          Cards in hand: {this.props.amountInHand}
        </View>
        <View style={{flex: '11'}}>
          Cards on board: {this.props.amountOnBoard}
        </View>
      </View>
    );
  }
}

const StatusBarStyle = {
  container: {
     height: 50,
    paddingTop: 0,
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     backgroundColor: '#AAAAAA',
    },
}
