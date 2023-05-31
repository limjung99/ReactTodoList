import React from "react";
import styled from "styled-components";

const LoginContainerWrap = styled.div`
    width: 412px;
    height: 268px;
    
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgb(125, 123, 125);
`

// children을 통해 child node를 전달가능 
function LoginContainer({children}){
    return <LoginContainerWrap>{children}</LoginContainerWrap>
}

export default LoginContainer