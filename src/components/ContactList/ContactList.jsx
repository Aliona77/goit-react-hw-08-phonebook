import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
import {   useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';



const ContactList = () =>{
    const contacts = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    const onDeleteContact = (id) => dispatch(contactsOperations.deleteContact(id));

    return(
        <Contact>
            {contacts.map(({id, name, number}) => (
                <ContactItem
                    key={id}>
                    <Text>{name}:{number}
                    </Text>
            <ButtonDelete  type ="button" onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
            </ContactItem>
        ))}
        </Contact>
    )
}
export default ContactList;

// import React, { useEffect } from "react";
// import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
// import { useSelector, useDispatch } from 'react-redux';
// import { contactsActions, contactsSelectors} from '../../redux/phonebook';




// const ContactList = () =>{
//     const contacts = useSelector(contactsSelectors.getVisibleContacts);
//     const dispatch = useDispatch();

//     const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));
    
//     useEffect(() => {
//         dispatch(contactsActions.fetchContact())
//     }, [dispatch])

//     return (
       

//         <Contact >
            
//             {contacts.map(({id, name, number}) => (
//                 <ContactItem
//                     key={id}>
//                     <Text>{name}:{number}
//                     </Text>
//             <ButtonDelete  type ="button" onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
//             </ContactItem>
//         ))}
//         </Contact>
       
//     )
// }
// export default ContactList;



