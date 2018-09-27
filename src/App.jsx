import React, {Component} from 'react';
// import SimpleView from './Containers/SimpleView';
// import ShoppingView from './Containers/ShoppingView';
// import GetDataView from './Containers/GetDataView';
import SwitchCountView from './Containers/SwitchCountView';

export default class App extends Component {
    render() {
        return (
            <div>
                <SwitchCountView/>
            </div>
        );
    }
}
