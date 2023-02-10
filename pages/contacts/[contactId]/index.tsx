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
import ContactForm from '../../../components/ContactForm'
import CustomSnackbar from '../../../components/CustomSnackbar'
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
        <Container maxWidth='md' sx={styles.container} >
            <Grid container >
                <Box sx={styles.boxWrapper}>
                    <Box sx={styles.titleWrapper}>
                        <Typography
                            component="h1"
                            variant="h3"
                        >
                            Editando contacto
                        </Typography>
                    </Box>

                    <Box sx={styles.contactWrapper}>
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

const styles = {
    container: { 
        marginTop: '20px'
    },
    boxWrapper: { 
        flexGrow: 1
    },
    titleWrapper: {
        borderRadius: 1,
        padding: '10px',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#1A2027',
    },
    contactWrapper: {
        marginTop: 4,
        padding: '20px',
        borderRadius: 1,
        boxShadow: 3
    }
}