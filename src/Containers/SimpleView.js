import React from 'react';
import SimpleHOC from '../Decorators/SimpleHOC';
import SimpleComponent from '../Components/SimpleComponent';

const Simple = SimpleHOC(SimpleComponent);

export default class SimpleView extends React.Component {
    render() {
        return (
            <div>
                <Simple />
            </div>
        );
    }
}