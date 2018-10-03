import React from 'react';
import Login from '../Containers/LoginView';

//負責驗證登入狀態的 HOC
const UserAuthHOC = (WrappedComponent) => {
    return class userAuthHOC extends React.Component {
        constructor() {
            super();
            this.state = {authPass: true};
        }

        componentDidMount() {
            console.log('驗證身分');
            const userToken = localStorage.getItem('token');
            if (userToken !== null) {
                this.setState({authPass: true});
            } else {
                this.setState({authPass: false});
            }
        }

        render() {
            if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }
};

export default UserAuthHOC;
