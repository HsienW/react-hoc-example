import React from 'react';
// import GetDataHOC from '../Decorators/GetDataHOC';
import BaseComponent from '../Components/BaseComponent';
import ToggleableHOC from '../Decorators/ToggleableHOC';
import CountHOC from '../Decorators/CountHOC';

// const GetDataSimple = GetDataHOC(BaseComponent, 'https://demo', 'POST');
// const ToggleableBtn = ToggleableHOC('red')(CountHOC(BaseComponent));

@ToggleableHOC('red')
@CountHOC(BaseComponent)
export default class GetDataView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <ToggleableBtn />
            </div>
        );
    }
}