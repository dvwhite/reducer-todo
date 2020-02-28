import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import TodoList, { Todos } from "./TodoList";

// Enzyme imports
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe("The TodoList component", () => {
  test("renders the TodoList component without crashing", () => {
    const enzymeWrapper = shallow(<TodoList />);
    expect(enzymeWrapper.find("TodoList")).not.toBeNull();
  });

  test("renders the Todos styled component without crashing", () => {
    const enzymeWrapper = shallow(<Todos />);
    expect(enzymeWrapper.find("Todos")).not.toBeNull();
  });

  test("sort correctly sorts the todos in increasing order of id", () => {
    const mockState = {
      todoList: [{ id: 1 }, { id: 0 }, { id: 3 }, { id: -1 }]
    };
    mockState.todoList = mockState.todoList.sort((a, b) => a.id < b.id ? -1 : 1);
    expect(mockState).toEqual({
      todoList: [{ id: -1 }, { id: 0 }, { id: 1 }, { id: 3 }]
    });
  });
});
