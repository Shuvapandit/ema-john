
import React, { useEffect, useState }  from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useState([])
    
  
    const handleAddToCart=(product)=>{
        console.log(product)
        /* cart.push(product) */
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }

    
    return (
        <div className='shop-container'>
        <div className='Product-container'>
           
            {
               products.map(product =><Product 
                key={product.id}
               product={product}
               handleAddToCart={handleAddToCart}>

               </Product>)
           }  
           
        </div>
        <div className='Cart-container'>
            <Cart cart={cart}>
            <Link to="/order">
                        <button>
                            Proceed Checkout
                            </button>
                    </Link>
            </Cart>
           

        </div>


          
            
        </div>
    );
};

export default Shop;