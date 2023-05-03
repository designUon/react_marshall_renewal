import React, { useContext, useState } from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'


export default function Header(props) {

    const { state } = useContext(ProductContext);

    const logout = () => {
        window.location.reload();
    };


    const[burgerOn, setBurgerOn] = useState(false);

    const openBurgerPop=()=>{
        setBurgerOn(true);
    }

    const closeBurgerPop=()=>{
        setBurgerOn(false);
    }

    return (
        <div>
            <header>
                <div className="header_wrap">
                    {/* <Link to='/' className='logo_box'> */}
                    <a href="/react_marshall_renewal" className='logo_box'>

                        <div className="header_logo">
                            <img
                                src={process.env.PUBLIC_URL + `/Marshall_logo_${props.isReversed ? 'b' : 'w'}.png`}
                                alt="button"
                            />
                        </div>
                    </a>
                    {/* </Link> */}
                    <ul className="main_menu">
                        <Link to='/product'><li>PRODUCT
                            <ul className='sub_menu'>
                                <Link to='/product'><li>스피커</li></Link>
                                <Link to='/product'><li>헤드폰</li></Link>
                                <Link to='/product'><li>이어폰</li></Link>
                                <Link to='/product'><li>악세사리</li></Link>
                            </ul>
                        </li></Link>
                        <Link to='/about'><li>ABOUT
                            <ul className='sub_menu'>
                                <Link to='/about'><li>스토리</li></Link>
                                <Link to='/about'><li>매장찾기</li></Link>
                            </ul>
                        </li></Link>
                    </ul>
                    <div className="header_login">
                        {
                            state.user.login ?
                                // <span><b>{state.user.writer}</b>님 로그인 성공!</span>
                                <Link to='/'
                                    onClick={logout}
                                >LOGOUT</Link>
                                : <Link to='/login'>LOGIN</Link>
                        }
                        <Link to='/cart'>CART</Link>
                        <Link to='/mypage'>MYPAGE</Link>
                    </div>
                </div>

                <div>
                    <button className="burger_btn"
                        onClick={openBurgerPop}
                    >
                        <img src={`${process.env.PUBLIC_URL}/burger_btn02.svg`} alt="이미지" />
                    </button>
                </div>

                <div className="burger_menu" style={{display:burgerOn&&"block", transition:"all 1s"}}>

                    <div className="burger_text_wrap">

                        <button className="burger_close_btn"
                            onClick={closeBurgerPop}
                        >
                            <img src={`${process.env.PUBLIC_URL}/burger_close_btn.svg`} alt="이미지" />
                        </button>

                        <ul className="burger_main_menu">
                            <Link to='/product'><li>PRODUCT
                                <ul className='burger_sub_menu'>
                                    <Link to='/product'><li>스피커</li></Link>
                                    <Link to='/product'><li>헤드폰</li></Link>
                                    <Link to='/product'><li>이어폰</li></Link>
                                    <Link to='/product'><li>악세사리</li></Link>
                                </ul>
                            </li></Link>
                            <Link to='/about'><li>ABOUT
                                <ul className='burger_sub_menu'>
                                    <Link to='/about'><li>스토리</li></Link>
                                    <Link to='/about'><li>매장찾기</li></Link>
                                </ul>
                            </li></Link>
                        </ul>

                        <div className="burger_login">
                            {
                                state.user.login ?
                                    // <span><b>{state.user.writer}</b>님 로그인 성공!</span>
                                    <Link to='/'
                                        onClick={logout}
                                    >LOGOUT</Link>
                                    : <Link to='/login'>LOGIN</Link>
                            }
                            <Link to='/cart'>CART</Link>
                            <Link to='/mypage'>MYPAGE</Link>
                        </div>

                    </div>

                </div>
            </header>

        </div>
    )
}
