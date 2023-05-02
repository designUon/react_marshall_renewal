import React from 'react';

const NaverLogin = () => {
    const handleClick = () => {
        const clientId = '네이버 클라이언트 ID';
        const redirectURI = encodeURIComponent('http://localhost:3000/naver-callback');
        const state = encodeURIComponent('임의의 문자열');

        const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURI}&state=${state}`;
        const width = 500;
        const height = 800;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;
        const options = `width=${width},height=${height},left=${left},top=${top}`;

        window.open(url, '네이버 간편로그인', options);
    };

    return (
        <button onClick={handleClick} className="naver_login">
            NAVER LOGIN
        </button>
    );
};

export default NaverLogin;
