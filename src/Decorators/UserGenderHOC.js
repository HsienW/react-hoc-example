import React from 'react';

const UserGenderHOC = (gender) => (WrappedComponent) => {
    return class userGenderHOC extends React.Component {
        constructor() {
            super();
            this.state = {
                isMaleIcon: false,
                gender: ''
            };
        }

        componentDidMount() {
            this.setState({gender: gender});
            if (gender === 'Male') {
                this.setState({isMaleIcon: true});
            }
        }

        render() {
            return (
                <WrappedComponent gender={this.state.gender} isMaleIcon={this.state.isMaleIcon} />
            );
        }
    }
};

export default UserGenderHOC;

