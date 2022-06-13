import React from "react";

type CheckboxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

const Checkbox = ({ isChecked, setIsChecked, text }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={`${isChecked ? "text-black" : "text-red-500"}`}></span>
    </label>
  );
};

export default Checkbox;
