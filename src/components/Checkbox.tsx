import React from "react";

type CheckboxProps = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox = ({ isChecked, setIsChecked }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={`${isChecked ? "text-black" : "text-red-500"}`}>
        Wyrażam zgodę na przetwarzanie danych RODO
      </span>
    </label>
  );
};

export default Checkbox;
