import React from 'react';
import { View } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
            <p>Cards remaining in deck: {this.props.amountInDeck}</p>
            <p>Cards on board: {this.props.amountOnBoard}</p>
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
     backgroundColor: 'rgba(55, 55, 55, 0.6)',
    },
}
