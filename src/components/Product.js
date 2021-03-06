import React, { Component } from 'react';

class Product extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className='col-lg-4 col-md-6 mb-r'>
                <div className='card text-center card-cascade narrower'>
                    <div className='view overlay hm-white-slight z-depth-1'>
                        <img src={product.image}
                            className='img-fluid' alt='' />
                        <a>
                            <div className='mask waves-light waves-effect waves-light'></div>
                        </a>
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className='rating'>
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p className='card-text'>
                            {product.manufacturer}
                        </p>
                        <div className='card-footer'>
                            <span className='left'>{product.price}$</span>
                            <span className='right'>
                                <a  
                                    onClick={()=>this.onAddToCart(product)}
                                    className='btn-floating blue-gradient'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title=''
                                    data-original-title='Add to Cart'>
                                    <i className='fa fa-shopping-cart'></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    showRating = (rating) => {
        var ratingStar = []
        for (let i = 0; i < rating; i++) {
            ratingStar.push(<i key={i} className='fa fa-star' />)
        }
        for (let j = 0; j < 5 - rating; j++) {
            ratingStar.push(<i key={j + 5} className='fa fa-star-o' />)
        }
        return ratingStar;
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }
}


export default Product;