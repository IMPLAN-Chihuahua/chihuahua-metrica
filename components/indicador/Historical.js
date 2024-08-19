import Graph from "@components/indicador/BarChart";
import HistoricalTable from "@components/indicador/HistoricalTable";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const GraphBox = (props) => {
  const { history: data } = props;
  if (Object.keys(data.historicos).length === 0) {
    return <HistoricalValuesNotExists />;
  } else {
    return <HistoricalValues history={props} />;
  }
};

function HistoricalValues({ history }) {
  const { history: data } = history;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md>
        <HistoricalTable data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
      </Grid>
      <Grid item xs={12} md overflow='scroll'>
        <Graph data={data.historicos} lastValue={data.ultimoValorDisponible} lastYear={data.anioUltimoValorDisponible} lastSource={data.fuente} />
      </Grid>
    </Grid>
  );
};

function HistoricalValuesNotExists() {
  return (
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
          <span className="formulaText">¡No hay datos históricos disponibles para este indicador!</span>
          <br />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GraphBox;
