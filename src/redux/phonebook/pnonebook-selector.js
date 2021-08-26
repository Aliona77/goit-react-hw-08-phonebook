import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

const getTotalContactCount = (state) => {
  const contacts = getAllContacts(state);
  return contacts.length;
};

const getCompletedContactCount = createSelector(
  [getAllContacts],
  (contacts) => {
    return contacts.reduce(
      (total, contact) => (contact.completed ? total + 1 : total),
      0
    );
  }
);

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getVisibleContacts,
  getTotalContactCount,
  getCompletedContactCount,
};
export default contactsSelectors;

// import { createSelector } from "@reduxjs/toolkit";

// export const getLoading = (state) => state.contacts.loading;

// export const getFilter = (state) => state.contacts.filter;

//  export const getAllContacts = (state) => state.contacts.items;

// export const getVisibleContacts = createSelector(
//   [getAllContacts, getFilter],
//   (contacts, filter) => {
//    const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

// export const getContacts = (state) => state.contacts.items;

// export const getFilter = (state) => state.contacts.filter;

// export const onFilteredContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
