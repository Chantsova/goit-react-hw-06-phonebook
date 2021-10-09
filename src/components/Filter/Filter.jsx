import './Filter.css';
import { connect } from 'react-redux';
import * as contactsActions from '../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
