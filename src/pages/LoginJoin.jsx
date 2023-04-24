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

    const [text2, setText2] = useState('');

    useEffect(() => {
        async function fetchData2() {
            const response2 = await fetch(`${process.env.PUBLIC_URL}/agree_02.txt`);
            const text2 = await response2.text();
            setText2(text2);
        }
        fetchData2();
    }, []);

    const [text3, setText3] = useState('');

    useEffect(() => {
        async function fetchData3() {
            const response3 = await fetch(`${process.env.PUBLIC_URL}/agree_03.txt`);
            const text3 = await response3.text();
            setText3(text3);
        }
        fetchData3();
    }, []);


    return (
        <div className='join_wrap'>

            <div className="join_inputbox">
                <div className="join_text">ID</div>
                <input type="text" />
                <br />
                <div className="join_text">PW</div>
                <input type="password" />
                <br />
                <div className="join_text">PW확인</div>
                <input type="password" />
                <br />
                <div className="join_text">e-mail</div>
                <input type="email" />
                <br />
                <div className="join_text">생년월일</div>
                <input type="date" name="" id="" />
            </div>

            <div className="join_agree_wrap">

                <label>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다. </label>
                <input type="checkbox" name="" id="" />

                <br/>
                <br/>

                <div className="join_agree">
                    <p>[필수] 이용약관 동의</p>
                    <textarea
                        name=""
                        id=""
                        cols="107"
                        rows="10"
                        value={text}
                    ></textarea>
                    <br />
                    <div className="check_box">
                        <label>이용약관에 동의하십니까? </label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <br />

                <div className="join_agree">
                    <p>[필수] 개인정보 수집 및 이용 동의</p>
                    <textarea
                        name=""
                        id=""
                        cols="107"
                        rows="10"
                        value={text2}
                    ></textarea>
                    <br />
                    <div className="check_box">
                        <label>개인정보 수집 및 이용에 동의하십니까? </label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <br/>

                <div className="join_agree">
                    <p>[선택] 쇼핑정보 수신 동의</p>
                    <textarea
                        name=""
                        id=""
                        cols="107"
                        rows="7"
                        value={text3}
                    ></textarea>
                    <br />
                    <div className="check_box">
                        <label>SMS 수신을 동의하십니까? </label>
                        <input type="checkbox" name="" id="" />
                    </div>

                    <br/>

                    <div className="check_box">
                        <label>이메일 수신을 동의하십니까? </label>
                        <input type="checkbox" name="" id="" />
                    </div>


                </div>

            </div>

            <div className="join_last_btn">회원가입</div>

        </div>
    )
}
