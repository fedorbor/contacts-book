import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import styles from '../styles/ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Add Contact
      </button>
    </form>
  );
};
