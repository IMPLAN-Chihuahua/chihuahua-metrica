import { Box } from "@mui/system";
import { StyledTable, StyledTableBody , StyledTableCell } from "styles/Components/StyledTable";
import createEmotionCache from "styles/createEmotionCache";

const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} = require("@mui/material");


const CustomTable = ({ data }) => {

  return (
    <Box>
    <TableContainer>
      <StyledTable sx={{maxWidth: 450}} aria-label='Tabla de datos históricos'>
        <caption>Tabla con la evolución de los datos registrados en los últimos 5 años.</caption>
        <TableHead>
          <TableRow>
            <StyledTableCell>Año</StyledTableCell>
            <StyledTableCell>Valor</StyledTableCell>
            <StyledTableCell>Fuente de información</StyledTableCell>
          </TableRow>
        </TableHead>
        <StyledTableBody>
         {data.map((historico) => (
            <TableRow key={historico.anio}>
              <TableCell>{historico.anio}</TableCell>
              <TableCell>{historico.valor}</TableCell>
              <TableCell>{historico.fuente}</TableCell>
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
    </Box>
  );
};

export default CustomTable;
