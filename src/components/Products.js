import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux';

class Products extends Component {
    render() {
        let { products } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {this.showProduct(products)}
                </div>
            </section>
        );
    }
    showProduct = (products) => {
        let result = [];
        if (products.length > 0) {
            products.map((product, index) => {
                return result.push(<Product key={product.id} index={index} product={product} />)
            })
        }
        return result;
    }
}

var mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps, null)(Products);