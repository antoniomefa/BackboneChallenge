import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
    Box,
    Fab,
    Grid,
    List,
    Select,
    MenuItem,
    Container,
    TextField,
    IconButton,
    InputLabel,
    Pagination,
    Typography,
    FormControl,
    useMediaQuery,
    CircularProgress } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport'

import { saveContactsList } from '../../redux/slices/contactsListSlice'
import { useGetContactsMutation } from '../../services/api/contacts'
import ContactItem from '../components/ContactItem/ContactItem'


const Contacts = () => {
    const dispatch = useDispatch()
    const contactsList = useSelector((state: any) => { return state.contactsListSlice.contactsList })
    const [query, setQuery] = useState('_sort=firstName:ASC') // Se inicializa el query para la primera petición de contactos al api
    const [searchBy, setSearchBy] = useState('firstName')
    const [orderBy, setOrderBy] = useState('firstName')
    const [order, setOrder] = useState('ASC')
    const [getContacts, { isLoading: isLoadingContacts }] = useGetContactsMutation()
    const minWidth = useMediaQuery('(min-width:600px)') // Valida el width de la ventana actual

    useEffect(() => {
        ( async() => {
            await getContacts(query).unwrap()
            .then(async (result) => {
                dispatch(saveContactsList(result))
            })
            .catch(async error => {
                //TODO: Custom hook que muestre un mensaje de error, de acuerdo al código de error que recibe
            })
        })()
    }, [query])

    const onChangeQuery = (param: string, value: any) => {
        let newQuery = ''
        newQuery = param === 'page' ? `page=${value}` : `page=${contactsList.currentPage}`
        newQuery += param === 'perPage' ? `&perPage=${value}` : `&perPage=${contactsList.perPage}`
        newQuery += param === 'sort' ? `&_sort=${orderBy}:${value}` : `&_sort=${orderBy}:${order}`
        newQuery += param === 'search' ? `&${searchBy}_contains=${value}` : ''
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
        <Container maxWidth='md' sx={{ marginTop: '20px'}} >
            <Grid container xs={12} >
                <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ backgroundColor: '#1A2027', color: '#ffffff', borderRadius: 1, padding: '10px', textAlign: 'center' }}>
                        <Typography
                            component="h1"
                            variant="h3"
                        >
                            Directorio de contactos
                        </Typography>
                    </Box>
                
                    <Box sx={{ marginTop: 4, padding: '20px', borderRadius: 1, boxShadow: 3 }}>
                        <Grid container spacing={2} >
                            <Grid item xs={4} md={2} >
                                <FormControl>
                                    <InputLabel variant="standard" htmlFor="searchby-selector">
                                        Buscar por
                                    </InputLabel>
                                    <Select
                                        defaultValue={'firstName'}
                                        onChange={event => setSearchBy(event.target.value)}
                                        labelId={'searchby-selector'}
                                        variant="standard"
                                    >
                                        <MenuItem value={'firstName'}>Nombre</MenuItem>
                                        <MenuItem value={'lastName'}>Apellido</MenuItem>
                                        <MenuItem value={'email'}>Correo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={8} md={5} >
                                <TextField
                                    id="filled-search"
                                    label="Buscar contacto"
                                    type="search"
                                    fullWidth
                                    variant="standard" // filled
                                    onChange={(event) => onChangeQuery('search', event.target.value)}
                                />
                            </Grid>

                            <Grid item xs={7} md={3} >
                                <FormControl >
                                    <InputLabel variant="standard" htmlFor="orderby-selector">
                                        Ordenar por
                                    </InputLabel>
                                    <Select
                                        defaultValue={'firstName'}
                                        onChange={event => setOrderBy(event.target.value)}
                                        labelId={'orderby-selector'}
                                        variant="standard"
                                    >
                                        <MenuItem value={'firstName'}>Nombre</MenuItem>
                                        <MenuItem value={'createdAt'}>Fecha de creación</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={3} md={1} sx={{ alignSelf: 'center'}}>
                                <IconButton 
                                    aria-label="sort button"
                                    color='primary'
                                    onClick={() => toggleOrder()}
                                >
                                    <ImportExportIcon />
                                </IconButton>
                            </Grid>

                            <Grid item xs={2} md={1} >
                                <Fab size={ minWidth ? "large" : "small" } color="primary" aria-label="add" href='/contacts/create'>
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Box>
                    
                    <Grid container xs={12} sx={{ justifyContent: 'space-between', padding: 2 }} >
                        <Box>
                            <Typography
                                sx={{ marginRight: '20px'}}
                                component="span"
                            >
                                Resultados:
                            </Typography>
                            <Typography
                                component="span"
                            >
                                {contactsList.count}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ marginRight: '20px'}}
                                component="span"
                            >
                                Elementos por página:
                            </Typography>
                            <Select
                                defaultValue={10}
                                onChange={event => onChangeQuery('perPage', event.target.value)}
                                labelId={'elements-selector'}
                                variant="standard"
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                            </Select>
                        </Box>
                    </Grid>

                    <Grid container xs={12}  sx={{ justifyContent: 'center' }} >
                        {
                            !isLoadingContacts ? (
                                <List sx={{ width: '100%', maxWidth: 850 }}>
                                    {
                                        contactsList?.results &&
                                        contactsList.results.map( contact => {
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
                        <Grid container xs={12} sx={{ marginTop: 4, justifyContent: 'center', alignItems: 'center', marginBottom: 6 }}>
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
        </Container>
    )
}

export default Contacts