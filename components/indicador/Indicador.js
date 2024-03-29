import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import NextLink from 'next/link';
import { numberWithCommas } from 'helpers/FormatNumbers';

export const ODS = 1;
export const UNIDAD_MEDIDA = 2;
export const COBERTURA_GEOGRAFICA = 3;

const compareIds = (a, b) => a.idCatalogo - b.idCatalogo;

const Indicador = (props) => {
  const indicador = props.value;
  return (
    <Card variant='outlined'>
      <CardActionArea sx={{ padding: 2 }}>
        <NextLink href={`/chihuahua-en-datos/indicadores/${indicador.id}`} passHref>
          <a>
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
                      fontWeight='bold'
                    >
                      Último Valor Disponible
                    </Typography>
                    <Typography
                      color={props.fontColor}
                      fontWeight='bold'
                      fontSize={25}
                    >{numberWithCommas(indicador.ultimoValorDisponible)}
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
                      Año de Referencia
                    </Typography>
                    <Typography
                    >
                      {indicador.anioUltimoValorDisponible}
                    </Typography>
                  </Grid>
                  <Divider
                    orientation='vertical'
                    variant='middle'
                    flexItem
                    sx={{ borderRightWidth: 3, display: { xs: 'none', md: 'block' } }}
                  />

                  {
                    indicador.catalogos.sort(compareIds).map((catalogo, index) => {
                      if (catalogo.idCatalogo !== ODS) {
                        if (catalogo.idCatalogo === UNIDAD_MEDIDA) {
                          return (
                            <>
                              <Grid
                                item
                                xs={4}
                                md={2}
                                container
                                textAlign='center'
                                display='flex'
                                flexDirection='column'
                                justifyContent='space-between'
                                key={index}
                              >
                                <Typography
                                  fontWeight='bold'
                                >
                                  Unidad de Medida
                                </Typography>
                                <Typography
                                >
                                  {catalogo.nombre || 'NA'}
                                </Typography>
                              </Grid>
                              <Divider
                                orientation='vertical'
                                variant='middle'
                                flexItem
                                sx={{ borderRightWidth: 3 }}
                              />
                            </>
                          )
                        } else {
                          return (
                            <Grid
                              item
                              xs={4}
                              md={2}
                              container
                              textAlign='center'
                              display='flex'
                              flexDirection='column'
                              justifyContent='space-between'
                              key={index}
                            >
                              <Typography
                                fontWeight={'bold'}
                              >
                                Cobertura Geográfica
                              </Typography>
                              <Typography
                              >
                                {catalogo.nombre || 'NA'}
                              </Typography>
                            </Grid>
                          )
                        }
                      }
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </a>
        </NextLink>
      </CardActionArea>
    </Card>
  );
};

export default Indicador;