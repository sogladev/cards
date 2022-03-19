import React from 'react';
import { Text, View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View style={{flex: '4', justifyContent: 'center'}}>
          <Text> Deck: {this.props.amountInDeck} </Text>
        </View>
        <View style={{flex: '4', justifyContent: 'center'}}>
          <Text> Hand: {this.props.amountInHand} </Text>
        </View>
        <View style={{flex: '4', justifyContent: 'center'}}>
          <Text> Board: {this.props.amountOnBoard} </Text>
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
