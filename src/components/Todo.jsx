import React from "react";
import "./../App.scss";

// Styled components imports
import styled from "styled-components";
import { COMPLETE_TODO } from "../constants/ActionTypes";

// Styled components
const Item = styled.p`
  background: white;
  border: 1px solid #A9A9A9;
  border-bottom: 0;
  width: 96%;
  margin: 0% 1%;
  padding-left: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4 ease;

  p {
    margin: 0.5%;
    overflow: hidden;
    word-wrap: break-word;
  }

  h4 {
    overflow: hidden;
    width: 70%;
  }

  &:hover {
    transition: all 0.4 ease;
    background-color: lightgreen;
  }
`

const Row = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
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
      className={`todo${data?.completed ? " completed" : ""}`}
      >
        <h4>{data?.item}</h4>
        {data?.completed ? ( 
        <Row>
          <p>Done: {data?.completedOn}</p>
          <div className="checkmark-wrapper">
            <div className="checkmark">&#10003;</div>
          </div>
        </Row>
      ) : null}
    </Item>
  );
};

export default Todo;
