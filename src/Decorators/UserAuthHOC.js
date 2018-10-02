import React from 'react';
import Login from '../Containers/LoginView';

const UserAuthHOC = (WrappedComponent) => {
    return class userAuthHOC extends React.Component {
        constructor() {
            super();
            this.state = {authPass: true};
        }

        userAuthCheck = () => {
            const userToken = localStorage.getItem('token');
            if (userToken !== null) {
                this.setState({authPass: true});
            } else {
                this.setState({authPass: false});
            }
        };

        render() {
            if (!this.state.authPass) {return (<Login/>);} // 驗證不通過 回登入頁面
            return <WrappedComponent {...this.state} {...this.props} userAuthCheck={this.userAuthCheck}/>
        }
    }
};

export default UserAuthHOC;
