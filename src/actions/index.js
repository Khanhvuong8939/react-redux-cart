import * as Types from './../constants/ActionTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product, 
        quantity
    }
}