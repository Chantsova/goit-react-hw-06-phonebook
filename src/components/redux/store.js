import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// Телефонная книга
// Выполни рефакторинг кода приложения «Телефонная книга» добавив управление состоянием при помощи библиотеки Redux.

// Пусть Redux-состояние выглядит следующим образом.

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
// Шаг 1
// Используй только возможности библиотеки Redux (без redux-toolkit).

// Создай хранилище и добавь инструменты разработчика
// Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.
// Вынеси типы действий в отдельный файл констант.
// Создай редюсеры контактов и фильтра.
// Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки react-redux.
// Шаг 2
// Выполни рефакторинг кода и сократи Redux-бойлерплейт используя библиотеку Redux Tookit. Используй функции configureStore(), createAction() и createReducer().
