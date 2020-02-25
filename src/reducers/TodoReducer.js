import React from 'react';
import { ADD_TODO } from './../actions/TodoActions';

// The initial reducer state
export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
];

/* 
* @function: The main reducer for the Todo list application
* @param {Object} state: The JS object containing the state
* @param {Object} action: The JS object containing the action object,
*                         which has a type, payload, and target
* @returns {Array} representing the newest App state
*/
export const TodoReducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [ ...state, { ...action.payload } ];
    default:
      return state;
  }
}