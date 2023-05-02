import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {

    const navigate = useNavigate();

    const value = useContext(ProductContext);

    const [likedProducts, setLikedProducts] = useState([]);

    const cartaddCheck =()=>{
        if(window.confirm("장바구니에 추가 하시겠습니까?")) {
            navigate('/cart');
        } else {
            navigate('/product');
        }
    }

    const cartClick = (product) => {

        // 값이 있으면 삭제
        if (value.state.cartlist.find((cart) => (cart.id === product.id))) {

            // filter를 통해서 삭제
            // id가 같다면 제외하고 배열생성
            const newcartlist = value.state.cartlist.filter(
                (cart) => (cart.id !== product.id))
            value.action.setCartlist(newcartlist);
        } else {
            // 값이 없으면 추가
            // 클릭했을 때 값 추가 >> 매개변수로 받아오기
            const newcart = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            }
            const newCartlist = value.state.cartlist.concat(newcart);
            value.action.setCartlist(newCartlist);
        }
        
        cartaddCheck();

    }



    const [ref, inView, entry] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const isVisible = entry?.isIntersecting;



    // // ---------------------------------------------------------------------------------------

    // const likeClick = (productId) => {
    //     if (likedProducts.includes(productId)) {
    //         setLikedProducts(likedProducts.filter(id => id !== productId));
    //     } else {
    //         setLikedProducts([...likedProducts, productId]);
    //     }
    // };


    // // ---------------------------------------------------------------------------------------


    // const likeButton = (productId) => {
    //     const isLiked = likedProducts.includes(productId);
    //     const imageName = isLiked ? 'like.svg' : 'unlike.svg';
    //     const buttonText = isLiked ? 'Unlike' : 'Like';
    //     return (
    //         <button className="like_btn" onClick={() => likeClick(productId)}>
    //             <img src={process.env.PUBLIC_URL + `/${imageName}`} alt={buttonText} />
    //         </button>
    //     );
    // };

    const likeClick = (product) => {

        if (value.state.likelist.find((like) => (like.id === product.id))) {

            const newlikelist = value.state.likelist.filter(
                (like) => (like.id !== product.id))
            value.action.setLikelist(newlikelist);
        } else {
            const newlike = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            }
            const newLikelist = value.state.likelist.concat(newlike);
            value.action.setLikelist(newLikelist);
        }

        // navigate('/mypage');
    }

    // // -------------------------------------------------------------------------------------


    return (
        <div>
            <ul className={`productlist_wrap ${isVisible ? 'fade-in' : ''}`} ref={ref}>
                {
                    // value.state.productList.map((product) => (
                    value.state.productList.map((product) => (
                        // <li key={product.id}>
                        <li key={product.id} className='productlist_box'>

                            <img src={product.image} alt={product.name} className="productlist_image" />
                            <span>{product.name}</span>
                            <p>{product.price.toLocaleString()}</p>

                            {/* <span onClick={() => { cartClick(product) }} >
                                <span><b>+</b></span>
                            </span> */}

                            <div className="product_btns">
                                {/* {likeButton(product.id)} */}
                                <div onClick={() => { likeClick(product) }} className='like_btn'>
                                    {
                                        // value.state.user.login &&
                                        (value.state.likelist.find((like) => (like.id === product.id))
                                            ? <img src={process.env.PUBLIC_URL + `/like.svg`} alt="버튼" />: <img src={process.env.PUBLIC_URL + `/unlike.svg`} alt="버튼" />)
                                    }
                                </div>
                                <div className="cart_btn"
                                    onClick={() => { cartClick(product) }}
                                >
                                    <img src={process.env.PUBLIC_URL + "/cart.svg"} alt="button" />
                                </div>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
