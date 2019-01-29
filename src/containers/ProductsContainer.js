import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';

import { connect } from 'react-redux';

class ProductsContainer extends Component {
    render() {
        let { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
    showProduct = (products) => {
        let result = [];
        if (products.length > 0) {
            products.map((product, index) => {
                return result.push(<Product key={index} product={product} />)
            })
        }
        return result;
    }
}



var mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps, null)(ProductsContainer);