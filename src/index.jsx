import React from 'react';
import ReactDOM from 'react-dom';
import SimpleHOC from './Example/SimpleHOC';
import GenderHOC from './Example/GenderHOC';
import CombinationHOC from './Example/CombinationHOC';
import UsedDecoratorHOC from './Example/UsedDecoratorHOC';
import ShoppingSiteUsedHOC from './Example/ShoppingSiteUsedHOC';
import CallApiHOC from './Example/CallApiHOC';
import * as ShoppingSite from './Example/ShoppingSite';


ReactDOM.render(
    <div>
        <SimpleHOC />
        <GenderHOC />
        <CombinationHOC />
        <UsedDecoratorHOC />
        <ShoppingSite.FruitsProduct />
        <ShoppingSiteUsedHOC />
        <CallApiHOC />
    </div>, document.getElementById('root'));
