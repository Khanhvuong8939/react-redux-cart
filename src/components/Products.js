import React, { Component } from 'react';
import Product from './Product';

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
                return result.push(<Product key={index} product={product} />)
            })
        }
        return result;
    }
}

export default Products;