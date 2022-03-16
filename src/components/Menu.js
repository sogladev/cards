import React from 'react';
import { View } from 'react-native';
import Button from './Button';

export default class Menu extends React.Component {
  handleClick = buttonName => {
      this.props.clickHandler(buttonName);
  };

  render() {
      return (
          <View style={MenuStyle.container}>
            <Button name="Draw" clickHandler={ this.handleClick }/>
            <Button name="Draw <n>" clickHandler={ this.handleClick }/>
            <Button name="Shuffle remaining" clickHandler={ this.handleClick }/>
            <Button name="New deck" clickHandler={ this.handleClick }/>
          </View>
      );
  }
}

const MenuStyle = {
  container: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    left: 0,
    right: 0,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 55, 55, 0.6)',
  },
};
