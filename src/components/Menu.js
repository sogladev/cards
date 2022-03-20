import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import InputNumberCards  from './InputNumberCards';

export default class Menu extends React.Component {
  handleClick = buttonName => {
      this.props.clickHandler(buttonName);
  };

  render() {
      return (
          <View style={MenuStyle.container}>
            <Button name="Draw" clickHandler={ this.handleClick }/>
            <InputNumberCards 
              name="Draw"
              default={5}
              min={1}
              max={56}
              clickHandler={ this.handleClick }
            />
            <Button name="Shuffle" clickHandler={ this.handleClick }/>
            <Button name="Flip" clickHandler={ this.handleClick }/>
            <InputNumberCards 
              name="New with jokers"
              default={0}
              min={0}
              max={12}
              clickHandler={ this.handleClick }
            />
          </View>
      );
  }
}

const MenuStyle = {
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: '4.5em',
    paddingBottom: '0.5em',
    paddingTop: '0.5em',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#555555',
  },
};
