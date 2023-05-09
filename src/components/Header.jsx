import React, { useContext, useState } from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'


export default function Header(props) {

    const naverId = localStorage.getItem('naverId');
    const isLoggedIn = !!naverId;

    const handleLogout = () => {
        // 로그아웃 처리를 합니다.
        localStorage.removeItem('naverId');
        // ...
    };

    const { state } = useContext(ProductContext);

    const logout = () => {
        window.location.reload();
    };


    const [burgerOn, setBurgerOn] = useState(false);

    const openBurgerPop = () => {
        setBurgerOn(true);
    }

    const closeBurgerPop = () => {
        setBurgerOn(false);
    }

    return (
        <div>
            <header className='header'>
                <div className="header_line"></div>
                <div className="header_wrap">
                    {/* <Link to='/' className='logo_box'> */}
                        <div className="header_logo">
                            <a href="/react_marshall_renewal" className='logo_box'>
                                <img
                                    src={process.env.PUBLIC_URL + `/img/Marshall_logo_${props.isReversed ? 'b' : 'w'}.png`}
                                    alt="button"
                                />
                            </a>
                        </div>
                    {/* </Link> */}
                    <ul className="main_menu">
                        <Link to='/product'><li className='menuli'>PRODUCT
                            <ul className='sub_menu'>
                                <Link to='/product'><li>스피커</li></Link>
                                <Link to='/product'><li>헤드폰</li></Link>
                                <Link to='/product'><li>이어폰</li></Link>
                                <Link to='/product'><li>악세사리</li></Link>
                            </ul>
                        </li></Link>
                        <Link to='/about'><li className='menuli'>ABOUT
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
                    <div className="burger_btn"
                        onClick={openBurgerPop}
                    >
                        <img src={`${process.env.PUBLIC_URL}/img/burger_btn02.svg`} alt="이미지" />
                    </div>
                </div>

                {/* <div className="burger_menu" style={{ display: burgerOn && "block", transition: "all 1s" }}> */}
                <div className="burger_menu" style={{ display: burgerOn ? "block" : "none", transition: "all 1s" }}>
                    <div className="burger_text_wrap">

                        <div className="burger_close_btn"
                            onClick={closeBurgerPop}
                        >
                            <img src={`${process.env.PUBLIC_URL}/img/burger_close_btn.svg`} alt="이미지" />
                        </div>

                        <ul className="burger_main_menu">
                            {/* <Link to="/" onClick={() => closeBurgerPop(false)}>Go Home</Link> */}
                            <Link to='/product' onClick={() => closeBurgerPop()}><li>PRODUCT
                                <ul className='burger_sub_menu'>
                                    <Link to='/product'><li>스피커
                                        <div className="sub_line"></div>
                                        </li></Link>
                                    <Link to='/product'><li>헤드폰
                                        <div className="sub_line"></div>
                                        </li></Link>
                                    <Link to='/product'><li>이어폰
                                        <div className="sub_line"></div>
                                        </li></Link>
                                    <Link to='/product'><li>악세사리
                                        <div className="sub_line last_line"></div>
                                        </li></Link>
                                </ul>
                            </li></Link>
                            <Link to='/about' onClick={() => closeBurgerPop()}><li>ABOUT
                                <ul className='burger_sub_menu'>
                                    <Link to='/about'><li>스토리
                                        <div className="sub_line"></div>
                                        </li></Link>
                                    <Link to='/about'><li>매장찾기
                                        <div className="sub_line last_line"></div>
                                        </li></Link>
                                </ul>
                            </li></Link>
                        </ul>

                        <div className="burger_login" onClick={() => closeBurgerPop()}>
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
