import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import json from './dimensions.json';
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
    const { dimensions } = json;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', mb: 3 }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            }}>
                <Tabs value={value} onChange={handleChange}
                    sx={{
                        p: 1,
                        pl: 3,
                        '& .MuiTabs-indicator': {
                            display: 'none'
                        },
                        background: ' linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box;',
                        borderRadius: '40px',
                        border: '2px solid transparent',
                        mb: 2
                    }}
                >
                    <Tab label="Infraestructura de Desarrollo"
                        sx={{
                            backgroundColor: 'rgba(255, 139, 253, 0.2)',
                            borderRadius: '40px',
                            width: '300px',
                            fontWeight: '500',
                            '&.Mui-selected': {
                                backgroundImage: 'linear-gradient(90deg, #712370 0%, #A6296C 50%, #D12D6A 100%)',
                                color: 'white',
                                fontWeight: 'bold'

                            },
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                            mr: 3,
                            transition: 'all 0.3s ease-in-out',
                        }}
                    />
                    <Tab label="Entornos Urbanos Consolidados" sx={{
                        backgroundColor: 'rgba(255, 139, 253, 0.2)',
                        borderRadius: '40px',
                        width: '300px',
                        fontWeight: '500',
                        '&.Mui-selected': {
                            backgroundImage: 'linear-gradient(90deg, #712370 0%, #A6296C 50%, #D12D6A 100%)',
                            color: 'white',
                            fontWeight: 'bold'

                        },
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                        mr: 3,
                        transition: 'all 0.3s ease-in-out'

                    }} />

                    <Tab label="Calidad de vida y Sostenibilidad Ambiental" sx={{
                        backgroundColor: 'rgba(255, 139, 253, 0.2)',
                        borderRadius: '40px',
                        width: '300px',
                        fontWeight: '500',
                        '&.Mui-selected': {
                            backgroundImage: 'linear-gradient(90deg, #712370 0%, #A6296C 50%, #D12D6A 100%)',
                            color: 'white',
                            fontWeight: 'bold'
                        },
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                        mr: 3,
                        transition: 'all 0.3s ease-in-out'

                    }} />
                </Tabs>
            </Box>

            {
                dimensions.map((item, index) => {
                    return (
                        <CustomPanel value={value} index={index} key={index}>
                            <Dimension id={index} dimension={item} />
                        </CustomPanel>
                    )
                })

            }

        </Box>
    )
}


const Dimension = (props) => {
    const { id, dimension, index } = props;

    return (
        <Box sx={{
            width: '100%',
        }}>
            <Grid container>
                <Grid item xs={12} sm={7} sx={{ pt: 3 }} >
                    <Typography variant='h5' fontWeight={600} mb={2}>
                        {dimension.title}
                    </Typography>
                    <Typography variant='h6' fontWeight={400} mb={1} >
                        {dimension.shortDescription}
                    </Typography>
                    <Typography variant='h6' fontWeight={400} mb={3} sx={{
                    }}>
                        {dimension.summary}
                    </Typography>
                    <Typography variant='subtitle2' fontWeight={600} color={'blueviolet'}>
                        <NextLink href={`/chihuahua-en-datos/dimensiones/${dimension.id}/indicadores`} passHref>
                            <a>Ver indicadores</a>
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
                        src={`${dimension.img}`}
                        style={{ width: '300px', height: '300px', borderRadius: '5px' }}
                    />
                </Grid>

            </Grid>
        </Box>
    )
}

export default PrimordialBox