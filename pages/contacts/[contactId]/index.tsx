import React, { useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact } from '../../../redux/slices/contactSlice'
import { useFindOneContactMutation, useUpdateContactMutation } from '../../../services/api/contacts'
import { 
    Box,
    Grid,
    Container,
    Typography,
    CircularProgress } from '@mui/material'

import ContactForm from '../../components/ContactForm/ContactForm'
import CustomSnackbar from '../../components/CustomSnackbar/CustomSnackbar'

const EditContact = () => {
    const { query, back } = useRouter()
    const dispatch = useDispatch()
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const contact = useSelector((state: any) => { return state.contactSlice.contact })
    const [getContact, { isLoading: isLoadingContact }] = useFindOneContactMutation()
    const [updateContact, { isLoading: isLoadingUpdating }] = useUpdateContactMutation()

    useLayoutEffect(() => {
        ( async() => {
            await getContact(query.contactId).unwrap()
            .then(result => {
                dispatch(saveContact(result))
            })
            .catch( error => {
                console.log(error)
            })
        })()
    }, [query.contactId !== contact.id]) 

    const handleEdit = async (newData: any) => {
        await updateContact(newData).unwrap()
        .then((result) => {
            dispatch(saveContact(result))
            back()
        })
        .catch((error) => {
            switch(error.status) {
                case 400: {
                            if (error.data.data.errors.email)
                                setSnackbarMessage('El correo debe tener un formato válido')
                            if (error.data.data.errors.phone)
                                setSnackbarMessage('El teléfono debe tener al menos 10 números')
                            break
                        }
                case 422: {
                            if (error.data.message == 'This phone number already exists!')
                                setSnackbarMessage('¡Este número de teléfono ya existe!')
                            if (error.data.message == 'This email address already exists!')
                                setSnackbarMessage('¡Esta dirección de correo ya existe!')
                            break
                        }
                default:    
                            setSnackbarMessage('Error al guardar la información, intentalo de nuevo más tarde.')
            }
            setShowSnackbar(true)
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
                            Editando contacto
                        </Typography>
                    </Box>

                    <Box sx={{ marginTop: 4, padding: '20px', borderRadius: 1, boxShadow: 3 }}>
                        {
                            isLoadingContact ? 
                                <CircularProgress /> 
                            : 
                                <ContactForm 
                                    contact={contact}
                                    handleEdit={handleEdit}
                                    handleClose={back}
                                    isLoadingUpdating={isLoadingUpdating}
                                    isEditing
                                />
                        }
                    </Box>

                    {
                        showSnackbar && (
                            <CustomSnackbar
                                open={showSnackbar}
                                setOpen={setShowSnackbar}
                                message={snackbarMessage}
                            />
                        )
                    }

                </Box>
            </Grid>
        </Container>
    )
}

export default EditContact