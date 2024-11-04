import Box from "@mui/material/Box";
import MathJax from "react-mathjax";
import { Typography } from "@mui/material";
import OracionList from "@components/variable/OracionList";
import VariablesTable from "@components/variable/VariablesTable";

const Formula = ({ formula }) => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
      {
        formula.isFormula === 'SI' ?
          (
            <div>
              <Typography fontSize={24} mb={1}>
                <MathJax.Provider>
                  <MathJax.Node inline formula={formula.ecuacion} />
                </MathJax.Provider>
              </Typography>
              <Typography mb={2}>{formula.descripcion}</Typography>
              <section style={{ maxWidth: '500px' }}>
                <VariablesTable variables={formula.variables} />
              </section>
            </div>
          )
          :
          (
            <>
              <div>
                <div className='formula-data'>
                  <Typography variant='h6' component='h3'>Descripcion</Typography>
                  <Typography mb={2}>{formula.descripcion}</Typography>
                </div>
                {
                  formula.variables.length > 0 && (
                    <>
                      <Typography variant='h6' component='h3'>Donde:</Typography>
                      <div className='variableText'>
                        <OracionList oraciones={formula.variables} />
                      </div>
                    </>
                  )
                }
              </div>
            </>
          )
      }
    </Box>
  )
}

export default Formula;