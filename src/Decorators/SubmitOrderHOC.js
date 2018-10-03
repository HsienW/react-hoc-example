import React from 'react';

//負責送出訂購資訊的 HOC
const SubmitOrderHOC = (WrappedComponent) => {
    return class submitOrderHOC extends React.Component {
        componentDidMount() {
            console.log('送出訂單');
        }

        // submitOrder = (token) => {
        //     let request = {
        //         body: JSON.stringify({token: token, product: {id: this.props.id, number: this.props.count}}),
        //         method: 'POST',
        //         headers: new Headers(),
        //         mode: 'cors',
        //         cache: 'default'
        //     };
        //     fetch(`https://productURL/+${this.props.id}`, request)
        //         .then((respond) => {this.props.sendSuccessAction(respond);}) // 送出訂購成功的 action
        //         .catch((error) => {return error});
        // };

        render() {
            return <WrappedComponent {...this.state} {...this.props} submitOrder={this.submitOrder}/>
        }
    }
};

export default SubmitOrderHOC;
