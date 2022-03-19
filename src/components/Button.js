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
    color: '#fff',
    minWidth: '8em',
    fontSize: 'large',
    backgroundColor: '#3D9970', // olive
    borderRadius: 15,
};

