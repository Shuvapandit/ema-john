import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shipping=0;
    
    for (const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;
       
    }
   
    const tax=parseFloat((total*0.1).toFixed(2));
    const grtandTotal=tax+shipping+total;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Iteams:{cart.length}</p> 
            <p>Total Price:${total}</p>
            <p> Total Shipping: {shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{grtandTotal}</h5>
            
        </div>
    );
};

export default Cart;