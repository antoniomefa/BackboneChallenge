import React, { useState, useCallback } from 'react'
import { ErrorType } from '../utils/types'

export const useErrorMessage = (): [string, Function] => {
    const [errorMessage, setErrorMessage] = useState<string>('')

    const seterrorCode: Function = useCallback((error: ErrorType) => {
        switch(error.status) {
            case 400: {
                        if (error.data.data.errors.email)
                            setErrorMessage('El correo debe tener un formato válido')
                        if (error.data.data.errors.phone)
                            setErrorMessage('El teléfono debe tener al menos 10 números')
                        break
                    }
            case 422: {
                        if (error.data.message == 'This phone number already exists!')
                            setErrorMessage('¡Este número de teléfono ya existe!')
                        if (error.data.message == 'This email address already exists!')
                            setErrorMessage('¡Esta dirección de correo ya existe!')
                        break
                    }
            case 500: {
                        setErrorMessage('Error al obtener la información, intentelo de nuevo más tarde')
                        break
                    }
            default:    
                        setErrorMessage('Error al guardar la información, intentalo de nuevo más tarde')
        }},
    [],)
    
    return [ errorMessage, seterrorCode ]
}