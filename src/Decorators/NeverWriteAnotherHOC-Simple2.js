import React from 'react';

const HOCA = (WrappedComponent) => {
    return class HOC extends React.Component {
        render() {
            return (
                <WrappedComponent {...this.props} userName='johnny'/>
            )
        }
    }
};

const HOCB = (WrappedComponent) => {
    return class HOC extends React.Component {
        render() {
            return (
                <WrappedComponent {...this.props} userName='ann'/>
            )
        }
    }
};

@HOCA
@HOCB
export default class UserComp extends React.Component {
    render() {
        return (
            <div>{this.props.userName}</div> // it shows 'ann'
        )
    }
}