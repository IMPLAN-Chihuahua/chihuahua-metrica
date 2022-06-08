import Information from "@components/indicador/Datasheet/Information";
import Formula from '@components/indicador/Datasheet/Formula';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Title from "@components/commons/Title";

const DataSheet = (datasheet) => {
  const { datasheet: data } = datasheet;
  let formulaExists = data.Formula !== null;

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5%' }}>
        <Title variant='h4' component='h2'>Ficha técnica</Title>
      </Box>
      <Grid container item xs={12} md={12} >
        <Grid item xs={12} md={formulaExists ? 6 : 12}>
          <Grid
            container
            spacing={3}
            sx={{ mt: '1%' }}
          >
            <Information
              header={data.ultimoValorDisponible}
              title='Último valor disponible'>
              {data.catalogos[1].nombre}
            </Information>
            <Information
              header={data.tendenciaActual}
              title='Tendencia actual' >
              {data.tendenciaActual}
            </Information>
          </Grid>
          <Grid container spacing={3} sx={{ mt: '1%' }}>
            <Information
              header={data.anioUltimoValorDisponible}
              title='Año de referencia'>
              Año al que se refiere el último valor disponible
            </Information>
            <Information
              title='Cobertura geográfica'>
              Territorio al que se refiere la captación de datos
            </Information>
          </Grid>
        </Grid>

        <Grid item xs={12} md={formulaExists ? 6 : 12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
          <Formula formula={data.formula} />
        </Grid>
      </Grid>
    </>
  );
};

export default DataSheet;
