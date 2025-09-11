import React, { useCallback, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Typography, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import EmojiNatureOutlinedIcon from '@mui/icons-material/EmojiNatureOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { isNA, toTitleCase } from 'helpers/StringUtils';
const randomCheckBoxes = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez']

const options = [
    {
        id: 'familia',
        text: 'Familia',
        icon: <CategoryOutlinedIcon />
    },
    {
        id: 'color',
        text: 'Color de flor',
        icon: <FilterVintageOutlinedIcon />
    },
    {
        id: 'floracion',
        text: 'Floración',
        icon: <CalendarMonthOutlinedIcon />
    },
    {
        id: 'origen',
        text: 'Origen',
        icon: <ForestOutlinedIcon />
    },
    {
        id: 'permanencia',
        text: 'Permanencia',
        icon: <EmojiNatureOutlinedIcon />
    },
    {
        id: 'corteza',
        text: 'Corteza',
        icon: <MapOutlinedIcon />
    },
]

const FilterCatalog = ({ filters, setFilters }) => {
    const [filtros, setFiltros] = useState([]);
    const [optioms, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchFiltros = useCallback(() => {
        fetch(`${process.env.ARBOLADO_BASE_URL}/biblioteca/filtros`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.error.text);
            })
            .then(filtros => {
                setFiltros(filtros);
                setError(false);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleCheckboxChange = (filterKey, value) => {
        setOptions((prev) => {
            const currentValues = prev[filterKey] || [];

            // Alternar selección (agregar o quitar el valor)
            const updatedValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];

            const newSelection = { ...prev, [filterKey]: updatedValues };

            // Guardar solo opciones seleccionadas en setFilters
            setFilters(newSelection);
            return newSelection;
        });
    };

    useEffect(() => {
        let isMounted = true;
        if (!isMounted) {
            return;
        }
        fetchFiltros();

        return () => {
            isMounted = false;
        }
    }, [fetchFiltros]);

    return (
        <Box sx={{
            borderRight: '2px solid #e0e0e0',
            height: '100vh',
        }}>
            <Box sx={{ p: 2 }}>
                <Typography variant='h4' color={'#474747'} fontWeight={550}>Filtros</Typography>
            </Box>
            <Divider />
            <Box >
                {
                    options.map((option, index) => {
                        const dataForOption = filtros[option.id] || [];
                        return (
                            <Box key={index}>
                                <Accordion sx={{ boxShadow: 'none' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: '#EEEEEE'
                                            },
                                        }}
                                    >
                                        <Typography variant='body2' color={'#474747'} fontWeight={550} sx={{ pr: 1 }}>{option.icon}</Typography>
                                        <Typography variant='body1' color={'#474747'} fontWeight={550}>{option.text}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{
                                        maxHeight: '30vh',
                                        overflowY: 'auto',
                                    }}>
                                        {
                                            dataForOption.map((item, idx) => (
                                                <FormGroup key={idx}>
                                                    <FormControlLabel control={
                                                        <Checkbox
                                                            onChange={(e) => handleCheckboxChange(option.id, item._id)}
                                                        />
                                                    } label={
                                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Typography variant='body1' color={'#474747'} fontWeight={550}>{toTitleCase(isNA(item._id))}</Typography>
                                                            <sub style={{ padding: '3px' }}>({item.count})</sub>
                                                        </Box>
                                                    } />

                                                </FormGroup>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
                                <Divider />
                            </Box>
                        )
                    })
                }
                <Divider />
            </Box>
        </Box>
    )
}

export default FilterCatalog