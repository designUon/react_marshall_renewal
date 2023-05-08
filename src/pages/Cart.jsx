import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../context/ProductContext';

export default function Cart() {

    // const {cid} = props.cart;
    const { state, action } = useContext(ProductContext);
    const [checkedItems, setCheckedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // id값 말고 cid값으로 삭제
    const deleteCart = (cid) => {
        if (!state.cartlist.find((cart) => cart.cid === cid)) {
            return;
        }
        const newCartList = state.cartlist.filter((cart) => cart.cid !== cid);
        action.setCartlist(newCartList);
        setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== String(cid)));
    };

    const handleCheckboxChange = (event) => {
        const item = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
            if (!state.cartlist.find((cart) => cart.cid === parseInt(item))) {
                return;
            }
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
        }
    };

    useEffect(() => {
        let price = 0;
        checkedItems.forEach((item) => {
            const cartItem = state.cartlist.find((cart) => cart.cid === parseInt(item));
            if (cartItem) {
                price += cartItem.price;
            }
        });
        setTotalPrice(price);
    }, [checkedItems, state.cartlist]);

    return (
        <div>
            <p className="cart_title">CART LIST</p>
            <ul className="cart_wrap">
                {state.cartlist.map((product) => (
                    <li key={product.cid} className="cart_box">
                        <input
                            type="checkbox"
                            name={product.cid}
                            value={product.cid}
                            className="cart_check"
                            onChange={handleCheckboxChange}
                        />
                        <div className="cart_img_box">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="cart_text">
                            <span className="cart_name">{product.name}</span>
                            <p className="cart_price">{product.price.toLocaleString()}</p>
                            <button className="cart_del_btn" onClick={() => deleteCart(product.cid)}>
                                X
                            </button>
                        </div>
                    </li>
                ))}
                <ul className="total_box">
                    <li className="total_calc">{totalPrice.toLocaleString()}</li>
                    <li className="total_ea">{checkedItems.length}EA</li>
                    <li>Total.</li>
                </ul>
            </ul>
            <div className="order_btn">Order</div>
        </div>
    );
}
