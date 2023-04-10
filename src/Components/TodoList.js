import React from "react";
import styled from "styled-components";

const ListWrap = styled.div`
    border-top: 1px solid black;
    margin-top:20px;
    height:30%;
    h2{
        margin-left:10px;
    }
`

const ToDoWrap = styled.div`

`

const DoneWrap = styled.div`

`

const TodoList = ()=>{

    return(
        <>
            <ListWrap>
                <ToDoWrap><h2>Todo</h2></ToDoWrap>
            </ListWrap>
            <ListWrap>
                <DoneWrap><h2>Done</h2></DoneWrap>
            </ListWrap>
        
        </>
    )

}

export default TodoList