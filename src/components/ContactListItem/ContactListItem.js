import React from "react";
import PropTypes from 'prop-types';
import css from './contactListItem.module.css';

function ContactListItem({ contact, onDeleteContact }) {
  return (
    <li key={contact.id} className={css.contactsItem}>
      {contact.name}: {contact.number}{' '}
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;