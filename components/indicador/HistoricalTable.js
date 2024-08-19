import { numberWithCommas } from "helpers/FormatNumbers";

const {
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableCell,
  TableBody,
} = require("@mui/material");


const HistoricalTable = ({ data, lastSource, lastValue, lastYear }) => {
  data = [...data, { anio: lastYear, valor: numberWithCommas(lastValue), fuente: lastSource }]
  const sortedData = data.sort((a, b) => a.anio - b.anio);

  return (
    <TableContainer>
      <Table aria-label='Tabla de datos históricos' sx={{ minWidth: 400 }}>
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Año</b></TableCell>
            <TableCell align="right"><b>Valor</b></TableCell>
            <TableCell align="left"><b>Fuente de información</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((historico) => (
            <TableRow hover key={historico.anio}>
              <TableCell scope="row" align="right">{historico.anio}</TableCell>
              <TableCell scope="row" align="right">{historico.valor}</TableCell>
              <TableCell scope="row" align="left">{historico.fuente}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant='caption' mt={1}>Tabla con la evolución de los datos registrados en los últimos años.</Typography>
    </TableContainer>
  );
};

export default HistoricalTable;
