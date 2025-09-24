import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import json from './objetivos.json';
import NextLink from "next/link";

const CustomPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <Box
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {
                value === index && (
                    <Box>
                        {children}
                    </Box>
                )
            }
        </Box>
    )
}

const PrimordialBox = () => {
    const [value, setValue] = useState(0);
    const { objetivos } = json;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%', mb: 3,
            borderRadius: '10px',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }
            } >
                <Tabs value={value} onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none'
                        },
                        borderRadius: '40px',
                        '& .MuiTabs-flexContainer': {
                            gap: 5
                        },
                    }}
                    scrollButtons={true}
                    variant='scrollable'
                    allowScrollButtonsMobile

                >
                    <Tab label="Infraestructura de Desarrollo"
                        sx={{
                            backgroundColor: 'rgba(255, 139, 253, 0.2)',
                            borderRadius: '40px',
                            '&.Mui-selected': {
                                backgroundImage: 'linear-gradient(90deg, #08203E 0%, #2F4E69 50%, #557C93 100%)',
                                color: 'white',
                            },
                            fontWeight: 700,
                        }}
                    />
                    <Tab label="Entornos Urbanos Consolidados" sx={{
                        backgroundColor: 'rgba(255, 139, 253, 0.2)',
                        borderRadius: '40px',
                        '&.Mui-selected': {
                            backgroundImage: 'linear-gradient(90deg, #08203E 0%, #2F4E69 50%, #557C93 100%)',
                            color: 'white',
                        },
                        fontWeight: 700,
                    }} />

                    <Tab label="Calidad de vida y Sostenibilidad Ambiental" sx={{
                        backgroundColor: 'rgba(255, 139, 253, 0.2)',
                        borderRadius: '40px',
                        '&.Mui-selected': {
                            backgroundImage: 'linear-gradient(90deg, #08203E 0%, #2F4E69 50%, #557C93 100%)',
                            color: 'white',
                        },
                        fontWeight: 700,
                    }} />
                </Tabs>
            </Box >

            {
                objetivos.map((item, index) => {
                    return (
                        <CustomPanel value={value} index={index} key={index}>
                            <Objetivo id={index} objetivo={item} />
                        </CustomPanel>
                    )
                })

            }

        </Box >
    )
}


const Objetivo = (props) => {
    const { id, objetivo, index } = props;

    return (
        <Box sx={{
            width: '100%',
        }}>
            <Grid container>
                <Grid item xs={12} sm={7} sx={{ pt: 3 }} >
                    <Typography variant='h5' fontWeight={600} mb={2}>
                        {objetivo.title}
                    </Typography>
                    <Typography variant='h6' fontWeight={400} mb={1} >
                        {objetivo.shortDescription}
                    </Typography>
                    <Typography variant='h6' fontWeight={400} mb={3} sx={{
                    }}>
                        {objetivo.summary}
                    </Typography>
                    <Typography variant='subtitle2' fontWeight={600} color={'blueviolet'}>
                        <NextLink href={`/chihuahua-en-datos/objetivos/${objetivo.id}/indicadores`} passHref>
                            <a>
                                <Button variant='contained' sx={{
                                    backgroundImage: 'linear-gradient(90deg, #08203E 0%, #2F4E69 50%, #557C93 100%)',
                                    borderRadius: '40px',
                                    fontWeight: 'bold',
                                    pl: 2,
                                    pr: 2,
                                    pt: 1,
                                    pb: 1,
                                }}>
                                    Ver indicadores
                                </Button>
                            </a>
                        </NextLink>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={5}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3
                    }}
                >
                    <img
                        src={`${objetivo.img}`}
                        style={{ width: '100%', height: '100%', borderRadius: '5px' }}
                    />
                </Grid>

            </Grid>
        </Box>
    )
}

export default PrimordialBox