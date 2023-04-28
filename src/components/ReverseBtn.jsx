import React, { useState, useEffect } from 'react'
import "../App.css";


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
    logo: {
        // transition: 'background-image 500ms ease-in-out'
    },
    reversed: {
        color: '#E2DDC9',
        backgroundColor: 'white'
    },
    normal: {
        color: '#E2DDC9',
        backgroundColor: 'black'
    }
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
        // const logo = document.querySelector('.header_logo');
        const style = isReversed ? styles.reversed : styles.normal;

        Object.assign(html.style, styles.html, style);
        Object.assign(body.style, styles.body, style);
        Object.assign(header.style, styles.header, style);
        Object.assign(footer.style, styles.footer, style);
        // Object.assign(logo.style, styles.logo, style);

    //     logo.style.backgroundImage = `url('../public/Marshall_logo_${isReversed ? 'b' : 'w'}.png')`;
    // }, [isReversed]);
    });

    return (
        <div>
            <button
                className={`reverse_btn ${isReversed ? 'reversed' : ''}`}
                onClick={handleButtonClick}
            >
                <img src={process.env.PUBLIC_URL + `${isReversed ? '/light_b.svg' : '/light_w.svg'}`} alt="버튼" />
            </button>
        </div>
    )
}
