import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`

const Title = styled.h2`
  margin-bottom: 0;
  padding-bottom: 0;
`

function App() {
  return (
    <Wrapper className="App">
      <Title>Todo List</Title>
      <TodoList />
    </Wrapper>
  );
}

export default App;
