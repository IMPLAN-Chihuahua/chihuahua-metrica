import * as React from 'react';
import { Container, Typography, Grid, List, Icon } from '@mui/material';
import Head from "next/head";
import { Box } from "@mui/material";
import { useRouter } from 'next/router'
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { assignMonths, toTitleCase } from 'helpers/StringUtils';
import ImageCatalog from '@components/arbolado/ImageCatalog';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

export default function FichaInformativa(props) {
  const tree = props.data;
  const imageServer = 'http://siee.mpiochih.gob.mx/imagenes_catalogo';

  const months = assignMonths(tree.FLORACION)

  const color = tree.FLORACION === 'NA' ? '#8FA29C' : '#139C78';
  console.log(tree.CANTIDAD_IMAGENES);
  console.log(tree.NOMBRE_IMAGEN)
  console.log(tree.IMAGENES_AUTOR)
  console.log(tree.URL_AUTOR)

  return (
    <>
      <Head>
        <title>{tree?.NOMBRE_CIENTIFICO}</title>
        <meta name="description" content={tree?.DESCRIPCION} />
      </Head>
      <Container sx={{ mb: 3, mt: 3 }}>
        <Box sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
          <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            <div dangerouslySetInnerHTML={{ __html: tree.NOMBRE_COMUN }} />
          </Typography>
          <br></br>
          <Grid container justifyContent='center'>
            <Box
              sx={{
                maxHeight: { xs: 500, md: 400 },
                maxWidth: { xs: 500, md: 400 }
              }}
              component="img" src={`${imageServer}/${tree.NOMBRE_CIENTIFICO}/${tree.NOMBRE_IMAGEN}_1.jpg`} >
            </Box>
          </Grid>
          <Grid container justifyContent='center'>
            <Typography>{toTitleCase(tree.NOMBRE_CIENTIFICO)}</Typography>
          </Grid>
        </Box>
        <Grid >
          <List>
            <Grid container  >
              <Grid item xs={6} >
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Familia" secondary={toTitleCase(tree.FAMILIA)} />
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid item xs={6}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Origen" secondary={toTitleCase(tree.ORIGEN)} />
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid items xs={6} >
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Altura Promedio" secondary={tree.ESCALA} />
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid items xs={6}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Riego" secondary={toTitleCase(tree.RIEGO)} />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={4}>
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box style={{ textAlign: 'center' }}>
                    <ListItemText primary="Tipo de Hoja" secondary={toTitleCase(tree.TIPO_DE_HOJA)} />
                  </Box>
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid items xs={4}>
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box style={{ textAlign: 'center' }}>
                    <ListItemText primary="Tipo de Corteza" secondary={toTitleCase(tree.CORTEZA)} />
                  </Box>
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid items xs={4}>
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box style={{ textAlign: 'center' }}>
                    <ListItemText primary="Color de Flor" secondary={toTitleCase(tree.FLOR === 'NA' ? 'No visible' : tree.FLOR)} />
                  </Box>
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={12} style={{ textAlign: 'center' }}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Temporada de floración" />
                </ListItem>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',

                  }}
                >
                  {
                    months.map((month, index) => {
                      return (
                        <Box sx={{
                          p: 1,
                          mb: 1,
                        }}
                          key={index}
                        >
                          <LocalFloristIcon sx={{ color: color }} />
                          <ListItemText primary={toTitleCase(month.month === 'NA' ? 'No disponible' : month.month)} key={index} />
                        </Box>
                      )
                    })
                  }
                </Box>

                <Divider component="li" />
              </Grid>

              <Grid items xs={12} style={{ textAlign: 'center' }}>
                <Box >
                  <Divider component="li" />
                </Box>
              </Grid>

              <Grid items xs={12}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Permanencia de las hojas" secondary={toTitleCase(tree.PERMANENCIA_HOJAS)} />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={12}>
              </Grid>

              <Grid items xs={12}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Características" secondary={tree.CARACTERISTICAS} />
                </ListItem>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText secondary={tree.DESCRIPCION} />
                </ListItem>
                <Divider component="li" />
              </Grid>


              <ListItem style={{ textAlign: 'center' }}>
                <ListItemText primary="Servicios ecosistémicos" />
              </ListItem>

              <Grid items xs={12} sm={6}>
                <ListItem>
                  <Box margin={5}
                    sx={{
                      height: 140,
                      width: 180,
                      maxHeight: { xs: 140, md: 140 },
                      maxWidth: { xs: 180, md: 180 }
                    }}
                    component="img" src="/images/arbolado/ficha/provision.png"></Box>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_PROVISION)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={12} sm={6}>
                <ListItem>
                  <Box margin={5}
                    sx={{
                      height: 140,
                      width: 180,
                      maxHeight: { xs: 140, md: 140 },
                      maxWidth: { xs: 180, md: 180 }
                    }}
                    component="img" src={"/images/arbolado/ficha/regulacion.png"}></Box>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_REGULACION)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={12} sm={6}>
                <ListItem>
                  <Box margin={5}
                    sx={{
                      height: 140,
                      width: 180,
                      maxHeight: { xs: 140, md: 140 },
                      maxWidth: { xs: 180, md: 180 }
                    }}
                    component="img" src={"/images/arbolado/ficha/soporte.png"}></Box>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.USOS_Y_SERVICIOS)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={12} sm={6}>
                <ListItem>
                  <Box margin={5}
                    sx={{
                      height: 140,
                      width: 180,
                      maxHeight: { xs: 140, md: 140 },
                      maxWidth: { xs: 180, md: 180 }
                    }}
                    component="img" src={'/images/arbolado/ficha/cultural.png'}></Box>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_CULTURALES)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={6} sm={4}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Provisión" secondary="Sapindacae" />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={6} sm={4}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Riesgos o precauciones" secondary={toTitleCase(tree.PRECAUCIONES)} />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={6} sm={4}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Características" secondary="Sapindacae" />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={6} sm={12}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary="Usos" secondary="Sapindacae" />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid
                items
                xs={12}
                sm={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ImageCatalog qty={tree.CANTIDAD_IMAGENES} imgName={tree.NOMBRE_IMAGEN} autores={tree.IMAGENES_AUTOR} nombreCientifico={tree.NOMBRE_CIENTIFICO} />
              </Grid>

            </Grid>
          </List>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const idArbol = context.params.idArbol;
  const res = await fetch(
    `${process.env.ARBOLADO_BASE_URL}/biblioteca/identifica/${idArbol}`
  );
  const data = await res.json();

  return {
    props: { data: data },
  }
}


