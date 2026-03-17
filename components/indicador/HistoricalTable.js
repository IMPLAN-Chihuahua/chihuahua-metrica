import { numberWithCommas } from "helpers/FormatNumbers";
import {
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableCell,
  TableBody,
  TablePagination
} from "@mui/material";
import { useState } from "react";

const HistoricalTable = ({ data, lastSource, lastValue, lastYear }) => {
  const hasLastYear = data.some((item) => Number(item.anio) === Number(lastYear));

  const combinedData = hasLastYear
    ? [...data]
    : [...data, { anio: lastYear, valor: lastValue, fuente: lastSource }];

  // Ordenamos y filtramos duplicados
  const sortedData = combinedData
    .filter((obj, index, self) => index === self.findIndex((el) => Number(el.anio) === Number(obj.anio)))
    .sort((a, b) => a.anio - b.anio);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
          {paginatedData.map((historico, index) => (
            <TableRow hover key={`table-row-${page}-${historico.anio || index}`}>
              <TableCell scope="row" align="right">{historico.anio}</TableCell>
              <TableCell scope="row" align="right">{numberWithCommas(historico.valor)}</TableCell>
              <TableCell scope="row" align="left">{historico.fuente}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {sortedData.length > 5 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página:"
          labelDisplayedRows={({ from, to, count }) => `${from} - ${to} de ${count}`}
        />
      )}

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