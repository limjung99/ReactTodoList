import React, { useState } from "react";
import styled from "styled-components";

const TodoInputFormWrap = styled.form`
    display:felx;
    h1 {
        margin-left:30px;
    }
`
const TodosWrap = styled.div`
    margin-left:10px;
`

const InputTextfield = styled.input`
border-radius:20px;
background: rgb(200, 196, 196);
width:80%;
height:30px;
display:flex;
outline:none;
margin-left:10px;
border: 0;
padding-left: 10px;
::placeholder{
    font-size:20px;
    font-weight:bold;
}
`

const InputButton = styled.button`
    display:flex;
    margin-left:5%;
    border-radius:50%;
    align-items:center;
    justify-content: center;
    width:30px;
    height:30px;
    background-color:green;
    border:none;
    cursor: pointer;
    &:after {
        content: '+';
        color: white; /* 흰색의 + */
        font-size: 24px; /* +의 크기 조절 */
    }
`


function TodoForm({todos,settodos}){

    const [id,setId] = useState(1);
    const [inputvalue,setInputvalue] = useState('');

    const addTodo = (e)=>{
        e.preventDefault(); //기본동작(새로고침) 방지 
        const todo_object = {
            id : id,
            todo : inputvalue,
            done : false,
        }
        setId(id+1);
        settodos([...todos,todo_object]);
        setInputvalue('');
    }

    const handleChange = (e)=>{ //inputvalue의 state가 변화할때마다 setInputvalue
        setInputvalue(e.target.value);
    }

    return (
        <>
            <TodosWrap><h1>Todos</h1></TodosWrap>
            <TodoInputFormWrap>
                <InputTextfield 
                    placeholder="Enter-your-todos"
                    onChange={handleChange}
                    value={inputvalue}
                 />
                <InputButton onClick={addTodo}/>
            </TodoInputFormWrap>
        </>
       
    )
}

export default TodoForm