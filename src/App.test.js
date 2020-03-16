import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('The App component', () => {
  test('renders the App component without crashing', () => {
    const enzymeWrapper = shallow(<App />);
    expect(enzymeWrapper.find('App')).not.toBeNull();
  });
})
