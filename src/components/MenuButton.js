import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class MenuButton extends React.Component {
  render() {
      return (
          <TouchableOpacity>
              <Text style={MenuButtonStyle} onClick={this.props.onClick}>
                  {this.props.text}
              </Text>
          </TouchableOpacity>
      );
  }
}

const MenuButtonStyle = {
    color: '#fff',
    padding: 25,
    backgroundColor: '#28fb43',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

