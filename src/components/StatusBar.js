import React from 'react';
import { Text, View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View style={StatusColumn}>
          <Text style={TextStyle}>
            Deck: {this.props.amountInDeck}
          </Text>
        </View>
        <View style={StatusColumn}>
          <Text style={TextStyle}>
            Hand: {this.props.amountInHand}
          </Text>
        </View>
        <View style={StatusColumn}>
          <Text style={TextStyle}>
            Board: {this.props.amountOnBoard}
          </Text>
        </View>
      </View>
    );
  }
}

const StatusColumn = {
  flex: '4',
  justifyContent: 'center'
}

const TextStyle = {
  color: '#fff',
  fontSize: 'large',
}

const StatusBarStyle = {
  container: {
    height: '3em',
    flexDirection: 'row',
    backgroundColor: '#555555',
    },
}
