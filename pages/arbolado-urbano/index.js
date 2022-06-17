import PageBreadcrumb from '@components/commons/PageBreadcrumb';
import Title from '@components/commons/Title';
import { Android, GitHub, OpenInNew } from '@mui/icons-material';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import Head from 'next/head';

const ArboladoUrbano = () => {
  return (
    <>
      <Head>
        <title>Arbolado Urbano</title>
        <meta name="description" content="Proyecto indicadores de la ciudad de Chihuahua" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Container sx={{ marginTop: 3, marginBottom: 3 }}>
        <PageBreadcrumb crumbs={[{ text: 'Arbolado Urbano' }]} />
        <section>
          <Title variant='h3' component='h1'>Arbolado Urbano</Title>
          <Typography mb={3}>
            Reiciendis est ut quia ut. Id sint doloribus delectus dolorum.
            Praesentium enim excepturi ullam ex omnis culpa blanditiis.
            Ut velit ducimus dolor suscipit eos at praesentium voluptatem.
          </Typography>
        </section>
        <section>
          <Title variant='h4' component='h2'>Regla 3-30-300</Title>
          <Typography mb={3}>
            Hic nobis quisquam nihil. Eveniet quam nisi eaque labore nihil ut repudiandae.
            Possimus et qui quam recusandae qui ea quis officiis.
            Dolorem nostrum itaque iure rerum rerum. Impedit voluptatibus voluptatem.
            Alias architecto quas totam nobis minus.
          </Typography>
        </section>
        <section>
          <Title variant='h4' component='h2'>En nuestra ciudad...</Title>
          <section>
            <Grid container>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    backgroundColor: 'lightslategray',
                    margin: 1,
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    Mapa
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  lg={4}
                  sx={{ order: { xs: -1, lg: 1 } }}>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>0.23</Typography>
                    <Typography fontWeight='500'>Arboles</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>30</Typography>
                    <Typography fontWeight='500'>Areás verdes por persona</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    backgroundColor: 'lightslategray',
                    margin: 1,
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    Mapa
                  </Box>
                </Grid>
              </Grid>
              <Grid item container mb={{ xs: 2, md: 0 }}>
                <Grid item xs={12} lg={8}>
                  <Box sx={{
                    backgroundColor: 'lightslategray',
                    margin: 1,
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    Mapa
                  </Box>
                </Grid>
                <Grid
                  item
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  xs={12}
                  lg={4}
                  sx={{ order: { xs: -1, lg: 1 } }}>
                  <Box
                    sx={{
                      backgroundColor: '#ecf8f8',
                      padding: 5,
                      borderRadius: 5,
                      color: '#22577a'
                    }}
                  >
                    <Typography fontWeight='bold' textAlign='center' fontSize={30}>60%</Typography>
                    <Typography fontWeight='500' textAlign='center'>De la población vive</Typography>
                    <Typography fontWeight='500' textAlign='center'>cerca de un parque</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </section>
          <Title variant='h5' component='h3'>Fuente</Title>
          <Typography mb={1}>Et quod magni cumque. Eaque fugit ducimus mollitia est. Debitis cumque impedit magnam molestias voluptatem. Consequatur commodi doloribus aspernatur dolor.</Typography>
          <Button
            target='_blank'
            rel='noreferrer noopener'
            href='#'
            size='lg'
            variant='outlined'
            endIcon={<GitHub />}>Repositorio Github</Button>
        </section>
        <section>
          <Title variant='h4' component='h2' mt={3}>Censo del Arbolado</Title>
          <Typography>Magni architecto ea impedit eaque alias adipisci veritatis quos.</Typography>
          <section>
            <Title variant='h5' component='h3' mt={3}>Catalogo</Title>
            <ul>
              <li>synthesize extensible ROI</li>
              <li>strategize interactive networks</li>
              <li>monetize magnetic users</li>
              <li>reintermediate revolutionary channels</li>
            </ul>
          </section>
          <section>
            <Title variant='h5' component='h3' mt={3}>Aplicación ArbolMid</Title>
            <Typography>Quam et aut omnis reprehenderit exercitationem dolore. Eos animi aliquid amet iure sint. Autem quisquam omnis et quis qui.</Typography>
            <Button
              target='_blank'
              rel='noreferrer noopener'
              href='#'
              size='lg'
              variant='outlined'
              endIcon={<Android />}>Aplicación</Button>
          </section>
        </section>
      </Container>
    </>
  );
};

export default ArboladoUrbano;