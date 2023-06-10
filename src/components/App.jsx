import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (newContact) => {
    const isContactExists = this.state.contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const updatedContacts = [...this.state.contacts, newContact];
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.key !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className="container">
        <h1 className="heading">Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.handleAddContact} />
        <h2 className="contacts_title">Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.onDeleteContact} />
      </div>
    );
  }
}

export default App;





// import React, { useState } from 'react';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

// const App = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [filter, setFilter] = useState('');

//   const handleAddContact = newContact => {
//     setContacts(contacts => [newContact, ...contacts]);
//   };

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const onDeleteContact = contactId => {
//     setContacts(contacts =>
//       contacts.filter(contact => contact.id !== contactId)
//     );
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h1 className="heading">Phonebook</h1>
//       <ContactForm contacts={contacts} onAddContact={handleAddContact} />
//       <h2 className="contacts_title">Contacts</h2>
//       <Filter filter={filter} handleFilterChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
//     </div>
//   );
// };

// export default App;