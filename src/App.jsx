import React from 'react';
import { Contacts } from './components/Contacts';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div>
      <h1>Contact Book</h1>
      <ContactForm />
      <Contacts />
    </div>
  );
}

export default App;
