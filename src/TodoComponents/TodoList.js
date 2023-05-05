import React from "react";
import styled from "styled-components";

const ListWrap = styled.div`
    border-top: 1px solid black;
    margin-top:20px;
    height:30%;
    h2{
        margin-left:10px;
    }
    li{
        margin-left:20px;
    }
`

const ToDoWrap = styled.div`

`

const DoneWrap = styled.div`

`

const TodoList = ({todos,settodos})=>{

    const doneTodos = todos.filter(todo => todo.done);
    const todoTodos = todos.filter(todo => !todo.done);

    const toggleItem = (id) => {
        settodos(
            todos.map(todo => (
                id === todo.id ? {...todo, done:!todo.done} : todo
            ))
        )
    }

    return(
        <>
            <ListWrap>
                <ToDoWrap>
                    <h2>Todo</h2>
                    {todoTodos.map(todo => (
                        <li id={todo.id} onClick={()=>toggleItem(todo.id)}>{todo.todo}</li>
                    ))}
                </ToDoWrap>
            </ListWrap>
            <ListWrap>
                <DoneWrap>
                    <h2>Done</h2>
                    {doneTodos.map(todo =>(
                        <li id={todo.id} onClick={()=>toggleItem(todo.id)}>{todo.todo}</li>
                    ))}
                </DoneWrap>
            </ListWrap>
        </>
    )
}

export default TodoList