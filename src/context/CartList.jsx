import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const CartList = () => {
    const { cartList } = useContext(CartContext);

    return (
        <div>
            {cartList.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default CartList;
