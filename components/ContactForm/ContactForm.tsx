import React from 'react';
import { useForm, Controller } from "react-hook-form"
import { Grid, TextField, Button, InputAdornment, CircularProgress } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import SaveIcon from '@mui/icons-material/Save'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { ContactType } from '../../utils/types';

const ContactForm = ({ contact, handleEdit, handleClose, isLoadingUpdating, isEditing }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            id: contact.id || '',
            firstName: contact.firstName || '',
            lastName: contact.lastName || '',
            email: contact.email || '',
            phone: contact.phone || ''
        }
    })

    const onSubmit = (data: ContactType) => {
        handleEdit(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container >
                <Grid container spacing={2} sx={{ marginBottom: 2 }} >
                    <Grid item xs={6} md={6} >
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: 'El nombre es requerido', minLength: 3 }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField 
                                    label="Nombre"
                                    variant="standard"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    sx={{ width: '100%'}}
                                    helperText={error ? error.message : null}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <AccountCircle />
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: 'El apellido es requerido', minLength: 3 }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField 
                                    label="Apellido"
                                    variant="standard"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    sx={{ width: '100%'}}
                                    helperText={error ? error.message : null}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <AccountCircle />
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                
                <Grid container spacing={2} sx={{ marginBottom: 2 }} >
                    <Grid item xs={6} md={6} >
                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'El teléfono es requerido' }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Teléfono"
                                variant="standard"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                sx={{ width: '100%'}}
                                helperText={error ? error.message : null}
                                type="tel"
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <PhoneIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'Email requerido' }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                                label="Correo"
                                type="email"
                                variant="standard"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                sx={{ width: '100%'}}
                                helperText={error ? error.message : null}
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                      </InputAdornment>
                                    ),
                                  }}
                            />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: 2, alignItems: 'center' }} >
                    <Grid item xs={6} md={6} >
                        <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={handleClose}>
                            Volver
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={isLoadingUpdating ?  <CircularProgress color="inherit" size={20} /> : <SaveIcon/>}
                        >
                            { isEditing ? 'Guardar cambios' : ' Guardar contacto'}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default ContactForm