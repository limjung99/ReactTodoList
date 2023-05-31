import React from "react";
import LoginContainer from "./LoginContainer";
import styled from "styled-components";
import { useState } from "react";


const InputFormWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputField = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const InputTextField = styled.input`
    margin-top:10px;
    width:300px;
    height:30px;
    border: none;
    border-radius:5px;
    background:rgb(208,208,208);
    text-indent:10px;
`



const ButtonWrapper = styled.button`
    margin-top:10px;
    border: none;
    background: rgb(153, 204, 255);
    width:305px;
    height:30px;
    border-radius:5px;
    font-size:14px;
    color:white;
    font-weight:bold;
    font-weight: ${props => (props.is_hovered? "bold" : "normal")};
    text-decoration: ${props => (props.is_hovered? "underline": "normal")};
`

function Login(props){
    const signUpURL = `http://127.0.0.1:8000/mytodos/signup`;
    const loginURL = 'http://127.0.0.1:8000/mytodos/login';

    const [login_is_hovered,set_login_hovered] = useState(false);
    const [signup_is_hovered,set_signup_hovered] = useState(false);
    const [id_value,set_id_value] = useState("");
    const [pw_value,set_pw_value] = useState("");

    const change_login_hover = ()=>{
        set_login_hovered(!login_is_hovered);
    }

    const change_signup_hover = ()=>{
        set_signup_hovered(!signup_is_hovered);
    }

    const handle_id_Change = (e)=>{
        set_id_value(e.target.value);
    }

    const handle_pw_Change = (e)=>{
        set_pw_value(e.target.value);
    }

    //json을 http post로 송신하는 함수 
    const send_login_json = (e)=>{
        e.preventDefault();
        fetch(loginURL , {
            method:"POST", 
            headers: {
                'Content-Type': "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                    "user_id" : id_value,
                    "user_pw" : pw_value
                })
        })
        .then(res=>res.json()) //promise성공시 Response로 resolve
        .then(data=>console.log(data))//Response를 json메소드로 변환
    }

    

    return (
        <InputFormWrap>
             <InputField>
                 <h2>MyTodos</h2>
                 <InputTextField 
                 placeholder="아이디를 입력해주세요"
                 type="text"
                 onChange={handle_id_Change}
                 value={id_value}
                  ></InputTextField>
                 <InputTextField 
                 placeholder="비밀번호를 입력해주세요" 
                 type="password"
                 onChange={handle_pw_Change}
                 value={pw_value}
                 ></InputTextField>
                 <ButtonWrapper 
                 type="login" 
                 is_hovered={login_is_hovered}
                 onMouseEnter={change_login_hover}
                 onMouseLeave={change_login_hover}
                 onClick={send_login_json}
                  >로그인
                  </ButtonWrapper>
                 <ButtonWrapper
                  type="signup" 
                  is_hovered={signup_is_hovered}
                  onMouseEnter={change_signup_hover}
                  onMouseLeave={change_signup_hover}
                  
                  >회원가입
                  </ButtonWrapper>
             </InputField>
        </InputFormWrap>
    )
}


    


export default Login