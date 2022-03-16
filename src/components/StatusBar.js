import React from 'react';
import { View, Text } from 'react-native';

export default class StatusBar extends React.Component {
  render() {
    return (
      <View style={StatusBarStyle.container}>
        <View>
          <Text>
            Cards remaining in deck: {this.props.amountOfCards}
          </Text>
        </View>
      </View>
    );
  }
}

const StatusBarStyle = {
  container: {
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 55, 55, 0.6)',
    },
}
