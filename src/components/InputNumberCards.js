import React from 'react';
import { View } from 'react-native';
import Button from './Button';
import NumberPicker from "react-widgets/NumberPicker";
import "react-widgets/scss/styles.scss";
import '../scss/style.scss';
import isValidNumOfCards from '../logic/validateInput'


export default class InputNumberCards extends React.Component {
    defaultValue = this.props.default;

    state = {
        value: this.defaultValue,
    }

    get buttonName() {
        return `${this.props.name} <${this.state.value}>`
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
            <View style={{width: '12em'}}>
                <Button
                name={this.buttonName}
                clickHandler={this.handleClick}
                />
                <NumberPicker 
                    onChange={this.handleChange}
                    defaultValue={this.defaultValue}
                    step={1} min={this.props.min} max={this.props.max}
                />
            </View>
        );
    }
};