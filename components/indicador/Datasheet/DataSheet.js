import React from 'react';
import Information from "@components/indicador/Datasheet/Information";
import MathJax from "react-mathjax";
import {Grid, Box } from "@mui/material";
import Title from "@components/commons/Title";

const DataSheet = (datasheet) => {
    const {datasheet:data} = datasheet;
  return (
  <>
  <Title margin={'3% 0 0 0'} variant={'h4'} content="Ficha técnica"></Title>
        <Grid container item xs={12} md={12} sx={{mt:`1%`}} >
                <Grid item xs={12} md={6} sx={{bgcolor: ''}}>
                        <Grid container spacing={3} sx={{mt: '1%'}}>
                            <Information header={data.ultimoValorDisponible} title='Último valor disponible' body={data.Unidad}/>
                            <Information header={data.tendenciaActual} title='Tendencia actual' body={data.tendenciaDeseada}/>
                        </Grid>
                        <Grid container spacing={3} sx={{mt: '1%'}}>
                            <Information header={data.anioUltimoValorDisponible} title='Año de referencia' body='Año al que se refiere el último valor disponible'/>
                            <Information header={data.CoberturaGeografica} title='Cobertura geográfica' body='Territorio al que se refiere la captación de datos'/>
                        </Grid>
                </Grid>
                
                <Grid item xs={12} md={6} sx={{bgcolor: '', display:'flex', justifyContent:'center', alignItems:'center'}}>
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
                    <h1 className="formulaText"><MathJax.Node inline formula={data.Formula.ecuacion} /></h1>
                    </MathJax.Provider>
                    <h3>Descripción</h3>
                    <p>{data.Formula.descripcion}</p>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                      </Box>
                    </Grid>
                </Grid>
            </Grid>
  </>
  );
};

export default DataSheet;
