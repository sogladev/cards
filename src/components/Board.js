import React from 'react';
import { View } from 'react-native';
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg';
import Deck from "./Deck"

export default class Board extends React.Component {
  render() {
    return (
      <View style={BoardColumns} >
        <View style={BoardStyleLeft} >
          <svg 
                width="600"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                transform="scale(0.4)"
            >
            <use xlinkHref={`${SvgCards}#back`} x="20" y="0" />
            <use xlinkHref={`${SvgCards}#back`} x="10" y="0" />
            <use xlinkHref={`${SvgCards}#back`} x="00" y="0" />
          </svg>
        </View>
        <View style={BoardStyleMiddle} >
          <Deck cardArray={this.props.hand}/> 
        </View>
        <View style={BoardStyleRight} >
          <Deck cardArray={this.props.board}/> 
        </View>
      </View>
    );
  }
}

const BoardStyleLeft = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '10%',
    alignContent: 'stretch',
    backgroundColor: '#3D9970', // olive
}

const BoardStyleMiddle = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '40%',
    alignContent: 'space-around',
    backgroundColor: '#2ECC40', // green
}

const BoardStyleRight = {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '50%',
    alignContent: 'space-around',
    backgroundColor: '#01FF70', // lime
}

const BoardColumns = {
    flexDirection:'row',
    position: 'absolute',
    left:0,
    right:0,
    top:50,
    bottom:80,
}

