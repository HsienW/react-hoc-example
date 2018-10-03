import React from 'react';

//負責呼叫所有 API 的 HOC (接受三個參數)
const CallApiHOC = (method, url, requestBody) => (WrappedComponent) => {
    return class callApiHOC extends React.Component {
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

export default CallApiHOC;
