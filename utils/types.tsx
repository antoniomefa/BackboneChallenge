export type ContactType = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
}

export type ContactsListType = {
    count: number,
    currentPage: number,
    totalPages: number,
    perPage: number,
    results: [{}]
}

export type ErrorType = {
    status: number,
    data: any
}

export type StateType = {
    contactSlice: {
        contact: ContactType
    },
    contactsListSlice: {
        contactsList: ContactsListType
    }
}
