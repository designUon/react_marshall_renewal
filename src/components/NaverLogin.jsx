import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NaverLogin = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        const clientId = 'dlt4ivmCKGbs5lqXUwro';
        const redirectURI = encodeURIComponent('http://localhost:3000/naver-callback');
        const state = encodeURIComponent('임의의 문자열');

        const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}`;
        const width = 500;
        const height = 800;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const options = `width=${width},height=${height},left=${left},top=${top}`;

        window.open(url, '네이버 간편로그인', options);

        // 네이버 로그인 버튼을 눌렀을 때, '/login' 페이지 대신 '/naver-callback' 페이지로 이동하도록 수정합니다.
        // navigate('/naver-callback');

    };

    return (
        <button onClick={handleClick} className="naver_login">
            NAVER LOGIN
        </button>
    );

};

export default NaverLogin;
