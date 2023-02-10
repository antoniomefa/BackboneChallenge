import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact } from '../../../redux/slices/contactSlice'
import { useCreateContactMutation } from '../../../api/contacts'
import { Box, Grid, Container, Typography } from '@mui/material'
import ContactForm from '../../../components/ContactForm/ContactForm'
import CustomSnackbar from '../../../components/CustomSnackbar/CustomSnackbar'
import { useErrorMessage } from '../../../hooks/useErrorMessage'
import { ContactType } from '../../../utils/types'

const CreateContact: React.FC = () => {
    const { back } = useRouter()
    const dispatch = useDispatch()
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false)
    const contact = useSelector((state: any) => { return state.contactSlice.contact })
    const [createContact, { isLoading: isLoadingUpdating }] = useCreateContactMutation()
    const [ errorMessage, seterrorCode ] = useErrorMessage() // Custom hook que devuelve el mensaje de error del servidor

    const handleCreate = async (newData: ContactType) => {
        await createContact(newData).unwrap()
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
                        <Typography component="h1" variant="h3" >
                            Nuevo contacto
                        </Typography>
                    </Box>

                    <Box sx={{ marginTop: 4, padding: '20px', borderRadius: 1, boxShadow: 3 }}>
                        <ContactForm 
                            contact={contact}
                            handleEdit={handleCreate}
                            handleClose={back}
                            isLoadingUpdating={isLoadingUpdating}
                            isEditing={false}
                        />
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

export default CreateContact