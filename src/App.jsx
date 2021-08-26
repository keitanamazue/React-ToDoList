import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodotext = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    const newDone = [...completeTodos, incompleteTodos[index]];

    setCompleteTodos(newDone);
    setIncompleteTodos(newTodos);
  };

  const onClickReturn = (index) => {
    const futureDone = [...completeTodos];
    futureDone.splice(index, 1);

    const futureInCompleted = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(futureDone);
    setIncompleteTodos(futureInCompleted);
  };

  return (
    <>
      <div className="input-area bl_todo">
        <input
          value={todoText}
          onChange={onChangeTodotext}
          placeholder="form to do"
        />
        <button onClick={onClickAdd}>Add</button>
      </div>

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
    </>
  );
};
