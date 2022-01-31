import React from 'react';
import Graph from "@components/indicador/Datasheet/Graph";
import CustomTable from "@components/indicador/Datasheet/CustomTable";
import Title from "@components/commons/Title";
import {Grid} from "@mui/material";

const GraphBox = (history) => {
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

export default GraphBox;
