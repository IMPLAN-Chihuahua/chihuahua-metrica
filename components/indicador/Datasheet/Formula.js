import VariableList from "@components/variable/VariableList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MathJax from "react-mathjax";
import style from './Formula.module.css'
import { Typography } from "@mui/material";

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
            <Grid
                sx={theme => (
                    {
                        borderRadius: '5px',
                        backgroundImage: 'url("/rectangle_3.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
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
                <Box sx={{ p: 3, borderRadius: '5px' }} className={style.overlay}>
                    <Typography
                        variant='h4'
                        component='h2'
                        textAlign='center'>
                        Formula
                    </Typography>
                    <Typography variant='h5' mt={2} component='h3'>Descripcion</Typography>
                    <Typography mb={2}>{formula.descripcion}</Typography>
                    <MathJax.Provider>
                        <Typography textAlign='center' variant='h3' mb={2} className='formulaText'><MathJax.Node inline formula={formula.ecuacion} /></Typography>
                    </MathJax.Provider>
                    <Typography variant='h5' component='h3'>Donde:</Typography>
                    <div className='variableText'>
                        <VariableList variables={formula.variables} />
                    </div>
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
                    <h1 className="formulaText">¡No hay fórmula disponible para este indicador!</h1>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                </Box>
            </Grid>
        </>
    )
}

export default Formula;