import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import TodoContainer from './TodoComponents/TodoContainer';
import TodoList  from './TodoComponents/TodoList';
import TodoForm from './TodoComponents/TodoForm';
import LoginContainer from './LoginComponents/LoginContainer';
import Login from './LoginComponents/Login';


const GlobalStyle = createGlobalStyle`
  body {
    background: pink
  }
`;

function App() {
  
  const [todos,settodos] = useState([]);

  return (
   <>
      <GlobalStyle/>
      <LoginContainer>
        <Login></Login>
      </LoginContainer>
   </>
  );
}

export default App;
