import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/Contactlist';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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
