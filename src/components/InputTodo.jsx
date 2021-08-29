import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        value={todoText}
        onChange={onChange}
        placeholder="form to do"
      />
      <button disabled={disabled} onClick={onClick}>
        Add
      </button>
    </div>
  );
};
