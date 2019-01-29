var initialState = [
    {
        id: 1,
        name: 'Iphone 6s',
        image: '',
        rating: 5,
        manufacturer: 'Apple',
        inventory: 10,
        price: 500
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: '',
        rating: 5,
        manufacturer: 'Apple',
        inventory: 10,
        price: 700
    },
    {
        id: 3,
        name: 'Iphone X',
        image: '',
        rating: 5,
        manufacturer: 'Apple',
        inventory: 10,
        price: 1000
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        
        default: return state;
    }
}

export default products;