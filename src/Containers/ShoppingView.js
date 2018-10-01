import React from 'react';
import CountHOC from '../Decorators/CountHOC';
import ButtonComp from '../Components/ButtonComp';

const IncrementCount = CountHOC(ButtonComp);

export default class ShoppingView extends React.Component {
    render() {
        return (
            <div>
                <IncrementCount />
            </div>
        );
    }
}