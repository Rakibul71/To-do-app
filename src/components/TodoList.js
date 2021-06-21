import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text}></Todo>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
