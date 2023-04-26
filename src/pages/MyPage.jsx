import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'



export default function MyPage() {

    const { state, action } = useContext(ProductContext);

    const deleteLike = (id) => {
        const newLikeList = state.likelist.filter((like) => (like.id !== id));
        action.setLikelist(newLikeList);
    }

    return (
        <div>
            <p className='like_title'>LIKE LIST</p>
            <ul className='like_wrap'>
                {
                    state.likelist.map((product) => (
                        <li key={product.id} className='like_box'>

                            <div className="like_img_box">
                                <img src={ product.image } alt = {product.name} />
                            </div>
                            
                            <div className="like_text">
                                <span className='like_name'>{product.name}</span>
                                {/* <p className='like_price'>{product.price}</p> */}
                                <button className='like_del_btn' onClick={() => { deleteLike(product.id) }}
                                ><img src={process.env.PUBLIC_URL + `/like.svg`} alt="버튼" /></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
