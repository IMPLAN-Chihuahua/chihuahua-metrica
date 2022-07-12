import { numberWithCommas } from "helpers/FormatNumbers";
import { StyledTable, StyledTableBody, StyledTableHeaderCell, StyledTableCell } from "styles/Components/StyledTable";

const {
  TableContainer,
  TableHead,
  TableRow,
} = require("@mui/material");


const CustomTable = ({ data, lastSource, lastValue, lastYear }) => {
  return (
    <TableContainer>
      <StyledTable sx={{ maxWidth: '99%' }} aria-label='Tabla de datos históricos'>
        <caption>Tabla con la evolución de los datos registrados en los últimos 5 años.</caption>
        <TableHead>
          <TableRow>
            <StyledTableHeaderCell scope="col">Año</StyledTableHeaderCell>
            <StyledTableHeaderCell scope="col">Valor</StyledTableHeaderCell>
            <StyledTableHeaderCell scope="col">Fuente de información</StyledTableHeaderCell>
          </TableRow>
        </TableHead>
        <StyledTableBody>
          {data.map((historico) => (
            <TableRow hover key={historico.anio}>
              <StyledTableCell scope="row">{historico.anio}</StyledTableCell>
              <StyledTableCell scope="row">{numberWithCommas(historico.valor)}</StyledTableCell>
              <StyledTableCell scope="row">{historico.fuente}</StyledTableCell>
            </TableRow>
          ))}
          <TableRow>
            <StyledTableCell scope="row">{lastYear}</StyledTableCell>
            <StyledTableCell scope="row">{numberWithCommas(lastValue)}</StyledTableCell>
            <StyledTableCell scope="row">{lastSource}</StyledTableCell>
          </TableRow>
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default CustomTable;
