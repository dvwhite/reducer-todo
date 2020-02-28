import React from "react";
import "./../App.scss";

// Styled components imports
import styled from "styled-components";
import { COMPLETE_TODO } from "../constants/ActionTypes";

// Styled components
const Item = styled.p`
  background: white;
  border-radius: 5px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 
    rgba(0, 0, 0, 0.13) 0px 1px 1px, 
    rgba(0, 0, 0, 0.13) 0px 2px 2px,
    rgba(0, 0, 0, 0.13) 0px 4px 4px, 
    rgba(0, 0, 0, 0.13) 0px 8px 8px,
    rgba(0, 0, 0, 0.13) 0px 16px 16px;
  width: 96%;
  margin: 1%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4 ease;

  p {
    margin: 0.5%;
    overflow: hidden;
    word-wrap: break-word;
    justify-self: flex-end;
  }

  h2 {
    overflow: hidden;
    width: 70%;
  }

  &:hover {
    transition: all 0.4 ease;
    background: rgb(192, 233, 247);
  }
`



/* THe expected shape of a todo:
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
*/
// A component rendering a todo list item in a styled Card div
const Todo = ({ data, dispatch }) => {
  const completeTodo = () => {
    dispatch({
      type: COMPLETE_TODO,
      payload: data
    });
  };
  return (
    <Item
      onClick={completeTodo}
      className={`${data?.completed ? " completed" : ""}`}
      >
        <h2>{data?.item}</h2>
        {data?.completed ? <p>Done: {data.completedOn}</p> : null}
      {data?.completed ? (
        <div className="checkmark-wrapper">
          <div className="checkmark">&#10003;</div>
        </div>
      ) : null}
    </Item>
  );
};

export default Todo;
