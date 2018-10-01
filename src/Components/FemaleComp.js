import React from 'react';
import UserGenderHOC from '../Decorators/UserGenderHOC';
import CountHOC from '../Decorators/CountHOC';

@UserGenderHOC('Female')
@CountHOC
export default class FemaleComp extends React.Component {
    constructor() {
        super();
    }

    onClick = () => {
        this.props.incrementCount();
    };

    render() {
        return (
            <div>
                <div>Gender: {this.props.gender}</div>
                <div>Icon: {this.props.isMaleIcon ? 'MaleIcon' : 'FemaleIcon'}</div>
                <div>Number: {this.props.count}</div>
                <button onClick={this.onClick}>Add Number</button>
            </div>
        );
    }
}
