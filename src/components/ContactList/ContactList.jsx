import React from 'react';
import './ContactList.css';
import * as contactsActions from '../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contacts__list">
    {contacts.map(({ name, number, id }) => (
      <li className="contacts__item" key={id}>
        <p className="contacts__name">{name}</p>
        <p className="contacts__number">{number}</p>
        <button className="contacts__btn" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
  onChangeFilter: () => dispatch(contactsActions.changeFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
