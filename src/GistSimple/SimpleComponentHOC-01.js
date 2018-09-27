import React from "react";

export default class SimpleComponent extends React.Component {
    constructor() {
        super();
        this.state = {data: ''};
    }

    componentDidMount() {
        const userToken = localStorage.getItem('token');
        let request = {
            body: JSON.stringify({token: userToken}),
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://demo', request)
            .then((respond) => {this.setState({data: respond})})
            .catch((error) => {return error});
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item) => {return (<div>item</div>)})
                }
            </div>
        );
    }
}
