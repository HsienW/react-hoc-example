import React from 'react';
import MaleComp from '../Components/MaleComp';
import FemaleComp from '../Components/FemaleComp';
// import BaseComponent from '../Components/BaseComponent';
// import UserGenderHOC from '../Decorators/UserGenderHOC';
// import CountHOC from '../Decorators/CountHOC';
//
// const UserDataA = UserGenderHOC('Male')(CountHOC(BaseComponent));
// const UserDataB = UserGenderHOC('Female')(CountHOC(BaseComponent));

export default class UserDataListView extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <MaleComp />
                <FemaleComp />
            </div>
        );
    }
}