import React, {Component} from 'react';

// 登入畫面
class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

/* 抽取出的 HOC */

//負責驗證登入狀態
const UserAuthHOC = (WrappedComponent) => {
    return class userAuthHOC extends Component {
        constructor() {
            super();
            this.state = {authPass: true, userToken: ''};
        }

        componentDidMount() {
            const token = localStorage.getItem('token');
            if (token !== null) {
                this.setState({authPass: true, userToken: token});
            } else {
                this.setState({authPass: false});
            }
        }

        render() {
            if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
            return <WrappedComponent {...this.state} {...this.props} token={this.state.userToken} />
        }
    }
};

//負責計算商品數量
const ProductCountHOC = (WrappedComponent) => {
    return class productCountHOC extends Component {
        constructor() {
            super();
            this.state = {count: 1};
        }

        addProduct = () => {
            this.setState({count: this.state.count + 1});
        };

        lessProduct = () => {
            if (this.state.count === 1) {return;} // 最小商品數為1
            this.setState({count: this.state.count - 1});
        };

        render() {
            return <WrappedComponent{...this.state} {...this.props} addProduct={this.addProduct} lessProduct={this.lessProduct}/>
        }
    }
};

//負責送出訂購資訊
const SubmitOrderHOC = (WrappedComponent) => {
    return class submitOrderHOC extends Component {
        submitOrder = () => {
            // 這裡的 token 是由 props 取得
            let request = {
                body: JSON.stringify({token: this.props.token, product: {number: this.props.count}}),
                method: 'POST',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(`https://productURL/+${this.props.id}`, request)
                .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
                .catch((error) => {return error});
        };

        render() {
            return <WrappedComponent {...this.props} submitOrder={this.submitOrder}/>
        }
    }
};
// 添加水果類元件
@ProductCountHOC
@SubmitOrderHOC
@UserAuthHOC
class FruitProduct extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Number: {props.count}
                    <button onClick={props.addProduct}>+</button>
                    <button onClick={props.lessProduct}>-</button>
                </div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}

// 添加茶類元件
@ProductCountHOC
@SubmitOrderHOC
@UserAuthHOC
class TeaProduct extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Number: {props.count}
                    <button onClick={props.addProduct}>+</button>
                    <button onClick={props.lessProduct}>-</button>
                </div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}
// 添加糖果類元件
@ProductCountHOC
@SubmitOrderHOC
@UserAuthHOC
class CandyProduct extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Number: {props.count}
                    <button onClick={props.addProduct}>+</button>
                    <button onClick={props.lessProduct}>-</button>
                </div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}

class ProductPage extends Component {
    render() {
        return (
            <div>
                <FruitProduct id={'Fruit01'} name={'Fruit'} />
                <TeaProduct id={'Tea01'} name={'Tea'} />
                <CandyProduct id={'Candy01'} name={'Candy'} />
            </div>
        );
    }
}

export default ProductPage;
