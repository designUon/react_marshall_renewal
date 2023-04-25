import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'



export default function Cart() {

    const { state, action } = useContext(ProductContext);

    const deleteCart = (id) => {
        const newCartList = state.cartlist.filter((cart) => (cart.id !== id));
        action.setCartlist(newCartList);
    }

    return (
        <div>
            {/* <h3>CartList</h3> */}
            <ul className='cart_wrap'>
                {
                    state.cartlist.map((product) => (
                        <li key={product.id} className='cart_box'>

                            <div className="cart_img_box">
                                <img src={ product.image } alt = {product.name} />
                            </div>
                            
                            <div className="cart_text">
                                <span className='cart_name'>{product.name}</span>
                                <p className='cart_price'>{product.price}</p>
                                <button className='cart_del_btn' onClick={() => { deleteCart(product.id) }}
                                >X</button>
                            </div>


                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
