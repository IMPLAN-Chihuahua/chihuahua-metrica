import Information from "@components/indicador/Datasheet/Information";
import Formula from '@components/indicador/Datasheet/Formula';
import Grid from "@mui/material/Grid";
import Title from "@components/commons/Title";
import { numberWithCommas } from "helpers/FormatNumbers";
import { ArrowDownward, ArrowUpward, ErrorOutline } from "@mui/icons-material";
import { UNIDAD_MEDIDA, COBERTURA_GEOGRAFICA } from "../Indicador";
import { Typography } from "@mui/material";

const getCatalogo = (catalogos, idCatalogo) => {
  const catalogo = catalogos.find(catalogo => catalogo.idCatalogo === idCatalogo);
  return catalogo?.nombre;
}

const DataSheet = (datasheet) => {
  const { datasheet: data } = datasheet;

  const tendenciaIcon = data.tendenciaActual === 'Ascendente'
    ? <ArrowUpward sx={{ fontSize: '80px' }} />
    : data.tendenciaActual === 'Descendente'
      ? <ArrowDownward sx={{ fontSize: '80px' }} />
      : <ErrorOutline sx={{ fontSize: '80px' }} />;

  const INDICADOR_FIELDS = [{
    title: 'Último valor disponible',
    value: numberWithCommas(data.ultimoValorDisponible),
    helperText: getCatalogo(data.catalogos, UNIDAD_MEDIDA),
  }, {
    title: 'Tendencia actual',
    value: tendenciaIcon,
    helperText: data.tendenciaActual
  }, {
    title: 'Año de referencia',
    value: data.anioUltimoValorDisponible,
    helperText: 'Año al que se refiere el último valor disponible'
  }, {
    title: 'Cobertura geográfica',
    value: getCatalogo(data.catalogos, COBERTURA_GEOGRAFICA),
    helperText: 'Territorio al que se refiere la captación de datos'
  }]

  return (
    <>
      <Title variant='h4' component='h2'>Ficha técnica</Title>
      <Grid container spacing={1}>
        <Grid item container xs={12} md={6} spacing={1}>
          {INDICADOR_FIELDS.map(field => (
            <Grid item xs={12} md={6} key={field.value}>
              <Information title={field.title} helperText={field?.helperText}>
                {field.value}
              </Information>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          height: 'auto',
        }}>
          <Formula formula={data?.formula} fuente={data?.fuente} />
        </Grid>
      </Grid>
    </>
  );
};

export default DataSheet;
