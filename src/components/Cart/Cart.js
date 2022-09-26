import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax; 
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {cart.length}</h3>
            <h4>Total Price: $ {total}</h4>
            <h5>Total Shipping: $ {shipping}</h5>
            <h5>Tax: $ {tax}</h5>
            <h3>Grand Total:  $ {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;