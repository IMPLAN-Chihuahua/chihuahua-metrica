import VariableList from "@components/variable/VariableList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MathJax from "react-mathjax";

const Formula = ({ formula }) => {
    if (formula === null) {
        return <FormulaNotExists />
    } else {
        return <FormulaExists formula={formula} />
    }
}

function FormulaExists({ formula }) {
    return (
        <div>
            <style jsx>{`
              .formulaText {
                font-size: 2rem;
                font-weight: bold;
                color: --primary-on-main;
                margin-top: 10px;
                margin-bottom: 10px;
                overflow-x: auto;
                overflow-y: hidden;
                height: 80px;
              }

              .variableText {
                color: --primary-on-main;
                overflow-x: hidden;
                overflow-y: auto;
                padding-top: 10px;
                padding-bottom: 10px;
                height: 80px;
              }

              /* width */
              ::-webkit-scrollbar {
                width: 10px;
              }
              
              /* Track */
              ::-webkit-scrollbar-track {
                background: rgba(241, 241, 241, 0.1);
              }
  
              /* Handle */
              ::-webkit-scrollbar-thumb {
                background: #888;
                background: rgba(136, 136, 136, 0.4);
              }
  
              /* Handle on hover */
              ::-webkit-scrollbar-thumb:hover {
                background: rgba(85, 85, 85, 0.4);
              }
            `}</style>
            <Grid sx={theme => (
                {
                    borderRadius: '5px',
                    bgcolor: 'cardInformation.main',
                    color: 'white',
                    height: '96%',
                    mt: '5%',
                    ml: '5%',
                    width: '95%',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                        ml: '0',
                    },
                })}>
                <Box sx={{ ml: '10%', mr: '10%', pt: '3%'}}>
                    <Box sx={{ textAlign: 'center' }}>
                        <h1>Formula</h1>
                        <MathJax.Provider>
                            <h2 className='formulaText'><MathJax.Node inline formula={formula.ecuacion} /></h2>
                        </MathJax.Provider>
                    </Box>
                    <h3>Donde:</h3>
                    <div className='variableText'>
                        <VariableList variables={formula.variables} />
                    </div>
                    <h3>Descripción</h3>
                    <p>{formula.descripcion}</p>
                    <br />
                </Box>
            </Grid>
        </div>
    )
}

function FormulaNotExists() {
    return (
        <>
            <Grid sx={theme => (
                {
                    borderRadius: '5px',
                    bgcolor: 'cardInformation.main',
                    color: 'white',
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
                    <h1 className="formulaText">¡No hay fórmula disponible para este indicador!</h1>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                </Box>
            </Grid>
        </>
    )
}

export default Formula;