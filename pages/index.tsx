import React from 'react'
import { Container, Box, Button, Grid, Typography } from '@mui/material'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import Link from 'next/link'

const Home: React.FC = () => {
    return(
        <Container maxWidth="lg" sx={{ display: 'flex', marginTop: '20px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ backgroundColor: '#1A2027', color: '#ffffff', borderRadius: 1, padding: '50px', textAlign: 'center' }}>
                            <Typography
                                component="h1"
                                variant="h3"
                            >
                                Reto Técnico React Frontend Sr.
                            </Typography>
                            <Typography
                                component="h2"
                                variant="h4"
                            >
                                para Backbone Systems
                            </Typography>
                            <Typography
                                sx={{ marginTop: 10 }}
                                component="h6"
                                variant="h6"
                            >
                                Desarrollado por:
                            </Typography>
                            <Typography
                                component="h5"
                                variant="h5"
                            >
                                Antonio Mendiola Farías
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
                    <Link href="/contacts" legacyBehavior>
                        <Button
                            variant="contained"
                            color="inherit"
                            size="large"
                            startIcon={<RecentActorsIcon/>}
                        >
                           Ver directorio de Contactos
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Home