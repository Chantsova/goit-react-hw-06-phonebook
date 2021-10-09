import * as actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = data => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export const changeContact = value => ({
  type: actionTypes.CHANGE_VALUE,
  payload: value,
});
