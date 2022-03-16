import React from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';

function handleClickNew(e){
    e.preventDefault();
    console.log("New")
}

function handleClickReset(e){
    e.preventDefault();
    console.log("Reset")
}

export default class Menu extends React.Component {
  render() {
      return (
          <View style={MenuStyle.container}>
            <MenuButton text="Draw" onClick={ handleClickNew }/>
            <MenuButton text="Draw 2" onClick={ handleClickNew }/>
            <MenuButton text="Draw 3" onClick={ handleClickNew }/>
            <MenuButton text="Draw <n>" onClick={ handleClickReset }/>
            <MenuButton text="Reset" onClick={ handleClickReset }/>
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
