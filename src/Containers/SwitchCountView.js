import React from 'react';
import BaseComponent from '../Components/BaseComponent';
// import ToggleableHOC from '../Decorators/ToggleableHOC';
// import CountHOC from '../Decorators/CountHOC';

// const ToggleableBtnR = BaseComponent.RedBaseComponent;
// const ToggleableBtnB = BaseComponent.BlueBaseComponent;
// const ToggleableBtnY = ToggleableHOC('yellow')(CountHOC(BaseComponent));


export default class SwitchCountView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <BaseComponent />
            </div>
        );
    }
}