import {useState, useEffect} from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';

const LS_KEY = 'saved_contacts';

export default function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let parsedContacts = [];
    if (localStorage.getItem(LS_KEY)) {
      parsedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    }
    if (parsedContacts.length !== 0) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    const prepareContacts = JSON.stringify(contacts);
      localStorage.setItem(LS_KEY, prepareContacts);
  }, [contacts])
  

  const addContact = (newContact) => {
    if (contacts.map(contact => contact.name.toLowerCase()).includes(newContact.name.toLowerCase())) {
      alert('error');
    }
    else {setContacts(prevState => ([newContact, ...prevState]))}
  } 

  const changeFilter = (filterValue) => {
    setFilter(filterValue)
  }

  const handleDelete = (id) => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== id)))
  }

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter)
  )

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
      <h1>Phonebook</h1>
      <ContactForm onSubmit = {addContact}/>

      <h2>Contacts</h2>
        <Filter onFilter={changeFilter} />
        <Contacts visibleContacts = {visibleContacts} handleDelete= {handleDelete}></Contacts>

    </div>
  );
}

