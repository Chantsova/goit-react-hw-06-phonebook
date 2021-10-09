import './App.css';
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter.jsx';

function App({ contacts, filter, addContact, deleteContact, changeFilter }) {
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(savedContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // render() {
  //   const { filter } = this.state;

  return (
    <>
      <div className="wrapper">
        <section className="phonebook">
          <h1 className="phonebook__title">Phonebook</h1>
          <ContactForm />
        </section>
        <section className="contacts">
          <h2 className="contacts__title">Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
}

//const found = contacts.find(
//     contact => contact.name.toLowerCase() === data.name.toLowerCase(),
//   );
//   found === undefined
//     ? this.setState(prevState => {
//         return { contacts: [...prevState.contacts, data] };
//       })
//     : alert(`${data.name} is already in the Contact List`);
// };

export default App;
