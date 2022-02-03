import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Title from "@components/commons/Title";
import NextLink from 'next/link';


const TopData = (info) => {
  const { info: data } = info;

  return (
    <>
      <Grid container sx={{ mt: '3%', alignItems: 'center' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{
            bgcolor: 'black',
            width: '300px',
            height: '300px',
            position: 'relative',
          }}>
            <Image src="/images/implan-logo.webp" alt={data.nombre} layout="fill" objectFit="contain" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <Grid item xs={12} sx={{ color: 'text.primary' }}>
            <Box sx={{ lineHeight: '30%' }}>
              <Title variant='h3' component='h1' margin='0 0 5% 0'>{data.nombre}</Title>
              <Typography fontSize={20} mb={1}>Modulo: {data.Modulo.temaIndicador}</Typography>
            </Box>
            <Typography mb={2}>{data.definicion}</Typography>
          </Grid>

          <Grid item xs={12} sx={{ justifyContent: 'center', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" sx={{ width: '95%' }} startIcon={<DownloadIcon />}>CSV</Button>
            </Grid>
            <Grid item xs={3}>
              <NextLink href={`${process.env.INDICADORES_BASE_URL}/indicadores/${data.id}/json`} >
                <a download>
                  <Button variant="contained" color="primary" sx={{ width: '90%' }} startIcon={<DownloadIcon />}>EXCEL</Button>
                </a>
              </NextLink>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" sx={{ width: '90%' }} startIcon={<DownloadIcon />}>JSON</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" sx={{ width: '90%' }} startIcon={<DownloadIcon />}>PDF</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>);
};

export default TopData;

