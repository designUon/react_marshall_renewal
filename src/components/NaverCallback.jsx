import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NaverCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');
        const state = searchParams.get('state');

        // code와 state를 이용하여 access token을 발급받는 API를 호출하고,
        // 성공적으로 access token을 받았다면, 네이버 아이디 정보를 가져옵니다.
        // ...

        // 로그인에 성공한 경우 localStorage에 네이버 아이디 정보를 저장합니다.
        const naverId = '네이버 아이디 정보'; // 임시로 네이버 아이디 정보를 설정합니다.
        localStorage.setItem('naverId', naverId);

        // 로그인에 성공하면 '/' 페이지로 이동합니다.
        navigate('/');
    }, [location, navigate]);

    return <div>네이버 로그인 처리 중...</div>;
};

export default NaverCallback;
