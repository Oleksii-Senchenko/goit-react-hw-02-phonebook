import React from 'react';
import css from './ContactList.module.css';

function Contactlist({ contacts, title }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <p className={css.name}> {contact.name}: {contact.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;