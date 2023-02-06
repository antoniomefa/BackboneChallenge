import React from 'react'
import { Pagination, FormControl, InputLabel, NativeSelect } from '@mui/material'

const Paginator = ({ count, page, onChange, onChangeQuery }) => {
    return (
        <>
        <Pagination 
            count={count}
            page={page}
            onChange={onChange}
            color="primary"
        />
        <FormControl >
            <InputLabel variant="standard" htmlFor="elements-selector">
                Elementos por página
            </InputLabel>
            <NativeSelect
                defaultValue={10}
                onChange={event => onChangeQuery('perPage', event.target.value)}
                inputProps={{
                    name: 'elements',
                    id: 'elements-selector',
                }}
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </NativeSelect>
        </FormControl>
        </>
    )
}

export default Paginator