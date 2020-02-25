import React from 'react';

// Styled components imports
import styled from 'styled-components';

// Styled components
const Card = styled.div`
  margin: 1%;
  opacity: 0.95;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 -1px 0 #e0e0e0, 
              0 0 2px rgba(0, 0, 0, 0.12), 
              0 2px 4px rgba(0, 0, 0, 0.24);
  width: 18rem;
  height: 12rem;
  overflow: hidden;
  word-wrap: break-word;
`

/* THe expected shape of a todo:
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
*/
// A component rendering a todo list item in a styled Card div
const Todo = ({ data }) => {
  return (
    <div>
      <Card>
        <h2>{data?.item}</h2>
      </Card>
    </div>
  );
}

export default Todo;
