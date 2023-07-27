import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/Contactlist';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number:'',
  };

  addContact = data => {
    const contact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <ContactForm addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} title={'Contacts'} />
      </>
    );
  }
}
