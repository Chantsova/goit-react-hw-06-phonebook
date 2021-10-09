import { combineReducers } from 'redux';
import * as actionTypes from './contacts-types';

const items = (
  state = [
    { id: 'id-1', name: 'Anastasia', number: '161-69-55' },
    { id: 'id-2', name: 'Svetlana Divnaya', number: '443-89-12' },
    { id: 'id-3', name: 'Illya Chantsov', number: '645-17-79' },
    { id: 'id-4', name: 'Tatiana Zhelezina', number: '227-91-26' },
  ],
  { type, payload },
) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
