import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
import Typography from '@mui/material/Typography';
import Title from "@components/commons/Title";
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton'
import { useCallback, useState } from 'react';
import { Alert, Chip, Collapse, IconButton, Snackbar } from '@mui/material';
import JsFileDownloader from 'js-file-downloader';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/router';

const DOC_FORMATS = ['xlsx', 'csv', 'pdf', 'json'];

const DocumentButton = ({ indicadorId, format, icon, showErrorMessage, ...props }) => {
  const [isLoading, setLoading] = useState(false);
  //const router = useRouter();

  //const {idIndicador} = router.query;

  const fetchDocument = useCallback(() => {
    setLoading(true)
    new JsFileDownloader({
      url: `${process.env.INDICADORES_BASE_URL}/documentos/${indicadorId}/${format}`,
      nameCallback: () => `indicador-${indicadorId}.${format}`
    })
      .catch(_ => showErrorMessage())
      .finally(_ => setLoading(false))
  }, [indicadorId])

  return (
    <LoadingButton
      loading={isLoading}
      variant="outlined"
      color="primary"
      startIcon={icon || <DownloadIcon />}
      loadingPosition='start'
      onClick={fetchDocument}
      {...props}
      sx={{ width: '100px', height: '50px', maxHeight: '50px', maxWidth: '100px' }}
    >{format}</LoadingButton>
  );
};


const TopData = (info) => {
  const { info: indicador } = info;
  const [open, setOpen] = useState(false);
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

  const handleClose = () => setOpen(false);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
      >
        <Alert
          severity='error'
          onClose={handleClose}
          sx={{ width: '100%' }}
          closeText='Cerrar'
        >
          Hubo un error al descargar el documento
        </Alert>
      </Snackbar>
      <Box component='section' sx={{ mb: 3 }}>
        <Box component='section' sx={{ mb: 2 }}>
          <Title variant='h3' component='h1'>{indicador.nombre}</Title>
          <Typography mb={1}>{indicador.definicion}</Typography>
          <Chip label={indicador.modulo?.temaIndicador} color='info' />
        </Box>

        <Title variant='h4' component='h2'>Datos abiertos</Title>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {DOC_FORMATS.map(format => (
            <DocumentButton
              format={format}
              indicadorId={indicador.id}
              showErrorMessage={() => setOpen(true)}
              icon={<Image src={getDocumentIconSrc(format)} height={40} width={40} />}
            />
          ))}
        </Box>

      </Box>
    </>
  );
};

export default TopData;

