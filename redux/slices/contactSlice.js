import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contact: {}
    },
    reducers: {
        saveContact: (state, action) => {
            const {
                id,
                firstName,
                lastName,
                email,
                phone
             } = action.payload
            state.contact = {
                id,
                firstName,
                lastName,
                email,
                phone
            }
        },
    }   
            
})

export const { saveContact } = contactSlice.actions

export default contactSlice.reducer