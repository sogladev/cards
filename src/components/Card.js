import React from "react";
import { Text } from 'react-native';
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg';
import { index2SVG } from '../logic/translateCardIndex';

export default class Card extends React.Component {
    render(){
        return ( this.props.isFaceUp ?
            faceUp(this.props.index) : faceDown(this.props.index)
        )
    }
}

function drawCard(index){
    const svgPostfix = index2SVG(index)
    return (
        <svg 
            width="175"
            height="250"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${SvgCards}#${svgPostfix}`}/>
        </svg>
    )
}

function faceUp(index,isText){
    return (
        isText ?
         <Text key={index} style={TextStyle}> {index} </Text>
         : drawCard(index)
    )
}

function faceDown(index){
    return (
        <p key={index}> faceDown </p>
    )
}

const TextStyle = {
    width: '50%',
    alignItems: 'stretch',
    backgroundColor: '#DDDDDD', // silver
};
