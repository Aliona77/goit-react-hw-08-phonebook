import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map((contact) => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// import { createSlice } from '@reduxjs/toolkit';

// import {
//  fetchContact,
//   addContact,
//   deleteContact
// } from './phonebook-actions';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//     isLoding: false,
//     error: null,
//   },
//    reducers: {
//     changeFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
//   extraReducers: {
//     [fetchContact.fulfilled]: (state, { payload }) => {
//       state.items = payload;
//       state.status = null;
//       state.error = null;
//     },
//     [fetchContact.pending]: (state) => {
//       state.status = 'loading';
//     },
//     [fetchContact.rejected]: (state) => {
//       state.status = null;
//       state.error = 'Error';
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.items = [payload, ...state.items];
//       state.status = null;
//       state.error = null;
//     },
//     [addContact.pending]: (state) => {
//       state.status = 'loading';
//       state.error = null;
//     },
//     [addContact.rejected]: (state) => {
//       state.status = null;
//       state.error = 'Error';
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.items = state.items.filter(
//         (contact) => contact.id !== payload
//       );
//     },
//   },
// });

// export const { changeFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;
