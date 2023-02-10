import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, List, Container, Pagination, Typography, useMediaQuery, CircularProgress } from '@mui/material'
import { saveContactsList } from '../../redux/slices/contactsListSlice'
import { useGetContactsMutation } from '../../api/contacts'
import { useErrorMessage } from '../../hooks/useErrorMessage'
import FiltersBar from '../../components/Filters'
import CustomSnackbar from '../../components/CustomSnackbar/CustomSnackbar'
import ContactItem from '../../components/ContactItem/ContactItem'
import { ContactType, StateType } from '../../utils/types'

const Contacts: React.FC = () => {
    const dispatch = useDispatch()
    const minWidth = useMediaQuery('(min-width:600px)') // Valida el width de la ventana actual
    const contactsList = useSelector((state: StateType) => { return state.contactsListSlice.contactsList })
    const [getContacts, { isLoading: isLoadingContacts }] = useGetContactsMutation()
    const [ errorMessage, seterrorCode ] = useErrorMessage() // Custom hook que devuelve el mensaje de error del servidor
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('_sort=firstName:ASC') // Se inicializa el query para la primera petición de contactos al api
    const [searchBy, setSearchBy] = useState<string>('firstName')
    const [orderBy, setOrderBy] = useState<string>('firstName')
    const [order, setOrder] = useState<string>('ASC')

    useEffect(() => {
        ( async() => {
            await getContacts(query).unwrap()
            .then( result => {
                dispatch(saveContactsList(result))
            })
            .catch( error => {
                seterrorCode(error)
                setShowSnackbar(true)
            })
        })()
    }, [query])

    const onChangeQuery = (param: string, value: string | number) => {
        let newQuery = ''
        newQuery = param === 'page' ? `page=${value}` : `page=${contactsList.currentPage}`
        newQuery += param === 'perPage' ? `&perPage=${value}` : `&perPage=${contactsList.perPage}`
        newQuery += param === 'sort' ? `&_sort=${orderBy}:${value}` : `&_sort=${orderBy}:${order}`
        newQuery += param === 'search' ? `&${searchBy}_contains=${value}` : ''
        setQuery(newQuery)
    }

    const toggleOrder = () => {
        setOrder(order === 'ASC' ? 'DESC' : 'ASC')
        onChangeQuery('order', order)
    }
    
    return(
        <Container maxWidth='md' sx={{ marginTop: '20px'}} >
            <Grid container >
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ backgroundColor: '#1A2027', color: '#ffffff', borderRadius: 1, padding: '10px', textAlign: 'center' }}>
                        <Typography component="h1" variant="h3" >
                            Directorio de contactos
                        </Typography>
                    </Box>
                
                    <FiltersBar
                        setSearchBy={setSearchBy}
                        onChangeQuery={onChangeQuery}
                        setOrderBy={setOrderBy}
                        toggleOrder={toggleOrder}
                        count={contactsList.count}
                        minWidth={minWidth}
                    />

                    <Grid container sx={{ justifyContent: 'center' }} >
                        {
                            !isLoadingContacts ? (
                                <List sx={{ width: '100%', maxWidth: 850 }}>
                                    {
                                        contactsList?.results &&
                                        contactsList.results.map( (contact: ContactType): JSX.Element => {
                                            return (
                                                <ContactItem contact={contact} key={contact.id} isDeleting={false} />
                                            )
                                        })
                                    }
                                </List>
                            ) : <CircularProgress />
                        }
                    </Grid>
                    {
                        contactsList?.currentPage &&
                        <Grid container sx={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', marginBottom: 6 }}>
                            <Pagination 
                                count={contactsList.totalPages}
                                page={contactsList.currentPage}
                                onChange={(event: React.ChangeEvent<unknown>, value: number) => onChangeQuery('page', value)}
                                color="primary"
                                size={ minWidth ? 'large' : 'small' }
                            />
                        </Grid>
                    }
                </Box>
            </Grid>
            {
                showSnackbar && (
                    <CustomSnackbar
                        open={showSnackbar}
                        setOpen={setShowSnackbar}
                        message={errorMessage}
                    />
                )
            }
        </Container>
    )
}

export default Contacts