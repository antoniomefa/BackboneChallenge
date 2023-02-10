import React, { useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact } from '../../../redux/slices/contactSlice'
import { useFindOneContactMutation, useUpdateContactMutation } from '../../../api/contacts'
import { 
    Box,
    Grid,
    Container,
    Typography,
    CircularProgress } from '@mui/material'
import { useErrorMessage } from '../../../hooks/useErrorMessage'
import ContactForm from '../../../components/ContactForm/ContactForm'
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar'
import { ContactType } from '../../../utils/types'

const EditContact: React.FC = () => {
    const { query, back } = useRouter()
    const dispatch = useDispatch()
    const [showSnackbar, setShowSnackbar] = useState(false)
    const contact = useSelector((state: any) => { return state.contactSlice.contact })
    const [getContact, { isLoading: isLoadingContact }] = useFindOneContactMutation()
    const [updateContact, { isLoading: isLoadingUpdating }] = useUpdateContactMutation()
    const [ errorMessage, seterrorCode ] = useErrorMessage() // Custom hook que devuelve el mensaje de error del servidor

    useLayoutEffect(() => {
        ( async() => {
            await getContact(query.contactId).unwrap()
            .then(result => {
                dispatch(saveContact(result))
            })
            .catch( error => {
                seterrorCode(error)
                setShowSnackbar(true)
            })
        })()
    }, [query.contactId !== contact.id]) 

    const handleEdit = async (newData: ContactType) => {
        await updateContact(newData).unwrap()
        .then((result) => {
            dispatch(saveContact(result))
            back()
        })
        .catch((error) => {
            seterrorCode(error)
            setShowSnackbar(true)
        })
    }

    return(
        <Container maxWidth='md' sx={{ marginTop: '20px'}} >
            <Grid container >
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
                                message={errorMessage}
                            />
                        )
                    }

                </Box>
            </Grid>
        </Container>
    )
}

export default EditContact