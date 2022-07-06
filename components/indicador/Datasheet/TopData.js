import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
import Typography from '@mui/material/Typography';
import Title from "@components/commons/Title";
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton'
import { useCallback, useState } from 'react';
import { Chip } from '@mui/material';
import JsFileDownloader from 'js-file-downloader';

const DOC_FORMATS = ['csv', 'pdf', 'json'];

const DocumentButton = ({ indicadorId, format, icon, ...props }) => {
  const [isLoading, setLoading] = useState(false);
  const fetchDocument = useCallback(() => {
    setLoading(true)
    new JsFileDownloader({
      url: `${process.env.INDICADORES_BASE_URL}/documentos/${indicadorId}/${format}`,
      nameCallback: () => `indicador-${indicadorId}.${format}`
    })
      .finally(_ => setLoading(false))
  }, [])

  return (
    <LoadingButton
      loading={isLoading}
      variant="outlined"
      color="primary"
      startIcon={icon || <DownloadIcon />}
      fullWidth
      loadingPosition='start'
      onClick={fetchDocument}
      {...props}
    >{format}</LoadingButton>
  );
};


const TopData = (info) => {
  const { info: indicador } = info;
  const getDocumentIconSrc = useCallback((format) => {
    switch (format) {
      case 'csv':
        return '/csv_icon.svg';
      case 'pdf':
        return '/pdf_icon.svg';
      case 'json':
        return '/json_icon.svg';
      case 'xlsx':
        return '/xlsx_icon.svg';
      default:
        throw new Error('Invalid document format');
    }
  }, [])

  return (
    <Box component='section' sx={{ mb: 3 }}>
      <Box component='section' sx={{ mb: 2 }}>
        <Title variant='h3' component='h1'>{indicador.nombre}</Title>
        <Typography mb={1}>{indicador.definicion}</Typography>
        <Chip label={indicador.modulo?.temaIndicador} color='info' />
      </Box>

      <Title variant='h4' component='h2'>Datos abiertos</Title>
      <Grid item xs={6} sx={{ justifyContent: 'flex-start', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <Grid item xs={6} ml={1} mr={1}>
          <DocumentButton
            format='xlsx'
            indicadorId={indicador.id}
            icon={<Image src={getDocumentIconSrc('xlsx')} height={40} width={40} />} />
        </Grid>
        {DOC_FORMATS.map(format => (
          <Grid item xs={6} ml={1} mr={1} key={format}>
            <DocumentButton
              format={format}
              indicadorId={indicador.id}
              icon={<Image src={getDocumentIconSrc(format)} height={40} width={40} />}
            />
          </Grid>
        ))}
      </Grid>
    </Box>);
};

export default TopData;

