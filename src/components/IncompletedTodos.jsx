import React from "react";

export const IncompletedTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incompleted">
      <p className="main__title">Not Done</p>

      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="bl_todo">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
