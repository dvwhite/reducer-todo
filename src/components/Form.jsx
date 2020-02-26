import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1%;
  width: 60%;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Input = styled.div`
  padding: 1%;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  outline: 0;
  border: 0.75 px solid #A9A9A9;
`


const Form = (props) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.dispatch()
  }

  const handleChange = event => {
    event.preventDefault();
    setInput(event.target.value)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input 
        type="text"
        name="inputText"
        data-testid="form-component-input"
        onChange={handleChange}
        placeholder='Enter a todo...'
      />
    </FormWrapper>
  );
}

export default Form;
