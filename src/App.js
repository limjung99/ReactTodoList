import { createGlobalStyle } from 'styled-components';
import React from 'react';
import TodoContainer from './Components/TodoContainer';
import TodoList  from './Components/TodoList';
import TodoForm from './Components/TodoForm';


const GlobalStyle = createGlobalStyle`
  body {
    background: pink
  }
`;

function App() {

  return (
   <>
      <GlobalStyle/>
      <TodoContainer>
        <TodoForm/>
        <TodoList></TodoList>
      </TodoContainer>
   </>
  );
}

export default App;
