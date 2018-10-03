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
    // 驗證身分
    componentDidMount() {
        const userToken = localStorage.getItem('token');
        if (userToken !== null) {
            this.setState({authPass: true});
        } else {
            this.setState({authPass: false});
        }
    }
    // 數量控制
    addProduct = () => {
        this.setState({count: this.state.count + 1});
    };
    lessProduct = () => {
        if (this.state.count === 1) {return;} // 最小商品數為1
        this.setState({count: this.state.count - 1});
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
        fetch('https://productURL/ABC123456', request)
            .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
            .catch((error) => {return error});
    };

    render() {
        const props = {...this.props};
        if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Image: {props.image}</div>
                <div>Content: {props.content}</div>
                <div>Number: {this.state.count}
                    <button onClick={this.addProduct}>+</button>
                    <button onClick={this.lessProduct}>-</button>
                </div>
                <button onClick={this.submitOrder}>Submit</button>
            </div>
        );
    }
}
