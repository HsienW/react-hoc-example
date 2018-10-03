import React from 'react';

class ProductCount extends React.Component {
    constructor() {
        super();
        this.state = {count: 1};
    }

    addProduct = () => {
        this.setState({count: this.state.count + 1});
    };

    lessProduct = () => {
        if (this.state.count === 1) {return;} // 最小商品數為1
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <div>
                {this.props.children(this.state)}
                <button onClick={this.addProduct}>+</button>
                <button onClick={this.lessProduct}>-</button>
            </div>
        )
    }
}

export default class ProductContent extends React.Component {
    static propTypes = {
        product: PropTypes.object,
    };

    render() {
        return (
            <ProductCount>{product => (<div>Number: {product.count}</div>)}</ProductCount>
        );
    }
}
