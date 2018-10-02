import React from 'react';
import ProductCompNew from '../Components/ProductCompUsedHoc';
import UserAuthHOC from '../Decorators/UserAuthHOC';
import ProductCountHOC from '../Decorators/ProductCountHOC';
import SubmitOrderHOC from '../Decorators/SubmitOrderHOC';

const ProductItemA = UserAuthHOC(ProductCountHOC(SubmitOrderHOC(ProductCompNew)));

export default class ProductItemInfo extends React.Component {
    render() {
        return (
            <ProductItemA id={'ABC123456'} name={'Name'} image={'Image'} content={'Content'}/>
        );
    }
}