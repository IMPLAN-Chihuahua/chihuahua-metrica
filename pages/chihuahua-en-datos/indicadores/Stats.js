import { Box, Stack, Typography } from "@mui/material"
import { indigo } from "@mui/material/colors"
import { numberWithCommas } from "helpers/FormatNumbers"


export const IndicadorStats = ({ ultimoValor, anioReferencia, tendencia, cobertura, unidad }) => {

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
                fontSize={36}
                fontWeight={600}
                color={indigo[900]}
                mb={1}
            >{value}</Typography>
            <Typography textAlign='center' variant='body1'>{label}</Typography>
            <Typography textAlign='center' variant='body2'>{unidad}</Typography>
        </Box >
    )
}