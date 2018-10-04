import React, {Component} from 'react';

/* 簡易 HOC 範例 */
const HOC = (WrappedComponent) => {
    return class simpleHOC extends Component {
        constructor() {
            super();
            this.state = {say: 'good morning'}
        }

        render() {
            return <WrappedComponent {...this.props} say={this.state.say}/>
        }
    }
};

class SimpleComp extends Component {
    render() {
        const props = {...this.props};
        return (<div>Johnny {props.say}</div>); // Johnny good morning
    }
}

const Simple =  HOC(SimpleComp);


/* 傳入性別參數的 HOC */
const UserGenderHOC = (gender) => (WrappedComponent) => {
    return class userGenderHOC extends Component {
        render() {
            return (
                <WrappedComponent gender={gender} {...this.props} />
            );
        }
    }
};

class BaseComp extends Component {
    render() {
        const props = {...this.props};
        return (<div>Gender: {props.gender}</div>); // Gender: Male
    }
}

const Male =  UserGenderHOC('Male')(BaseComp);

/* 計數 HOC*/
const CountHOC = (WrappedComponent) => {
    return class countHOC extends Component {
        constructor() {
            super();
            this.state = {count: 0};
            this.incrementCount = this.incrementCount.bind(this);
        }

        incrementCount = () => {
            this.setState({count: this.state.count + 1});
        };

        render() {
            return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
};

class CountComp extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Number: {props.count}</div>
                <button onClick={props.incrementCount}>Add Number</button>
            </div>
        );
    }
}

const Count =  CountHOC(CountComp);

/* 使用者清單範例 */
class UserComp extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Gender: {props.gender}</div>
                <div>Number: {props.count}</div>
                <button onClick={props.incrementCount}>Add Number</button>
            </div>
        );
    }
}

const UserList =  UserGenderHOC('Male')(CountHOC(UserComp));


/* HOC 與 Decorator */
@UserGenderHOC('Male')
@CountHOC
class MaleComp extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <div>Gender: {props.gender}</div>
                <div>Number: {props.count}</div>
                <button onClick={props.incrementCount}>Add Number</button>
            </div>
        );
    }
}

/*購物網站-水果例子(未用HOC)*/
class FruitsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {userToken: '', authPass: true, count: 1};
    }
    // 驗證身分
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.setState({authPass: true, userToken: token});
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
    submitOrder = () => {
        let request = {
            body: JSON.stringify({token: this.state.userToken, product: {number: this.state.count}}),
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://productURL/Fruits01', request)
            .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
            .catch((error) => {return error});
    };

    render() {
        const props = {...this.props};
        if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
        return (
            <div>
                <div>Name: {props.name}</div>
                <div>Number: {this.state.count}
                    <button onClick={this.addProduct}>+</button>
                    <button onClick={this.lessProduct}>-</button>
                </div>
                <button onClick={this.submitOrder}>Submit</button>
            </div>
        );
    }
}

/*購物網站-抽取出的 HOC*/

//負責驗證登入狀態
const UserAuthHOC = (WrappedComponent) => {
    return class userAuthHOC extends Component {
        constructor() {
            super();
            this.state = {authPass: true, userToken: ''};
        }

        componentDidMount() {
            const token = localStorage.getItem('token');
            // if (token !== null) {
            //     this.setState({authPass: true, userToken: token});
            // } else {
            //     this.setState({authPass: false});
            // }
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
            return <WrappedComponent {...this.state} {...this.props} submitOrder={this.submitOrder}/>
        }
    }
};

/*購物網站-茶與糖果例子(使用HOC)*/
@UserAuthHOC
@ProductCountHOC
@SubmitOrderHOC
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

/*登入畫面*/
class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

/*商品訊息頁*/
class ProductPage extends Component {
    render() {
        return (
            <div>
                <TeaProduct id={'Tea01'} name={'Tea'} />
            </div>
        );
    }
}


/*統一呼叫 Api 的HOC*/
const CallApiHOC = (method, url, requestBody) => (WrappedComponent) => {
    return class callApiHOC extends Component {
        sendApiRequest = () => {
            let request = {
                body: JSON.stringify(requestBody),
                method: method,
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(url, request)
                .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出成功的 action
                .catch((error) => {return error});
        };

        render() {
            return <WrappedComponent {...this.state} {...this.props} sendApiRequest={this.sendApiRequest}/>
        }
    }
};

@CallApiHOC('post', 'https://productURL/Tea01', {product: {example: 'example'}}) // 無法動態的修改參數
class ProductComp extends Component {
    render() {
        const props = {...this.props};
        return (
            <div>
                <button onClick={props.submitOrder}>Submit</button>
            </div>
        );
    }
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ProductPage />
            </div>
        );
    }
}
