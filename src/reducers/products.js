var initialState = [
    {
        id: 1,
        name: 'Iphone 6s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/87842/iphone-6s-32gb-vang-dong-1-400x400.png',
        rating: 5,
        manufacturer: 'Apple',
        inventory: 10,
        price: 500
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-400x460.png',
        rating: 3,
        manufacturer: 'Apple',
        inventory: 10,
        price: 700
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51XDRzsKL9L._SY550_.jpg',
        rating: 4,
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