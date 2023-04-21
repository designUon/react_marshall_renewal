import React, { useState, useEffect } from 'react'

export default function LoginJoin() {

    const [text, setText] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.PUBLIC_URL}/agree_01.txt`);
            const text = await response.text();
            setText(text);
        }
        fetchData();
    }, []);

    return (
        <div className='join_wrap'>
            <div className="join_inputbox">
                <label htmlFor="">ID</label>
                <input type="text" />
                <br />
                <label htmlFor="">PW</label>
                <input type="password" />
                <br />
                <label htmlFor="">PW확인</label>
                <input type="password" />
                <br />
                <label htmlFor="">e-mail</label>
                <input type="email" />
                <br />
                <label htmlFor="">생년월일</label>
                <input type="date" name="" id="" />
            </div>

            <div className="join_agree">
                <p>이용약관 동의</p>
                <textarea
                    name=""
                    id=""
                    cols="107"
                    rows="20"
                    value={text}
                ></textarea>
                <br/>
                <label>이용약관에 동의하십니까? </label>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    )
}
