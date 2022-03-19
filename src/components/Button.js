import React from 'react';

export default class Button extends React.Component {

    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }
    render() {
        return (
            <button style={ButtonStyle} onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}

const ButtonStyle = {
    alignSelf: 'stretch',
    color: '#fff',
    backgroundColor: '#3D9970', // live
    borderRadius: 15,
};

