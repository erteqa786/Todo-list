import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "NO TODOS TO DISPLAY"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default Todos;
