import React from "react";
import { index2name as index2name } from '../logic/translateCardIndex';
import './card.css'
import { Dimensions } from 'react-native';

const w_to_h_ratio = 169/244

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png)$/));
  

export default class Card extends React.Component {

    handleClick = () => {
        if (this.props.clickHandler === undefined){
            return
        }
        this.props.clickHandler(`DrawIndex${this.props.index}`)
    }

    get filePostfix() {
        return this.props.isFaceUp ? index2name(this.props.index) : "back"
    }

    get style() {
        const windowHeight = Dimensions.get('window').height;
        const cardHeight = windowHeight / 5.8 // magic number to fit 5 cards
        return {
            width: cardHeight*w_to_h_ratio,
            height: cardHeight,
        }
    }

    render(){
        return (
            <div className='cardWrapper'>
                <div className='card' onClick={this.handleClick}>
                <img
                    style={ this.style }
                    src={images[`${this.filePostfix}.png`]}
                />
                </div>
            </div>
        )
    }
}