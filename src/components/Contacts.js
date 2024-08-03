import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact, setFilter } from '../redux/contactsSlice';
import styles from '../styles/Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error, filter } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.contactsContainer}>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
        className={styles.searchInput}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            {contact.name} - {contact.phone}
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
