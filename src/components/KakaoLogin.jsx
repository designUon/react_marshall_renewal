import React, { useState, useContext, useEffect, useRef } from 'react'
import ProductContext from '../context/ProductContext'
import { useNavigate } from 'react-router-dom';

export default function KakaoLogin() {

    const kakaoLoginBtnRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const initKakaoAPI = async () => {
            try {
                if (!window.Kakao.isInitialized()) {
                    await window.Kakao.init('370c82bcabaa0eadcba994cdbf1331e3');
                }

                const onSuccess = (authObj) => {
                    setIsLoggedIn(true);
                };

                const onFailure = (err) => {
                    setIsLoggedIn(false);
                };

                window.Kakao.Auth.createLoginButton({
                    container: kakaoLoginBtnRef.current,
                    success: onSuccess,
                    fail: onFailure,
                });
            } catch (error) {
                console.error(error);
            }
        };

        initKakaoAPI();
    }, []);

    const navigate = useNavigate();

    const [writer, setWriter] = useState();
    const { action } = useContext(ProductContext);

    const onlogin = (e) => {
        e.preventDefault();

        const newUser = {
            writer: writer,
            login: true,
        };

        action.setUser(newUser);

        navigate('/mypage');
    };

    const onLogout = () => {
        window.Kakao.Auth.logout(() => {
            setIsLoggedIn(false);
            window.Kakao.Auth.cleanup();
        });
    };

    return (
        <div className='login_wrap'>
            <div ref={kakaoLoginBtnRef} className="kakao_login">KAKAO LOGIN</div>
            {/* <form className="login_box">
                <input type="text" placeholder='ID' className='input_id'
                    onChange={(e) => { setWriter(e.target.value) }}
                />
                <br />
                <button type="submit" className="login_btn"
                    onClick={isLoggedIn ? onLogout : onlogin}
                >
                    {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
                </button>
            </form> */}
        </div>
    )
}
