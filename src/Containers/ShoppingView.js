import React from 'react';
import CountHOC from '../Decorators/CountHOC';
import ButtonComponent from '../Components/ButtonComponent';

const IncrementCount = CountHOC(ButtonComponent);

export default class ShoppingView extends React.Component {
    render() {
        return (
            <div>
                <IncrementCount />
            </div>
        );
    }
}