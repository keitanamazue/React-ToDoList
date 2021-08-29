import React from "react";

export const Completed = (props) => {
  const { completeTodos, onClickReturn } = props;

  return (
    <div className="completed">
      <p className="main__title">Done</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="bl_todo">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>Return</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
