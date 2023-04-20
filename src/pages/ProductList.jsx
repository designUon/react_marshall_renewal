import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { useInView } from 'react-intersection-observer';

import '../css/product.css'


const ProductList = () => {
    const { products } = useContext(ProductContext);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const isVisible = entry?.isIntersecting;

    return (
        <div className={`productlist_wrap ${isVisible ? 'fade-in' : ''}`} ref={ref}>
            {products.map((product) => (
                <div key={product.id} className='productlist_box'>
                    <img src={product.image} alt={product.name} className="productlist_image"/>
                    <span>{product.name}</span>
                    <p>{product.price}</p>
                    <div className="product_btns">
                        <div className="like_btn"><img src={process.env.PUBLIC_URL + "/unlike.svg"} alt="button" /></div>
                        <div className="cart_btn"><img src={process.env.PUBLIC_URL + "/cart.svg"} alt="button" /></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;