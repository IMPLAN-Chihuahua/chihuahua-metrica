import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { ButtonBase, Divider, Typography } from '@mui/material';

const Item = (props) => {
    const { indicador } = props;
    const updatedAt = props.indicador.updatedAt.split('T')[0];
    return (
        <Card sx={{ padding: 2 }} variant='outlined'>
            <Grid container justifyContent='center' rowSpacing={2} columnSpacing={2}>
                <Grid item sm container direction='column' sx={{ order: 1 }}>
                    <Grid item>
                        <Typography
                            variant='h6'
                            component='h3'
                            fontWeight='bold'
                        >
                            {indicador.nombre}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs
                        container
                        direction='row'
                        justifyContent='space-evenly'
                        rowSpacing={2}
                    >
                        <Grid
                            item
                            xs={4}
                            md={2}
                            textAlign='center'
                            container
                            display='flex'
                            flexDirection='column'
                            justifyContent='space-between'
                        >
                            <Typography
                                color='detail.main'
                                fontWeight='bold'
<<<<<<< HEAD
                                fontSize={25}
                            >{indicador.ultimoValorDisponible.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
=======
                                fontSize={20}
                                // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            >{indicador.ultimoValorDisponible}
>>>>>>> dev
                            </Typography>
                            <Typography>
                                Último Valor Disponible
                            </Typography>
                        </Grid>
                        <Divider
                            orientation='vertical'
                            variant='middle'
                            flexItem
                            sx={{ borderRightWidth: 3 }}
                        />
                        <Grid
                            item
                            xs={4}
                            md={2}
                            container
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='space-between'
                        >
                            <Typography
                                fontWeight='bold'
                            >
                                {indicador.UnidadMedida.nombre}
                            </Typography>
                            <Typography>
                                Unidad de Medida
                            </Typography>
                        </Grid>
                        <Divider
                            orientation='vertical'
                            variant='middle'
                            flexItem
                            sx={{
                                borderRightWidth: 3,
                                display: { xs: 'none', md: 'block' }
                            }}
                        />
                        <Grid
                            item
                            xs={4}
                            md={2}
                            container
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='space-between'
                        >
                            <Typography
                                fontWeight='bold'
                            >
                                {updatedAt}
                            </Typography>
                            <Typography>
                                Fecha de Referencia
                            </Typography>
                        </Grid>
                        <Divider
                            orientation='vertical'
                            variant='middle'
                            flexItem
                            sx={{ borderRightWidth: 3 }}
                        />
                        <Grid
                            item
                            xs={4}
                            md={2}
                            container
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='space-between'
                        >
                            <Typography
                                fontWeight='bold'
                            >
                                {indicador.CoberturaGeografica.nombre}
                            </Typography>
                            <Typography>
                                Cobertura Geográfica
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 3,
                            order: { xs: 1, md: 99 },
                            backgroundColor: 'aliceBlue'
                        }}
                    >
                        logo
                    </ButtonBase>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Item;