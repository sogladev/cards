import React from "react";
import SvgCards from '../../node_modules/svg-cards/svg-cards.svg';
import { index2SVG } from '../logic/translateCardIndex';
import './card.css'

export default class Card extends React.Component {

    handleClick = () => {
        if (this.props.clickHandler === undefined){
            return
        }
        this.props.clickHandler(`DrawIndex${this.props.index}`)
    }

    get svgPostfix() {
        return this.props.isFaceUp ? index2SVG(this.props.index) : "back"
    }

    render(){
        return (
            <div className='cardWrapper'>
                <div className='card' onClick={this.handleClick}>
                    <svg 
                        viewBox="0 0 169 245 "
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <use href={`${SvgCards}#${this.svgPostfix}`}/>
                    </svg>
                </div>
            </div>
        )
    }
}