import React, { useReducer } from 'react';

// Reducer imports
import { initialState, TodoReducer } from './../reducers/TodoReducer.js';

// Component imports
import Todo from './Todo';
import Form from './Form';

// Styled component imports
import styled from 'styled-components';

// Styled components
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
      <Form dispatch={dispatch} />
      {
        state.map(todo => (
          <Todo data={todo} key={todo.id} dispatch={dispatch} />
        ))
      }
    </Todos>
  );
}

export default TodoList;