import {useState} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export default function ContactForm({ onSubmit }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChangeName = (e) => {
    setName(e.target.value)
  }
  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: nanoid(), name, number };
    onSubmit(contact);
    setName('');
    setNumber('');
  }
  

  return <form onSubmit={handleSubmit}>
    <label>Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
        value={name}
      />
    </label>
    <label>Number
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
        value={number}
      />
    </label>
    <button type="submit">Add contact</button>
  </form>
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}