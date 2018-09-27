import React from 'react';

const GetDataHOC = (Component, reqUrl, reqMethod) => {
    return class getDataContainer extends React.Component {
        constructor() {
            super();
            this.state = {data: []}
        }

        componentDidMount() {
            const userToken = localStorage.getItem('token');
            let request = {
                body: JSON.stringify({token: userToken}),
                method: reqMethod,
                headers: new Headers(),
                mode: 'cors',
                cache: 'default'
            };
            fetch(reqUrl, request)
                .then((respond) => {this.setState({data: respond})})
                .catch((error) => {return error});
        }

        render() {
            return(
                <Component data={this.state.data} />)
        }
    }
};

export default GetDataHOC;