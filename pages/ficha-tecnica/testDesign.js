import { Button, Container, Grid } from "@mui/material";


const testDesign = () => {
  return (
  <Container>
   <Grid container spacing={7}>
    
    <Grid item xs={12} md={6} sx={{backgroundColor: `gray`, opacity:'0.1'}} >
        <p>left side [image]</p>
    </Grid>
    
    
    <Grid item xs={12} md={6}>
    <Grid item xs={12} sx={{color: `text.primary`}}>
    <h2>Nombre de indicador</h2>
    <h4>Tema del indicador</h4>
    <p>Cuerpo</p>
    </Grid>
    <Grid item xs={12} >
    <Button>CSV</Button>
    <Button>EXCEL</Button>
    <Button>JSON</Button>
    <Button>PDF</Button>
    </Grid>
    </Grid>
   </Grid>
  </Container>);
};

export default testDesign