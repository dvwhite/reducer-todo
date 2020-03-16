import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Todo from './Todo';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('The Todo component', () => {
  test('renders the Todo component without crashing', () => {
    const enzymeWrapper = shallow(<Todo />);
    expect(enzymeWrapper.find('Todo')).not.toBeNull();
  });
})
