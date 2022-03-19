import React from 'react';
import { View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View style={{flex: '4', justifyContent: 'center'}}>
          Deck: {this.props.amountInDeck}
        </View>
        <View style={{flex: '4', justifyContent: 'center'}}>
          Hand: {this.props.amountInHand}
        </View>
        <View style={{flex: '4', justifyContent: 'center'}}>
          Board: {this.props.amountOnBoard}
        </View>
      </View>
    );
  }
}

const StatusBarStyle = {
  container: {
    color: '#fff',
    height: '3em',
    flexDirection: 'row',
    backgroundColor: '#555555',
    },
}
