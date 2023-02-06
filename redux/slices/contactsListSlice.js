import { createSlice } from "@reduxjs/toolkit";

const contactsListSlice = createSlice({
    name: "contactsLists",
    initialState: {
        contactsList: {}
    },
    reducers: {
        saveContactsList: (state, action) => {
            const { 
                count,
                perPage,
                currentPage,
                totalPages,
                results } = action.payload
            state.contactsList = { 
                count,
                perPage,
                currentPage,
                totalPages,
                results
             }
        },
    }   
            
})

export const { saveContactsList } = contactsListSlice.actions

export default contactsListSlice.reducer