import React from "react";

function ContactListItem({ contact, onDeleteContact }) {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}{" "}
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;