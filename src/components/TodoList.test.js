import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import TodoList from './Todo';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('The TodoList component', () => {
  test('renders the Todo component without crashing', () => {
    const enzymeWrapper = shallow(<TodoList />);
    expect(enzymeWrapper.find('TodoList')).not.toBeNull();
  });
})