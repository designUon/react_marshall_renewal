import React, { useState, useEffect } from 'react';
import "../App.css";
import Header from './Header';

const styles = {
    html: {
        transition: 'color 500ms ease-in-out, background-color 500ms ease-in-out'
    },
    body: {
        transition: 'background-color 500ms ease-in-out'
    },
    header: {
        transition: 'background-color 500ms ease-in-out'
    },
    footer: {
        transition: 'background-color 500ms ease-in-out'
    },
    submenu_li: {
        transition: 'background-color 500ms ease-in-out'
    },
    reversed: {
        color: '#b8b29e',
        backgroundColor: 'white'
    },
    normal: {
        color: '#b8b29e',
        backgroundColor: '#181818'
    },
};

export default function ReverseBtn() {

    const [isReversed, setIsReversed] = useState(false);

    const handleButtonClick = () => {
        setIsReversed(!isReversed);
    };

    useEffect(() => {
        const duration = 500; // 0.5초
        const html = document.querySelector('html');
        const body = document.body;
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        const style = isReversed ? styles.reversed : styles.normal;
        const submenu_li = document.querySelectorAll('.sub_menu a li');

        if (html) {
            Object.assign(html.style, styles.html, style);
        }
        if (body) {
            Object.assign(body.style, styles.body, style);
        }
        if (header) {
            Object.assign(header.style, styles.header, style);
        }
        if (footer) {
            Object.assign(footer.style, styles.footer, style);
        }
        if (submenu_li.length > 0) {
            for (let i = 0; i < submenu_li.length; i++) {
                Object.assign(submenu_li[i].style, styles.submenu_li, style);
            }
        }
    }, [isReversed]);

    return (
        <div>
            <button
                className={`reverse_btn ${isReversed ? 'reversed' : ''}`}
                onClick={handleButtonClick}
            >
                <img
                    src={process.env.PUBLIC_URL + `${isReversed ? '/img/light_b.svg' : '/img/light_w.svg'}`}
                    alt="버튼"
                />
            </button>
            <Header isReversed={isReversed} />
        </div>
    );
}
