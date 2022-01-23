import theme from "styles/theme";

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
const { styled } = require("@mui/styles");

const StyledTable = styled(Table)(( { theme }) => ({

    '& caption': {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5
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
}));

const StyledTableCell = styled(TableCell)(( { theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontWeight: 'bold',
        fontSize: '14px',
        textAlign: 'center',
        padding: '8px',
        '&:first-child': {
            borderTopLeftRadius: '3334px',
        },
        '&:last-child': {
            borderTopRightRadius: '3334px',
        },
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },  
}));


export { StyledTable, StyledTableBody, StyledTableCell };
