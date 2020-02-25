import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoReducer from './TodoReducer';
import '@testing-library/jest-dom/extend-expect';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('The App component', () => {
  test('the MasterReducer function can be called', () => {
    const reducerMock = jest.mock(TodoReducer);
    console.log(reducerMock.mock)
  }); 
})