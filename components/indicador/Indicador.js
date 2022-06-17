import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import NextLink from 'next/link';
import { numberWithCommas } from 'helpers/FormatNumbers';

export const ODS = 0;
export const UNIDAD_MEDIDA = 1;
export const COBERTURA_GEOGRAFICA = 2;

const Indicador = (props) => {
  const indicador = props.value;
  const updatedAt = indicador.updatedAt.split('T')[0];
  return (
    <Card variant='outlined'>
      <CardActionArea sx={{ padding: 2 }}>
        <NextLink href={`/chihuahua-en-datos/indicadores/${indicador.id}`} >
          <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>
            <Grid item sm container direction='column'>
              <Grid item>
                <Typography
                  variant='h6'
                  component='h3'
                  fontWeight='bold'
                  mb={2}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  {indicador.nombre}
                </Typography>
              </Grid>
              <Grid
                item
                xs
                container
                direction='row'
                justifyContent='space-evenly'
                rowSpacing={2}
              >
                <Grid
                  item
                  xs={4}
                  md={2}
                  textAlign='center'
                  container
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Typography
                    color={props.fontColor}
                    fontWeight='bold'
                    fontSize={25}
                  >{numberWithCommas(indicador.ultimoValorDisponible)}
                  </Typography>
                  <Typography>
                    Último Valor Disponible
                  </Typography>
                </Grid>
                <Divider
                  orientation='vertical'
                  variant='middle'
                  flexItem
                  sx={{ borderRightWidth: 3 }}
                />
                <Grid
                  item
                  xs={4}
                  md={2}
                  container
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Typography
                    fontWeight='bold'
                  >
                    {indicador.catalogos[UNIDAD_MEDIDA]?.nombre || 'NA'}
                  </Typography>
                  <Typography>
                    Unidad de Medida
                  </Typography>
                </Grid>
                <Divider
                  orientation='vertical'
                  variant='middle'
                  flexItem
                  sx={{
                    borderRightWidth: 3,
                    display: { xs: 'none', md: 'block' }
                  }}
                />
                <Grid
                  item
                  xs={4}
                  md={2}
                  container
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Typography
                    fontWeight='bold'
                  >
                    {updatedAt}
                  </Typography>
                  <Typography>
                    Fecha de Referencia
                  </Typography>
                </Grid>
                <Divider
                  orientation='vertical'
                  variant='middle'
                  flexItem
                  sx={{ borderRightWidth: 3 }}
                />
                <Grid
                  item
                  xs={4}
                  md={2}
                  container
                  textAlign='center'
                  display='flex'
                  flexDirection='column'
                  justifyContent='space-between'
                >
                  <Typography
                    fontWeight='bold'
                  >
                    {indicador.catalogos[COBERTURA_GEOGRAFICA]?.nombre || 'NA'}
                  </Typography>
                  <Typography>
                    Cobertura Geográfica
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </NextLink>
      </CardActionArea>
    </Card>
  );
};

export default Indicador;