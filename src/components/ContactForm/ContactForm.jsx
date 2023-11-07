import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAddContact } from "../../redux/contacts/contacts-operations";
import styles from "./contactForm.module.css";

import Button from "../Button/Button";

const INITIAL_VALUE = {
  name: "",
  phone: "",
};

const Form = () => {
  const [value, setValue] = useState({ ...INITIAL_VALUE });

  const focusRef = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const onAddContact = (data) => {
    dispatch(fetchAddContact(data));
  };

  const handleInput = ({ currentTarget: { name, value } }) => {
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    focusRef.current.focus();

    onAddContact(value);

    reset();
  };

  const reset = () => {
    setValue({ ...INITIAL_VALUE });
  };

  const { name, email = "", phone } = value;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              autoComplete="off"
              onChange={handleInput}
              placeholder="Please enter the name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              className={styles.input}
              ref={focusRef}
              required
            />
          </label>
          <label className={styles.label}>
            Phone
            <input
              type="tel"
              name="phone"
              value={phone}
              autoComplete="off"
              onChange={handleInput}
              placeholder="Please enter the phone"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={handleInput}
              placeholder="Please enter the email"
              // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
              title="Email may contain letters, digits, dash and can`t contain spaces, and must contain @"
              className={styles.input}
            />
          </label>
          <Button className={styles.addBtn}>Add Contact</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
