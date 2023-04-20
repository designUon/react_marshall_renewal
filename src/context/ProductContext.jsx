import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Acton-ii", price: 500000, image: "/001_marshall-acton-ii-black.png" },
        { id: 2, name: "Acton-iii", price: 450000, image: "/002_marshall-acton-iii-black.png" },
        { id: 3, name: "Stanmore-iii", price: 400000, image: "/003_marshall-stanmore-iii-black.png" },
        { id: 4, name: "Woburn-ii", price: 350000, image: "/004_pl-marshall-speakers-woburn-ii-black-1700x1700.png" },
        { id: 5, name: "Stanmore-ii", price: 300000, image: "/005_pl-marshall-speakers-stanmore-ii-black-1700x1700.png" },
        { id: 6, name: "Stockwell-ii", price: 250000, image: "/006_marshall-stockwell-ii-black-brass.png" },
        { id: 7, name: "Emberton-ii", price: 200000, image: "/007_marshall-emberton-ii-black-brass.png" },
    ].map(product => {
        return {
            ...product,
            image: process.env.PUBLIC_URL + product.image
        };
    }));

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
export { ProductContextProvider };