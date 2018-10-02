import React from 'react';

const ProductCountHOC = (WrappedComponent) => {
    return class productCountHOC extends React.Component {
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
            return <WrappedComponent
                {...this.state}
                {...this.props}
                addProduct={this.addProduct}
                lessProduct={this.lessProduct}
            />
        }
    }
};

export default ProductCountHOC;
