import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
;


const Product = (props) => {
    const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p className='bold'>Price: $ {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratngs: {ratings}</small></p>
           </div>
           <button className='btn-cart' onClick={() => handleAddToCart(product)}><p className='bold'>Add to cart</p> &nbsp; &nbsp; <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;