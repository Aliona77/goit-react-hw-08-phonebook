//import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
//import  {getLoading} from "../../redux/phonebook/pnonebook-selector";
//import { Spinner } from "../../components/Spinner/Spinner";

export default function ContactsViews(params) {
  // const isLoadingContacts = useSelector(getLoading);

  return (
    <Container title="Phonebook">
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {/* {isLoadingContacts && <Spinner />} */}
      <ContactList />
    </Container>
  );
}
