import React, { useReducer } from 'react';
import { initialState, TodoReducer } from './../reducers/TodoReducer.js';
import Todo from './Todo';
import styled from 'styled-components';

const Todos = styled.div`
  background: white;
  border: 1px solid gray;
  width: 99.5%;
  margin: 0 auto;
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
          <Todo data={todo} key={todo.id}/>
        ))
      }
    </Todos>
  );
}

export default TodoList;