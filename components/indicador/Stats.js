import { Box, Stack, Typography } from "@mui/material"
import { indigo } from "@mui/material/colors"
import { numberWithCommas } from "helpers/FormatNumbers"


const IndicadorStats = ({ ultimoValor, anioReferencia, tendencia, cobertura }) => {

    return (<section>
        <Stack direction='row' justifyContent='space-around' flexWrap='wrap'>
            <StatBox value={numberWithCommas(ultimoValor)} unidad={unidad} label='Último valor disponible' />
            <StatBox value={anioReferencia} label='Año de referencia' />
            <StatBox value={tendencia} label='Tendencia actual' />
            {
                cobertura !== 'NA-ODS' && <StatBox value={cobertura} label='Cobertura geográfica' />
            }
            {/* <StatBox value={cobertura} label='Cobertura geográfica' /> */}
        </Stack>
    </section>)
}


const StatBox = ({ value, label, unidad }) => {
    return (
        <Box>
            <Typography
                textAlign='center'
                fontSize={30}
                fontWeight={600}
                color={'rgba(8, 32, 62, 1)'}
            >{value}</Typography>
            <Typography textAlign='center' variant='body1'>{label}</Typography>
            <Typography textAlign='center' variant='body2'>{unidad}</Typography>
        </Box >
    )
}

export default IndicadorStats;