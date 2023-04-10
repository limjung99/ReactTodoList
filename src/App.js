import { createGlobalStyle } from 'styled-components';
import React from 'react';
import TodoContainer from './Components/TodoContainer';
import Todoinput from './Components/TodoInput';


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
        <Todoinput/>

      </TodoContainer>
   </>
  );
}

export default App;
