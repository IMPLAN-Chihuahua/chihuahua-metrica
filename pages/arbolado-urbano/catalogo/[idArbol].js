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
import LeafType from '@components/arbolado/LeafType';
import TreeBark from '@components/arbolado/TreeBark';
import FlowerColor from '@components/arbolado/FlowerColor';

import style from './FichaArbol.module.css';

export default function FichaInformativa(props) {
  const tree = props.data;
  const imageServer = 'https://arbol-mid-bucket.s3.us-west-1.amazonaws.com/imagenes_catalogo';

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
      <Container sx={{ mb: 3, mt: 2 }}>
        <Box sx={{ mt: 3, mb: 3, padding: 2, backgroundColor: '#B8E4E4' }} maxWidth='lg'>
          <Typography gutterBottom variant="h4" component="div" textAlign='center' sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            <div dangerouslySetInnerHTML={{ __html: tree.NOMBRE_COMUN }} />
          </Typography>
          <Grid container justifyContent='center'>
            <Typography variant="h6">{toTitleCase(tree.NOMBRE_CIENTIFICO)}</Typography>
          </Grid>
        </Box>
        <Grid container justifyContent='center' >
          <Box
            sx={{
              maxHeight: { xs: 400, md: 400 },
              maxWidth: { xs: 400, md: 400 }
            }}
            className={`${style.growShadow}`}
            component="img" src={`${imageServer}/${tree.NOMBRE_CIENTIFICO}/${tree.NOMBRE_IMAGEN}_1.jpg`} >
          </Box>
        </Grid>
        <br></br>

        <Grid >
          <List>
            <Grid container  >
              <Grid item xs={6} >
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Familia</Typography>} secondary={toTitleCase(tree.FAMILIA)} />
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid item xs={6}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Origen</Typography>} secondary={toTitleCase(tree.ORIGEN)} />
                </ListItem>
                <Divider component="li" />
              </Grid>
              <Grid items xs={6} >
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Altura promedio</Typography>} secondary={tree.ESCALA} />
                </ListItem>
              </Grid>
              <Grid items xs={6}>
                <ListItem style={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Riego</Typography>} secondary={toTitleCase(tree.RIEGO)} />
                </ListItem>
              </Grid>

              <Grid xs={12} sx={{ mb: 2 }}>
                <Divider component="li" />
              </Grid>

              <Grid items xs={4}>
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center' }} className={`${style.grow}`}>
                    <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Tipo de Hoja</Typography>} secondary={toTitleCase(tree.TIPO_DE_HOJA)} />
                    <Grid sx={{ flexDirection: 'column' }}>
                      <Box margin={2} >
                        <LeafType treeLeaf={tree.TIPO_DE_HOJA}></LeafType>
                      </Box>
                    </Grid>
                  </Box>
                </ListItem>
              </Grid>
              <Grid items xs={4}>
                <ListItem sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center' }} className={`${style.grow}`}>
                    <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Tipo de Corteza</Typography>} secondary={toTitleCase(tree.CORTEZA)} />
                    <Grid sx={{ flexDirection: 'column' }}>
                      <Box margin={2}>
                        <TreeBark treeBark={tree.CORTEZA}></TreeBark>
                      </Box>
                    </Grid>
                  </Box>
                </ListItem>
              </Grid>
              <Grid items xs={4}>
                <ListItem sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ textAlign: 'center' }} className={`${style.grow}`}>
                    <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Color de Flor</Typography>} secondary={toTitleCase(tree.FLOR === 'NA' ? 'No visible' : tree.FLOR)} />
                    <Grid sx={{ flexDirection: 'column' }}>
                      <Box margin={2}>
                        <FlowerColor flowerColor={tree.FLOR}></FlowerColor>
                      </Box>
                    </Grid>
                  </Box>
                </ListItem>
              </Grid>

              <Grid xs={12}>
                <Divider component="li" />
              </Grid>

              <Grid items xs={12} sx={{ textAlign: 'center' }}>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Temporada de floración</Typography>} />
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
                          className={`${style.floatBox}`}
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

              <Grid items xs={12} sx={{ textAlign: 'center' }}>
                <Box >
                  <Divider component="li" />
                </Box>
              </Grid>

              <Grid items xs={12}>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography style={{ fontWeight: 'bold' }} >Permanencia de las hojas</Typography>} secondary={toTitleCase(tree.PERMANENCIA_HOJAS)} />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={12}>
              </Grid>

              <Grid items xs={12}>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography style={{ fontWeight: 'bold' }} >Características</Typography>} secondary={tree.CARACTERISTICAS} />
                </ListItem>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText secondary={tree.DESCRIPCION} />
                </ListItem>
                <Divider component="li" />
              </Grid>


              <ListItem sx={{ textAlign: 'center' }}>
                <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Servicios ecosistémicos</Typography>} />
              </ListItem>

              <Grid items xs={12} sm={6}>
                <ListItem >
                  <Grid sx={{ flexDirection: 'column' }} className={`${style.sinkBox}`}>

                    <Box margin={5}
                      sx={{
                        height: 140,
                        width: 140,
                        maxHeight: { xs: 140, md: 140 },
                        maxWidth: { xs: 140, md: 140 },
                        borderStyle: 'solid',
                        borderColor: '#8EE3E3',
                        borderRadius: '50%'
                      }}
                      component="img" src="/images/arbolado/ficha/provision.png"></Box>

                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: -5 }}>Provisión</Typography>
                  </Grid>

                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_PROVISION)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={12} sm={6}>
                <ListItem>
                  <Grid sx={{ flexDirection: 'column' }} className={`${style.sinkBox}`}>
                    <Box margin={5}
                      sx={{
                        height: 140,
                        width: 140,
                        maxHeight: { xs: 140, md: 140 },
                        maxWidth: { xs: 140, md: 140 },
                        borderStyle: 'solid',
                        borderColor: '#8EE3E3',
                        borderRadius: '50%'
                      }}
                      component="img" src={"/images/arbolado/ficha/regulacion.png"}></Box>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: -5 }}>Regulación</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_REGULACION)}</Typography>
                </ListItem>
              </Grid>

              <Grid items xs={12} sm={6} sx={{ mb: 3 }}>
                <ListItem>
                  <Grid sx={{ flexDirection: 'column' }} className={`${style.sinkBox}`}>
                    <Box margin={5}
                      sx={{
                        height: 140,
                        width: 140,
                        maxHeight: { xs: 140, md: 140 },
                        maxWidth: { xs: 140, md: 140 },
                        borderStyle: 'solid',
                        borderColor: '#8EE3E3',
                        borderRadius: '50%'
                      }}
                      component="img" src={"/images/arbolado/ficha/soporte.png"}></Box>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: -5 }}>Soporte</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>Hábitats para las especies. Productividad primaria. Mantenimiento de la diversidad genética.</Typography>
                </ListItem>
              </Grid>



              <Grid items xs={12} sm={6} sx={{ mb: 3 }}>
                <ListItem>
                  <Grid sx={{ flexDirection: 'column' }} className={`${style.sinkBox}`}>
                    <Box margin={5}
                      sx={{
                        height: 140,
                        width: 140,
                        maxHeight: { xs: 140, md: 140 },
                        maxWidth: { xs: 140, md: 140 },
                        borderStyle: 'solid',
                        borderColor: '#8EE3E3',
                        borderRadius: '50%'
                      }}
                      component="img" src={'/images/arbolado/ficha/cultural.png'}></Box>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: -5 }}>Cultural</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem></Divider>
                  <Typography margin={5}>{toTitleCase(tree.SE_CULTURALES)}</Typography>
                </ListItem>
              </Grid>
              <br></br>
              <Grid xs={12}>
                <Divider component="li" />
              </Grid>


              <Grid items xs={6} >
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Riesgos o precauciones</Typography>} secondary={toTitleCase(tree.PRECAUCIONES)} />
                </ListItem>
                <Divider component="li" />
              </Grid>

              <Grid items xs={6}>
                <ListItem sx={{ textAlign: 'center' }}>
                  <ListItemText primary={<Typography sx={{ fontWeight: 'bold' }} >Usos y Servicios</Typography>} secondary={(tree.USOS_Y_SERVICIOS)} />
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


