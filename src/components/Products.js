import React, { Component } from 'react';
import Product from './Product';

import { connect } from 'react-redux';

class Products extends Component {
    render() {
        console.log(this.props.products)
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        );
    }
}

var mapStateToProps = state => {
    return { products: state.products }
}

export default connect(mapStateToProps, null)(Products);