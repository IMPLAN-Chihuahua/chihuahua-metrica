import React from 'react'
import Typography from "@mui/material/Typography";
import { returnUnit } from 'helpers/ReturnUnit';
import { numberWithCommas } from 'helpers/FormatNumbers';

const Oracion = ({ expr }) => {
    const { nombre, dato, idUnidad } = expr;
    return (
        <li>
            <Typography variant='body2' fontSize='1rem' sx={{ mb: 0.5 }}><i>{nombre}</i> = <b>{numberWithCommas(dato)}{returnUnit(idUnidad)}</b></Typography>
        </li>
    );
};

export default Oracion;