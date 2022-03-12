import React from "react";
import { useDispatch } from "react-redux";

import React from "react";

function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(todoRemoved(todo.id));
  }

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleDeleteClick}>DELETE</button>
    </li>
  );
} 