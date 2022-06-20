import React from "react";

const InputCheckbox = ({ name, value, handleChecked, label, error }) => {
  //   console.log(error);
  return (
    <div>
      <input
        name={name}
        id={name}
        type="checkbox"
        value={value}
        onChange={handleChecked}
        data-testid="checkbox"
      />
      <label
        htmlFor={name}
        style={error ? { color: "red" } : { color: "black" }}
      >
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
