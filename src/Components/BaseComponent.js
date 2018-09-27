import React from 'react';
import ToggleableHOC from '../Decorators/ToggleableHOC';
import CountHOC from '../Decorators/CountHOC';

@ToggleableHOC
@CountHOC
export default class BaseComponent extends React.Component {
    constructor() {
        super();
    }

    onClick = () => {
        this.props.toggleColor();
        this.props.incrementCount();
    };

    render() {
        return (
            <button
                style={{color: this.props.color}}
                onClick={this.onClick}
            >
                count: {this.props.count}
            </button>
        );
    }
}
