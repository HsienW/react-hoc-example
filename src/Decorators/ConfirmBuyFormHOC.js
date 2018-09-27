import React from 'react';

const ConfirmBuyFormHOC = (WrappedComponent, ActionCteator) => {
    return class buyFormHOC extends React.Component {
        constructor() {
            super();
            this.state = {}
        }

        handleInput = (e) => {

        };

        handleSubmit = () => {

        };

        render() {
            return <WrappedComponent {...this.state} increment={this.incrementCount} />
        }
    }
};

export default ConfirmBuyFormHOC;
