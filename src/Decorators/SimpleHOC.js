import React from 'react';

const HOC = (WrappedComponent) => {
    return class simpleHOC extends React.Component {
        constructor() {
            super();
            this.state = {say: 'good morning'}
        }

        render() {
            return <WrappedComponent say={this.state.say}/>
        }
    }
};

export default HOC;
