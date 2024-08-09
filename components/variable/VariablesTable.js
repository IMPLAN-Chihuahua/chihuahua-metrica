import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import MathJax from "react-mathjax";


const VariablesTable = ({ variables = [] }) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Variable</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Unidad de medida</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        variables.map((v, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <MathJax.Provider>
                                        <MathJax.Node inline formula={`${v.nombre}`} />
                                    </MathJax.Provider>
                                </TableCell>
                                <TableCell>{v.descripcion}</TableCell>
                                <TableCell>{v.idUnidad}<b>!</b></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default VariablesTable;