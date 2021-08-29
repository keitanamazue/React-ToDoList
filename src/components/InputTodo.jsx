import React from "react";

export const InputTodo = (props) => {
  console.log(props);
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area bl_todo">
      <input value={todoText} onChange={onChange} placeholder="form to do" />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
