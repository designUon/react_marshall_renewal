import React, { useContext } from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'


export default function Header(props) {

    const { state } = useContext(ProductContext);

    const logout = () => {
        window.location.reload();
    };

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
                                <Link to='/product/speaker'><li>스피커</li></Link>
                                <Link to='/product/headphone'><li>헤드폰</li></Link>
                                <Link to='/product/earphone'><li>이어폰</li></Link>
                                <Link to='/product/accessory'><li>악세사리</li></Link>
                            </ul>
                        </li></Link>
                        <Link to='/about'><li>ABOUT
                            <ul className='sub_menu'>
                                <Link to='/about/story'><li>스토리</li></Link>
                                <Link to='/about/store'><li>매장찾기</li></Link>
                            </ul>
                        </li></Link>
                    </ul>
                </div>
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
            </header>
        </div>
    )
}
