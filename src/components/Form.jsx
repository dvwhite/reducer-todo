import React, { useState, useReducer } from 'react';

// Reducer imports
import { initialState, TodoReducer } from './../reducers/TodoReducer.js';
import { ADD_TODO, CLEAR_COMPLETED_TODOS } from './../constants/ActionTypes';

// Styled component imports
import styled from 'styled-components';

// Styled components
const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  margin: 1%;
  width: 99%;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Input = styled.input`
  padding-left: 1%;
  width: 100%;
  font-size: 1rem;
  outline: 0;
  border: 0.75 px solid #A9A9A9;
`

// The form component to add a todo to the todo list
const Form = ({dispatch}) => {
  const [inputText, setInputText] = useState('');

  // Submit dispatches an action to the reducer
  const handleSubmit = event => {
    event.preventDefault();
    if (inputText) {
      dispatch( { type: ADD_TODO, payload: inputText });
      setInputText('');
      event.target.reset(); // Clear form on submit
    }
  }

  // Change updates the state as the input changes
  const handleChange = event => {
    event.preventDefault();
    setInputText(event.target.value);
  }

  // Clear the complete todos
  const clearCompleted = (event) => {
    event.preventDefault();
    dispatch({
      type: CLEAR_COMPLETED_TODOS
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input 
        type="text"
        name="inputText"
        data-testid="form-component-input"
        onChange={handleChange}
        placeholder='Enter a new todo...'
      ></Input>
      <button className='btn-add'>Add Todo</button>
      <button className='btn-clear' onClick={clearCompleted}>
        Clear Completed
      </button>
    </FormWrapper>
  );
}

export default Form;
