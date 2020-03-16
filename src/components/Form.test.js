import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import Form from './Todo';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('The Form component', () => {
  test('renders the Form component without crashing', () => {
    const enzymeWrapper = shallow(<Form />);
    expect(enzymeWrapper.find('Form')).not.toBeNull();
  });
})