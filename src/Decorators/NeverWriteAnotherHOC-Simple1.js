import React from 'react';

const HOC = (WrappedComponent) => {
    return class HOC extends React.Component {
        render() {
            return <WrappedComponent />
        }
    }
};

export default HOC;
