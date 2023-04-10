import React from "react";
import styled from "styled-components";

const Inputfield = styled.input`
border-radius:20px;
background: rgb(200, 196, 196);
width:70%;
height:30px;
display:flex;
outline:none;
margin-left:10px;
border: 0;
padding-left: 10px;
`
function Todoinput(){

    return (
        <>
            <Inputfield placeholder="Enter-your-todos"/>
        </>
    )
}

export default Todoinput