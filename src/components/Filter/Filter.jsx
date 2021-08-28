
import { Input } from '../ContactForm/ContactForm.styles';
import { Text } from './Filter.styles';
import { useSelector, useDispatch } from 'react-redux';

import * as contactsActions from '../../redux/phonebook/phonebook-actions';
import contactsSelectors  from '../../redux/phonebook/pnonebook-selector';



const Filter = () => {
    
const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

    return (
        <>
            
            <Text>Find contact by name</Text>
            <Input
                type='text'
                name='name'
                placeholder="Name to search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={value}
                onChange={event => dispatch(contactsActions.changeFilter(event.target.value))}
                required>
            </Input>
        </>
    );
}

export default Filter;

