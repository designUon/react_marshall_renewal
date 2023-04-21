import React, { useContext, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { useInView } from 'react-intersection-observer';

import '../css/product.css'


const ProductList = () => {
    const { products } = useContext(ProductContext);
    const [likedProducts, setLikedProducts] = useState([]);
    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const isVisible = entry?.isIntersecting;

    const handleLikeClick = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    const renderLikeButton = (productId) => {
        const isLiked = likedProducts.includes(productId);
        const imageName = isLiked ? 'like.svg' : 'unlike.svg';
        const buttonText = isLiked ? 'Unlike' : 'Like';
        return (
            <button className="like_btn" onClick={() => handleLikeClick(productId)}>
                <img src={process.env.PUBLIC_URL + `/${imageName}`}  alt={buttonText} />
            </button>
        );
    };

    return (
        <div className={`productlist_wrap ${isVisible ? 'fade-in' : ''}`} ref={ref}>
            {products.map((product) => (
                <div key={product.id} className='productlist_box'>

                    <img src={product.image} alt={product.name} className="productlist_image"/>
                    <span>{product.name}</span>
                    <p>{product.price}</p>

                    <div className="product_btns">
                        {renderLikeButton(product.id)}
                        <div className="cart_btn"
                            onClick={()=>{
                                alert('장바구니에 추가하시겠습니까?')
                            }}
                        >
                            <img src={process.env.PUBLIC_URL + "/cart.svg"} alt="button" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
