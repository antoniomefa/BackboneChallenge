import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact } from '../../../redux/slices/contactSlice'
import { useFindOneContactMutation, useDeleteContactMutation } from '../../../services/api/contacts'

import { Box, Grid, Container, Typography, Button, Stack, CircularProgress } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete'

import ContactItem from '../../components/ContactItem/ContactItem'

const DeleteContact = () => {
    const { query, back } = useRouter()
    const dispatch = useDispatch()
    const contact = useSelector((state: any) => { return state.contactSlice.contact })
    const [getContact, { isLoading: isLoadingContact }] = useFindOneContactMutation()
    const [deleteContact, { isLoading: isLoadingDeleting }] = useDeleteContactMutation()


    useEffect(() => {
        ( async() => {
            await getContact(query.contactId).unwrap()
            .then(result => {
                dispatch(saveContact(result))
            })
            .catch( error => {
                console.log(error)
            })
        })()
    }, []) 

    const handleDelete = async () => {
        await deleteContact(contact.id).unwrap()
        .then(() => {
            back()
        })
        .catch((error) => {
            console.log(error)
        })
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
                            Eliminando contacto
                        </Typography>
                    </Box>

                    <Box sx={{ marginTop: 4 }}>
                        {
                            isLoadingContact ? <CircularProgress /> : <ContactItem contact={contact} isDeleting />
                        }
                    </Box>

                    <Grid container sx={{ marginTop: 4, alignItems: 'center' }}>
                        <Grid item xs={6} md={6}>
                            <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={() => back()}>
                                Volver
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Button 
                                variant="contained"
                                startIcon={isLoadingDeleting ?  <CircularProgress color="inherit" size={20} /> : <DeleteIcon/>}
                                onClick={handleDelete}
                            >
                                Eliminar contacto
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
}

export default DeleteContact