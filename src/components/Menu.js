import React from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';

function drawCard(e){
    e.preventDefault();
    console.log("draw a card")
}

function shuffleDeck(e){
    e.preventDefault();
    console.log("shuffle deck")
}

function newDeck(e){
    e.preventDefault();
    console.log("Create new deck")
}

export default class Menu extends React.Component {
  render() {
      return (
          <View style={MenuStyle.container}>
            <MenuButton text="Draw" onClick={ drawCard }/>
            <MenuButton text="Draw <n>" onClick={ drawCard }/>
            <MenuButton text="Shuffle remaining" onClick={ shuffleDeck }/>
            <MenuButton text="New deck" onClick={ newDeck }/>
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
