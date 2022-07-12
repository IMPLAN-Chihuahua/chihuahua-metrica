import Graph from "@components/indicador/Datasheet/Graph";
import CustomTable from "@components/indicador/Datasheet/CustomTable";
import Title from "@components/commons/Title";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const GraphBox = (history) => {
  const { history: data } = history;
  if (Object.keys(data.historicos).length === 0) {
    return HistoricalValuesNotExists(history);
  } else {
    return HistoricalValuesExists(history);
  }
};

function HistoricalValuesExists(history) {
  const { history: data } = history;
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Title variant='h4' component='h2'>Valores históricos</Title>
      <Grid container columnSpacing={1}>
        <Grid item xs={12} md={6}>
          <CustomTable data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Graph data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
        </Grid>
      </Grid>
    </Box>
  );
};

function HistoricalValuesNotExists() {
  return (
    <>
      <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid sx={theme => (
          {
            borderRadius: '5px',
            height: '96%',
            mt: '5%',
            textAlign: 'center',
            width: '95%',
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          })}>
          <Box>
            <br />
            <h1 className="formulaText">¡No hay datos históricos disponibles para este indicador!</h1>
            <br />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GraphBox;
