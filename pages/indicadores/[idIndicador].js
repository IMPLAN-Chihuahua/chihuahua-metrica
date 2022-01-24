import { Button, Container, Grid, Box } from "@mui/material";
import Information from "@components/Indicador/Datasheet/Information";
import DownloadIcon from "@mui/icons-material/Download";
import Typography from "@mui/material/Typography";
import MathJax from "react-mathjax";
import Graph from "@components/Indicador/Datasheet/Graph";
import CustomTable from "@components/Indicador/Datasheet/CustomTable";

import {
  ImageButton,
  ImageSrc,
  Image,
  ImageBackdrop,
  ImageMarked,
  mapImage,
} from "styles/Components/ImageButton";

export default function FichaTecnica(props) {
  const formulaTest = `k_{n+1}=x^2 + k_n^2+ k_n^2+ k_n^2+ k_n^2+ k_n^2+ k_n^2`;
  const data = props.data;

  return (
    <>
      <Container>
        <style jsx>
          {`
            .imgTop {
              padding-left: 10%;
              padding-right: 10%;
              width: 100%;
              height: auto;
            }
            .formulaText {
              font-size: 2rem;
              font-weight: bold;
              color: white;
              margin-top: 10px;
              margin-bottom: 10px;
              overflow-x: auto;
              overflow-y: hidden;
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
          `}
        </style>

        {/*=============================== Hea ======================================*/}
        <Grid container sx={{ mt: "2%" }}>
          <Grid item xs={12} md={6}>
            <img src={data.urlImagen} alt={data.nombre} className="imgTop" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} sx={{ color: `text.primary` }}>
              <Box sx={{ lineHeight: "30%" }}>
                <h2>{data.nombre}</h2>
                <h4>{data.Modulo.temaIndicador}</h4>
              </Box>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                justifyContent: `center`,
                textAlign: `center`,
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: `90%` }}
                  startIcon={<DownloadIcon />}
                >
                  {" "}
                  CSV{" "}
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: `90%` }}
                  startIcon={<DownloadIcon />}
                >
                  {" "}
                  EXCEL{" "}
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: `90%` }}
                  startIcon={<DownloadIcon />}
                >
                  {" "}
                  JSON{" "}
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: `90%` }}
                  startIcon={<DownloadIcon />}
                >
                  {" "}
                  PDF{" "}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*=============================== Cuerpo ======================================*/}
        <Grid container item xs={12} md={12} >
                <Grid item xs={12} md={6} sx={{bgcolor: ''}}>
                        <Grid container spacing={3} sx={{mt: '1%'}}>
                            <Information header={data.ultimoValorDisponible} title='Último valor disponible' body='TBD databse'/>
                            <Information header={data.tendenciaActual} title='Tendencia actual' body={data.tendenciaDeseada}/>
                        </Grid>
                        <Grid container spacing={3} sx={{mt: '1%'}}>
                            <Information header={data.anioUltimoValorDisponible} title='Año de referencia' body='Año al que se refiere el último valor disponible'/>
                            <Information header={data.CoberturaGeografica} title='Cobertura geográfica' body='Territorio al que se refiere la captación de datos'/>
                        </Grid>
                </Grid>
                
                <Grid item xs={12} md={6} sx={{bgcolor: '', display:`flex`, justifyContent:`center`, alignItems:`center`}}>
                    <Grid sx={ theme => (
                      {
                      borderRadius:`5px`, 
                      bgcolor: 'cardInformation.main', 
                      color:`white`,
                      height:`96%`, 
                      mt:`5%`,
                      ml:`5%`, 
                      textAlign:`center`, 
                      width:`95%`,
                      [theme.breakpoints.down('md')]: {
                        width:`100%`,
                        ml:`0`, 
                      },
                      })}>
                      <Box sx={{ml:`10%`,mr:`10%`}}>
                    <br />
                    <h2>Formula</h2>
                     <MathJax.Provider>
                    <h1 className="formulaText"><MathJax.Node inline formula={formulaTest} /></h1>
                    </MathJax.Provider>
                    <h3>Descripción</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h3>Fuente de consulta</h3>
                    <p>TEST.INC</p>
                      </Box>
                    </Grid>
                </Grid>
            </Grid>
        {/*=============================== Graph ======================================*/}
        <Grid container sx={{mt: '5%'}}>
          <Grid item xs={12} md={6}>
            <CustomTable data={data.Historicos} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Graph data={data.Historicos} />
          </Grid>
        </Grid>
        {/*=============================== Mapa ======================================*/}
        <Grid container item sx={{mt: '5%', justifyContent:`center`, alignItems:`center`}} >
          <Box sx={ theme => (
            { 
            display: 'flex', 
            flexWrap: 'wrap', 
            minWidth: 300, 
            width: '100%',

          })
            }>
        <ImageButton
          focusRipple
          key={mapImage.title}
          style={{
            width: mapImage.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${mapImage.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                backgroundColor: 'black',
                opacity: 0.7,
                borderRadius: '10%',
              }}
            >
              Ver mapa
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    </Box>
          </Grid>
          </Container>
          </>
  );
}

export async function getServerSideProps(context) {
  const idIndicador = context.params.idIndicador;
  const res = await fetch(
    `${process.env.INDICADORES_BASE_URL}/modulos/1/indicadores/${idIndicador}`
  );
  const data = await res.json();
  if (res.status === 200) {
    return {
      props: { ...data },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
}
