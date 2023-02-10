import React, { useState, useEffect } from 'react'

const useDebounce = (value: any, delay: number) => {
  // Estado y setter para el valor rebotado
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Asigna el valor rebotado después del retraso especificado
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearTimeout(handler)
    };
  }, [value])

  return debouncedValue
};

export default useDebounce
