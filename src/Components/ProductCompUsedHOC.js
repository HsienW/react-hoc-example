import React from 'react';
import UserAuthHOC from '../Decorators/UserAuthHOC';
import ProductCountHOC from '../Decorators/ProductCountHOC';
import SubmitOrderHOC from '../Decorators/SubmitOrderHOC';

@UserAuthHOC
@ProductCountHOC
@SubmitOrderHOC
export default class ProductCompUsedHoc extends React.Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Image: {props.image}</div>
                <div>Content: {props.content}</div>
                <div>Number: {props.count}
                    <button onClick={props.addProduct}>+</button>
                    <button onClick={props.lessProduct}>-</button>
                </div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}
