import React from 'react';
import { View, Text } from 'react-native';

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardTwoColumns} >
      <View style={BoardStyleLeft} >
        { this.props.board.deck.map( card =>
            <Text
                style={TextStyleLeft} key={card.toString()}>{card.toString()}
            </Text>
            )
        }
      </View>

      <View style={BoardStyleRight} >
        { this.props.board.deck.map( card =>
            <Text
                style={TextStyleRight} key={card.toString()}>{card.toString()}
            </Text>
            )
        }
      </View>
      </View>
    );
  }
}

const TextStyleLeft = {
    width: '50%',
    alignItems: 'stretch',
    backgroundColor: 'powderblue',
};


const TextStyleRight = {
    width: '33%',
    alignItems: 'stretch',
    backgroundColor: 'powderblue',
};

const BoardStyleRight = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '40%',
    alignContent: 'space-around',
    backgroundColor: 'blue',
}

const BoardStyleLeft = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '60%',
    alignContent: 'stretch',
    backgroundColor: 'red',
}

const BoardTwoColumns = {
    flexDirection:'row',
    position: 'absolute',
    left:0,
    right:0,
    top:50,
    bottom:80,
}

