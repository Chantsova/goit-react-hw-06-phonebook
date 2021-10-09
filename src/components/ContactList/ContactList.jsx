import './ContactList.css';
import React from 'react';
import * as contactsActions from '../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
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
}
