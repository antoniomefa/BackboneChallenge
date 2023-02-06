import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveContactsList } from '../../redux/slices/contactsListSlice'
import { useGetContactsMutation } from '../../services/api/contacts'

import { List, TextField, Typography, Box, InputLabel, FormControl, NativeSelect, IconButton } from '@mui/material'
import ImportExportIcon from '@mui/icons-material/ImportExport'

import Navbar from '../components/Navbar/Navbar'
import ContactItem from '../components/ContactItem/ContactItem'
import Paginator from '../components/Paginator/Paginator'

const Contacts = () => {
    const dispatch = useDispatch()
    const contactsList = useSelector((state: any) => { return state.contactsListSlice.contactsList })
    const [query, setQuery] = useState('_sort=firstName:ASC')
    const [searchBy, setSearchBy] = useState('firstName')
    const [orderBy, setOrderBy] = useState('firstName')
    const [order, setOrder] = useState('ASC')
    const [getContacts, { 
        data: contactsFetched, 
        isLoading: isLoadingContacts, 
        isSuccess: contactsFetchedSuccess }] = useGetContactsMutation()

    useEffect(() => {
        ( async() => {
            await getContacts(query).unwrap()
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
    }, [query])

    const onChangeQuery = (param: string, value: any) => {
        let newQuery = ''
        newQuery = param === 'page' ? `page=${value}` : `page=${contactsList.currentPage}`
        newQuery += param === 'perPage' ? `&perPage=${value}` : `&perPage=${contactsList.perPage}`
        newQuery += param === 'sort' ? `&_sort=${orderBy}:${value}` : `&_sort=${orderBy}:${order}`
        newQuery += param === 'search' ? `&${searchBy}_contains=${value}` : ''
        console.log(newQuery)
        setQuery(newQuery)
    }

    const toggleOrder = () => {
        if(order === 'ASC') { 
            setOrder('DESC')
        } else {
            setOrder('ASC')
        }
        onChangeQuery('order', order)
    }
    
    return(
        <div>
            <Navbar/>
            <Typography
                sx={{ display: 'block' }}
                component="h1"
                variant="h2"
                color="text.primary"
            >
                Directorio Backbone Systems
            </Typography>

            <Box sx={{ minWidth: 120 }}>
                <FormControl >
                    <InputLabel variant="standard" htmlFor="searchby-selector">
                        Buscar por
                    </InputLabel>
                    <NativeSelect
                        defaultValue={'firstName'}
                        onChange={event => setSearchBy(event.target.value)}
                        inputProps={{
                            name: 'searchBy',
                            id: 'searchby-selector',
                        }}
                    >
                        <option value={'firstName'}>Nombre</option>
                        <option value={'lastName'}>Apellido</option>
                        <option value={'email'}>Correo</option>
                    </NativeSelect>
                </FormControl>

                <TextField
                    id="filled-search"
                    label="Buscar contacto"
                    type="search"
                    variant="standard" // filled
                    onChange={(event) => onChangeQuery('search', event.target.value)}
                />

                <FormControl >
                    <InputLabel variant="standard" htmlFor="orderby-selector">
                        Ordenar por
                    </InputLabel>
                    <NativeSelect
                        defaultValue={'firstName'}
                        onChange={event => setOrderBy(event.target.value)}
                        inputProps={{
                            name: 'orderBy',
                            id: 'orderby-selector',
                        }}
                    >
                        <option value={'firstName'}>Nombre</option>
                        <option value={'createdAt'}>Fecha de creación</option>
                    </NativeSelect>
                </FormControl>

                <IconButton aria-label="sort button" onClick={() => toggleOrder()}>
                    <ImportExportIcon />
                </IconButton>
            </Box>

            
            <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="h6"
                color="text.primary"
            >
                Resultados
            </Typography>
            <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="h6"
                color="text.primary"
            >
                {contactsList.count}
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    contactsList?.results &&
                    contactsList.results.map( contact => {
                        return (
                            <ContactItem contact={contact} key={contact.id}/>
                        )
                    })
                }
            </List>

            {
                contactsList?.currentPage &&
                <Paginator
                    count={contactsList.totalPages}
                    page={contactsList.currentPage}
                    onChangeQuery={onChangeQuery}
                    onChange={(event: React.ChangeEvent<unknown>, value: number) => onChangeQuery('page', value)}
                />
            }
        </div>
    )
}

export default Contacts