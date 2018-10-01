import React from 'react';
import Login from '../Containers/LoginView';

export default class ProductComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authPass: true,
            count: 1,
        };
    }
    // 數量控制
    addProduct = () => {
        this.setState({count: this.state.count + 1});
    };
    lessProduct = () => {
        if (this.state.count === 1) {return;} // 最小商品數為1
        this.setState({count: this.state.count - 1});
    };
    // 驗證身分
    userAuthCheck = () => {
        const userToken = localStorage.getItem('token');
        if (userToken !== '') {
            this.setState({authPass: true});
            this.submitOrder(userToken);
        } else {
            this.setState({authPass: false});
        }
    };
    // 送出訂單
    submitOrder = (token) => {
        let request = {
            body: JSON.stringify({token: token, product: {id: this.props.id, number: this.state.count}}),
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://productURL/simple', request)
            .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
            .catch((error) => {return error});
    };

    render() {
        const info = {...this.props};
        if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
        return (
            <div>
                <div>Name: {info.name}</div>
                <div>Image: {info.image}</div>
                <div>Content: {info.content}</div>
                <div>Number: {this.state.count}
                    <button onClick={this.addProduct}>+</button>
                    <button onClick={this.lessProduct}>-</button>
                </div>
                <button onClick={this.userAuthCheck}>Submit</button>
            </div>
        );
    }
}
