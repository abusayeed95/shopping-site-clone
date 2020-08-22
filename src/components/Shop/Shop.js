import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../../components/Product/Product'

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product>)
                }

            </div>
            <div className="cart-container">
                <h3>this is cart</h3>
                <h5>Order Summery: {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;