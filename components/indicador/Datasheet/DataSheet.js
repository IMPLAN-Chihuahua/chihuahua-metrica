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
      <Box sx={{display: 'flex', justifyContent: 'center', mt: '5%'}}>
        <Title variant='h4'>Ficha técnica</Title>
      </Box>
      <Grid container item xs={12} md={12} >
        <Grid item xs={12} md={formulaExists ? 6 : 12}>
          <Grid container spacing={3} sx={{ mt: '1%' }}>
            <Information header={data.ultimoValorDisponible} title='Último valor disponible' body={data.Unidad} />
            <Information header={data.tendenciaActual} title='Tendencia actual' body={data.tendenciaDeseada} />
          </Grid>
          <Grid container spacing={3} sx={{ mt: '1%' }}>
            <Information header={data.anioUltimoValorDisponible} title='Año de referencia' body='Año al que se refiere el último valor disponible' />
            <Information header={data.CoberturaGeografica} title='Cobertura geográfica' body='Territorio al que se refiere la captación de datos' />
          </Grid>
        </Grid>

        <Grid item xs={12} md={formulaExists ? 6 : 12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
          <Formula formula={data.Formula} />
        </Grid>
      </Grid>
    </>
  );
};

export default DataSheet;
