import React from 'react';
// import ProductComp from '../Components/ProductComp';
import ProductCompUsedHoc from '../Components/ProductCompUsedHoc';
// import ProductCompNew from '../Components/ProductCompUsedHoc';
// import UserAuthHOC from '../Decorators/UserAuthHOC';
// import ProductCountHOC from '../Decorators/ProductCountHOC';
// import SubmitOrderHOC from '../Decorators/SubmitOrderHOC';
// import TestProductCompUsedHoc from '../Components/TestProductCompUsedHoc';
// import TestProductCount from '../Components/TestProductCount';

// const ProductItemA = UserAuthHOC(ProductCountHOC(SubmitOrderHOC(ProductCompNew)));

export default class ProductItemInfo extends React.Component {
    render() {
        return (
            <ProductCompUsedHoc />
        );
    }
}

// export default class ProductItemInfo extends React.Component {
//     render() {
//         return (
//             <ProductCompUsedHoc id={'ABC123456'} name={'Name'} image={'Image'} content={'Content'}/>
//         );
//     }
// }
