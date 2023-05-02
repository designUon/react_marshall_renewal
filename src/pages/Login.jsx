import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';


import '../css/login.css'
import KakaoLogin from '../components/KakaoLogin';
import NaverLogin from '../components/NaverLogin';

export default function Login() {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState();
  const {action} = useContext(ProductContext);

  const onlogin =(e)=>{
    e.preventDefault();

    const newUser = {
      customer : customer,
      login : true
    }
      
      action.setUser(newUser);

      navigate('/');

  }

  return (
    <div className='login_wrap'>
        <form className="login_box">
            {/* <h4>LOGIN</h4> */}
                {/* <label htmlFor="">ID</label> */}
                <input type="text" placeholder='ID' className='input_id'
                  onChange={(e)=>{setCustomer(e.target.value)}}
                />
                <br/>
                {/* <label htmlFor="">PASSWORD</label> */}
                <input type="password" placeholder='PW' className='input_pw'/>
                <br/>
                <div className="login_btn"
                  type="submit"
                  onClick={onlogin}
                >LOGIN</div>
                <div className='join_btn'><Link to='/join'>MEMBER JOIN</Link></div>
                <ul className='find_btn'>
                    <li>FIND ID</li>
                    <li>FIND PW</li>
                </ul>

                <div>
                    {/* <div className="naver_login">NAVER LOGIN</div> */}
                    <NaverLogin/>
                    {/* <div className="kakao_login">KAKAO LOGIN</div> */}
                    <KakaoLogin/>
                </div>
        </form>
    </div>
  )
}
