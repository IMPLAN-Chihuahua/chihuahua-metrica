import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import MathJax from "react-mathjax";

const Formula = ({formula}) => {
    if (formula === null) {
        return <FormulaNotExists />
    } else {
        return <FormulaExists formula={formula} />
    }
}

function FormulaExists({formula}) {
    return (
        <>
            <Grid sx={ theme => (
                {
                borderRadius:'5px', 
                bgcolor: 'cardInformation.main', 
                color:'white',
                height:'96%', 
                mt:'5%',
                ml:'5%', 
                textAlign:'center', 
                width:'95%',
                [theme.breakpoints.down('md')]: {
                width:'100%',
                ml:'0', 
                },
                })}>
                <Box sx={{ml:'10%',mr:'10%'}}>
                    <br />
                    <h2>Formula</h2>
                    <MathJax.Provider>
                    <h1 className="formulaText"><MathJax.Node inline formula={formula.ecuacion} /></h1>
                    </MathJax.Provider>
                    <h3>Descripción</h3>
                    <p>{formula.descripcion}</p>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                    <br />
                </Box>
            </Grid>
        </>
    )
}

function FormulaNotExists() {
    return (
        <>
            <Grid sx={ theme => (
            {
            borderRadius:'5px', 
            bgcolor: 'cardInformation.main', 
            color:'white',
            height:'96%', 
            mt:'5%',
            textAlign:'center', 
            width:'95%',
            [theme.breakpoints.down('md')]: {
            width:'100%',
            },
            })}>
                <Box>
                    <br />
                    <h1 className="formulaText">¡No hay fórmula disponible para este indicador!</h1>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                </Box>
            </Grid>
        </>
    )
}

export default Formula;