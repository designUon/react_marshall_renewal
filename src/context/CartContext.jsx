import React, { createContext, useState } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (product) => {
        setCartList([...cartList, product]);
    };

    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartList([]);
    };

    const value = {
        cartList,
        addToCart,
        removeItem,
        clearCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
