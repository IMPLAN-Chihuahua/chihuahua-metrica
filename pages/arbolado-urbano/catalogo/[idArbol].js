import { Container, Typography, Grid, List, Icon} from '@mui/material';
import Head from "next/head";
import { Box } from "@mui/material";
import { useRouter } from 'next/router'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function FichaInformativa() {
  const router = useRouter();
  const tree = router.query;

  return (
    <>
      <Head>
        <title>{tree.nombre}</title>
        <meta name="description" content={tree?.sistema} />
      </Head>
      <Container sx={{ mb: 3, mt: 3 }}>
        <Box sx={{ marginTop: 3, marginBottom: 3 }} maxWidth='lg'>
          <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            <div dangerouslySetInnerHTML={{ __html: tree.nombre }}  />
          </Typography>
          <br></br>
          <Grid container justifyContent='center'>
            <Box 
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 500, md: 400 },
                maxWidth: { xs: 500, md: 400 }
              }}
              component="img" src={tree.arbol} >
              </Box>
          </Grid>
          <Grid container justifyContent='center'>
            <Typography>Arce negundo</Typography>
          </Grid>
        </Box>
        <Grid justifyContent='center'>
          <List>
            <ListItem >
              <ListItemText primary="Familia" secondary="Sapindacae" textAlign='center'/>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Origen" secondary="Nativa" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Altura Promedio" secondary={tree.avatar} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Box>
                <Box>
                  <Typography>Tipo de Hoja</Typography>
                  <Icon>{tree.avatar}</Icon>
                </Box>

              </Box>
              
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Riego" secondary="Media" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Temporada de floración" secondary="Meses" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Temporada de fructificación" secondary="Meses" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Permanencia de las hojas" secondary={tree.avatar} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText  secondary="Mucho texto" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Servicios ecosistemicos" />
            </ListItem>

            <ListItem>
              <Box margin={5}
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 }
              }}
              component="img" src={tree.arbol}></Box> 
              <Divider orientation="vertical" flexItem></Divider>
              <Typography margin={5}>Comercio</Typography>
            </ListItem>

            <ListItem>
            <Box margin={5}
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 }
              }}
              component="img" src={tree.arbol}></Box> 
              <Divider orientation="vertical" flexItem></Divider>
              <Typography margin={5}>Regulación</Typography>
            </ListItem>

            <ListItem>
            <Box margin={5}
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 }
              }}
              component="img" src={tree.arbol}></Box> 
              <Divider orientation="vertical" flexItem></Divider>
              <Typography margin={5}>Soporte</Typography>
            </ListItem>
            
            <ListItem>
            <Box margin={5}
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 100, md: 100 },
                maxWidth: { xs: 100, md: 100 }
              }}
              component="img" src={tree.arbol}></Box> 
              <Divider orientation="vertical" flexItem></Divider>
              <Typography margin={5}>Cultural</Typography>
            </ListItem>

            <ListItem>
              <ListItemText primary="Provisión" secondary="Sapindacae" />
            </ListItem>
            <Divider component="li" />

            <ListItem>
              <ListItemText primary="Riesgos o precauciones" secondary="Sapindacae" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Características" secondary="Sapindacae" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Usos" secondary="Sapindacae" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Referencias" secondary="Sapindacae" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Autor(es) de Imágenes" secondary="Nombres" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Muchas referencias" />
            </ListItem>
          </List>
        </Grid>
      </Container>
    </>
  );
}



