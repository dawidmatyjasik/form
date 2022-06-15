import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import { validate } from "./utils/validate";
import "./App.scss";

const App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    nip: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // const [blur, setBlur] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Logged in");
    }
  };

  useEffect(() => {
    if (isSubmit) setFormErrors(validate(formValues));
  }, [formValues, isSubmit]);

  /*   const handleBlur = (e) => {
    if (!isSubmit) {
      const values = validate(formValues);
      setBlur({ ...blur, [e.target.name]: values[e.target.name] });
      setFormErrors(blur);
    }
  }; */

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <h1 className="form__header">Login Panel</h1>
        <div>
          <hr className="form__line" />
        </div>
        <div className="form__inputs">
          <Input
            label="Imię"
            placeholder="Jan"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={formErrors.name}
            type="text"
            // handleBlur={handleBlur}
          />
          <Input
            label="Email"
            placeholder="abc@mail.com"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={formErrors.email}
            type="email"
            // handleBlur={handleBlur}
          />

          <Input
            label="Phone"
            placeholder="123456789"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            error={formErrors.phone}
            type="tel"
            // handleBlur={handleBlur}
          />
          <Input
            label="NIP"
            placeholder="0000000000"
            name="nip"
            value={formValues.nip}
            onChange={handleChange}
            error={formErrors.nip}
            type="number"
            // handleBlur={handleBlur}
          />
        </div>
        <button
          className="form__btn"
          type="submit"
          disabled={Object.keys(formErrors).length !== 0 && isSubmit}
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default App;
