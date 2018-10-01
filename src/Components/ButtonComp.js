import React from 'react';

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.increment}>Count: {this.props.count}</button>
        );
    }
}
