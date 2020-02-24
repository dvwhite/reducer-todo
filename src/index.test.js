import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
jest.mock("react-dom", () => ({ 
  render: jest.fn(),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: 
    {
      Events: []
    } 
  })
);

describe("The React application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});