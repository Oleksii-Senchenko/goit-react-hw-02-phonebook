import React from 'react';
import Contactlist from '../Contactlist/Contactlist';

function ContactListFilters({ getFilteredContacts }) {
  // Вызываем функцию getFilteredContacts для получения отфильтрованных контактов
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      {filteredContacts.map(contact => (
        <Contactlist
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
}

export default ContactListFilters;