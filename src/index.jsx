import React from 'react';
import ReactDOM from 'react-dom';
import SimpleHOC from './Example/SimpleHOC';
import GenderHOC from './Example/GenderHOC';
import CombinationHOC from './Example/CombinationHOC';
import UsedDecoratorHOC from './Example/UsedDecoratorHOC';
import ShoppingSite from './Example/ShoppingSite';
import ShoppingSiteUsedHOC from './Example/ShoppingSiteUsedHOC';
import CallApiHOC from './Example/CallApiHOC';


ReactDOM.render(
    <div>
        <SimpleHOC />
        <GenderHOC />
        <CombinationHOC />
        <UsedDecoratorHOC />
        <ShoppingSite />
        <ShoppingSiteUsedHOC />
        <CallApiHOC />
    </div>, document.getElementById('root'));
