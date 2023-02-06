import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveContactsList } from '../../redux/slices/contactsListSlice';
import { useGetContactsMutation } from '../../services/api/contacts'

import Navbar from '../components/Navbar/Navbar'

const Contacts = () => {
    const dispatch = useDispatch()
    const contactsList = useSelector((state: any) => { return state.contactsListSlice.contactsList })
    const [getContacts, { 
        data: contactsFetched, 
        isLoading: isLoadingContacts, 
        isSuccess: contactsFetchedSuccess }] = useGetContactsMutation()

    useEffect(() => {
        ( async() => {
            await getContacts('x').unwrap()
            .then(async (result) => {
                dispatch(saveContactsList(result))
            })
            .catch(async error => {
                // Alert.alert(
                //     'Error al obtener la lista de contactos',
                //     'Error:'+'\n\n'+error?.data?.error?.message
                // )
            })
        })()
    }, [])
    
    return(
        <div>
            <Navbar/>
            <h1>Lista de contactos</h1>
            <p>{contactsList.count}</p>
        </div>
    )
}

export default Contacts