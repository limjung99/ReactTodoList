import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react';
import TodoContainer from './Components/TodoContainer';
import TodoList  from './Components/TodoList';
import TodoForm from './Components/TodoForm';


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
      <TodoContainer>
        <TodoForm todos={todos} settodos={settodos}/>
        <TodoList todos={todos} settodos={settodos} />
      </TodoContainer>
   </>
  );
}

export default App;
