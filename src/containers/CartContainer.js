import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as msg from './../constants/Message';

import Cart from './../components/Cart';
import CartItem from './../components/CartItem';

export class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
        )
    }

    showCartItem = cart => {
        var result = msg.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                    />
                )
            })
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
                manufacturer: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);
