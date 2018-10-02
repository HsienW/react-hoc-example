import React, {Component} from 'react';
// import SimpleView from './Containers/SimpleView';
// import ShoppingView from './Containers/ShoppingView';
// import GetDataView from './Containers/GetDataView';
// import UserDataListView from './Containers/UserDataListView';
// import ProductComp from './Components/ProductComp';
import ProductItemInfo from './Containers/ProductItemInfo';

export default class App extends Component {
    render() {
        return (
            <div>
                <ProductItemInfo />
            </div>
        );
    }
}
