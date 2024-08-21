import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import NextLink from 'next/link';
import { numberWithCommas } from 'helpers/FormatNumbers';
import { Chip, Tooltip } from '@mui/material';

export const ODS = 1;
export const UNIDAD_MEDIDA = 2;
export const COBERTURA_GEOGRAFICA = 3;

const compareIds = (a, b) => a.idCatalogo - b.idCatalogo;

const Indicador = (props) => {
  const indicador = props.value;
  const objetivo = indicador.objetivos[0]
  const ods = indicador.catalogos.find(c => c.idCatalogo === ODS);
  const coberturaGeografica = indicador.catalogos.find(c => c.idCatalogo === COBERTURA_GEOGRAFICA);
  return (
    <Tooltip title={objetivo?.destacado ? `Este indicador abona principalmente para lograr el objetivo '${objetivo.titulo}'` : ``} placement='left-start'>
      <Card variant='outlined'>
        <CardActionArea sx={{ p: 2 }}>
          <NextLink href={`/chihuahua-en-datos/indicadores/${indicador.id}`} passHref>
            <a>
              {objetivo?.destacado && (
                <Chip
                  sx={{ backgroundColor: '#08203E', color: 'white', }}
                  label='destacado'
                  size='small'
                />

              )}
              <Grid container justifyContent='center' spacing={4}>
                <Grid item sm container direction='column'>
                  <Grid item>
                    <Typography
                      variant='h6'
                      component='h3'
                      mb={2}
                      textAlign={{ xs: 'center', sm: 'left' }}
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
                      <Typography>
                        Último Valor Disponible
                      </Typography>
                      <Typography
                        color={props.fontColor}
                        fontWeight='bold'
                        fontSize={25}
                      >{numberWithCommas(indicador.ultimoValorDisponible)}{indicador.adornment !== null && indicador.adornment}
                      </Typography>
                    </Grid>
                    <Divider
                      orientation='vertical'
                      variant='middle'
                      flexItem
                      sx={{ borderRightWidth: 2, minHeight: '4rem', maxHeight: '5rem' }}
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
                      <Typography>
                        Año de Referencia
                      </Typography>
                      <Typography fontWeight={600}>
                        {indicador.anioUltimoValorDisponible}
                      </Typography>
                    </Grid>
                    <Divider
                      orientation='vertical'
                      variant='middle'
                      flexItem
                      sx={{ borderRightWidth: 2, display: { xs: 'none', md: 'block' } }}
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
                      <Typography>
                        Objetivo Desarrollo Sostenible
                      </Typography>
                      <Typography fontWeight={600}>
                        {ods.nombre}
                      </Typography>
                    </Grid>
                    <Divider
                      orientation='vertical'
                      variant='middle'
                      flexItem
                      sx={{ borderRightWidth: 2, minHeight: '4rem', maxHeight: '5rem', }}
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
                      <Typography>
                        Cobertura Geográfica
                      </Typography>
                      <Typography fontWeight={600}>
                        {coberturaGeografica.nombre}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </a>
          </NextLink>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};

export default Indicador;