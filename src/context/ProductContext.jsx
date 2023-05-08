import React, {useState} from "react";

const ProductContext = React.createContext("");

const ProductContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([
        { id: 1, name: "Acton-ii", price: 440000, image: "/img/001_marshall-acton-ii-black.png" },
        { id: 2, name: "Acton-iii", price: 460000, image: "/img/002_marshall-acton-iii-black.png" },
        { id: 3, name: "Stanmore-iii", price: 600000, image: "/img/003_marshall-stanmore-iii-black.png" },
        { id: 4, name: "Woburn-ii", price: 880000, image: "/img/004_pl-marshall-speakers-woburn-ii-black-1700x1700.png" },
        { id: 5, name: "Stanmore-ii", price: 600000, image: "/img/005_pl-marshall-speakers-stanmore-ii-black-1700x1700.png" },
        { id: 6, name: "Stockwell-ii", price: 399000, image: "/img/006_marshall-stockwell-ii-black-brass.png" },
        { id: 7, name: "Emberton-ii", price: 289000, image: "/img/007_marshall-emberton-ii-black-brass.png" },
    ].map(product => {
        return {
            ...product,
            price: product.price,
            // price: product.price.toLocaleString(),
            image: process.env.PUBLIC_URL + product.image
        };
    }));



    const [cartlist, setCartlist] = useState(
        [
            // {
            //     id : 1,
            //     name : "Acton-ii",
            //     image: "/001_marshall-acton-ii-black.png"
            // }
        ]
    )
    
    const [likelist, setLikelist] = useState([]);

    const [id, setId] = useState();
    const [user, setUser] = useState(
        {
            userId : "user",
            login : false,
        }
    )


    const value = {
        state : {productList, cartlist, likelist, id, user},
        action : {setProductList, setCartlist, setLikelist, setId, setUser}
    }


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContextProvider };
export default ProductContext;