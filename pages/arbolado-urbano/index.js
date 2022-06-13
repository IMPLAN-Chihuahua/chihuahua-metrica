import Title from '@components/commons/Title';
import { Android, GitHub, OpenInNew } from '@mui/icons-material';
import { Container, Typography, Box, Button } from '@mui/material';
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
          <Box display='flex' justifyContent='flex-start' alignItems='center'>
            <Box sx={{
              backgroundColor: 'aliceBlue',
              padding: 3,
              width: 'fit-content',
              borderRadius: 5,
              order: 1,
            }} mb={2}>
              <Typography
                textAlign='center'
                sx={{
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: 'primary.blue'
                }}>0.23</Typography>
              <Typography textAlign='center' fontWeight='bold'>Arboles por persona</Typography>
            </Box>
            <Box sx={{
              height: '300px',
              backgroundColor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 3,
              marginRight: 3,
              flexGrow: 1,
            }}>
              <Typography textAlign='center' sx={{ fontWeight: 500 }}>Mapa</Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='flex-start' alignItems='center'>
            <Box sx={{ backgroundColor: 'aliceBlue', padding: 3, width: 'fit-content', borderRadius: 5 }} mb={2}>
              <Typography
                textAlign='center'
                sx={{
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: 'primary.blue'
                }}>11.3%</Typography>
              <Typography textAlign='center' fontWeight='bold'>Areas verdes por persona</Typography>
            </Box>
            <Box sx={{
              height: '300px',
              backgroundColor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 3,
              flexGrow: 1,
              marginLeft: 3
            }}>
              <Typography textAlign='center' sx={{ fontWeight: 500 }}>Mapa</Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='flex-start' alignItems='center'>
            <Box sx={{
              backgroundColor: 'aliceBlue',
              padding: 3,
              width: 'fit-content',
              borderRadius: 5,
              order: 1
            }} mb={2}>
              <Typography
                textAlign='center'
                sx={{
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: 'primary.blue',
                }}>60%</Typography>
              <Typography textAlign='center' fontWeight='bold'>De la población</Typography>
              <Typography textAlign='center' fontWeight='bold'>vive a 300 metros de un parque</Typography>
            </Box>
            <Box sx={{
              height: '300px',
              backgroundColor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 3,
              flexGrow: 1,
              marginRight: 3,
            }}>
              <Typography textAlign='center' sx={{ fontWeight: 500 }}>Mapa</Typography>
            </Box>
          </Box>
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
          <Title variant='h4' component='h2' mt={3}>Catalogo</Title>
          <ul>
            <li>synthesize extensible ROI</li>
            <li>strategize interactive networks</li>
            <li>monetize magnetic users</li>
            <li>reintermediate revolutionary channels</li>
          </ul>
        </section>
        <section>
          <Title variant='h4' component='h2' mt={3}>Aplicación ArbolMid</Title>
          <Typography>Quam et aut omnis reprehenderit exercitationem dolore. Eos animi aliquid amet iure sint. Autem quisquam omnis et quis qui.</Typography>
          <Button
            target='_blank'
            rel='noreferrer noopener'
            href='#'
            size='lg'
            variant='outlined'
            endIcon={<Android />}>Aplicación</Button>
        </section>
      </Container>
    </>
  );
};

export default ArboladoUrbano;