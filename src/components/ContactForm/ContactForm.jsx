import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'

import { useSelector, useDispatch  } from "react-redux";
import   contactsSelectors  from '../../redux/phonebook/pnonebook-selector';
import  contactsOperations from '../../redux/phonebook/phonebook-operations';


export default function ContactForm() {
   const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    number: '',
  });
  
  const contacts = useSelector(contactsSelectors.getContacts)
   
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  
  
  
    
  const  handleChange = event => {
  const { name, value } = event.currentTarget;
  setUser(user => ({ ...user, [name]: value }));
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts.some(contact => contact.name === user.name)) {
      alert(`${user.name} is already in contacts`);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact(user));

    reset();
  };
  
  
    const reset = () => {
         setUser({ name: '', number: '' });
    }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={user.name}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
                          
        />
      </Label>
        
      <Label>
        <Span >Number</Span>
        <Input
          type="tel"
          name="number"
          placeholder="Enter number"
          onChange={handleChange}
          value={user.number}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
                   
        />
      </Label>
               
      <ButtonAdd
        type="submit"
      >
        Add contact
      </ButtonAdd>
    </form>
  );
}

