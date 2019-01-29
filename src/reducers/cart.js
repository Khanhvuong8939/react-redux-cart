import * as Types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'))

const initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findIndexById(state, product.id)
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({ product, quantity })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default:
            return [...state]
    }
}

var findIndexById = (array, id) => {
    var result = -1;
    if (array.length > 0) {
        array.forEach((item, index) => {
            console.log(item.product.id)
            if (item.product.id === id) { return result = index; }
        });
    }
    return result
}

export default cart;