import React from 'react';
import SimpleHOC from '../Decorators/SimpleHOC';
import SimpleComp from '../Components/SimpleComp';

const Simple = SimpleHOC(SimpleComp);

export default class SimpleView extends React.Component {
    render() {
        return (
            <div>
                <Simple />
            </div>
        );
    }
}