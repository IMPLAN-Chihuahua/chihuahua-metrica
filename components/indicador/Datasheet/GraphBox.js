import React from 'react';
import Graph from "@components/indicador/Datasheet/Graph";
import CustomTable from "@components/indicador/Datasheet/CustomTable";
import Title from "@components/commons/Title";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const GraphBox = (history) => {
  const {history:data} = history;
  console.log(data.Historicos);
  if(Object.keys(data.Historicos).length === 0 ){
    return HistoricalValuesNotExists(history);
  }else {
    return HistoricalValuesExists(history);
  }
};

function HistoricalValuesExists(history){
  const {history:data} = history;
  return (
   <>
   <Title margin={'3% 0 0 0'} variant={'h4'} content="Valores históricos"></Title>
        <Grid container sx={{mt: '1%'}} spacing={4}>
          <Grid item xs={12} md={6}>
            <CustomTable data={data.Historicos} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Graph data={data.Historicos} />
          </Grid>
        </Grid>
  </>
  );
};

function HistoricalValuesNotExists(){
  return (
        <>
          <Grid item xs={12} md={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
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
                    <h1 className="formulaText">¡No hay datos históricos disponibles para este indicador!</h1>
                    <br />
                </Box>
            </Grid>
          </Grid>
        </>
  );
};

export default GraphBox;
