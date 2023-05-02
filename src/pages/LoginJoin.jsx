import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginJoin() {

    const navigate = useNavigate();

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


    // ------------------------- checkAll ---------------------------
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);

    const handleCheckAllChange = () => {
        setIsCheckedAll(!isCheckedAll);
        setIsChecked1(!isCheckedAll);
        setIsChecked2(!isCheckedAll);
        setIsChecked3(!isCheckedAll);
        setIsChecked4(!isCheckedAll);
    };

    const handleCheckbox1Change = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckbox2Change = () => {
        setIsChecked2(!isChecked2);
    };

    const handleCheckbox3Change = () => {
        setIsChecked3(!isChecked3);
    };

    const handleCheckbox4Change = () => {
        setIsChecked4(!isChecked4);
    };

    const handleSignupClick = () => {
        if (!isChecked1 || !isChecked2) {
            alert('[필수] 항목을 모두 체크해주세요.');
        } else {
            // 회원가입 처리
            // console.log('회원가입 완료');
            alert('회원가입을 축하드립니다');
            navigate('/login');
        }
    };


    return (
        <div className='join_wrap'>

            <h3>d</h3>

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
                <input type="email" required/>
                <br />
                <div className="join_text">생년월일</div>
                <input type="date" name="" id="" />
            </div>

            <div className="join_agree_wrap">

                <label style={{ fontSize: "17px" }}>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 <b>모두 동의</b>합니다. </label>
                {/* <input type="checkbox" name="" className='allcheck' /> */}
                <input
                    type="checkbox"
                    checked={isCheckedAll}
                    onChange={handleCheckAllChange}
                />

                <br />
                <br />

                <div className="join_agree">
                    <p><b>[필수]</b> 이용약관 동의</p>
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
                        <input
                            type="checkbox"
                            checked={isChecked1}
                            onChange={handleCheckbox1Change}
                        />
                    </div>
                </div>

                <br />

                <div className="join_agree">
                    <p><b>[필수]</b> 개인정보 수집 및 이용 동의</p>
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
                        <input
                            type="checkbox"
                            checked={isChecked2}
                            onChange={handleCheckbox2Change}
                        />
                    </div>
                </div>

                <br />

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
                        <input
                            type="checkbox"
                            checked={isChecked3}
                            onChange={handleCheckbox3Change}
                        />
                    </div>

                    <br />

                    <div className="check_box">
                        <label>이메일 수신을 동의하십니까? </label>
                        <input
                            type="checkbox"
                            checked={isChecked4}
                            onChange={handleCheckbox4Change}
                        />
                    </div>


                </div>

            </div>

            <div className="join_last_btn" onClick={handleSignupClick}>회원가입</div>

        </div>
    )
}
