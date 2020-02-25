import React, { useReducer } from 'react';
import { initialState, TodoReducer } from './../reducers/TodoReducer.js';
import Todo from './Todo';
import styled from 'styled-components';

const Todos = styled.div`
  display: flex;
  flex-direction: column;
`

/* 
  A component rendering a list of Todo components, each
  of which is a styled card div containing the todo data
*/
const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  
  return (
    <Todos>
      {
        state.map(todo => (
          <Todo data={todo} />
        ))
      }
    </Todos>
  );
}

export default TodoList;