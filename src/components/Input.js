const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  type,
  handleBlur,
  test,
}) => {
  return (
    <div className="form__container">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="form__input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={handleBlur}
        data-testid={name}
      />
      <p className="form__error">{error}</p>
    </div>
  );
};

export default Input;
