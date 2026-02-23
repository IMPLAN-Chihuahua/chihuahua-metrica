import { numberWithCommas } from "helpers/FormatNumbers";
import {
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableCell,
  TableBody,
} from "@mui/material";

const HistoricalTable = ({ data, lastSource, lastValue, lastYear }) => {
  const hasLastYear = data.some((item) => item.anio === lastYear);

  const combinedData = hasLastYear
    ? [...data]
    : [...data, { anio: lastYear, valor: numberWithCommas(lastValue), fuente: lastSource }];

  const sortedData = [...combinedData].sort((a, b) => a.anio - b.anio);

  return (
    <TableContainer>
      <Table aria-label='Tabla de datos históricos' sx={{ minWidth: 400 }}>
        <TableHead sx={{ backgroundColor: 'rgba(240, 244, 248, 1)' }}>
          <TableRow>
            <TableCell align="right"><b>Año</b></TableCell>
            <TableCell align="right"><b>Valor</b></TableCell>
            <TableCell align="left"><b>Fuente de información</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((historico) => (
            <TableRow hover key={`table-${historico.anio}`}>
              <TableCell scope="row" align="right">{historico.anio}</TableCell>
              <TableCell scope="row" align="right">{historico.valor}</TableCell>
              <TableCell scope="row" align="left">{historico.fuente}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        variant='caption'
        mt={1}
        color="text.secondary"
        fontStyle="italic"
        display="block"
      >
        Tabla con la evolución de los datos registrados en los últimos años.
      </Typography>
    </TableContainer>
  );
};

export default HistoricalTable;