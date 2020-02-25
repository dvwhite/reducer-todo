import React, { useReducer } from 'react';
import { initialState, TodoReducer } from './../reducers/TodoReducer.js';
import Todo from './Todo';

/* 
  A component rendering a list of Todo components, each
  of which is a styled card div containing the todo data
*/
const TodoList = () => {
  const [state, dispatch] = useReducer(initialState, TodoReducer);
  return (
    <>
      {
        state.map(todo => (
          <Todo data={todo} />
        ))
      }
    </>
  );
}

export default TodoList;