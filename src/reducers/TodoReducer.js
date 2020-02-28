import React from "react";
import moment from "moment";

// Action type imports
import {
  ADD_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "./../constants/ActionTypes";

// The initial reducer state
export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now()
    }
  ]
};

/*
 * @function: The main reducer for the Todo list application
 * @param {Object} state: The JS object containing the state
 * @param {Object} action: The JS object containing the action object,
 *                         which has a type, payload, and target
 * @returns {Array} representing the newest App state
 */
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(item => item.id !== action.payload.id),
          {
            ...action.payload,
            completed: !action.payload.completed,
            completedOn: moment().format("MM/DD/YYYY")
          }
        ]
      };
    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: [...state.todos.filter(item => !item.completed)]
      };
    default:
      return state;
  }
};
