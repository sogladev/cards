import React from "react";
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg';
import { index2SVG } from '../logic/translateCardIndex';
import './card.css'

export default class Card extends React.Component {
    render(){
        return (drawCard(
            this.props.index,
            this.props.isFaceUp,
            this.props.isText,
            this.props.offsetY
            )
        )
    }
}


function drawCard(index, isFaceUp, isText, offsetY){
    const svgPostfix = isFaceUp ? index2SVG(index) : "back" 
    return (
        isText ?
        <div>
            <p key={index}> {svgPostfix} </p>
        </div>
            : 
        <div class='card'>
            <svg 
                viewBox="0 0 170 245 "
                xmlns="http://www.w3.org/2000/svg"
            >
                <use xlinkHref={`${SvgCards}#${svgPostfix}`} y={offsetY}/>
            </svg>
        </div>
    )
}
