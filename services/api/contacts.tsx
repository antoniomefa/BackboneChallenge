import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, CONTACTS } from '../../utils/constants'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
  
    // *** CONTACTS CRUD *** //
    createContact: builder.mutation({
      query: (contact) => ({
          url: CONTACTS,
          method: 'POST',
          body: {
              data: contact
          },
      }),
    }),
    getContacts: builder.mutation({
      query: () => ({
        url: `${CONTACTS}/`,
        method: 'GET',
      }),
    }),
    findOneContact: builder.mutation({
      query: (id) => ({
        url: `${CONTACTS}/${id}`,
        method: 'GET',
      }),
    }),
    updateContact: builder.mutation({
      query: ({id, ...contact}) => ({
          url: `${CONTACTS}/${id}`,
          method: 'PUT',
          body: {
              data: contact
          },
      }),
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
          url: `${CONTACTS}/${contactId}`,
          method: 'DELETE',
      }),
      transformResponse: (response) => response,
    }),
  }),
})

export const {
  useCreateContactMutation,
  useGetContactsMutation,
  useFindOneContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi