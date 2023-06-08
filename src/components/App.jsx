import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(contacts => [newContact, ...contacts]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const onDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  );
};
export default App;







// import { useState } from 'react';
// import { nanoid } from 'nanoid';

// function App() {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState('');
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       case 'filter':
//         setFilter(value);
//         break;

//       default:
//         console.log('unexpected field name');
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const isContactExist = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );
//     if(isContactExist) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const newContact = { id: nanoid(), name, number };
//     setContacts([...contacts, newContact]);
//     setName('');
//     setNumber('');
//   };

//   const onDeleteContact = contactId => {
//     setContacts(contacts =>
//       contacts.filter(contact => contact.id !== contactId),
//     );
//   };

//   const filteredContacts = contacts.filter(contact =>
//    contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nameInput">Name</label>
//         <input
//           id="nameInput"
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor="numberInput">Number</label>
//         <input
//           id="numberInput"
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleInputChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//       <h2>Contacts</h2>
//       <label htmlFor="filterInput">Find contacts by name</label>
//       <input
//         id="filterInput"
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {filteredContacts.map(contact => (
//           <li key={contact.id}>
//             {contact.name}: {contact.number}
//             <button
//               type="button"
//               onClick={() => onDeleteContact(contact.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;