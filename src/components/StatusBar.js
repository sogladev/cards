import React from 'react';
import { View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View style={{flex: '4', justifyContent: 'center'}}>
          Cards remaining in deck: {this.props.amountInDeck}
        </View>
        <View style={{flex: '12', justifyContent: 'center'}}>
          Cards in hand: {this.props.amountInHand}
        </View>
        <View style={{flex: '11', justifyContent: 'center'}}>
          Cards on board: {this.props.amountOnBoard}
        </View>
      </View>
    );
  }
}

const StatusBarStyle = {
  container: {
    color: '#fff',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#555555',
    },
}
