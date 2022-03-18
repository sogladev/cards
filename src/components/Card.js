import React from "react";
import { Text } from 'react-native';

export default class Card extends React.Component {
    render(){
        return( 
            <Text key={this.props.index} style={TextStyle}>
                {this.props.index}
            </Text>
        )
    }
}

const TextStyle = {
    width: '50%',
    alignItems: 'stretch',
    backgroundColor: '#DDDDDD', // silver
};