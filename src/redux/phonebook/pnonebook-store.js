//===========REDUX_TOOLKIT==============

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import contactsReducer from "./phonebook-reducer";
import { authReducer } from "../auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

//===========================REDUX===============

// import contactsReducer from "./phonebook-reducer";
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
