import * as types from './../constants/ActionTypes';

const initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 6s',
            image: 'https://cdn.tgdd.vn/Products/Images/42/87842/iphone-6s-32gb-vang-dong-1-400x400.png',
            rating: 5,
            manufacturer: 'Apple',
            inventory: 10,
            price: 500
        },
        quantity: 3
    }
]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log('damn it');
            return [...state]
        default: return [...state]
    }
}

export default cart;