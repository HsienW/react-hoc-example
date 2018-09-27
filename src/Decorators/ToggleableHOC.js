import React from 'react';

const ToggleableHOC = (color) = (WrappedComponent) => {
    return class ToggleableComponent extends React.Component {
        constructor() {
            super();
            this.state = {toggled: false};
        }

        toggleColor = () => {
            this.setState({toggled: !this.state.toggled});
        };

        render() {
            // const fontColor = this.state.toggled ? color : 'black';
            return (
                <WrappedComponent toggleColor={this.toggleColor}/>
            );
        }
    }
};

export default ToggleableHOC;
