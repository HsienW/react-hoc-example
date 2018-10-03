import React from 'react';
import CallApiHOC from '../Decorators/CallApiHOC';

@CallApiHOC('post', 'https://productURL/ABC123456', {product: {example: 'example'}}) // 無法動態的修改參數
export default class ProductComp extends React.Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}
