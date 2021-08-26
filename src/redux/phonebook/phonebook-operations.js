import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (description) => (dispatch) => {
  const contact = {
    description,
    completed: false,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error.message)));
};

// DELETE @ /tasks/:id
const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};

// PATCH @ /tasks/:id
const toggleCompleted =
  ({ id, completed }) =>
  (dispatch) => {
    const update = { completed };

    dispatch(toggleCompletedRequest());

    axios
      .patch(`/contacts/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch((error) => dispatch(toggleCompletedError(error.message)));
  };

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  toggleCompleted,
};
export default contactsOperations;

// import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = () => {
//   return axios.get('/contacts');
// };

// export const fetchAddContact = (contact) => {
//   return axios.post('/contacts', contact);
// };

// export const fetchDeleteContact = (id) => {
//   return axios.delete(`contacts/${id}`);
// };
