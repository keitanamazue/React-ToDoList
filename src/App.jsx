import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodos } from "./components/IncompletedTodos";
import { Completed } from "./components/Completed";
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodotext}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>Only 5 pieces of todos</p>
      )}

      <IncompletedTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <Completed completeTodos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
