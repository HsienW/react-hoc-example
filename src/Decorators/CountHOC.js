import React from 'react';

const CountHOC = (WrappedComponent) => {
    return class countHOC extends React.Component {
        constructor() {
            super();
            this.state = {count: 0};
            this.incrementCount = this.incrementCount.bind(this);
        }

        incrementCount = () => {
            this.setState({count: this.state.count + 1});
        };

        render() {
            return <WrappedComponent {...this.state} {...this.props} incrementCount={this.incrementCount}/>
        }
    }
};

export default CountHOC;
