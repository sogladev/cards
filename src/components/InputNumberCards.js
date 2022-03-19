import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import NumberPicker from "react-widgets/NumberPicker";
import isValidNumOfCards from '../logic/validateInput'


export default class InputNumberCards extends React.Component {
    defaultValue = 5;

    state = {
        value: this.defaultValue,
    }

    get buttonName() {
        return `Draw <${this.state.value}>`
    }

    handleClick = () => {
        this.props.clickHandler(this.buttonName)
    }

    handleChange = (value) => {
        if (isValidNumOfCards(value)){
            this.setState({value: value})
        }
        else {
            this.setState({value: this.defaultValue})
        }
    }

    render() {
        return (
            <View>
                <Button
                name={this.buttonName}
                clickHandler={this.handleClick}
                />
                <NumberPicker 
                    onChange={this.handleChange}
                    defaultValue={this.defaultValue}
                    step={1} min={1} max={56}
                />
            </View>
        );
    }
};