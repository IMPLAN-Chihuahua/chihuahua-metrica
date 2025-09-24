import Box from '@mui/material/Box';
import DownloadIcon from "@mui/icons-material/Download";
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton'
import { useCallback, useState } from 'react';
import { Alert, AppBar, Chip, Collapse, Container, IconButton, Slide, Snackbar, styled, Toolbar, useMediaQuery, useScrollTrigger } from '@mui/material';
import JsFileDownloader from 'js-file-downloader';
import { grey } from '@mui/material/colors';
import { useTheme } from '@emotion/react';

const DOC_FORMATS = ['xlsx', 'csv', 'pdf', 'json'];

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  width: '80px',
  maxHeight: '35px',
  textTransform: 'none',
  borderRadius: 25,
  backgroundColor: grey[100],
  color: theme.palette.getContrastText(grey[100]),
  '&:hover': {
    backgroundColor: grey[300],
    color: theme.palette.getContrastText(grey[300]),
  }
}))

const DocumentButton = ({ indicadorId, format, icon, showErrorMessage, ...props }) => {
  const [isLoading, setLoading] = useState(false);

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
    <StyledLoadingButton
      loading={isLoading}
      variant="text"
      color="primary"
      startIcon={icon || <DownloadIcon />}
      loadingPosition='start'
      onClick={fetchDocument}
      {...props}
    >{format}</StyledLoadingButton>
  );
};


const TopData = (info) => {
  const { info: indicador } = info;
  console.log(indicador)
  return (
    <section>
      <IndicadorAppBar indicador={indicador} />
      <IndicadorHeader indicador={indicador} />
      <Typography>{indicador.definicion}. {indicador.ods
        ? `Este indicador sigue el objetivo de desarrollo sostenible "${indicador.ods.titulo}", el cual busca "${indicador.ods.descripcion}".`
        : ''}</Typography>
      <IndicadorElif elif={indicador.elif} />
    </section >
  );
};

const IndicadorElif = ({ elif }) => {

  if (!elif || elif.length === 0) return null;

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant='h5' component='h2'>Explicación rápida</Typography>
      <Typography>{elif}</Typography>
    </Box>
  )
}

const IndicadorHeader = ({ indicador, sx }) => {
  return (
    <Box display='flex' sx={{ mb: 2, gap: 2, ...sx }} flexWrap='wrap'>
      <Typography sx={{ flex: 3 }} variant='h4' component='h1'>{indicador.nombre}</Typography>
      <DescargablesSection indicadorId={indicador.id} />
    </Box>
  )
}


const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: grey[50],
  color: theme.palette.getContrastText(grey[50]),

}))

const IndicadorAppBar = ({ indicador }) => {
  const theme = useTheme();
  const smallDevices = useMediaQuery(theme.breakpoints.down('md'))
  const trigger = useScrollTrigger({
    threshold: smallDevices ? 300 : 150,
    disableHysteresis: true
  });

  return (
    <Slide appear={false} direction='down' in={trigger}>
      <CustomAppBar>
        <Toolbar>
          <Container>
            <IndicadorHeader indicador={indicador} sx={{ mt: 2 }} />
          </Container>
        </Toolbar>
      </CustomAppBar>
    </Slide>
  )
}


const DescargablesSection = ({ indicadorId }) => {
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
        {DOC_FORMATS.map((format, i) => (
          <DocumentButton
            key={i}
            format={format}
            indicadorId={indicadorId}
            showErrorMessage={() => setOpen(true)}
            icon={<Image src={getDocumentIconSrc(format)} height={25} width={25} />}
          />
        ))}
      </Box>
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
    </>
  )
}

export default TopData;

