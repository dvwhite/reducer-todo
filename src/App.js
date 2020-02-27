import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  border: 1px solid darkgray;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px,
              rgba(0, 0, 0, 0.12) 0px 2px 2px, 
              rgba(0, 0, 0, 0.12) 0px 4px 4px, 
              rgba(0, 0, 0, 0.12) 0px 8px 8px, 
              rgba(0, 0, 0, 0.12) 0px 16px 16px;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`

function App() {
  return (
    <Wrapper className="App">
      <TodoList />
    </Wrapper>
  );
}

export default App;
