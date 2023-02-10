import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { saveContact } from '../../../redux/slices/contactSlice'
import { useCreateContactMutation } from '../../../api/contacts'
import { Box, Grid, Container, Typography } from '@mui/material'
import ContactForm from '../../../components/ContactForm'
import CustomSnackbar from '../../../components/CustomSnackbar'
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
        <Container maxWidth='md' sx={styles.container} >
            <Grid container >
                <Box sx={styles.boxWrapper}>
                    <Box sx={styles.titleWrapper}>
                        <Typography component="h1" variant="h3" >
                            Nuevo contacto
                        </Typography>
                    </Box>

                    <Box sx={styles.formWrapper}>
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

const styles = {
    container: {
        marginTop: '20px'
    },
    boxWrapper: {
        flexGrow: 1
    },
    titleWrapper: {
        color: '#ffffff',
        borderRadius: 1,
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#1A2027',
    },
    formWrapper: {
        marginTop: 4,
        padding: '20px',
        borderRadius: 1,
        boxShadow: 3
    }
}