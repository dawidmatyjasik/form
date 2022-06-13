import { useEffect, useState } from "react";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [nip, setNip] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [validate, setValidate] = useState({
    name: false,
    mail: false,
    phone: false,
    nip: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.values(validate).every((val) => val === true) && isChecked) {
      alert("Dane zostały przesłane!");
      setName("");
      setMail("");
      setPhone("");
      setNip("");
      setIsChecked(false);
    } else {
      alert("Sprawdź poprawność danych!");
    }
  };

  useEffect(() => {
    if (name.length >= 3 && name.length < 50) {
      setValidate((prevState) => ({
        ...prevState,
        name: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  }, [name]);

  useEffect(() => {
    if (mail.match(/^\S+@\S+\.\S+$/)) {
      setValidate((prevState) => ({
        ...prevState,
        mail: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        mail: false,
      }));
    }
  }, [mail]);

  useEffect(() => {
    if (phone.match(/^\d{9}$/)) {
      setValidate((prevState) => ({
        ...prevState,
        phone: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        phone: false,
      }));
    }
  }, [phone]);

  useEffect(() => {
    if (nip.length === 10) {
      setValidate((prevState) => ({
        ...prevState,
        nip: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        nip: false,
      }));
    }
  }, [nip]);

  return (
    <form className="flex flex-col space-y-1">
      <Input
        label="Podaj imię: "
        value={name}
        setValue={setName}
        passed={validate.name}
      />
      <Input
        label="Podaj maila: "
        type="email"
        value={mail}
        setValue={setMail}
        passed={validate.mail}
      />
      <Input
        label="Podaj telefon: "
        type="tel"
        value={phone}
        setValue={setPhone}
        passed={validate.phone}
      />
      <Input
        label="Podaj nip: "
        type="number"
        value={nip}
        setValue={setNip}
        passed={validate.nip}
      />
      <Checkbox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        text="Wyrażam zgodę na przetwarzanie danych RODO"
      />
      <button type="submit" className="w-24" onClick={(e) => handleSubmit(e)}>
        Wyślij
      </button>
    </form>
  );
}

export default App;
