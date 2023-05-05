import React from "react";
import LoginContainer from "./LoginContainer";
import styled from "styled-components";

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

const InputIdField = styled.input`
    margin-top:10px;
    width:300px;
    height:30px;
    border: none;
    border-radius:5px;
    background:rgb(208,208,208);
    text-indent:10px;
`

const InputPwField = styled.input`
    margin-top:10px;
    width:300px;
    height:30px;
    border:none;
    border-radius: 5px;
    background: rgb(208,208,208);
    text-indent:10px;
`


const InputButton = styled.button`
    margin-top:10px;
    border: none;
    background: rgb(153, 204, 255);
    width:305px;
    height:30px;
    border-radius:5px;
    font-size:14px;
    color:white;
    font-weight:bold;
`

function Login(props){
    return (
       <InputFormWrap>
            <InputField>
                <h2>MyTodos</h2>
                <InputIdField placeholder="아이디를 입력해주세요" type="text"></InputIdField>
                <InputPwField placeholder="비밀번호를 입력해주세요" type="password"></InputPwField>
                <InputButton >로그인</InputButton>
            </InputField>
       </InputFormWrap>
    )
}

export default Login