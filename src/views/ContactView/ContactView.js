import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import contactsOperations from "../../redux/phonebook/phonebook-operations";
import contactsSelectors from "../../redux/phonebook/pnonebook-selector";
import { Spinner } from "../../components/Spinner/Spinner";

export default function ContactsViews() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {isLoadingContacts && <Spinner />}
      <ContactList />
    </Container>
  );
}
