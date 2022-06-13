import React from "react";

type InputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  type?: string;
  passed?: boolean;
};

const Input = ({
  label,
  type = "text",
  value,
  setValue,
  passed,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => handleChange(e)}
        className={`${
          passed === true ? "border-black" : "border-red-500"
        } focus:outline-none`}
      />
    </label>
  );
};

export default Input;
