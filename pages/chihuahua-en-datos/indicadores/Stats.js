import { Box, Stack, Typography } from "@mui/material"
import { indigo } from "@mui/material/colors"
import { numberWithCommas } from "helpers/FormatNumbers"


export const IndicadorStats = ({ ultimoValor, anioReferencia, tendencia, cobertura }) => {

    return (<section>
        <Stack direction={{xs: 'column', md: 'row'}} justifyContent='space-around' spacing={3}>
            <StatBox value={numberWithCommas(ultimoValor)} label='Último valor disponible' />
            <StatBox value={anioReferencia} label='Año de referencia' />
            <StatBox value={tendencia} label='Tendencia actual' />
            <StatBox value={cobertura} label='Cobertura geográfica' />
        </Stack>
    </section>)
}


const StatBox = ({ value, label }) => {
    return (
        <Box>
            <Typography
                textAlign='center'
                fontSize={30}
                fontWeight={600}
                color={'rgba(8, 32, 62, 1)'}
            >{value}</Typography>
            <Typography textAlign='center' variant='body2'>{label}</Typography>
        </Box >
    )
}