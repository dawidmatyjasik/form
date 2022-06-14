const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  type,
  // handleBlur,
}) => {
  return (
    <div className="form__container">
      <label className="form__label">{label}</label>
      <input
        className="form__input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        // onFocus={handleBlur}
      />
      <p className="form__error">{error}</p>
    </div>
  );
};

export default Input;
