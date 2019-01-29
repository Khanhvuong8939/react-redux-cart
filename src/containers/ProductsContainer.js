import React, { Component } from 'react';
import Products from './../components/Products';

import { connect } from 'react-redux';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products products={products} />
        );
    }
}

var mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps, null)(ProductsContainer);