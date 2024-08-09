import Graph from "pages/chihuahua-en-datos/indicadores/BarChart";
import CustomTable from "@components/indicador/Datasheet/CustomTable";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const GraphBox = (history) => {
  const { history: data } = history;
  if (Object.keys(data.historicos).length === 0) {
    return <HistoricalValuesNotExists />;
  } else {
    return <HistoricalValues history={history} />;
  }
};

function HistoricalValues({ history }) {
  const { history: data } = history;
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={12} md>
        <CustomTable data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
      </Grid>
      <Grid item xs={12} md>
        <Graph data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
      </Grid>
    </Grid>
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
