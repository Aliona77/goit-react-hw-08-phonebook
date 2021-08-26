import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccess = createAction(
  "contacts/fetchContactsSuccess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const toggleCompletedRequest = createAction(
  "contacts/toggleCompletedRequest"
);
export const toggleCompletedSuccess = createAction(
  "contacts/toggleCompletedSuccess"
);
export const toggleCompletedError = createAction(
  "contacts/toggleCompletedError"
);

export const changeFilter = createAction("contacts/changeFilter");

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   fetchAddContact,
//   fetchDeleteContact
// } from './phonebook-operations';

// axios.defaults.baseURL = "https://611ec94f9771bf001785c61a.mockapi.io";

// export const fetchContact = createAsyncThunk(
//   'contacts/fetchContact',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await fetchContacts();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const newContact = { name, number };
//       const { data } = await fetchAddContact(newContact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

//  export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await fetchDeleteContact(id);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
