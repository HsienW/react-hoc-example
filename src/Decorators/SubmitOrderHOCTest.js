import React from 'react';

//負責送出訂購資訊的 HOC
const SubmitOrderHOC = (test, hello) => (WrappedComponent) => {
    console.log('詭異詭異詭異詭異');
    console.log(test, hello);
    return class submitOrderHOC extends React.Component {
        submitOrder = (token) => {
            console.log('送出');
            console.log(test, hello);
            let request = {
                body: JSON.stringify({token: token, product: {id: this.props.id, number: this.props.count}}),
                method: 'POST',
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(`https://productURL/${test}`, request)
                .then((respond) => {
                    // this.props.sendSuccessAction(respond);
                }) // 送出訂購成功的 action
                .catch((error) => {return error});
        };

        render() {
            return <WrappedComponent {...this.state} {...this.props} submitOrder={this.submitOrder}/>
        }
    }
};

export default SubmitOrderHOC;
