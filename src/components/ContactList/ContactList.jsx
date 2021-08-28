import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
import { useSelector, useDispatch } from 'react-redux';

import  contactsOperations from '../../redux/phonebook/phonebook-operations';
import * as contactSelectors from "../../redux/phonebook/pnonebook-selector";



const ContactList = () => {
    
 const contacts = useSelector(contactSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  

    return (
        <>
           
                <Contact>
                    {contacts.map(({ id, name, number }) => (
                        <ContactItem
                            key={id}>
                            <Text>{name}:{number}
                            </Text>
                            <ButtonDelete type="button" onClick={() => dispatch(contactsOperations.deleteContact(id))}>Delete</ButtonDelete>
                        </ContactItem>
                    ))}
                </Contact>
          
                </>
    )
}
export default ContactList;


  
