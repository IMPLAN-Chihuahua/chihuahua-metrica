import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
import Typography from '@mui/material/Typography';
import Title from "@components/commons/Title";
import NextLink from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import { Chip, Stack } from '@mui/material';

const DOC_FORMATS = [
  'csv',
  'pdf',
  'json'];

const DocumentButton = ({ indicadorId, format, icon, ...props }) => {
  return (
    <NextLink href={`${process.env.INDICADORES_BASE_URL}/documentos/${indicadorId}/${format}`} >
      <a download>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          {...props}
        >{icon || (<DownloadIcon />)}</Button>
      </a>
    </NextLink>
  );
};


const TopData = (info) => {
  const { info: data } = info;
  const getDocumentIconSrc = useCallback((format) => {
    switch (format) {
      case 'csv':
        return '/csv_icon.png';
      case 'pdf':
        return '/pdf_icon.png';
      case 'json':
        return '/json_icon.png';
      case 'xlsx':
        return '/xlsx_icon.png';
      default:
        throw new Error('Invalid document format');
    }
  }, [])

  return (
    <Box component='section' sx={{ mb: 3 }}>
      <Box component='section' sx={{ mb: 2 }}>
        <Title variant='h3' component='h1'>{data.nombre}</Title>
        <Typography mb={1}>{data.definicion}</Typography>
        <Chip label={data.modulo?.temaIndicador} color='info' />
      </Box>

      <Title variant='h4' component='h2'>Datos abiertos</Title>
      <Grid item xs={6} sx={{ justifyContent: 'flex-start', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6} ml={1} mr={1}>
          <DocumentButton
            format='xlsx'
            indicadorId={data.id}
            icon={<Image src={getDocumentIconSrc('xlsx')} height={40} width={40} />} />
        </Grid>
        {DOC_FORMATS.map(format => (
          <Grid item xs={6} ml={1} mr={1} key={format}>
            <DocumentButton
              format={format}
              indicadorId={data.id}
              icon={<Image src={getDocumentIconSrc(format)} height={40} width={40} />}
            />
          </Grid>
        ))}
      </Grid>
    </Box>);
};

export default TopData;

