import React from 'react';
import { Button, Grid, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "next/image";
import NextLink from 'next/link';

const TopData = (info) => {
  const {info:data} = info;
  console.log(data)
  return (
  <>
  <Grid container sx={{mt: '5%'}}>
         <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
           <Box sx={{
             bgcolor: 'black',
             width: '80%',
             height: '90%',
             position: 'relative',
           }}>
         <Image src="/images/implan-logo.webp" alt={data.nombre} layout="fill" objectFit="contain"  />
           </Box>
             
          </Grid>
          <Grid item xs={12} md={6} >
          <Grid item xs={12} sx={{color: 'text.primary'}}>
          <Box sx={{lineHeight: '30%'}}>
          <h2>{data.nombre}</h2>
          <h4>{data.Modulo.temaIndicador}</h4>
          </Box>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard of dummy text of the industry ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Grid>

          <Grid item xs={12} sx={{justifyContent: 'center', textAlign:'center', display:'flex', alignItems:'center'}}>
          <Grid item xs={3}>
          <Button variant="contained" color="primary" sx={{width: '90%'}} startIcon={<DownloadIcon/>}> CSV </Button>
          </Grid>
          <Grid item xs={3}>
          <NextLink href={`${process.env.INDICADORES_BASE_URL}/indicadores/${data.id}/json`} >
            <a download>
            <Button variant="contained" color="primary" sx={{width: '90%'}} startIcon={<DownloadIcon/>}> EXCEL </Button>
            </a>
          </NextLink>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained" color="primary" sx={{width: '90%'}} startIcon={<DownloadIcon/>}> JSON </Button>
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained" color="primary" sx={{width: '90%'}} startIcon={<DownloadIcon/>}> PDF </Button>
          </Grid>
          </Grid>
          </Grid>
          </Grid>
  </>);
};

export default TopData;

