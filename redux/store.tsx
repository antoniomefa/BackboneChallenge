import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

import contactsListSlice from "./slices/contactsListSlice"
import contactSlice from "./slices/contactSlice"

import { contactsApi } from "../services/api/contacts"

export const store = configureStore({
    reducer: {
        contactSlice,
        contactsListSlice,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware),
})

setupListeners(store.dispatch)