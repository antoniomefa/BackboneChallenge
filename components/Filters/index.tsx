import React from 'react'
import { 
    Box,
    Fab,
    Grid,
    Select,
    MenuItem,
    TextField,
    IconButton,
    InputLabel,
    Typography,
    FormControl } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ImportExportIcon from '@mui/icons-material/ImportExport'

const FiltersBar = ({ setSearchBy, onChangeQuery, setOrderBy, toggleOrder, count, minWidth }) => {

    return (
        <>
            <Box sx={styles.filtersWrapper}>
                <Grid container spacing={2} >
                    <Grid item xs={4} md={2} >
                        <FormControl>
                            <InputLabel variant="standard" htmlFor="searchby-selector">
                                Buscar por
                            </InputLabel>
                            <Select
                                defaultValue={'firstName'}
                                onChange={event => setSearchBy(event.target.value)}
                                labelId={'searchby-selector'}
                                variant="standard"
                            >
                                <MenuItem value={'firstName'}>Nombre</MenuItem>
                                <MenuItem value={'lastName'}>Apellido</MenuItem>
                                <MenuItem value={'email'}>Correo</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={8} md={5} >
                        <TextField
                            id="filled-search"
                            label="Buscar contacto"
                            type="search"
                            fullWidth
                            variant="standard"
                            onChange={(event) => onChangeQuery('search', event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={7} md={3} >
                        <FormControl >
                            <InputLabel variant="standard" htmlFor="orderby-selector">
                                Ordenar por
                            </InputLabel>
                            <Select
                                defaultValue={'firstName'}
                                onChange={event => setOrderBy(event.target.value)}
                                labelId={'orderby-selector'}
                                variant="standard"
                            >
                                <MenuItem value={'firstName'}>Nombre</MenuItem>
                                <MenuItem value={'createdAt'}>Fecha de creación</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={3} md={1} sx={styles.toggleWrapper}>
                        <IconButton 
                            aria-label="sort button"
                            color='primary'
                            onClick={() => toggleOrder()}
                        >
                            <ImportExportIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={2} md={1} >
                        <Fab size={ minWidth ? "large" : "small" } color="primary" aria-label="add" href='/contacts/create'>
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
            
            <Grid container sx={styles.resultsRow} >
                <Box>
                    <Typography
                        sx={styles.text}
                        component="span"
                    >
                        Resultados:
                    </Typography>
                    <Typography
                        component="span"
                    >
                        {count}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={styles.text}
                        component="span"
                    >
                        Elementos por página:
                    </Typography>
                    <Select
                        defaultValue={10}
                        onChange={event => onChangeQuery('perPage', event.target.value)}
                        labelId={'elements-selector'}
                        variant="standard"
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                </Box>
            </Grid>
        </>
    )

}

export default FiltersBar

const styles = {
    filtersWrapper: { 
        marginTop: 4, 
        padding: '20px', 
        borderRadius: 1, 
        boxShadow: 3 
    },
    toggleWrapper: {
        alignSelf: 'center'
    },
    resultsRow: {
        padding: 2,
        justifyContent: 'space-between'
    },
    text: {
        marginRight: '20px'
    }
}