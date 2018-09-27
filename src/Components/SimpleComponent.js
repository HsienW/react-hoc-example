import React from 'react';

export default class SimpleComponent extends React.Component {
    render() {
        return (
            <div>Johnny {this.props.say}</div>
        );
    }
}
