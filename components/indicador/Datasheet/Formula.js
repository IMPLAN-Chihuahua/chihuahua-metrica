import VariableList from "@components/variable/VariableList";
import Box from "@mui/material/Box";
import MathJax from "react-mathjax";
import style from './Formula.module.css'
import { Typography } from "@mui/material";
import OracionList from "@components/variable/OracionList";

const Formula = ({ formula, fuente }) => {
  return (
    <>
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
                height: 250px;
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

              .no-formula {
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              .tost {
                height: 50%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
              
              .test {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 50%;
                padding-top: 10px;
                padding-bottom: 20px;
              }

            `}</style>
      <Box
        sx={{
          borderRadius: '5px',
          backgroundImage: 'url("/rectangle_3.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          width: '100%',
        }}>
        <Box sx={{ p: 3, borderRadius: '5px', display: 'flex', flexDirection: 'column', }} className={style.overlay}>
          <Typography
            variant='h4'
            component='h2'
            textAlign='center'>
            Fórmula
          </Typography>
          <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
            {formula === null || formula.ecuacion === 'Consultar fuente'
              ? (
                <>
                  <div className='tost'>
                    <Typography variant='h5' component='h2'>No hay fórmula disponible. Consulte la fuente de información para obtener más detalles.</Typography>
                  </div>
                  <div className="test">
                    <Typography variant='caption' component='h2' sx={{ wordBreak: 'break-word' }}>
                      {fuente}
                    </Typography>
                  </div>
                </>
              )
              :
              formula.isFormula === 'SI' ?
                (
                  <>
                    <div>
                      <div className='formula-data'>
                        <Typography variant='h5' component='h3'>Descripcion</Typography>
                        <Typography mb={2}>{formula.descripcion}</Typography>
                        <MathJax.Provider>
                          <Typography
                            textAlign='center'
                            variant='h4'
                            mb={2}
                            className={style['formula-text']}><MathJax.Node inline formula={formula.ecuacion} /></Typography>
                        </MathJax.Provider>
                      </div>
                      <Typography variant='h5' component='h3'>Donde:</Typography>
                      <div className='variableText'>
                        <VariableList variables={formula.variables} />
                      </div>
                    </div>
                    <div className="formula-exists">
                      <Typography variant='caption' component='h2' sx={{ wordBreak: 'break-word' }}>
                        {fuente}
                      </Typography>
                    </div>
                  </>
                )
                :
                (
                  <>
                    <div>
                      <div className='formula-data'>
                        <Typography variant='h5' component='h3'>Descripcion</Typography>
                        <Typography mb={2}>{formula.descripcion}</Typography>
                        {/* <MathJax.Provider>
                          <Typography
                            textAlign='center'
                            variant='h4'
                            mb={2}
                            className={style['formula-text']}><MathJax.Node inline formula={formula.ecuacion} /></Typography>
                        </MathJax.Provider> */}
                      </div>
                      <Typography variant='h5' component='h3'>Donde:</Typography>
                      <div className='variableText'>
                        <OracionList oraciones={formula.variables} />
                      </div>
                    </div>
                    <div className="formula-exists">
                      <Typography variant='caption' component='h2' sx={{ wordBreak: 'break-word' }}>
                        {fuente}
                      </Typography>
                    </div>
                  </>
                )
            }
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Formula;