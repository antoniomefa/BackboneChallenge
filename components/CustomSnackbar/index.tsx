import React from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert( props, ref ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

const CustomSnackbar = ({ open, setOpen, message }) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default CustomSnackbar