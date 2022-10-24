import React from 'react'
import Typography from "@mui/material/Typography";
import { returnUnit } from 'helpers/ReturnUnit';

const Oracion = ({ expr }) => {
    const { nombre, dato, idUnidad } = expr;
    return (
        <li>
            <Typography variant='body2' fontSize='1rem' sx={{ mb: 0.5 }}><i>{nombre}</i> = <b>{dato}{returnUnit(idUnidad)}</b></Typography>
        </li>
    );
};

export default Oracion;