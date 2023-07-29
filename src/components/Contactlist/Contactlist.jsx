import React from 'react';
import css from './ContactList.module.css';

function Contactlist({ contacts, title, deleteContact }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <p className={css.name}>
              {name}: {number}
            </p>
            <button onClick={() => deleteContact(id)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;
