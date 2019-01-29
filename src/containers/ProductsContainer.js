import React, { Component } from 'react';
import Products from './../components/Products';
import Product from './../components/Product';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            manufacturer: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}


var mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps, null)(ProductsContainer);