import theme from "styles/theme";
import { styled } from "@mui/material/styles";

const {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  tableCellClasses 
} = require("@mui/material");

const StyledTable = styled(Table)(( { theme }) => ({

    '& caption': {
        fontWeight: 'bold',
        textAlign: 'center',
        pr: 5,
        pl: 5,
        fontSize: '14px',
        color: theme.palette.primary.subtleMain,
    },
    '& td': {
        textAlign: 'center',
    },
    '& th': {
        textAlign: 'center',
    },
}));

const StyledTableBody = styled(TableBody)(( { theme }) => ({
    border: `2px solid ${theme.palette.secondary.main}`,
    borderTopStyle: "none",
    maxWidth: "500px",
}));

const StyledTableHeaderCell = styled(TableCell)(( { theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
        fontSize: '14px',
        textAlign: 'center',
        padding: '8px',
        '&:first-of-type': {
            borderTopLeftRadius: '10px',
        },
        '&:last-of-type': {
            borderTopRightRadius: '10px',
        },
    }
}));

const StyledTableCell = styled(TableCell)(( { theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: '14px',
        textAlign: 'center',
        padding: 'auto',
    }
}));


export { StyledTable, StyledTableBody, StyledTableHeaderCell, StyledTableCell };
